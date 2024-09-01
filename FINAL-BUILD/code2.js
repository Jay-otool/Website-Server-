gdjs.introCode = {};
gdjs.introCode.GDNewTiledSpriteObjects1= [];
gdjs.introCode.GDNewTiledSpriteObjects2= [];
gdjs.introCode.GDNewTiledSprite2Objects1= [];
gdjs.introCode.GDNewTiledSprite2Objects2= [];


gdjs.introCode.asyncCallback13491924 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro 2", false);
}}
gdjs.introCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.introCode.asyncCallback13491924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.introCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.introCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.introCode.GDNewTiledSprite2Objects2.length = 0;

gdjs.introCode.eventsList1(runtimeScene);

return;

}

gdjs['introCode'] = gdjs.introCode;
