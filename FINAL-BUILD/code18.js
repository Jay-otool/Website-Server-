gdjs.intro_322Code = {};
gdjs.intro_322Code.GDNewVideoObjects1= [];
gdjs.intro_322Code.GDNewVideoObjects2= [];


gdjs.intro_322Code.asyncCallback13862092 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}
gdjs.intro_322Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.intro_322Code.asyncCallback13862092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.intro_322Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.intro_322Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.intro_322Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.intro_322Code.GDNewVideoObjects1[i].play();
}
}
{ //Subevents
gdjs.intro_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.intro_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_322Code.GDNewVideoObjects1.length = 0;
gdjs.intro_322Code.GDNewVideoObjects2.length = 0;

gdjs.intro_322Code.eventsList1(runtimeScene);

return;

}

gdjs['intro_322Code'] = gdjs.intro_322Code;
