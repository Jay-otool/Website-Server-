gdjs.LAST_32CUTSCENE_32WOOOCode = {};
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects1= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects2= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects3= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects4= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects5= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects1= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects2= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects3= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects4= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects5= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects1= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects2= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects3= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects4= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects5= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects1= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects2= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects3= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects4= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects5= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects1= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects2= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects3= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects4= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects5= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects1= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects2= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects3= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects4= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects5= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects1= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects2= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects3= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects4= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects5= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects1= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects2= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects3= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects4= [];
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects5= [];


gdjs.LAST_32CUTSCENE_32WOOOCode.asyncCallback13512252 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dakota side lol", false);
}}
gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LAST_32CUTSCENE_32WOOOCode.asyncCallback13512252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LAST_32CUTSCENE_32WOOOCode.asyncCallback10157196 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects4);

gdjs.copyArray(asyncObjectsList.getObjects("NewText3"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects4);

{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects4.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects4[i].hide();
}
}{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects4.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects4[i].hide(false);
}
}
{ //Subevents
gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects3) asyncObjectsList.addObject("NewText2", obj);
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LAST_32CUTSCENE_32WOOOCode.asyncCallback10157196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LAST_32CUTSCENE_32WOOOCode.asyncCallback13890060 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects3);

{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects3.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects3[i].hide(false);
}
}
{ //Subevents
gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LAST_32CUTSCENE_32WOOOCode.asyncCallback13890060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LAST_32CUTSCENE_32WOOOCode.asyncCallback14278988 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects2);

gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects2);
{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects2.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationName("yappeineg");
}
}{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
for (const obj of gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
for (const obj of gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects1) asyncObjectsList.addObject("NewText3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LAST_32CUTSCENE_32WOOOCode.asyncCallback14278988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects1[i].hide();
}
}
{ //Subevents
gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.LAST_32CUTSCENE_32WOOOCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects1.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects2.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects3.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects4.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSpriteObjects5.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects1.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects2.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects3.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects4.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite2Objects5.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects1.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects2.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects3.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects4.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite3Objects5.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects1.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects2.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects3.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects4.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewSprite4Objects5.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects1.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects2.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects3.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects4.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewTextObjects5.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects1.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects2.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects3.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects4.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText2Objects5.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects1.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects2.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects3.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects4.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText3Objects5.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects1.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects2.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects3.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects4.length = 0;
gdjs.LAST_32CUTSCENE_32WOOOCode.GDNewText4Objects5.length = 0;

gdjs.LAST_32CUTSCENE_32WOOOCode.eventsList4(runtimeScene);

return;

}

gdjs['LAST_32CUTSCENE_32WOOOCode'] = gdjs.LAST_32CUTSCENE_32WOOOCode;
