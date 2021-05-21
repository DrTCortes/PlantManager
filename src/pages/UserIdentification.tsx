import React, {useState} from 'react'
import {Text, SafeAreaView, View, TextInput} from 'react-native'
import Styles from '../styles/Styles'
import {Feather} from '@expo/vector-icons'

import {Button} from '../components/Button'

export function UserIdentification(){
    return(
        <SafeAreaView style={Styles.container}>
            <View style={[Styles.container, Styles.align, Styles.margin, {paddingHorizontal: 20}]}>
            
                <View style={[Styles.align, Styles.form]}>

                    <Text style={Styles.emoji}>😄</Text>

                    <Text style={Styles.text}>
                        Como podemos {'\n'}
                        chamar você?
                    </Text>

                    <TextInput placeholder={'Digite seu nome'} autoCapitalize={'words'} style={Styles.textInput}></TextInput>
                    
                    <View style={Styles.footer}>
                        <Button title={'Confirmar'}></Button>
                    </View>

                </View>

            </View>
        </SafeAreaView>

    )
}