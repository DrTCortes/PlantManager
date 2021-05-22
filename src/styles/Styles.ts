import {StyleSheet, Dimensions} from 'react-native'
import colors from './colors'
import fonts from './fonts'

const widthDisplay = Dimensions.get('window').width * 0.7
const heightDisplay = Dimensions.get('window').height * 0.4
 
export default StyleSheet.create({
    container:{
        flex:1,
    },
    align:{
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    paddingFull: {
        paddingBottom: 50,
        paddingHorizontal: 20
    },
    form:{
        // paddingHorizontal: 54,
        width: '100%',
    },
    title:{
        fontSize: 24,
        fontFamily: fonts.jostSemiBold,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 32,
    },
    subtitle:{
        fontSize: 17,
        fontFamily: fonts.jostRegular,
        textAlign: 'center',
        color: '#5C6660'
    },
    text:{
        fontSize: 24,
        fontFamily: fonts.jostSemiBold,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 32,        
    },
    textInput:{
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        width: widthDisplay,
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    emoji:{
        fontSize: 50,
        marginBottom: 30,
    },
    image:{
        width: widthDisplay,
        height: widthDisplay,
        maxHeight: heightDisplay,
    },
    button:{
        height: 56,
        paddingHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: colors.green,
    },
    buttonWC:{
        height: 56,
        width: 56,
        borderRadius: 20,
        backgroundColor: colors.green,
    },
    buttonText:{
        fontSize: 17,
        color: '#FFF', 
    },
    buttonIcon:{
        fontSize: 32,
        color: '#FFF',
    },
    buttonBack:{
        width: 56,
        height: 56,
        margin: 20,
    },
    footer:{
        marginTop: 50,
    }
})