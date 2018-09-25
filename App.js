import * as React from 'react';
import { Text, View, StyleSheet,} from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

class App extends React.Component {
  static navigationOptions = {
    title: 'Tela Principal',
    headerRight: (
      <Button title='Info' transparent={true}/>
    ),
    headerLeft: (
      <Button transparent={true}  icon={{name: 'menu'}}/>
    ),
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to
          get a shareable url.
        </Text>
      </View>
    );
  }
}

const stackNav = createStackNavigator({
  Home: {
    screen: App,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default stackNav;
