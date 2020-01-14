import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getCustomer, updateCustomer } from '../services/customer';
import { Customer } from '../models/Customer';
import DataEntryForm from './DataEntryForm';
import SuccessMessage from './SuccessMessage';
import FormField from './FormField';

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
    const {submitSuccess, loading, customer} = this.state;
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
                    <SuccessMessage>
                      Customer's details has been edited successfully
                    </SuccessMessage>
                  )}
                  <DataEntryForm processFormSubmission={this.processFormSubmission}>
                    <FormField name="firstName" type="text" placeholder="Enter customer's first name" onChange={this.handleInputChanges} defaultValue={customer.firstName}>First Name</FormField>
                    <FormField name="lastName" type="text" placeholder="Enter customer's last name" onChange={this.handleInputChanges} defaultValue={customer.lastName}>Last Name</FormField>
                    <FormField name="email" type="email" placeholder="Enter customer's email address" onChange={this.handleInputChanges} defaultValue={customer.email}>Email</FormField>
                    <FormField name="company" type="text" placeholder="Enter customer's company" onChange={this.handleInputChanges} defaultValue={customer.company}>Company</FormField>
                    <FormField name="phone" type="text" placeholder="Enter customer's phone number" onChange={this.handleInputChanges} defaultValue={customer.phone ? customer.phone.toString() : ''}>Phone number</FormField>
                    <div className="form-group col-md-4 pull-right">
                      <button className="btn btn-success" type="submit" id="create-customer">
                        Edit Customer
                      </button>
                      {loading &&
                        <span className="fa fa-circle-o-notch fa-spin" />
                      }
                    </div>

                  </DataEntryForm>
                </div>
              </div>
            </div>
          }
        </div>
    )
  }
}

export default withRouter(EditCustomer)