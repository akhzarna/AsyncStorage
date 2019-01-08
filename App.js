/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert,AsyncStorage, Button,
        } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();

    this.state={
        // bookArray:[56,78,90,98,100],
        // newVar:'0'
      }
  }

  componentDidMount() {

  AsyncStorage.getItem("login").then((value) => {
  if (value == null) {
    AsyncStorage.setItem('login', 'abc');
  }else{
  }
}
).done();

AsyncStorage.getItem("password").then((value) => {
if (value == null) {
  AsyncStorage.setItem('password', '123');
}else{
}

}
).done();
    // this.yasirFunction();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Test AsyncStorage </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyleNP:{
  color:'white',
  fontSize:25,
  backgroundColor:'black',
  // fontWeight:'bold',
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
