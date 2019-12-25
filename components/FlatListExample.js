import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const rows = [
  { id: 0, text: 'View' },
  { id: 1, text: 'Text' },
  { id: 2, text: 'Image' },
  { id: 3, text: 'ScrollView' },
  { id: 4, text: 'ListView' },
]

const extractKey = ({ id }) => id

export default class FlatListExample extends Component {

  renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  static navigationOptions = {
    title: 'FlatList',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})