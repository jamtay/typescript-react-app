import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';

export interface IValues {
  [key: string]: any;
}

export interface IFormState {
  id: number,
  customer: any;
  values: IValues[];
}

class ViewCustomer extends React.Component<RouteComponentProps<any>, IFormState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      customer: {},
      values: []
    }
  }

  public componentDidMount(): void {
    axios.get(`http://localhost:3000/api/v1/contact/${this.state.id}`).then(data => {
      this.setState({customer: data.data});
    })
  }

  public render() {
    return (
        <div className="App">
          {this.state.customer &&
          <div>
            <h1> Customer List Management App</h1>
            <p> Built with React.js and TypeScript </p>

            <div>
              <div className={"col-md-12 form-wrapper"}>
                <h2> View Customer </h2>

                <div className="form-group col-md-12">
                  <p><b>First Name: </b>{this.state.customer.firstName}</p>
                </div>
                <div className="form-group col-md-12">
                  <p><b>Last Name: </b>{this.state.customer.lastName}</p>
                </div>

                <div className="form-group col-md-12">
                  <p><b>Email: </b>{this.state.customer.email}</p>
                </div>

                <div className="form-group col-md-12">
                  <p><b>Company: </b>{this.state.customer.company}</p>
                </div>

                <div className="form-group col-md-12">
                  <p><b>Phone: </b>{this.state.customer.phone}</p>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
    )
  }
}

export default withRouter(ViewCustomer)