/**
 * @fileoverview toast 提示层
 * @version 1.0 | 2016-01-06 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
 const UILayer = require('./ui.layer.js'),
        WorkerControl = require('libutil-workerControl');

var workerControl = new WorkerControl();

function createToast(worker){
    worker.toast = new UILayer({
        layer: {
            classname: 'coreui-g-layer coreui-g-layer-toast'
        },
        mask: {
            bgcolor: '#fff', //背景色
            opacity: 0, //遮罩透明度
        }
    });

    worker.toast.hideaftercal.add(function(){
        worker.toast.destroy();
        worker.toast = null;
    });

    return worker.toast;
}


module.exports = {
    show: function(content,hideaftercal){
        var toast = createToast(workerControl.get());
        toast.setContent(content);
        toast.hideaftercal.add(function(){
            if(typeof hideaftercal == 'function'){
                hideaftercal();
            }
        });
        toast.show();
        setTimeout(function(){
            toast.hide();
        },2000);
    }
}
