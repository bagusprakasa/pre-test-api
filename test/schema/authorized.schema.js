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
export const INVALID_SCHEMA_NOT_FOUND = {
  $schema: "https://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  title: "Root Schema",
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
