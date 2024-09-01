gdjs.GarbageCode = {};
gdjs.GarbageCode.GDNewSpriteObjects1= [];
gdjs.GarbageCode.GDNewSpriteObjects2= [];
gdjs.GarbageCode.GDNewSpriteObjects3= [];
gdjs.GarbageCode.GDNewSpriteObjects4= [];
gdjs.GarbageCode.GDNewSpriteObjects5= [];
gdjs.GarbageCode.GDNewTiledSpriteObjects1= [];
gdjs.GarbageCode.GDNewTiledSpriteObjects2= [];
gdjs.GarbageCode.GDNewTiledSpriteObjects3= [];
gdjs.GarbageCode.GDNewTiledSpriteObjects4= [];
gdjs.GarbageCode.GDNewTiledSpriteObjects5= [];
gdjs.GarbageCode.GDNewSprite2Objects1= [];
gdjs.GarbageCode.GDNewSprite2Objects2= [];
gdjs.GarbageCode.GDNewSprite2Objects3= [];
gdjs.GarbageCode.GDNewSprite2Objects4= [];
gdjs.GarbageCode.GDNewSprite2Objects5= [];
gdjs.GarbageCode.GDNewTextObjects1= [];
gdjs.GarbageCode.GDNewTextObjects2= [];
gdjs.GarbageCode.GDNewTextObjects3= [];
gdjs.GarbageCode.GDNewTextObjects4= [];
gdjs.GarbageCode.GDNewTextObjects5= [];
gdjs.GarbageCode.GDNewText2Objects1= [];
gdjs.GarbageCode.GDNewText2Objects2= [];
gdjs.GarbageCode.GDNewText2Objects3= [];
gdjs.GarbageCode.GDNewText2Objects4= [];
gdjs.GarbageCode.GDNewText2Objects5= [];


gdjs.GarbageCode.asyncCallback8728140 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LOAADDIING", false);
}}
gdjs.GarbageCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GarbageCode.asyncCallback8728140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GarbageCode.asyncCallback14279084 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.GarbageCode.GDNewText2Objects4);

{for(var i = 0, len = gdjs.GarbageCode.GDNewText2Objects4.length ;i < len;++i) {
    gdjs.GarbageCode.GDNewText2Objects4[i].hide(false);
}
}
{ //Subevents
gdjs.GarbageCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.GarbageCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GarbageCode.asyncCallback14279084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GarbageCode.asyncCallback14278916 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GarbageCode.GDNewTextObjects3);

{for(var i = 0, len = gdjs.GarbageCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.GarbageCode.GDNewTextObjects3[i].hide();
}
}
{ //Subevents
gdjs.GarbageCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.GarbageCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.GarbageCode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GarbageCode.asyncCallback14278916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GarbageCode.asyncCallback14278612 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GarbageCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.GarbageCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.GarbageCode.GDNewTextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.GarbageCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.GarbageCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.GarbageCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.GarbageCode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GarbageCode.asyncCallback14278612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GarbageCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.GarbageCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.GarbageCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.GarbageCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.GarbageCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GarbageCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.GarbageCode.GDNewText2Objects1[i].hide();
}
}
{ //Subevents
gdjs.GarbageCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.GarbageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GarbageCode.GDNewSpriteObjects1.length = 0;
gdjs.GarbageCode.GDNewSpriteObjects2.length = 0;
gdjs.GarbageCode.GDNewSpriteObjects3.length = 0;
gdjs.GarbageCode.GDNewSpriteObjects4.length = 0;
gdjs.GarbageCode.GDNewSpriteObjects5.length = 0;
gdjs.GarbageCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GarbageCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GarbageCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GarbageCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.GarbageCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.GarbageCode.GDNewSprite2Objects1.length = 0;
gdjs.GarbageCode.GDNewSprite2Objects2.length = 0;
gdjs.GarbageCode.GDNewSprite2Objects3.length = 0;
gdjs.GarbageCode.GDNewSprite2Objects4.length = 0;
gdjs.GarbageCode.GDNewSprite2Objects5.length = 0;
gdjs.GarbageCode.GDNewTextObjects1.length = 0;
gdjs.GarbageCode.GDNewTextObjects2.length = 0;
gdjs.GarbageCode.GDNewTextObjects3.length = 0;
gdjs.GarbageCode.GDNewTextObjects4.length = 0;
gdjs.GarbageCode.GDNewTextObjects5.length = 0;
gdjs.GarbageCode.GDNewText2Objects1.length = 0;
gdjs.GarbageCode.GDNewText2Objects2.length = 0;
gdjs.GarbageCode.GDNewText2Objects3.length = 0;
gdjs.GarbageCode.GDNewText2Objects4.length = 0;
gdjs.GarbageCode.GDNewText2Objects5.length = 0;

gdjs.GarbageCode.eventsList4(runtimeScene);

return;

}

gdjs['GarbageCode'] = gdjs.GarbageCode;
