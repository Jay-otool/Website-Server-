gdjs.extrasCode = {};
gdjs.extrasCode.GDNewSpriteObjects1= [];
gdjs.extrasCode.GDNewSpriteObjects2= [];
gdjs.extrasCode.GDMedievalButtonBrownObjects1= [];
gdjs.extrasCode.GDMedievalButtonBrownObjects2= [];
gdjs.extrasCode.GDNewSprite2Objects1= [];
gdjs.extrasCode.GDNewSprite2Objects2= [];
gdjs.extrasCode.GDNewTextObjects1= [];
gdjs.extrasCode.GDNewTextObjects2= [];
gdjs.extrasCode.GDNewTiledSpriteObjects1= [];
gdjs.extrasCode.GDNewTiledSpriteObjects2= [];
gdjs.extrasCode.GDNewSprite3Objects1= [];
gdjs.extrasCode.GDNewSprite3Objects2= [];
gdjs.extrasCode.GDNewText2Objects1= [];
gdjs.extrasCode.GDNewText2Objects2= [];


gdjs.extrasCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown"), gdjs.extrasCode.GDMedievalButtonBrownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.extrasCode.GDMedievalButtonBrownObjects1.length;i<l;++i) {
    if ( gdjs.extrasCode.GDMedievalButtonBrownObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.extrasCode.GDMedievalButtonBrownObjects1[k] = gdjs.extrasCode.GDMedievalButtonBrownObjects1[i];
        ++k;
    }
}
gdjs.extrasCode.GDMedievalButtonBrownObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.extrasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.extrasCode.GDNewSpriteObjects1.length = 0;
gdjs.extrasCode.GDNewSpriteObjects2.length = 0;
gdjs.extrasCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.extrasCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.extrasCode.GDNewSprite2Objects1.length = 0;
gdjs.extrasCode.GDNewSprite2Objects2.length = 0;
gdjs.extrasCode.GDNewTextObjects1.length = 0;
gdjs.extrasCode.GDNewTextObjects2.length = 0;
gdjs.extrasCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.extrasCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.extrasCode.GDNewSprite3Objects1.length = 0;
gdjs.extrasCode.GDNewSprite3Objects2.length = 0;
gdjs.extrasCode.GDNewText2Objects1.length = 0;
gdjs.extrasCode.GDNewText2Objects2.length = 0;

gdjs.extrasCode.eventsList0(runtimeScene);

return;

}

gdjs['extrasCode'] = gdjs.extrasCode;
