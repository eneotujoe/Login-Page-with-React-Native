import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
      
        <View style={styles.logoContainer}>
          <Image 
          style={styles.logo}
          source={require('../../components/img/rn-logo.jpg')}
          />
          <Text style={styles.textContainer}>
            Hello Eneotu !
          </Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#54a0ff',
  }, 
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1, 
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    color: '#fff',
    fontSize:30,
    opacity: 0.7,
  },
  
})
