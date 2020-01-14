import * as React from 'react';
import './App.css';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from './customer/components/Home';
import Create from './customer/components/Create';
import EditCustomer from './customer/components/Edit';
import ViewCustomer from './customer/components/View';

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}> Home </Link>
              </li>

              <li>
                <Link to={'/create'} id='create-customer-link'> Create Customer </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/create'} exact component={Create} />
            <Route path={'/edit/:id'} exact component={EditCustomer} />
            <Route path={'/view/:id'} exact component={ViewCustomer}/>
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);