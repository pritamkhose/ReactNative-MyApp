import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';

// https://facebook.github.io/react-native/docs/0.60/navigation
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome ReactNative Express',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.buttonstyle}>
          <Button
            title="Navigate to Jane's profile"
            onPress={() => navigate('Profile', { name: 'Jane' })}
          />
        </View>

        <View style={styles.buttonstyle}>
          <Button title="Counter" onPress={() => navigate('Counter')} />
        </View>

        <View style={styles.buttonstyle}>
          <Button title="Asset" onPress={() => navigate('Asset')} />
        </View>

        <View style={styles.buttonstyle}>
          <Button title="ViewExample" onPress={() => navigate('ViewExample')} />
        </View>

        <View style={styles.buttonstyle}>
          <Button title="Flexbox" onPress={() => navigate('Flexbox')} />
        </View>

        <View style={styles.buttonstyle}>
          <Button title="TextImage" onPress={() => navigate('TextImage')} />
        </View>

        <View style={styles.buttonstyle}>
          <Button
            title="ScrollviewExample"
            onPress={() => navigate('ScrollviewExample')}
          />
        </View>

        <View style={styles.buttonstyle}>
          <Button
            title="FlatListExample"
            onPress={() => navigate('FlatListExample')}
          />
        </View>

        <View style={styles.buttonstyle}>
          <Button
            title="SectionListExample"
            onPress={() => navigate('SectionListExample')}
          />
        </View>

        <View style={styles.buttonstyle}>
          <Button
            title="DataCompExample"
            onPress={() => navigate('DataCompExample')}
          />
        </View>

        <View style={styles.buttonstyle}>
          <Button
            title="NetworkingExample"
            onPress={() => navigate('NetworkingExample')}
          />
        </View>

        <View style={styles.buttonstyle}>
          <Button
            title="AnimatedExample"
            onPress={() => navigate('AnimatedExample')}
          />
        </View>

        <View style={styles.buttonstyle}>
          <Button
            title="RNAnimatedExample"
            onPress={() => navigate('RNAnimatedExample')}
          />
        </View>

        <View style={styles.buttonstyle}>
          <Button
            title="GesturesExample"
            onPress={() => navigate('GesturesExample')}
          />
        </View>

        <Text> </Text>
        <Text>
          https://facebook.github.io/react-native/docs/0.60/navigation
        </Text>
        <Text>
          https://stackoverflow.com/questions/43585297/react-native-button-style-not-work
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  buttonstyle: {
    flex: 1,
    margin: 5,
  },
});
