export const VALID_SCHEMA = {
  $schema: "https://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  required: ["userId", "username", "books"],
  properties: {
    userId: {
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
    },
  },
};

export const INVALID_SCHEMA = {
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

export const INVALID_SCHEMA_UNAUTORHIZED = {
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

export const INVALID_DELETE_DAT = {
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
