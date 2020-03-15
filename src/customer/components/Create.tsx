import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Customer } from '../models/Customer';
import { createNewCustomer } from '../services/customer';
import DataEntryForm from './DataEntryForm';
import SuccessMessage from './SuccessMessage';
import FormField from './FormField';
import moment from 'moment';

export interface IFormState {
  [key: string]: any;
  values: Customer[];
  submitSuccess: boolean;
  loading: boolean;
  errorOccurred: boolean;
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
      submitSuccess: false,
      errorOccurred: false
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

    try {
      await createNewCustomer(formData);
      this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false, errorOccurred: false });
      setTimeout(() => {
        this.props.history.push('/');
      }, 1500);
    } catch (e) {
      this.setState({
        errorOccurred: true
      });
      console.error(e);
    }
  };

  private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  public render() {
    const { submitSuccess, loading, errorOccurred } = this.state;
    const tenMinutesTime = moment().utc().add(10, 'minutes');
    const dateTimerString = `date: ${tenMinutesTime}`;

    return (
        <div>
          <div className={"col-md-12 form-wrapper"}>
            <h2 id="create-post-header"> Create Post </h2>
            <div className="uk-grid-small uk-child-width-auto" uk-grid="true"
                 uk-countdown={dateTimerString}>
              <div>
                <div className="uk-countdown-number uk-countdown-hours"/>
                <div
                    className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours
                </div>
              </div>
              <div className="uk-countdown-separator">:</div>
              <div>
                <div className="uk-countdown-number uk-countdown-minutes"/>
                <div
                    className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes
                </div>
              </div>
              <div className="uk-countdown-separator">:</div>
              <div>
                <div className="uk-countdown-number uk-countdown-seconds"/>
                <div
                    className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds
                </div>
              </div>
            </div>
            {!submitSuccess && !errorOccurred &&(
                <div className="uk-alert uk-alert-info" role="alert">
                  Fill the form below to create a new post
                </div>
            )}
            {submitSuccess && !errorOccurred && (
                <SuccessMessage>
                  The form was successfully submitted!
                </SuccessMessage>
            )}
            {errorOccurred && (
                <div className="uk-alert uk-alert-danger" role="alert">
                  Error submitting form. First name and last name are required. Please try again
                </div>
            )}
            <DataEntryForm processFormSubmission={this.processFormSubmission}>
              <FormField name="firstName" type="text" placeholder="Enter customer's first name" onChange={this.handleInputChanges}>First Name</FormField>
              <FormField name="lastName" type="text" placeholder="Enter customer's last name" onChange={this.handleInputChanges}>Last Name</FormField>
              <FormField name="email" type="email" placeholder="Enter customer's email address" onChange={this.handleInputChanges}>Email</FormField>
              <FormField name="company" type="text" placeholder="Enter customer's company" onChange={this.handleInputChanges}>Company</FormField>
              <FormField name="phone" type="text" placeholder="Enter customer's phone number" onChange={this.handleInputChanges}>Phone number</FormField>
              <div className="form-group col-md-4 pull-right">
                <button className="uk-button uk-button-default" type="submit" id="create-customer">
                  Create Customer
                </button>
                {loading &&
                  <span className="fa fa-circle-o-notch fa-spin" />
                }
              </div>
            </DataEntryForm>
          </div>
        </div>
    )
  }
}

export default withRouter(Create);