import { Image, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: colors.base,
        padding: 46,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,

    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        width: '100%',
        backgroundColor: colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

    },
    title: {
        color: colors.primary,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    subtitle: {
        fontSize: 15,
        marginVertical: 16,
        color: colors.black,
        alignSelf: 'center',
    },
});
export default styles;
