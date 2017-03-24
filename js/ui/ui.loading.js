/**
 * @fileoverview loading 提示层
 * @version 1.0 | 2016-01-06 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
 const UILayer = require('./ui.layer.js'),
        WorkerControl = require('libutil-workerControl');

var workerControl = new WorkerControl();

function createLoading(worker){
    worker.loading = new UILayer({
        layer: {
            classname: 'coreui-g-layer coreui-g-layer-loading'
        },
        mask: {
            bgcolor: '#fff', //背景色
            opacity: 0, //遮罩透明度
        }
    });

    worker.loading.hideaftercal.add(function(){
        worker.loading.destroy();
        worker.loading = null;
    });

    return worker.loading;
}


module.exports = {
    show: function(){
        var loading = createLoading(workerControl.get());
        loading.setContent('<div class="typing_loader"></div>');
        loading.show();
    },
    hide: function(){
        var worker = workerControl.end();
        if(worker){
            worker.loading.hide();
        }
    }
}
