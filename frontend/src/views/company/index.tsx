/* istanbul ignore file */
import React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import ListView from './CompanyListView'
import CompanyReadView from './CompanyReadView'

const CompanyRoutes: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => (
  <Switch>
    <Route exact path={`${match.path}`} component={ListView} />
    <Route path={`${match.path}/:id`} component={CompanyReadView} />
  </Switch>
)

export default CompanyRoutes
