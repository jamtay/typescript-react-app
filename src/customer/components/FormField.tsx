import * as React from 'react';

export interface IFormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

export interface IFormFieldState {}

class FormField extends React.Component<IFormFieldProps, IFormFieldState> {

  public render() {
    const { name, type, placeholder, onChange, children, defaultValue } = this.props;

    return (
        <div className="form-group col-md-12">
          <label htmlFor={name}> {children} </label>
          <input type={type} id={name} onChange={onChange} name={name} className="form-control" placeholder={placeholder} defaultValue={defaultValue}/>
        </div>
    )
  }
}

export default FormField;