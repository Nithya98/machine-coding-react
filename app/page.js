"use client";

import Counter from "@/src/components/Counter";
import Debouncing from "@/src/components/Debouncing";
import Form from "@/src/components/Form";
import HomePage from "@/src/components/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/debouncing" element={<Debouncing />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
