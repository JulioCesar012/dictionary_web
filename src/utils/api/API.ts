import axios from "axios";
import { freeDictionaryApi, jsonServerApi } from "~/configs/constants";

export const API = axios.create({
  baseURL: freeDictionaryApi,
});

export const API_JSON_SERVER = axios.create({
  baseURL: jsonServerApi
})