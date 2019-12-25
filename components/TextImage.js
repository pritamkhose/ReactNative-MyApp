import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class TextImage extends React.Component {
  static navigationOptions = {
    title: 'Text Image URL',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
        <Image
          style={styles.image}
          source={{ uri: 'http://www.reactnativeexpress.com/static/logo.png' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});
