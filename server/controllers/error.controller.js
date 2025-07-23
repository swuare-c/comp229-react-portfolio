const getErrorMessage = (err) => {
  let message = '';

  if (err.code) {
    // MongoDB duplicate key error
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Duplicate field value entered.';
        break;
      default:
        message = 'Something went wrong.';
    }
  } else if (err.errors) {
    // Mongoose validation errors
    for (let field in err.errors) {
      if (err.errors[field].message) {
        message = err.errors[field].message;
        break; // return first validation error
      }
    }
  } else {
    // Other errors
    message = err.message || 'Unknown error occurred.';
  }

  return message;
};

export default { getErrorMessage };
