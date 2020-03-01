import React, { Component } from 'react';
import { View, Text, Button , StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// const MapScreen = (props) => {
class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: ''
    }
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Map Screen</Text>
      //   <MapView
      //     region={this.state.region}
      //     // onRegionChange={this.onRegionChange}
      //   />
      //   {/* <Button
      //     title="Go to Home"
      //     onPress={() => props.navigation.navigate('home')}
      //   /> */}
      // </View>
      // <View style={styles.container}>
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
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex:1,
     ...StyleSheet.absoluteFillObject,
  },
});
export default MapScreen;