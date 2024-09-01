gdjs.tutorialCode = {};
gdjs.tutorialCode.GDNewSpriteObjects1= [];
gdjs.tutorialCode.GDNewSpriteObjects2= [];
gdjs.tutorialCode.GDNewSpriteObjects3= [];
gdjs.tutorialCode.GDNewSprite2Objects1= [];
gdjs.tutorialCode.GDNewSprite2Objects2= [];
gdjs.tutorialCode.GDNewSprite2Objects3= [];
gdjs.tutorialCode.GDNewSprite3Objects1= [];
gdjs.tutorialCode.GDNewSprite3Objects2= [];
gdjs.tutorialCode.GDNewSprite3Objects3= [];
gdjs.tutorialCode.GDNewSprite4Objects1= [];
gdjs.tutorialCode.GDNewSprite4Objects2= [];
gdjs.tutorialCode.GDNewSprite4Objects3= [];
gdjs.tutorialCode.GDNewTiledSpriteObjects1= [];
gdjs.tutorialCode.GDNewTiledSpriteObjects2= [];
gdjs.tutorialCode.GDNewTiledSpriteObjects3= [];


gdjs.tutorialCode.asyncCallback13572892 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.tutorialCode.GDNewSprite3Objects3);

{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite3Objects3[i].hide();
}
}}
gdjs.tutorialCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.tutorialCode.GDNewSprite3Objects2) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.tutorialCode.asyncCallback13572892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.tutorialCode.asyncCallback13572444 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.tutorialCode.GDNewSprite3Objects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "gta_3_notification.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite3Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.tutorialCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.tutorialCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.tutorialCode.GDNewSprite3Objects1) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.tutorialCode.asyncCallback13572444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.tutorialCode.GDNewSprite4Objects1});
gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.tutorialCode.GDNewTiledSpriteObjects1});
gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.tutorialCode.GDNewTiledSpriteObjects1});
gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.tutorialCode.GDNewSprite4Objects1});
gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.tutorialCode.GDNewSprite2Objects1});
gdjs.tutorialCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.tutorialCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite3Objects1[i].hide();
}
}
{ //Subevents
gdjs.tutorialCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.tutorialCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.tutorialCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewSprite4Objects1Objects, gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.tutorialCode.GDNewSprite4Objects1 */
/* Reuse gdjs.tutorialCode.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite4Objects1[i].separateFromObjectsList(gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.tutorialCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite4Objects1[i].addForce(60, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.tutorialCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.tutorialCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("Walk1");
}
}{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite4Objects1[i].addForce(-(60), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.tutorialCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.tutorialCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.tutorialCode.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("Idle1");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.tutorialCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.tutorialCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewSprite4Objects1Objects, gdjs.tutorialCode.mapOfGDgdjs_9546tutorialCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene 1", false);
}}

}


};

gdjs.tutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tutorialCode.GDNewSpriteObjects1.length = 0;
gdjs.tutorialCode.GDNewSpriteObjects2.length = 0;
gdjs.tutorialCode.GDNewSpriteObjects3.length = 0;
gdjs.tutorialCode.GDNewSprite2Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite2Objects2.length = 0;
gdjs.tutorialCode.GDNewSprite2Objects3.length = 0;
gdjs.tutorialCode.GDNewSprite3Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite3Objects2.length = 0;
gdjs.tutorialCode.GDNewSprite3Objects3.length = 0;
gdjs.tutorialCode.GDNewSprite4Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite4Objects2.length = 0;
gdjs.tutorialCode.GDNewSprite4Objects3.length = 0;
gdjs.tutorialCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.tutorialCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.tutorialCode.GDNewTiledSpriteObjects3.length = 0;

gdjs.tutorialCode.eventsList2(runtimeScene);

return;

}

gdjs['tutorialCode'] = gdjs.tutorialCode;
