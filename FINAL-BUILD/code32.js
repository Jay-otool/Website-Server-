gdjs.Town_325Code = {};
gdjs.Town_325Code.GDNewSpriteObjects1= [];
gdjs.Town_325Code.GDNewSpriteObjects2= [];
gdjs.Town_325Code.GDNewSprite2Objects1= [];
gdjs.Town_325Code.GDNewSprite2Objects2= [];
gdjs.Town_325Code.GDNewSprite3Objects1= [];
gdjs.Town_325Code.GDNewSprite3Objects2= [];
gdjs.Town_325Code.GDNewSprite5Objects1= [];
gdjs.Town_325Code.GDNewSprite5Objects2= [];
gdjs.Town_325Code.GDNewSprite4Objects1= [];
gdjs.Town_325Code.GDNewSprite4Objects2= [];
gdjs.Town_325Code.GDNewSprite6Objects1= [];
gdjs.Town_325Code.GDNewSprite6Objects2= [];


gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Town_325Code.GDNewSprite2Objects1});
gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Town_325Code.GDNewSprite3Objects1});
gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Town_325Code.GDNewSprite3Objects1});
gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Town_325Code.GDNewSprite5Objects1});
gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Town_325Code.GDNewSprite3Objects1});
gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Town_325Code.GDNewSprite5Objects1});
gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Town_325Code.GDNewSprite4Objects1});
gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Town_325Code.GDNewSprite2Objects1});
gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Town_325Code.GDNewSprite6Objects1});
gdjs.Town_325Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town_325Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite2Objects1[i].addForce(80, 0, 0);
}
}{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Driving backward");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town_325Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town_325Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite2Objects1[i].addForce(-(80), 0, 0);
}
}{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Driving");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town_325Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town_325Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Town_325Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite2Objects1Objects, gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Town_325Code.GDNewSprite2Objects1 */
/* Reuse gdjs.Town_325Code.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite3Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Town_325Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Town_325Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite5Objects1Objects, gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Town_325Code.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite5Objects1[i].getBehavior("Animation").setAnimationName("WALK 1");
}
}{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite5Objects1[i].addForce(-(60), 0, 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Town_325Code.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite5Objects1[i].getBehavior("Animation").setAnimationName("WALK 1");
}
}{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite5Objects1[i].addForce(-(60), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Town_325Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Town_325Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite5Objects1Objects, gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Town_325Code.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite5Objects1[i].getBehavior("Animation").setAnimationName("WALK 2");
}
}{for(var i = 0, len = gdjs.Town_325Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town_325Code.GDNewSprite5Objects1[i].addForce(60, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town_325Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Town_325Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite2Objects1Objects, gdjs.Town_325Code.mapOfGDgdjs_9546Town_9595325Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Security", false);
}}

}


};

gdjs.Town_325Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Town_325Code.GDNewSpriteObjects1.length = 0;
gdjs.Town_325Code.GDNewSpriteObjects2.length = 0;
gdjs.Town_325Code.GDNewSprite2Objects1.length = 0;
gdjs.Town_325Code.GDNewSprite2Objects2.length = 0;
gdjs.Town_325Code.GDNewSprite3Objects1.length = 0;
gdjs.Town_325Code.GDNewSprite3Objects2.length = 0;
gdjs.Town_325Code.GDNewSprite5Objects1.length = 0;
gdjs.Town_325Code.GDNewSprite5Objects2.length = 0;
gdjs.Town_325Code.GDNewSprite4Objects1.length = 0;
gdjs.Town_325Code.GDNewSprite4Objects2.length = 0;
gdjs.Town_325Code.GDNewSprite6Objects1.length = 0;
gdjs.Town_325Code.GDNewSprite6Objects2.length = 0;

gdjs.Town_325Code.eventsList0(runtimeScene);

return;

}

gdjs['Town_325Code'] = gdjs.Town_325Code;
