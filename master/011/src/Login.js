import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import styles, { blueColor } from './styles';
import { startTabbedApp } from './app';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in" onPress={startTabbedApp} color={blueColor} />
      </View>
    );
  }
}
