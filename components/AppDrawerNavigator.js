import * as React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import firebase from 'firebase';
import db from '../config';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {TabNavigator} from './TabNavigator'
import SideBarMenu from './SideBarMenu'
import SettingScreen from '../screens/SettingScreen'

export const AppDrawerNavigator= createDrawerNavigator({
    Home: {screen: TabNavigator},
    Setting: {screen: SettingScreen}

},
{
contentComponent: SideBarMenu
},
{
    initialRouteName: 'Home'
})