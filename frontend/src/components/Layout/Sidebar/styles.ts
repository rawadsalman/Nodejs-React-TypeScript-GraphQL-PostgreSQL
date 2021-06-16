import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const FlexBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.77);
`

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

const TitleDiv = styled.div`
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  hr {
    margin-top: 0;
    width: 70%;
  }
`

const LogoName = styled.h2`
  font-family: Raleway;
  color: white;
  font-size: 1.1rem;
  line-height: 0.8em;
  display: block;

  &:hover {
    animation: ${shake} 500ms ease infinite;
  }
`

export { FlexBoxDiv, TitleDiv, LogoName }
