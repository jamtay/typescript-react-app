import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';


interface IState {
  customers: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { customers: [] }
  }

  public componentDidMount(): void {
    axios.get(`http://localhost:3000/api/v1/contact`).then(data => {
      this.setState({ customers: data.data })
    })
  }

  public deleteCustomer(id: number) {
    axios.delete(`http://localhost:3000/api/v1/contact/${id}`).then(data => {
      const index = this.state.customers.findIndex(customer => customer._id === id);
      this.state.customers.splice(index, 1);
      this.props.history.push('/');
    })
  }

  public render() {
    const customers = this.state.customers;
    return (
        <div>
          {customers.length === 0 && (
              <div className="text-center">
                <h2>No customer found at the moment</h2>
              </div>
          )}

          <div className="container">
            <div className="row">
              <table className="table table-bordered">
                <thead className="thead-light">
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Company</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {customers && customers.map(customer =>
                    <tr key={customer._id}>
                      <td>{customer.firstName}</td>
                      <td>{customer.lastName}</td>
                      <td>{customer.email}</td>
                      <td>{customer.company}</td>
                      <td>{customer.phone}</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group" style={{ marginBottom: "20px" }}>
                            <Link to={`edit/${customer._id}`} className="btn btn-sm btn-outline-secondary">Edit Customer </Link>
                            <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(customer._id)}>Delete Customer</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
    )
  }
}