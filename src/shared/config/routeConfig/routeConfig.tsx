import { AboutPage } from 'pages/AboutPage'
import { CompanyPage } from 'pages/CompanyPage'
import { MainPage } from 'pages/MainPage'
import { ResourcesPage } from 'pages/ProductsPage'
import { SupportPage } from 'pages/SupportPage'
import type { RouteProps } from 'react-router-dom'
import { PredictPage } from 'pages/PredictPage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  COMPANY = 'company',
  PRODUCTS = 'products',
  PREDICT = 'predict',
  SUPPORT = 'support',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.COMPANY]: '/company',
  [AppRoutes.PRODUCTS]: '/products',
  [AppRoutes.PREDICT]: '/features/predict',
  [AppRoutes.SUPPORT]: '/support',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> =
  {
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
    [AppRoutes.PRODUCTS]: {
      path: RoutePath.products,
      element: <ResourcesPage />,
    },
    [AppRoutes.PREDICT]: {
      path: RoutePath.predict,
      element: <PredictPage />,
      authOnly: true,
    },
    [AppRoutes.SUPPORT]: {
      path: RoutePath.support,
      element: <SupportPage />,
    },
  }
