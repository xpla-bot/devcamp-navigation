import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import styles, { blueColor } from './styles';

export default class HomeTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Push Screen"
          onPress={() =>
            this.props.navigator.push({
              screen: 'screen.welcome',
              title: 'Welcome',
              passProps: {
                name: 'DevCamp'
              }
            })}
          color={blueColor}
        />
      </View>
    );
  }
}
