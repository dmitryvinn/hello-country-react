import React from "react";

const imageStyle = {
  height: "300px",
  width: "550px",
  border: "2px solid"
};

class CountryFlag extends React.Component {
  render() {
    return <img style={imageStyle} src={this.props.img} alt="Country Flag" />;
  }
}

export default CountryFlag;
