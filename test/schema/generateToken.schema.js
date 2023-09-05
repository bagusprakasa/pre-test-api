export const VALID_SCHEMA = {
  $schema: "https://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  required: ["token", "expires", "status", "result"],
  properties: {
    token: {
      type: "string",
      default: "",
      title: "The token Schema",
    },
    expires: {
      type: "string",
      default: "",
    },
    status: {
      type: "string",
      default: "",
    },
    result: {
      type: "string",
      default: "",
    },
  },
};

export const INVALID_SCHEMA = {
  $schema: "https://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  required: ["token", "expires", "status", "result"],
  properties: {
    token: {
      type: "null",
      default: null,
    },
    expires: {
      type: "null",
      default: null,
    },
    status: {
      type: "string",
      default: "",
    },
    result: {
      type: "string",
      default: "",
    },
  },
};
export const INVALID_SCHEMA_REQUIRED = {
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
