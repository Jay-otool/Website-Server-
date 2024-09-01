gdjs.LOAADDIINGCode = {};
gdjs.LOAADDIINGCode.GDNewSpriteObjects1= [];
gdjs.LOAADDIINGCode.GDNewSpriteObjects2= [];


gdjs.LOAADDIINGCode.asyncCallback13787468 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LAST CUTSCENE WOOO", false);
}}
gdjs.LOAADDIINGCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.45), (runtimeScene) => (gdjs.LOAADDIINGCode.asyncCallback13787468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LOAADDIINGCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LOAADDIINGCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LOAADDIINGCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LOAADDIINGCode.GDNewSpriteObjects1.length = 0;
gdjs.LOAADDIINGCode.GDNewSpriteObjects2.length = 0;

gdjs.LOAADDIINGCode.eventsList1(runtimeScene);

return;

}

gdjs['LOAADDIINGCode'] = gdjs.LOAADDIINGCode;
