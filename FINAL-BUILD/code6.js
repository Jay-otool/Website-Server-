gdjs.StartCode = {};
gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDNewSpriteObjects3= [];
gdjs.StartCode.GDNewSpriteObjects4= [];
gdjs.StartCode.GDNewSprite2Objects1= [];
gdjs.StartCode.GDNewSprite2Objects2= [];
gdjs.StartCode.GDNewSprite2Objects3= [];
gdjs.StartCode.GDNewSprite2Objects4= [];
gdjs.StartCode.GDNewSprite3Objects1= [];
gdjs.StartCode.GDNewSprite3Objects2= [];
gdjs.StartCode.GDNewSprite3Objects3= [];
gdjs.StartCode.GDNewSprite3Objects4= [];
gdjs.StartCode.GDNewSprite4Objects1= [];
gdjs.StartCode.GDNewSprite4Objects2= [];
gdjs.StartCode.GDNewSprite4Objects3= [];
gdjs.StartCode.GDNewSprite4Objects4= [];
gdjs.StartCode.GDNewTextObjects1= [];
gdjs.StartCode.GDNewTextObjects2= [];
gdjs.StartCode.GDNewTextObjects3= [];
gdjs.StartCode.GDNewTextObjects4= [];
gdjs.StartCode.GDNewSprite5Objects1= [];
gdjs.StartCode.GDNewSprite5Objects2= [];
gdjs.StartCode.GDNewSprite5Objects3= [];
gdjs.StartCode.GDNewSprite5Objects4= [];
gdjs.StartCode.GDNewSprite6Objects1= [];
gdjs.StartCode.GDNewSprite6Objects2= [];
gdjs.StartCode.GDNewSprite6Objects3= [];
gdjs.StartCode.GDNewSprite6Objects4= [];
gdjs.StartCode.GDNewText2Objects1= [];
gdjs.StartCode.GDNewText2Objects2= [];
gdjs.StartCode.GDNewText2Objects3= [];
gdjs.StartCode.GDNewText2Objects4= [];
gdjs.StartCode.GDNewSprite7Objects1= [];
gdjs.StartCode.GDNewSprite7Objects2= [];
gdjs.StartCode.GDNewSprite7Objects3= [];
gdjs.StartCode.GDNewSprite7Objects4= [];
gdjs.StartCode.GDNewSprite8Objects1= [];
gdjs.StartCode.GDNewSprite8Objects2= [];
gdjs.StartCode.GDNewSprite8Objects3= [];
gdjs.StartCode.GDNewSprite8Objects4= [];
gdjs.StartCode.GDNewTiledSpriteObjects1= [];
gdjs.StartCode.GDNewTiledSpriteObjects2= [];
gdjs.StartCode.GDNewTiledSpriteObjects3= [];
gdjs.StartCode.GDNewTiledSpriteObjects4= [];


gdjs.StartCode.asyncCallback13539708 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.StartCode.GDNewSprite2Objects4);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.StartCode.GDNewSprite3Objects4);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite6"), gdjs.StartCode.GDNewSprite6Objects4);

gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.StartCode.GDNewText2Objects4);

{for(var i = 0, len = gdjs.StartCode.GDNewSprite3Objects4.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite3Objects4[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite6Objects4.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite6Objects4[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewText2Objects4.length ;i < len;++i) {
    gdjs.StartCode.GDNewText2Objects4[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite2Objects4.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite2Objects4[i].addForce(80, 0, 1);
}
}}
gdjs.StartCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.StartCode.GDNewSprite3Objects3) asyncObjectsList.addObject("NewSprite3", obj);
for (const obj of gdjs.StartCode.GDNewSprite6Objects3) asyncObjectsList.addObject("NewSprite6", obj);
for (const obj of gdjs.StartCode.GDNewText2Objects3) asyncObjectsList.addObject("NewText2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.StartCode.asyncCallback13539708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.asyncCallback13538524 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.StartCode.GDNewSprite3Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.StartCode.GDNewSprite4Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite6"), gdjs.StartCode.GDNewSprite6Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.StartCode.GDNewTextObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.StartCode.GDNewText2Objects3);

