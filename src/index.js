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
    <CountryFlag img="https://rawgit.com/dmitryvinn/hello-country-react/d114bf3970014ad4126fb843ca52fa85f13a6010/src/assets/american-flag.png" />
  </div>
);

render(<App />, document.getElementById("root"));
