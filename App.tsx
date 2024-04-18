import React from 'react';
import Splash from './src/screens/Splash';
import Onboarding from './src/screens/auth/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './src/screens/auth/Signin';

const Stack = createStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Signin' component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
