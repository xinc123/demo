import { View, Image } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import { useEffect } from 'react'
import './avatar.css'

export default () => {

  useEffect(() => {
    const page = Taro.getCurrentInstance().page;  //  null
    const scope = page.select('#test');
    const ctx = Taro.createVideoContext('myVideo', scope)
    ctx.play();
    console.log('output >>>', ctx, instance);
  })

  useReady(() => {
    console.log('onReady');
  })
  
    return (
      <View id='test'>
        <Image src='http://storage.360buyimg.com/taro-static/static/images/logo.png' />
        <video 
          id='myVideo'
          src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
          muted
        />
      </View>
    )
}
