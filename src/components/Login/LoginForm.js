import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'

export default class LoginForm extends Component {
  render() {
    return (
      
      <SafeAreaView>
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <TextInput 
        style={styles.textInput}
        placeholder='Username or Email'
        placeholderTextColor='rgba(225, 225, 225, 0.6)'
        returnKeyType= 'next'
        onSubmitEditing= {() => this.passwordInput.focus()}
        keyboardType='email-address'
        />
        <TextInput 
        style={styles.textInput}
        placeholder='Password'
        placeholderTextColor='rgba(225, 225, 225, 0.6)'
        secureTextEntry
        returnKeyType='send'
        ref={(input)=>this.passwordInput=input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
       padding: 20
    },
    textInput: {
        height: 50,
        backgroundColor: 'rgba(225, 225, 225, 0.5)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 8,

    },
    buttonContainer:{
      backgroundColor: '#341f97',
      paddingVertical: 15,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
    },
})
