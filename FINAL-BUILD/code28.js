gdjs.ChopperCode = {};
gdjs.ChopperCode.GDNewSpriteObjects1= [];
gdjs.ChopperCode.GDNewSpriteObjects2= [];
gdjs.ChopperCode.GDNewSprite4Objects1= [];
gdjs.ChopperCode.GDNewSprite4Objects2= [];
gdjs.ChopperCode.GDNewTiledSpriteObjects1= [];
gdjs.ChopperCode.GDNewTiledSpriteObjects2= [];
gdjs.ChopperCode.GDNewSprite3Objects1= [];
gdjs.ChopperCode.GDNewSprite3Objects2= [];
gdjs.ChopperCode.GDNewSprite2Objects1= [];
gdjs.ChopperCode.GDNewSprite2Objects2= [];
gdjs.ChopperCode.GDNewSprite5Objects1= [];
gdjs.ChopperCode.GDNewSprite5Objects2= [];
gdjs.ChopperCode.GDNewTiledSprite2Objects1= [];
gdjs.ChopperCode.GDNewTiledSprite2Objects2= [];
gdjs.ChopperCode.GDNewTiledSprite3Objects1= [];
gdjs.ChopperCode.GDNewTiledSprite3Objects2= [];


gdjs.ChopperCode.asyncCallback14092924 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects2);

{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects2[i].getBehavior("Animation").setAnimationName("idleleft");
}
}{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects2[i].clearForces();
}
}}
gdjs.ChopperCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.ChopperCode.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.ChopperCode.asyncCallback14092924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.ChopperCode.GDNewSprite3Objects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.ChopperCode.GDNewTiledSpriteObjects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.ChopperCode.GDNewTiledSpriteObjects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.ChopperCode.GDNewSprite4Objects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.ChopperCode.GDNewTiledSpriteObjects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.ChopperCode.GDNewTiledSpriteObjects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.ChopperCode.GDNewSprite4Objects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.ChopperCode.GDNewSprite2Objects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.ChopperCode.GDNewSprite5Objects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.ChopperCode.GDNewTiledSprite2Objects1});
gdjs.ChopperCode.asyncCallback14101172 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite5"), gdjs.ChopperCode.GDNewSprite5Objects2);

{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite5Objects2[i].addForce(-(70), 0, 0);
}
}}
gdjs.ChopperCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.ChopperCode.GDNewSprite5Objects1) asyncObjectsList.addObject("NewSprite5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.ChopperCode.asyncCallback14101172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.ChopperCode.GDNewSprite5Objects1});
gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSprite3Objects1Objects = Hashtable.newFrom({"NewTiledSprite3": gdjs.ChopperCode.GDNewTiledSprite3Objects1});
gdjs.ChopperCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14092852);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("shoot");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Voicy_Tank Firing.mp3", false, 100, 1);
}
{ //Subevents
gdjs.ChopperCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("walkleft");
}
}{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("idleleft");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("walkright");
}
}{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].addForce(30, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("idleright");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ChopperCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite3Objects1[i].addForce(-(80), 0, 1);
}
}{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ChopperCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.ChopperCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite3Objects1Objects, gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ChopperCode.GDNewSprite3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);
/* Reuse gdjs.ChopperCode.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite3Objects1[i].separateFromObjectsList(gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSpriteObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.ChopperCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite4Objects1Objects, gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ChopperCode.GDNewSprite4Objects1 */
/* Reuse gdjs.ChopperCode.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].separateFromObjectsList(gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ChopperCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ChopperCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite4Objects1Objects, gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ChopperCode.GDNewSprite4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.ChopperCode.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite5Objects1[i].getBehavior("Animation").setAnimationName("chooping");
}
}{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite5Objects1[i].addForce(0, -(70), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.ChopperCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.ChopperCode.GDNewTiledSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite5Objects1Objects, gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14100540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ChopperCode.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.ChopperCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.ChopperCode.GDNewSprite5Objects1[i].clearForces();
}
}
{ //Subevents
gdjs.ChopperCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.ChopperCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.ChopperCode.GDNewTiledSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewSprite5Objects1Objects, gdjs.ChopperCode.mapOfGDgdjs_9546ChopperCode_9546GDNewTiledSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dakota side 4", false);
}}

}


};

gdjs.ChopperCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChopperCode.GDNewSpriteObjects1.length = 0;
gdjs.ChopperCode.GDNewSpriteObjects2.length = 0;
gdjs.ChopperCode.GDNewSprite4Objects1.length = 0;
gdjs.ChopperCode.GDNewSprite4Objects2.length = 0;
gdjs.ChopperCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ChopperCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ChopperCode.GDNewSprite3Objects1.length = 0;
gdjs.ChopperCode.GDNewSprite3Objects2.length = 0;
gdjs.ChopperCode.GDNewSprite2Objects1.length = 0;
gdjs.ChopperCode.GDNewSprite2Objects2.length = 0;
gdjs.ChopperCode.GDNewSprite5Objects1.length = 0;
gdjs.ChopperCode.GDNewSprite5Objects2.length = 0;
gdjs.ChopperCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.ChopperCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.ChopperCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.ChopperCode.GDNewTiledSprite3Objects2.length = 0;

gdjs.ChopperCode.eventsList2(runtimeScene);

return;

}

gdjs['ChopperCode'] = gdjs.ChopperCode;
