/************************************* 
 * Creation Of Lists And Photos Test *
 *************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'creation of lists and photos';  // from the Builder filename that created this script
let expInfo = {
    'Circle_Num': '175',
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from initializing_defs
function customOverlaps(a, b) {
    /*a custom function to detect overlap between circular objects
    Locally we can use psychopys inbuild overlaps method, this does not
    yet exist in psychoJS so we need a custom function for online use.

    input:
    a: a circular object with attributed pos and size
    b: a circular object with attributes pos and size*/
    var pt1, pt2, sep;
    pt1 = a.pos;
    pt2 = b.pos;
    sep = Math.pow((Math.pow((pt1[0] - pt2[0]), 2) + Math.pow((pt1[1] - pt2[1]), 2)), 0.5);
    if ((sep < ((a.size[0] / 2) + (b.size[0] / 2)))) {
        return true;
    } else {
        return false;
    }
}
function insideCircle(circle1, circle2) {
    /*
    circle1: larger circle
    circle2: smaller circle

    return: boolean true or false if smaller circle inside larger
    */
    var distSq, isInside, r1, r2, x, x1, x2, y1, y2;
    x1 = circle1.pos[0];
    y1 = circle1.pos[1];
    r1 = (circle1.size[0] / 2);
    x2 = circle2.pos[0];
    y2 = circle2.pos[1];
    r2 = (circle2.size[0] / 2);
    distSq = Math.pow((((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2))), 0.5);
    isInside = false;
    if (((distSq + r2) === r1)) {
        x = 1;
    } else {
        if (((distSq + r2) < r1)) {
            x = 2;
            isInside = true;
        } else {
            x = 3;
        }
    }
    return isInside;
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initalizingRoutineBegin());
flowScheduler.add(initalizingRoutineEachFrame());
flowScheduler.add(initalizingRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.1';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "initalizing"
  initalizingClock = new util.Clock();
  // Run 'Begin Experiment' code from initializing_defs
  import * as math from 'math';
  
  // Initialize components for Routine "Response"
  ResponseClock = new util.Clock();
  Base_Circle = new visual.Polygon ({
    win: psychoJS.window, name: 'Base_Circle', units : 'height', 
    edges: 4, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color((0.0000, 0.0000, 0.5000)),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  response_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code
  response_Pic_Num_List = [];
  Base_Circle_Size = 0.2564102564102564;
  Base_Circle_Pos = [0, 0];
  Bcolor = [0.0, 0.0, 0.925];
  Sound_it = false;
  
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 0.2,
    });
  sound_1.setVolume(1.0);
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function initalizingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initalizing' ---
    t = 0;
    initalizingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    initalizingComponents = [];
    
    for (const thisComponent of initalizingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function initalizingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initalizing' ---
    // get current time
    t = initalizingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initalizingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function initalizingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initalizing' ---
    for (const thisComponent of initalizingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "initalizing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(ResponseRoutineBegin(snapshot));
      trials_2LoopScheduler.add(ResponseRoutineEachFrame());
      trials_2LoopScheduler.add(ResponseRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function ResponseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Response' ---
    t = 0;
    ResponseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Base_Circle.setPos(Base_Circle_Pos);
    Base_Circle.setSize(Base_Circle_Size);
    Base_Circle.setLineColor(new util.Color(Bcolor));
    response_key_resp.keys = undefined;
    response_key_resp.rt = undefined;
    _response_key_resp_allKeys = [];
    // Run 'Begin Routine' code from code
    kb = new keyboard.Keyboard();
    Circle_List = [];
    space_func = true;
    Sound_it = false;
    if ((sound_1 === PsychoJS.Status.FINISHED)) {
        continueRoutine = false;
    }
    Circle_Num = Number.parseInt(expInfo["Circle_Num"]);
    
    sound_1.secs=0.2;
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    ResponseComponents = [];
    ResponseComponents.push(Base_Circle);
    ResponseComponents.push(response_key_resp);
    ResponseComponents.push(sound_1);
    
    for (const thisComponent of ResponseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ResponseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Response' ---
    // get current time
    t = ResponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Base_Circle* updates
    if (t >= 0.0 && Base_Circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Base_Circle.tStart = t;  // (not accounting for frame time here)
      Base_Circle.frameNStart = frameN;  // exact frame index
      
      Base_Circle.setAutoDraw(true);
    }

    
    // *response_key_resp* updates
    if (t >= 0.0 && response_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_key_resp.tStart = t;  // (not accounting for frame time here)
      response_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_key_resp.start(); }); // start on screen flip
    }

    if (response_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_key_resp.getKeys({keyList: ['return'], waitRelease: false});
      _response_key_resp_allKeys = _response_key_resp_allKeys.concat(theseKeys);
      if (_response_key_resp_allKeys.length > 0) {
        response_key_resp.keys = _response_key_resp_allKeys[_response_key_resp_allKeys.length - 1].name;  // just the last key pressed
        response_key_resp.rt = _response_key_resp_allKeys[_response_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from code
    keys = kb.getKeys(["space", "return"], {"waitRelease": false, "clear": false});
    Small_Circle_Size = 0.012820512820512822;
    Small_Circle_Pos_X = ((Math.random() * Base_Circle_Size) - (Base_Circle_Size / 2));
    Small_Circle_Pos_Y = ((Math.random() * Base_Circle_Size) - (Base_Circle_Size / 2));
    for (var circle, _pj_c = 0, _pj_a = Circle_List, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        circle = _pj_a[_pj_c];
        circle.setAutoDraw(true);
    }
    for (var thisKey, _pj_c = 0, _pj_a = keys, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        thisKey = _pj_a[_pj_c];
        if ((Circle_List.length === Circle_Num)) {
            Sound_it = true;
        }
        if ((Circle_List.length < Circle_Num)) {
            if (((thisKey === "space") && space_func)) {
                polygon = new visual.Polygon({"win": psychoJS.window, "name": "polygon", "units": "height", "edges": 100, "size": Small_Circle_Size, "ori": 0.0, "pos": [Small_Circle_Pos_X, Small_Circle_Pos_Y], "lineWidth": 0, "colorSpace": "rgb", "lineColor": "white", "fillColor": "black", "opacity": null, "depth": 0.0, "interpolate": true});
                overlap = false;
                for (var circle, _pj_f = 0, _pj_d = Circle_List, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                    circle = _pj_d[_pj_f];
                    if (customOverlaps(circle, polygon)) {
                        overlap = true;
                    }
                }
                isInside = insideCircle(Base_Circle, polygon);
                if (((! overlap) && isInside)) {
                    Circle_List.push(polygon);
                }
                if ((thisKey.duration !== null)) {
                    space_func = false;
                    kb.getKeys({"clear": true});
                    keys.clear();
                }
            } else {
                if (((thisKey === "space") && (! space_func))) {
                    if ((Circle_List.length > 0)) {
                        Cir_Pop = Circle_List.pop();
                        Cir_Pop.setAutoDraw(false);
                    }
                    if ((thisKey.duration !== null)) {
                        space_func = true;
                        kb.getKeys({"clear": true});
                        keys.clear();
                    }
                }
            }
        }
    }
    
    // start/stop sound_1
    if (((Sound_it == True)) && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    if (sound_1.status === PsychoJS.Status.STARTED && t >= (sound_1.tStart + 0.2)) {
      if (0.2 > 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
      }
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ResponseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ResponseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Response' ---
    for (const thisComponent of ResponseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_key_resp.corr, level);
    }
    psychoJS.experiment.addData('response_key_resp.keys', response_key_resp.keys);
    if (typeof response_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_key_resp.rt', response_key_resp.rt);
        routineTimer.reset();
        }
    
    response_key_resp.stop();
    // Run 'End Routine' code from code
    /* Syntax Error: Fix Python code */
    sound_1.stop();  // ensure sound has stopped at end of routine
    // the Routine "Response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
