import styled from '@emotion/styled'
import { PageHeader } from 'antd'

const StyledPageHeader = styled(PageHeader)`
  padding: 14px 2rem;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: none;
  .ant-page-header-heading {
    width: 100%;
    flex-wrap: nowrap;
    box-sizing: border-box;
  }
  .ant-page-header-heading-title {
    font-size: 19px;
    line-height: 1.5;
  }
  .ant-page-header-heading-extra {
    margin: 0;
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }
`

export { StyledPageHeader }
