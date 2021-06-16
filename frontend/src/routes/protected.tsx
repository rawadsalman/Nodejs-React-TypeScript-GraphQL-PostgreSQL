import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import Index from '../views/index'
// import CompanyRoutes from '../views/company'
import CompanyRoutes from '../views/company/index'

import NotFound from '../views/error/404'

const ProtectedRoutes = ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={`${match.path}`} component={Index} />
    <Route path={`${match.path}companies`} component={CompanyRoutes} />
    <Route component={NotFound} />
  </Switch>
)

export default withRouter(ProtectedRoutes)
