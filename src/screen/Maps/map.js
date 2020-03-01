import React from 'react';
import { View, Text, Button } from 'react-native';

const MapScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('home')}
      />
    </View>
  );
}
export default MapScreen;