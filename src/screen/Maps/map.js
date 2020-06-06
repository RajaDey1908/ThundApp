import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = (props) => {

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>
      <View style={styles.Button} >
        <Text>Map Screen</Text>
        <Button
          title="Go to Image"
          onPress={() => props.navigation.navigate('image')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Button:{
    marginTop:20,
    // margin:5
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapScreen;