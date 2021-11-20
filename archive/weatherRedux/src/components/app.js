import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3 style={{
          color:'red',
          textAlign:'center',
          marginTop:'15px'
        }}>
          Redux Weather Request Form</h3>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}
