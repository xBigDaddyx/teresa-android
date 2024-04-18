
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: colors.base,
    paddingHorizontal: 24,
    paddingVertical: 13,
    marginVertical: 12,
    borderRadius: 10,
    color: colors.text_primary,
    fontSize: 15,
  }
});

export default styles;
