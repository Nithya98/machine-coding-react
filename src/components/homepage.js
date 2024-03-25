"use client";

import React from "react";
import { useSelector } from "react-redux";
import Form from "@/src/components/Form";
import Counter from "@/src/components/Counter";
import Debouncing from "@/src/components/Debouncing";

function HomePage() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={`${theme} homepage`}>
      <h1>Homepage</h1>
      <Form />
      <Counter />
      <Debouncing />
    </div>
  );
}

export default HomePage;
