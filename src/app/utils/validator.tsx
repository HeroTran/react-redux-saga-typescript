import { FormattedMessage } from 'react-intl';
import messages from './messages';
import * as React from 'react';
import { Map } from 'immutable';

export const required = (value: string | number) => value ? undefined : <FormattedMessage {...messages.required} />
export const requiredSpace = (value: string) => {
  if (value !== undefined && value !== null) {
    return value.trim().length === 0 ? <FormattedMessage {...messages.required} /> : undefined;
  }
  return value;
}
export const email = (value: string) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value) ? <FormattedMessage {...messages.emailInvalid} /> : undefined;
const minValue = (min: string | number) => (value: string) => {
  return value && value.length < min ? <FormattedMessage {...messages.minValue} values={{ min: min }} /> : undefined;
};
export const minLength = minValue(6);

export const password = (value: string) => {
  const str = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return !value || !str.test(value) ? <FormattedMessage {...messages.formatPassword} /> : undefined;
};
export const checkPassword = (confirm: string, allValues: Map<string, string>) => {
  return confirm !== allValues.get('password') ? <FormattedMessage {...messages.pwdNotMatch} /> : undefined;
};

export interface Validator {
  email: string
}

export const minOne = (value: number | string) => {
  return !value || value < 1 ? <FormattedMessage {...messages.minOne} /> : undefined;
}

export const requiredNumber = (value: number | string) => value !== null ? undefined : <FormattedMessage {...messages.required} />;

export const checkZipCode = (value: string) => {
  const regexp = /^[a-zA-Z0-9-]+$/;
  return !value || !regexp.test(value) ? <FormattedMessage {...messages.zipCode} /> : undefined;
};

export const checkPhoneNumber = (value: string) => {
  const regexp = /^[0-9-()+ ]+$/
  return !value || !regexp.test(value) ? <FormattedMessage {...messages.phoneNumber} /> : undefined;
};

function validateWebsite(value: string): boolean {
  const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
}

export function validateEmail(value: string): boolean {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i;
  if (!regex.test(value)) {
    return false;
  }
  return true;
}

export const checkWebsite = (value: string) => {
  if (value !== undefined && value !== null) {
    if (value.trim().length > 0) {
      return !validateWebsite(value) ? <FormattedMessage {...messages.linkFormat} /> : undefined;
    }
    return undefined;
  }
  return undefined;
};
