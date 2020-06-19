import React, { Component } from 'react'
import Taro, { Current } from '@tarojs/taro';
import { View, Text, Button, } from '@tarojs/components'
import './pagea.scss'

import Val from './components/var';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navigateTo = () => {
    Taro.navigateTo({
      url: '/pages/navigate/pagea?id=' + Date.now()
    })
  }

  render () {
    console.log('[Current.router?.params] ', Current.router?.params)
    let { id = 0 } = Current.router?.params || {};
    return (
      <View className='index'>
        <View style={{ margin: '20px', backgroundColor: '#eee', padding: '10px' }}>
          <View>
            测试页面跳转同一页面
          </View>
          <View>
            <Text>id: {id}</Text>
          </View>
          <View>
            <Button onClick={this.navigateTo}>跳转</Button>
          </View>
        </View>
        <View style={{ margin: '20px', backgroundColor: '#eee', padding: '10px' }}>
          <View style={{ width: '300px', overflow: 'hidden' }}>
            <Text className='M-text-show-row-1'>
              这个文字放在Taro中的的的的的
            </Text>
          </View>
        </View>

        <div id='appendDiv'>
          <div style={{ width: '200px', overflow: 'hidden', display: 'inline-block' }}>
            <span className='M-text-show-row-1' style={{ lineHeight: '1.5' }}>测试文字溢出测试文字溢出测试文字溢出测试文字溢出测试文字溢出测试文字溢出测试文字溢出测试文字溢出</span>
          </div>
        </div>
      </View>
    )
  }
}
