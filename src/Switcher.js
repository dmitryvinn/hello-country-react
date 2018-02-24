import React from "react";

class CountryFlag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: america
    }
    this.changeCountry = this.changeCountry.bind(this)
  }

  changeCountry() {
    var currentCountry = this.state.country;
    var newCountry;
    if (currentCountry === 'america') {
        newCountry = 'canada';
    } else {
      newCountry = 'america';
    }
    this.setState({
      country: newCountry
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeCountry}>
          Switch Country
        </button>
      </div>
    )
  }


   var active = this.state.active;

  render() {
    return <img src={this.props.img} alt="Test" />;
  }
}

var Parent = React.createClass({
  getInitialState: function() {
    return {
      active: "FIRST"
    };
  },

  handleClick: function() {
    var active = this.state.active;
    var newActive = active === "FIRST" ? "SECOND" : "FIRST";
    this.setState({
      active: newActive
    });
  },

  render: function() {
    var active = this.state.active;

    return (
      <div>
        {active === "FIRST" ? (
          <First />
        ) : active === "SECOND" ? (
          <Second />
        ) : null}
        <button type="button" onClick={this.handleClick}>
          Toggle
        </button>
      </div>
    );
  }
});
