/* istanbul ignore file */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedLayout from '../layouts/ProtectedLayout'
import NotFound from '../views/error/404'

const RootRoutes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={ProtectedLayout} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default RootRoutes
