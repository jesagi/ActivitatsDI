/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { Header, Image, Icon} from 'react-native-elements';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header
        leftComponent={{ text: 'Principal', style: { color: '#ffffff', fontSize: 18 } }}
        containerStyle={{
          backgroundColor: '#004D40',
          justifyContent: 'space-around',
        }}
      />
      <View style={styles.container}>
        <ScrollView style={{ backgroundColor: '#B1DDD9' }}>
          {/* Comença un component */}
          <View style={styles.section}>
            <View>
              <Image style={styles.images}
                source={{
                  uri: 'https://assets.stickpng.com/images/584ad186b519ea740933a89e.png',
                }}
                style={{ width: 75, height: 75 }}
              />
            </View>
            <View style={styles.textbox}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>VALENCIA - REAL MADRID</Text>
              <View style={styles.textdetails}>
                <View style={styles.texto}>
                  <Text>1.5 OVER 11/10/2020</Text>
                </View>
                <View style={styles.texto}>
                  <Text>CUOTA: 2.70 APUESTA 100€</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Image style={styles.images}
                source={{ uri: 'https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png' }}
                style={{ width: 75, height: 75 }}
              />
            </View>
            <View style={styles.textbox}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>BARCELONA - OSASUNA</Text>
              <View style={styles.textdetails}>
                <View style={styles.texto}>
                  <Text>1.5 OVER 11/10/2020</Text>
                </View>
                <View style={styles.texto}>
                  <Text>CUOTA: 2.70 APUESTA 100€</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Image style={styles.images}
                source={{ uri: 'https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/171.png' }}
                style={{ width: 75, height: 75 }}
              />
            </View>
            <View style={styles.textbox}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>BETIS - DEPORTIVO</Text>
              <View style={styles.textdetails}>
                <View style={styles.texto}>
                  <Text>1.5 OVER 11/10/2020</Text>
                </View>
                <View style={styles.texto}>
                  <Text>CUOTA: 2.70 APUESTA 100€</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottombox}>
          <View style={styles.button}>
            <Button title="Eventos" color="#004D40" />
          </View>
          <View style={styles.button}>
            <Button title="Opciones" color="#004D40" />
          </View>
          <View style={styles.button}>
            <Button title="Salir" color="#004D40" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B1DDD9',
    justifyContent: 'flex-start',
  },
  section: {
    borderColor: '#004D40',
    borderTopWidth: 0,
    borderWidth: 6,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textbox: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 15,
    padding: 10,
  },
  textdetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  texto: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
  },
  bottombox: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    flex: 1,
    fontSize: 15,
    justifyContent: 'flex-end',
  },
});

export default App;
