import React from "react";
import CountryFlag from "./CountryFlag";
import Welcome from "./Welcome";
import ChangeCountry from "./ChangeCountry";

class HelloCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "america",
      label: "Canada",
      flag:
          "https://i.imgur.com/bh3BkeN.png"
    };
    this.changeCountry = this.changeCountry.bind(this);
  }

  changeCountry() {
    var countryName = this.state.country;
    var countryFlag = this.state.flag;
    var countryLabel = this.label;
    if (countryName === "america") {
      countryName = "canada";
      countryLabel = "Canada";
      countryFlag =
        "https://i.imgur.com/bh3BkeN.png";
    } else {
      countryName = "america";
      countryLabel = "Canada";
      countryFlag =
          "https://i.imgur.com/bh3BkeN.png";
    }
    this.setState({
      country: countryName,
      flag: countryFlag,
      label: countryLabel
    });
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.label} />
        <CountryFlag img={this.state.flag} />
        <div>
          <ChangeCountry action={this.changeCountry} />
        </div>
      </div>
    );
  }
}

export default HelloCountry;
