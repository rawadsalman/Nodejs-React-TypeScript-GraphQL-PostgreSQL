import React from 'react'
import { StyledPageHeader } from './styles'

interface IPageHeader {
  title: string
  withBackButton?: boolean
  onBackUrl?: string
  headerExtraMarkup?: any[]
}

const CustomPageHeader: React.FC<IPageHeader> = ({ title, withBackButton, onBackUrl, headerExtraMarkup }) => {
  return <StyledPageHeader title={title} extra={headerExtraMarkup} />
}

export default CustomPageHeader
