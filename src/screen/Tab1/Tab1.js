import * as React from 'react';
import { View, Text, Button} from 'react-native';


const Tab1Screen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab 1 Screen</Text>
      <Button
        title="Go to Tab 1 details"
        onPress={() => {
          props.navigation.navigate("Profile", {
            screen: "Details",
          });
        }}
      />
    </View>
  );
}
export default Tab1Screen;