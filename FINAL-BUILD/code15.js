gdjs.City_322Code = {};
gdjs.City_322Code.GDNewSpriteObjects1= [];
gdjs.City_322Code.GDNewSpriteObjects2= [];
gdjs.City_322Code.GDNewTiledSpriteObjects1= [];
gdjs.City_322Code.GDNewTiledSpriteObjects2= [];
gdjs.City_322Code.GDNewSprite3Objects1= [];
gdjs.City_322Code.GDNewSprite3Objects2= [];
gdjs.City_322Code.GDNewSprite2Objects1= [];
gdjs.City_322Code.GDNewSprite2Objects2= [];
gdjs.City_322Code.GDNewSprite4Objects1= [];
gdjs.City_322Code.GDNewSprite4Objects2= [];
gdjs.City_322Code.GDNewSprite5Objects1= [];
gdjs.City_322Code.GDNewSprite5Objects2= [];
gdjs.City_322Code.GDNewSprite6Objects1= [];
gdjs.City_322Code.GDNewSprite6Objects2= [];


gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.City_322Code.GDNewSprite3Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.City_322Code.GDNewTiledSpriteObjects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.City_322Code.GDNewTiledSpriteObjects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.City_322Code.GDNewSprite3Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.City_322Code.GDNewSprite2Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.City_322Code.GDNewTiledSpriteObjects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.City_322Code.GDNewSprite4Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.City_322Code.GDNewTiledSpriteObjects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.City_322Code.GDNewSprite4Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.City_322Code.GDNewSprite2Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.City_322Code.GDNewSprite3Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.City_322Code.GDNewSprite5Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.City_322Code.GDNewSprite5Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.City_322Code.GDNewSprite3Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.City_322Code.GDNewSprite6Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.City_322Code.GDNewSprite3Objects1});
gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.City_322Code.GDNewSprite4Objects1});
gdjs.City_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("walk");
}
}{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("idle2");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("walk2");
}
}{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].addForce(30, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.City_322Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects, gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.City_322Code.GDNewSprite3Objects1 */
/* Reuse gdjs.City_322Code.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].separateFromObjectsList(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.City_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects, gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.City_322Code.GDNewSprite3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.City_322Code.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].separateFromObjectsList(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.City_322Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("walk left");
}
}{for(var i = 0, len = gdjs.City_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite4Objects1[i].addForce(-(80), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.City_322Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.City_322Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite4Objects1Objects, gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.City_322Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("walk right");
}
}{for(var i = 0, len = gdjs.City_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite4Objects1[i].addForce(80, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.City_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.City_322Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite4Objects1Objects, gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.City_322Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("walk left");
}
}{for(var i = 0, len = gdjs.City_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite4Objects1[i].addForce(-(80), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.City_322Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects, gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.City_322Code.GDNewSprite3Objects1 */
/* Reuse gdjs.City_322Code.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.City_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_322Code.GDNewSprite3Objects1[i].separateFromObjectsList(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite5Objects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.City_322Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects, gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dakota side 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_322Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.City_322Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite3Objects1Objects, gdjs.City_322Code.mapOfGDgdjs_9546City_9595322Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13794524);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Hey Buddy 1.mp3", false, 100, 1);
}}

}


};

gdjs.City_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.City_322Code.GDNewSpriteObjects1.length = 0;
gdjs.City_322Code.GDNewSpriteObjects2.length = 0;
gdjs.City_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.City_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.City_322Code.GDNewSprite3Objects1.length = 0;
gdjs.City_322Code.GDNewSprite3Objects2.length = 0;
gdjs.City_322Code.GDNewSprite2Objects1.length = 0;
gdjs.City_322Code.GDNewSprite2Objects2.length = 0;
gdjs.City_322Code.GDNewSprite4Objects1.length = 0;
gdjs.City_322Code.GDNewSprite4Objects2.length = 0;
gdjs.City_322Code.GDNewSprite5Objects1.length = 0;
gdjs.City_322Code.GDNewSprite5Objects2.length = 0;
gdjs.City_322Code.GDNewSprite6Objects1.length = 0;
gdjs.City_322Code.GDNewSprite6Objects2.length = 0;

gdjs.City_322Code.eventsList0(runtimeScene);

return;

}

gdjs['City_322Code'] = gdjs.City_322Code;
