const AddPlantForm = () => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center bg-gray-100 py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Add a New Asset
        </h2>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-lime-600">
                Basic Information
              </h3>
              {/* Name */}
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-gray-600">
                  Plant Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:ring-2 focus:ring-lime-500 rounded-md bg-white shadow-sm"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Plant Name"
                  required
                />
              </div>
              {/* Select Product Type */}
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="Select Product Type"
                  className="block text-gray-600"
                >
                  Product Type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-lime-300 focus:ring-2 focus:ring-lime-500 rounded-md bg-white shadow-sm"
                  name="product"
                >
                  <option value="Returnable">Returnable</option>
                  <option value="Non-returnable">Non-returnable</option>
                </select>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-lime-600">
                Additional Details
              </h3>
              {/* Quantity */}
              <div className="space-y-1 text-sm">
                <label htmlFor="quantity" className="block text-gray-600">
                  Quantity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:ring-2 focus:ring-lime-500 rounded-md bg-white shadow-sm"
                  name="quantity"
                  id="quantity"
                  type="number"
                  placeholder="Available Quantity"
                  required
                />
              </div>
           
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="w-full lg:w-1/2 mx-auto p-3 text-lg font-medium text-white transition duration-200 rounded-md shadow-md bg-lime-500 hover:bg-lime-600 focus:ring-2 focus:ring-lime-500 focus:ring-offset-1"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlantForm;
