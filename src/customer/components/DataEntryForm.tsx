import * as React from 'react';

export interface IDataEntryFormProps {
  processFormSubmission: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
export interface IFormState {}

class DataEntryForm extends React.Component<IDataEntryFormProps, IFormState> {

  public render() {
    const { processFormSubmission, children } = this.props;

    return (
      <form id={"create-post-form"} onSubmit={processFormSubmission} noValidate={true}>
        {children}
      </form>
    )
  }
}

export default DataEntryForm;