import React from 'react';
import { View, Text, Button } from 'react-native';

const ImageScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Image Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => props.navigation.navigate('login')}
      />
    </View>
  );
}
export default ImageScreen;