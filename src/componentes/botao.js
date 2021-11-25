import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Texto from './texto'

export default function Botao({ children, style }) {
  return (
    <>
      <TouchableOpacity style={[style, estilos]}>{children}</TouchableOpacity>
    </>
  )
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6
  },
  textoBotao: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold'
  }
})
