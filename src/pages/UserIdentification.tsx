import React, {useState} from 'react'
import {Text, SafeAreaView, View, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Styles from '../styles/Styles'
import colors from '../styles/colors'
import {Feather} from '@expo/vector-icons'

import {Button} from '../components/Button'

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [userName, setUserName] = useState<string>();

    const navigation = useNavigation();

    function handleInputBlur(){
        setIsFocused(false);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setUserName(value)
    }

    return(
        <SafeAreaView style={Styles.container}>
            <KeyboardAvoidingView style={Styles.container}>

                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}

                <TouchableOpacity 
                    style={Styles.buttonBack} activeOpacity={0.5}
                    onPress={() => {navigation.navigate('Wellcome')}}>
                        <Feather name={'chevron-left'} style={[Styles.buttonIcon, {color: colors.green}]}/>
                </TouchableOpacity>

                    <View style={[Styles.container, Styles.align, Styles.paddingFull]}>

                        <View style={[Styles.align, Styles.form]}>

                            <Text style={Styles.emoji}>{isFilled ? '😃': '🙂'}</Text>

                            <Text style={Styles.title}>
                                Como podemos {'\n'}
                                chamar você?
                            </Text>

                            <TextInput
                                placeholder={'Digite seu nome'}
                                autoCapitalize={'words'}
                                style={[Styles.textInput, (isFocused || isFilled) && {borderColor: colors.green}]}
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            ></TextInput>

                            <View style={Styles.footer}>
                                <Button
                                title={'Confirmar'}
                                onPress={() => {navigation.navigate('Confirmation')}}
                                ></Button>
                            </View>

                        </View>

                    </View>
                   {/* </TouchableWithoutFeedback> */}
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}