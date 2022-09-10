import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './assets/src/screens/Login';
import Onboarding from './assets/src/screens/Onboarding';
import Home from './assets/src/screens/Home';
import Details from './assets/src/screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Onboarding">
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
