gdjs.ANOTHER_32CUTSCENECode = {};
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects1= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects2= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects3= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects4= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects5= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects6= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects7= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects1= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects2= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects3= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects4= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects5= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects6= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects7= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects1= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects2= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects3= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects4= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects5= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects6= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects7= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects1= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects2= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects3= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects4= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects5= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects6= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects7= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects1= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects2= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects3= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects4= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects5= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects6= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects7= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects1= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects2= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects3= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects4= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects5= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects6= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects7= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects1= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects2= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects3= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects4= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects5= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects6= [];
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects7= [];


gdjs.ANOTHER_32CUTSCENECode.asyncCallback14146668 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects7);

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects7);
gdjs.copyArray(asyncObjectsList.getObjects("NewText3"), gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects7);

{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects7.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects7[i].hide();
}
}{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects7.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects7[i].getBehavior("Animation").setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects7.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects7[i].hide();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dakota Side 5", false);
}}
gdjs.ANOTHER_32CUTSCENECode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects6) asyncObjectsList.addObject("NewText3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.ANOTHER_32CUTSCENECode.asyncCallback14146668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ANOTHER_32CUTSCENECode.asyncCallback14146404 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText3"), gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects6);

{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects6.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects6[i].hide(false);
}
}
{ //Subevents
gdjs.ANOTHER_32CUTSCENECode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.ANOTHER_32CUTSCENECode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ANOTHER_32CUTSCENECode.asyncCallback14146404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ANOTHER_32CUTSCENECode.asyncCallback14145572 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects5);

{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects5.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects5[i].hide();
}
}
{ //Subevents
gdjs.ANOTHER_32CUTSCENECode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.ANOTHER_32CUTSCENECode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects4) asyncObjectsList.addObject("NewText2", obj);
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.ANOTHER_32CUTSCENECode.asyncCallback14145572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ANOTHER_32CUTSCENECode.asyncCallback14145956 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects4);

{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects4.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects4[i].hide(false);
}
}
{ //Subevents
gdjs.ANOTHER_32CUTSCENECode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.ANOTHER_32CUTSCENECode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ANOTHER_32CUTSCENECode.asyncCallback14145956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ANOTHER_32CUTSCENECode.asyncCallback14145812 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects3);

{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects3[i].hide();
}
}
{ //Subevents
gdjs.ANOTHER_32CUTSCENECode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.ANOTHER_32CUTSCENECode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.ANOTHER_32CUTSCENECode.asyncCallback14145812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ANOTHER_32CUTSCENECode.asyncCallback14145476 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.ANOTHER_32CUTSCENECode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.ANOTHER_32CUTSCENECode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
for (const obj of gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
for (const obj of gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects1) asyncObjectsList.addObject("NewText3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ANOTHER_32CUTSCENECode.asyncCallback14145476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ANOTHER_32CUTSCENECode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("yappeineg");
}
}{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects1[i].hide();
}
}
{ //Subevents
gdjs.ANOTHER_32CUTSCENECode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.ANOTHER_32CUTSCENECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects1.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects2.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects3.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects4.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects5.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects6.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSpriteObjects7.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects1.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects2.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects3.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects4.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects5.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects6.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite2Objects7.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects1.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects2.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects3.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects4.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects5.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects6.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite3Objects7.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects1.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects2.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects3.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects4.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects5.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects6.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewSprite4Objects7.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects1.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects2.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects3.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects4.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects5.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects6.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewTextObjects7.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects1.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects2.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects3.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects4.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects5.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects6.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText2Objects7.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects1.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects2.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects3.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects4.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects5.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects6.length = 0;
gdjs.ANOTHER_32CUTSCENECode.GDNewText3Objects7.length = 0;

gdjs.ANOTHER_32CUTSCENECode.eventsList6(runtimeScene);

return;

}

gdjs['ANOTHER_32CUTSCENECode'] = gdjs.ANOTHER_32CUTSCENECode;
