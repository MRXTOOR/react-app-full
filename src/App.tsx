/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Index";
import LoginPage from "./components/Auth/Login/Index";

import PrivateRoute from "./Utils/Router/privateRoute";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route element={<PrivateRoute/>}>
        <Route path="/" element={<Home />} />
    </Route>
   
      
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
