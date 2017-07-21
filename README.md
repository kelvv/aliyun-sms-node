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
  Format: 'JSON',
  Action: 'SendSms',
  TemplateParam: '{"code":"1234"}',
  PhoneNumbers: '13516534108',
  SignName: '北京月文化',
  TemplateCode: 'SMS_77730013'
}) //返回Promise

```

##文档
[阿里云API接口](https://help.aliyun.com/document_detail/56189.html?spm=5176.product44282.6.562.wa7Yda)