import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
