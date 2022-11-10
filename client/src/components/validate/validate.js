export default function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (/^[a-zA-Z\s]*$/.test(input.name)) {
    errors.name = false
  } else {
    errors.name = "Invalid Name"
  }

  if (!input.minWeight || !input.maxWeight) {
    errors.weight = 'Weight is required'
  }

  if (!input.minHeight || !input.maxHeight) {
    errors.height = 'Height is required'
  }

  if (!input.temperaments) {
    errors.temperaments = "Temperaments is required";
  } else if (/^[a-zA-Z\s]*$/.test(input.temperaments)) {
    errors.temperaments = false
  } else {
    errors.temperaments = "Invalid Temperaments"
  }

  return errors;
}