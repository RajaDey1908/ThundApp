import React, { Component } from 'react';
import { View, Text, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
let styles = require('./style');

class ImageScreen extends React.Component {
  // const ImageScreen = (props) => {
  constructor() {
    super()
    this.state = {
      avatarSource: ''
    }
  }

  selectImage = () => {
    console.log("sfs")
    ImagePicker.showImagePicker({
      title: 'Select Avatar',
    }, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ');
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(" in else")
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: response.uri,
        });
      }
    });
  }

  render() {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Select Image"
          onPress={this.selectImage}
        />
        <Image
         source={{ uri: this.state.avatarSource }}
         style={styles.ImageContainer}
         />
        <Text>Image Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('login')}
        />
      </View>
    );
  }
}
export default ImageScreen;