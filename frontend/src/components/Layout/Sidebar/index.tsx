import React from 'react'
import { Link } from 'react-router-dom'
import { FlexBoxDiv, LogoName, TitleDiv } from './styles'
import NavItem from './NavItem'
import { ReactComponent as CompanyIcon } from './../../Icon/iconmonstr-building-46.svg'

const Sidebar: React.FC = () => {
  return (
    <FlexBoxDiv>
      <div>
        <TitleDiv>
          <Link to="/">
            <LogoName>
              Space
              <br />
              Goats
            </LogoName>
          </Link>
          <hr />
        </TitleDiv>

        <NavItem to="/companies">
          <CompanyIcon />
        </NavItem>
      </div>
    </FlexBoxDiv>
  )
}

export default Sidebar
