import { Spin } from 'antd'
import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Spin data-testid="spinner" />
    </div>
  )
}

export default LoadingSpinner
