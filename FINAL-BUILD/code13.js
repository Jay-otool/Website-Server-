gdjs.INDOERCode = {};
gdjs.INDOERCode.GDNewSpriteObjects1= [];
gdjs.INDOERCode.GDNewSpriteObjects2= [];
gdjs.INDOERCode.GDNewSpriteObjects3= [];
gdjs.INDOERCode.GDNewSpriteObjects4= [];
gdjs.INDOERCode.GDNewSpriteObjects5= [];
gdjs.INDOERCode.GDNewSpriteObjects6= [];
gdjs.INDOERCode.GDNewSpriteObjects7= [];
gdjs.INDOERCode.GDNewSprite2Objects1= [];
gdjs.INDOERCode.GDNewSprite2Objects2= [];
gdjs.INDOERCode.GDNewSprite2Objects3= [];
gdjs.INDOERCode.GDNewSprite2Objects4= [];
gdjs.INDOERCode.GDNewSprite2Objects5= [];
gdjs.INDOERCode.GDNewSprite2Objects6= [];
gdjs.INDOERCode.GDNewSprite2Objects7= [];
gdjs.INDOERCode.GDNewSprite3Objects1= [];
gdjs.INDOERCode.GDNewSprite3Objects2= [];
gdjs.INDOERCode.GDNewSprite3Objects3= [];
gdjs.INDOERCode.GDNewSprite3Objects4= [];
gdjs.INDOERCode.GDNewSprite3Objects5= [];
gdjs.INDOERCode.GDNewSprite3Objects6= [];
gdjs.INDOERCode.GDNewSprite3Objects7= [];
gdjs.INDOERCode.GDNewSprite4Objects1= [];
gdjs.INDOERCode.GDNewSprite4Objects2= [];
gdjs.INDOERCode.GDNewSprite4Objects3= [];
gdjs.INDOERCode.GDNewSprite4Objects4= [];
gdjs.INDOERCode.GDNewSprite4Objects5= [];
gdjs.INDOERCode.GDNewSprite4Objects6= [];
gdjs.INDOERCode.GDNewSprite4Objects7= [];
gdjs.INDOERCode.GDNewTextObjects1= [];
gdjs.INDOERCode.GDNewTextObjects2= [];
gdjs.INDOERCode.GDNewTextObjects3= [];
gdjs.INDOERCode.GDNewTextObjects4= [];
gdjs.INDOERCode.GDNewTextObjects5= [];
gdjs.INDOERCode.GDNewTextObjects6= [];
gdjs.INDOERCode.GDNewTextObjects7= [];
gdjs.INDOERCode.GDNewText2Objects1= [];
gdjs.INDOERCode.GDNewText2Objects2= [];
gdjs.INDOERCode.GDNewText2Objects3= [];
gdjs.INDOERCode.GDNewText2Objects4= [];
gdjs.INDOERCode.GDNewText2Objects5= [];
gdjs.INDOERCode.GDNewText2Objects6= [];
gdjs.INDOERCode.GDNewText2Objects7= [];
gdjs.INDOERCode.GDNewText3Objects1= [];
gdjs.INDOERCode.GDNewText3Objects2= [];
gdjs.INDOERCode.GDNewText3Objects3= [];
gdjs.INDOERCode.GDNewText3Objects4= [];
gdjs.INDOERCode.GDNewText3Objects5= [];
gdjs.INDOERCode.GDNewText3Objects6= [];
gdjs.INDOERCode.GDNewText3Objects7= [];


gdjs.INDOERCode.asyncCallback13737324 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText3"), gdjs.INDOERCode.GDNewText3Objects7);

{for(var i = 0, len = gdjs.INDOERCode.GDNewText3Objects7.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewText3Objects7[i].hide();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shady Valley 2", false);
}}
gdjs.INDOERCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.INDOERCode.GDNewText3Objects6) asyncObjectsList.addObject("NewText3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.INDOERCode.asyncCallback13737324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INDOERCode.asyncCallback13737060 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText3"), gdjs.INDOERCode.GDNewText3Objects6);

{for(var i = 0, len = gdjs.INDOERCode.GDNewText3Objects6.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewText3Objects6[i].hide(false);
}
}
{ //Subevents
gdjs.INDOERCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.INDOERCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.INDOERCode.asyncCallback13737060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INDOERCode.asyncCallback13736396 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.INDOERCode.GDNewText2Objects5);

{for(var i = 0, len = gdjs.INDOERCode.GDNewText2Objects5.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewText2Objects5[i].hide();
}
}
{ //Subevents
gdjs.INDOERCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.INDOERCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.INDOERCode.GDNewText2Objects4) asyncObjectsList.addObject("NewText2", obj);
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.INDOERCode.asyncCallback13736396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INDOERCode.asyncCallback13736612 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.INDOERCode.GDNewText2Objects4);

