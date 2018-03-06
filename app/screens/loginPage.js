import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';
const loginPage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Test</Text>
  </View>
);
export default loginPage;
// export default class loginPage extends Component {
//   render() {
//     return (

// <View style={styles.container}>
//   <Text style={styles.text}>Test</Text>
// </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffd700',
  },
});
