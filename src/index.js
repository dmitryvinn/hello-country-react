import React from "react";
import { render } from "react-dom";
import CountryFlag from "./CountryFlag";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const App = () => (
  <div style={styles}>
    <Hello name="America" />
    <CountryFlag img=""/>
  </div>
);

render(<App />, document.getElementById("root"));
