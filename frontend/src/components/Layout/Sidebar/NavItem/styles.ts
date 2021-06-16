import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const transition = '350ms ease'
export const NAVITEM_HEIGHT = 64
export const SIDEBAR_WIDTH = 78

export const flyIn = keyframes`
  0% { transform: rotate(0deg); left: -200px}
  80% { transform: rotate(0deg); left: ${SIDEBAR_WIDTH}px; }
  100%{ transform: rotate(5deg); left: ${SIDEBAR_WIDTH}px; }
`

const NavItemInnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #1e272e;
  z-index: 2;
  transition: background-color ${transition};

  svg {
    fill: white;
    path {
      fill: white;
      transition: fill ${transition};
    }
  }

  &.active {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  &:hover {
    background-color: #2a343a;
  }
`

const NavItemOuterDiv = styled.div`
  position: relative;
  display: block;
  height: ${NAVITEM_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    cursor: pointer;

    .flyout {
      animation: ${flyIn} 250ms ease 1;

      left: ${SIDEBAR_WIDTH}px;
      transform: rotate(2deg);
      opacity: 1;
    }
  }
`

const NavItemFlyout = styled.div`
  z-index: 1;
  position: absolute;
  height: ${NAVITEM_HEIGHT}px;
  min-width: ${SIDEBAR_WIDTH}px;
  padding: 0 16px;
  overflow: hidden;

  opacity: 1;
  left: -500px;
  /* transition: all 250ms ease; */

  animation: none;

  font-family: Raleway;
  font-size: 1.1rem;
  color: white;

  background: transparent;
  text-transform: uppercase;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black,
    1px 0px 0px ${({ theme }) => theme.colors.primary}, 0px 1px 0px ${({ theme }) => theme.colors.primary},
    2px 1px 0px ${({ theme }) => theme.colors.primary}, 1px 2px 0px ${({ theme }) => theme.colors.primary},
    3px 2px 0px ${({ theme }) => theme.colors.primary}, 2px 3px 0px ${({ theme }) => theme.colors.primary},
    4px 3px 0px ${({ theme }) => theme.colors.primary}, 3px 4px 0px ${({ theme }) => theme.colors.primary},
    5px 4px 0px ${({ theme }) => theme.colors.primary}, 3px 5px 0px black, 6px 5px 0px black, -1px 2px 0 black,
    0 3px 0 black, 1px 4px 0 black, 2px 5px 0px black, 2px -1px 0 black, 3px 0 0 black, 4px 1px 0 black,
    5px 2px 0px black, 6px 3px 0 black, 7px 4px 0 black;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export { NavItemInnerDiv, NavItemOuterDiv, NavItemFlyout }
