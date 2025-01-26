import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import { AuthContext } from '../providers/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth(AuthContext)
  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={{ from: location }} replace='true' />
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute
