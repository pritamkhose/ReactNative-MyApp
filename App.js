import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

// You can import from local files
import AssetExample from './components/AssetExample';
import CounterExample from './components/CounterExample';
import ViewExample from './components/ViewExample';
import Flexbox from './components/Flexbox';
import TextImage from './components/TextImage';

import ScrollviewExample from './components/ScrollviewExample';
import FlatListExample from './components/FlatListExample';
import SectionListExample from './components/SectionListExample';

import DataCompExample from './data_component/DataCompExample';
import NetworkingExample from './networking/NetworkingExample';
import IndexReduxExample from './networking/IndexReduxExample';

import AnimatedExample from './animation/AnimatedExample';
import RNAnimatedExample from './animation/RNAnimatedExample';
import GesturesExample from './animation/GesturesExample';

import AsyncStorageExample from './components/AsyncStorageExample';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },

  Asset: { screen: AssetExample },
  Counter: { screen: CounterExample },
  ViewExample: { screen: ViewExample },
  Flexbox: { screen: Flexbox },
  TextImage: { screen: TextImage },

  ScrollviewExample: { screen: ScrollviewExample },
  FlatListExample: { screen: FlatListExample },
  SectionListExample: { screen: SectionListExample },

  DataCompExample: { screen: DataCompExample },
  NetworkingExample: { screen: NetworkingExample },
  AnimatedExample: { screen: AnimatedExample },
  RNAnimatedExample: { screen: RNAnimatedExample },
  GesturesExample: { screen: GesturesExample },
}, {
  initialRouteName: 'Home',
});

// https://reactnavigation.org/docs/en/getting-started.html

// https://facebook.github.io/react-native/docs/0.60/navigation
const App = createAppContainer(MainNavigator);

export default App;