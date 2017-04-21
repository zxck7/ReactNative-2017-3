import React, { Component } from 'react';
import { AppRegistry , StyleSheet , View , Text , Image , TextInput , Button , Dimensions , Keyboard }
  from 'react-native';

const w = Dimensions.get('window').width

export default class c01 extends Component {

  constructor(){
    super()
    this.state = {
      showKeyboard:false
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({showKeyboard : true})
  }

  _keyboardDidHide = () => {
    this.setState({showKeyboard : false})
  }

  render() {
    const {showKeyboard} = this.state
    return (
      <View style={styles.background}>
        <View style={{height:w,width:w,alignItems:'center'}}>
          {showKeyboard ? <View style={{marginTop:'5%'}}></View> :
            <Image
              style={{height:'45%',width:'45%',marginTop:'7%'}}
              source={require('week3/source/1.png')}
            />
          }
          <TextInput
            style={{height:'8%',width:'66%',marginTop:'5%',textAlign:'center',borderBottomWidth:1}}
            placeholder='请输入用户名'
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{height:'8%',width:'66%',marginTop:'5%',textAlign:'center',borderBottomWidth:1}}
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
