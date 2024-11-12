import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelecionarTela from './src/screens/SelecionarTela';
import MapaTela from './src/screens/MapaTela';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelecionarTela">
        <Stack.Screen name="SelecionarTela" component={SelecionarTela} options={{ title: 'O que você procura?' }} />
        <Stack.Screen name="MapaTela" component={MapaTela} options={{ title: 'Mapa Interativo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
