export const Validation = (value) => {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+.[^\s@]{2,6}$/;

  if (!email_pattern.test(value)) {
    if (value.length === 0) {
      return errors;
    }
    errors.username = "Le format de l'email est incorrect.";
  }

  return errors;
};
