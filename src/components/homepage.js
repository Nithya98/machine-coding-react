"use client";

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={`${theme} homepage`}>
      <h1>Homepage</h1>
      <div className="menu">
        <Link to="/form">Form</Link>
        <Link to="/debouncing">Debouncing</Link>
        <Link to="/counter">Counter</Link>
      </div>
    </div>
  );
}

export default HomePage;
