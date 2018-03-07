import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={
            Platform.OS === 'android' ? 'light-content' : 'dark-content'
          }
        />
        <TouchableOpacity style={styles.facebookButton}>
          <View style={styles.innerContainer}>
            <FontAwesome
              name="facebook-official"
              size={20}
              color="#fff"
              style={{ paddingRight: 10 }}
            />
            <Text style={styles.buttonText}>Login with Facebook</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.spacerDefault} />
        <TouchableOpacity style={styles.instagramButton}>
          <View style={styles.innerContainer}>
            <FontAwesome
              name="instagram"
              size={20}
              color="#fff"
              style={{ paddingRight: 10 }}
            />
            <Text style={styles.buttonText}>Login with Instagram</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.spacer}>
          <Text style={styles.spacerText}>Or</Text>
        </View>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(rgba(0,0,0,0.7))"
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="rgba(rgba(0,0,0,0.7))"
          style={styles.input}
          returnKeyType="done"
          ref={input => (this.passwordInput = input)}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.spacer}>
          <Text style={styles.smallText}>Forgot Password</Text>
        </View>

        <Text style={styles.largeText}>Don't Have an Account?</Text>
        <View
          style={{
            paddingTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 220,
  },
  input: {
    height: 40,
    // backgroundColor: 'rgba(rgba(47, 53, 66, .6))',
    backgroundColor: 'rgba(rgba(255, 255, 255, .5))',
    marginBottom: 15,
    color: '#000',
    paddingHorizontal: 10,
    // borderBottomColor: '#ffffff',
    // borderBottomWidth: 0.6,
  },
  buttonContainer: {
    backgroundColor: '#0070cc',
    paddingVertical: 15,
  },
  signUpButton: {
    backgroundColor: '#fff',
    borderColor: 'rgb(24,138,214)',
    paddingVertical: 8,
    borderWidth: 1,
    width: 100,
  },
  facebookButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  instagramButton: {
    backgroundColor: '#ff4757',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  },

  spacer: {
    padding: 20,
  },
  spacerDefault: {
    padding: 10,
  },
  spacerText: {
    color: '#0070cc',
    textAlign: 'center',
    //fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    color: '#0070cc',
    textAlign: 'center',
  },
  largeText: {
    fontSize: 15,
    color: '#0070cc',
    textAlign: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  signUpText: {
    color: 'rgb(24,138,214)',
    textAlign: 'center',
    fontWeight: '700',
  },
});
