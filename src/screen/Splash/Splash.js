import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image
} from 'react-native';
let styles = require('./style');

class Splash extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('map')
        }, 2000);
    }
    render() {
        return (
            <ImageBackground
                style={styles.Container}
                source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg', }}
            >
                <View style={styles.MainContainer}>
                    <Image style={styles.ImageContainer} source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png' }}
                    />
                    <Text style={styles.TextStyle}>Welcome To My App</Text>
                </View>
            </ImageBackground>
        )
    }
}



export default Splash