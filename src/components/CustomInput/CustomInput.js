import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import {StyleSheet, View, TextInput, Image} from 'react-native';

// let styles = require('./style');
const CustomInput = () => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
          style={styles.input}
          // placeholder={this.props.placeholder}
          // secureTextEntry={this.props.secureTextEntry}
          // autoCorrect={this.props.autoCorrect}
          // autoCapitalize={this.props.autoCapitalize}
          // returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
    </View>
  );
}


CustomInput.propTypes = {
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
});
export default CustomInput;