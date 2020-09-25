const fs = require('fs');

const pageData = [
  {
    "type": "调用",
    "url": "Z.client.on('ui','broadcast',params)",
    "title": "08.监听客户端广播消息",
    "name": "event_broadcast",
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.on('event','broadcast', function(params) {})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.on('event.faceAuthenticationChange',callback)",
    "title": "09.监听客户端人脸认证结果通知（仅安卓使用,iOS通过openAppView打开）",
    "name": "faceAuthenticationChange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.on('event.faceAuthenticationChange', function(callback){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.on('event.messagePush',callback)",
    "title": "03.WebView消息状态通知",
    "name": "messagePush",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.memberId",
            "description": "<p>发邮件人id</p>"
          }
        ]
      }
    },
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.on('event.messagePush', function(){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.on('event.networkChange',callback)",
    "title": "06.客户端网络变化通知",
    "name": "networkChange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.on('event.networkChange', function(callback){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.off('event.eventName',callback)",
    "title": "02.移除客户端事件监听器",
    "name": "off",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventName",
            "description": "<p>事件名称</p>"
          }
        ]
      }
    },
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.off('event.visibilityChange')",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.on('event.eventName',callback)",
    "title": "01.监听客户端事件",
    "name": "on",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventName",
            "description": "<p>事件名称</p>"
          }
        ]
      }
    },
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.on('event.visibilityChange', function(){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.on('event.upgradeVisible',callback)",
    "title": "07.客户端升级按钮可见",
    "name": "upgradeVisible",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.visible",
            "description": "<ul>   <li> 0-不可见</li>   <li> 1-可见</li> </ul>"
          }
        ]
      }
    },
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.on('event.upgradeVisible', function(callback){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.on('event.userInfoChange',callback)",
    "title": "05.用户信息状态改变",
    "name": "userInfoChange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.shouldRefresh",
            "description": "<p>是否刷新</p>"
          }
        ]
      }
    },
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.on('event.userInfoChange', function(callback){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.on('event.visibilityChange',callback)",
    "title": "04.WebView页面可见状态",
    "name": "visibilityChange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.visibility",
            "description": "<p>页面是否可见 <ul> <li> 0-不可见</li> <li> 1-可见</li> </ul></p>"
          }
        ]
      }
    },
    "group": "Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.on('event.visibilityChange', function(){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "Event"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('app','downloadApp',params,callback)",
    "title": "触发主包下载与安装",
    "name": "downloadApp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "app",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('app','downloadApp')",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "app"
  },
  {
    "type": "调用",
    "url": "ZAJsBridge(callbackname,args)",
    "title": "02.客户端APP调用方式",
    "name": "ZAJsBridge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callbackName",
            "description": "<p>回调方法名称 <ul> <li>普通从web端请求APP端可以直接拿到回调函数名称；</li> <li> 如果是APP端主动调用web端的事件，约定名称以event.开头，紧接着名称根据业务具体定义，比如 “event.getCookie&quot;。</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "args",
            "description": "<p>回调返回参数数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "args.code",
            "description": "<p>返回码 <ul> <li> 等于0--成功</li> <li> 大于0--逻辑错误,非app本身原因，如参数错误</li> <li> 小于0--app处理错误</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "args.msg",
            "description": "<p>失败消息,成功的话为空字符串&quot;&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "args.data",
            "description": ""
          }
        ]
      }
    },
    "group": "core",
    "examples": [
      {
        "title": "Example usage:",
        "content": "ZAJsBridge('ui.loginxxx',{ code: 0, msg: '', data: { ... } })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "core"
  },
  {
    "type": "GET",
    "url": "zajsbridge://za.com/{namespace}/{method}?p={params}",
    "title": "01.接口协议",
    "name": "ZaJsBridgeHttp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>命名空间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>方法名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params",
            "description": "<p>请求JSON数据</p>"
          }
        ]
      }
    },
    "group": "core",
    "examples": [
      {
        "title": "Example usage:",
        "content": "zajsbridge://za.com/ui/login?p=%7B%22user%22%3A%22admin%22%2C%22pwd%22%3A%22123%22%2C%22callback%22%3A%22ui.login_5000%22%7",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "core"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('device','getDeviceInfo',params,callback)",
    "title": "01.获取设备信息",
    "name": "getDeviceInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.systemName",
            "description": "<p>系统名称，如“IPhone OS”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.systemVersion",
            "description": "<p>系统版本，如&quot;6.0&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.model",
            "description": "<p>机器系列，如&quot;iPhone&quot;, &quot;iPod touch&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.modelVersion",
            "description": "<p>机型，如 &quot;iPhone3,1&quot;(iPhone4)、&quot;iPhone6,1&quot;(iPhone5S)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.identifier",
            "description": "<p>设备唯一标识。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.isBroken",
            "description": "<p>是否有root权限（越狱）</p>"
          }
        ]
      }
    },
    "group": "device",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('device','getDeviceInfo',params, function(){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "device"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('device','getNetworkType',params,callback)",
    "title": "02.获取网络状态",
    "name": "getNetworkType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.type",
            "description": "<p>返回码 <ul> <li> unknown-未知</li> <li> none-无网络状态</li> <li> wifi-wifi</li> <li> 2G-2G</li> <li> 3G-3G</li> <li> 4G-4G</li> <li> 5G-5G及以上</li> </ul></p>"
          }
        ]
      }
    },
    "group": "device",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','getNetworkType',function(){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "device"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','getPermission',params,callback)",
    "title": "03.获取设备权限情况",
    "name": "getPermission",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "params.permissionList",
            "description": "<p>权限数组('android.permission.CAMERA': 相机，'android.permission.WRITE_EXTERNAL_STORAGE'：写入，'android.permission.READ_EXTERNAL_STORAGE'：读取)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.text",
            "description": "<p>提示文案</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "group": "device",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','getPermission',{ permissionList: ['android.permission.CAMERA', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.READ_EXTERNAL_STORAGE'], text: '请到设置授权'}, function(){})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "device"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','login')",
    "title": "07.登陆",
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','login')",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui",
    "name": "__ZClientInvokeUiLogin"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','broadcast',params)",
    "title": "12.通知客户端广播消息",
    "name": "broadcast",
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','broadcast', { page: 'mypage201801109' }, function(e) {})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 珍爱APP可用",
    "url": "Z.client.invoke('ui','buyZhenaiCoin',params,callback);",
    "title": "24.在当前页面调起APP购买珍爱币弹层",
    "name": "buyZhenaiCoin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "params.costCoins",
            "description": "<p>产品金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-逻辑错误,非app本身原因，如参数错误</li> <li>-1-app处理错误</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res.data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.data.status",
            "description": "<p>1：购买成功， -1：失败， 0：未操作</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.res.data.source",
            "description": "<p>页面来源页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.res.data.msg",
            "description": "<p>说明信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res.data.orderInfo",
            "description": "<p>订单信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.res.data.orderInfo.orderId",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.data.orderInfo.price",
            "description": "<p>订单价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.data.orderInfo.count",
            "description": "<p>订单数量</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','buyZhenaiCoin', {}, function(res){});",
        "type": "json"
      }
    ],
    "group": "ui",
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','closeWebView',params,callback)",
    "title": "03.关闭webView页面",
    "name": "closeWebview",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "params",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": ""
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','closeWebView')",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 珍爱APP可用",
    "url": "Z.client.invoke('ui','getAppImage',params,callback)",
    "title": "17.调用客户端拍照/上传+裁剪",
    "name": "getAppImage",
    "group": "ui",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isHideHeader",
            "description": "<p>是否隐藏裁剪界面的头部提示(default: true)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "footerContent",
            "description": "<p>裁剪界面的底部提示文案(default: 默认文案)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "takeWidth",
            "description": "<p>拍照取景框的宽度(default: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "takeHeight",
            "description": "<p>拍照取景框的高度(default: 1) <ul> <li> takeWidth与takeHeight不可单独设置，客户端需根据两个数值得出比例</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cropWidth",
            "description": "<p>裁剪框的宽度(default: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cropHeight",
            "description": "<p>裁剪框的高度(default: 1) <ul> <li> cropWidth与cropHeight不可单独设置，客户端需根据两个数值得出比例</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgType",
            "description": "<p>可选择的图片类型，只能传&quot;jpg&quot;或&quot;png&quot;，不传则都可选择</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isHideTakeHeader",
            "description": "<p>是否隐藏拍照界面的头部提示(default: true)</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.data.base64Str",
            "description": "<p>base64字符串</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','getAppImage',{ isHideHeader: false, takeWidth: 1, takeHeight: 2 },function(res) { console.log(res.data.base64Str) })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 珍爱APP可用",
    "url": "Z.client.invoke('ui','getClipboard',params,callback)",
    "title": "18.调用客户端剪切板功能",
    "name": "getClipboard",
    "group": "ui",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params.text",
            "description": "<p>复制的文本</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-逻辑错误,非app本身原因，如参数错误</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.res.text",
            "description": "<p>客户端复制到剪切板的内容</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','getClipboard',{ text: '我是要被复制的文字' },function(res) { console.log( res ) })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用，小年轻APP可用",
    "url": "Z.client.invoke('ui','getData',params,callback)",
    "title": "15.从客户端获取数据",
    "name": "getData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "params.type",
            "description": "<p>获取的数据类型枚举</p> <ul>  <li>1: 获取密码加密KEY</li>  <li>2: 获取base64图片</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-逻辑错误,非app本身原因，如参数错误</li> <li>-1-app处理错误</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res.data",
            "description": "<p>type对应的返回数据 <ul> <li> 1: <pre>{ data: { key: 'xxxxxx' } }</pre> </li> <li> 2(珍爱支持): <pre>{ data: 'xxxxx' }</pre> </li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 小年轻APP可用",
    "url": "Z.client.invoke('ui','getImage',{},callback)",
    "title": "14.获取图片，会调起客户端选图片功能",
    "name": "getImage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-逻辑错误,非app本身原因，如参数错误</li> <li>-1-app处理错误</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res.data",
            "description": "<p>具体数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback.res.data.img",
            "description": "<p>base64图片</p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','getImage', { }, function (res){\n    if(res.code==0 && res.data){\n        var img = res.data.img\n    }\n})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 珍爱APP可用（仅安卓使用）",
    "url": "Z.client.invoke('ui','hasNfcAndDisable',params,callback);",
    "title": "23.询问安卓端设备是否有NFC且有打开",
    "name": "hasNfcAndDisable",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.text",
            "description": "<p>弹窗文案描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.code",
            "description": "<p>返回码 <ul> <li> 0-有NFC且没有打开</li> <li>-1-其他情况(有NFC且打开或无NFC)</li> </ul></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','hasNfcAndDisable', {text:\"请打开NFC\"}, function(res){});",
        "type": "json"
      }
    ],
    "group": "ui",
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','infoStateChange',params,callback)",
    "title": "06-1信息通知相关",
    "name": "infoStateChange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>需要更新的信息对象</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "params.type",
            "description": "<p>类型 <ul> <li> 0-红点</li> <li> 1-webview回退</li> <li> 2-消息处理  <strong>仅适用于情感APP</strong></li> <hr> <strong>以下紧适用于 - 视否APP</strong> <li> 0-标签更新</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params.detail",
            "description": "<p>详细传递参数 <ul> <li>unreadViewCount -未读的看过我的数目(Number类型）</li> <li>unreadMailCount - 未读的消息数目 (Number类型) </li> <li>canBack - 能否返回 (Boolean类型)</li> <li>detail (Object类型) <strong>仅适用于情感APP</strong></li> <li>detail:{backAction - (Number类型:1关闭webview, 2回退到上个链接,(3待定....))} <strong>仅适用于情感APP</strong></li> <hr> <strong>以下紧适用于 - 视否APP</strong> <div>(左边是对应枚举值，右边是所需的参数值</div> <li> [0] : { tags: [], tagsFav: [] } <pre> { tags: ['帅', '男神'], // 个性标签 tagsFav: ['篮球', '煲剧'] // 兴趣标签 } </pre> </li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','infoStateChange',{ type: 0, { unreadViewCount: 5, unreadMailCount: 10 } })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','logout',callback)",
    "title": "09.退出登录",
    "name": "logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','logout',{ version: '1.0', token: 'xxx', ua: 'Chrome/62.0.3202.94' })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 5.6.0+可用",
    "url": "Z.client.invoke('ui','makeAPhoneCall',params)",
    "title": "13.拨打电话",
    "name": "makeAPhoneCall",
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','makeAPhoneCall', { phoneNumber: '4001520520' })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','messageStateChange',params,callback)",
    "title": "06-0红点消息通知相关",
    "name": "messageStateChange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.type",
            "description": "<p>红点类型 <ul> <li> 0-消息项点击后通知终端刷新</li> <li> 1-谁看过我阅读状态通知终端</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','messageStateChange',{ type: 0 })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 珍爱APP可用",
    "url": "Z.client.invoke('ui','notify',params,callback)",
    "title": "21.通知客户端",
    "name": "notify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "params.type",
            "description": "<p>通知客户端的类型枚举</p> <ul>  <li>1: 通知客户端关闭直播截屏弹窗（珍爱app可用）</li>  <li>2: 通知客户端清除登录态</li>  <li>3: 通知客户端跳转登录页</li>  <li>4: 通知客户端跳转设置页</li>  <li>5: 通知客户端跳转隐藏资料页</li>  <li>6: 【我的测试】通知客户端显示爱情测试中</li>  <li>7: 【我的测试】通知客户端隐藏爱情测试中【我的测试】</li>  <li>8: 【网证领取】通知客户端获取ID验证数据（authIDStr）和获取网证口令数据（authCodeStr）</li>  <li>9: 【网证领取】通知客户端获取获取控件版本号</li>  <li>10: 【网证领取】通知客户端获取获取网证信息（返回\"ctidNum\"和“validDate”）</li>  <li>11: 【网证领取】通知客户端获取获取码图流绘制二维码（返回\"imgStreamStr”）</li>  <li>12: 【网证领取】通知客户端获取二维码应用数据</li>  <li>13: 【网证领取】通知客户端获取二维码赋码数据</li>  <li>14: 【网证领取】通知客户端打开开通网证页面</li>  <li>15: 【珍爱币收银台】购买甜蜜约会牵线服务</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-逻辑错误,非app本身原因，如参数错误</li> <li>-1-app处理错误</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res.data",
            "description": "<p>type对应的返回数据 <ul> <li> 1: 无数据返回 </li> </ul></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','notify',{ type: 1 },function(res) { console.log( res ) })",
        "type": "json"
      }
    ],
    "group": "ui",
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','openAppView',params,callback)",
    "title": "01.打开App内部页面",
    "name": "openAppView",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.page",
            "description": "<p>页面名称枚举值</p> <ul>  <li>1: h5页面</li>  <li> 2: 珍心会员购买页(收银台)</li>  <li> 3: 微信相亲会活动页</li>  <li> 4: 实名制专区页</li>  <li> 5: 爱情蒲公英</li>  <li> 6: 搜索结果页</li>  <li> 7: 附近的人页</li>  <li> 8: 会员动态页</li>  <li> 9: 星级会员购买页</li>  <li> 10: 推荐页</li>  <li> 11: 恋爱学堂</li>  <li> 12: 发现页</li>  <li> 13: 邮件列表页</li>  <li> 14: 我的页面</li>  <li> 15: 聊天详情页</li>  <li> 16: 三资页</li>  <li> 17: 我关注的</li>  <li> 18: 关注我的</li>  <li> 19: 我收到的赞</li>  <li> 20: 谁看过我</li>  <li> 21: 收到的礼物</li>  <li> 22: 我的资料页</li>  <li> 23: 恋爱学堂文章列表</li>  <li> 24: 恋爱学堂问答社区</li>  <li> 25: 恋爱学堂文章详情</li>  <li> 26: 恋爱学堂问答详情</li>  <li> 27: 恋爱学堂个人H5页面跳转</li>  <li> 28: 恋爱学堂个人中心</li>  <li> 29: 恋爱学堂回答详情</li>  <li> 30: 跳转到直营门店</li>  <li> 31: 跳转到人工电话红娘</li>  <li> 32: 跳转到会员中心</li>  <li> 33: 领取话费</li>  <li> 34: 意见反馈</li>  <li> 35: 珍爱币收银台</li>  <li> 36: 珍爱信使收银台</li>  <li> 37: 礼物商店</li>  <li> 38: 我的认证</li>  <li> 39: 直播列表页</li>  <li> 40: 直播开播页</li>  <li> 41: 直播观众页</li>  <li> 42: 直播主播页</li>  <li> 43: 新版直播观众页</li>  <li> 44: 结鲤广告</li>  <li> 45: 短视频话题列表页</li>  <li> 46: 短视频具体话题推荐页</li>  <li> 47: 直播H5页面</li>  <li> 48: 短视频详情页</li>  <li> 49: 短视频首页</li>  <li> 50: 短视频详情页</li>  <li> 52: 直播守护购买页</li>  <li> 55: 短视频录制页</li>  <li> 56:\t我的认证(新)</li>  <li> 57:\t实名认证页</li>  <li> 58:\t短视频专题页</li>  <li> 59:\t语音直播观众页</li>  <li> 60:\t一对一私密聊天页</li>  <li> 61:\t我的钱包</li>  <li> 62:\t动态-关注页</li>  <li> 63:\t动态-热门动态页</li>  <li> 64:\t动态-我的动态页</li>  <li> 65:\t动态-发布动态弹窗</li>  <li> 66:\t学堂页面</li>  <li> 67:\t短视频音乐聚合页</li>  <li> 68:\t首页短视频播放页</li>  <li> 69:\t守护我</li>  <li> 70:\t珍爱小助手-信息页</li>  <li> 71:\t动态详情页面</li>  <li> 72:\tH5跳转直播专区列表</li>  <li> 73:\t话题动态列表页</li>  <li> 74:\t人脸认证页面</li>  <li> 75:\t珍爱小助手举报页面</li>  <li> 76:\t用户动态话题</li>  <li> 77:\t直播月卡购买页</li>  <li> 78:\t动态类型选择页</li>  <li> 79:\t心情动态选择页</li>  <li> 80:\t情感状态修改页面</li>  <li> 81:\t找回密码页面</li>  <li> 82:\t珍爱红娘顾问消息页</li>  <li> 83:\t直播语音频道房</li>  <li> 84:\t珍爱学堂回放视频</li>  <li> 85:\t附近动态定位结果页</li>  <li> 86:\t直播牵线房</li>  <li> 87:\t情侣签到页</li>  <li> 88:\t情侣空间纪念日</li>  <li> 89:\t情侣空间回忆录</li>  <li> 90:\t情侣足迹H5</li>  <li> 91:\t直播开播页--默认视频</li>  <li> 92:\t直播开播页--默认语音</li>  <li> 93:\t直播开播页--默认牵线房</li>  <li> 94:\t直播模块--珍爱学堂</li>  <li> 95:\t直播--ktv频道房--点歌页</li>  <li> 96:\t春晚声音识别页</li>  <li> 97:\t录制视频</li>  <li> 98:\t直播待连麦卡片页</li>  <li> 99:\t直播专区</li>  <li> 100: 情侣签到任务页</li>  <li> 101: 语音介绍</li>  <li> 102: 附近动态页</li>  <li> 103: 直播电台列表页</li>  <li> 104: 直播电台</li>  <li> 105: 内心独白编辑</li>  <li> 106: 我的爱好编辑</li>  <li> 107: 情感驿站</li>  <li> 108: 动态发布页图文</li>  <li> 109: 直播--喇叭推广购买页</li>  <li> 110: 情侣签到任务5页面</li>  <li> 111: 情侣签到任务六页面</li>  <li> 112: 红娘收益页面</li>  <li> 113: 情侣空间愿望清单</li>  <li> 114: 红娘牵线直播间</li>  <li> 115: 恋爱心得页面</li>  <li> 116: 恋爱心得列表页</li>  <li> 117: 情侣空间愿望清单列表</li>  <li> 118: 最关心的问题</li>  <li> 119: 情侣空间客人态首页</li>  <li> 120: 情侣空间甜蜜度任务介绍页</li>  <li> 121: 动态-小组动态页</li>  <li> 122: 动态-小组动态详情页（最新）</li>  <li> 123: 动态-小组动态详情页（热门）</li>  <li> 124: 动态-动态详情页（返回到小组详情页）</li>  <li> 126: 跳转到活体检测页</li>  <li> 127: 评论我</li>  <li> 128: 情侣空间后台服务</li>  <li> 参考链接：http://yapi.zhenaioa.com/project/284/interface/api/10790</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.page2",
            "description": "<p>页面名称枚举值 - 仅适用于 - 视否APP</p> <ul>  <strong>参数名也是 page</strong>  <li>1: 某个用户的资料详情页</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.page3",
            "description": "<p>页面名称枚举值 - 仅适用于情感APP</p> <ul>  <strong>参数名也是 page</strong>  <li>1: 登录页</li>  <li>2: 首页</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "params.close",
            "description": "<p>是否关闭webview - 仅适用于 - 视否APP</p> <ul>  <li>true: 关闭</li>  <li>不传则默认不关闭</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params.params",
            "description": "<p>页面所需参数(左边是页面对应枚举值，右边是所需的参数值,未注明的页面只传page值即可，无需此参数) <ul> <li>[2]: { source, bannerFlag }</li> <li>[9]: { source, bannerFlag }</li> <li>[15]: { msg, memberID, objectID, nickname }</li> <li>[16]: { objectID }</li> <li>[25]: { schoolObjectID  }</li> <li>[26]: { schoolObjectID  }</li> <li>[27]: { urlString, title }</li> <li>[29]: { schoolObjectID  }</li> <li>[30]: { urlString }</li> <li>[31]: { urlString, title }</li> <li>[41]: { objectID }</li> <li>[43]: { objectID }</li> <li>[46]: { topicID}</li> <li>[47]: { urlString, title }</li> <li>[50]: { videoID}</li> <li>[52]: { objectID,anchorID}</li> <li>[55]: { topicID}</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码</p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','openAppView',{ page: '16', params: { objectID: 101 } })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 珍爱APP可用",
    "url": "Z.client.invoke('ui','openMiniProgram',params,callback)",
    "title": "19.调用客户端打开小程序功能",
    "name": "openMiniProgram",
    "group": "ui",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params.miniProgramUserId",
            "description": "<p>小程序原始id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params.miniProgramPath",
            "description": "<p>小程序跳转路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','openMiniProgram',{ miniProgramUserId: 'gh_90a0fc2f25a1', miniProgramPath: 'pages/archives/baseinfo/baseinfo?memberId=xxxx' },function(res) { console.log( res ) })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','openUrl',params,callback)",
    "title": "02.打开WebView页面",
    "name": "openUrl",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.URL",
            "description": "<p>链接地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.title",
            "description": "<p>文字标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.target",
            "description": "<p>在哪里打开</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','openUrl',{ URL: \"http://m.zhenai.com/index.html\"})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','sendText',params,callback)",
    "title": "05.发送短信",
    "name": "sendText",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.content",
            "description": "<p>发送短信内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','sendText',{ content: xxxx })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','setLogin',params,callback)",
    "title": "08.设置登录态",
    "name": "setLogin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.ua",
            "description": "<p>ua</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.username",
            "description": "<p>用户名,  安全考虑，小年轻APP只会传 username</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','setLogin',{ version: '1.0', token: 'xxx', ua: 'Chrome/62.0.3202.94' })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 珍爱APP、视否APP可用",
    "url": "Z.client.invoke('ui','setTitle',params)",
    "title": "16.设置顶部栏标题",
    "name": "setTitle",
    "group": "ui",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题名称 <ul> <li> 当title为 '' 时, 表示不设置title</li> <li> 当不传title参数时, 默认读取html里的title</li> </ul></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','setTitle', { title: '珍爱网' })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','setUpdaterVisible',params,callback)",
    "title": "10.升级拦截可见",
    "name": "setUpdaterVisible_______",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params.visible",
            "description": "<ul>   <li> true-可见</li>   <li> false-不可见</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','setUpdaterVisible',{ visible: true })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','share',params,callback)",
    "title": "04.分享页面",
    "name": "share",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.type",
            "description": "<p>分享类型 <ul> <li> default - 默认(具体按客户端所定内容)</li> <li> web - 网页</li> <li> img - 图片</li> <li> voice - 声音</li> <li> video - 视频</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.target",
            "description": "<p>分享渠道 <ul> <li> weixin - 微信</li> <li> qq - QQ好友</li> <li>-qzone - QQ空间</li> <li>-sina - 新浪微博</li> </ul></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "params.imgUrl",
            "description": "<p>分享带出去的图片url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "params.link",
            "description": "<p>分享带出去的页面地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "params.title",
            "description": "<p>页面发起分享的title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "params.desc",
            "description": "<p>页面发起分享描述文字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "callback.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-参数错误</li> <li>-1-执行失败</li> </ul></p>"
          }
        ]
      }
    },
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','share',{ type: 'web', target:'weixin', imgUrl: 'xxxx', title:'标题', 'desc': '描述文字' })",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用, 珍爱APP可用（仅iOS使用）",
    "url": "Z.client.invoke('ui','showAlert',params,callback);",
    "title": "22.通知客户端打开弹窗",
    "name": "showAlert",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.title",
            "description": "<p>弹窗标题描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.message",
            "description": "<p>弹窗内容描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params.buttonTitles",
            "description": "<p>弹窗按钮描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "params.extra",
            "description": "<p>弹窗类型额外参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback.res",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "callback.res.code",
            "description": "<p>返回码 <ul> <li> 0-操作成功</li> <li> 1-逻辑错误,非app本身原因，如参数错误</li> <li>-1-app处理错误</li> </ul></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui','showAlert', {title:\"\", message:\"是否联系红娘申请VIP服务\", buttonTitles:[\"否\", \"是\"], \"extra\":{\"type\": 1}});",
        "type": "json"
      }
    ],
    "group": "ui",
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  },
  {
    "type": "调用",
    "url": "Z.client.invoke('ui','showPlayerBlock',callback)",
    "title": "11.显示播放器阻止控件",
    "name": "showPlayerBlock",
    "group": "ui",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Z.client.invoke('ui.showPlayerBlock', function(e) {})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "def/index.js",
    "groupTitle": "ui"
  }
];

let page = pageData.filter(item => {
  return item.group === "ui"
}).sort((a, b) => {
  return parseInt(a.title) - parseInt(b.title)
})

fs.writeFile('./test11.js', JSON.stringify(page), (err) => console.log(err))
console.log(page);

