import React, { useState } from "react";

export default function TextArea(props) {
  const [Text, changeText] = useState("convert this to uppercase");

  const changeState = () => {
    let newText = Text.toUpperCase();
    changeText(newText);
  };

  const handleOnChange = (event) => {
    changeText(event.target.value);
  };

  const ConvertToLowerCase = () => {
    let lowecase = Text.toLowerCase();
    changeText(lowecase);
  };

  const clearText = () => {
    changeText(" ");
  };

  const capitalizesCase = () => {
    let newtext1 = Text.split(" ")
      .map((T) => T.charAt(0).toUpperCase() + T.slice(1).toLowerCase())
      .join(" ");
    changeText(newtext1);
  };

  return (
    <>
      <div className="container">
        <div>
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange} //for changing value in textarea only using this function we can change the value
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          />
        </div>

        <div className="container" style={{ textAlign: "left" }}>
          <button className="btn btn-primary my-3" onClick={changeState}>
            Convert to Uppercase
            {/* when i clicke on this button then changeState function will run and change the state of function */}
          </button>

          <button className="btn btn-primary mx-2" onClick={ConvertToLowerCase}>
            Convert To Lowercase
          </button>

          <button className="btn btn-primary mx-2" onClick={clearText}>
            Cleat Text
          </button>

          <button className="btn btn-primary mx-2" onClick={capitalizesCase}>
            Capitalized case
          </button>

          <div className="container my-2">
            <h1>Your text summery</h1>
            <h5>
              {Text.split(" ").length} words and {Text.length} Charectors{" "}
            </h5>
            {/* <p> {Text} </p>*/}
          </div>
        </div>
      </div>
    </>
  );
}
