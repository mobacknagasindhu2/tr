import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './app/src/views/screens/RegisterScreen';
import LoginScreen from './app/src/views/screens/LoginScreen';
import BottomNavigator from './app/src/views/navigators/BottomNavigator';
import ForgotPasswordScreen from './app/src/views/screens/ForgotPassword';
import DetailsScreen from './app/src/views/screens/DetailsScreen';
import SuccessfullyScreen from './app/src/views/screens/Successfully';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        <Stack.Screen name="HomeScreen" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Successfully" component={SuccessfullyScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


