import { defineMessages } from 'react-intl';

export default defineMessages({
  required: {
    id: 'newzik.utils.validator.required',
    defaultMessage: 'Required',
  },
  emailInvalid: {
    id: 'newzik.utils.validator.emailInvalid',
    defaultMessage: 'Invalid email address',
  },
  minValue: {
    id: 'newzik.utils.validator.minValue',
    defaultMessage: 'Must be {min} characters or more'
  },
  formatPassword: {
    id: 'newzik.utils.validator.formatPassword',
    defaultMessage: 'At least 8 characters with number, uppercase and lowercase characters'
  },
  pwdNotMatch: {
    id: 'newzik.utils.validator.pwdNotMatch',
    defaultMessage: 'Password does not match'
  },
  emailExist: {
    id: 'newzik.utils.validator.emailExist',
    defaultMessage: 'Email already exist'
  },
  minOne: {
    id: 'newzik.utils.validator.minOne',
    defaultMessage: 'Must be at least 1'
  },
  zipCode: {
    id: 'newzik.utils.validator.zipCode',
    defaultMessage: 'Invalid code'
  },
  phoneNumber: {
    id: 'newzik.utils.validator.phoneNumber',
    defaultMessage: 'Invalid number'
  },
  linkFormat: {
    id: 'newzik.utils.validator.linkFormat',
    defaultMessage: 'Invalid link'
  }
});
