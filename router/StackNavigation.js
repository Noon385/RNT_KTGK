import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contacts from '../Screen/Contacts';
import Profile from '../Screen/Profile';
import Favorites from '../Screen/Favorites';
import User from '../Screen/User';
import Option from '../Screen/Option'

const Stack = createNativeStackNavigator();

const SignInStackNavigtion = () => {
    return (
        <Stack.Navigator back>
            <Stack.Screen name="Contact" component={Contacts} />
            <Stack.Screen
                name="Profile"
                component={Profile}

            />
            <Stack.Screen name='Favorite' component={Favorites} />
            <Stack.Screen name='User' component={User} />
        </Stack.Navigator>
    )
}

const FavoriteStackNavigtion = () => {
    return (
        <Stack.Navigator back>
            <Stack.Screen name="Favorite" component={Favorites} />
            <Stack.Screen
                name="Profile"
                component={Profile}

            />
        </Stack.Navigator>
    )
}

const OptionsStackNavigtion = () => {
    return (
        <Stack.Navigator back>
            <Stack.Screen name="User" component={User} />
            <Stack.Screen
                name="Options"
                component={Option}

            />
        </Stack.Navigator>
    )
}
export { ContactStackNavigtion, FavoriteStackNavigtion, OptionsStackNavigtion }