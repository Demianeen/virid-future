import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import type { NavbarItemArgs } from '../../types/sidebar'

export const getNavbarItems = () => {
  const items: NavbarItemArgs[] = [
    {
      path: RoutePath.main,
      text: 'Main Page',
    },
 
    
    {
      path: RoutePath.products,
      text: 'Products',
    },
    
    {
      path: RoutePath.about,
      text: 'Subscription',
    },
   
    {
      path: RoutePath.company,
      text: 'Company',
    },
    
    
    {
      path: RoutePath.support,
      text: 'Support',
    },
  ]
  return items
}
