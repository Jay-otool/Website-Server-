gdjs.Dakota_32side_324Code = {};
gdjs.Dakota_32side_324Code.GDNewSpriteObjects1= [];
gdjs.Dakota_32side_324Code.GDNewSpriteObjects2= [];
gdjs.Dakota_32side_324Code.GDNewSpriteObjects3= [];
gdjs.Dakota_32side_324Code.GDNewSpriteObjects4= [];
gdjs.Dakota_32side_324Code.GDNewSprite2Objects1= [];
gdjs.Dakota_32side_324Code.GDNewSprite2Objects2= [];
gdjs.Dakota_32side_324Code.GDNewSprite2Objects3= [];
gdjs.Dakota_32side_324Code.GDNewSprite2Objects4= [];
gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects1= [];
gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects2= [];
gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects3= [];
gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects4= [];
gdjs.Dakota_32side_324Code.GDNewSprite3Objects1= [];
gdjs.Dakota_32side_324Code.GDNewSprite3Objects2= [];
gdjs.Dakota_32side_324Code.GDNewSprite3Objects3= [];
gdjs.Dakota_32side_324Code.GDNewSprite3Objects4= [];


gdjs.Dakota_32side_324Code.mapOfGDgdjs_9546Dakota_959532side_9595324Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dakota_32side_324Code.GDNewSprite2Objects1});
gdjs.Dakota_32side_324Code.mapOfGDgdjs_9546Dakota_959532side_9595324Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects1});
gdjs.Dakota_32side_324Code.asyncCallback14129044 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ANOTHER CUTSCENE", false);
}}
gdjs.Dakota_32side_324Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Dakota_32side_324Code.asyncCallback14129044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32side_324Code.asyncCallback14128388 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.Dakota_32side_324Code.GDNewSprite3Objects3);

{for(var i = 0, len = gdjs.Dakota_32side_324Code.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs.Dakota_32side_324Code.GDNewSprite3Objects3[i].hide();
}
}
{ //Subevents
gdjs.Dakota_32side_324Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Dakota_32side_324Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Dakota_32side_324Code.GDNewSprite3Objects2) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Dakota_32side_324Code.asyncCallback14128388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32side_324Code.asyncCallback14128292 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32side_324Code.GDNewSprite3Objects2);
{for(var i = 0, len = gdjs.Dakota_32side_324Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.Dakota_32side_324Code.GDNewSprite3Objects2[i].hide(false);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Mission Passed.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Dakota_32side_324Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Dakota_32side_324Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Dakota_32side_324Code.asyncCallback14128292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32side_324Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_324Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32side_324Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_324Code.GDNewSprite2Objects1[i].addForce(0, 1000, 1);
}
}{for(var i = 0, len = gdjs.Dakota_32side_324Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_324Code.GDNewSprite3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_324Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_32side_324Code.mapOfGDgdjs_9546Dakota_959532side_9595324Code_9546GDNewSprite2Objects1Objects, gdjs.Dakota_32side_324Code.mapOfGDgdjs_9546Dakota_959532side_9595324Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14127684);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Dakota_32side_324Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Dakota_32side_324Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_324Code.GDNewSprite2Objects1[i].clearForces();
}
}
{ //Subevents
gdjs.Dakota_32side_324Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Dakota_32side_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dakota_32side_324Code.GDNewSpriteObjects1.length = 0;
gdjs.Dakota_32side_324Code.GDNewSpriteObjects2.length = 0;
gdjs.Dakota_32side_324Code.GDNewSpriteObjects3.length = 0;
gdjs.Dakota_32side_324Code.GDNewSpriteObjects4.length = 0;
gdjs.Dakota_32side_324Code.GDNewSprite2Objects1.length = 0;
gdjs.Dakota_32side_324Code.GDNewSprite2Objects2.length = 0;
gdjs.Dakota_32side_324Code.GDNewSprite2Objects3.length = 0;
gdjs.Dakota_32side_324Code.GDNewSprite2Objects4.length = 0;
gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Dakota_32side_324Code.GDNewTiledSpriteObjects4.length = 0;
gdjs.Dakota_32side_324Code.GDNewSprite3Objects1.length = 0;
gdjs.Dakota_32side_324Code.GDNewSprite3Objects2.length = 0;
gdjs.Dakota_32side_324Code.GDNewSprite3Objects3.length = 0;
gdjs.Dakota_32side_324Code.GDNewSprite3Objects4.length = 0;

gdjs.Dakota_32side_324Code.eventsList3(runtimeScene);

return;

}

gdjs['Dakota_32side_324Code'] = gdjs.Dakota_32side_324Code;
