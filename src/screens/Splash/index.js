import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
const Splash = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/images/bg02.jpg')}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.title}>Teresa</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Teresa</Text>

        <Button>Get Started</Button>
      </View>
    </ImageBackground>
  );
};

export default React.memo(Splash);
