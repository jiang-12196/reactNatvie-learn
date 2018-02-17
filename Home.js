/**
 * Sample React Native Movie
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>welcome to my first App!!!</Text>
        <View style={styles.button}>
          <Button
            onPress={() => navigate('Movie')}
            title="影片"
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    color: '#ccc',
  },
  button: {
    marginTop: 30,
    width: 100,
    height: 42,
  },
});