gdjs.LoadingCode = {};
gdjs.LoadingCode.GDNewSpriteObjects1= [];
gdjs.LoadingCode.GDNewSpriteObjects2= [];


gdjs.LoadingCode.asyncCallback13984268 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mansion indoor 1", false);
}}
gdjs.LoadingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.45), (runtimeScene) => (gdjs.LoadingCode.asyncCallback13984268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoadingCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDNewSpriteObjects1.length = 0;
gdjs.LoadingCode.GDNewSpriteObjects2.length = 0;

gdjs.LoadingCode.eventsList1(runtimeScene);

return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;
