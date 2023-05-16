import React, { memo } from 'react'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import type { NavbarItemArgs } from '../../model/types/sidebar'

interface NavbarItemProps extends NavbarItemArgs {
  className?: string
}

export const NavbarItem = memo(
  ({ className, text, path }: NavbarItemProps) => {
    return (
      <li className={className}>
        <Button as={AppLink} to={path}>
          {text}
        </Button>
      </li>
    )
  }
)

NavbarItem.displayName = 'NavbarItem'
