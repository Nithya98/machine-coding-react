"use client";

import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const theme = useSelector((state) => state.theme.value);
  return <div className={`${theme} homepage`}>   
    Homepage
    </div>;
}

export default HomePage;
