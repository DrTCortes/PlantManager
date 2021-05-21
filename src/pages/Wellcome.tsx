import React, {useState} from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, Image} from 'react-native'
import Styles from '../styles/Styles'
import {Feather} from '@expo/vector-icons'

import watering from '../assets/watering.png';
import {Button} from '../components/Button'

export function Wellcome(){
  return (
    <SafeAreaView style={Styles.container}>
      <View style={[Styles.container, Styles.align, {paddingHorizontal: 20}]}>

        <Text style={[Styles.title, Styles.margin]}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
        
        <Image source={watering} style={[Styles.image, Styles.margin]} resizeMode={'contain'} />

        <Text style={[Styles.subtitle, Styles.margin]}>
          Não esqueça mais de regar suas {'\n'}
          plantas. Nós cuidamos de lembrar você {'\n'}
          sempre que precisar.
        </Text>
      
        <TouchableOpacity 
          style={[Styles.button, Styles.align]} 
          activeOpacity={0.5}> 

            <Feather name={'chevron-right'} style={Styles.buttonIcon}/>

        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}