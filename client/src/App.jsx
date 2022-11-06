import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FrontPage from "./components/FrontPage/FrontPage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/home" element={<FrontPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
