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

##文档
[阿里云API接口](https://help.aliyun.com/document_detail/44364.html?spm=5176.8195934.507901.9.vBQY4s)