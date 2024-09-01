gdjs.Shady_32Valley_322Code = {};
gdjs.Shady_32Valley_322Code.GDNewSpriteObjects1= [];
gdjs.Shady_32Valley_322Code.GDNewSpriteObjects2= [];
gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1= [];
gdjs.Shady_32Valley_322Code.GDNewSprite2Objects2= [];
gdjs.Shady_32Valley_322Code.GDNewTiledSpriteObjects1= [];
gdjs.Shady_32Valley_322Code.GDNewTiledSpriteObjects2= [];
gdjs.Shady_32Valley_322Code.GDNewSprite3Objects1= [];
gdjs.Shady_32Valley_322Code.GDNewSprite3Objects2= [];
gdjs.Shady_32Valley_322Code.GDNewSprite4Objects1= [];
gdjs.Shady_32Valley_322Code.GDNewSprite4Objects2= [];
gdjs.Shady_32Valley_322Code.GDNewSprite5Objects1= [];
gdjs.Shady_32Valley_322Code.GDNewSprite5Objects2= [];


gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1});
gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Shady_32Valley_322Code.GDNewTiledSpriteObjects1});
gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Shady_32Valley_322Code.GDNewTiledSpriteObjects1});
gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1});
gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Shady_32Valley_322Code.GDNewSprite4Objects1});
gdjs.Shady_32Valley_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("walk");
}
}{for(var i = 0, len = gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("walk2");
}
}{for(var i = 0, len = gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1[i].addForce(30, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("idle2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Shady_32Valley_322Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewSprite2Objects1Objects, gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1 */
/* Reuse gdjs.Shady_32Valley_322Code.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Shady_32Valley_322Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewSprite2Objects1Objects, gdjs.Shady_32Valley_322Code.mapOfGDgdjs_9546Shady_959532Valley_9595322Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "City 2", false);
}}

}


};

gdjs.Shady_32Valley_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Shady_32Valley_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Shady_32Valley_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Shady_32Valley_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSprite4Objects1.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSprite4Objects2.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSprite5Objects1.length = 0;
gdjs.Shady_32Valley_322Code.GDNewSprite5Objects2.length = 0;

gdjs.Shady_32Valley_322Code.eventsList0(runtimeScene);

return;

}

gdjs['Shady_32Valley_322Code'] = gdjs.Shady_32Valley_322Code;
