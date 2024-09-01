gdjs.CopsCode = {};
gdjs.CopsCode.GDNewSpriteObjects1= [];
gdjs.CopsCode.GDNewSpriteObjects2= [];
gdjs.CopsCode.GDNewSpriteObjects3= [];
gdjs.CopsCode.GDNewSprite2Objects1= [];
gdjs.CopsCode.GDNewSprite2Objects2= [];
gdjs.CopsCode.GDNewSprite2Objects3= [];
gdjs.CopsCode.GDNewTiledSpriteObjects1= [];
gdjs.CopsCode.GDNewTiledSpriteObjects2= [];
gdjs.CopsCode.GDNewTiledSpriteObjects3= [];
gdjs.CopsCode.GDNewTiledSprite2Objects1= [];
gdjs.CopsCode.GDNewTiledSprite2Objects2= [];
gdjs.CopsCode.GDNewTiledSprite2Objects3= [];
gdjs.CopsCode.GDNewSprite3Objects1= [];
gdjs.CopsCode.GDNewSprite3Objects2= [];
gdjs.CopsCode.GDNewSprite3Objects3= [];


gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.CopsCode.GDNewSprite2Objects1});
gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.CopsCode.GDNewTiledSpriteObjects1});
gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.CopsCode.GDNewTiledSpriteObjects1});
gdjs.CopsCode.asyncCallback13472972 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewTiledSprite2"), gdjs.CopsCode.GDNewTiledSprite2Objects3);

{for(var i = 0, len = gdjs.CopsCode.GDNewTiledSprite2Objects3.length ;i < len;++i) {
    gdjs.CopsCode.GDNewTiledSprite2Objects3[i].hide();
}
}}
gdjs.CopsCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.CopsCode.GDNewTiledSprite2Objects2) asyncObjectsList.addObject("NewTiledSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(9), (runtimeScene) => (gdjs.CopsCode.asyncCallback13472972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CopsCode.asyncCallback13472396 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewTiledSprite2"), gdjs.CopsCode.GDNewTiledSprite2Objects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "gta_3_notification.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.CopsCode.GDNewTiledSprite2Objects2.length ;i < len;++i) {
    gdjs.CopsCode.GDNewTiledSprite2Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.CopsCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CopsCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.CopsCode.GDNewTiledSprite2Objects1) asyncObjectsList.addObject("NewTiledSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CopsCode.asyncCallback13472396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.CopsCode.GDNewSprite2Objects1});
gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.CopsCode.GDNewSprite3Objects1});
gdjs.CopsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CopsCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.CopsCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.CopsCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("YOOB");
}
}{for(var i = 0, len = gdjs.CopsCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.CopsCode.GDNewSprite2Objects1[i].addForce(-(60), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CopsCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.CopsCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.CopsCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("FOOD");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CopsCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.CopsCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewSprite2Objects1Objects, gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.CopsCode.GDNewSprite2Objects1 */
/* Reuse gdjs.CopsCode.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.CopsCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.CopsCode.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CopsCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.CopsCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.CopsCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("OWWW");
}
}{for(var i = 0, len = gdjs.CopsCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.CopsCode.GDNewSprite2Objects1[i].addForce(60, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CopsCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.CopsCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.CopsCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("FLOO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.CopsCode.GDNewTiledSprite2Objects1);
{for(var i = 0, len = gdjs.CopsCode.GDNewTiledSprite2Objects1.length ;i < len;++i) {
    gdjs.CopsCode.GDNewTiledSprite2Objects1[i].hide();
}
}
{ //Subevents
gdjs.CopsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CopsCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CopsCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewSprite2Objects1Objects, gdjs.CopsCode.mapOfGDgdjs_9546CopsCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "trunk", false);
}}

}


};

gdjs.CopsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CopsCode.GDNewSpriteObjects1.length = 0;
gdjs.CopsCode.GDNewSpriteObjects2.length = 0;
gdjs.CopsCode.GDNewSpriteObjects3.length = 0;
gdjs.CopsCode.GDNewSprite2Objects1.length = 0;
gdjs.CopsCode.GDNewSprite2Objects2.length = 0;
gdjs.CopsCode.GDNewSprite2Objects3.length = 0;
gdjs.CopsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.CopsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.CopsCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.CopsCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.CopsCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.CopsCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.CopsCode.GDNewSprite3Objects1.length = 0;
gdjs.CopsCode.GDNewSprite3Objects2.length = 0;
gdjs.CopsCode.GDNewSprite3Objects3.length = 0;

gdjs.CopsCode.eventsList2(runtimeScene);

return;

}

gdjs['CopsCode'] = gdjs.CopsCode;
