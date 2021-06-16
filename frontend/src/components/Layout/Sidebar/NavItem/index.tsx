import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { NavItemFlyout, NavItemInnerDiv, NavItemOuterDiv } from './styles'

interface INavItem {
  to: string
  activeOnlyWhenExact?: boolean
  displayName?: string
}

const NavItem: React.FC<INavItem> = ({ children, to, activeOnlyWhenExact, displayName }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  })
  let history = useHistory()

  const handleClick = () => history.push(to)

  return (
    <NavItemOuterDiv className={`${match ? 'active' : ''}`} onClick={handleClick}>
      <NavItemInnerDiv className={`${match ? 'active' : ''}`}>{children}</NavItemInnerDiv>
      <NavItemFlyout className="flyout">
        <span>{displayName ? displayName : to.substr(1)}</span>
      </NavItemFlyout>
    </NavItemOuterDiv>
  )
}

export default NavItem
