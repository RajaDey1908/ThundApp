import React, { Component } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'


let styles = require('./style');



// const LoginScreen = (props) => {

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        // this.state = { counter: '' };

        this.handleChange = this.handleChange.bind(this);
        this.keyboardDidHide = this.keyboardDidHide.bind(this);
    }

    keyboardDidHide = () => {
        Keyboard.dismiss()
    }

    onChangeText = (key, value) => {
        console.log("key",key)
        console.log("value",value)
      }

    handleChange(event = {}) {
        console.log("event.target && event.target.name", event.target && event.target.value)
    }
    render() {

        return (
            <KeyboardAvoidingView behavior="height" style={styles.MainContainer} onTouchMove={this.keyboardDidHide}>
                <TouchableOpacity >

                    <ScrollView>
                        <View style={styles.container}>

                            <Text style={styles.heading}>Login</Text>

                            <Text>Username</Text>
                            <TextInput
                                style={styles.input}
                                id="username"
                                name="username"
                                onChangeText={val => this.onChangeText('username', val)}
                            />

                            <Text>Password </Text>
                            <TextInput
                                style={styles.input}
                                id="password"
                                name="password"
                                // onChange={this.handleChange}
                                onChangeText={val => this.onChangeText('password', val)}

                            />

                            <Button
                                style={styles.button}
                                title="submit"
                                name="submit"
                                // onPress={this.handleChange}
                            />

                        </View>
                    </ScrollView>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}
export default LoginScreen;