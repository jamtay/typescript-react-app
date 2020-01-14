import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Customer } from '../models/Customer';
import { createNewCustomer } from '../services/customer';
import DataEntryForm from './DataEntryForm';

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
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  public render() {
    const { submitSuccess, loading } = this.state;

    return (
        <div>
          <div className={"col-md-12 form-wrapper"}>
            <h2 id="create-post-header"> Create Post </h2>
            {!submitSuccess && (
                <div className="alert alert-info" role="alert">
                  Fill the form below to create a new post
                </div>
            )}
            {submitSuccess && (
                <div className="alert alert-info" role="alert" id="success-banner">
                  The form was successfully submitted!
                </div>
            )}
            <DataEntryForm
                handleInputChanges={(e) => this.handleInputChanges(e)}
                processFormSubmission={this.processFormSubmission}
                loading={loading}
            />
          </div>
        </div>
    )
  }
}

export default withRouter(Create);