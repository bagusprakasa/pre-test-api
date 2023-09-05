export const VALID_SCHEMA_CREATE_USER = {
  $schema: "https://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  required: ["userID", "username", "books"],
  properties: {
    userID: {
      type: "string",
      default: "",
    },
    username: {
      type: "string",
      default: "",
    },
    books: {
      type: "array",
      default: [],
      items: {},
    },
  },
};

export const INVALID_SCHEMA_CREATE_USER_SAME = {
  $schema: "https://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  required: ["code", "message"],
  properties: {
    code: {
      type: "string",
      default: "",
    },
    message: {
      type: "string",
      default: "",
    },
  },
};
export const INVALID_SCHEMA_CREATE_USER_PASSWORD = {
  $schema: "https://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  required: ["code", "message"],
  properties: {
    code: {
      type: "string",
      default: "",
    },
    message: {
      type: "string",
      default: "",
    },
  },
};
export const INVALID_SCHEMA_CREATE_USER_REQUIRED = {
  $schema: "https://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  required: ["code", "message"],
  properties: {
    code: {
      type: "string",
      default: "",
    },
    message: {
      type: "string",
      default: "",
    },
  },
};
