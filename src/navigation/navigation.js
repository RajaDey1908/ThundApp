import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/Home/Home'
import DetailsScreen from '../screen/Details/Details'
import SplashScreen from '../screen/Splash/Splash'
import LoginScreen from '../screen/Login/Login'
import MapScreen from '../screen/Maps/map'
import ImageScreen from '../screen/Image/Image'
import Tab1Screen from '../screen/Tab1/Tab1'
import Tab2Screen from '../screen/Tab2/Tab2'
import Drawer1Screen from '../screen/Drawer1/Drawer1'
import Drawer2Screen from '../screen/Drawer2/Drawer2'


const Stack = createStackNavigator();
const StackNav = () => {
    return(
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
                    component={LoginScreen}
                    options={{ title: 'Login', headerShown: false }}
                />
                <Stack.Screen
                    name="details"
                    component={DetailsScreen}
                    options={{ title: 'Details', headerShown: false }}
                />
                <Stack.Screen
                    name="map"
                    component={MapScreen}
                    options={{ title: 'Map', headerShown: false }}
                />
                <Stack.Screen
                    name="image"
                    component={ImageScreen}
                    options={{ title: 'Image', headerShown: false }}
                />
            </Stack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Tab 1" component={Tab1Screen} />
      <SettingsStack.Screen name="Tab 2" component={Tab2Screen} />
    </SettingsStack.Navigator>
  );
}


const Drawer = createDrawerNavigator();
function DrawerTabScreen() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Drawer1Screen" component={Drawer1Screen} />
        <Drawer.Screen name="Drawer2Screen" component={Drawer2Screen} />
      </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNav= function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackNav} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Drawer" component={DrawerTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNav;