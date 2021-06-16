import { Button, Result } from 'antd'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

const NotFound: React.FC<RouteComponentProps> = (props) => (
  <div>
    <Result
      status="404"
      title="404 - Not Found"
      subTitle={`Sorry, the page "${props.location.pathname}" you tried visiting does not exist.`}
      extra={
        <Button type="primary" href="/">
          Back Home
        </Button>
      }
    />
  </div>
)

export default NotFound
