export default function validate(input) {
  let errors = {}; // i create the errors object to

  if (!input.name) { // if input.value not exist or is undefined, i create with the value =>
    errors.name = "Name is required";
  } else if (/^[a-zA-Z\s]*$/.test(input.name)) { // only letters and spaces
    errors.name = false // when i ask if(error.value === true), will not enter the if 
  } else {
    errors.name = "Invalid Name"
  }

  if (!input.minWeight || !input.maxWeight) {
    errors.weight = 'Weight is required'
  } else if (input.minWeight >= input.maxWeight) {
    errors.weight = 'Weight is invalid'
  }

  if (!input.minHeight || !input.maxHeight) {
    errors.height = 'Height is required'
  } else if (input.minHeight >= input.maxHeight) {
    errors.height = 'Height is invalid'
  }

  if (!input.temperaments) {
    errors.temperaments = "Temperaments is required";
  } else if (/^[a-zA-Z\s-]*$/.test(input.temperaments)) { // only letters, spaces and dash
    errors.temperaments = false
  } else {
    errors.temperaments = "Invalid Temperaments"
  }

  return errors; // return object errors
}