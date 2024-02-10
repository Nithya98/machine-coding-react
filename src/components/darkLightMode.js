"use client";

import React from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../utils/slice/themeSlice";

function DarkLightMode() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <button
      className={`theme__switcher ${theme}`}
      onClick={() => dispatch(switchTheme())}
    >
      {theme === "light" ? (
        <CiLight className={theme + "icon"} />
      ) : (
        <MdDarkMode className={theme + "icon"} />
      )}
    </button>
  );
}

export default DarkLightMode;
