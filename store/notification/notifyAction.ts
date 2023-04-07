import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getNotification,
} from "../../src/axiosRequest/api/notification";

export const fetchNotifications = createAsyncThunk(
  "notification/fetchNotifications",
  async () => {
    const response = await getNotification();
    return response.data;
  }
);

