import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'


let styles = require('./style');

const LoginScreen = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const keyboardDidHide = () => {
        Keyboard.dismiss()
    }

    const onChangeText = (key, value) => {
        console.log("key1", key)
        console.log("value1", value)
        if (key === "username") {
            setUsername(value);
        } else if (key === "password") {
            setPassword(value);
        }
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.MainContainer} onTouchMove={keyboardDidHide}>
            <TouchableOpacity >

                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Login</Text>
                        <Text>Username   {username}</Text>
                        <TextInput
                            style={styles.input}
                            id="username"
                            name="username"
                            onChangeText={val => onChangeText('username', val)}
                        />
                        <Text>Password   {password}</Text>
                        <TextInput
                            style={styles.input}
                            id="password"
                            name="password"
                            onChangeText={val => onChangeText('password', val)}
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
export default LoginScreen;