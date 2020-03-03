import { ASYNC_INCREMENT, USER_INFO } from '../types/counter'
import { createAction } from 'redux-actions'

import fly from "../../utils/http.js";
import baseUrl from '../../utils/baseUrlConfig.js';

export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})

export const getUserInfo = createAction(USER_INFO, () => {
    return new Promise(resolve => {
        console.log(333);
        // setTimeout(() => {
        //     let res = {
        //         isVip: 0,
        //         isBind: 0,
        //     }
        //     resolve(res)
        // }, 1000)
        let token = wx.getStorageSync('token')
        fly.post(baseUrl + '/index.php?s=/api/user/detail', {
            wxapp_id: wx.getStorageSync('wxapp_id'),
            token: token
        }).then(res => {
            let { code, msg, data } = res;
            if (code == 1) {
                resolve(data.userInfo)
            } else {
                wx.showToast({
                    title: msg,
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    })
  })