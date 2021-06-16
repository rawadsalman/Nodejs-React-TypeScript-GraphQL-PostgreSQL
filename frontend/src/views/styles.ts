import styled from '@emotion/styled'
import { Layout } from 'antd'

const StyledContent = styled(Layout.Content)`
  margin: 1rem 2rem;
  overflow: hidden;
`
const LayoutWithSecondaryMenu = styled('div')`
  min-height: 100%;
  padding-left: 52px;
`

export { StyledContent, LayoutWithSecondaryMenu }
