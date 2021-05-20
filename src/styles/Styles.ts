import {StyleSheet} from 'react-native'
import colors from './colors'


export default StyleSheet.create({
    container:{
        flex:1,
    },
    align:{
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    margin: {
        margin: 0,
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
    },
    subtitle:{
        fontSize: 17,
        textAlign: 'center',
        color: '#5C6660'
    },
    image:{
        width: 292,
        height: 284,
    },
    buttonwc:{
        width: 56,
        height: 56,
        borderRadius: 20,
        backgroundColor: colors.green,
    }
})