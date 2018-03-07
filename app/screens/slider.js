import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';

import { LinearGradient } from 'expo';

import Swiper from 'react-native-swiper';
import Home from './Home';
import Login from '../components/Login/Login';
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
// var styles = StyleSheet.create({
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
// });

// var swiper = React.createClass({
//   render: function() {
//     return (
//       <Swiper style={styles.wrapper} showsButtons={true}>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//         </View>
//       </Swiper>
//     );
//   },
// });
const slider = () => (
  <Swiper
    style={styles.wrapper}
    showsButtons={false}
    loop={false}
    dot={
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, .5)',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    }
    activeDot={
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    }
  >
    <BackgroundImage>
      <LinearGradient
        colors={[
          'rgba(58, 106, 252, .5)',
          //'rgba(0, 101, 255, 0.5)',
          //'rgba(0, 53, 135, .5)',

          'rgba(255, 255, 255,.95)',

          //'rgba(213, 232, 246,0.9)',
        ]}
        style={styles.container1}
      >
        <View style={{ paddingTop: 200, paddingBottom: 200 }}>
          <Text style={styles.text}>Welcome!</Text>

          <View style={styles.bottomTextContainer}>
            <Text style={styles.swipeText}>Swipe to continue</Text>
          </View>
        </View>
        <View style={{}}>
          <Image
            style={styles.logo}
            source={require('../assets/img/logo/logo.png')}
          />
        </View>
      </LinearGradient>
    </BackgroundImage>
    {/*
    <BackgroundImage>
      <LinearGradient
        colors={[
          'rgba(213, 232, 246,0.5)',
          'rgba(58, 106, 252, .9)',
          'rgba(58, 106, 252, .5)',

          //'rgba(213, 232, 246,0.9)',
        ]}
        style={styles.container1}
      >
        <View style={{}}>
          <Image
            style={styles.logo}
            source={require('../assets/img/logo/logo.png')}
          />
        </View>
        <View style={{ paddingTop: 200, paddingBottom: 300 }}>
          <Text style={styles.text}>Welcome!</Text>

          <View style={styles.bottomTextContainer}>
            <Text style={styles.swipeText}>Swipe to continue</Text>
          </View>
        </View>
      </LinearGradient>
    </BackgroundImage>

    <BackgroundImage>
      <View style={styles.container2}>
        <Text style={styles.text}>Keep on sliding!</Text>
      </View>
    </BackgroundImage>
*/}

    {/*<Home />*/}
    <BackgroundImage>
      <Login />
    </BackgroundImage>
  </Swiper>
);
export default slider;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    //resizeMode: 'cover',
  },
  container1: {
    //textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: '#000',
    // opacity: 0.5,
    //backgroundColor: 'rgba(213, 232, 246,0.85)',
    //paddingBottom: 200,
  },
  container2: {
    //textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: '#000',
    // opacity: 0.5,
    backgroundColor: 'rgba(58, 106, 252, .5)',
  },

  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,.0)',
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  swipeText: {
    color: 'white',
  },
  bottomTextContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 200,
    height: 50,
  },
});

AppRegistry.registerComponent('myproject', () => swiper);
