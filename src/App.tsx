import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from "./pages/Users/Users";



const App: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
