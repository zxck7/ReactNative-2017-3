import React, { Component } from 'react';
import { AppRegistry , StyleSheet , View , Text , Image , TextInput , Button , Dimensions } from 'react-native';

const w = Dimensions.get('window').width

export default class code5 extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={{height:w,width:w,alignItems:'center'}}>
          <Image
            style={{height:'45%',width:'45%',marginTop:'7%'}}
            source={require('week2/source/01.png')}
          />
          <TextInput
            style={{height:'8%',width:'66%',marginTop:'3%',textAlign:'center',borderBottomWidth:1}}
            placeholder='请输入账号'
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{height:'8%',width:'66%',marginTop:'3%',textAlign:'center',borderBottomWidth:1}}
            placeholder='请输入密码'
            underlineColorAndroid="transparent"
          />
          <View style={{height:'11%',width:'20%',margin:'6%'}}>
            <Button
              title='登录'
              color="#e26"
              onPress={()=>{}}
            />
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
  }
})