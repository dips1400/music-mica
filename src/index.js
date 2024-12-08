import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
    </BrowserRouter>
  </React.StrictMode>
);
