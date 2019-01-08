/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, Button,
        } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  // Read from the given Link
  // https://aboutreact.com/react-native-application-life-cycle-of/

  constructor() {

    // Construction will run at first

    super();
    this.state={
        // bookArray:['hasnain','hasan','ABC'],
        // newVar:'0'
      }
  }

  componentDidMount() {

    // After Constructor ComponentDidmountwillRun

  }

  componentWillMount() {

  // Note: Before running ComponentWillMount render() function will be called

  }

    componentWillReceiveProps(nextProp) {
      // Alert.alert('componentWillReceiveProps');
      console.log('componentWillReceiveProps called.', nextProp);
    }

    // Called 1
    shouldComponentUpdate(nextProp, nextState) {
      // Alert.alert('shouldComponentUpdate');
      console.log('shouldComponentUpdate called.');
      return true;
    }

    // Called 2
    componentWillUpdate(nextProp, nextState) {
      // Alert.alert('componentWillUpdate');
      console.log('componentWillUpdate called.');
    }

    componentDidUpdate(prevProp, prevState) {
      // Alert.alert('componentDidUpdate');
      console.log('componentDidUpdate called.');
    }

    componentWillUnmount() {
      Alert.alert('componentWillUnmount');
      console.log('componentWillUnmount called.');
    }

    componentDidCatch(error, info) {
      Alert.alert('componentDidCatch');
      console.log('componentDidCatch called.');
    }

  render() {
    return (

  <View style={styles.container}>

  <View style={styles.viewStyleOne}>
    <Text style={styles.textStyle}> ABC </Text>
  </View>

  <View style={styles.viewStyleTwo}>
    <Text style={styles.textStyle}> XYZ </Text>
  </View>

  </View>

    );
  }
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#4286f4',
    flex:1,
    flexDirection:'row',
    },

  textStyle:{
    textAlign:'center'
  },

  viewStyleOne: {
    width:40,
    height:200,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'red',
    flex:500,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },

  viewStyleTwo: {
    width:40,
    height:200,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#b642f4',
    flex:500,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },
  viewStyleThree: {
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'green',
    flex:1,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },
});
