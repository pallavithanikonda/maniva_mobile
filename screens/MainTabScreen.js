import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import EventScreen from './EventScreen';
import TimeScreen from './TimeScreen';

const HomeStack = createStackNavigator();
const EventStack = createStackNavigator();
const TimeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{backgroundColor: '#FEAF06'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={EventStackScreen}
      options={{
        tabBarLabel: 'About',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-information-circle-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Book"
      component={TimeStackScreen}
      options={{
        tabBarLabel: 'Book',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-bookmark-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#FEAF06',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Choose a service',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#FFFFFF"
            color="#000000"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const EventStackScreen = ({navigation}) => (
  <EventStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#FEAF06',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <EventStack.Screen
      name="Event"
      component={EventScreen}
      options={{
        title: 'Choose a Date',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#FFFFFF"
            color="#000000"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </EventStack.Navigator>
);

const TimeStackScreen = ({navigation}) => (
  <TimeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#FEAF06',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <TimeStack.Screen
      name="Time"
      component={TimeScreen}
      options={{
        title: 'Choose a Time',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#FFFFFF"
            color="#000000"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </TimeStack.Navigator>
);
