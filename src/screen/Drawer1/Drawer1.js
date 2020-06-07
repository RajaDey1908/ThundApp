import * as React from 'react';
import { View, Text, Button} from 'react-native';


const Drawer1Screen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer 1 Screen</Text>
      <Button
        title="Go to Tab 1 details"
        onPress={() => {
          props.navigation.navigate("Tab", {
            screen: "Tab1",
          });
        }}
      />
    </View>
  );
}
export default Drawer1Screen;