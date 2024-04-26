import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import theme from "../themes/theme"

const styles = StyleSheet.create({
  textInput:{
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  }
})

const StyledInput = ({style={},...props}) => {
  const inputStyles = [
    styles.textInput,
    style
  ]

  return (
    <TextInput style={inputStyles}{...props}/>
  )
}

export default StyledInput