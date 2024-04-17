import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import React from 'react';
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  title: {
    color: colors.primary,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default React.memo(styles);
