import styled from '@emotion/styled'
import { Layout } from 'antd'

const ContentWrapper = styled(Layout.Content)`
  margin: 1rem 2rem;
  overflow: hidden;
`

const ScrollWrapper = styled('div')`
  overflow-y: auto;
  height: 100%;
`

const ContentWrapperNoMargin = styled(Layout.Content)`
  margin: 0;
  overflow: hidden;
`

const SingleColumnPageContainer = styled(Layout.Content)`
  margin: 0;
  display: flex;
  justify-content: center;
`

const SingleColumnPage = styled(Layout.Content)`
  max-width: 780px;
  flex-basis: 780px;
  flex-grow: 0;
  flex-shrink: 1;
`

export { ContentWrapper, ScrollWrapper, ContentWrapperNoMargin, SingleColumnPageContainer, SingleColumnPage }
