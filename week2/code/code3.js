import React, { Component } from 'react';
import { AppRegistry , View , ActivityIndicator } from 'react-native';

export default class code3 extends Component {
  render(){
    return (
      <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
        <ActivityIndicator
          size="large"
        />
      </View>
    )
  }
}