/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    }
  }

  componentDidMount() {
    this.getMockData();
  }

  getMockData = () => {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log('data---->', data);
      this.setState({
        data: this.state.data.concat(data.movies),
        loaded: true,
      })
    })
  }
  render() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={(movie) => movie.id}
      />
    );
  }
  
  renderLoadingView = () => {
    return (
      <View style={styles.container}>
      <Text>
        Loading...
      </Text>
    </View>
    );
  };

  renderMovie = (movie) => {
    return (
      <View style={styles.container} key={movie.item.id}>
        <Image 
          source={{uri: movie.item.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.item.title}</Text>
          <Text style={styles.year}>{movie.item.year}</Text>
        </View>
    </View>
    );
  };
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});