export default function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (/\d/.test(input.name)) {
    errors.name = "Invalid Name"
  }

  if (!input.minWeight || !input.maxWeight) {
    errors.weight = 'Weight is required'
  } else if (/[a-zA-Z]/.test(input.minWeight) || /[a-zA-Z]/.test(input.maxWeight)) {
    errors.weight = 'Invalid Weight'
  }

  if (!input.minHeight || !input.maxHeight) {
    errors.height = 'Height is required'
  } else if (/[a-zA-Z]/.test(input.minHeight) || /[a-zA-Z]/.test(input.maxHeight)) {
    errors.height = 'Invalid Height'
  }

  return errors;
}