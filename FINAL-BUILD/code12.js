gdjs.Shady_32valley_321Code = {};
gdjs.Shady_32valley_321Code.GDNewSpriteObjects1= [];
gdjs.Shady_32valley_321Code.GDNewSpriteObjects2= [];
gdjs.Shady_32valley_321Code.GDNewSprite2Objects1= [];
gdjs.Shady_32valley_321Code.GDNewSprite2Objects2= [];
gdjs.Shady_32valley_321Code.GDNewSprite3Objects1= [];
gdjs.Shady_32valley_321Code.GDNewSprite3Objects2= [];
gdjs.Shady_32valley_321Code.GDNewTiledSpriteObjects1= [];
gdjs.Shady_32valley_321Code.GDNewTiledSpriteObjects2= [];


gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Shady_32valley_321Code.GDNewSprite3Objects1});
gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Shady_32valley_321Code.GDNewTiledSpriteObjects1});
gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Shady_32valley_321Code.GDNewTiledSpriteObjects1});
gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Shady_32valley_321Code.GDNewSprite3Objects1});
gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Shady_32valley_321Code.GDNewSprite2Objects1});
gdjs.Shady_32valley_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Shady_32valley_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Shady_32valley_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Shady_32valley_321Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Idle 2");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Shady_32valley_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Shady_32valley_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Shady_32valley_321Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Walk 2");
}
}{for(var i = 0, len = gdjs.Shady_32valley_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Shady_32valley_321Code.GDNewSprite3Objects1[i].addForce(30, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Shady_32valley_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Shady_32valley_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Shady_32valley_321Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Idle 1");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Shady_32valley_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Shady_32valley_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Shady_32valley_321Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Walk 1");
}
}{for(var i = 0, len = gdjs.Shady_32valley_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Shady_32valley_321Code.GDNewSprite3Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Shady_32valley_321Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Shady_32valley_321Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewSprite3Objects1Objects, gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Shady_32valley_321Code.GDNewSprite3Objects1 */
/* Reuse gdjs.Shady_32valley_321Code.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.Shady_32valley_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Shady_32valley_321Code.GDNewSprite3Objects1[i].separateFromObjectsList(gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Shady_32valley_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Shady_32valley_321Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewSprite3Objects1Objects, gdjs.Shady_32valley_321Code.mapOfGDgdjs_9546Shady_959532valley_9595321Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INDOER", false);
}}

}


};

gdjs.Shady_32valley_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Shady_32valley_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Shady_32valley_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Shady_32valley_321Code.GDNewSprite2Objects1.length = 0;
gdjs.Shady_32valley_321Code.GDNewSprite2Objects2.length = 0;
gdjs.Shady_32valley_321Code.GDNewSprite3Objects1.length = 0;
gdjs.Shady_32valley_321Code.GDNewSprite3Objects2.length = 0;
gdjs.Shady_32valley_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Shady_32valley_321Code.GDNewTiledSpriteObjects2.length = 0;

gdjs.Shady_32valley_321Code.eventsList0(runtimeScene);

return;

}

gdjs['Shady_32valley_321Code'] = gdjs.Shady_32valley_321Code;
