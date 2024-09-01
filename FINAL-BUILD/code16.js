gdjs.Dakota_32side_322Code = {};
gdjs.Dakota_32side_322Code.GDNewSpriteObjects1= [];
gdjs.Dakota_32side_322Code.GDNewSpriteObjects2= [];
gdjs.Dakota_32side_322Code.GDNewSpriteObjects3= [];
gdjs.Dakota_32side_322Code.GDNewTiledSpriteObjects1= [];
gdjs.Dakota_32side_322Code.GDNewTiledSpriteObjects2= [];
gdjs.Dakota_32side_322Code.GDNewTiledSpriteObjects3= [];
gdjs.Dakota_32side_322Code.GDNewSprite2Objects1= [];
gdjs.Dakota_32side_322Code.GDNewSprite2Objects2= [];
gdjs.Dakota_32side_322Code.GDNewSprite2Objects3= [];
gdjs.Dakota_32side_322Code.GDNewSprite3Objects1= [];
gdjs.Dakota_32side_322Code.GDNewSprite3Objects2= [];
gdjs.Dakota_32side_322Code.GDNewSprite3Objects3= [];


gdjs.Dakota_32side_322Code.mapOfGDgdjs_9546Dakota_959532side_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dakota_32side_322Code.GDNewSprite2Objects1});
gdjs.Dakota_32side_322Code.mapOfGDgdjs_9546Dakota_959532side_9595322Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Dakota_32side_322Code.GDNewTiledSpriteObjects1});
gdjs.Dakota_32side_322Code.asyncCallback13823436 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dakota 2", false);
}}
gdjs.Dakota_32side_322Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Dakota_32side_322Code.asyncCallback13823436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32side_322Code.asyncCallback13823292 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.Dakota_32side_322Code.GDNewSprite3Objects2);

{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite3Objects2[i].hide();
}
}
{ //Subevents
gdjs.Dakota_32side_322Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Dakota_32side_322Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Dakota_32side_322Code.GDNewSprite3Objects1) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Dakota_32side_322Code.asyncCallback13823292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32side_322Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("walk");
}
}{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite2Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("walk2");
}
}{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite2Objects1[i].addForce(30, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_322Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("idle2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Dakota_32side_322Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_32side_322Code.mapOfGDgdjs_9546Dakota_959532side_9595322Code_9546GDNewSprite2Objects1Objects, gdjs.Dakota_32side_322Code.mapOfGDgdjs_9546Dakota_959532side_9595322Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13822572);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32side_322Code.GDNewSprite3Objects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Mission Passed.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite3Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.Dakota_32side_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32side_322Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_322Code.GDNewSprite3Objects1[i].hide();
}
}}

}


};

gdjs.Dakota_32side_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dakota_32side_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Dakota_32side_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Dakota_32side_322Code.GDNewSpriteObjects3.length = 0;
gdjs.Dakota_32side_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Dakota_32side_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Dakota_32side_322Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Dakota_32side_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Dakota_32side_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Dakota_32side_322Code.GDNewSprite2Objects3.length = 0;
gdjs.Dakota_32side_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Dakota_32side_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Dakota_32side_322Code.GDNewSprite3Objects3.length = 0;

gdjs.Dakota_32side_322Code.eventsList2(runtimeScene);

return;

}

gdjs['Dakota_32side_322Code'] = gdjs.Dakota_32side_322Code;
