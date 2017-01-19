import crypto from 'crypto'
import request from 'request'

class SMS {
  constructor ({AccessKeyId = '', AccessKeySecret = ''}) {
    this.AccessKeyId = AccessKeyId
    this.AccessKeySecret = AccessKeySecret
    this.api = 'https://sms.aliyuncs.com/'
  }

  send (args) {
    let params = {
      Version: '2016-09-27',
      SignatureMethod: 'HMAC-SHA1',
      SignatureNonce: this.getRandomStr(25),
      SignatureVersion: 1.0,
      AccessKeyId: this.AccessKeyId,
      Timestamp: new Date().toISOString()
    }
    Object.assign(params, args)
    params.Signature = this.getSignature(params)
    return new Promise((resolve, reject) => {
      request({
        method: 'POST',
        url: this.api,
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        form: params
      }, (error, response, body) => {
        console.log(response.statusCode)
        if (response.statusCode !== 201) {
          reject(body, error)
        } else {
          resolve(body)
        }
      })
    })
  }

  getRandomStr (length) {
    return Array.from({ length }).map((value) => {
      return Math.floor(Math.random() * 10)
    }).join('')
  }

  getSignature (params) {
    let paramsStr = this.toQueryString(params)
    let signTemp = `POST&${encodeURIComponent('/')}&${encodeURIComponent(paramsStr)}}`
    let signature = crypto.createHmac('sha1', this.AccessKeySecret + '&').update(signTemp).digest('base64')
    return signature
  }

  toQueryString (params) {
    return Object.keys(params).sort().map(key => {
      return `${key}=${encodeURIComponent(params[key])}`
    }).join('&')
  }
}

const sms = new SMS({
  AccessKeyId: '123',
  AccessKeySecret: '123'
})

sms.send({
  Format: 'JSON',
  Action: 'SingleSendSms',
  ParamString: '{"code":"1234"}',
  RecNum: '13516534108',
  SignName: '看看传播',
  TemplateCode: 'SMS_42350008'
}).then((result) => {
  console.log(result)
}).catch(err => {
  console.log(err)
})
