import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView, RefreshControl, StyleSheet, Alert } from 'react-native'

export default class NetworkingExample extends Component {

  state = {
    loading: true,
    error: false,
    posts: [],
  }

  componentWillMount = async () => {
    this.setState({ loading: true, error: false })
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      console.log('-->> ' + response.status + ' \n' + JSON.stringify(response));
      const posts = await response.json()
      if (posts && posts.length > 0) {
        this.setState({ loading: false, posts })
      } else {
        this.setState({ loading: false, error: true })
        Alert.alert(
          'Error - ' + response.status,
          JSON.stringify(response),
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Retry', onPress: () => {

                console.log('OK Pressed')
              }
            },
          ],
          { cancelable: false },
        );
      }
    } catch (e) {
      this.setState({ loading: false, error: true })
    }
  }

  renderPost = ({ id, title, body }, i) => {
    return (
      <View
        key={id}
        style={styles.post}
      >
        <View style={styles.postNumber}>
          <Text>
            {i + 1}
          </Text>
        </View>
        <View style={styles.postContent}>
          <Text>
            {title}
          </Text>
          <Text style={styles.postBody}>
            {body}
          </Text>
        </View>
      </View>
    )
  }

  static navigationOptions = {
    title: 'Post WebAPI',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { posts, loading, error } = this.state

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>
            Failed to load posts!
          </Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container} 
        refreshControl={<RefreshControl refreshing={loading} onRefresh={this.componentWillMount} />}>
        {posts.map(this.renderPost)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 5,
    paddingRight: 15,
  },
  postBody: {
    marginTop: 4,
    fontSize: 12,
    color: 'gray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
})
