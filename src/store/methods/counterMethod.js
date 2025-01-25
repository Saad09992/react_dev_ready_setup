import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/baseUrl";
export const getDataFromApi = createAsyncThunk("api/data", async () => {
  const response = await api.get("/data");
  const data = await response.json();
  return data;
});
