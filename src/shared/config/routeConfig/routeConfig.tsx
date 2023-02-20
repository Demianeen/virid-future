import { AboutPage } from "pages/AboutPage";
import { AuthPage } from "pages/AuthPage";
import { CompanyPage } from "pages/CompanyPage";
import { MainPage } from "pages/MainPage";
import { ResourcesPage } from "pages/ResourcesPage";
import { SupportPage } from "pages/SupportPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  COMPANY = "company",
  RESOURCES = "resources",
  SUPPORT = "support",
  LOGIN = "login",
  SIGNUP = "signup",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.COMPANY]: "/company",
  [AppRoutes.RESOURCES]: "/resources",
  [AppRoutes.SUPPORT]: "/support",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.SIGNUP]: "/signup",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.COMPANY]: {
    path: RoutePath.company,
    element: <CompanyPage />,
  },
  [AppRoutes.RESOURCES]: {
    path: RoutePath.resources,
    element: <ResourcesPage />,
  },
  [AppRoutes.SUPPORT]: {
    path: RoutePath.support,
    element: <SupportPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <AuthPage />,
  },
  [AppRoutes.SIGNUP]: {
    path: RoutePath.signup,
    element: <AuthPage />,
  },
};