{for(var i = 0, len = gdjs.StartCode.GDNewSprite4Objects3.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite4Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDNewTextObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite3Objects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite6Objects3.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite6Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDNewText2Objects3.length ;i < len;++i) {
    gdjs.StartCode.GDNewText2Objects3[i].hide(false);
}
}
{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.StartCode.GDNewSprite3Objects2) asyncObjectsList.addObject("NewSprite3", obj);
for (const obj of gdjs.StartCode.GDNewSprite4Objects2) asyncObjectsList.addObject("NewSprite4", obj);
/* Don't save NewSprite6 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.StartCode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.StartCode.asyncCallback13538524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.asyncCallback13537836 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.StartCode.GDNewSprite3Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.StartCode.GDNewSprite4Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite7"), gdjs.StartCode.GDNewSprite7Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.StartCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.StartCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite7Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewTextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite3Objects2[i].getBehavior("Animation").setAnimationName("Yap");
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite4Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.StartCode.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
for (const obj of gdjs.StartCode.GDNewSprite3Objects1) asyncObjectsList.addObject("NewSprite3", obj);
for (const obj of gdjs.StartCode.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
for (const obj of gdjs.StartCode.GDNewSprite6Objects1) asyncObjectsList.addObject("NewSprite6", obj);
for (const obj of gdjs.StartCode.GDNewSprite7Objects1) asyncObjectsList.addObject("NewSprite7", obj);
for (const obj of gdjs.StartCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.StartCode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.StartCode.asyncCallback13537836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.StartCode.GDNewSprite2Objects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.StartCode.GDNewSprite8Objects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.StartCode.GDNewSprite2Objects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.StartCode.GDNewTiledSpriteObjects1});
gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StartCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.StartCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.StartCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.StartCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.StartCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.StartCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StartCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StartCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite2Objects1[i].addForce(-(80), 0, 1);
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite7Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewTextObjects1[i].hide();
}
}
{ //Subevents
gdjs.StartCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StartCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.StartCode.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite8Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tutorial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StartCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.StartCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.StartCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite2Objects1[i].clearForces();
}
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects3.length = 0;
gdjs.StartCode.GDNewSpriteObjects4.length = 0;
gdjs.StartCode.GDNewSprite2Objects1.length = 0;
gdjs.StartCode.GDNewSprite2Objects2.length = 0;
gdjs.StartCode.GDNewSprite2Objects3.length = 0;
gdjs.StartCode.GDNewSprite2Objects4.length = 0;
gdjs.StartCode.GDNewSprite3Objects1.length = 0;
gdjs.StartCode.GDNewSprite3Objects2.length = 0;
gdjs.StartCode.GDNewSprite3Objects3.length = 0;
gdjs.StartCode.GDNewSprite3Objects4.length = 0;
gdjs.StartCode.GDNewSprite4Objects1.length = 0;
gdjs.StartCode.GDNewSprite4Objects2.length = 0;
gdjs.StartCode.GDNewSprite4Objects3.length = 0;
gdjs.StartCode.GDNewSprite4Objects4.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDNewTextObjects3.length = 0;
gdjs.StartCode.GDNewTextObjects4.length = 0;
gdjs.StartCode.GDNewSprite5Objects1.length = 0;
gdjs.StartCode.GDNewSprite5Objects2.length = 0;
gdjs.StartCode.GDNewSprite5Objects3.length = 0;
gdjs.StartCode.GDNewSprite5Objects4.length = 0;
gdjs.StartCode.GDNewSprite6Objects1.length = 0;
gdjs.StartCode.GDNewSprite6Objects2.length = 0;
gdjs.StartCode.GDNewSprite6Objects3.length = 0;
gdjs.StartCode.GDNewSprite6Objects4.length = 0;
gdjs.StartCode.GDNewText2Objects1.length = 0;
gdjs.StartCode.GDNewText2Objects2.length = 0;
gdjs.StartCode.GDNewText2Objects3.length = 0;
gdjs.StartCode.GDNewText2Objects4.length = 0;
gdjs.StartCode.GDNewSprite7Objects1.length = 0;
gdjs.StartCode.GDNewSprite7Objects2.length = 0;
gdjs.StartCode.GDNewSprite7Objects3.length = 0;
gdjs.StartCode.GDNewSprite7Objects4.length = 0;
gdjs.StartCode.GDNewSprite8Objects1.length = 0;
gdjs.StartCode.GDNewSprite8Objects2.length = 0;
gdjs.StartCode.GDNewSprite8Objects3.length = 0;
gdjs.StartCode.GDNewSprite8Objects4.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects4.length = 0;

gdjs.StartCode.eventsList3(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
