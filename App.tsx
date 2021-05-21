import React from 'react'
import {Wellcome} from './src/pages/Wellcome'
import {UserIdentification} from './src/pages/UserIdentification'
import AppLoading from 'expo-app-loading'
import {
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

export default function App(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  })
  
  // if (!fontsLoaded){
  //   return (console.log('Carregando!'))}

  return (
    <UserIdentification/>
  )
}