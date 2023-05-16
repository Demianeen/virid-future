import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
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
