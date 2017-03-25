import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const randomColor=()=> {
  let color = Math.floor(Math.random() * 16581375).toString(16)
  return '#' + '0'.repeat(6 - color.length) + color
}

export default class code2 extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.numPad}>
          <View style={[styles.num,{top:0,left:0}]}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={[styles.num,{backgroundColor:randomColor(),top:0,left:92}]}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={[styles.num,{backgroundColor:randomColor(),top:0,right:0}]}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={[styles.num,{backgroundColor:randomColor()}]}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={[styles.num,{backgroundColor:randomColor(),left:92}]}>
            <Text style={styles.text}>5</Text>
          </View>
          <View style={[styles.num,{backgroundColor:randomColor(),right:0}]}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={[styles.num,{backgroundColor:randomColor(),bottom:0,left:0}]}>
            <Text style={styles.text}>7</Text>
          </View>
          <View style={[styles.num,{backgroundColor:randomColor(),bottom:0,left:92}]}>
            <Text style={styles.text}>8</Text>
          </View>
          <View style={[styles.num,{backgroundColor:randomColor(),bottom:0,right:0}]}>
            <Text style={styles.text}>9</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ccc',
  },
  numPad:{
    height:276,
    width:276,
    justifyContent:'center',
    backgroundColor:'#d9e4f1',
    borderWidth:1,
  },
  num:{
    position:'absolute',
    height:90,
    width:90,
    justifyContent:'center',
    alignItems : 'center'
  },
  text:{
    fontSize:26
  }

})