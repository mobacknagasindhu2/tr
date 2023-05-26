import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FullySubscribedScreen from '../screens/FullySubscribedScreen';
import SubscribedScreen from '../screens/SubscribedScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import GiftScreen from '../screens/GiftScreen';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
       
        showLabel: false,
        activeTintColor: "blue",
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="GiftScreen"
        component={GiftScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="card-giftcard" color={color} size={28} />
          ),
        }}
      />
   
    
      <Tab.Screen
        name="Subscribe"
        component={SubscribedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="FullySubscribe"
        component={FullySubscribedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />
    
      <Tab.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={28} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigator;