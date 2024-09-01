gdjs.Cut_32sceneCode = {};
gdjs.Cut_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Cut_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Cut_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Cut_32sceneCode.GDNewSpriteObjects4= [];
gdjs.Cut_32sceneCode.GDNewSpriteObjects5= [];
gdjs.Cut_32sceneCode.GDNewSpriteObjects6= [];
gdjs.Cut_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Cut_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Cut_32sceneCode.GDNewSprite2Objects3= [];
gdjs.Cut_32sceneCode.GDNewSprite2Objects4= [];
gdjs.Cut_32sceneCode.GDNewSprite2Objects5= [];
gdjs.Cut_32sceneCode.GDNewSprite2Objects6= [];
gdjs.Cut_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Cut_32sceneCode.GDNewSprite3Objects2= [];
gdjs.Cut_32sceneCode.GDNewSprite3Objects3= [];
gdjs.Cut_32sceneCode.GDNewSprite3Objects4= [];
gdjs.Cut_32sceneCode.GDNewSprite3Objects5= [];
gdjs.Cut_32sceneCode.GDNewSprite3Objects6= [];
gdjs.Cut_32sceneCode.GDNewSprite4Objects1= [];
gdjs.Cut_32sceneCode.GDNewSprite4Objects2= [];
gdjs.Cut_32sceneCode.GDNewSprite4Objects3= [];
gdjs.Cut_32sceneCode.GDNewSprite4Objects4= [];
gdjs.Cut_32sceneCode.GDNewSprite4Objects5= [];
gdjs.Cut_32sceneCode.GDNewSprite4Objects6= [];
gdjs.Cut_32sceneCode.GDNewTextObjects1= [];
gdjs.Cut_32sceneCode.GDNewTextObjects2= [];
gdjs.Cut_32sceneCode.GDNewTextObjects3= [];
gdjs.Cut_32sceneCode.GDNewTextObjects4= [];
gdjs.Cut_32sceneCode.GDNewTextObjects5= [];
gdjs.Cut_32sceneCode.GDNewTextObjects6= [];
gdjs.Cut_32sceneCode.GDNewText2Objects1= [];
gdjs.Cut_32sceneCode.GDNewText2Objects2= [];
gdjs.Cut_32sceneCode.GDNewText2Objects3= [];
gdjs.Cut_32sceneCode.GDNewText2Objects4= [];
gdjs.Cut_32sceneCode.GDNewText2Objects5= [];
gdjs.Cut_32sceneCode.GDNewText2Objects6= [];
gdjs.Cut_32sceneCode.GDNewText3Objects1= [];
gdjs.Cut_32sceneCode.GDNewText3Objects2= [];
gdjs.Cut_32sceneCode.GDNewText3Objects3= [];
gdjs.Cut_32sceneCode.GDNewText3Objects4= [];
gdjs.Cut_32sceneCode.GDNewText3Objects5= [];
gdjs.Cut_32sceneCode.GDNewText3Objects6= [];
gdjs.Cut_32sceneCode.GDNewText4Objects1= [];
gdjs.Cut_32sceneCode.GDNewText4Objects2= [];
gdjs.Cut_32sceneCode.GDNewText4Objects3= [];
gdjs.Cut_32sceneCode.GDNewText4Objects4= [];
gdjs.Cut_32sceneCode.GDNewText4Objects5= [];
gdjs.Cut_32sceneCode.GDNewText4Objects6= [];


gdjs.Cut_32sceneCode.asyncCallback13898852 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dakota side 3", false);
}}
gdjs.Cut_32sceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Cut_32sceneCode.asyncCallback13898852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cut_32sceneCode.asyncCallback13898540 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.Cut_32sceneCode.GDNewText2Objects5);

gdjs.copyArray(asyncObjectsList.getObjects("NewText3"), gdjs.Cut_32sceneCode.GDNewText3Objects5);

{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewText2Objects5.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewText2Objects5[i].hide();
}
}{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewText3Objects5.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewText3Objects5[i].hide(false);
}
}
{ //Subevents
gdjs.Cut_32sceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Cut_32sceneCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Cut_32sceneCode.GDNewText2Objects4) asyncObjectsList.addObject("NewText2", obj);
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Cut_32sceneCode.asyncCallback13898540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cut_32sceneCode.asyncCallback13898228 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.Cut_32sceneCode.GDNewTextObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.Cut_32sceneCode.GDNewText2Objects4);

