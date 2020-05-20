import {
    StyleSheet,
} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#cfc9c9',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#cfc9c9',
        justifyContent: 'center',
    },
    // container: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center"
    //   },
      backgroundImage: {
        width: "100%",
        flex: 1
      },
    heading: {
        margin:5,
        fontSize:20
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: windowWidth - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        margin:10
        // color: '#ffffff',
    },
    button:{
        marginTop:10,
        backgroundColor:'#29aaf4'
    },
    imputBackground:{
        backgroundColor: '#4e42f5'
    }
});
