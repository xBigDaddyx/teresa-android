import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
const Signin = () => {
    return (
        <SafeAreaView style={styles.container}>

            <Title>Welcome back</Title>

            <Input placeholder='Email' keyboardType='email-address' />
            <Input placeholder='Password' secureTextEntry />
            <Button>Login</Button>





        </SafeAreaView>


    );
};

export default React.memo(Signin);
