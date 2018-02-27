import React from "react";

const buttonStyle = {
  border: "none",
  color: "#ffffff",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inlineBlock",
  fontSize: "16px",
  backgroundColor: "#555555"
};

class ChangeCountry extends React.Component {
  render() {
    return (
      <button
        class="changeCountry"
        style={buttonStyle}
        onClick={this.props.action}
      >
        Switch Country
      </button>
    );
  }
}

export default ChangeCountry;
