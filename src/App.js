import React from "react";
import "./App.css";

import Badges from "./components/badge/Badges";
import ListGroup from "./components/list-group/ListGroup";
import ListGroupItem from "./components/list-group/ListGroupItem";
import ListGroupItemCollection from "./components/list-group/ListGroupItemCollection";
import Chips from "./components/chip/Chips";
import Input from "./components/input/Input";
import InputsCollection from "./components/input/InputsCollection";
import TabBar from "./components/tabbar/TabBar";
import TabBarCollection from "./components/tabbar/TabBarCollection";

function App() {
  return (
    <div className="App">
      {/* <ButtonCollection />
      <ButtonGroupCollection /> */}
      {/* <Icon onClick={() => console.log("!!!")}>ddd</Icon> */}
      {/* <ImageGroup /> */}
      {/* <Chips /> */}
      {/* <Badges></Badges> */}
      {/* <ListGroupItemCollection /> */}
      {/* <InputsCollection /> */}
      <TabBarCollection />
    </div>
  );
}

export default App;
