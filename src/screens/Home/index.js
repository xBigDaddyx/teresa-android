import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text='Teresa' />
        <Title
          text='Mobile App'
          style={{ fontWeight: 'normal', color: 'gray', fontSize: 18 }}
        />
        <Title style={styles.subtitle} text='Welcome,' />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
