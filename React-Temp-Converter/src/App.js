import "./App.css";
import Celcius from "./components/Celcius";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTemp: 0, fahrenheit: 0, kelvin: 0 };
  }
  tempIncrease = () => {
    let newTemp = this.state.currentTemp + 1;
    let fahrenheit = (newTemp * (9 / 5) + 32).toFixed(2);
    let kelvin = newTemp + 273.15;
    this.setState({
      currentTemp: newTemp,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    });
  };

  tempDecrease = () => {
    let newTemp = this.state.currentTemp - 1;
    let fahrenheit = (newTemp * (9 / 5) + 32).toFixed(2);
    let kelvin = newTemp + 273.15;
    this.setState({
      currentTemp: newTemp,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Hasan Hüseyin Özgür Homework Week 5 / Temperature Converter</h1>
        <p>Curent Temperature: {this.state.currentTemp} </p>
        <button onClick={this.tempIncrease}>Temperature Increase +</button>
        <button onClick={this.tempDecrease}>Temperature Decrease -</button>
        <div className="row">
          <Celcius celcius={this.state.currentTemp} />
          <Fahrenheit fahrenheit={this.state.fahrenheit} />
          <Kelvin kelvin={this.state.kelvin} />
        </div>
      </div>
    );
  }
}

export default App;
