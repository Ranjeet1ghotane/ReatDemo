import "./App.css";
import Navbar from "./Components/Navbar";
import AddForm from "./Components/AddForm";
import TextArea from "./Components/TextArea";
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
      <AddForm></AddForm>
    </div>
  );
}

export default App;
