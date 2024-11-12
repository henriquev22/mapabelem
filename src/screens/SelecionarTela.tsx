import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SelecionarTela() {
  const navigation = useNavigation();

  const categorias = [
    { nome: 'Pontos Turísticos', tipo: 'turistico' },
    { nome: 'Locais de Coleta de Resíduos', tipo: 'residuo' },
    { nome: 'Locais de Eventos COP 30', tipo: 'evento' },
    { nome: 'Pontos de Ônibus', tipo: 'onibus' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Selecione o tipo de ponto:</Text>
      {categorias.map((categoria, index) => (
        <TouchableOpacity
          key={index}
          style={styles.botao}
          onPress={() => navigation.navigate('MapaTela', { tipo: categoria.tipo })}
        >
          <Text style={styles.textoBotao}>{categoria.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  botao: { padding: 15, backgroundColor: '#4CAF50', marginVertical: 5, borderRadius: 5 },
  textoBotao: { color: '#fff', fontSize: 18 },
});
