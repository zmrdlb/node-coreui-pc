/**
 * @fileoverview 公共confirm弹层
 * @version 1.0 | 2017-01-06 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */

 const ConfirmSingle = require('liblayer-confirmSingle'),
        Csssuport = require('libutil-csssuport'),
        Tpl = require('./ui.confirm.html');

ConfirmSingle.hidedestroy = false;

ConfirmSingle.setconfig({
    layer: {
        classname: 'coreui-g-layer coreui-g-warnlayer coreui-g-layer-confirm',
        custom: {
            hide: function(layer){
                layer.removeClass('show-up').addClass('hide-up');
                if(Csssuport.transition){
                    setTimeout(function(){
                        layer.hide();
                        ConfirmSingle.destroy();
                    },300);
                }else{
                    layer.hide();
                    ConfirmSingle.destroy();
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
    confirm: {
        frametpl: Tpl
    }
});

ConfirmSingle.createcal.add(function(layerobj){
    layerobj.layer.addClass('hide-up');

    layerobj.pos.poscal.add(function(){
        layerobj.layer.removeClass('hide-up').addClass('show-up');
    });
});

module.exports = ConfirmSingle;
