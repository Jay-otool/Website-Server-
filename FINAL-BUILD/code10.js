gdjs.Dakota_32Side_321Code = {};
gdjs.Dakota_32Side_321Code.GDNewTiledSpriteObjects1= [];
gdjs.Dakota_32Side_321Code.GDNewTiledSpriteObjects2= [];
gdjs.Dakota_32Side_321Code.GDNewTiledSpriteObjects3= [];
gdjs.Dakota_32Side_321Code.GDNewSpriteObjects1= [];
gdjs.Dakota_32Side_321Code.GDNewSpriteObjects2= [];
gdjs.Dakota_32Side_321Code.GDNewSpriteObjects3= [];
gdjs.Dakota_32Side_321Code.GDNewSprite2Objects1= [];
gdjs.Dakota_32Side_321Code.GDNewSprite2Objects2= [];
gdjs.Dakota_32Side_321Code.GDNewSprite2Objects3= [];
gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1= [];
gdjs.Dakota_32Side_321Code.GDNewSprite3Objects2= [];
gdjs.Dakota_32Side_321Code.GDNewSprite3Objects3= [];
gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects1= [];
gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects2= [];
gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects3= [];
gdjs.Dakota_32Side_321Code.GDNewSprite4Objects1= [];
gdjs.Dakota_32Side_321Code.GDNewSprite4Objects2= [];
gdjs.Dakota_32Side_321Code.GDNewSprite4Objects3= [];


gdjs.Dakota_32Side_321Code.asyncCallback13647140 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Dakota_32Side_321Code.GDNewSprite2Objects3);

{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite2Objects3.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite2Objects3[i].hide();
}
}}
gdjs.Dakota_32Side_321Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Dakota_32Side_321Code.GDNewSprite2Objects2) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Dakota_32Side_321Code.asyncCallback13647140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32Side_321Code.asyncCallback13647044 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Dakota_32Side_321Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite2Objects2[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "gta_3_notification.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Dakota_32Side_321Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Dakota_32Side_321Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Dakota_32Side_321Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Dakota_32Side_321Code.asyncCallback13647044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1});
gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects1});
gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects1});
gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1});
gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Dakota_32Side_321Code.GDNewSprite4Objects1});
gdjs.Dakota_32Side_321Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32Side_321Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite2Objects1[i].hide();
}
}
{ //Subevents
gdjs.Dakota_32Side_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewSprite3Objects1Objects, gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewTiledSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1 */
/* Reuse gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects1 */
{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1[i].separateFromObjectsList(gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewTiledSprite2Objects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Walk 1");
}
}{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Idle 1");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Walk 2");
}
}{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1[i].addForce(30, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Idle 2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Dakota_32Side_321Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewSprite3Objects1Objects, gdjs.Dakota_32Side_321Code.mapOfGDgdjs_9546Dakota_959532Side_9595321Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "city 1", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Dakota_32Side_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dakota_32Side_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Dakota_32Side_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Dakota_32Side_321Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSpriteObjects3.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite2Objects1.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite2Objects2.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite2Objects3.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite3Objects1.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite3Objects2.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite3Objects3.length = 0;
gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Dakota_32Side_321Code.GDNewTiledSprite2Objects3.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite4Objects1.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite4Objects2.length = 0;
gdjs.Dakota_32Side_321Code.GDNewSprite4Objects3.length = 0;

gdjs.Dakota_32Side_321Code.eventsList2(runtimeScene);

return;

}

gdjs['Dakota_32Side_321Code'] = gdjs.Dakota_32Side_321Code;
