import * as React from 'react';
import { View, Text, Button} from 'react-native';


const Drawer2Screen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer 2 Screen</Text>
      <Button
        title="Go to Tab 2 Screen"
        onPress={() => props.navigation.navigate('Drawer1Screen')}
      />
    </View>
  );
}
export default Drawer2Screen;