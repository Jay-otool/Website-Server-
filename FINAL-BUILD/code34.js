gdjs.Trash_32pileCode = {};
gdjs.Trash_32pileCode.GDNewSpriteObjects1= [];
gdjs.Trash_32pileCode.GDNewSpriteObjects2= [];
gdjs.Trash_32pileCode.GDNewSprite2Objects1= [];
gdjs.Trash_32pileCode.GDNewSprite2Objects2= [];
gdjs.Trash_32pileCode.GDNewTiledSpriteObjects1= [];
gdjs.Trash_32pileCode.GDNewTiledSpriteObjects2= [];
gdjs.Trash_32pileCode.GDNewTiledSprite2Objects1= [];
gdjs.Trash_32pileCode.GDNewTiledSprite2Objects2= [];
gdjs.Trash_32pileCode.GDNewSprite3Objects1= [];
gdjs.Trash_32pileCode.GDNewSprite3Objects2= [];


gdjs.Trash_32pileCode.mapOfGDgdjs_9546Trash_959532pileCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Trash_32pileCode.GDNewSprite2Objects1});
gdjs.Trash_32pileCode.mapOfGDgdjs_9546Trash_959532pileCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Trash_32pileCode.GDNewSprite3Objects1});
gdjs.Trash_32pileCode.mapOfGDgdjs_9546Trash_959532pileCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Trash_32pileCode.GDNewSprite2Objects1});
gdjs.Trash_32pileCode.mapOfGDgdjs_9546Trash_959532pileCode_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.Trash_32pileCode.GDNewTiledSprite2Objects1});
gdjs.Trash_32pileCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Trash_32pileCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Trash_32pileCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Trash_32pileCode.GDNewSprite2Objects1[i].addForce(80, 0, 0);
}
}{for(var i = 0, len = gdjs.Trash_32pileCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Trash_32pileCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Driving backward");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Trash_32pileCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Trash_32pileCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Trash_32pileCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Trash_32pileCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Trash_32pileCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Trash_32pileCode.GDNewSprite2Objects1[i].addForce(-(80), 0, 0);
}
}{for(var i = 0, len = gdjs.Trash_32pileCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Trash_32pileCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Driving");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Trash_32pileCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Trash_32pileCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Trash_32pileCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Normal asf");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Trash_32pileCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Trash_32pileCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Trash_32pileCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("shooting");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Voicy_Tank Firing.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Trash_32pileCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Trash_32pileCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Trash_32pileCode.mapOfGDgdjs_9546Trash_959532pileCode_9546GDNewSprite2Objects1Objects, gdjs.Trash_32pileCode.mapOfGDgdjs_9546Trash_959532pileCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Trash_32pileCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.Trash_32pileCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Trash_32pileCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Deatheddddddddd");
}
}{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Trash_32pileCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Trash_32pileCode.GDNewTiledSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Trash_32pileCode.mapOfGDgdjs_9546Trash_959532pileCode_9546GDNewSprite2Objects1Objects, gdjs.Trash_32pileCode.mapOfGDgdjs_9546Trash_959532pileCode_9546GDNewTiledSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Garbage", false);
}}

}


};

gdjs.Trash_32pileCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Trash_32pileCode.GDNewSpriteObjects1.length = 0;
gdjs.Trash_32pileCode.GDNewSpriteObjects2.length = 0;
gdjs.Trash_32pileCode.GDNewSprite2Objects1.length = 0;
gdjs.Trash_32pileCode.GDNewSprite2Objects2.length = 0;
gdjs.Trash_32pileCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Trash_32pileCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Trash_32pileCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Trash_32pileCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Trash_32pileCode.GDNewSprite3Objects1.length = 0;
gdjs.Trash_32pileCode.GDNewSprite3Objects2.length = 0;

gdjs.Trash_32pileCode.eventsList0(runtimeScene);

return;

}

gdjs['Trash_32pileCode'] = gdjs.Trash_32pileCode;
