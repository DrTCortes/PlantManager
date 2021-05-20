import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import Styles from '../styles/Styles'

interface ButtonProps{
    title: string;
}

export function Button({title}: ButtonProps){
    return(
        <TouchableOpacity style={[Styles.buttonwc, Styles.align]} activeOpacity={0.5}> 
        <Text style={[{color: '#FFF', fontSize: 24}]}>
            {title}
        </Text>
      </TouchableOpacity>
    )

}