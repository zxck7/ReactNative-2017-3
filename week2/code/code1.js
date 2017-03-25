import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class code1 extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>标题栏</Text>
        </View>
        <Image
          style={styles.image}
          source={require('week2/source/rn.png')}
        />
        <View style={styles.footer}>
          <View style={styles.footerBox}>
            <Text style={styles.footerText}>探索</Text>
          </View>
          <View style={styles.footerBox}>
            <Text style={styles.footerText}>学习</Text>
          </View>
          <View style={styles.footerBox}>
            <Text style={styles.footerText}>进步</Text>
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
    backgroundColor:'#cbcbcb'
  },
  header: {
    position:'absolute',
    top:0, left:0, right:0,
    height:44,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0d99fd'
  },
  headerText: {
    fontSize:25,
    color:'#fff'
  },
  image:{
    borderRadius:22,
    height:120,
    width:120
  },
  footer: {
    flexDirection:'row',
    position:'absolute',
    bottom:0, left:0, right:0,
    height:48,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderTopWidth:2,
    borderTopColor:'#000'
  },
  footerBox: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  footerText: {
    fontSize:25,
    color:'#111'
  }

})