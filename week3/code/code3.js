import React, {Component} from 'react'

import {View, ViewPagerAndroid, Platform, ScrollView, Image, Dimensions} from 'react-native'


const images = [
  'http://bbs.seezy.com/data/attachment/forum/month_0804/20080413_8b7b232747090e28c516o00OHfX8UEeL.jpg',
  'https://f11.baidu.com/it/u=207125741,1833107532&fm=72',
  'http://img.longhoo.net/2013/0827/20130827030921496.jpg',
  'http://h5.86.cc/walls/20160428/mid_eabdc31d0c2138c.jpg'
]
export default class c03 extends Component{

  constructor() {
    super()
  }

  render(){

    return <View style={{flex : 1}}>
      <ViewPagerAndroid style={{flex : 1}} initialPage={0}>
        {images.map( (img, i) => {
          return <View key={i} style={{width : Dimensions.get("window").width, height : 200}} >
            <Image style={{width : Dimensions.get('window').width, height : 200}} source={{uri : img}} />
          </View>
        })}
      </ViewPagerAndroid>
    </View>

  }
}
