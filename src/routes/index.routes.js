import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
