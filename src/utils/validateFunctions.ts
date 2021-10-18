export const validateTextarea = (values: { text: string }
) => {
  const errors: ValidateTextareaErrorsFormikType = {};
  if (values.text.length < 2) {
    errors.text = 'Must be 2 characters or more';
  }

  return errors;
}

export const validateLogin = (values: ValidateLoginParamType) => {
  const errors: ValidateLoginErrorsFormikType = {};
  if (!values.password) {
    errors.password = 'Required';

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }
}


type ValidateTextareaErrorsFormikType = {
  text?: string
}
type ValidateLoginParamType = {
  email: string
  password: string
  rememberMe: boolean
}
type ValidateLoginErrorsFormikType = {
  email?: string
  password?: string
  rememberMe?: boolean
}


