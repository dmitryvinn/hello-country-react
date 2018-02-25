import React from "react";
import CountryFlag from "./CountryFlag";
import Welcome from "./Welcome";

const buttonStyle = {
  border: 'none',
  color: '#ffffff',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inlineBlock',
  fontSize: '16px',
  backgroundColor: '#555555'
}

class HelloCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "america",
      label: "America",
      flag:
        "https://rawgit.com/dmitryvinn/hello-country-react/d114bf3970014ad4126fb843ca52fa85f13a6010/src/assets/american-flag.png"
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
        "https://rawgit.com/dmitryvinn/hello-country-react/d114bf3970014ad4126fb843ca52fa85f13a6010/src/assets/canadian-flag.png";
    } else {
      countryName = "america";
      countryLabel = "America";
      countryFlag =
        "https://rawgit.com/dmitryvinn/hello-country-react/d114bf3970014ad4126fb843ca52fa85f13a6010/src/assets/american-flag.png";
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
        <button style={buttonStyle} onClick={this.changeCountry}>Switch Country</button>
        <CountryFlag img={this.state.flag} />
      </div>
    );
  }
}

export default HelloCountry;
