gdjs.Mansion_32indoor_321Code = {};
gdjs.Mansion_32indoor_321Code.GDNewSpriteObjects1= [];
gdjs.Mansion_32indoor_321Code.GDNewSpriteObjects2= [];
gdjs.Mansion_32indoor_321Code.GDNewSpriteObjects3= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects1= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects2= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects3= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects1= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects2= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects3= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite4Objects1= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite4Objects2= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite4Objects3= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite5Objects1= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite5Objects2= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite5Objects3= [];
gdjs.Mansion_32indoor_321Code.GDNewTiledSpriteObjects1= [];
gdjs.Mansion_32indoor_321Code.GDNewTiledSpriteObjects2= [];
gdjs.Mansion_32indoor_321Code.GDNewTiledSpriteObjects3= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects2= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects3= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite7Objects1= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite7Objects2= [];
gdjs.Mansion_32indoor_321Code.GDNewSprite7Objects3= [];


gdjs.Mansion_32indoor_321Code.asyncCallback13995036 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects3);

{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects3.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects3[i].addForce(-(80), 0, 1);
}
}}
gdjs.Mansion_32indoor_321Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects2) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Mansion_32indoor_321Code.asyncCallback13995036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mansion_32indoor_321Code.asyncCallback13994964 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects2);

{gdjs.evtTools.sound.playMusic(runtimeScene, "barrel-exploding-soundbible.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.Mansion_32indoor_321Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Mansion_32indoor_321Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects1) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Mansion_32indoor_321Code.asyncCallback13994964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1});
gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Mansion_32indoor_321Code.GDNewTiledSpriteObjects1});
gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1});
gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Mansion_32indoor_321Code.GDNewSprite4Objects1});
gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1});
gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects1});
gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects1});
gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Mansion_32indoor_321Code.GDNewSprite5Objects1});
gdjs.Mansion_32indoor_321Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13994292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("walkright");
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1[i].addForce(30, 0, 1);
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects1[i].hide();
}
}
{ //Subevents
gdjs.Mansion_32indoor_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Mansion_32indoor_321Code.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite6Objects1Objects, gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("walkleft");
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1[i].addForce(-(30), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Mansion_32indoor_321Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite6Objects1Objects, gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("walkright");
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1[i].addForce(30, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite6Objects1Objects, gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Mansion_32indoor_321Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite2Objects1Objects, gdjs.Mansion_32indoor_321Code.mapOfGDgdjs_9546Mansion_959532indoor_9595321Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mansion indoor 2", false);
}}

}


};

gdjs.Mansion_32indoor_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mansion_32indoor_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSpriteObjects3.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects1.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects2.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite2Objects3.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects1.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects2.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite3Objects3.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite4Objects1.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite4Objects2.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite4Objects3.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite5Objects1.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite5Objects2.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite5Objects3.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects1.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects2.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite6Objects3.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite7Objects1.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite7Objects2.length = 0;
gdjs.Mansion_32indoor_321Code.GDNewSprite7Objects3.length = 0;

gdjs.Mansion_32indoor_321Code.eventsList2(runtimeScene);

return;

}

gdjs['Mansion_32indoor_321Code'] = gdjs.Mansion_32indoor_321Code;
