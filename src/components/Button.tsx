import React from 'react'
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native'
import Styles from '../styles/Styles'

interface ButtonProps extends TouchableOpacityProps{
    title: String;
}

export function Button({title, ...rest}: ButtonProps){
    return(
        <TouchableOpacity 
        style={[Styles.button, Styles.align]} 
        activeOpacity={0.5}
        {...rest}> 
        <Text style={Styles.buttonText}>
            {title}
        </Text>
      </TouchableOpacity>
    )

}