/**
 * Sample React Native Movie
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'IOS系统',
  android: '安卓系统',
});

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

type Props = {};
export default class Movie extends Component<Props> {
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
      <View>
        <Text>{instructions}</Text>
        <FlatList
          data={this.state.data}
          renderItem={this.renderMovie}
          style={styles.list}
          keyExtractor={(movie) => movie.id}
        />
      </View>
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