import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import MoviesApp from "./Components/MoviesApp/MoviesApp";

import "./index.css";

render(
  <BrowserRouter>
    <MoviesApp />
  </BrowserRouter>,
  document.getElementById("root"),
);
