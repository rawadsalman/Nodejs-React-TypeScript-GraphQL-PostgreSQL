import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/Layout/Sidebar'
import ProtectedRoutes from '../../routes/protected'
import { PageWrapper, SidebarLayoutWrapper, SidebarWrapper } from './styles'

const ProtectedLayout: React.FC = () => {
  let location = useLocation()

  useEffect(() => {
    window.analytics.page()
  }, [location])

  return (
    <SidebarLayoutWrapper>
      <SidebarWrapper width={78}>
        <Sidebar />
      </SidebarWrapper>
      <PageWrapper>
        <ProtectedRoutes />
      </PageWrapper>
    </SidebarLayoutWrapper>
  )
}

export default ProtectedLayout
