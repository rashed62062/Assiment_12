import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { AuthContext } from "../../../providers/AuthProvider";

const PackageSection = () => {
  const { user } = useAuth(AuthContext)
  const [currentTeamCount, setCurrentTeamCount] = useState(3);
  const [packageLimit, setPackageLimit] = useState(5);
  console.log(setPackageLimit);
  console.log(user);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/50",
      isSelected: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/50",
      isSelected: false,
    },
    {
      id: 3,
      name: "Sam Wilson",
      image: "https://via.placeholder.com/50",
      isSelected: false,
    },
  ]);

  const navigate = useNavigate();

  const handleIncreaseLimit = () => {
    // navigate("/packages"); // Ensure the correct path is passed
    navigate("/dashboard/packages");

  };

  const handleAddToTeam = (userId) => {
    if (currentTeamCount < packageLimit) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, isSelected: true } : user
        )
      );
      setCurrentTeamCount((prev) => prev + 1);
    } else {
      alert("Package limit reached. Please increase your package.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Package Section</h2>
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-lg font-medium text-gray-700">Team Members: {currentTeamCount}</p>
          <p className="text-lg font-medium text-gray-700">Package Limit: {packageLimit}</p>
        </div>
        <button
          onClick={handleIncreaseLimit}
          className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600"
        >
          Increase Limit
        </button>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Users</h3>
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={user.isSelected}
                onChange={() => handleAddToTeam(user.id)}
                className="h-5 w-5 text-lime-500"
              />
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="text-lg font-medium text-gray-800">{user.name}</p>
            </div>
            <button
              onClick={() => handleAddToTeam(user.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add to Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageSection;
