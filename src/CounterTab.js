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
    } else if (event.id === 'willAppear') {
      this.clear();
    }
  };

  componentWillUpdate(nextProps, nextState) {
    this.props.navigator.setTitle({
      title: `Counter: ${nextState.counter}`
    });
  }

  decrement = () => {
    const counter = this.state.counter;
    this.setState({ counter: Math.max(counter - 1, 0) });
  };

  increment = () => {
    const counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  };

  clear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Increment" onPress={this.increment} color={blueColor} />
      </View>
    );
  }
}
