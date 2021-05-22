import React, {useState} from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Styles from '../styles/Styles'
import {Feather} from '@expo/vector-icons'

import watering from '../assets/watering.png';
import { useNavigation } from '@react-navigation/core';

export function Wellcome(){
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
      <View style={[Styles.container, Styles.align, {paddingHorizontal: 20}]}>

        <Text style={[Styles.title, Styles.paddingFull, {paddingTop: 50}]}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
        
        <Image source={watering} style={Styles.image} resizeMode={'contain'} />

        <Text style={Styles.subtitle}>
          Não esqueça mais de regar suas {'\n'}
          plantas. Nós cuidamos de lembrar você {'\n'}
          sempre que precisar.
        </Text>
      
        <TouchableOpacity 
          style={[Styles.buttonWC, Styles.align]} 
          activeOpacity={0.5}
          onPress={() => {navigation.navigate('UserIdentification')}}
          > 

            <Feather name={'chevron-right'} style={Styles.buttonIcon}/>

        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}