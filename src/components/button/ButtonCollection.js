import React from "react";
import Button from "./Button";

const ButtonCollection = () => (
  <>
    <h2>1. Text and onClick function:</h2>
    <Button onClick={() => console.log("!!!!")}>Button text</Button>

    <h2>2. Disabled button:</h2>
    <Button onClick={() => console.log("!!!!")} disabled>
      Disabled button
    </Button>

    <h2>3. Active button:</h2>
    <Button onClick={() => console.log("!!!!")} active>
      Active button
    </Button>

    <h2>4. Supporting data, type and etc. attributes:</h2>
    <Button data-name="button">data-name="button"</Button>
    <br />
    <br />
    <Button type="submit" />

    <h2>5. Button link:</h2>
    <Button href="test">link</Button>
    <Button href="test" disabled>
      link
    </Button>
  </>
);

export default ButtonCollection;
