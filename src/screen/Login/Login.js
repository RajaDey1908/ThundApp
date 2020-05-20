import React, { useEffect, useState, Component } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomHeading from '../../components/CustomHeading/CustomeHeading'
import CostomButton from '../../components/CustomButton/CostomButton'
import backgroundImage from '../../assets/background.jpg';


import { connect } from 'react-redux'
import * as actionTypes from '../../redux/actions/index'

let styles = require('./style');

// const LoginScreen = (props) => {

class LoginScreen extends Component {
    constructor(props) {
        super(props);

    }

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

     keyboardDidHide = () => {
        Keyboard.dismiss()
    }

    //  onChangeText = (key, value) => {

    //     // this.props.addUsername(value)
    //     // if (key === "username") {
    //     //     setUsername(value);
    //     // } else if (key === "password") {
    //     //     setPassword(value);
    //     // }
    // }

    onChangeText = (key, val) => {
        // this.setState({ [key]: val })
        this.props.addUsername(val)
      }

    render() {

       

        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
            {/* <KeyboardAvoidingView behavior="height" style={styles.MainContainer} onTouchMove={this.keyboardDidHide}> */}
                    <ScrollView>
                        <View style={styles.container}>
                            {/* {console.log("props", this.props)} */}
                            <Text style={styles.heading}>Login </Text>
                            <CustomHeading >lteste</CustomHeading>
                            <CustomInput
                                style={styles.imputBackground}
                                placeholder="tesCustomInput"
                            />
                            <Text>Username   {this.props.username}</Text>
                            <TextInput
                                style={styles.input}
                                id="username"
                                name="username"
                                // onChangeText={val => onChangeText('username', val)}
                                onChangeText={val => this.onChangeText('username', val)}
                            // onChange={props.addUsername}

                            />
                            <Text>Password   </Text>
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                onChangeText={val => onChangeText('password', val)}
                            />
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                onChangeText={val => onChangeText('password', val)}
                            />
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                onChangeText={val => onChangeText('password', val)}
                            />
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                onChangeText={val => onChangeText('password', val)}
                            />
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                onChangeText={val => onChangeText('password', val)}
                            />
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                onChangeText={val => onChangeText('password', val)}
                            />
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                onChangeText={val => onChangeText('password', val)}
                            />
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                onChangeText={val => onChangeText('password', val)}
                            />
                            {/* <Button
                                style={styles.button}
                                title="submit"
                                name="submit"
                            // onPress={this.handleChange}
                            /> */}
                            <CostomButton
                                 style={styles.button}
                                // style="#29aaf4"
                                // title="submit"
                                // name="submit"
                            // onPress={this.handleChange}
                            >submit</CostomButton>
                        </View>
                    </ScrollView>
            {/* </KeyboardAvoidingView> */}
            </ImageBackground>

        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.testReducer.username
    };
}
// const mapStateToProps = state => {
//     return {
//         places: state.places.places,
//         selectedPlace: state.places.selectedPlace
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        // onAddPlace: name => dispatch(addPlace(name)),
        addUsername: username => dispatch(actionTypes.addUsername(username))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
// export default LoginScreen;