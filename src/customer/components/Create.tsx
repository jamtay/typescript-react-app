import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Customer } from '../models/Customer';
import { createNewCustomer } from '../services/customer';

export interface IFormState {
  [key: string]: any;
  values: Customer[];
  submitSuccess: boolean;
  loading: boolean;
}

class Create extends React.Component<RouteComponentProps, IFormState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      values: [],
      loading: false,
      submitSuccess: false
    }
  }

  private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      company: this.state.company,
      phone: this.state.phone
    };

    this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
    await createNewCustomer(formData);
    setTimeout(() => {
      this.props.history.push('/');
    }, 1500);
  };

  private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  public render() {
    const { submitSuccess, loading } = this.state;

    return (
        <div>
          <div className={"col-md-12 form-wrapper"}>
            <h2> Create Post </h2>
            {!submitSuccess && (
                <div className="alert alert-info" role="alert">
                  Fill the form below to create a new post
                </div>
            )}
            {submitSuccess && (
                <div className="alert alert-info" role="alert">
                  The form was successfully submitted!
                </div>
            )}
            <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
              <div className="form-group col-md-12">
                <label htmlFor="firstName"> First Name </label>
                <input type="text" id="firstName" onChange={e => this.handleInputChanges(e)} name="firstName" className="form-control" placeholder="Enter customer's first name" />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="lastName"> Last Name </label>
                <input type="text" id="lastName" onChange={(e) => this.handleInputChanges(e)} name="lastName" className="form-control" placeholder="Enter customer's last name" />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="email"> Email </label>
                <input type="email" id="email" onChange={(e) => this.handleInputChanges(e)} name="email" className="form-control" placeholder="Enter customer's email address" />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="company"> Company </label>
                <input type="text" id="company" onChange={(e) => this.handleInputChanges(e)} name="company" className="form-control" placeholder="Enter customer's company" />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="phone"> Phone </label>
                <input type="text" id="phone" onChange={(e) => this.handleInputChanges(e)} name="phone" className="form-control" placeholder="Enter customer's phone number" />
              </div>
              <div className="form-group col-md-4 pull-right">
                <button className="btn btn-success" type="submit">
                  Create Customer
                </button>
                {loading &&
                  <span className="fa fa-circle-o-notch fa-spin" />
                }
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default withRouter(Create);