import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Counter from './Counter';
// import Constants from 'expo-constants';

export default class CounterExample extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return  <View style={styles.container}>
        <Text>http://www.reactnativeexpress.com/component_api</Text>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});