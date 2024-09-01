gdjs.Town4Code = {};
gdjs.Town4Code.GDNewSpriteObjects1= [];
gdjs.Town4Code.GDNewSpriteObjects2= [];
gdjs.Town4Code.GDNewSprite2Objects1= [];
gdjs.Town4Code.GDNewSprite2Objects2= [];
gdjs.Town4Code.GDNewSprite5Objects1= [];
gdjs.Town4Code.GDNewSprite5Objects2= [];
gdjs.Town4Code.GDNewSprite3Objects1= [];
gdjs.Town4Code.GDNewSprite3Objects2= [];
gdjs.Town4Code.GDNewSprite4Objects1= [];
gdjs.Town4Code.GDNewSprite4Objects2= [];
gdjs.Town4Code.GDNewSprite6Objects1= [];
gdjs.Town4Code.GDNewSprite6Objects2= [];


gdjs.Town4Code.asyncCallback13939668 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Town4Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.Town4Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationName("idle");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Voicy_Tank Firing.mp3", false, 100, 1);
}}
gdjs.Town4Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Town4Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Town4Code.asyncCallback13939668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Town4Code.GDNewSprite5Objects1});
gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Town4Code.GDNewSprite3Objects1});
gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Town4Code.GDNewSprite5Objects1});
gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Town4Code.GDNewSprite4Objects1});
gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Town4Code.GDNewSprite2Objects1});
gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Town4Code.GDNewSprite5Objects1});
gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Town4Code.GDNewSprite2Objects1});
gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Town4Code.GDNewSprite6Objects1});
gdjs.Town4Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town4Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Town4Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite2Objects1[i].addForce(-(30), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town4Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Town4Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite2Objects1[i].clearForces();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13939596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town4Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Town4Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("shoot");
}
}
{ //Subevents
gdjs.Town4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Town4Code.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs.Town4Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite5Objects1[i].getBehavior("Animation").setAnimationName("WALK 1");
}
}{for(var i = 0, len = gdjs.Town4Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite5Objects1[i].addForce(-(60), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Town4Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Town4Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite5Objects1Objects, gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Town4Code.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.Town4Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite5Objects1[i].getBehavior("Animation").setAnimationName("WALK 2");
}
}{for(var i = 0, len = gdjs.Town4Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite5Objects1[i].addForce(60, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Town4Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Town4Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite5Objects1Objects, gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Town4Code.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.Town4Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite5Objects1[i].getBehavior("Animation").setAnimationName("WALK 1");
}
}{for(var i = 0, len = gdjs.Town4Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite5Objects1[i].addForce(-(60), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town4Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Town4Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite2Objects1Objects, gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13943372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Town4Code.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.Town4Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite5Objects1[i].getBehavior("Animation").setAnimationName("Suprised");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "what-the-hell-meme-sound-effect.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Town4Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Town4Code.GDNewSprite5Objects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Town4Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Town4Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite2Objects1Objects, gdjs.Town4Code.mapOfGDgdjs_9546Town4Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mansion Outdoor", false);
}}

}


};

gdjs.Town4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Town4Code.GDNewSpriteObjects1.length = 0;
gdjs.Town4Code.GDNewSpriteObjects2.length = 0;
gdjs.Town4Code.GDNewSprite2Objects1.length = 0;
gdjs.Town4Code.GDNewSprite2Objects2.length = 0;
gdjs.Town4Code.GDNewSprite5Objects1.length = 0;
gdjs.Town4Code.GDNewSprite5Objects2.length = 0;
gdjs.Town4Code.GDNewSprite3Objects1.length = 0;
gdjs.Town4Code.GDNewSprite3Objects2.length = 0;
gdjs.Town4Code.GDNewSprite4Objects1.length = 0;
gdjs.Town4Code.GDNewSprite4Objects2.length = 0;
gdjs.Town4Code.GDNewSprite6Objects1.length = 0;
gdjs.Town4Code.GDNewSprite6Objects2.length = 0;

gdjs.Town4Code.eventsList1(runtimeScene);

return;

}

gdjs['Town4Code'] = gdjs.Town4Code;
