import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getCustomer, updateCustomer} from "../services/customer";
import {Customer} from "../models/Customer";
import DataEntryForm from "./DataEntryForm";

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
                <DataEntryForm
                  handleInputChanges={(e) => this.handleInputChanges(e)}
                  processFormSubmission={this.processFormSubmission}
                  loading={loading} customer={this.state.customer}
                />
              </div>
            </div>
          </div>
          }
        </div>
    )
  }
}

export default withRouter(EditCustomer)