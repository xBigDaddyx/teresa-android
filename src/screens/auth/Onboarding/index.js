import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
const Onboarding = ({ navigation }) => {
    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../../../assets/images/bg02.jpg')}>
            <View style={styles.container}>

                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.logo}
                        source={require('../../../../assets/logo.png')}
                    />
                    <View style={styles.footer} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Let's get started</Text>
                    <Text style={styles.subtitle}>please login with your account</Text>

                    <Button onPress={() => navigation.navigate('Signin')}>Login</Button>
                </View>
            </View>
        </ImageBackground>

    );
};

export default React.memo(Onboarding);
