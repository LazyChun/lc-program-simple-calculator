import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import config from "./lazychun";


window.config = config;
ReactDom.render(<App />, document.getElementById("__$program_code$__"));
