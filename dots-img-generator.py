#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.1),
    on September 28, 2022, at 00:56
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# Run 'Before Experiment' code from initializing_defs
# custome overlaps def is checking if two circels are overlaps
# this def will run thruout the full experiment
def customOverlaps(a, b):
    ''' a custom function to detect overlap between circular objects
    Locally we can use psychopys inbuild overlaps method, this does not
    yet exist in psychoJS so we need a custom function for online use.
    
    input:
        a: a circular object with attributed pos and size
        b: a circular object with attributes pos and size'''
    pt1 = a.pos
    pt2 = b.pos
    
    sep = ((pt1[0]-pt2[0])**2+(pt1[1]-pt2[1])**2)**0.5
    
    # if the seperation is less than the sum of the radi
    if sep < a.size[0]/2 + b.size[0]/2:
        return True
    else:
        return False

# insideCircles def is checking if  circle is inside a bigger backgound circle

def insideCircle(circle1, circle2):
    '''
    circle1: larger circle
    circle2: smaller circle
    
    return: boolean true or false if smaller circle inside larger
    '''
    x1 = circle1.pos[0]
    y1 = circle1.pos[1]
    r1 = circle1.size[0]/2
    x2 = circle2.pos[0]
    y2 = circle2.pos[1]
    r2 = circle2.size[0]/2
    
    distSq = (((x1 - x2)* (x1 - x2))+ ((y1 - y2)* (y1 - y2)))**(.5)
    isInside = False
    if (distSq + r2 == r1):
        x = 1
    elif (distSq + r2 < r1):
        x = 2
        isInside = True
    else:
        x = 3
    return isInside


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.1'
expName = 'List'  # from the Builder filename that created this script
expInfo = {
    'Circle_Num': '175',
    'participant': '',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\dotan\\Downloads\\creation of lists and photos.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='default', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "initalizing" ---
# Run 'Begin Experiment' code from initializing_defs
import math

# --- Initialize components for Routine "Response" ---
Base_Circle = visual.ShapeStim(
    win=win, name='Base_Circle',units='height', 
    size=[1.0, 1.0], vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='hsv',  lineColor='white', fillColor=(0.0000, 0.0000, 0.5000),
    opacity=None, depth=0.0, interpolate=True)
response_key_resp = keyboard.Keyboard()
# Run 'Begin Experiment' code from code
#  list of number of rounds for pics name
response_Pic_Num_List = []

# the background Circle 2r size and pos in cm:
Base_Circle_Size = 0.2564102564102564
Base_Circle_Pos = (0, 0)
Bcolor = (0.0000, 0.0000, 0.925)

Sound_it = False


sound_1 = sound.Sound('A', secs=0.2, stereo=True, hamming=True,
    name='sound_1')
sound_1.setVolume(1.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "initalizing" ---
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
initalizingComponents = []
for thisComponent in initalizingComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "initalizing" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in initalizingComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "initalizing" ---
for thisComponent in initalizingComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "initalizing" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=20.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "Response" ---
    continueRoutine = True
    # update component parameters for each repeat
    Base_Circle.setPos(Base_Circle_Pos)
    Base_Circle.setSize(Base_Circle_Size)
    Base_Circle.setLineColor(Bcolor)
    response_key_resp.keys = []
    response_key_resp.rt = []
    _response_key_resp_allKeys = []
    # Run 'Begin Routine' code from code
    # creating a keyboard
    kb = keyboard.Keyboard()
    
    # creating some  lists for statistics and functions
    Circle_List = []
    
    # space function is addition for the first part of the experiment
    space_func = True
    
    Sound_it = False
    
    if sound_1 == FINISHED:
       continueRoutine = False
    
    Circle_Num = int(expInfo['Circle_Num'])
    sound_1.setSound('A', secs=0.2, hamming=True)
    sound_1.setVolume(1.0, log=False)
    # keep track of which components have finished
    ResponseComponents = [Base_Circle, response_key_resp, sound_1]
    for thisComponent in ResponseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Response" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Base_Circle* updates
        if Base_Circle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Base_Circle.frameNStart = frameN  # exact frame index
            Base_Circle.tStart = t  # local t and not account for scr refresh
            Base_Circle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Base_Circle, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Base_Circle.started')
            Base_Circle.setAutoDraw(True)
        
        # *response_key_resp* updates
        waitOnFlip = False
        if response_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response_key_resp.frameNStart = frameN  # exact frame index
            response_key_resp.tStart = t  # local t and not account for scr refresh
            response_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response_key_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'response_key_resp.started')
            response_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(response_key_resp.clock.reset)  # t=0 on next screen flip
        if response_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = response_key_resp.getKeys(keyList=['return'], waitRelease=False)
            _response_key_resp_allKeys.extend(theseKeys)
            if len(_response_key_resp_allKeys):
                response_key_resp.keys = _response_key_resp_allKeys[-1].name  # just the last key pressed
                response_key_resp.rt = _response_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        # Run 'Each Frame' code from code
        # get the presses from keybaord and thier duration
        keys = kb.getKeys(['space', 'return'], waitRelease = False, clear=False)
        
        # the size of the circle for handeling randomizationg in cm
        Small_Circle_Size = 0.012820512820512822
        #Small_Circle_Size = Small_Circle_Size*1.1-random()*Small_Circle_Size*0.2
        
        # the position of the circle for handeling randomization
        Small_Circle_Pos_X = random()*Base_Circle_Size-Base_Circle_Size/2
        Small_Circle_Pos_Y = random()*Base_Circle_Size-Base_Circle_Size/2
        
        # show the circle on screen
        for circle in Circle_List:
            circle.setAutoDraw(True)
        
        # keyboard handeling
        for thisKey in keys:
          if len(Circle_List) == Circle_Num:
            Sound_it = True
          if len(Circle_List) < Circle_Num:
            if thisKey == 'space' and space_func:
                polygon = visual.Polygon(
                          win=win, name='polygon',units='height',
                          edges=100, size=(Small_Circle_Size),
                          ori=0.0, pos=(Small_Circle_Pos_X, Small_Circle_Pos_Y),
                          lineWidth = 0,     colorSpace='rgb',  lineColor='white', fillColor='black',
                          opacity=None, depth=0.0, interpolate=True)
                overlap = False          
                for circle in Circle_List:
                    if customOverlaps(circle, polygon): 
                       overlap = True
                isInside = insideCircle(Base_Circle, polygon)       
                if not overlap and isInside:
                   Circle_List.append(polygon)
                if thisKey.duration != None:
                   space_func = False
                   kb.getKeys(clear = True)
                   keys.clear()
             
            elif thisKey == 'space' and not space_func: 
                if len(Circle_List) > 0:
                   Cir_Pop = Circle_List.pop()
                   Cir_Pop.setAutoDraw(False)
                if thisKey.duration != None:
                   space_func = True
                   kb.getKeys(clear = True)
                   keys.clear()
        
        
        # start/stop sound_1
        if sound_1.status == NOT_STARTED and Sound_it == True:
            # keep track of start time/frame for later
            sound_1.frameNStart = frameN  # exact frame index
            sound_1.tStart = t  # local t and not account for scr refresh
            sound_1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_1.started', tThisFlipGlobal)
            sound_1.play(when=win)  # sync with win flip
        if sound_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_1.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                sound_1.tStop = t  # not accounting for scr refresh
                sound_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_1.stopped')
                sound_1.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ResponseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Response" ---
    for thisComponent in ResponseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if response_key_resp.keys in ['', [], None]:  # No response was made
        response_key_resp.keys = None
    trials_2.addData('response_key_resp.keys',response_key_resp.keys)
    if response_key_resp.keys != None:  # we had a response
        trials_2.addData('response_key_resp.rt', response_key_resp.rt)
    # Run 'End Routine' code from code
    # def number of rounds for pic
    response_Pic_Num_List.append(1)
    Pic_Num = len(response_Pic_Num_List)
    Pic_Num_Text = '{}.png'.format(Pic_Num)
    
    #creating a pic
    win.getMovieFrame()
    win.saveMovieFrames(Pic_Num_Text)
    
    r2_size = []
    Positions = []
    sum_area = []
    for i in Circle_List:
        r2_size.append(i.size[0])
        Positions.append((i.pos[0], i.pos[1]))
        sum_area.append(((i.size[0]*0.5)**2)*math.pi)
    
    #zip the datat to one list:
    zipData = list(zip(r2_size, Positions))
    
    # adding important values to excle file
    thisExp.addData('nCircle', len(Circle_List))
    thisExp.addData('sum_area_Circle', sum(sum_area))
    thisExp.addData('r2_Circle_Sizes', r2_size)
    thisExp.addData('Circle_Pos', Positions)
    thisExp.addData('zipData', zipData)
    
    
    for Circle in Circle_List:
        Circle.setAutoDraw(False)
    print(Base_Circle.size)
    
    
    sound_1.stop()  # ensure sound has stopped at end of routine
    # the Routine "Response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 20.0 repeats of 'trials_2'


# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
