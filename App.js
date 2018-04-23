import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather.js';

const API_KEY = "dbeec18e0cafd5ac06bfca10561f07d0";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperatrue: null,
    name: null
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperatrue: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        })
      });
  }

  render() {
    const { isLoaded, error, temperatrue, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather 
          weatherName={name}
          temp={Math.ceil(temperatrue - 275.15)} />
        ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>날씨정보 로딩중 ...</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          )}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    paddingLeft: 25,
    marginBottom: 25
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end'
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
    paddingLeft: 25
  }
});
