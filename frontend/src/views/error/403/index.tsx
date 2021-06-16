import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from '@emotion/styled'
import { Result, Button } from 'antd'

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
`

const RandomSorryGif = () => {
  const imageUrls = [
    'https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif',
    'https://media.giphy.com/media/tjluV258hamaY/giphy.gif',
    'https://media.giphy.com/media/3o7Zesyac4CuSN5rsA/giphy.gif',
    'https://media.giphy.com/media/w3Er0gW94cG8E/giphy.gif',
    'https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif',
    'https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif',
    'https://media.giphy.com/media/ZcCvqlZyPkK9a/giphy.gif',
    'https://media.giphy.com/media/aYcRuDTSNp0Kk/giphy.gif',
  ]
  const src = imageUrls[Math.floor(Math.random() * imageUrls.length)]

  return <StyledImg src={src} />
}

const NotFound: React.FC<RouteComponentProps> = (props) => (
  <div>
    <Result
      title="403 - Forbidden"
      subTitle={`You are not allowed to access "${props.location.pathname}".`}
      icon={<RandomSorryGif />}
      extra={
        <Button type="primary" href="/">
          Back Home
        </Button>
      }
    />
  </div>
)

export default NotFound
