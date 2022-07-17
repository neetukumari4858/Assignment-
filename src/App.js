import { Dropdown } from "./Dropdown";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { DetaiCard } from "./DetailCard";

import "./styles.css";

export default function App() {
  const [btnState, setBtnState] = useState("Click a button from Navbar");
  const [btnCounter, setBtnCounter] = useState("");

  return (
    <div className="App">
      <Navbar
        btnState={btnState}
        setBtnState={setBtnState}
        btnCounter={btnCounter}
        setBtnCounter={setBtnCounter}
      />
      <div className="content_container">
        <DetaiCard btnCounter={btnCounter} />
        <Dropdown btnState={btnState} setBtnState={setBtnState} />
      </div>
    </div>
  );
}
