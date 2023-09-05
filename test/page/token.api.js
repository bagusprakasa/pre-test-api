import * as api from "$root/page/base.api";
const Token = {
  get: (uuid) => api.BaseAPIToken.get("/User/" + uuid),
  getWithoutToken: (uuid) => api.BaseAPI.get("/User/" + uuid),
  getWrongToken: (uuid) => api.BaseAPI.get("/User/" + uuid),
  destroy: (uuid) => api.BaseAPIToken.delete("/User/" + uuid),
  destroyWrongToken: (uuid) => api.BaseAPITokenInvalid.delete("/User/" + uuid),
  destroyWithoutToken: (uuid) => api.BaseAPI.delete("/User/" + uuid),
};

export default Token;
