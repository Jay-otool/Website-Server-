gdjs.Dakota_32Side_325Code = {};
gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1= [];
gdjs.Dakota_32Side_325Code.GDNewSpriteObjects2= [];
gdjs.Dakota_32Side_325Code.GDNewSprite2Objects1= [];
gdjs.Dakota_32Side_325Code.GDNewSprite2Objects2= [];
gdjs.Dakota_32Side_325Code.GDNewSprite3Objects1= [];
gdjs.Dakota_32Side_325Code.GDNewSprite3Objects2= [];
gdjs.Dakota_32Side_325Code.GDNewSprite4Objects1= [];
gdjs.Dakota_32Side_325Code.GDNewSprite4Objects2= [];


gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1});
gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Dakota_32Side_325Code.GDNewSprite3Objects1});
gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Dakota_32Side_325Code.GDNewSprite3Objects1});
gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1});
gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Dakota_32Side_325Code.GDNewSprite4Objects1});
gdjs.Dakota_32Side_325Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1[i].addForce(80, 0, 0);
}
}{for(var i = 0, len = gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("Driving backward");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1[i].addForce(-(80), 0, 0);
}
}{for(var i = 0, len = gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("Driving");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32Side_325Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSpriteObjects1Objects, gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1 */
/* Reuse gdjs.Dakota_32Side_325Code.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1[i].separateFromObjectsList(gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSprite3Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Dakota_32Side_325Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSpriteObjects1Objects, gdjs.Dakota_32Side_325Code.mapOfGDgdjs_9546Dakota_959532Side_9595325Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Town 5", false);
}}

}


};

gdjs.Dakota_32Side_325Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dakota_32Side_325Code.GDNewSpriteObjects1.length = 0;
gdjs.Dakota_32Side_325Code.GDNewSpriteObjects2.length = 0;
gdjs.Dakota_32Side_325Code.GDNewSprite2Objects1.length = 0;
gdjs.Dakota_32Side_325Code.GDNewSprite2Objects2.length = 0;
gdjs.Dakota_32Side_325Code.GDNewSprite3Objects1.length = 0;
gdjs.Dakota_32Side_325Code.GDNewSprite3Objects2.length = 0;
gdjs.Dakota_32Side_325Code.GDNewSprite4Objects1.length = 0;
gdjs.Dakota_32Side_325Code.GDNewSprite4Objects2.length = 0;

gdjs.Dakota_32Side_325Code.eventsList0(runtimeScene);

return;

}

gdjs['Dakota_32Side_325Code'] = gdjs.Dakota_32Side_325Code;
