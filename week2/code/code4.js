import React, { Component } from 'react';
import { AppRegistry , StyleSheet , View , Text } from 'react-native';

export default class code4 extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.body}>
          <View style={{flex:1,width:'85%'}}></View>
          <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#333'}}>请输入六位交易密码</Text>
          </View>
          <View style={{flex:1,width:'85%'}}></View>
          <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
            <View style={{height:37,width:217,backgroundColor:"#555",justifyContent:'center',alignItems:'center'}}>
              <View style={{position:'absolute',height:35,width:35,left:1,backgroundColor:'#fff'}}></View>
              <View style={{position:'absolute',height:35,width:35,left:37,backgroundColor:'#fff'}}></View>
              <View style={{position:'absolute',height:35,width:35,left:73,backgroundColor:'#fff'}}></View>
              <View style={{position:'absolute',height:35,width:35,right:73,backgroundColor:'#fff'}}></View>
              <View style={{position:'absolute',height:35,width:35,right:37,backgroundColor:'#fff'}}></View>
              <View style={{position:'absolute',height:35,width:35,right:1,backgroundColor:'#fff'}}></View>
            </View>
          </View>
          <View style={{flex:1,width:'85%'}}></View>
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
    backgroundColor:'#ccc'
  },
  body: {
    flexDirection:'column',
    height:200,
    width:280,
    borderRadius:20,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }

})