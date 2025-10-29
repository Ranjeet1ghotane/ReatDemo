import "./App.css";
import Navbar from "./Components/Navbar";
import Imagetag from "./Components/Imagetag";
import TextArea from "./Components/TextArea";
import About from "./Components/About";
import { useState } from "react";
function App() {
  const [mode, changMode] = useState("light");
  return (
    <div className="App">
      <Navbar Loveyou="Ranjeet"></Navbar>
      {/* <Imagetag></Imagetag> */}
      <br></br>
      <TextArea Text="convert to uppercase"></TextArea>
      {/*<About></About>*/}
    </div>
  );
}

export default App;
