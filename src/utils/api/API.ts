import axios from "axios";
import { freeDictionaryApi } from "~/configs/constants";

export const API = axios.create({
  baseURL: freeDictionaryApi,
});
