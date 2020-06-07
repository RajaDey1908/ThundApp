import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          props.navigation.navigate("Drawer", {
            screen: "Drawer1",
          });
        }}
      />
    </View>
  );
}
export default HomeScreen; 