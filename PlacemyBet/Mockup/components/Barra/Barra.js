import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Header, Button, Image } from 'react-native-elements';

export class Barra extends Component {
    render() {
        return (
            <View style={styles.bottombox}>
                <View style={styles.button}>
                    <Button title='Eventos'></Button>
                </View>
                <View style={styles.button}>
                    <Button title='Eventos'></Button>
                </View>
                <View style={styles.button}>
                    <Button title='Eventos'></Button>
                </View>
            </View>
        );
    }
}

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
        flex: 1,
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