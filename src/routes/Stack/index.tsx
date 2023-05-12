import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {propNavigationStack} from './Models';

import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';
import Search from '../../Screens/Search';

const {Navigator, Screen} = createNativeStackNavigator<propNavigationStack>();

export default function () {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
}
