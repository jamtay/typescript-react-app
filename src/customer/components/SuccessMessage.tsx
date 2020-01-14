import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IState {}

class SuccessMessage extends React.Component<RouteComponentProps, IState> {
  public render() {
    return (
        <div className="alert alert-info" role="alert" id="success-banner">
          {this.props.children}
        </div>
    )
  }
}

export default withRouter(SuccessMessage);