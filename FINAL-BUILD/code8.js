gdjs.Cutscene_321Code = {};
gdjs.Cutscene_321Code.GDNewSpriteObjects1= [];
gdjs.Cutscene_321Code.GDNewSpriteObjects2= [];
gdjs.Cutscene_321Code.GDNewSpriteObjects3= [];
gdjs.Cutscene_321Code.GDNewSpriteObjects4= [];
gdjs.Cutscene_321Code.GDNewSprite2Objects1= [];
gdjs.Cutscene_321Code.GDNewSprite2Objects2= [];
gdjs.Cutscene_321Code.GDNewSprite2Objects3= [];
gdjs.Cutscene_321Code.GDNewSprite2Objects4= [];
gdjs.Cutscene_321Code.GDNewSprite3Objects1= [];
gdjs.Cutscene_321Code.GDNewSprite3Objects2= [];
gdjs.Cutscene_321Code.GDNewSprite3Objects3= [];
gdjs.Cutscene_321Code.GDNewSprite3Objects4= [];
gdjs.Cutscene_321Code.GDNewSprite4Objects1= [];
gdjs.Cutscene_321Code.GDNewSprite4Objects2= [];
gdjs.Cutscene_321Code.GDNewSprite4Objects3= [];
gdjs.Cutscene_321Code.GDNewSprite4Objects4= [];
gdjs.Cutscene_321Code.GDNewTextObjects1= [];
gdjs.Cutscene_321Code.GDNewTextObjects2= [];
gdjs.Cutscene_321Code.GDNewTextObjects3= [];
gdjs.Cutscene_321Code.GDNewTextObjects4= [];
gdjs.Cutscene_321Code.GDNewText2Objects1= [];
gdjs.Cutscene_321Code.GDNewText2Objects2= [];
gdjs.Cutscene_321Code.GDNewText2Objects3= [];
gdjs.Cutscene_321Code.GDNewText2Objects4= [];
gdjs.Cutscene_321Code.GDNewSprite5Objects1= [];
gdjs.Cutscene_321Code.GDNewSprite5Objects2= [];
gdjs.Cutscene_321Code.GDNewSprite5Objects3= [];
gdjs.Cutscene_321Code.GDNewSprite5Objects4= [];
gdjs.Cutscene_321Code.GDNewText3Objects1= [];
gdjs.Cutscene_321Code.GDNewText3Objects2= [];
gdjs.Cutscene_321Code.GDNewText3Objects3= [];
gdjs.Cutscene_321Code.GDNewText3Objects4= [];
gdjs.Cutscene_321Code.GDNewSprite6Objects1= [];
gdjs.Cutscene_321Code.GDNewSprite6Objects2= [];
gdjs.Cutscene_321Code.GDNewSprite6Objects3= [];
gdjs.Cutscene_321Code.GDNewSprite6Objects4= [];
gdjs.Cutscene_321Code.GDNewText4Objects1= [];
gdjs.Cutscene_321Code.GDNewText4Objects2= [];
gdjs.Cutscene_321Code.GDNewText4Objects3= [];
gdjs.Cutscene_321Code.GDNewText4Objects4= [];


gdjs.Cutscene_321Code.asyncCallback13598492 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite5"), gdjs.Cutscene_321Code.GDNewSprite5Objects4);

gdjs.copyArray(asyncObjectsList.getObjects("NewText3"), gdjs.Cutscene_321Code.GDNewText3Objects4);

{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewSprite5Objects4.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewSprite5Objects4[i].hide();
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText3Objects4.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText3Objects4[i].hide();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dakota Side 1", false);
}}
gdjs.Cutscene_321Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Cutscene_321Code.GDNewSprite5Objects3) asyncObjectsList.addObject("NewSprite5", obj);
for (const obj of gdjs.Cutscene_321Code.GDNewText3Objects3) asyncObjectsList.addObject("NewText3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Cutscene_321Code.asyncCallback13598492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cutscene_321Code.asyncCallback13597692 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Cutscene_321Code.GDNewSprite2Objects3);

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Cutscene_321Code.GDNewSprite4Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite5"), gdjs.Cutscene_321Code.GDNewSprite5Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.Cutscene_321Code.GDNewText2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("NewText3"), gdjs.Cutscene_321Code.GDNewText3Objects3);

{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText2Objects3.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText2Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewSprite4Objects3.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewSprite4Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewSprite2Objects3.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewSprite2Objects3[i].getBehavior("Animation").setAnimationName("idol");
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewSprite5Objects3.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewSprite5Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText3Objects3.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText3Objects3[i].hide(false);
}
}
{ //Subevents
gdjs.Cutscene_321Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Cutscene_321Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewSprite5 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.Cutscene_321Code.GDNewText2Objects2) asyncObjectsList.addObject("NewText2", obj);
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Cutscene_321Code.asyncCallback13597692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cutscene_321Code.asyncCallback13597052 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene_321Code.GDNewTextObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.Cutscene_321Code.GDNewText2Objects2);

