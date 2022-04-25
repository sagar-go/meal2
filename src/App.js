import Rand from "./Rand";
import "./App.css";

import Nav from "./Nav";
import Category from "./Category";
import Inspire from "./Inspire";
import Select from "./Select";
import { useContext } from "react";
import { MainContext } from "./Context";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Result from "./Result";
import Result2 from "./Result2";
import Result1 from "./Result1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { id } = useContext(MainContext);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result2" element={<Result2 />} />
          <Route path="/result1" element={<Result1 />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={1500} limit={2} />
      </Router>
    </>
  );
}
export default App;
