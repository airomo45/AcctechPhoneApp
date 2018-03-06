import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native';

class BackgroundImage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../img/sky.jpg')}
        style={styles.backgroundImage}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

class TestBackgroundImage extends Component {
  render() {
    return (
      <BackgroundImage>
        <Text style={styles.text}>Fullscreen!</Text>
      </BackgroundImage>
    );
  }
}
const backgroundTest = () => (
  <BackgroundImage>
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  </BackgroundImage>
);
export default backgroundTest;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    //resizeMode: 'cover',
  },
  container: {
    //textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: '#000',
    // opacity: 0.5,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },

  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
