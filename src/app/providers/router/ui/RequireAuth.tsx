import { useNavigate } from 'react-router-dom'
import netlifyIdentity from 'netlify-identity-widget'
import { useEffect } from 'react'

export const RequireAuth = ({
  children,
}: {
  children: JSX.Element
}) => {
  // const auth = useSelector(getUserAuthData)
  const auth = undefined
  const navigate = useNavigate()

  useEffect(() => {
    navigate(-1)
    netlifyIdentity.open('login')
    netlifyIdentity.on('login', (user) => {
      console.log('login', user)
      navigate(-1)
    })
  }, [navigate])

  if (auth === undefined) {
    return null
  }

  return children
}
