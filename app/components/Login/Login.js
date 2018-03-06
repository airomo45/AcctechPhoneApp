import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.innerContainer}>
            <MaterialCommunityIcons name="github-face"
              size={20}
              color="#fff"
              style={{ paddingRight: 10 }} />
            <Text style={styles.logoText}>Logo</Text>
          </View>
          <Text style={styles.subHeading}>_______________</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#212728',
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  textContainer: {
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 80,
  },
  formTextContainer: {
    //alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subHeading: {
    color: '#fff',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  }
});
