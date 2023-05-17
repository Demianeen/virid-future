import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from 'shared/lib/hooks/useAuth/useAuth'

export const RequireAuth = ({
  children,
}: {
  children: JSX.Element
}) => {
  const navigate = useNavigate()
  const { login, isLogged } = useAuth({
    onAuth: () => navigate(1),
  })

  useEffect(() => {
    if (!isLogged) {
      navigate(-1)
      login()
    }
  }, [isLogged, login, navigate])

  if (!isLogged) {
    return null
  }

  return children
}
