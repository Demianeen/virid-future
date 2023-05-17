import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  Button,
  ButtonTheme,
} from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import Logo from 'shared/assets/images/logo.jpeg'
import { getNavbarItems } from '../../model/selectors/getNavbarItems/getNavbarItems'
import { NavbarItem } from '../NavbarItem/NavbarItem'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav
      className={classNames(styles.navbar, {}, [className])}
    >
      <Button
        theme={ButtonTheme.CLEAR}
        as={AppLink}
        to={RoutePath.main}
      >
        <img
          src={Logo}
          alt='logo'
          className={styles.logo}
        />
      </Button>
      <ul className={styles.section}>
        {getNavbarItems().map((item) => (
          <NavbarItem key={item.path} {...item} />
        ))}
      </ul>
      <ul
        className={classNames(styles.section, {}, [
          styles.auth,
        ])}
      >
        <NavbarItem text='Login' path={RoutePath.login} />
        <NavbarItem
          text='Sign Up'
          path={RoutePath.signup}
        />
      </ul>
    </nav>
  )
}
