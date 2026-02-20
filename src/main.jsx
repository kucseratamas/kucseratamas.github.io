import React from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <BrowserRouter basename={import.meta.env.BASE_URL}>
  <Routes>
    <Route path="*" element={<App />} />
  </Routes>
  </BrowserRouter>
</React.StrictMode>
);
