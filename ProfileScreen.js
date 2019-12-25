import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return  <Text>Jane profile </Text> ;
  }
}