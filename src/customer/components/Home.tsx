import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { deleteCustomer, getCustomers } from '../services/customer';

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
    <div className="uk-overflow-auto">
      <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
        <thead>
          <tr>
            <th className="uk-table-shrink" />
            <th scope="uk-table-expand">First name</th>
            <th scope="uk-table-expand">Last name</th>
            <th scope="uk-table-expand">Email</th>
            <th scope="uk-table-expand">Company</th>
            <th scope="uk-table-expand">Phone</th>
            <th scope="uk-table-expand">Actions</th>
          </tr>
        </thead>
        <tbody>
        {customers && customers.map(customer =>
            <tr key={customer._id}>
              <td><input className="uk-checkbox" type="checkbox" /></td>
              <td className="uk-table-link">{customer.firstName}</td>
              <td className="uk-table-link">{customer.lastName}</td>
              <td className="uk-table-link">{customer.email}</td>
              <td className="uk-table-link">{customer.company}</td>
              <td className="uk-table-link">{customer.phone}</td>
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
    )
  }
}