import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { createTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import LogIn from './screens/LogIn'

import SignIn from './screens/SignIn'

export default class App extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <AppContainer />
      </View>
    );
  }
}
const TabNavigator = createTabNavigator({
  LogIn: { screen: LogIn },
  SignIn: { screen: SignIn },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if (routeName === "LogIn") {
          return (
            <Text>
              LogIn
            </Text>
          )
        }
        else if (routeName === "SignIn") {
          return (
            <Text>
              SignIn
            </Text>
          )
        }
      }
    })
  }
)

const AppContainer = createAppContainer(TabNavigator);