gdjs.Mansion_32indoor_323Code = {};
gdjs.Mansion_32indoor_323Code.GDNewSpriteObjects1= [];
gdjs.Mansion_32indoor_323Code.GDNewSpriteObjects2= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects2= [];
gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects1= [];
gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects2= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects2= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects2= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects2= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite6Objects1= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite6Objects2= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects2= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite8Objects1= [];
gdjs.Mansion_32indoor_323Code.GDNewSprite8Objects2= [];


gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1});
gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects1});
gdjs.Mansion_32indoor_323Code.asyncCallback14053356 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite5"), gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects2);

{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects2[i].hide();
}
}}
gdjs.Mansion_32indoor_323Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1) asyncObjectsList.addObject("NewSprite5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Mansion_32indoor_323Code.asyncCallback14053356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mansion_32indoor_323Code.asyncCallback14058068 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects2);

{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects2[i].getBehavior("Animation").setAnimationName("idleleft");
}
}}
gdjs.Mansion_32indoor_323Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Mansion_32indoor_323Code.asyncCallback14058068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1});
gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1});
gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1});
gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1});
gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects1});
gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects1});
gdjs.Mansion_32indoor_323Code.asyncCallback14061148 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects2);

{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects2[i].addForce(-(80), 0, 1);
}
}}
gdjs.Mansion_32indoor_323Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Mansion_32indoor_323Code.asyncCallback14061148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1});
gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Mansion_32indoor_323Code.GDNewSprite6Objects1});
gdjs.Mansion_32indoor_323Code.asyncCallback14063068 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite7"), gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects2);

{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects2[i].hide();
}
}}
gdjs.Mansion_32indoor_323Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1) asyncObjectsList.addObject("NewSprite7", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Mansion_32indoor_323Code.asyncCallback14063068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1});
gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.Mansion_32indoor_323Code.GDNewSprite8Objects1});
gdjs.Mansion_32indoor_323Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1[i].addForce(-(80), 0, 1);
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite2Objects1Objects, gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14053084);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "gta_3_notification.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Mansion_32indoor_323Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("walkleft");
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("idleright");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("walkright");
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].addForce(30, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("idleleft");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14057996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("shoot");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Voicy_Tank Firing.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Mansion_32indoor_323Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite4Objects1Objects, gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1 */
/* Reuse gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].separateFromObjectsList(gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite3Objects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite4Objects1Objects, gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1 */
/* Reuse gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects1 */
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].separateFromObjectsList(gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewTiledSpriteObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("idleleft");
}
}
{ //Subevents
gdjs.Mansion_32indoor_323Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_323Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite2Objects1Objects, gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14061580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "barrel-exploding-soundbible.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Mansion_32indoor_323Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.Mansion_32indoor_323Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite2Objects1Objects, gdjs.Mansion_32indoor_323Code.mapOfGDgdjs_9546Mansion_959532indoor_9595323Code_9546GDNewSprite8Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chopper", false);
}}

}


};

gdjs.Mansion_32indoor_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mansion_32indoor_323Code.GDNewSpriteObjects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSpriteObjects2.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite2Objects2.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite3Objects2.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite4Objects2.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite5Objects2.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite6Objects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite6Objects2.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite7Objects2.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite8Objects1.length = 0;
gdjs.Mansion_32indoor_323Code.GDNewSprite8Objects2.length = 0;

gdjs.Mansion_32indoor_323Code.eventsList4(runtimeScene);

return;

}

gdjs['Mansion_32indoor_323Code'] = gdjs.Mansion_32indoor_323Code;
