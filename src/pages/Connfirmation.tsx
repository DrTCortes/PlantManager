import React, {useState} from 'react'
import {Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import Styles from '../styles/Styles'
import colors from '../styles/colors'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

import {Button} from '../components/Button'

export function Confirmation(){
    
    const navigation = useNavigation();

    return(
    <SafeAreaView style={Styles.container}>

        <TouchableOpacity 
            style={Styles.buttonBack} 
            activeOpacity={0.5}
            onPress={() => {navigation.navigate('UserIdentification')}}>

            <Feather name={'chevron-left'} style={[Styles.buttonIcon, {color: colors.green}]}/>

        </TouchableOpacity>

        <View style={[Styles.container, Styles.align, Styles.paddingFull]}>

            <View style={Styles.align}>
                <Text style={Styles.emoji}>
                    😃
                </Text>

                <Text style={Styles.title}>
                    Prontinho
                </Text>

                <Text style={Styles.subtitle}>
                    Agora vamos começar a cuidar das suas 
                    plantinhas com muito cuidado.
                </Text>

                <View style={[ Styles.footer]}>

                    <Button title={'Começar'}/>

                </View>

            </View>

        </View>
    </SafeAreaView>
    )
}