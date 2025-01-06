import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css"; // Assuming you have a main.css file
import { UserApp } from "./UserApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>
);
