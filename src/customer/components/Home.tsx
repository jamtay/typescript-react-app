import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import {deleteCustomer, getCustomers} from "../services/customer";

interface IState {
  customers: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { customers: [] };
  }

  public async componentDidMount(): Promise<void> {
    const customers = await getCustomers();
    this.setState({ customers: customers });
  };

  public async deleteCustomer(id: number): Promise<void> {
    await deleteCustomer(id);
    const index = this.state.customers.findIndex(customer => customer._id === id);
    this.state.customers.splice(index, 1);
    this.props.history.push('/');
  };

  public render() {
    const customers = this.state.customers;
    return (
        <div>
          {customers.length === 0 && (
              <div className="text-center">
                <h2>No customers found at the moment</h2>
              </div>
          )}

          <div className="container">
            <div className="row">
              <table className="table table-bordered" id="customers-table">
                <thead className="thead-light">
                <tr>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
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
                            <Link to={`view/${customer._id}`} className="btn btn-sm btn-outline-secondary">View Customer </Link>
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