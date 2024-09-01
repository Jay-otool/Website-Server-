gdjs.Mansion_32indoor_322Code = {};
gdjs.Mansion_32indoor_322Code.GDNewSpriteObjects1= [];
gdjs.Mansion_32indoor_322Code.GDNewSpriteObjects2= [];
gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1= [];
gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects2= [];
gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1= [];
gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects2= [];
gdjs.Mansion_32indoor_322Code.GDNewTiledSpriteObjects1= [];
gdjs.Mansion_32indoor_322Code.GDNewTiledSpriteObjects2= [];
gdjs.Mansion_32indoor_322Code.GDNewSprite3Objects1= [];
gdjs.Mansion_32indoor_322Code.GDNewSprite3Objects2= [];
gdjs.Mansion_32indoor_322Code.GDNewSprite4Objects1= [];
gdjs.Mansion_32indoor_322Code.GDNewSprite4Objects2= [];


gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1});
gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Mansion_32indoor_322Code.GDNewTiledSpriteObjects1});
gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1});
gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Mansion_32indoor_322Code.GDNewSprite3Objects1});
gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1});
gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1});
gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1});
gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Mansion_32indoor_322Code.GDNewSprite4Objects1});
gdjs.Mansion_32indoor_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1[i].clearForces();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1[i].addForce(-(80), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1[i].addForce(30, 0, 1);
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("walkright");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Mansion_32indoor_322Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite6Objects1Objects, gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("walkleft");
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1[i].addForce(-(30), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Mansion_32indoor_322Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite6Objects1Objects, gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("walkright");
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1[i].addForce(30, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite6Objects1Objects, gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_322Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite2Objects1Objects, gdjs.Mansion_32indoor_322Code.mapOfGDgdjs_9546Mansion_959532indoor_9595322Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mansion indoor 3", false);
}}

}


};

gdjs.Mansion_32indoor_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mansion_32indoor_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects1.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSprite6Objects2.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSprite4Objects1.length = 0;
gdjs.Mansion_32indoor_322Code.GDNewSprite4Objects2.length = 0;

gdjs.Mansion_32indoor_322Code.eventsList0(runtimeScene);

return;

}

gdjs['Mansion_32indoor_322Code'] = gdjs.Mansion_32indoor_322Code;
