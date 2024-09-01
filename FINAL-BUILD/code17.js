gdjs.Dakota_322Code = {};
gdjs.Dakota_322Code.GDNewSpriteObjects1= [];
gdjs.Dakota_322Code.GDNewSpriteObjects2= [];
gdjs.Dakota_322Code.GDNewSprite2Objects1= [];
gdjs.Dakota_322Code.GDNewSprite2Objects2= [];
gdjs.Dakota_322Code.GDNewSprite3Objects1= [];
gdjs.Dakota_322Code.GDNewSprite3Objects2= [];
gdjs.Dakota_322Code.GDNewTiledSpriteObjects1= [];
gdjs.Dakota_322Code.GDNewTiledSpriteObjects2= [];


gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dakota_322Code.GDNewSprite2Objects1});
gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Dakota_322Code.GDNewSprite3Objects1});
gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dakota_322Code.GDNewSprite2Objects1});
gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Dakota_322Code.GDNewTiledSpriteObjects1});
gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Dakota_322Code.GDNewTiledSpriteObjects1});
gdjs.Dakota_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("YOOB");
}
}{for(var i = 0, len = gdjs.Dakota_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_322Code.GDNewSprite2Objects1[i].addForce(-(60), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("FOOD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("OWWW");
}
}{for(var i = 0, len = gdjs.Dakota_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_322Code.GDNewSprite2Objects1[i].addForce(60, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("FLOO");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_322Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewSprite2Objects1Objects, gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cut scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Dakota_322Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewSprite2Objects1Objects, gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Dakota_322Code.GDNewSprite2Objects1 */
/* Reuse gdjs.Dakota_322Code.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.Dakota_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_322Code.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs.Dakota_322Code.mapOfGDgdjs_9546Dakota_9595322Code_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


};

gdjs.Dakota_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dakota_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Dakota_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Dakota_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Dakota_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Dakota_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Dakota_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Dakota_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Dakota_322Code.GDNewTiledSpriteObjects2.length = 0;

gdjs.Dakota_322Code.eventsList0(runtimeScene);

return;

}

gdjs['Dakota_322Code'] = gdjs.Dakota_322Code;
