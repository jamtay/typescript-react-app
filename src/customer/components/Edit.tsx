import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getCustomer, updateCustomer} from "../services/customer";
import {Customer} from "../models/Customer";

export interface IFormState {
  id: number,
  customer: Customer;
  submitSuccess: boolean;
  loading: boolean;
}

class EditCustomer extends React.Component<RouteComponentProps<any>, IFormState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      customer: {
        firstName: '',
        lastName: ''
      },
      loading: false,
      submitSuccess: false
    }
  }

  public async componentDidMount(): Promise<void> {
    const customer = await getCustomer(this.state.id);
    this.setState({customer: customer});
  }

  private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    this.setState({loading: true});
    await updateCustomer(this.state.customer, this.state.id);
    this.setState({submitSuccess: true, loading: false});
    setTimeout(() => {
      this.props.history.push('/');
    }, 1500);
  };

  private setValues = (values: any) => {
    this.setState({customer: {...this.state.customer, ...values}});
  };

  private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setValues({
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  public render() {
    const {submitSuccess, loading} = this.state;
    return (
        <div className="App">
          {this.state.customer &&
          <div>
            <h1> Customer List Management App</h1>
            <p> Built with React.js and TypeScript </p>

            <div>
              <div className={"col-md-12 form-wrapper"}>
                <h2> Edit Customer </h2>

                {submitSuccess && (
                    <div className="alert alert-info" role="alert">
                      Customer's details has been edited successfully </div>
                )}

                <form id={"create-post-form"} onSubmit={this.processFormSubmission}
                      noValidate={true}>
                  <div className="form-group col-md-12">
                    <label htmlFor="first_name"> First Name </label>
                    <input type="text" id="firstName" defaultValue={this.state.customer.firstName}
                           onChange={(e) => this.handleInputChanges(e)} name="firstName"
                           className="form-control" placeholder="Enter customer's first name"/>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="last_name"> Last Name </label>
                    <input type="text" id="lastName" defaultValue={this.state.customer.lastName}
                           onChange={(e) => this.handleInputChanges(e)} name="lastName"
                           className="form-control" placeholder="Enter customer's last name"/>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email" defaultValue={this.state.customer.email}
                           onChange={(e) => this.handleInputChanges(e)} name="email"
                           className="form-control" placeholder="Enter customer's email address"/>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="company"> Company </label>
                    <input type="text" id="company" defaultValue={this.state.customer.company}
                           onChange={(e) => this.handleInputChanges(e)} name="company"
                           className="form-control" placeholder="Enter customer's company"/>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="phone"> Phone </label>
                    <input type="text" id="phone" defaultValue={this.state.customer.phone}
                           onChange={(e) => this.handleInputChanges(e)} name="phone"
                           className="form-control" placeholder="Enter customer's phone number"/>
                  </div>
                  <div className="form-group col-md-4 pull-right">
                    <button className="btn btn-success" type="submit">
                      Edit Customer
                    </button>
                    {loading &&
                    <span className="fa fa-circle-o-notch fa-spin"/>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
          }
        </div>
    )
  }
}

export default withRouter(EditCustomer)