import React from "react";
var MediaQuery = require("react-responsive").default;

const imageStyle = {
  height: "300px",
  width: "550px",
  border: "2px solid"
};

class CountryFlag extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="screen and (min-width: 376px)">
          <img
            class="countryFlag"
            style={imageStyle}
            src={this.props.img}
            alt="Country Flag"
          />
        </MediaQuery>

        <MediaQuery query="screen and (width: 375px)">
          <img
            class="countryFlag"
            style={{ visibility: "hidden" }}
            src={this.props.img}
            alt="Country Flag"
          />
        </MediaQuery>
        <MediaQuery query="screen and (max-width: 374px)">
          <img
            class="countryFlag"
            style={{ display: "none" }}
            src={this.props.img}
            alt="Country Flag"
          />
        </MediaQuery>
      </div>
    );
  }
}

export default CountryFlag;

// <MediaQuery query="(device-width: 376px)">
//   <img
//     style={{ visibility: "hidden" }}
//     src={this.props.img}
//     alt="Country Flag"
//   />
// </MediaQuery>
