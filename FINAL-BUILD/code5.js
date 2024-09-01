gdjs.Drive_32awayCode = {};
gdjs.Drive_32awayCode.GDNewSpriteObjects1= [];
gdjs.Drive_32awayCode.GDNewSpriteObjects2= [];
gdjs.Drive_32awayCode.GDNewTextObjects1= [];
gdjs.Drive_32awayCode.GDNewTextObjects2= [];
gdjs.Drive_32awayCode.GDNewTiledSpriteObjects1= [];
gdjs.Drive_32awayCode.GDNewTiledSpriteObjects2= [];


gdjs.Drive_32awayCode.asyncCallback13523204 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}
gdjs.Drive_32awayCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Drive_32awayCode.asyncCallback13523204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Drive_32awayCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Drive_32awayCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Drive_32awayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Drive_32awayCode.GDNewSpriteObjects1.length = 0;
gdjs.Drive_32awayCode.GDNewSpriteObjects2.length = 0;
gdjs.Drive_32awayCode.GDNewTextObjects1.length = 0;
gdjs.Drive_32awayCode.GDNewTextObjects2.length = 0;
gdjs.Drive_32awayCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Drive_32awayCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.Drive_32awayCode.eventsList1(runtimeScene);

return;

}

gdjs['Drive_32awayCode'] = gdjs.Drive_32awayCode;
