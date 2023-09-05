import * as api from "$root/page/base.api";
const Account = {
  store: (data) => api.BaseAPI.post("/User", data),
  authorized: (data) => api.BaseAPI.post("/Authorized", data),
  token: (data) => api.BaseAPI.post("/GenerateToken", data),
};

export default Account;
