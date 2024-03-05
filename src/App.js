//import logo from './logo.svg';
import "./App.css";
import LightSwitch from "./components/LightSwitch";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 2000);
  };
  const toggleModeFunc = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {document.title='Install TextUtils now'},4000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
      // setInterval(() => {document.title='Install TextUtils now'},4000);
    }
  };

  return (
    <>
      {/* <Navbar title="Text Checker"/> */}
      <Router>
        <Navbar title="TextUtils App" mode={mode} toggleMode={toggleModeFunc} />
        <Alert alert={alert} />
        <div class="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text for Transformation"
                />
              }
            ></Route>
            <Route path="/about" element={<LightSwitch />}></Route>
          </Routes>
        </div>
      </Router>
      {/* <div class="container">
        <LightSwitch />
      </div> */}
    </>
  );
}

export default App;
