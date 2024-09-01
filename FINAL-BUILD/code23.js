gdjs.Mansion_32OutdoorCode = {};
gdjs.Mansion_32OutdoorCode.GDNewSpriteObjects1= [];
gdjs.Mansion_32OutdoorCode.GDNewSpriteObjects2= [];
gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1= [];
gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects2= [];
gdjs.Mansion_32OutdoorCode.GDNewTiledSpriteObjects1= [];
gdjs.Mansion_32OutdoorCode.GDNewTiledSpriteObjects2= [];


gdjs.Mansion_32OutdoorCode.asyncCallback13969364 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationName("idle");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Voicy_Tank Firing.mp3", false, 100, 1);
}}
gdjs.Mansion_32OutdoorCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Mansion_32OutdoorCode.asyncCallback13969364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mansion_32OutdoorCode.mapOfGDgdjs_9546Mansion_959532OutdoorCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1});
gdjs.Mansion_32OutdoorCode.mapOfGDgdjs_9546Mansion_959532OutdoorCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Mansion_32OutdoorCode.GDNewTiledSpriteObjects1});
gdjs.Mansion_32OutdoorCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1[i].clearForces();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13969292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("shoot");
}
}
{ //Subevents
gdjs.Mansion_32OutdoorCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Mansion_32OutdoorCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Mansion_32OutdoorCode.mapOfGDgdjs_9546Mansion_959532OutdoorCode_9546GDNewSprite2Objects1Objects, gdjs.Mansion_32OutdoorCode.mapOfGDgdjs_9546Mansion_959532OutdoorCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loading", false);
}}

}


};

gdjs.Mansion_32OutdoorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mansion_32OutdoorCode.GDNewSpriteObjects1.length = 0;
gdjs.Mansion_32OutdoorCode.GDNewSpriteObjects2.length = 0;
gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects1.length = 0;
gdjs.Mansion_32OutdoorCode.GDNewSprite2Objects2.length = 0;
gdjs.Mansion_32OutdoorCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Mansion_32OutdoorCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.Mansion_32OutdoorCode.eventsList1(runtimeScene);

return;

}

gdjs['Mansion_32OutdoorCode'] = gdjs.Mansion_32OutdoorCode;
