import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
const Asset = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterType, setFilterType] = useState('');
  const [assets] = useState([
    {
      id: 1,
      name: 'Laptop',
      type: 'Returnable',
      requestDate: '2025-01-10',
      approvalDate: '2025-01-12',
      status: 'Approved',
    },
    {
      id: 2,
      name: 'Headphones',
      type: 'Non-returnable',
      requestDate: '2025-01-05',
      approvalDate: '',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Projector',
      type: 'Returnable',
      requestDate: '2025-01-07',
      approvalDate: '2025-01-08',
      status: 'Approved',
    },
    {
      id: 4,
      name: 'Projector',
      type: 'Returnable',
      requestDate: '2025-01-07',
      approvalDate: '2025-01-08',
      status: 'Approved',
    },
    // Add more assets here
  ]);

  const handleCancelRequest = (assetId) => {
    alert(`Request for Asset ID ${assetId} has been canceled!`);
    // Implement logic to cancel request on the server side.
  };

  const handleReturnAsset = (assetId) => {
    alert(`Asset ID ${assetId} has been returned!`);
    // Implement logic to mark asset as returned and update inventory.
  };

  const filteredAssets = assets.filter((asset) => {
    return (
      (asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === '') &&
      (asset.status.toLowerCase().includes(filterStatus.toLowerCase()) || filterStatus === '') &&
      (asset.type.toLowerCase().includes(filterType.toLowerCase()) || filterType === '')
    );
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleTypeFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const styles = StyleSheet.create({
    page: { padding: 20 },
    section: { marginBottom: 10 },
    heading: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
    table: { width: '100%', border: '1px solid #ccc', borderCollapse: 'collapse' },
    tableHeader: { backgroundColor: '#f0f0f0', textAlign: 'left', padding: 8 },
    tableRow: { borderBottom: '1px solid #ccc' },
    tableCell: { padding: 8 },
  });

  const MyDocument = ({ asset }) => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.heading}>Company Asset Report</Text>
        <View style={styles.section}>
          <Text>Asset Name: {asset.name}</Text>
          <Text>Asset Type: {asset.type}</Text>
          <Text>Request Date: {asset.requestDate}</Text>
          <Text>Approval Date: {asset.approvalDate}</Text>
        </View>
        <Text>Print Date: {new Date().toLocaleDateString()}</Text>
      </Page>
    </Document>
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Requested Assets</h2>

      {/* Search Section */}
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Search by Asset Name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-1/2 p-2 border rounded-md mr-4"
        />
        <div className="flex gap-4">
          <select
            value={filterStatus}
            onChange={handleStatusFilterChange}
            className="p-2 border rounded-md"
          >
            <option value="">Filter by Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
          </select>
          <select
            value={filterType}
            onChange={handleTypeFilterChange}
            className="p-2 border rounded-md"
          >
            <option value="">Filter by Type</option>
            <option value="returnable">Returnable</option>
            <option value="non-returnable">Non-returnable</option>
          </select>
        </div>
      </div>

      {/* Asset List Section */}
      <div className="space-y-6">
        {filteredAssets.map((asset) => (
          <div key={asset.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-700">{asset.name}</h3>
              <span
                className={`text-sm py-1 px-3 rounded-full ${
                  asset.status === 'Approved' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                }`}
              >
                {asset.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">Asset Type: {asset.type}</p>
            <p className="text-gray-600 mb-4">Request Date: {asset.requestDate}</p>
            <p className="text-gray-600 mb-4">
              Approval Date: {asset.status === 'Approved' ? asset.approvalDate : 'N/A'}
            </p>

            {/* Actions */}
            <div className="flex gap-4">
              {asset.status === 'Pending' && (
                <button
                  onClick={() => handleCancelRequest(asset.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Cancel Request
                </button>
              )}
              {asset.status === 'Approved' && asset.type === 'Returnable' && (
                <button
                  onClick={() => handleReturnAsset(asset.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Return Asset
                </button>
              )}
              {asset.status === 'Approved' && (
                <PDFDownloadLink document={<MyDocument asset={asset} />} fileName={`asset-${asset.id}-report.pdf`}>
                  {({ loading }) => (
                    <button
                      disabled={loading}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                    >
                      {loading ? 'Generating PDF...' : 'Print Asset Details'}
                    </button>
                  )}
                </PDFDownloadLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asset;
