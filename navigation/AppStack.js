import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from '../screens/MainTabScreen';
import EventScreen from '../screens/EventScreen';
import TimeScreen from '../screens/TimeScreen';
import DrawerContent from '../screens/DrawerContent';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="EventScreen" component={EventScreen} />
      <Drawer.Screen name="TimeScreen" component={TimeScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;
