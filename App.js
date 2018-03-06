import loginPage from './app/screens/loginPage';
import React from 'react';
import backgroundTest from './app/screens/backgroundTest';
import slider from './app/screens/slider';
import TextInput from './app/components/TextInput';
import Home from './app/screens/Home';
import Login from './app/components/Login/Login';
//export default () => <loginPage />;
export default slider;
//export default () => <Home />;

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Navigator } from 'react-native';
// import loginPage from './app/screens/loginPage';

// export default class loginMain extends Component {
//   render() {
//     return (
//       <Navigator
//         initialRoute={{ id: 'Login' }}
//         renderScene={this.navigatorRenderScene}
//       />
//     );
//   }
//   navigatorRenderScene(route, navigator) {
//     _navigator = navigator;
//     switch (route.id) {
//       case 'Login':
//         return <Login navigator={navigator} />;
//     }
//   }
// }
