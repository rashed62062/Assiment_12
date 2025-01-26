import { format } from 'date-fns'
import { Helmet } from 'react-helmet-async'

const AllRequestsPage = () => {
  const deadline = '2025-03-20'; // Corrected to a valid date string
  const status = 'Pending'; // Example status value

  return (
    <>
      <Helmet>
        <title>My Orders</title>
      </Helmet>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow-lg rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className='bg-gradient-to-r from-blue-500 to-purple-500'>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Asset Type
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Asset Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Request Date
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Additional note
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Quantity
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-white text-left text-sm uppercase font-medium'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white hover:bg-gray-100 transition duration-200'>
                    <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                      Rashed
                    </td>
                    <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                      Returnable
                    </td>
                    <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                      rashed60@gmail.com
                    </td>
                    <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                      Mouse
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      {format(new Date(deadline), 'P')}
                    </td>
                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                      Lorem ipsum dolor
                    </td>
                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                      5
                    </td>
                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                      <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100 text-yellow-500'>
                        <span className='h-1.5 w-1.5 rounded-full bg-green-500'></span>
                        <h2 className='text-sm font-normal'>{status}</h2>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-6'>
                        <button
                          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-200'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 12.75 6 6 9-13.5'
                            />
                          </svg>
                        </button>

                        <button
                          className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-200'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllRequestsPage
