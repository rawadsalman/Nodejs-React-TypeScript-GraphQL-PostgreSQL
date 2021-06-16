import styled from '@emotion/styled'
import { Button } from 'antd'

export default styled(Button)`
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  &:hover {
    border-color: transparent;
    opacity: 0.8;
  }
  &:active {
    border-color: transparent;
  }
  &:focus {
    border-color: transparent;
  }
`