{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText2Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.Cutscene_321Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Cutscene_321Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Cutscene_321Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
for (const obj of gdjs.Cutscene_321Code.GDNewSprite5Objects1) asyncObjectsList.addObject("NewSprite5", obj);
for (const obj of gdjs.Cutscene_321Code.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
for (const obj of gdjs.Cutscene_321Code.GDNewText3Objects1) asyncObjectsList.addObject("NewText3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Cutscene_321Code.asyncCallback13597052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cutscene_321Code.asyncCallback13599628 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText4"), gdjs.Cutscene_321Code.GDNewText4Objects3);

{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText4Objects3.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText4Objects3[i].hide();
}
}}
gdjs.Cutscene_321Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Cutscene_321Code.GDNewText4Objects2) asyncObjectsList.addObject("NewText4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Cutscene_321Code.asyncCallback13599628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cutscene_321Code.asyncCallback13599532 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText4"), gdjs.Cutscene_321Code.GDNewText4Objects2);

{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText4Objects2.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText4Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.Cutscene_321Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Cutscene_321Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Cutscene_321Code.GDNewText4Objects1) asyncObjectsList.addObject("NewText4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Cutscene_321Code.asyncCallback13599532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cutscene_321Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Cutscene_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Cutscene_321Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Cutscene_321Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Cutscene_321Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewSprite5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("yap");
}
}{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText2Objects1[i].hide();
}
}
{ //Subevents
gdjs.Cutscene_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.Cutscene_321Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewText4Objects1[i].hide();
}
}
{ //Subevents
gdjs.Cutscene_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Cutscene_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Cutscene_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Cutscene_321Code.GDNewSpriteObjects3.length = 0;
gdjs.Cutscene_321Code.GDNewSpriteObjects4.length = 0;
gdjs.Cutscene_321Code.GDNewSprite2Objects1.length = 0;
gdjs.Cutscene_321Code.GDNewSprite2Objects2.length = 0;
gdjs.Cutscene_321Code.GDNewSprite2Objects3.length = 0;
gdjs.Cutscene_321Code.GDNewSprite2Objects4.length = 0;
gdjs.Cutscene_321Code.GDNewSprite3Objects1.length = 0;
gdjs.Cutscene_321Code.GDNewSprite3Objects2.length = 0;
gdjs.Cutscene_321Code.GDNewSprite3Objects3.length = 0;
gdjs.Cutscene_321Code.GDNewSprite3Objects4.length = 0;
gdjs.Cutscene_321Code.GDNewSprite4Objects1.length = 0;
gdjs.Cutscene_321Code.GDNewSprite4Objects2.length = 0;
gdjs.Cutscene_321Code.GDNewSprite4Objects3.length = 0;
gdjs.Cutscene_321Code.GDNewSprite4Objects4.length = 0;
gdjs.Cutscene_321Code.GDNewTextObjects1.length = 0;
gdjs.Cutscene_321Code.GDNewTextObjects2.length = 0;
gdjs.Cutscene_321Code.GDNewTextObjects3.length = 0;
gdjs.Cutscene_321Code.GDNewTextObjects4.length = 0;
gdjs.Cutscene_321Code.GDNewText2Objects1.length = 0;
gdjs.Cutscene_321Code.GDNewText2Objects2.length = 0;
gdjs.Cutscene_321Code.GDNewText2Objects3.length = 0;
gdjs.Cutscene_321Code.GDNewText2Objects4.length = 0;
gdjs.Cutscene_321Code.GDNewSprite5Objects1.length = 0;
gdjs.Cutscene_321Code.GDNewSprite5Objects2.length = 0;
gdjs.Cutscene_321Code.GDNewSprite5Objects3.length = 0;
gdjs.Cutscene_321Code.GDNewSprite5Objects4.length = 0;
gdjs.Cutscene_321Code.GDNewText3Objects1.length = 0;
gdjs.Cutscene_321Code.GDNewText3Objects2.length = 0;
gdjs.Cutscene_321Code.GDNewText3Objects3.length = 0;
gdjs.Cutscene_321Code.GDNewText3Objects4.length = 0;
gdjs.Cutscene_321Code.GDNewSprite6Objects1.length = 0;
gdjs.Cutscene_321Code.GDNewSprite6Objects2.length = 0;
gdjs.Cutscene_321Code.GDNewSprite6Objects3.length = 0;
gdjs.Cutscene_321Code.GDNewSprite6Objects4.length = 0;
gdjs.Cutscene_321Code.GDNewText4Objects1.length = 0;
gdjs.Cutscene_321Code.GDNewText4Objects2.length = 0;
gdjs.Cutscene_321Code.GDNewText4Objects3.length = 0;
gdjs.Cutscene_321Code.GDNewText4Objects4.length = 0;

gdjs.Cutscene_321Code.eventsList5(runtimeScene);

return;

}

gdjs['Cutscene_321Code'] = gdjs.Cutscene_321Code;
