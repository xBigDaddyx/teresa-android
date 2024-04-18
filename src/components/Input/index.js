import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../constants/colors';

const Input = ({ ...props }) => {
  return (
    <TextInput

      placeholderTextColor={colors.gray}
      style={styles.input}
      {...props} />
  );
};

export default React.memo(Input);
