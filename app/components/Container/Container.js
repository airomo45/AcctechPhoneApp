import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';

//import styles from './styles';
const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const Container = ({ children }) => (
  <View
    style={
      styles.container1

      //     {
      //   flex: 1,
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   backgroundColor: '#000',
      // }
    }
  >
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
