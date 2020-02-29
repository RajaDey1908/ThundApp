import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/Home/Home'
import DetailsScreen from '../screen/Details/Details'
import SplashScreen from '../screen/Splash/Splash'


const Stack = createStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Overview',headerShown: false }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ title: 'Details', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;