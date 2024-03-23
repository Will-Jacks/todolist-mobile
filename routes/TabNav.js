import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import HomeScreen from '../src/screens/HomeScreen';
import UserScreen from '../src/screens/UserScreen';

const Tab = createBottomTabNavigator();

export default function TabNav() {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='home' size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name='user' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}