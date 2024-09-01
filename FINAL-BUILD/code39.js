gdjs.City_32finalCode = {};
gdjs.City_32finalCode.GDNewSpriteObjects1= [];
gdjs.City_32finalCode.GDNewSpriteObjects2= [];
gdjs.City_32finalCode.GDNewSpriteObjects3= [];
gdjs.City_32finalCode.GDNewSprite2Objects1= [];
gdjs.City_32finalCode.GDNewSprite2Objects2= [];
gdjs.City_32finalCode.GDNewSprite2Objects3= [];
gdjs.City_32finalCode.GDNewSprite3Objects1= [];
gdjs.City_32finalCode.GDNewSprite3Objects2= [];
gdjs.City_32finalCode.GDNewSprite3Objects3= [];
gdjs.City_32finalCode.GDNewTiledSpriteObjects1= [];
gdjs.City_32finalCode.GDNewTiledSpriteObjects2= [];
gdjs.City_32finalCode.GDNewTiledSpriteObjects3= [];
gdjs.City_32finalCode.GDNewTiledSprite2Objects1= [];
gdjs.City_32finalCode.GDNewTiledSprite2Objects2= [];
gdjs.City_32finalCode.GDNewTiledSprite2Objects3= [];
gdjs.City_32finalCode.GDNewTiledSprite3Objects1= [];
gdjs.City_32finalCode.GDNewTiledSprite3Objects2= [];
gdjs.City_32finalCode.GDNewTiledSprite3Objects3= [];


gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.City_32finalCode.GDNewSprite2Objects1});
gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.City_32finalCode.GDNewTiledSpriteObjects1});
gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.City_32finalCode.GDNewSprite3Objects1});
gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.City_32finalCode.GDNewTiledSprite2Objects1});
gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.City_32finalCode.GDNewSprite3Objects1});
gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewTiledSprite3Objects1Objects = Hashtable.newFrom({"NewTiledSprite3": gdjs.City_32finalCode.GDNewTiledSprite3Objects1});
gdjs.City_32finalCode.asyncCallback13940476 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ZE ENDD!!!", false);
}}
gdjs.City_32finalCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.45), (runtimeScene) => (gdjs.City_32finalCode.asyncCallback13940476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.City_32finalCode.asyncCallback13707772 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.City_32finalCode.GDNewSprite3Objects2);

{for(var i = 0, len = gdjs.City_32finalCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.City_32finalCode.GDNewSprite3Objects2[i].getBehavior("Animation").setAnimationName("explode");
}
}
{ //Subevents
gdjs.City_32finalCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.City_32finalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.City_32finalCode.GDNewSprite3Objects1) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.City_32finalCode.asyncCallback13707772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.City_32finalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.City_32finalCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.City_32finalCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.City_32finalCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("driving");
}
}{for(var i = 0, len = gdjs.City_32finalCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.City_32finalCode.GDNewSprite2Objects1[i].addForce(-(80), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.City_32finalCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.City_32finalCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewSprite2Objects1Objects, gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.City_32finalCode.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_32finalCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.City_32finalCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.City_32finalCode.GDNewSprite2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.City_32finalCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_32finalCode.GDNewSprite3Objects1[i].addForce(-(80), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_32finalCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.City_32finalCode.GDNewTiledSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewSprite3Objects1Objects, gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewTiledSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.City_32finalCode.GDNewSprite3Objects1 */
/* Reuse gdjs.City_32finalCode.GDNewTiledSprite2Objects1 */
{for(var i = 0, len = gdjs.City_32finalCode.GDNewTiledSprite2Objects1.length ;i < len;++i) {
    gdjs.City_32finalCode.GDNewTiledSprite2Objects1[i].addForce(-(40), 0, 1);
}
}{for(var i = 0, len = gdjs.City_32finalCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_32finalCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("fired");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.City_32finalCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.City_32finalCode.GDNewTiledSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewSprite3Objects1Objects, gdjs.City_32finalCode.mapOfGDgdjs_9546City_959532finalCode_9546GDNewTiledSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.City_32finalCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.City_32finalCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.City_32finalCode.GDNewSprite3Objects1[i].clearForces();
}
}
{ //Subevents
gdjs.City_32finalCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.City_32finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.City_32finalCode.GDNewSpriteObjects1.length = 0;
gdjs.City_32finalCode.GDNewSpriteObjects2.length = 0;
gdjs.City_32finalCode.GDNewSpriteObjects3.length = 0;
gdjs.City_32finalCode.GDNewSprite2Objects1.length = 0;
gdjs.City_32finalCode.GDNewSprite2Objects2.length = 0;
gdjs.City_32finalCode.GDNewSprite2Objects3.length = 0;
gdjs.City_32finalCode.GDNewSprite3Objects1.length = 0;
gdjs.City_32finalCode.GDNewSprite3Objects2.length = 0;
gdjs.City_32finalCode.GDNewSprite3Objects3.length = 0;
gdjs.City_32finalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.City_32finalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.City_32finalCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.City_32finalCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.City_32finalCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.City_32finalCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.City_32finalCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.City_32finalCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.City_32finalCode.GDNewTiledSprite3Objects3.length = 0;

gdjs.City_32finalCode.eventsList2(runtimeScene);

return;

}

gdjs['City_32finalCode'] = gdjs.City_32finalCode;
