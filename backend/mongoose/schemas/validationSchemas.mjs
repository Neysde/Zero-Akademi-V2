export const createUserValidationSchema = {
  username: {
    notEmpty: {
      errorMessage: "Username cannot be empty",
    }, //notEmpty doesnt have any options(If you dont wanna put any messages to non optioned validators just put true (notEmpty: true))
    isString: {
      errorMessage: "Username must be a string.",
    },
  },

  password: {
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
    isString: {
      errorMessage: "Password must be a string.",
    },
    isLength: {
      options: {
        min: 8,
        max: 32,
      },
      errorMessage: "Password must be at least 8 chars, max 32 characters",
    },
  },
};
