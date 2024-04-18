
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: colors.text_secondary,
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

export default styles;
