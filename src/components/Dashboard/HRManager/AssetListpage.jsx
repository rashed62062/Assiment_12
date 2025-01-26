import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AssetListpage = () => {
  const [search, setSearch] = useState("");
  const [stockFilter, setStockFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Sample static data
  const products = [
    {
      id: 1,
      name: "Laptop",
      type: "Returnable",
      quantity: 10,
      dateAdded: "2025-01-20",
      status: "Available",
    },
    {
      id: 2,
      name: "Monitor",
      type: "Non-returnable",
      quantity: 0,
      dateAdded: "2025-01-18",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "Keyboard",
      type: "Returnable",
      quantity: 5,
      dateAdded: "2025-01-22",
      status: "Available",
    },
  ];

  // Filtering logic
  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    .filter((product) => (stockFilter ? product.status === stockFilter : true))
    .filter((product) => (typeFilter ? product.type === typeFilter : true))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.quantity - b.quantity;
      if (sortOrder === "desc") return b.quantity - a.quantity;
      return 0;
    });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md bg-blue-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:bg-blue-100"
        />
      </div>

      {/* Filter Section */}
      <div className="mb-4 flex gap-6 items-center justify-between">
        <div className="flex gap-4">
          <select
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-md bg-blue-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          >
            <option value="">All Stock Status</option>
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-md bg-blue-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          >
            <option value="">All Types</option>
            <option value="Returnable">Returnable</option>
            <option value="Non-returnable">Non-returnable</option>
          </select>
        </div>

        {/* Sorting Section */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-3 border border-gray-300 rounded-md bg-blue-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          <option value="">Sort by Quantity</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* List Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border bg-white border-gray-300 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
            <p className="text-gray-700 mt-2">Type: {product.type}</p>
            <p className="text-gray-700">Quantity: {product.quantity}</p>
            <p className="text-gray-700">Date Added: {product.dateAdded}</p>
            <p className="mt-2">
              Status:{" "}
              <span
                className={`${
                  product.status === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.status}
              </span>
            </p>
            <div className="flex gap-3 mt-4">
            <NavLink to={`/update/${product.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out">
                Update
              </NavLink>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 ease-in-out">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetListpage;
