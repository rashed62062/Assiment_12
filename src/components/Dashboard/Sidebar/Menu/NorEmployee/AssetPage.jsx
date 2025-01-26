import React, { useState } from "react";

const AssetPage = () => {
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("");
  const [type, setType] = useState("");
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [notes, setNotes] = useState("");

  // Static asset data
  const assets = [
    { id: "1", name: "Laptop", type: "Returnable", availability: "Available" },
    { id: "2", name: "Mouse", type: "Non-returnable", availability: "Available" },
    { id: "3", name: "Keyboard", type: "Returnable", availability: "Out of Stock" },
    { id: "4", name: "Monitor", type: "Returnable", availability: "Available" },
    { id: "5", name: "Chair", type: "Non-returnable", availability: "Out of Stock" },
  ];

  // Filter assets based on search, availability, and type
  const filteredAssets = assets.filter((asset) => {
    const matchesSearch = asset.name.toLowerCase().includes(search.toLowerCase());
    const matchesAvailability = availability
      ? asset.availability.toLowerCase() === availability.toLowerCase()
      : true;
    const matchesType = type ? asset.type.toLowerCase() === type.toLowerCase() : true;
    return matchesSearch && matchesAvailability && matchesType;
  });

  // Handle request submission (static handling)
  const handleRequest = () => {
    alert(`Request submitted for: ${selectedAsset.name}\nNotes: ${notes}`);
    setSelectedAsset(null); // Close modal
    setNotes(""); // Reset notes
  };

  return (
    <div className="p-6">
      {/* Search Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search assets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Filter Section */}
      <div className="mb-4 flex gap-4">
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Availability</option>
          <option value="available">Available</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Types</option>
          <option value="returnable">Returnable</option>
          <option value="non-returnable">Non-returnable</option>
        </select>
      </div>

      {/* Assets List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold">{asset.name}</h3>
            <p>Type: {asset.type}</p>
            <p>
              Availability:{" "}
              <span
                className={`${
                  asset.availability === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {asset.availability}
              </span>
            </p>
            <button
              disabled={asset.availability !== "Available"}
              onClick={() => setSelectedAsset(asset)}
              className={`mt-2 px-4 py-2 rounded-md ${
                asset.availability === "Available"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
            >
              Request
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold">Request Asset</h2>
            <p className="mt-2">Asset: {selectedAsset.name}</p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional notes..."
              className="w-full mt-4 p-2 border border-gray-300 rounded-md"
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setSelectedAsset(null)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleRequest}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetPage;
