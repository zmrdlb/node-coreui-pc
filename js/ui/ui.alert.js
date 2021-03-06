/**
 * @fileoverview 公共alert弹层
 * @version 1.0 | 2016-11-14 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */

 const AlertSingle = require('liblayer-alertSingle'),
        Csssuport = require('libutil-csssuport'),
        Tpl = require('./ui.alert.html');

AlertSingle.hidedestroy = false;

AlertSingle.setconfig({
    layer: {
        classname: 'coreui-g-layer coreui-g-warnlayer coreui-g-layer-alert',
        custom: {
            hide: function(layer){
                layer.removeClass('show-up').addClass('hide-up');
                if(Csssuport.transition){
                    setTimeout(function(){
                        layer.hide();
                        AlertSingle.destroy();
                    },300);
                }else{
                    layer.hide();
                    AlertSingle.destroy();
                }
            }
        }
    },
    mask: {
        classname: 'coreui-g-mask',
        opacity: Csssuport.transition? 0: 0.6,
        custom: {
            hide: function(mask){
                if(Csssuport.transition){
                    mask.css('opacity',0);
                    setTimeout(function(){
                        mask.hide();
                    },300);
                }else{
                    mask.hide();
                }
            },
            show: function(mask){
                if(Csssuport.transition){
                    mask.show().css('opacity',0.6);
                }else{
                    mask.show();
                }
            }
        }
    },
    alert: {
        frametpl: Tpl
    }
});

AlertSingle.createcal.add(function(layerobj){
    layerobj.layer.addClass('hide-up');

    layerobj.pos.poscal.add(function(){
        layerobj.layer.removeClass('hide-up').addClass('show-up');
    });
});

module.exports = AlertSingle;