{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewTextObjects4.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewTextObjects4[i].hide();
}
}{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewText2Objects4.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewText2Objects4[i].hide(false);
}
}
{ //Subevents
gdjs.Cut_32sceneCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Cut_32sceneCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Cut_32sceneCode.GDNewTextObjects3) asyncObjectsList.addObject("NewText", obj);
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Cut_32sceneCode.asyncCallback13898228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cut_32sceneCode.asyncCallback13897676 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Cut_32sceneCode.GDNewSprite2Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.Cut_32sceneCode.GDNewSprite4Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.Cut_32sceneCode.GDNewTextObjects3);

{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewSprite2Objects3.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewSprite2Objects3[i].getBehavior("Animation").setAnimationName("yap");
}
}{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewSprite4Objects3.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewSprite4Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewTextObjects3[i].hide(false);
}
}
{ //Subevents
gdjs.Cut_32sceneCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Cut_32sceneCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewSprite4 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText2 as it will be provided by the parent asyncObjectsList. */
/* Don't save NewText3 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Cut_32sceneCode.asyncCallback13897676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cut_32sceneCode.asyncCallback13897412 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText4"), gdjs.Cut_32sceneCode.GDNewText4Objects2);

{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewText4Objects2.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewText4Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.Cut_32sceneCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Cut_32sceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Cut_32sceneCode.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
for (const obj of gdjs.Cut_32sceneCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.Cut_32sceneCode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
for (const obj of gdjs.Cut_32sceneCode.GDNewText3Objects1) asyncObjectsList.addObject("NewText3", obj);
for (const obj of gdjs.Cut_32sceneCode.GDNewText4Objects1) asyncObjectsList.addObject("NewText4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Cut_32sceneCode.asyncCallback13897412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cut_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Cut_32sceneCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cut_32sceneCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Cut_32sceneCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Cut_32sceneCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.Cut_32sceneCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cut_32sceneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Cut_32sceneCode.GDNewSprite4Objects1[i].hide();
}
}
{ //Subevents
gdjs.Cut_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Cut_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cut_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Cut_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Cut_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Cut_32sceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Cut_32sceneCode.GDNewSpriteObjects5.length = 0;
gdjs.Cut_32sceneCode.GDNewSpriteObjects6.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite2Objects4.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite2Objects5.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite2Objects6.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite3Objects3.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite3Objects4.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite3Objects5.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite3Objects6.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite4Objects3.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite4Objects4.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite4Objects5.length = 0;
gdjs.Cut_32sceneCode.GDNewSprite4Objects6.length = 0;
gdjs.Cut_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Cut_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Cut_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Cut_32sceneCode.GDNewTextObjects4.length = 0;
gdjs.Cut_32sceneCode.GDNewTextObjects5.length = 0;
gdjs.Cut_32sceneCode.GDNewTextObjects6.length = 0;
gdjs.Cut_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Cut_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Cut_32sceneCode.GDNewText2Objects3.length = 0;
gdjs.Cut_32sceneCode.GDNewText2Objects4.length = 0;
gdjs.Cut_32sceneCode.GDNewText2Objects5.length = 0;
gdjs.Cut_32sceneCode.GDNewText2Objects6.length = 0;
gdjs.Cut_32sceneCode.GDNewText3Objects1.length = 0;
gdjs.Cut_32sceneCode.GDNewText3Objects2.length = 0;
gdjs.Cut_32sceneCode.GDNewText3Objects3.length = 0;
gdjs.Cut_32sceneCode.GDNewText3Objects4.length = 0;
gdjs.Cut_32sceneCode.GDNewText3Objects5.length = 0;
gdjs.Cut_32sceneCode.GDNewText3Objects6.length = 0;
gdjs.Cut_32sceneCode.GDNewText4Objects1.length = 0;
gdjs.Cut_32sceneCode.GDNewText4Objects2.length = 0;
gdjs.Cut_32sceneCode.GDNewText4Objects3.length = 0;
gdjs.Cut_32sceneCode.GDNewText4Objects4.length = 0;
gdjs.Cut_32sceneCode.GDNewText4Objects5.length = 0;
gdjs.Cut_32sceneCode.GDNewText4Objects6.length = 0;

gdjs.Cut_32sceneCode.eventsList5(runtimeScene);

return;

}

gdjs['Cut_32sceneCode'] = gdjs.Cut_32sceneCode;
