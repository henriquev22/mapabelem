import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { RouteProp, useRoute } from '@react-navigation/native';
import { locais } from '../data/dadosLocais';

type ParamList = { MapaTela: { tipo: string } };
type MapaTelaRouteProp = RouteProp<ParamList, 'MapaTela'>;

const MapaTela = () => {
  const route = useRoute<MapaTelaRouteProp>();
  const { tipo } = route.params;
  const [pontos, setPontos] = useState([]);

  // UseEffect para filtrar os pontos com base no tipo
  useEffect(() => {
    const pontosFiltrados = locais.filter(local => local.tipo === tipo);
    setPontos(pontosFiltrados);
  }, [tipo]);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -1.4558,  // Latitude central de Belém
        longitude: -48.4902, // Longitude central de Belém
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {pontos.map(ponto => (
        <Marker
          key={ponto.id}
          coordinate={{ latitude: ponto.latitude, longitude: ponto.longitude }}
        >
          <Callout onPress={() => Alert.alert(ponto.nome, ponto.descricao)}>
            <View style={styles.callout}>
              <Text style={styles.nome}>{ponto.nome}</Text>
              <Image source={ponto.imagem} style={{ width: '100%', height: 100 }} />
              <Text>{ponto.descricao}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1 },
  callout: { width: 200, padding: 5 },
  nome: { fontSize: 16, fontWeight: 'bold' },
});

export default MapaTela;
