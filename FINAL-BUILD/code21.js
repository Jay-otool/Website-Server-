gdjs.Dakota_32side_323Code = {};
gdjs.Dakota_32side_323Code.GDNewSpriteObjects1= [];
gdjs.Dakota_32side_323Code.GDNewSpriteObjects2= [];
gdjs.Dakota_32side_323Code.GDNewSpriteObjects3= [];
gdjs.Dakota_32side_323Code.GDNewSprite2Objects1= [];
gdjs.Dakota_32side_323Code.GDNewSprite2Objects2= [];
gdjs.Dakota_32side_323Code.GDNewSprite2Objects3= [];
gdjs.Dakota_32side_323Code.GDNewSprite3Objects1= [];
gdjs.Dakota_32side_323Code.GDNewSprite3Objects2= [];
gdjs.Dakota_32side_323Code.GDNewSprite3Objects3= [];
gdjs.Dakota_32side_323Code.GDNewSprite4Objects1= [];
gdjs.Dakota_32side_323Code.GDNewSprite4Objects2= [];
gdjs.Dakota_32side_323Code.GDNewSprite4Objects3= [];


gdjs.Dakota_32side_323Code.asyncCallback13928516 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Dakota_32side_323Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.Dakota_32side_323Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Dakota_32side_323Code.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationName("idle");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Voicy_Tank Firing.mp3", false, 100, 1);
}}
gdjs.Dakota_32side_323Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Dakota_32side_323Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Dakota_32side_323Code.asyncCallback13928516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32side_323Code.mapOfGDgdjs_9546Dakota_959532side_9595323Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dakota_32side_323Code.GDNewSprite2Objects1});
gdjs.Dakota_32side_323Code.mapOfGDgdjs_9546Dakota_959532side_9595323Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Dakota_32side_323Code.GDNewSprite3Objects1});
gdjs.Dakota_32side_323Code.asyncCallback13886188 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.Dakota_32side_323Code.GDNewSprite4Objects3);

{for(var i = 0, len = gdjs.Dakota_32side_323Code.GDNewSprite4Objects3.length ;i < len;++i) {
    gdjs.Dakota_32side_323Code.GDNewSprite4Objects3[i].hide();
}
}}
gdjs.Dakota_32side_323Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Dakota_32side_323Code.GDNewSprite4Objects2) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Dakota_32side_323Code.asyncCallback13886188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32side_323Code.asyncCallback13888252 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.Dakota_32side_323Code.GDNewSprite4Objects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "news broadcaster guy.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Dakota_32side_323Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.Dakota_32side_323Code.GDNewSprite4Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.Dakota_32side_323Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Dakota_32side_323Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Dakota_32side_323Code.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Dakota_32side_323Code.asyncCallback13888252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dakota_32side_323Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_323Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_323Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_323Code.GDNewSprite2Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13927972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_323Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_323Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_323Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("shoot");
}
}
{ //Subevents
gdjs.Dakota_32side_323Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_323Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_323Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_323Code.GDNewSprite2Objects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dakota_32side_323Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dakota_32side_323Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dakota_32side_323Code.mapOfGDgdjs_9546Dakota_959532side_9595323Code_9546GDNewSprite2Objects1Objects, gdjs.Dakota_32side_323Code.mapOfGDgdjs_9546Dakota_959532side_9595323Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Town4", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Dakota_32side_323Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Dakota_32side_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Dakota_32side_323Code.GDNewSprite4Objects1[i].hide();
}
}
{ //Subevents
gdjs.Dakota_32side_323Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Dakota_32side_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dakota_32side_323Code.GDNewSpriteObjects1.length = 0;
gdjs.Dakota_32side_323Code.GDNewSpriteObjects2.length = 0;
gdjs.Dakota_32side_323Code.GDNewSpriteObjects3.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite2Objects1.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite2Objects2.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite2Objects3.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite3Objects1.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite3Objects2.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite3Objects3.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite4Objects1.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite4Objects2.length = 0;
gdjs.Dakota_32side_323Code.GDNewSprite4Objects3.length = 0;

gdjs.Dakota_32side_323Code.eventsList3(runtimeScene);

return;

}

gdjs['Dakota_32side_323Code'] = gdjs.Dakota_32side_323Code;
