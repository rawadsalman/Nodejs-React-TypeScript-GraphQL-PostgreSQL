import styled from '@emotion/styled'
import { Layout } from 'antd'

const SidebarLayoutWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`

const PageWrapper = styled(Layout)`
  background: transparent;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  h1 {
    font-size: 18px;
    line-height: 1.5;
  }

  h2 {
    font-size: 16px;
    line-height: 1.4;
  }
`

const SidebarWrapper = styled(Layout.Sider)`
  position: relative;
  z-index: 501;
  background: #1e272e;
`

export { SidebarLayoutWrapper, PageWrapper, SidebarWrapper }
