import * as React from 'react';
import FormField from './FormField';
import {Customer} from '../models/Customer';

export interface IDataEntryFormProps {
  handleInputChanges: (e: React.FormEvent<HTMLInputElement>) => void;
  processFormSubmission: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  customer?: Customer;
}
export interface IFormState {}

class DataEntryForm extends React.Component<IDataEntryFormProps, IFormState> {

  public render() {
    const { handleInputChanges, processFormSubmission, loading, customer } = this.props;

    return (
      <form id={"create-post-form"} onSubmit={processFormSubmission} noValidate={true}>
        <FormField name="firstName" type="text" placeholder="Enter customer's first name" onChange={handleInputChanges} defaultValue={customer ? customer.firstName : ''}>First Name</FormField>
        <FormField name="lastName" type="text" placeholder="Enter customer's last name" onChange={handleInputChanges} defaultValue={customer ? customer.lastName : ''}>Last Name</FormField>
        <FormField name="email" type="email" placeholder="Enter customer's email address" onChange={handleInputChanges} defaultValue={customer ? customer.email : ''}>Email</FormField>
        <FormField name="company" type="text" placeholder="Enter customer's company" onChange={handleInputChanges} defaultValue={customer ? customer.company : ''}>Company</FormField>
        <FormField name="phone" type="text" placeholder="Enter customer's phone number" onChange={handleInputChanges} defaultValue={customer && customer.phone ? customer.phone.toString() : ''}>Phone number</FormField>
        <div className="form-group col-md-4 pull-right">
          <button className="btn btn-success" type="submit" id="create-customer">
            Create Customer
          </button>
          {loading &&
            <span className="fa fa-circle-o-notch fa-spin" />
          }
        </div>
      </form>
    )
  }
}

export default DataEntryForm;