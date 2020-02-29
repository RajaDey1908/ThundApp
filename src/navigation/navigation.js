import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/Home/Home'
import DetailsScreen from '../screen/Details/Details'
import SplashScreen from '../screen/Splash/Splash'
import SplashLogin from '../screen/Login/Login'


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
                    name="home"
                    component={HomeScreen}
                    options={{ title: 'Overview',headerShown: false }}
                />
                <Stack.Screen
                    name="login"
                    component={SplashLogin}
                    options={{ title: 'Login', headerShown: false }}
                />
                <Stack.Screen
                    name="details"
                    component={DetailsScreen}
                    options={{ title: 'Details', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;