import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let convertTexttoUpper = text.toUpperCase();
    console.log("Convert to uppercase button clicked");
    setText(convertTexttoUpper);
    props.showAlert("Your text has been converted to uppercase!!", "success");
  };
  const handleLoClick = () => {
    let convertTexttoLower = text.toLowerCase();
    console.log("Convert to lower button clicked");
    setText(convertTexttoLower);
    props.showAlert("Your text has been converted to lowercase!!", "success");
  };
  const handleClearText = () => {
    let convertTexttocleartext = "";
    console.log("Clear all text !!");
    setText(convertTexttocleartext);
    props.showAlert("Your worksapce has been cleared!!", "warning");
  };

  const handleCopyText = () => {
    var getObject = document.getElementById("myTextArea");
    console.log("Copy Text !! " + getObject);
    getObject.select();
    navigator.clipboard.writeText(getObject.value);
    props.showAlert("Text Copied !!", "info");
  };

  const handleRemoveExtraSpaces = () => {
    let formattedText = text.split(/[ ]+/);
    setText(formattedText.join(" "));
  };

  const handleChange = (event) => {
    console.log("Change triggered !! ");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container mb-3">
        <h1>{props.heading}</h1>
        <div>
          {/* <label for="myTextArea" className="form-label" >Text Box</label> */}
          <textarea
            className="form-control"
            id="myTextArea"
            rows="12"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <div className="conatiner my-1">
          <h3>Your Text Summary:</h3>
          {/* <p>{text.split(" ").map(el => el.charAt(0) + el.slice(1)).join(" ")} words and {text.length} characters</p> */}
          <p>
            {text.trim().split(/\s+/).length} words and {text.length} characters
          </p>
        </div>
      </div>
    </>
  );
}
