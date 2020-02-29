import React from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'

let styles = require('./style');

const keyboardDidHide = () => {
    console.log("Sdfsdf");
    Keyboard.dismiss()
}
const LoginScreen = () => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.MainContainer} onTouchMove={() => Keyboard.dismiss()}>
            <TouchableOpacity >
                <View style={styles.container}>
                    <Text style={styles.heading}>Login</Text>
                    <Text>Username</Text>
                    <TextInput style={styles.input} />
                    <Text>Password</Text>
                    <TextInput style={styles.input} />
                    <Button
                        style={styles.button}
                        title="Press me"
                    // onPress={() => Keyboard.dismiss()}
                    />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
export default LoginScreen;