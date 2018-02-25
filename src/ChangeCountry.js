import React from "react";

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

class CountryFlag extends React.Component {
  render() {
    return <button style={buttonStyle} onClick={this.props.action}>Switch Country</button>
  }
}

export default CountryFlag;
