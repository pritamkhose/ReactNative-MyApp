/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import NetworkingExample from './NetworkingExample';

// const App: () => React$Node = () => {
export default class App extends Component {

  state = {
    loading: true,
    error: false,
    posts: [],
  }

  constructor() {
    super()
    console.log('App');
    async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()

        this.setState({ loading: false, posts })
      } catch (e) {
        this.setState({ loading: false, error: true })
      }
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

  render() {
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
      <ScrollView style={styles.container}>
        {posts.map(this.renderPost)}
      </ScrollView>
    )
  }


}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
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
});

    // export default App;
