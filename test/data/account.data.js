function randomGenerator(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const VALID_DATA = {
  userName: randomGenerator(8),
  password: "P@ssword123",
};

export const INVALID_DATA_SAME = {
  userName: "userttest123ing12",
  password: "P@sswiord123",
};

export const INVALID_DATA_PASSWORD_STRING = {
  userName: randomGenerator(8),
  password: "password",
};

export const INVALID_DATA_PASSWORD_STRING_NUMBER = {
  userName: randomGenerator(8),
  password: "password123",
};

export const INVALID_DATA_PASSWORD_NUMBER = {
  userName: randomGenerator(8),
  password: "123456789",
};

export const INVALID_DATA_WITH_SPECIAL_CHAR = {
  userName: randomGenerator(8),
  password: "p@ssword",
};

export const INVALID_DATA_WITH_NUMBER_SPECIAL_CHAR = {
  userName: randomGenerator(8),
  password: "@" + 123456789,
};

export const INVALID_DATA_WITH_PASSWORD_UNDER_8 = {
  userName: randomGenerator(8),
  password: "pass12@",
};

export const INVALID_DATA_WITH_PASSWORD_NULL = {
  userName: randomGenerator(8),
  password: "",
};

export const INVALID_DATA_WITH_USERNAME_NULL = {
  userName: "",
  password: randomGenerator(8),
};
