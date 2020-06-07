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
import Tab1 from '../screen/Tab1/Tab1'
import Tab2 from '../screen/Tab2/Tab2'
import Drawer1 from '../screen/Drawer1/Drawer1'
import Drawer2 from '../screen/Drawer2/Drawer2'


const Initial = createStackNavigator();

const Initialcreen = () => (
  <Initial.Navigator>
    <Initial.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Overview',headerShown: false }}
    />   
    <Initial.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
    />  
  </Initial.Navigator>
);

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const AuthScreen = () => (
  <AuthStack.Navigator>
    {/* <AuthStack.Screen 
        name="Tab1"
        component={Tab1} 
        options={{ title: 'Tab 1',headerShown: false }}
    />     */}

    <ProfileStack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: 'Map', headerShown: false }}
    />
    <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login', headerShown: false }}
    />
  </AuthStack.Navigator>
);

const ProfileScreen = () => (
  <ProfileStack.Navigator>
    {/* <ProfileStack.Screen
        name="Tab2" 
        component={Tab2} 
        options={{ title: 'Tab 2', headerShown: false }}
    /> */}
    <ProfileStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details', headerShown: false }}
    />
    <ProfileStack.Screen
        name="Image"
        component={ImageScreen}
        options={{ title: 'Image', headerShown: false }}
    />
  </ProfileStack.Navigator>
);

const TabScreen= ()=>{
  return (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={Tab1} />
    <Tab.Screen name="Tab2" component={Tab2} />
  </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

const DrawerScreen= () =>{
  return (    
      <Drawer.Navigator>
        <Drawer.Screen name="Drawer1" component={Drawer1} />
        <Drawer.Screen name="Drawer2" component={Drawer2} />
      </Drawer.Navigator>
  );
}

const Nav = createStackNavigator();


const Navigation= () =>{
  return (    
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name="Initial" component={Initialcreen} />
        <Nav.Screen name="Tab" component={TabScreen} />
        <Nav.Screen name="Drawer" component={DrawerScreen} /> 
        <Nav.Screen name="Auth" component={AuthScreen} />
        <Nav.Screen name="Profile" component={ProfileScreen} />

      </Nav.Navigator>
    </NavigationContainer>
  );
}

// const Drawer = createDrawerNavigator();
// const DrawerNav= () =>{
//   return (
//       <Drawer.Navigator initialRouteName="Drawer1" >
//         <Drawer.Screen name="TabNav" component={TabNav} />
//         <Drawer.Screen name="Drawer1" component={Drawer1} />
//         <Drawer.Screen name="Drawer2" component={Drawer2} />
//       </Drawer.Navigator>
//   );
// }


// const Stack = createStackNavigator();
//   const StackNav=()=> {
//   return (
//     <Stack.Navigator>        
//         {/* <Stack.Screen
//             name="home"
//             component={HomeScreen}
//             options={{ title: 'Overview',headerShown: false }}
//         /> */}
//         {/* <Stack.Screen
//             name="splash"
//             component={SplashScreen}
//             options={{ headerShown: false }}
//         />         */}
//         {/* <Stack.Screen
//             name="login"
//             component={LoginScreen}
//             options={{ title: 'Login', headerShown: false }}
//         /> */}
//         {/* <Stack.Screen
//             name="details"
//             component={DetailsScreen}
//             options={{ title: 'Details', headerShown: false }}
//         /> */}
//         {/* <Stack.Screen
//             name="map"
//             component={MapScreen}
//             options={{ title: 'Map', headerShown: false }}
//         /> */}
//         {/* <Stack.Screen
//             name="image"
//             component={ImageScreen}
//             options={{ title: 'Image', headerShown: false }}
//         /> */}
//     </Stack.Navigator>
//   );
// }

// const Nav = createStackNavigator();

// const Navigation=()=> {
//   return (
//     <NavigationContainer>
//       <Nav.Navigator>        
//           <Nav.Screen
//               name="StackNav"
//               component={StackNav}
//               // options={{ title: 'Overview',headerShown: false }}
//           />
//           <Nav.Screen
//               name="DrawerNav"
//               component={DrawerNav}
//               // options={{ headerShown: false }}
//           />
//       </Nav.Navigator>
//     </NavigationContainer>
//   );
// }

export default Navigation;