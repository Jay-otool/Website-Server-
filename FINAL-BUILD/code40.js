gdjs.ZE_32ENDD_33_33_33Code = {};
gdjs.ZE_32ENDD_33_33_33Code.GDNewSpriteObjects1= [];
gdjs.ZE_32ENDD_33_33_33Code.GDNewSpriteObjects2= [];
gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects1= [];
gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects2= [];


gdjs.ZE_32ENDD_33_33_33Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects1[k] = gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.ZE_32ENDD_33_33_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ZE_32ENDD_33_33_33Code.GDNewSpriteObjects1.length = 0;
gdjs.ZE_32ENDD_33_33_33Code.GDNewSpriteObjects2.length = 0;
gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.ZE_32ENDD_33_33_33Code.GDPurpleButtonWithShadowObjects2.length = 0;

gdjs.ZE_32ENDD_33_33_33Code.eventsList0(runtimeScene);

return;

}

gdjs['ZE_32ENDD_33_33_33Code'] = gdjs.ZE_32ENDD_33_33_33Code;
