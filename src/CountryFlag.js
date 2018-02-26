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
        <MediaQuery query="(min-device-width: 1224px)">
          <img style={imageStyle} src={this.props.img} alt="Country Flag" />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1223px)">
          <img
            style={{ visibility: "hidden" }}
            src={this.props.img}
            alt="Country Flag"
          />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1222px)">
          <img
            style={{ display: "none" }}
            src={this.props.img}
            alt="Country Flag"
          />
        </MediaQuery>
      </div>
    );
  }

  // render() {
  //   return(

  //   );
  // }
}

export default CountryFlag;
