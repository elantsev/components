import React from "react";
import Input from "./Input";

const InputsCollection = () => (
  <div
    style={{ display: "grid", gridTemplateColumn: "1fr 1fr", gridGap: "20px" }}
  >
    <h2>
      <span>1. Base Input type text:</span>
    </h2>
    <Input id="text" type="text" />
  </div>
);

export default InputsCollection;
