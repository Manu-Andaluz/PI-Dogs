export default function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.name = "Username is invalid";
  }

  return errors;
}