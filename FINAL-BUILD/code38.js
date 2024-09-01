gdjs.Dakota_32side_32lolCode = {};
gdjs.Dakota_32side_32lolCode.GDNewSpriteObjects1= [];
gdjs.Dakota_32side_32lolCode.GDNewSpriteObjects2= [];
gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1= [];
gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects2= [];
gdjs.Dakota_32side_32lolCode.GDNewSprite3Objects1= [];
gdjs.Dakota_32side_32lolCode.GDNewSprite3Objects2= [];
gdjs.Dakota_32side_32lolCode.GDNewTiledSpriteObjects1= [];
gdjs.Dakota_32side_32lolCode.GDNewTiledSpriteObjects2= [];


gdjs.Dakota_32side_32lolCode.mapOfGDgdjs_9546Dakota_959532side_959532lolCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1});
gdjs.Dakota_32side_32lolCode.mapOfGDgdjs_9546Dakota_959532side_959532lolCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Dakota_32side_32lolCode.GDNewTiledSpriteObjects1});
gdjs.Dakota_32side_32lolCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("driving");
}
}{for(var i = 0, len = gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1[i].addForce(-(80), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Dakota_32side_32lolCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_32side_32lolCode.mapOfGDgdjs_9546Dakota_959532side_959532lolCode_9546GDNewSprite2Objects1Objects, gdjs.Dakota_32side_32lolCode.mapOfGDgdjs_9546Dakota_959532side_959532lolCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32side_32lolCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_32lolCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_32lolCode.GDNewSprite3Objects1[i].addForce(-(80), 0, 1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "City final", false);
}}

}


};

gdjs.Dakota_32side_32lolCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dakota_32side_32lolCode.GDNewSpriteObjects1.length = 0;
gdjs.Dakota_32side_32lolCode.GDNewSpriteObjects2.length = 0;
gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects1.length = 0;
gdjs.Dakota_32side_32lolCode.GDNewSprite2Objects2.length = 0;
gdjs.Dakota_32side_32lolCode.GDNewSprite3Objects1.length = 0;
gdjs.Dakota_32side_32lolCode.GDNewSprite3Objects2.length = 0;
gdjs.Dakota_32side_32lolCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Dakota_32side_32lolCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.Dakota_32side_32lolCode.eventsList0(runtimeScene);

return;

}

gdjs['Dakota_32side_32lolCode'] = gdjs.Dakota_32side_32lolCode;
