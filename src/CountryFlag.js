import React from "react";

const imageStyle = {
  // width: '300px',
  height: '100px',
  width: '300px',
  width: 'auto',
  height: 'auto',
  border: '2px solid'
}

class CountryFlag extends React.Component {
  render() {
    return <img style={imageStyle} src={this.props.img} alt="Country Flag" />;
  }
}

export default CountryFlag;
