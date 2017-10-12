import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import styles, { blueColor } from './styles';

export default class CounterTab extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'decrement') {
        this.decrement();
      }
    }
  };

  decrement = () => {
    const counter = this.state.counter;
    this.setState({ counter: Math.max(counter - 1, 0) });
  };

  increment = () => {
    const counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Counter: {this.state.counter}
        </Text>
        <Button title="Increment" onPress={this.increment} color={blueColor} />
      </View>
    );
  }
}
