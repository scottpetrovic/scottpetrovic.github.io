#!/usr/bin/env python3

# the above line is required to run it on your computer. You will get security errors if you don't have it
import os
import sys
import glob # ability to find image files
from shutil import copyfile# ability to copy files
import json # final data format we wnat
import re # regular expression


dataFile = "data.json"


def hasUpperCase(initial_string):
    return bool(re.search("[A-Z]", initial_string))

def hasUnderScore(initial_string):
    for character in (initial_string):
        if character == '_':
            return True
    return False

def isCamelCase(s):
    return s != s.lower() and s != s.upper() and "_" not in s

def hasHyphen(initial_string):
    for character in (initial_string):
        if character == '-':
            return True
    return False


def replaceSnakeCaseWithCamelCase(initial_string):
    capitalize_snake = re.sub('_[a-z]', lambda x: x.group(0).title(), initial_string)
    return capitalize_snake.replace('_', '')

def replaceHyphenWithCamelCase(initial_string):
    capitalize_snake = re.sub('-[a-z]', lambda x: x.group(0).title(), initial_string)
    return capitalize_snake.replace('-', '')

def replaceUnderscoreWithCamelCase(initial_string):
    capitalize_snake = re.sub('_[a-z]', lambda x: x.group(0).title(), initial_string)
    return capitalize_snake.replace('_', '')

def camelCaseToSentenceCase(string):
    if string != '':
        result = re.sub('([A-Z])', r' \1', string)
        return result[:1].upper() + result[1:].lower()
    return

def caculateFriendlyName(input_string):
    
    if hasHyphen(input_string):
        input_string = replaceHyphenWithCamelCase(input_string) 

    if hasUnderScore(input_string):
         input_string = replaceUnderscoreWithCamelCase(input_string) 

    # convert first letter to capital
    # also convert anything after a space character to capital case
    input_string = camelCaseToSentenceCase(input_string)

    return input_string.split(".")[0]


# folders that have mesh data we potentially might want to load
glbLocations = [
	"base-meshes",
	"kenney",
	]

# export data to json file
dataToExport = []

# Loop through each location
for location in glbLocations: 
     for innerDirectory in os.listdir(location):

        # look at each sub-directory in the folder
        for locationOfGlb in os.walk(location + "/" + innerDirectory):

            # loop through each glb file
            for glbFile in locationOfGlb[2]:
                item = {
                    "glbFile": glbFile,
                    "directory": locationOfGlb[0],
                    "friendlyName": caculateFriendlyName(glbFile)
                }

                dataToExport.append(item)


with open(dataFile, 'w') as outfile:
    json.dump(dataToExport, outfile, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=4)


