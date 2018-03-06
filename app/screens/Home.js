import React from 'react';
import { StatusBar, Text, Image } from 'react-native';

import { Container } from '../components/Container';

export default () => (
  <Container>
    <Image
      style={{ width: 300, height: 300 }}
      source={require('../assets/img/img1.jpg')}
    />

    <Text style={{ color: 'red' }}>Hello</Text>
  </Container>
);
