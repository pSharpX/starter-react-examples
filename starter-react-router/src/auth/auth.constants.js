export const challengeType = {
  NEW_PASSWORD_REQUIRED: "NEW_PASSWORD_REQUIRED",
  CUSTOM_CHALLENGE: "CUSTOM_CHALLENGE",
};

export const errorCodeException = {
  InvalidPasswordException: {
    label: "Password does not conform to policy: Password not long enough",
  },
};

export const requiredAttributesHomologator = {
  gender: {
    label: "Genero",
    order: 4,
  },
  family_name: {
    label: "Apellido",
    order: 2,
  },
  nickname: {
    label: "Nickname",
    order: 3,
  },
  name: {
    label: "Nombres",
    order: 1,
  },
};
