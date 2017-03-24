/**
 * @fileoverview 页面基本view类。最终业务项目中落地页的js都必须引用此js或其子类
 * @version 1.0 | 2016-12-20 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */

 const Alert = require('../ui/ui.alert.js'),
       Confirm = require('../ui/ui.confirm.js'),
       Toast = require('../ui/ui.toast.js'),
       Loading = require('../ui/ui.loading.js'),
       Tool = require('libutil-tool');

class BaseView {
    constructor(){
        this.name = 'zmrdlb';
        //绑定一些常用的组件到全局变量
        window._APP = {};
        _APP.Alert = Alert;
        _APP.Confirm = Confirm;
        _APP.Toast = Toast;
        _APP.Loading = Loading;
        _APP.Tool = Tool;
    }

    init(){
        this._init();
    }

    /**
     * 注册一个页面
     * @param  {Object} opt 里面配置的所有方法都派生给BaseView的实例
     * {
     *      _init: 此方法必须有，页面初始化执行
     * }
     * @return {instance of BaseView}     [description]
     */
    static register(opt){
        var t = new this();
        for(var key in opt){
            t[key] = opt[key];
        }

        //初始化
        t.init();

        return t;
    }
}

module.exports = BaseView;
