import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home.jsx";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
