import React from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'

let styles = require('./style');


const LoginScreen = () => {
    const keyboardDidHide = () => {
        Keyboard.dismiss()
    }
    return (
        <KeyboardAvoidingView behavior="height" style={styles.MainContainer} onTouchMove={keyboardDidHide}>
            <TouchableOpacity >

                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Login</Text>
                        <Text>Username</Text>
                        <TextInput style={styles.input} />
                        <Text>Password </Text>
                        <TextInput style={styles.input} />
                        <Button
                            style={styles.button}
                            title="Press me"
                            onPress={keyboardDidHide}
                        />
                    </View>
                </ScrollView>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
export default LoginScreen;