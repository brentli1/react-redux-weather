import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp - 273 )*(1.8)+32);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="red" units="F" />
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// Make use of ES6
function mapStateToProps({ weather }) {
  return { weather };
}
// Instead of this
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);
