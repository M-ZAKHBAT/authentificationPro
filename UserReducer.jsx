import { createSlice } from "@reduxjs/toolkit";
import User from "./backend/users/model/schemaUser.js";

const userSlice = createSlice({
  name: "users",
  initialState: User,
  reducers: {},
});
