gdjs.SecurityCode = {};
gdjs.SecurityCode.GDNewSpriteObjects1= [];
gdjs.SecurityCode.GDNewSpriteObjects2= [];
gdjs.SecurityCode.GDNewSprite2Objects1= [];
gdjs.SecurityCode.GDNewSprite2Objects2= [];
gdjs.SecurityCode.GDNewSprite3Objects1= [];
gdjs.SecurityCode.GDNewSprite3Objects2= [];
gdjs.SecurityCode.GDNewSprite4Objects1= [];
gdjs.SecurityCode.GDNewSprite4Objects2= [];
gdjs.SecurityCode.GDNewTiledSpriteObjects1= [];
gdjs.SecurityCode.GDNewTiledSpriteObjects2= [];
gdjs.SecurityCode.GDNewTextObjects1= [];
gdjs.SecurityCode.GDNewTextObjects2= [];
gdjs.SecurityCode.GDNewSprite5Objects1= [];
gdjs.SecurityCode.GDNewSprite5Objects2= [];


gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.SecurityCode.GDNewSprite2Objects1});
gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.SecurityCode.GDNewTiledSpriteObjects1});
gdjs.SecurityCode.asyncCallback14224900 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.SecurityCode.GDNewSprite2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.SecurityCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.SecurityCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewSprite2Objects2[i].addForce(-(1000), 0, 1);
}
}{for(var i = 0, len = gdjs.SecurityCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.SecurityCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationName("Driving");
}
}}
gdjs.SecurityCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SecurityCode.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
for (const obj of gdjs.SecurityCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.08), (runtimeScene) => (gdjs.SecurityCode.asyncCallback14224900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.SecurityCode.GDNewSprite2Objects1});
gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.SecurityCode.GDNewSprite3Objects1});
gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.SecurityCode.GDNewSprite2Objects1});
gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.SecurityCode.GDNewSprite5Objects1});
gdjs.SecurityCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SecurityCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.SecurityCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SecurityCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.SecurityCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewSprite2Objects1[i].addForce(-(80), 0, 1);
}
}{for(var i = 0, len = gdjs.SecurityCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("still");
}
}{for(var i = 0, len = gdjs.SecurityCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Driving");
}
}{for(var i = 0, len = gdjs.SecurityCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SecurityCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.SecurityCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite2Objects1Objects, gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SecurityCode.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SecurityCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.SecurityCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewSprite2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.SecurityCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}{for(var i = 0, len = gdjs.SecurityCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.SecurityCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SecurityCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.SecurityCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite2Objects1Objects, gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SecurityCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.SecurityCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.SecurityCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Deatheddddddddd");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SecurityCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.SecurityCode.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite2Objects1Objects, gdjs.SecurityCode.mapOfGDgdjs_9546SecurityCode_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Trash pile", false);
}}

}


};

gdjs.SecurityCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SecurityCode.GDNewSpriteObjects1.length = 0;
gdjs.SecurityCode.GDNewSpriteObjects2.length = 0;
gdjs.SecurityCode.GDNewSprite2Objects1.length = 0;
gdjs.SecurityCode.GDNewSprite2Objects2.length = 0;
gdjs.SecurityCode.GDNewSprite3Objects1.length = 0;
gdjs.SecurityCode.GDNewSprite3Objects2.length = 0;
gdjs.SecurityCode.GDNewSprite4Objects1.length = 0;
gdjs.SecurityCode.GDNewSprite4Objects2.length = 0;
gdjs.SecurityCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SecurityCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SecurityCode.GDNewTextObjects1.length = 0;
gdjs.SecurityCode.GDNewTextObjects2.length = 0;
gdjs.SecurityCode.GDNewSprite5Objects1.length = 0;
gdjs.SecurityCode.GDNewSprite5Objects2.length = 0;

gdjs.SecurityCode.eventsList1(runtimeScene);

return;

}

gdjs['SecurityCode'] = gdjs.SecurityCode;
