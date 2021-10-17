export const validateTextarea = (values: { text: string }
  ) => {
    const errors: ErrorsFormikType = {};
    if (values.text.length < 2) {
      errors.text = 'Must be 2 characters or more';
    }

    return errors;
  }
;

type ErrorsFormikType = {
  text?: string
}


