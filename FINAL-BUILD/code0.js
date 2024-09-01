gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects5= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects5= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects4= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects5= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects4= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects5= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects3= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects4= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects5= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects4= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects5= [];


gdjs.Untitled_32sceneCode.asyncCallback13450756 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cops", false);
}}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback13450756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback13450900 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects4);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText2Objects4[i].hide(false);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback13450900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback13449932 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects3[i].hide();
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Untitled_32sceneCode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback13449932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback13450564 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback13450564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "thump-105302.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].hide();
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite3Objects5.length = 0;

gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
