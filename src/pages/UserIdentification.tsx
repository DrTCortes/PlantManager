import React, {useState} from 'react'
import {Text, SafeAreaView, View, TextInput} from 'react-native'
import Styles from '../styles/Styles'
import {Feather} from '@expo/vector-icons'

import {Button} from '../components/Button'

export function UserIdentification(){
    return(
        <SafeAreaView style={Styles.container}>
            <View style={[Styles.container, Styles.align, {paddingHorizontal: 20}]}>
            
            <View style={[{width: 60, height: 60, backgroundColor: 'yellow'}]}/>

            <Text style={Styles.text}>
                Como podemos {'\n'}
                chamar você?
            </Text>

            <TextInput autoCapitalize={'characters'} style={Styles.textInput}></TextInput>
            
            <Button title={'Confirmar'}></Button>

            </View>
        </SafeAreaView>

    )
}