"use client";
import React, { Children } from "react";
import { Provider } from "react-redux";
import store from "./store";

function CustomProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default CustomProvider;
