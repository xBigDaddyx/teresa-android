import { StyleSheet } from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  subtitle: {
    fontSize: 32,
    color: 'black',
    marginTop: 40,
    marginBottom: 34,
  },
});

export default React.memo(styles);
