const SMS = require('../lib')

const sms = new SMS({
  AccessKeyId: '123',
  AccessKeySecret: '123'
})

sms.send({
  Format: 'JSON',
  Action: 'SendSms',
  TemplateParam: '{"code":"1234"}',
  PhoneNumbers: '13516534108',
  SignName: '北京月文化',
  TemplateCode: 'SMS_77730013'
}).then((result) => {
  console.log(result)
}).catch(err => {
  console.log(err)
})
