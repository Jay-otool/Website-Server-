gdjs.dieCode = {};
gdjs.dieCode.GDNewTiledSpriteObjects1= [];
gdjs.dieCode.GDNewTiledSpriteObjects2= [];
gdjs.dieCode.GDNewSpriteObjects1= [];
gdjs.dieCode.GDNewSpriteObjects2= [];


gdjs.dieCode.asyncCallback13512500 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Drive away", false);
}}
gdjs.dieCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.dieCode.asyncCallback13512500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.dieCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.dieCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.dieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dieCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.dieCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.dieCode.GDNewSpriteObjects1.length = 0;
gdjs.dieCode.GDNewSpriteObjects2.length = 0;

gdjs.dieCode.eventsList1(runtimeScene);

return;

}

gdjs['dieCode'] = gdjs.dieCode;
