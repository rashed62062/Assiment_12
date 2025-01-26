import  { useState } from 'react'
import { FaUserShield, FaUser } from 'react-icons/fa'

const MyEmployee = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      type: 'Admin',
      image: 'https://i.postimg.cc/DZFLMKy2/certificate.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      type: 'Employee',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      type: 'Employee',
      image: 'https://via.placeholder.com/150',
    },
  ])
  const [showModal, setShowModal] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)

  const handleRemoveClick = (id) => {
    setSelectedMember(id)
    setShowModal(true)
  }

  const removeMember = () => {
    setTeamMembers(teamMembers.filter(member => member.id !== selectedMember))
    setShowModal(false)
  }

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <h2 className='text-3xl font-semibold text-gray-800 mb-6 text-center'>
        Team Members
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'
          >
            <div className='flex items-center space-x-4'>
              <img
                src={member.image}
                alt={member.name}
                className='w-16 h-16 rounded-full object-cover border-4 border-white shadow-md'
              />
              <div className='flex-grow'>
                <h3 className='text-lg font-semibold text-white'>{member.name}</h3>
                <div className='flex items-center space-x-2'>
                  {member.type === 'Admin' ? (
                    <FaUserShield className='text-white text-xl animate-bounce' />
                  ) : (
                    <FaUser className='text-white text-xl animate-pulse' />
                  )}
                  <span className='text-sm text-gray-200'>{member.type}</span>
                </div>
              </div>
              <button
                onClick={() => handleRemoveClick(member.id)}
                className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-200 ease-in-out'
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-6'>
        <p className='text-lg text-gray-700'>
          Total Members: {teamMembers.length}
        </p>
      </div>

      {/* Modal for Confirming Removal */}
      {showModal && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Are you sure you want to remove this member?
            </h3>
            <div className='flex justify-between'>
              <button
                onClick={removeMember}
                className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full'
              >
                Yes, Remove
              </button>
              <button
                onClick={() => setShowModal(false)}
                className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyEmployee
