import * as React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
import Exchange from '../screens/Exchange';

export const TabNavigator = createBottomTabNavigator({
    HomeScreen : {
    screen: HomeScreen,
    navigationOptions:{
        tabBarIcon: <Image
        source={require("../assets/home-icon.png")}
        style={{width:20, height:20}}
        />,
        tabBarLabel: 'Home'
    }
    },

    Exchange : {
        screen: Exchange,
        navigationOptions:{
            tabBarIcon: <Image
            source={require("../assets/ads-icon.png")}
            style={{width:20, height:20,}}
            />,
            tabBarLabel: 'Exchange'
    }
    },
})