import React, { useState } from "react";
import { staticText } from "../../constants";
import Login from "../Login";
import Aadhar from "../Aadhar";
import "./styles.css";

export default function AuthenticationSteps() {
  const [active, setActive] = useState(0);

  const nextCounter = () => {
    if (active <= steps.length - 2) {
      console.log(active);
      setActive(prevState => prevState + 1);
    }
  };
  const prevCounter = () => {
    if (active >= 1) {
      setActive(prevState => prevState - 1);
    }
  };

  const steps = [
    {
      label: "Heading",
      name: "Sub Heading",
      content: <Login nextCounter={nextCounter} />,
    },
    {
      label: "Heading 1",
      name: "Sub Heading 1",
      content: <Aadhar />,
    },
  ];
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
      }}
    >
      {steps[active].content}
    </div>
  );
}