{for(var i = 0, len = gdjs.INDOERCode.GDNewText2Objects4.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewText2Objects4[i].hide(false);
}
}
{ //Subevents
gdjs.INDOERCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.INDOERCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.INDOERCode.asyncCallback13736612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INDOERCode.asyncCallback13736468 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.INDOERCode.GDNewTextObjects3);

{for(var i = 0, len = gdjs.INDOERCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewTextObjects3[i].hide();
}
}
{ //Subevents
gdjs.INDOERCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.INDOERCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.INDOERCode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.INDOERCode.asyncCallback13736468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INDOERCode.asyncCallback13736156 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.INDOERCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.INDOERCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewTextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.INDOERCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.INDOERCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.INDOERCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.INDOERCode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
for (const obj of gdjs.INDOERCode.GDNewText3Objects1) asyncObjectsList.addObject("NewText3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.INDOERCode.asyncCallback13736156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INDOERCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.INDOERCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.INDOERCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.INDOERCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.INDOERCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.INDOERCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.INDOERCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.INDOERCode.GDNewText3Objects1[i].hide();
}
}
{ //Subevents
gdjs.INDOERCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.INDOERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INDOERCode.GDNewSpriteObjects1.length = 0;
gdjs.INDOERCode.GDNewSpriteObjects2.length = 0;
gdjs.INDOERCode.GDNewSpriteObjects3.length = 0;
gdjs.INDOERCode.GDNewSpriteObjects4.length = 0;
gdjs.INDOERCode.GDNewSpriteObjects5.length = 0;
gdjs.INDOERCode.GDNewSpriteObjects6.length = 0;
gdjs.INDOERCode.GDNewSpriteObjects7.length = 0;
gdjs.INDOERCode.GDNewSprite2Objects1.length = 0;
gdjs.INDOERCode.GDNewSprite2Objects2.length = 0;
gdjs.INDOERCode.GDNewSprite2Objects3.length = 0;
gdjs.INDOERCode.GDNewSprite2Objects4.length = 0;
gdjs.INDOERCode.GDNewSprite2Objects5.length = 0;
gdjs.INDOERCode.GDNewSprite2Objects6.length = 0;
gdjs.INDOERCode.GDNewSprite2Objects7.length = 0;
gdjs.INDOERCode.GDNewSprite3Objects1.length = 0;
gdjs.INDOERCode.GDNewSprite3Objects2.length = 0;
gdjs.INDOERCode.GDNewSprite3Objects3.length = 0;
gdjs.INDOERCode.GDNewSprite3Objects4.length = 0;
gdjs.INDOERCode.GDNewSprite3Objects5.length = 0;
gdjs.INDOERCode.GDNewSprite3Objects6.length = 0;
gdjs.INDOERCode.GDNewSprite3Objects7.length = 0;
gdjs.INDOERCode.GDNewSprite4Objects1.length = 0;
gdjs.INDOERCode.GDNewSprite4Objects2.length = 0;
gdjs.INDOERCode.GDNewSprite4Objects3.length = 0;
gdjs.INDOERCode.GDNewSprite4Objects4.length = 0;
gdjs.INDOERCode.GDNewSprite4Objects5.length = 0;
gdjs.INDOERCode.GDNewSprite4Objects6.length = 0;
gdjs.INDOERCode.GDNewSprite4Objects7.length = 0;
gdjs.INDOERCode.GDNewTextObjects1.length = 0;
gdjs.INDOERCode.GDNewTextObjects2.length = 0;
gdjs.INDOERCode.GDNewTextObjects3.length = 0;
gdjs.INDOERCode.GDNewTextObjects4.length = 0;
gdjs.INDOERCode.GDNewTextObjects5.length = 0;
gdjs.INDOERCode.GDNewTextObjects6.length = 0;
gdjs.INDOERCode.GDNewTextObjects7.length = 0;
gdjs.INDOERCode.GDNewText2Objects1.length = 0;
gdjs.INDOERCode.GDNewText2Objects2.length = 0;
gdjs.INDOERCode.GDNewText2Objects3.length = 0;
gdjs.INDOERCode.GDNewText2Objects4.length = 0;
gdjs.INDOERCode.GDNewText2Objects5.length = 0;
gdjs.INDOERCode.GDNewText2Objects6.length = 0;
gdjs.INDOERCode.GDNewText2Objects7.length = 0;
gdjs.INDOERCode.GDNewText3Objects1.length = 0;
gdjs.INDOERCode.GDNewText3Objects2.length = 0;
gdjs.INDOERCode.GDNewText3Objects3.length = 0;
gdjs.INDOERCode.GDNewText3Objects4.length = 0;
gdjs.INDOERCode.GDNewText3Objects5.length = 0;
gdjs.INDOERCode.GDNewText3Objects6.length = 0;
gdjs.INDOERCode.GDNewText3Objects7.length = 0;

gdjs.INDOERCode.eventsList6(runtimeScene);

return;

}

gdjs['INDOERCode'] = gdjs.INDOERCode;
