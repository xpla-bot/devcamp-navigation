import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'close') {
        this.props.navigator.dismissModal({ animationType: 'slide-down' });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello {this.props.name}!
        </Text>
      </View>
    );
  }
}
