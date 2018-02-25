import React from "react";

class CountryFlag extends React.Component {
  render() {
    return <img src={this.props.img} alt="Country Flag" />;
  }
}

export default CountryFlag;
