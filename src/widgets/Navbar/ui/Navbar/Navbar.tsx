import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  Button,
  ButtonTheme,
} from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import Logo from 'shared/assets/images/logo.jpeg'
import { HStack } from 'shared/ui/Stack'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'shared/lib/hooks/useAuth/useAuth'
import { getNavbarItems } from '../../model/selectors/getNavbarItems/getNavbarItems'
import { NavbarItem } from '../NavbarItem/NavbarItem'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const navigate = useNavigate()
  const { login, signup, logout, isLogged } = useAuth({
    onLogout: () => {
      navigate(RoutePath.main)
    },
  })

  return (
    <nav
      className={classNames(styles.navbar, {}, [className])}
    >
      <Button
        theme={ButtonTheme.CLEAR}
        as={AppLink}
        to={RoutePath.main}
        className={styles.logoBtn}
      >
        <img
          src={Logo}
          alt='logo'
          className={styles.logo}
        />
      </Button>
      <HStack gap={1} as='ul'>
        {getNavbarItems().map((item) => (
          <NavbarItem key={item.path} {...item} />
        ))}
      </HStack>
      <HStack as='ul' gap={1} className={styles.auth}>
        {!isLogged ? (
          <>
            <Button type='button' onClick={login}>
              Login
            </Button>
            <Button type='button' onClick={signup}>
              Sign up
            </Button>
          </>
        ) : (
          <Button type='button' onClick={logout}>
            Logout
          </Button>
        )}
      </HStack>
    </nav>
  )
}
