export const checkValidData = (name, email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (!email || !password) {
    return "Email and password cannot be empty.";
  }

  if (!name) {
    return "Full Name cannot be empty.";
  }

  if (!emailRegex.test(email)) {
    return "Email is not valid!";
  }

  if (!passwordRegex.test(password)) {
    // return "Password must be at least 8 characters long and contain at least one letter and one number.";
    return "Password is not valid!";
  }

  return null;
};
