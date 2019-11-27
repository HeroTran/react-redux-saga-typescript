import * as React from 'react';
import './render.scss';

type RenderFieldProps = {
  input: React.InputHTMLAttributes<HTMLInputElement> | React.SelectHTMLAttributes<HTMLSelectElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  label: string;
  type: string;
  isCheckValidate: boolean;
  meta: {
    touched: boolean,
    dirty: boolean,
    error: string,
    warning: string,
  };
  isCheckFocus: boolean;
  placeholder: string | object;
  autoComplete: string;
  onKeyDown?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  min?: number;
};

export default class RenderField extends React.Component<RenderFieldProps & any> {
  render() {
    const { isCheckValidate, input, label, isCheckFocus, type, meta: { touched, error, warning, dirty }, placeholder, autoComplete, onKeyDown, min } = this.props;
    const isFocus = isCheckFocus ? true : false;
    return (
      <div className="render-field">
        <label>{label}</label>
        <div className="display-input">
          <input
            className={`input-text ${(touched && error) || (dirty && isCheckValidate && !touched && error) || isCheckValidate ? 'error' : ''}`}
            {...input}
            placeholder={placeholder}
            type={type}
            autoFocus={isFocus}
            autoComplete={autoComplete ? autoComplete : undefined}
            onKeyDown={onKeyDown}
            min={min !== undefined ? min : undefined}
          />
          {touched && (error && <span>{error}</span>) || dirty && isCheckValidate && !touched  && (error && <span>{error}</span>) || (warning && <span>{warning}</span>)}
        </div>
      </div>
    );
  }
}