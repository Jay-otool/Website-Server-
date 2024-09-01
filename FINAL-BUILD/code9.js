gdjs.main_32menuCode = {};
gdjs.main_32menuCode.GDNewSpriteObjects1= [];
gdjs.main_32menuCode.GDNewSpriteObjects2= [];
gdjs.main_32menuCode.GDNewSprite2Objects1= [];
gdjs.main_32menuCode.GDNewSprite2Objects2= [];
gdjs.main_32menuCode.GDPlayObjects1= [];
gdjs.main_32menuCode.GDPlayObjects2= [];
gdjs.main_32menuCode.GDGreyButtonWithShadowObjects1= [];
gdjs.main_32menuCode.GDGreyButtonWithShadowObjects2= [];


gdjs.main_32menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.main_32menuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_32menuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.main_32menuCode.GDPlayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main_32menuCode.GDPlayObjects1[k] = gdjs.main_32menuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.main_32menuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.main_32menuCode.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_32menuCode.GDGreyButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.main_32menuCode.GDGreyButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main_32menuCode.GDGreyButtonWithShadowObjects1[k] = gdjs.main_32menuCode.GDGreyButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.main_32menuCode.GDGreyButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "extras", false);
}}

}


};

gdjs.main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.main_32menuCode.GDNewSprite2Objects1.length = 0;
gdjs.main_32menuCode.GDNewSprite2Objects2.length = 0;
gdjs.main_32menuCode.GDPlayObjects1.length = 0;
gdjs.main_32menuCode.GDPlayObjects2.length = 0;
gdjs.main_32menuCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.main_32menuCode.GDGreyButtonWithShadowObjects2.length = 0;

gdjs.main_32menuCode.eventsList0(runtimeScene);

return;

}

gdjs['main_32menuCode'] = gdjs.main_32menuCode;
