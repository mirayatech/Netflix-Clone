import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../Context'

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext()

  if (!user) return <Navigate to="/" />

  return <>{children}</>
}
