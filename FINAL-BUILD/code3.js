gdjs.trunkCode = {};
gdjs.trunkCode.GDNewSpriteObjects1= [];
gdjs.trunkCode.GDNewSpriteObjects2= [];
gdjs.trunkCode.GDNewTextObjects1= [];
gdjs.trunkCode.GDNewTextObjects2= [];


gdjs.trunkCode.asyncCallback13499740 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "die", false);
}}
gdjs.trunkCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(9), (runtimeScene) => (gdjs.trunkCode.asyncCallback13499740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.trunkCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.trunkCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.trunkCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.trunkCode.GDNewSpriteObjects1.length = 0;
gdjs.trunkCode.GDNewSpriteObjects2.length = 0;
gdjs.trunkCode.GDNewTextObjects1.length = 0;
gdjs.trunkCode.GDNewTextObjects2.length = 0;

gdjs.trunkCode.eventsList1(runtimeScene);

return;

}

gdjs['trunkCode'] = gdjs.trunkCode;
