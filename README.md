# 阿里云sms服务sdk for Nodejs

##安装
```
npm install aliyun-sms-node
```

##使用
```
var SMS = require('aliyun-sms-node');

var sms = new SMS({
  AccessKeyId: '填写你的AccessKeyId,可以登录阿里云查找',
  AccessKeySecret: '填写你的AccessKeySecret，可以登录阿里云查找'
});

sms.send({
  Action:'SingleSendSms',
  Format:'JSON',
  ParamString:'{"code":"1234"}',
  RecNum:'13516534111',
  SignName:'标签测试',
  TemplateCode:'SMS_1650053',
}) //返回Promise

```