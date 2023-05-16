import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export const RequireAuth = ({
  children,
}: {
  children: JSX.Element
}) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (auth === undefined) {
    return (
      <Navigate
        to={RoutePath.login}
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}
