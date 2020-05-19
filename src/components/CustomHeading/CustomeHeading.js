import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';

// let styles = require('./style');
const CustomeHeading = (props) => {
  return (
    <View style={styles.inputWrapper}>
      {/* <TextInput
          {...props}
          placeholder={props.placeholder}
          // secureTextEntry={this.props.secureTextEntry}
          // autoCorrect={this.props.autoCorrect}
          // autoCapitalize={this.props.autoCapitalize}
          // returnKeyType={this.props.returnKeyType}
          // placeholderTextColor="white"
          underlineColorAndroid="transparent"
        /> */}
        <Text {...props}        
        style={[styles.heading, props.style]}
        >{props.children}</Text>
    </View>
  );
}


CustomeHeading.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: windowWidth - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    // color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  heading: {
    margin:5,
    fontSize:20
  },
});
export default CustomeHeading;