import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <ul className={styles.section}>
        <li>
          <AppLink to={RoutePath.main}>Main Page</AppLink>
        </li>
        <li>
          <AppLink to={RoutePath.company}>Company</AppLink>
        </li>
        <li>
          <AppLink to={RoutePath.about}>About Us</AppLink>
        </li>
        <li>
          <AppLink to={RoutePath.resources}>Resources</AppLink>
        </li>
        <li>
          <AppLink to={RoutePath.support}>Support</AppLink>
        </li>
      </ul>
      <ul className={classNames(styles.section, {}, [styles.auth])}>
        <li>
          <AppLink to={RoutePath.login}>Log in</AppLink>
        </li>
        <li>
          <AppLink to={RoutePath.signup}>Sign up</AppLink>
        </li>
      </ul>
    </nav>
  );
};
