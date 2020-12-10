import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Button,
  Text,
} from 'react-native';

import { Header, Input } from 'react-native-elements';

pantalla = () => {
  return (
    <View style={styles.box}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.box}>
        </View>
        <View style={styles.section}>
          <Text>Correo Electronico</Text>
          <Input placeholder='Email'></Input>
        </View>
        <View style={styles.section}>
        </View>
        <View style={styles.section}>
        </View>
        <View style={styles.section}>
        </View>
      </View>
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <View style={styles.box}>
          {pantalla()}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 2,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B1DDD9',
    justifyContent: 'flex-start',
  },
  section: {
    flex: 1,
    borderColor: '#004D40',
    borderTopWidth: 0,
    borderWidth: 6,
    flexDirection: 'column',
    alignItems: 'right',
    borderColor: 'red',
    borderWidth: 2,
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
    backgroundColor: '#004D40',
  }
});

export default App;