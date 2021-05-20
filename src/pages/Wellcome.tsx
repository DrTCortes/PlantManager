import React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, Image} from 'react-native'
import Styles from '../styles/Styles'
import watering from '../assets/watering.png'

export function Wellcome(){
  return (
    <SafeAreaView style={[Styles.container, Styles.align]}>

      <Text style={Styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>
      
      <Image source={watering} style={Styles.image} />

      <Text style={Styles.subtitle}>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Text>

      <TouchableOpacity style={[Styles.buttonwc, Styles.align]} activeOpacity={0.5}> 
        <Text style={[{color: '#FFF', fontSize: 24}]}>
            >
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}