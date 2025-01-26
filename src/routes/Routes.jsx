import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PlantDetails from '../pages/PlantDetails/PlantDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import AddPlant from '../pages/Dashboard/Seller/AddPlant'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import Statistics from '../pages/Dashboard/Common/Statistics'
import MainLayout from '../layouts/MainLayout'
import MyInventory from '../pages/Dashboard/Seller/MyInventory'
import ManageOrders from '../pages/Dashboard/Seller/ManageOrders'
import MyOrders from '../pages/Dashboard/Customer/MyOrders'
import Asset from '../components/Dashboard/Sidebar/Menu/NorEmployee/Asset'
import TeamMembers from '../components/Dashboard/Sidebar/Menu/NorEmployee/TeamMembers'
import AssetPage from '../components/Dashboard/Sidebar/Menu/NorEmployee/AssetPage'
import AssetListpage from '../components/Dashboard/HRManager/AssetListpage'
import AllRequestsPage from '../components/Dashboard/Sidebar/Menu/NorEmployee/AllRequestsPage'
import MyEmployee from '../components/Dashboard/HRManager/MyEmployee'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/plant/:id',
        element: <PlantDetails />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-plant',
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-inventory',
        element: (
          <PrivateRoute>
            <MyInventory />
          </PrivateRoute>
        ),
      },
      {
        path: 'inventory',
        element: (
          <PrivateRoute>
            <Asset />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-team',
        element: (
          <PrivateRoute>
            <TeamMembers />
          </PrivateRoute>
        ),
      },
      {
        path: 'request-asset',
        element: (
          <PrivateRoute>
            <AssetPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'asset-list',
        element: (
          <PrivateRoute>
            <AssetListpage />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-an-asset',
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: 'all-requests',
        element: (
          <PrivateRoute>
            <AllRequestsPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-employee',
        element: (
          <PrivateRoute>
            <MyEmployee />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-orders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-orders',
        element: <ManageOrders />,
      },
    ],
  },
])
