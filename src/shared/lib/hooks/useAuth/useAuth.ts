import type { User } from 'netlify-identity-widget'
import netlifyIdentity from 'netlify-identity-widget'
import { useCallback, useState } from 'react'

type AuthOptions = 'login' | 'signup'

interface UseLogin {
  onAuth?: (user: User) => void
  onLogout?: () => void
}

export const useAuth = ({ onAuth, onLogout }: UseLogin) => {
  const [isLogged, setIsLogged] = useState(
    netlifyIdentity.currentUser() !== null
  )

  const auth = useCallback(
    (method: AuthOptions) => {
      return () => {
        netlifyIdentity.open(method)
        netlifyIdentity.on('login', (user) => {
          netlifyIdentity.close()
          setIsLogged(true)
          onAuth?.(user)
        })
      }
    },
    [onAuth]
  )

  const logout = useCallback(() => {
    netlifyIdentity.logout()
    setIsLogged(false)
    onLogout?.()
  }, [onLogout])

  return {
    login: auth('login'),
    signup: auth('signup'),
    logout,
    isLogged,
  }
}
