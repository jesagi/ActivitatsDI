import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Button,
} from 'react-native';

pantalla = () => {
  return (
    <View style={styles.box}>
      <View style={style.container}>
        
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
    flex:1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B1DDD9',
    justifyContent: 'flex-start',
  },
});

export default App;
