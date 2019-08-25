import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "../button/Button";

const ButtonGroupCollection = () => {
  const [switchOn, handleSwitchOn] = useState(true);

  return (
    <>
      <h2>1. Horizontal button group: </h2>
      <ButtonGroup>
        <Button active />
        <Button />
        <Button />
      </ButtonGroup>
      <h2>2. Vertical button group: </h2>
      <ButtonGroup vertical>
        <Button active />
        <Button />
        <Button />
      </ButtonGroup>

      <h2>3. Switcher button group: </h2>
      <ButtonGroup>
        <Button active={switchOn} onClick={() => handleSwitchOn(!switchOn)}>
          On
        </Button>
        <Button active={!switchOn} onClick={() => handleSwitchOn(!switchOn)}>
          Of
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonGroupCollection;
