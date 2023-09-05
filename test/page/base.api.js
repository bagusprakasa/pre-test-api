import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const BaseAPI = axios.create({
  baseURL: process.env.BASE_URL + "/Account/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  validateStatus: function () {
    return true;
  },
});

export const BaseAPIToken = axios.create({
  baseURL: process.env.BASE_URL + "/Account/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    authorization: "Basic UEBzc3dvcmQxMjM0OlBAc3N3b3JkMTIzNA==",
  },
  validateStatus: function () {
    return true;
  },
});

export const BaseAPITokenInvalid = axios.create({
  baseURL: process.env.BASE_URL + "/Account/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    authorization: "Basic aa23a4535drf==",
  },
  validateStatus: function () {
    return true;
  },
});

// export default BaseAPI;
