import React, { Component } from 'react';
import {
    Linking,
    Text,
    TextInput,
    View,
    Platform,
  } from 'react-native'

  import {
    Container,
    Icon,
    Button,
  } from 'native-base'

import styles from './styles';

export default class Sidebar extends Component {
    render() {
        return(
            <Container style ={{backgroundColor: '#2E4057'}}>
                <View style={styles.SideNav}>
                    <View style={styles.selectorWrap}>
                        <Text style={styles.titleText}> Blockchain Addict </Text>
                        <Button style={Platform.OS === 'android' ? {marginBottom: 20, backgroundColor: 'rgba(255,255,255,.05)', width: '96%', height: 35, paddingTop: 6, paddingLeft: 7} : {backgroundColor: 'transparent',paddingLeft: 0}}
                         >
                         <Text style={Platform.OS === 'android' ? styles.selectorAndroid : styles.selector}>
                         <Icon name='md-menu' style={{color: '#FDC134',fontSize: 14, backgroundColor: 'transparent'}}/> Login
                         </Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}