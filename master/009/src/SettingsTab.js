import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles, { blueColor } from './styles';

export default class SettingsTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Modal Screen"
          onPress={() =>
            this.props.navigator.showModal({
              screen: 'screen.welcome',
              title: 'Welcome',
              passProps: {
                name: 'Wrocław'
              },
              navigatorButtons: {
                rightButtons: [
                  {
                    title: 'Close',
                    id: 'close'
                  }
                ]
              },
              animationType: 'slide-up'
            })}
          color={blueColor}
        />
      </View>
    );
  }
}
