import * as React from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Import the reducer and create a store
import { reducer } from './postsRedux';

// Add the thunk middleware to our store
const store = createStore(reducer, applyMiddleware(thunk));

// Import the App container component
import ReduxApp from './ReduxApp';

// http://www.reactnativeexpress.com/networking_redux
export default class IndexReduxExample extends React.Component {
  // Pass the store into the Provider
  // <Provider store={store}>
  //       <ReduxApp />
  //     </Provider>
  render() {
    return (
      <View>
        <Text>Not Working here .... Create new project and run it.</Text>
        <Text>http://www.reactnativeexpress.com/networking_redux</Text>
      </View>
    );
  }
}

// Pass the store into the Provider
// export default () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )
