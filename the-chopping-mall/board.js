/* Board coordinates and door topology transcribed from the supplied map. */
(function(root){const board={
  "width": 1600,
  "height": 1036,
  "cells": {
    "1": {
      "id": 1,
      "x": 568.5,
      "y": 60.5,
      "bounds": {
        "x": 527,
        "y": 25,
        "w": 83,
        "h": 71,
        "width": 83,
        "height": 71,
        "x0": 527,
        "y0": 25,
        "x1": 610,
        "y1": 96
      },
      "hall": false,
      "store": "Azore’s"
    },
    "2": {
      "id": 2,
      "x": 646.5,
      "y": 60.5,
      "bounds": {
        "x": 610,
        "y": 25,
        "w": 73,
        "h": 71,
        "width": 73,
        "height": 71,
        "x0": 610,
        "y0": 25,
        "x1": 683,
        "y1": 96
      },
      "hall": false,
      "store": "Eco Bank"
    },
    "3": {
      "id": 3,
      "x": 719,
      "y": 60.5,
      "bounds": {
        "x": 683,
        "y": 25,
        "w": 72,
        "h": 71,
        "width": 72,
        "height": 71,
        "x0": 683,
        "y0": 25,
        "x1": 755,
        "y1": 96
      },
      "hall": false,
      "store": "Eco Bank"
    },
    "4": {
      "id": 4,
      "x": 802.5,
      "y": 60.5,
      "bounds": {
        "x": 755,
        "y": 25,
        "w": 95,
        "h": 71,
        "width": 95,
        "height": 71,
        "x0": 755,
        "y0": 25,
        "x1": 850,
        "y1": 96
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "5": {
      "id": 5,
      "x": 886,
      "y": 60.5,
      "bounds": {
        "x": 850,
        "y": 25,
        "w": 72,
        "h": 71,
        "width": 72,
        "height": 71,
        "x0": 850,
        "y0": 25,
        "x1": 922,
        "y1": 96
      },
      "hall": false,
      "store": "Clam House"
    },
    "6": {
      "id": 6,
      "x": 959,
      "y": 60.5,
      "bounds": {
        "x": 922,
        "y": 25,
        "w": 74,
        "h": 71,
        "width": 74,
        "height": 71,
        "x0": 922,
        "y0": 25,
        "x1": 996,
        "y1": 96
      },
      "hall": false,
      "store": "Clam House"
    },
    "7": {
      "id": 7,
      "x": 1034,
      "y": 60.5,
      "bounds": {
        "x": 996,
        "y": 25,
        "w": 76,
        "h": 71,
        "width": 76,
        "height": 71,
        "x0": 996,
        "y0": 25,
        "x1": 1072,
        "y1": 96
      },
      "hall": false,
      "store": "Clam House"
    },
    "8": {
      "id": 8,
      "x": 568.5,
      "y": 131.5,
      "bounds": {
        "x": 527,
        "y": 96,
        "w": 83,
        "h": 71,
        "width": 83,
        "height": 71,
        "x0": 527,
        "y0": 96,
        "x1": 610,
        "y1": 167
      },
      "hall": false,
      "store": "Azore’s"
    },
    "9": {
      "id": 9,
      "x": 646.5,
      "y": 131.5,
      "bounds": {
        "x": 610,
        "y": 96,
        "w": 73,
        "h": 71,
        "width": 73,
        "height": 71,
        "x0": 610,
        "y0": 96,
        "x1": 683,
        "y1": 167
      },
      "hall": false,
      "store": "Superlative Sportswear"
    },
    "10": {
      "id": 10,
      "x": 719,
      "y": 131.5,
      "bounds": {
        "x": 683,
        "y": 96,
        "w": 72,
        "h": 71,
        "width": 72,
        "height": 71,
        "x0": 683,
        "y0": 96,
        "x1": 755,
        "y1": 167
      },
      "hall": false,
      "store": "Games for All, Inc."
    },
    "11": {
      "id": 11,
      "x": 802.5,
      "y": 131.5,
      "bounds": {
        "x": 755,
        "y": 96,
        "w": 95,
        "h": 71,
        "width": 95,
        "height": 71,
        "x0": 755,
        "y0": 96,
        "x1": 850,
        "y1": 167
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "12": {
      "id": 12,
      "x": 886,
      "y": 131.5,
      "bounds": {
        "x": 850,
        "y": 96,
        "w": 72,
        "h": 71,
        "width": 72,
        "height": 71,
        "x0": 850,
        "y0": 96,
        "x1": 922,
        "y1": 167
      },
      "hall": false,
      "store": "Flo’s"
    },
    "13": {
      "id": 13,
      "x": 959,
      "y": 131.5,
      "bounds": {
        "x": 922,
        "y": 96,
        "w": 74,
        "h": 71,
        "width": 74,
        "height": 71,
        "x0": 922,
        "y0": 96,
        "x1": 996,
        "y1": 167
      },
      "hall": false,
      "store": "Flo’s"
    },
    "14": {
      "id": 14,
      "x": 1034,
      "y": 131.5,
      "bounds": {
        "x": 996,
        "y": 96,
        "w": 76,
        "h": 71,
        "width": 76,
        "height": 71,
        "x0": 996,
        "y0": 96,
        "x1": 1072,
        "y1": 167
      },
      "hall": false,
      "store": "Cheese City"
    },
    "15": {
      "id": 15,
      "x": 64,
      "y": 203.5,
      "bounds": {
        "x": 20,
        "y": 167,
        "w": 88,
        "h": 73,
        "width": 88,
        "height": 73,
        "x0": 20,
        "y0": 167,
        "x1": 108,
        "y1": 240
      },
      "hall": false,
      "store": "Strictly Limited"
    },
    "16": {
      "id": 16,
      "x": 149.5,
      "y": 203.5,
      "bounds": {
        "x": 108,
        "y": 167,
        "w": 83,
        "h": 73,
        "width": 83,
        "height": 73,
        "x0": 108,
        "y0": 167,
        "x1": 191,
        "y1": 240
      },
      "hall": false,
      "store": "Di Pompedor Bar & Restaurant"
    },
    "17": {
      "id": 17,
      "x": 232,
      "y": 203.5,
      "bounds": {
        "x": 191,
        "y": 167,
        "w": 82,
        "h": 73,
        "width": 82,
        "height": 73,
        "x0": 191,
        "y0": 167,
        "x1": 273,
        "y1": 240
      },
      "hall": false,
      "store": "Di Pompedor Bar & Restaurant"
    },
    "18": {
      "id": 18,
      "x": 316.5,
      "y": 203.5,
      "bounds": {
        "x": 273,
        "y": 167,
        "w": 87,
        "h": 73,
        "width": 87,
        "height": 73,
        "x0": 273,
        "y0": 167,
        "x1": 360,
        "y1": 240
      },
      "hall": false,
      "store": "Kitchen"
    },
    "19": {
      "id": 19,
      "x": 401,
      "y": 203.5,
      "bounds": {
        "x": 360,
        "y": 167,
        "w": 82,
        "h": 73,
        "width": 82,
        "height": 73,
        "x0": 360,
        "y0": 167,
        "x1": 442,
        "y1": 240
      },
      "hall": false,
      "store": "Boyer’s"
    },
    "20": {
      "id": 20,
      "x": 484.5,
      "y": 203.5,
      "bounds": {
        "x": 442,
        "y": 167,
        "w": 85,
        "h": 73,
        "width": 85,
        "height": 73,
        "x0": 442,
        "y0": 167,
        "x1": 527,
        "y1": 240
      },
      "hall": false,
      "store": "Boyer’s"
    },
    "21": {
      "id": 21,
      "x": 568.5,
      "y": 203.5,
      "bounds": {
        "x": 527,
        "y": 167,
        "w": 83,
        "h": 73,
        "width": 83,
        "height": 73,
        "x0": 527,
        "y0": 167,
        "x1": 610,
        "y1": 240
      },
      "hall": false,
      "store": "Azore’s"
    },
    "22": {
      "id": 22,
      "x": 646.5,
      "y": 203.5,
      "bounds": {
        "x": 610,
        "y": 167,
        "w": 73,
        "h": 73,
        "width": 73,
        "height": 73,
        "x0": 610,
        "y0": 167,
        "x1": 683,
        "y1": 240
      },
      "hall": false,
      "store": "Superlative Sportswear"
    },
    "23": {
      "id": 23,
      "x": 719,
      "y": 203.5,
      "bounds": {
        "x": 683,
        "y": 167,
        "w": 72,
        "h": 73,
        "width": 72,
        "height": 73,
        "x0": 683,
        "y0": 167,
        "x1": 755,
        "y1": 240
      },
      "hall": false,
      "store": "Games for All, Inc."
    },
    "24": {
      "id": 24,
      "x": 802.5,
      "y": 203.5,
      "bounds": {
        "x": 755,
        "y": 167,
        "w": 95,
        "h": 73,
        "width": 95,
        "height": 73,
        "x0": 755,
        "y0": 167,
        "x1": 850,
        "y1": 240
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "25": {
      "id": 25,
      "x": 886,
      "y": 203.5,
      "bounds": {
        "x": 850,
        "y": 167,
        "w": 72,
        "h": 73,
        "width": 72,
        "height": 73,
        "x0": 850,
        "y0": 167,
        "x1": 922,
        "y1": 240
      },
      "hall": false,
      "store": "Flo’s"
    },
    "26": {
      "id": 26,
      "x": 959,
      "y": 203.5,
      "bounds": {
        "x": 922,
        "y": 167,
        "w": 74,
        "h": 73,
        "width": 74,
        "height": 73,
        "x0": 922,
        "y0": 167,
        "x1": 996,
        "y1": 240
      },
      "hall": false,
      "store": "Flo’s"
    },
    "27": {
      "id": 27,
      "x": 1034,
      "y": 203.5,
      "bounds": {
        "x": 996,
        "y": 167,
        "w": 76,
        "h": 73,
        "width": 76,
        "height": 73,
        "x0": 996,
        "y0": 167,
        "x1": 1072,
        "y1": 240
      },
      "hall": false,
      "store": "Cheese City"
    },
    "28": {
      "id": 28,
      "x": 1118,
      "y": 203.5,
      "bounds": {
        "x": 1072,
        "y": 167,
        "w": 92,
        "h": 73,
        "width": 92,
        "height": 73,
        "x0": 1072,
        "y0": 167,
        "x1": 1164,
        "y1": 240
      },
      "hall": false,
      "store": "Offices"
    },
    "29": {
      "id": 29,
      "x": 1205.5,
      "y": 203.5,
      "bounds": {
        "x": 1164,
        "y": 167,
        "w": 83,
        "h": 73,
        "width": 83,
        "height": 73,
        "x0": 1164,
        "y0": 167,
        "x1": 1247,
        "y1": 240
      },
      "hall": false,
      "store": "Offices"
    },
    "30": {
      "id": 30,
      "x": 1289.5,
      "y": 203.5,
      "bounds": {
        "x": 1247,
        "y": 167,
        "w": 85,
        "h": 73,
        "width": 85,
        "height": 73,
        "x0": 1247,
        "y0": 167,
        "x1": 1332,
        "y1": 240
      },
      "hall": false,
      "store": "Offices"
    },
    "31": {
      "id": 31,
      "x": 1373.5,
      "y": 203.5,
      "bounds": {
        "x": 1332,
        "y": 167,
        "w": 83,
        "h": 73,
        "width": 83,
        "height": 73,
        "x0": 1332,
        "y0": 167,
        "x1": 1415,
        "y1": 240
      },
      "hall": false,
      "store": "Offices"
    },
    "32": {
      "id": 32,
      "x": 1456.5,
      "y": 203.5,
      "bounds": {
        "x": 1415,
        "y": 167,
        "w": 83,
        "h": 73,
        "width": 83,
        "height": 73,
        "x0": 1415,
        "y0": 167,
        "x1": 1498,
        "y1": 240
      },
      "hall": false,
      "store": "Offices"
    },
    "33": {
      "id": 33,
      "x": 1540.5,
      "y": 203.5,
      "bounds": {
        "x": 1498,
        "y": 167,
        "w": 85,
        "h": 73,
        "width": 85,
        "height": 73,
        "x0": 1498,
        "y0": 167,
        "x1": 1583,
        "y1": 240
      },
      "hall": false,
      "store": "Offices"
    },
    "34": {
      "id": 34,
      "x": 64,
      "y": 280.5,
      "bounds": {
        "x": 20,
        "y": 240,
        "w": 88,
        "h": 81,
        "width": 88,
        "height": 81,
        "x0": 20,
        "y0": 240,
        "x1": 108,
        "y1": 321
      },
      "hall": false,
      "store": "Strictly Limited"
    },
    "35": {
      "id": 35,
      "x": 149.5,
      "y": 280.5,
      "bounds": {
        "x": 108,
        "y": 240,
        "w": 83,
        "h": 81,
        "width": 83,
        "height": 81,
        "x0": 108,
        "y0": 240,
        "x1": 191,
        "y1": 321
      },
      "hall": false,
      "store": "Di Pompedor Bar & Restaurant"
    },
    "36": {
      "id": 36,
      "x": 232,
      "y": 280.5,
      "bounds": {
        "x": 191,
        "y": 240,
        "w": 82,
        "h": 81,
        "width": 82,
        "height": 81,
        "x0": 191,
        "y0": 240,
        "x1": 273,
        "y1": 321
      },
      "hall": false,
      "store": "Di Pompedor Bar & Restaurant"
    },
    "37": {
      "id": 37,
      "x": 316.5,
      "y": 280.5,
      "bounds": {
        "x": 273,
        "y": 240,
        "w": 87,
        "h": 81,
        "width": 87,
        "height": 81,
        "x0": 273,
        "y0": 240,
        "x1": 360,
        "y1": 321
      },
      "hall": false,
      "store": "Kitchen"
    },
    "38": {
      "id": 38,
      "x": 401,
      "y": 280.5,
      "bounds": {
        "x": 360,
        "y": 240,
        "w": 82,
        "h": 81,
        "width": 82,
        "height": 81,
        "x0": 360,
        "y0": 240,
        "x1": 442,
        "y1": 321
      },
      "hall": false,
      "store": "Boyer’s"
    },
    "39": {
      "id": 39,
      "x": 484.5,
      "y": 280.5,
      "bounds": {
        "x": 442,
        "y": 240,
        "w": 85,
        "h": 81,
        "width": 85,
        "height": 81,
        "x0": 442,
        "y0": 240,
        "x1": 527,
        "y1": 321
      },
      "hall": false,
      "store": "Boyer’s"
    },
    "40": {
      "id": 40,
      "x": 568.5,
      "y": 280.5,
      "bounds": {
        "x": 527,
        "y": 240,
        "w": 83,
        "h": 81,
        "width": 83,
        "height": 81,
        "x0": 527,
        "y0": 240,
        "x1": 610,
        "y1": 321
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "41": {
      "id": 41,
      "x": 646.5,
      "y": 280.5,
      "bounds": {
        "x": 610,
        "y": 240,
        "w": 73,
        "h": 81,
        "width": 73,
        "height": 81,
        "x0": 610,
        "y0": 240,
        "x1": 683,
        "y1": 321
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "42": {
      "id": 42,
      "x": 719,
      "y": 280.5,
      "bounds": {
        "x": 683,
        "y": 240,
        "w": 72,
        "h": 81,
        "width": 72,
        "height": 81,
        "x0": 683,
        "y0": 240,
        "x1": 755,
        "y1": 321
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "43": {
      "id": 43,
      "x": 802.5,
      "y": 280.5,
      "bounds": {
        "x": 755,
        "y": 240,
        "w": 95,
        "h": 81,
        "width": 95,
        "height": 81,
        "x0": 755,
        "y0": 240,
        "x1": 850,
        "y1": 321
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "44": {
      "id": 44,
      "x": 886,
      "y": 280.5,
      "bounds": {
        "x": 850,
        "y": 240,
        "w": 72,
        "h": 81,
        "width": 72,
        "height": 81,
        "x0": 850,
        "y0": 240,
        "x1": 922,
        "y1": 321
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "45": {
      "id": 45,
      "x": 959,
      "y": 280.5,
      "bounds": {
        "x": 922,
        "y": 240,
        "w": 74,
        "h": 81,
        "width": 74,
        "height": 81,
        "x0": 922,
        "y0": 240,
        "x1": 996,
        "y1": 321
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "46": {
      "id": 46,
      "x": 1034,
      "y": 280.5,
      "bounds": {
        "x": 996,
        "y": 240,
        "w": 76,
        "h": 81,
        "width": 76,
        "height": 81,
        "x0": 996,
        "y0": 240,
        "x1": 1072,
        "y1": 321
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "47": {
      "id": 47,
      "x": 1118,
      "y": 280.5,
      "bounds": {
        "x": 1072,
        "y": 240,
        "w": 92,
        "h": 81,
        "width": 92,
        "height": 81,
        "x0": 1072,
        "y0": 240,
        "x1": 1164,
        "y1": 321
      },
      "hall": false,
      "store": "Offices"
    },
    "48": {
      "id": 48,
      "x": 1205.5,
      "y": 280.5,
      "bounds": {
        "x": 1164,
        "y": 240,
        "w": 83,
        "h": 81,
        "width": 83,
        "height": 81,
        "x0": 1164,
        "y0": 240,
        "x1": 1247,
        "y1": 321
      },
      "hall": false,
      "store": "Offices"
    },
    "49": {
      "id": 49,
      "x": 1289.5,
      "y": 280.5,
      "bounds": {
        "x": 1247,
        "y": 240,
        "w": 85,
        "h": 81,
        "width": 85,
        "height": 81,
        "x0": 1247,
        "y0": 240,
        "x1": 1332,
        "y1": 321
      },
      "hall": false,
      "store": "Offices"
    },
    "50": {
      "id": 50,
      "x": 1373.5,
      "y": 280.5,
      "bounds": {
        "x": 1332,
        "y": 240,
        "w": 83,
        "h": 81,
        "width": 83,
        "height": 81,
        "x0": 1332,
        "y0": 240,
        "x1": 1415,
        "y1": 321
      },
      "hall": false,
      "store": "Offices"
    },
    "51": {
      "id": 51,
      "x": 1456.5,
      "y": 280.5,
      "bounds": {
        "x": 1415,
        "y": 240,
        "w": 83,
        "h": 81,
        "width": 83,
        "height": 81,
        "x0": 1415,
        "y0": 240,
        "x1": 1498,
        "y1": 321
      },
      "hall": false,
      "store": "Offices"
    },
    "52": {
      "id": 52,
      "x": 1540.5,
      "y": 280.5,
      "bounds": {
        "x": 1498,
        "y": 240,
        "w": 85,
        "h": 81,
        "width": 85,
        "height": 81,
        "x0": 1498,
        "y0": 240,
        "x1": 1583,
        "y1": 321
      },
      "hall": false,
      "store": "Offices"
    },
    "53": {
      "id": 53,
      "x": 64,
      "y": 357,
      "bounds": {
        "x": 20,
        "y": 321,
        "w": 88,
        "h": 72,
        "width": 88,
        "height": 72,
        "x0": 20,
        "y0": 321,
        "x1": 108,
        "y1": 393
      },
      "hall": false,
      "store": "Strictly Limited"
    },
    "54": {
      "id": 54,
      "x": 149.5,
      "y": 357,
      "bounds": {
        "x": 108,
        "y": 321,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 108,
        "y0": 321,
        "x1": 191,
        "y1": 393
      },
      "hall": false,
      "store": "Di Pompedor Bar & Restaurant"
    },
    "55": {
      "id": 55,
      "x": 232,
      "y": 357,
      "bounds": {
        "x": 191,
        "y": 321,
        "w": 82,
        "h": 72,
        "width": 82,
        "height": 72,
        "x0": 191,
        "y0": 321,
        "x1": 273,
        "y1": 393
      },
      "hall": false,
      "store": "Carty’s Art Gallery"
    },
    "56": {
      "id": 56,
      "x": 316.5,
      "y": 357,
      "bounds": {
        "x": 273,
        "y": 321,
        "w": 87,
        "h": 72,
        "width": 87,
        "height": 72,
        "x0": 273,
        "y0": 321,
        "x1": 360,
        "y1": 393
      },
      "hall": false,
      "store": "Audio Center"
    },
    "57": {
      "id": 57,
      "x": 401,
      "y": 357,
      "bounds": {
        "x": 360,
        "y": 321,
        "w": 82,
        "h": 72,
        "width": 82,
        "height": 72,
        "x0": 360,
        "y0": 321,
        "x1": 442,
        "y1": 393
      },
      "hall": false,
      "store": "Audio Center"
    },
    "58": {
      "id": 58,
      "x": 484.5,
      "y": 357,
      "bounds": {
        "x": 442,
        "y": 321,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 442,
        "y0": 321,
        "x1": 527,
        "y1": 393
      },
      "hall": false,
      "store": "Audio Center"
    },
    "59": {
      "id": 59,
      "x": 568.5,
      "y": 357,
      "bounds": {
        "x": 527,
        "y": 321,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 527,
        "y0": 321,
        "x1": 610,
        "y1": 393
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "60": {
      "id": 60,
      "x": 646.5,
      "y": 357,
      "bounds": {
        "x": 610,
        "y": 321,
        "w": 73,
        "h": 72,
        "width": 73,
        "height": 72,
        "x0": 610,
        "y0": 321,
        "x1": 683,
        "y1": 393
      },
      "hall": false,
      "store": "Goalie Deli"
    },
    "61": {
      "id": 61,
      "x": 719,
      "y": 357,
      "bounds": {
        "x": 683,
        "y": 321,
        "w": 72,
        "h": 72,
        "width": 72,
        "height": 72,
        "x0": 683,
        "y0": 321,
        "x1": 755,
        "y1": 393
      },
      "hall": false,
      "store": "Donuts"
    },
    "62": {
      "id": 62,
      "x": 782,
      "y": 357,
      "bounds": {
        "x": 755,
        "y": 321,
        "w": 54,
        "h": 72,
        "width": 54,
        "height": 72,
        "x0": 755,
        "y0": 321,
        "x1": 809,
        "y1": 393
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "63": {
      "id": 63,
      "x": 829.5,
      "y": 357,
      "bounds": {
        "x": 809,
        "y": 321,
        "w": 41,
        "h": 72,
        "width": 41,
        "height": 72,
        "x0": 809,
        "y0": 321,
        "x1": 850,
        "y1": 393
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "64": {
      "id": 64,
      "x": 886,
      "y": 357,
      "bounds": {
        "x": 850,
        "y": 321,
        "w": 72,
        "h": 72,
        "width": 72,
        "height": 72,
        "x0": 850,
        "y0": 321,
        "x1": 922,
        "y1": 393
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "65": {
      "id": 65,
      "x": 959,
      "y": 357,
      "bounds": {
        "x": 922,
        "y": 321,
        "w": 74,
        "h": 72,
        "width": 74,
        "height": 72,
        "x0": 922,
        "y0": 321,
        "x1": 996,
        "y1": 393
      },
      "hall": false,
      "store": "All Aboard Travel"
    },
    "66": {
      "id": 66,
      "x": 1034,
      "y": 357,
      "bounds": {
        "x": 996,
        "y": 321,
        "w": 76,
        "h": 72,
        "width": 76,
        "height": 72,
        "x0": 996,
        "y0": 321,
        "x1": 1072,
        "y1": 393
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "67": {
      "id": 67,
      "x": 1118,
      "y": 357,
      "bounds": {
        "x": 1072,
        "y": 321,
        "w": 92,
        "h": 72,
        "width": 92,
        "height": 72,
        "x0": 1072,
        "y0": 321,
        "x1": 1164,
        "y1": 393
      },
      "hall": false,
      "store": "Miscellany II"
    },
    "68": {
      "id": 68,
      "x": 1205.5,
      "y": 357,
      "bounds": {
        "x": 1164,
        "y": 321,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1164,
        "y0": 321,
        "x1": 1247,
        "y1": 393
      },
      "hall": false,
      "store": "Miscellany II"
    },
    "69": {
      "id": 69,
      "x": 1289.5,
      "y": 357,
      "bounds": {
        "x": 1247,
        "y": 321,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 1247,
        "y0": 321,
        "x1": 1332,
        "y1": 393
      },
      "hall": false,
      "store": "Miscellany II"
    },
    "70": {
      "id": 70,
      "x": 1373.5,
      "y": 357,
      "bounds": {
        "x": 1332,
        "y": 321,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1332,
        "y0": 321,
        "x1": 1415,
        "y1": 393
      },
      "hall": false,
      "store": "Costly Drugs"
    },
    "71": {
      "id": 71,
      "x": 1456.5,
      "y": 357,
      "bounds": {
        "x": 1415,
        "y": 321,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1415,
        "y0": 321,
        "x1": 1498,
        "y1": 393
      },
      "hall": false,
      "store": "Radio Shanty"
    },
    "72": {
      "id": 72,
      "x": 1540.5,
      "y": 357,
      "bounds": {
        "x": 1498,
        "y": 321,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 1498,
        "y0": 321,
        "x1": 1583,
        "y1": 393
      },
      "hall": false,
      "store": "Radio Shanty"
    },
    "73": {
      "id": 73,
      "x": 64,
      "y": 429,
      "bounds": {
        "x": 20,
        "y": 393,
        "w": 88,
        "h": 72,
        "width": 88,
        "height": 72,
        "x0": 20,
        "y0": 393,
        "x1": 108,
        "y1": 465
      },
      "hall": false,
      "store": "Strictly Limited"
    },
    "74": {
      "id": 74,
      "x": 149.5,
      "y": 429,
      "bounds": {
        "x": 108,
        "y": 393,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 108,
        "y0": 393,
        "x1": 191,
        "y1": 465
      },
      "hall": false,
      "store": "Di Pompedor Bar & Restaurant"
    },
    "75": {
      "id": 75,
      "x": 232,
      "y": 429,
      "bounds": {
        "x": 191,
        "y": 393,
        "w": 82,
        "h": 72,
        "width": 82,
        "height": 72,
        "x0": 191,
        "y0": 393,
        "x1": 273,
        "y1": 465
      },
      "hall": false,
      "store": "Carty’s Art Gallery"
    },
    "76": {
      "id": 76,
      "x": 316.5,
      "y": 429,
      "bounds": {
        "x": 273,
        "y": 393,
        "w": 87,
        "h": 72,
        "width": 87,
        "height": 72,
        "x0": 273,
        "y0": 393,
        "x1": 360,
        "y1": 465
      },
      "hall": false,
      "store": "Cobbler Shoes"
    },
    "77": {
      "id": 77,
      "x": 401,
      "y": 429,
      "bounds": {
        "x": 360,
        "y": 393,
        "w": 82,
        "h": 72,
        "width": 82,
        "height": 72,
        "x0": 360,
        "y0": 393,
        "x1": 442,
        "y1": 465
      },
      "hall": false,
      "store": "Cobbler Shoes"
    },
    "78": {
      "id": 78,
      "x": 484.5,
      "y": 429,
      "bounds": {
        "x": 442,
        "y": 393,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 442,
        "y0": 393,
        "x1": 527,
        "y1": 465
      },
      "hall": false,
      "store": "Cobbler Shoes"
    },
    "79": {
      "id": 79,
      "x": 568.5,
      "y": 429,
      "bounds": {
        "x": 527,
        "y": 393,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 527,
        "y0": 393,
        "x1": 610,
        "y1": 465
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "80": {
      "id": 80,
      "x": 646.5,
      "y": 429,
      "bounds": {
        "x": 610,
        "y": 393,
        "w": 73,
        "h": 72,
        "width": 73,
        "height": 72,
        "x0": 610,
        "y0": 393,
        "x1": 683,
        "y1": 465
      },
      "hall": false,
      "store": "33 Flavors"
    },
    "81": {
      "id": 81,
      "x": 719,
      "y": 429,
      "bounds": {
        "x": 683,
        "y": 393,
        "w": 72,
        "h": 72,
        "width": 72,
        "height": 72,
        "x0": 683,
        "y0": 393,
        "x1": 755,
        "y1": 465
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "82": {
      "id": 82,
      "x": 782,
      "y": 429,
      "bounds": {
        "x": 755,
        "y": 393,
        "w": 54,
        "h": 72,
        "width": 54,
        "height": 72,
        "x0": 755,
        "y0": 393,
        "x1": 809,
        "y1": 465
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "83": {
      "id": 83,
      "x": 829.5,
      "y": 429,
      "bounds": {
        "x": 809,
        "y": 393,
        "w": 41,
        "h": 72,
        "width": 41,
        "height": 72,
        "x0": 809,
        "y0": 393,
        "x1": 850,
        "y1": 465
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "84": {
      "id": 84,
      "x": 886,
      "y": 429,
      "bounds": {
        "x": 850,
        "y": 393,
        "w": 72,
        "h": 72,
        "width": 72,
        "height": 72,
        "x0": 850,
        "y0": 393,
        "x1": 922,
        "y1": 465
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "85": {
      "id": 85,
      "x": 959,
      "y": 429,
      "bounds": {
        "x": 922,
        "y": 393,
        "w": 74,
        "h": 72,
        "width": 74,
        "height": 72,
        "x0": 922,
        "y0": 393,
        "x1": 996,
        "y1": 465
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "86": {
      "id": 86,
      "x": 1034,
      "y": 429,
      "bounds": {
        "x": 996,
        "y": 393,
        "w": 76,
        "h": 72,
        "width": 76,
        "height": 72,
        "x0": 996,
        "y0": 393,
        "x1": 1072,
        "y1": 465
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "87": {
      "id": 87,
      "x": 1118,
      "y": 429,
      "bounds": {
        "x": 1072,
        "y": 393,
        "w": 92,
        "h": 72,
        "width": 92,
        "height": 72,
        "x0": 1072,
        "y0": 393,
        "x1": 1164,
        "y1": 465
      },
      "hall": false,
      "store": "The Youthful Idea"
    },
    "88": {
      "id": 88,
      "x": 1205.5,
      "y": 429,
      "bounds": {
        "x": 1164,
        "y": 393,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1164,
        "y0": 393,
        "x1": 1247,
        "y1": 465
      },
      "hall": false,
      "store": "Doggies Galore"
    },
    "89": {
      "id": 89,
      "x": 1289.5,
      "y": 429,
      "bounds": {
        "x": 1247,
        "y": 393,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 1247,
        "y0": 393,
        "x1": 1332,
        "y1": 465
      },
      "hall": false,
      "store": "Costly Drugs"
    },
    "90": {
      "id": 90,
      "x": 1373.5,
      "y": 429,
      "bounds": {
        "x": 1332,
        "y": 393,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1332,
        "y0": 393,
        "x1": 1415,
        "y1": 465
      },
      "hall": false,
      "store": "Costly Drugs"
    },
    "91": {
      "id": 91,
      "x": 1456.5,
      "y": 429,
      "bounds": {
        "x": 1415,
        "y": 393,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1415,
        "y0": 393,
        "x1": 1498,
        "y1": 465
      },
      "hall": false,
      "store": "Radio Shanty"
    },
    "92": {
      "id": 92,
      "x": 1540.5,
      "y": 429,
      "bounds": {
        "x": 1498,
        "y": 393,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 1498,
        "y0": 393,
        "x1": 1583,
        "y1": 465
      },
      "hall": false,
      "store": "Radio Shanty"
    },
    "93": {
      "id": 93,
      "x": 64,
      "y": 510,
      "bounds": {
        "x": 20,
        "y": 465,
        "w": 88,
        "h": 90,
        "width": 88,
        "height": 90,
        "x0": 20,
        "y0": 465,
        "x1": 108,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "94": {
      "id": 94,
      "x": 149.5,
      "y": 510,
      "bounds": {
        "x": 108,
        "y": 465,
        "w": 83,
        "h": 90,
        "width": 83,
        "height": 90,
        "x0": 108,
        "y0": 465,
        "x1": 191,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "95": {
      "id": 95,
      "x": 232,
      "y": 510,
      "bounds": {
        "x": 191,
        "y": 465,
        "w": 82,
        "h": 90,
        "width": 82,
        "height": 90,
        "x0": 191,
        "y0": 465,
        "x1": 273,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "96": {
      "id": 96,
      "x": 316.5,
      "y": 510,
      "bounds": {
        "x": 273,
        "y": 465,
        "w": 87,
        "h": 90,
        "width": 87,
        "height": 90,
        "x0": 273,
        "y0": 465,
        "x1": 360,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "97": {
      "id": 97,
      "x": 401,
      "y": 510,
      "bounds": {
        "x": 360,
        "y": 465,
        "w": 82,
        "h": 90,
        "width": 82,
        "height": 90,
        "x0": 360,
        "y0": 465,
        "x1": 442,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "98": {
      "id": 98,
      "x": 484.5,
      "y": 510,
      "bounds": {
        "x": 442,
        "y": 465,
        "w": 85,
        "h": 90,
        "width": 85,
        "height": 90,
        "x0": 442,
        "y0": 465,
        "x1": 527,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "99": {
      "id": 99,
      "x": 568.5,
      "y": 510,
      "bounds": {
        "x": 527,
        "y": 465,
        "w": 83,
        "h": 90,
        "width": 83,
        "height": 90,
        "x0": 527,
        "y0": 465,
        "x1": 610,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "100": {
      "id": 100,
      "x": 646.5,
      "y": 510,
      "bounds": {
        "x": 610,
        "y": 465,
        "w": 73,
        "h": 90,
        "width": 73,
        "height": 90,
        "x0": 610,
        "y0": 465,
        "x1": 683,
        "y1": 555
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "101": {
      "id": 101,
      "x": 714,
      "y": 488,
      "bounds": {
        "x": 683,
        "y": 465,
        "w": 62,
        "h": 46,
        "width": 62,
        "height": 46,
        "x0": 683,
        "y0": 465,
        "x1": 745,
        "y1": 511
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "102": {
      "id": 102,
      "x": 773.5,
      "y": 488,
      "bounds": {
        "x": 745,
        "y": 465,
        "w": 57,
        "h": 46,
        "width": 57,
        "height": 46,
        "x0": 745,
        "y0": 465,
        "x1": 802,
        "y1": 511
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "103": {
      "id": 103,
      "x": 830.5,
      "y": 488,
      "bounds": {
        "x": 802,
        "y": 465,
        "w": 57,
        "h": 46,
        "width": 57,
        "height": 46,
        "x0": 802,
        "y0": 465,
        "x1": 859,
        "y1": 511
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "104": {
      "id": 104,
      "x": 890.5,
      "y": 488,
      "bounds": {
        "x": 859,
        "y": 465,
        "w": 63,
        "h": 46,
        "width": 63,
        "height": 46,
        "x0": 859,
        "y0": 465,
        "x1": 922,
        "y1": 511
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "105": {
      "id": 105,
      "x": 959,
      "y": 488,
      "bounds": {
        "x": 922,
        "y": 465,
        "w": 74,
        "h": 46,
        "width": 74,
        "height": 46,
        "x0": 922,
        "y0": 465,
        "x1": 996,
        "y1": 511
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "106": {
      "id": 106,
      "x": 714,
      "y": 542,
      "bounds": {
        "x": 683,
        "y": 511,
        "w": 62,
        "h": 62,
        "width": 62,
        "height": 62,
        "x0": 683,
        "y0": 511,
        "x1": 745,
        "y1": 573
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "107": {
      "id": 107,
      "x": 773.5,
      "y": 542,
      "bounds": {
        "x": 745,
        "y": 511,
        "w": 57,
        "h": 62,
        "width": 57,
        "height": 62,
        "x0": 745,
        "y0": 511,
        "x1": 802,
        "y1": 573
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "108": {
      "id": 108,
      "x": 830.5,
      "y": 542,
      "bounds": {
        "x": 802,
        "y": 511,
        "w": 57,
        "h": 62,
        "width": 57,
        "height": 62,
        "x0": 802,
        "y0": 511,
        "x1": 859,
        "y1": 573
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "109": {
      "id": 109,
      "x": 890.5,
      "y": 542,
      "bounds": {
        "x": 859,
        "y": 511,
        "w": 63,
        "h": 62,
        "width": 63,
        "height": 62,
        "x0": 859,
        "y0": 511,
        "x1": 922,
        "y1": 573
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "110": {
      "id": 110,
      "x": 959,
      "y": 542,
      "bounds": {
        "x": 922,
        "y": 511,
        "w": 74,
        "h": 62,
        "width": 74,
        "height": 62,
        "x0": 922,
        "y0": 511,
        "x1": 996,
        "y1": 573
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "111": {
      "id": 111,
      "x": 1034,
      "y": 510,
      "bounds": {
        "x": 996,
        "y": 465,
        "w": 76,
        "h": 90,
        "width": 76,
        "height": 90,
        "x0": 996,
        "y0": 465,
        "x1": 1072,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "112": {
      "id": 112,
      "x": 1118,
      "y": 510,
      "bounds": {
        "x": 1072,
        "y": 465,
        "w": 92,
        "h": 90,
        "width": 92,
        "height": 90,
        "x0": 1072,
        "y0": 465,
        "x1": 1164,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "113": {
      "id": 113,
      "x": 1205.5,
      "y": 510,
      "bounds": {
        "x": 1164,
        "y": 465,
        "w": 83,
        "h": 90,
        "width": 83,
        "height": 90,
        "x0": 1164,
        "y0": 465,
        "x1": 1247,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "114": {
      "id": 114,
      "x": 1289.5,
      "y": 510,
      "bounds": {
        "x": 1247,
        "y": 465,
        "w": 85,
        "h": 90,
        "width": 85,
        "height": 90,
        "x0": 1247,
        "y0": 465,
        "x1": 1332,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "115": {
      "id": 115,
      "x": 1373.5,
      "y": 510,
      "bounds": {
        "x": 1332,
        "y": 465,
        "w": 83,
        "h": 90,
        "width": 83,
        "height": 90,
        "x0": 1332,
        "y0": 465,
        "x1": 1415,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "116": {
      "id": 116,
      "x": 1456.5,
      "y": 510,
      "bounds": {
        "x": 1415,
        "y": 465,
        "w": 83,
        "h": 90,
        "width": 83,
        "height": 90,
        "x0": 1415,
        "y0": 465,
        "x1": 1498,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "117": {
      "id": 117,
      "x": 1540.5,
      "y": 510,
      "bounds": {
        "x": 1498,
        "y": 465,
        "w": 85,
        "h": 90,
        "width": 85,
        "height": 90,
        "x0": 1498,
        "y0": 465,
        "x1": 1583,
        "y1": 555
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "118": {
      "id": 118,
      "x": 64,
      "y": 593,
      "bounds": {
        "x": 20,
        "y": 555,
        "w": 88,
        "h": 76,
        "width": 88,
        "height": 76,
        "x0": 20,
        "y0": 555,
        "x1": 108,
        "y1": 631
      },
      "hall": false,
      "store": "Record Loft"
    },
    "119": {
      "id": 119,
      "x": 149.5,
      "y": 593,
      "bounds": {
        "x": 108,
        "y": 555,
        "w": 83,
        "h": 76,
        "width": 83,
        "height": 76,
        "x0": 108,
        "y0": 555,
        "x1": 191,
        "y1": 631
      },
      "hall": false,
      "store": "Expectation Maternity"
    },
    "120": {
      "id": 120,
      "x": 232,
      "y": 593,
      "bounds": {
        "x": 191,
        "y": 555,
        "w": 82,
        "h": 76,
        "width": 82,
        "height": 76,
        "x0": 191,
        "y0": 555,
        "x1": 273,
        "y1": 631
      },
      "hall": false,
      "store": "Acme Sewing Center"
    },
    "121": {
      "id": 121,
      "x": 316.5,
      "y": 593,
      "bounds": {
        "x": 273,
        "y": 555,
        "w": 87,
        "h": 76,
        "width": 87,
        "height": 76,
        "x0": 273,
        "y0": 555,
        "x1": 360,
        "y1": 631
      },
      "hall": false,
      "store": "Acme Sewing Center"
    },
    "122": {
      "id": 122,
      "x": 401,
      "y": 593,
      "bounds": {
        "x": 360,
        "y": 555,
        "w": 82,
        "h": 76,
        "width": 82,
        "height": 76,
        "x0": 360,
        "y0": 555,
        "x1": 442,
        "y1": 631
      },
      "hall": false,
      "store": "Acme Sewing Center"
    },
    "123": {
      "id": 123,
      "x": 484.5,
      "y": 593,
      "bounds": {
        "x": 442,
        "y": 555,
        "w": 85,
        "h": 76,
        "width": 85,
        "height": 76,
        "x0": 442,
        "y0": 555,
        "x1": 527,
        "y1": 631
      },
      "hall": false,
      "store": "Collector’s Corner"
    },
    "124": {
      "id": 124,
      "x": 568.5,
      "y": 593,
      "bounds": {
        "x": 527,
        "y": 555,
        "w": 83,
        "h": 76,
        "width": 83,
        "height": 76,
        "x0": 527,
        "y0": 555,
        "x1": 610,
        "y1": 631
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "125": {
      "id": 125,
      "x": 646.5,
      "y": 593,
      "bounds": {
        "x": 610,
        "y": 555,
        "w": 73,
        "h": 76,
        "width": 73,
        "height": 76,
        "x0": 610,
        "y0": 555,
        "x1": 683,
        "y1": 631
      },
      "hall": false,
      "store": "Tony’s Pizza"
    },
    "126": {
      "id": 126,
      "x": 714,
      "y": 602,
      "bounds": {
        "x": 683,
        "y": 573,
        "w": 62,
        "h": 58,
        "width": 62,
        "height": 58,
        "x0": 683,
        "y0": 573,
        "x1": 745,
        "y1": 631
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "127": {
      "id": 127,
      "x": 773.5,
      "y": 602,
      "bounds": {
        "x": 745,
        "y": 573,
        "w": 57,
        "h": 58,
        "width": 57,
        "height": 58,
        "x0": 745,
        "y0": 573,
        "x1": 802,
        "y1": 631
      },
      "hall": false,
      "store": "Nickle’s Office"
    },
    "128": {
      "id": 128,
      "x": 830.5,
      "y": 602,
      "bounds": {
        "x": 802,
        "y": 573,
        "w": 57,
        "h": 58,
        "width": 57,
        "height": 58,
        "x0": 802,
        "y0": 573,
        "x1": 859,
        "y1": 631
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "129": {
      "id": 129,
      "x": 890.5,
      "y": 602,
      "bounds": {
        "x": 859,
        "y": 573,
        "w": 63,
        "h": 58,
        "width": 63,
        "height": 58,
        "x0": 859,
        "y0": 573,
        "x1": 922,
        "y1": 631
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "130": {
      "id": 130,
      "x": 959,
      "y": 602,
      "bounds": {
        "x": 922,
        "y": 573,
        "w": 74,
        "h": 58,
        "width": 74,
        "height": 58,
        "x0": 922,
        "y0": 573,
        "x1": 996,
        "y1": 631
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "131": {
      "id": 131,
      "x": 1034,
      "y": 593,
      "bounds": {
        "x": 996,
        "y": 555,
        "w": 76,
        "h": 76,
        "width": 76,
        "height": 76,
        "x0": 996,
        "y0": 555,
        "x1": 1072,
        "y1": 631
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "132": {
      "id": 132,
      "x": 1118,
      "y": 593,
      "bounds": {
        "x": 1072,
        "y": 555,
        "w": 92,
        "h": 76,
        "width": 92,
        "height": 76,
        "x0": 1072,
        "y0": 555,
        "x1": 1164,
        "y1": 631
      },
      "hall": false,
      "store": "Lensman Camera"
    },
    "133": {
      "id": 133,
      "x": 1205.5,
      "y": 593,
      "bounds": {
        "x": 1164,
        "y": 555,
        "w": 83,
        "h": 76,
        "width": 83,
        "height": 76,
        "x0": 1164,
        "y0": 555,
        "x1": 1247,
        "y1": 631
      },
      "hall": false,
      "store": "Lensman Camera"
    },
    "134": {
      "id": 134,
      "x": 1289.5,
      "y": 593,
      "bounds": {
        "x": 1247,
        "y": 555,
        "w": 85,
        "h": 76,
        "width": 85,
        "height": 76,
        "x0": 1247,
        "y0": 555,
        "x1": 1332,
        "y1": 631
      },
      "hall": false,
      "store": "Edwin’s Sports Center"
    },
    "135": {
      "id": 135,
      "x": 1373.5,
      "y": 593,
      "bounds": {
        "x": 1332,
        "y": 555,
        "w": 83,
        "h": 76,
        "width": 83,
        "height": 76,
        "x0": 1332,
        "y0": 555,
        "x1": 1415,
        "y1": 631
      },
      "hall": false,
      "store": "Edwin’s Sports Center"
    },
    "136": {
      "id": 136,
      "x": 1456.5,
      "y": 589,
      "bounds": {
        "x": 1415,
        "y": 555,
        "w": 83,
        "h": 68,
        "width": 83,
        "height": 68,
        "x0": 1415,
        "y0": 555,
        "x1": 1498,
        "y1": 623
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "137": {
      "id": 137,
      "x": 1540.5,
      "y": 589,
      "bounds": {
        "x": 1498,
        "y": 555,
        "w": 85,
        "h": 68,
        "width": 85,
        "height": 68,
        "x0": 1498,
        "y0": 555,
        "x1": 1583,
        "y1": 623
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "138": {
      "id": 138,
      "x": 64,
      "y": 666.5,
      "bounds": {
        "x": 20,
        "y": 631,
        "w": 88,
        "h": 71,
        "width": 88,
        "height": 71,
        "x0": 20,
        "y0": 631,
        "x1": 108,
        "y1": 702
      },
      "hall": false,
      "store": "Record Loft"
    },
    "139": {
      "id": 139,
      "x": 149.5,
      "y": 666.5,
      "bounds": {
        "x": 108,
        "y": 631,
        "w": 83,
        "h": 71,
        "width": 83,
        "height": 71,
        "x0": 108,
        "y0": 631,
        "x1": 191,
        "y1": 702
      },
      "hall": false,
      "store": "Expectation Maternity"
    },
    "140": {
      "id": 140,
      "x": 232,
      "y": 666.5,
      "bounds": {
        "x": 191,
        "y": 631,
        "w": 82,
        "h": 71,
        "width": 82,
        "height": 71,
        "x0": 191,
        "y0": 631,
        "x1": 273,
        "y1": 702
      },
      "hall": false,
      "store": "Theatre I"
    },
    "141": {
      "id": 141,
      "x": 316.5,
      "y": 666.5,
      "bounds": {
        "x": 273,
        "y": 631,
        "w": 87,
        "h": 71,
        "width": 87,
        "height": 71,
        "x0": 273,
        "y0": 631,
        "x1": 360,
        "y1": 702
      },
      "hall": false,
      "store": "Theatre I"
    },
    "142": {
      "id": 142,
      "x": 401,
      "y": 666.5,
      "bounds": {
        "x": 360,
        "y": 631,
        "w": 82,
        "h": 71,
        "width": 82,
        "height": 71,
        "x0": 360,
        "y0": 631,
        "x1": 442,
        "y1": 702
      },
      "hall": false,
      "store": "Twin Theatre Lobby"
    },
    "143": {
      "id": 143,
      "x": 484.5,
      "y": 666.5,
      "bounds": {
        "x": 442,
        "y": 631,
        "w": 85,
        "h": 71,
        "width": 85,
        "height": 71,
        "x0": 442,
        "y0": 631,
        "x1": 527,
        "y1": 702
      },
      "hall": false,
      "store": "Twin Theatre Lobby"
    },
    "144": {
      "id": 144,
      "x": 568.5,
      "y": 666.5,
      "bounds": {
        "x": 527,
        "y": 631,
        "w": 83,
        "h": 71,
        "width": 83,
        "height": 71,
        "x0": 527,
        "y0": 631,
        "x1": 610,
        "y1": 702
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "145": {
      "id": 145,
      "x": 646.5,
      "y": 666.5,
      "bounds": {
        "x": 610,
        "y": 631,
        "w": 73,
        "h": 71,
        "width": 73,
        "height": 71,
        "x0": 610,
        "y0": 631,
        "x1": 683,
        "y1": 702
      },
      "hall": false,
      "store": "Card Corner"
    },
    "146": {
      "id": 146,
      "x": 714,
      "y": 666.5,
      "bounds": {
        "x": 683,
        "y": 631,
        "w": 62,
        "h": 71,
        "width": 62,
        "height": 71,
        "x0": 683,
        "y0": 631,
        "x1": 745,
        "y1": 702
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "147": {
      "id": 147,
      "x": 773.5,
      "y": 666.5,
      "bounds": {
        "x": 745,
        "y": 631,
        "w": 57,
        "h": 71,
        "width": 57,
        "height": 71,
        "x0": 745,
        "y0": 631,
        "x1": 802,
        "y1": 702
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "148": {
      "id": 148,
      "x": 830.5,
      "y": 666.5,
      "bounds": {
        "x": 802,
        "y": 631,
        "w": 57,
        "h": 71,
        "width": 57,
        "height": 71,
        "x0": 802,
        "y0": 631,
        "x1": 859,
        "y1": 702
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "149": {
      "id": 149,
      "x": 890.5,
      "y": 666.5,
      "bounds": {
        "x": 859,
        "y": 631,
        "w": 63,
        "h": 71,
        "width": 63,
        "height": 71,
        "x0": 859,
        "y0": 631,
        "x1": 922,
        "y1": 702
      },
      "hall": false,
      "store": "Nickle’s Department Store"
    },
    "150": {
      "id": 150,
      "x": 959,
      "y": 666.5,
      "bounds": {
        "x": 922,
        "y": 631,
        "w": 74,
        "h": 71,
        "width": 74,
        "height": 71,
        "x0": 922,
        "y0": 631,
        "x1": 996,
        "y1": 702
      },
      "hall": false,
      "store": "Interior Concepts"
    },
    "151": {
      "id": 151,
      "x": 1034,
      "y": 666.5,
      "bounds": {
        "x": 996,
        "y": 631,
        "w": 76,
        "h": 71,
        "width": 76,
        "height": 71,
        "x0": 996,
        "y0": 631,
        "x1": 1072,
        "y1": 702
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "152": {
      "id": 152,
      "x": 1118,
      "y": 666.5,
      "bounds": {
        "x": 1072,
        "y": 631,
        "w": 92,
        "h": 71,
        "width": 92,
        "height": 71,
        "x0": 1072,
        "y0": 631,
        "x1": 1164,
        "y1": 702
      },
      "hall": false,
      "store": "Alphaville Music"
    },
    "153": {
      "id": 153,
      "x": 1205.5,
      "y": 666.5,
      "bounds": {
        "x": 1164,
        "y": 631,
        "w": 83,
        "h": 71,
        "width": 83,
        "height": 71,
        "x0": 1164,
        "y0": 631,
        "x1": 1247,
        "y1": 702
      },
      "hall": false,
      "store": "Alphaville Music"
    },
    "154": {
      "id": 154,
      "x": 1289.5,
      "y": 666.5,
      "bounds": {
        "x": 1247,
        "y": 631,
        "w": 85,
        "h": 71,
        "width": 85,
        "height": 71,
        "x0": 1247,
        "y0": 631,
        "x1": 1332,
        "y1": 702
      },
      "hall": false,
      "store": "Alphaville Music"
    },
    "155": {
      "id": 155,
      "x": 1373.5,
      "y": 666.5,
      "bounds": {
        "x": 1332,
        "y": 631,
        "w": 83,
        "h": 71,
        "width": 83,
        "height": 71,
        "x0": 1332,
        "y0": 631,
        "x1": 1415,
        "y1": 702
      },
      "hall": false,
      "store": "Edwin’s Sports Center"
    },
    "156": {
      "id": 156,
      "x": 1456.5,
      "y": 649,
      "bounds": {
        "x": 1415,
        "y": 623,
        "w": 83,
        "h": 52,
        "width": 83,
        "height": 52,
        "x0": 1415,
        "y0": 623,
        "x1": 1498,
        "y1": 675
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "157": {
      "id": 157,
      "x": 1540.5,
      "y": 649,
      "bounds": {
        "x": 1498,
        "y": 623,
        "w": 85,
        "h": 52,
        "width": 85,
        "height": 52,
        "x0": 1498,
        "y0": 623,
        "x1": 1583,
        "y1": 675
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "158": {
      "id": 158,
      "x": 1456.5,
      "y": 701,
      "bounds": {
        "x": 1415,
        "y": 675,
        "w": 83,
        "h": 52,
        "width": 83,
        "height": 52,
        "x0": 1415,
        "y0": 675,
        "x1": 1498,
        "y1": 727
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "159": {
      "id": 159,
      "x": 1540.5,
      "y": 701,
      "bounds": {
        "x": 1498,
        "y": 675,
        "w": 85,
        "h": 52,
        "width": 85,
        "height": 52,
        "x0": 1498,
        "y0": 675,
        "x1": 1583,
        "y1": 727
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "160": {
      "id": 160,
      "x": 57,
      "y": 744,
      "bounds": {
        "x": 20,
        "y": 702,
        "w": 74,
        "h": 84,
        "width": 74,
        "height": 84,
        "x0": 20,
        "y0": 702,
        "x1": 94,
        "y1": 786
      },
      "hall": false,
      "store": "Theatre II"
    },
    "161": {
      "id": 161,
      "x": 130.5,
      "y": 744,
      "bounds": {
        "x": 94,
        "y": 702,
        "w": 73,
        "h": 84,
        "width": 73,
        "height": 84,
        "x0": 94,
        "y0": 702,
        "x1": 167,
        "y1": 786
      },
      "hall": false,
      "store": "Theatre II"
    },
    "162": {
      "id": 162,
      "x": 203.5,
      "y": 744,
      "bounds": {
        "x": 167,
        "y": 702,
        "w": 73,
        "h": 84,
        "width": 73,
        "height": 84,
        "x0": 167,
        "y0": 702,
        "x1": 240,
        "y1": 786
      },
      "hall": false,
      "store": "Theatre II"
    },
    "163": {
      "id": 163,
      "x": 270,
      "y": 744,
      "bounds": {
        "x": 240,
        "y": 702,
        "w": 60,
        "h": 84,
        "width": 60,
        "height": 84,
        "x0": 240,
        "y0": 702,
        "x1": 300,
        "y1": 786
      },
      "hall": false,
      "store": "Theatre II"
    },
    "164": {
      "id": 164,
      "x": 330,
      "y": 722,
      "bounds": {
        "x": 300,
        "y": 702,
        "w": 60,
        "h": 40,
        "width": 60,
        "height": 40,
        "x0": 300,
        "y0": 702,
        "x1": 360,
        "y1": 742
      },
      "hall": false,
      "store": "Twin Theatre Lobby"
    },
    "165": {
      "id": 165,
      "x": 401,
      "y": 722,
      "bounds": {
        "x": 360,
        "y": 702,
        "w": 82,
        "h": 40,
        "width": 82,
        "height": 40,
        "x0": 360,
        "y0": 702,
        "x1": 442,
        "y1": 742
      },
      "hall": false,
      "store": "Twin Theatre Lobby"
    },
    "166": {
      "id": 166,
      "x": 484.5,
      "y": 744,
      "bounds": {
        "x": 442,
        "y": 702,
        "w": 85,
        "h": 84,
        "width": 85,
        "height": 84,
        "x0": 442,
        "y0": 702,
        "x1": 527,
        "y1": 786
      },
      "hall": false,
      "store": "Optics Clinic"
    },
    "167": {
      "id": 167,
      "x": 568.5,
      "y": 744,
      "bounds": {
        "x": 527,
        "y": 702,
        "w": 83,
        "h": 84,
        "width": 83,
        "height": 84,
        "x0": 527,
        "y0": 702,
        "x1": 610,
        "y1": 786
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "168": {
      "id": 168,
      "x": 646.5,
      "y": 744,
      "bounds": {
        "x": 610,
        "y": 702,
        "w": 73,
        "h": 84,
        "width": 73,
        "height": 84,
        "x0": 610,
        "y0": 702,
        "x1": 683,
        "y1": 786
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "169": {
      "id": 169,
      "x": 719,
      "y": 744,
      "bounds": {
        "x": 683,
        "y": 702,
        "w": 72,
        "h": 84,
        "width": 72,
        "height": 84,
        "x0": 683,
        "y0": 702,
        "x1": 755,
        "y1": 786
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "170": {
      "id": 170,
      "x": 802.5,
      "y": 744,
      "bounds": {
        "x": 755,
        "y": 702,
        "w": 95,
        "h": 84,
        "width": 95,
        "height": 84,
        "x0": 755,
        "y0": 702,
        "x1": 850,
        "y1": 786
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "171": {
      "id": 171,
      "x": 886,
      "y": 744,
      "bounds": {
        "x": 850,
        "y": 702,
        "w": 72,
        "h": 84,
        "width": 72,
        "height": 84,
        "x0": 850,
        "y0": 702,
        "x1": 922,
        "y1": 786
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "172": {
      "id": 172,
      "x": 959,
      "y": 744,
      "bounds": {
        "x": 922,
        "y": 702,
        "w": 74,
        "h": 84,
        "width": 74,
        "height": 84,
        "x0": 922,
        "y0": 702,
        "x1": 996,
        "y1": 786
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "173": {
      "id": 173,
      "x": 1034,
      "y": 744,
      "bounds": {
        "x": 996,
        "y": 702,
        "w": 76,
        "h": 84,
        "width": 76,
        "height": 84,
        "x0": 996,
        "y0": 702,
        "x1": 1072,
        "y1": 786
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "174": {
      "id": 174,
      "x": 1118,
      "y": 744,
      "bounds": {
        "x": 1072,
        "y": 702,
        "w": 92,
        "h": 84,
        "width": 92,
        "height": 84,
        "x0": 1072,
        "y0": 702,
        "x1": 1164,
        "y1": 786
      },
      "hall": false,
      "store": "Family Book Nook"
    },
    "175": {
      "id": 175,
      "x": 1205.5,
      "y": 744,
      "bounds": {
        "x": 1164,
        "y": 702,
        "w": 83,
        "h": 84,
        "width": 83,
        "height": 84,
        "x0": 1164,
        "y0": 702,
        "x1": 1247,
        "y1": 786
      },
      "hall": false,
      "store": "Family Book Nook"
    },
    "176": {
      "id": 176,
      "x": 1289.5,
      "y": 744,
      "bounds": {
        "x": 1247,
        "y": 702,
        "w": 85,
        "h": 84,
        "width": 85,
        "height": 84,
        "x0": 1247,
        "y0": 702,
        "x1": 1332,
        "y1": 786
      },
      "hall": false,
      "store": "Alphaville Music"
    },
    "177": {
      "id": 177,
      "x": 1373.5,
      "y": 744,
      "bounds": {
        "x": 1332,
        "y": 702,
        "w": 83,
        "h": 84,
        "width": 83,
        "height": 84,
        "x0": 1332,
        "y0": 702,
        "x1": 1415,
        "y1": 786
      },
      "hall": false,
      "store": "Edwin’s Sports Center"
    },
    "178": {
      "id": 178,
      "x": 1456.5,
      "y": 756.5,
      "bounds": {
        "x": 1415,
        "y": 727,
        "w": 83,
        "h": 59,
        "width": 83,
        "height": 59,
        "x0": 1415,
        "y0": 727,
        "x1": 1498,
        "y1": 786
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "179": {
      "id": 179,
      "x": 1540.5,
      "y": 756.5,
      "bounds": {
        "x": 1498,
        "y": 727,
        "w": 85,
        "h": 59,
        "width": 85,
        "height": 59,
        "x0": 1498,
        "y0": 727,
        "x1": 1583,
        "y1": 786
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "180": {
      "id": 180,
      "x": 57,
      "y": 822,
      "bounds": {
        "x": 20,
        "y": 786,
        "w": 74,
        "h": 72,
        "width": 74,
        "height": 72,
        "x0": 20,
        "y0": 786,
        "x1": 94,
        "y1": 858
      },
      "hall": false,
      "store": "Theatre II"
    },
    "181": {
      "id": 181,
      "x": 130.5,
      "y": 822,
      "bounds": {
        "x": 94,
        "y": 786,
        "w": 73,
        "h": 72,
        "width": 73,
        "height": 72,
        "x0": 94,
        "y0": 786,
        "x1": 167,
        "y1": 858
      },
      "hall": false,
      "store": "Theatre II"
    },
    "182": {
      "id": 182,
      "x": 203.5,
      "y": 822,
      "bounds": {
        "x": 167,
        "y": 786,
        "w": 73,
        "h": 72,
        "width": 73,
        "height": 72,
        "x0": 167,
        "y0": 786,
        "x1": 240,
        "y1": 858
      },
      "hall": false,
      "store": "Theatre II"
    },
    "183": {
      "id": 183,
      "x": 270,
      "y": 822,
      "bounds": {
        "x": 240,
        "y": 786,
        "w": 60,
        "h": 72,
        "width": 60,
        "height": 72,
        "x0": 240,
        "y0": 786,
        "x1": 300,
        "y1": 858
      },
      "hall": false,
      "store": "Theatre II"
    },
    "184": {
      "id": 184,
      "x": 330,
      "y": 764,
      "bounds": {
        "x": 300,
        "y": 742,
        "w": 60,
        "h": 44,
        "width": 60,
        "height": 44,
        "x0": 300,
        "y0": 742,
        "x1": 360,
        "y1": 786
      },
      "hall": false,
      "store": "Twin Theatre Lobby"
    },
    "185": {
      "id": 185,
      "x": 401,
      "y": 764,
      "bounds": {
        "x": 360,
        "y": 742,
        "w": 82,
        "h": 44,
        "width": 82,
        "height": 44,
        "x0": 360,
        "y0": 742,
        "x1": 442,
        "y1": 786
      },
      "hall": false,
      "store": "Men"
    },
    "186": {
      "id": 186,
      "x": 330,
      "y": 822,
      "bounds": {
        "x": 300,
        "y": 786,
        "w": 60,
        "h": 72,
        "width": 60,
        "height": 72,
        "x0": 300,
        "y0": 786,
        "x1": 360,
        "y1": 858
      },
      "hall": false,
      "store": "Twin Theatre Lobby"
    },
    "187": {
      "id": 187,
      "x": 401,
      "y": 822,
      "bounds": {
        "x": 360,
        "y": 786,
        "w": 82,
        "h": 72,
        "width": 82,
        "height": 72,
        "x0": 360,
        "y0": 786,
        "x1": 442,
        "y1": 858
      },
      "hall": false,
      "store": "Women"
    },
    "188": {
      "id": 188,
      "x": 484.5,
      "y": 822,
      "bounds": {
        "x": 442,
        "y": 786,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 442,
        "y0": 786,
        "x1": 527,
        "y1": 858
      },
      "hall": false,
      "store": "Optics Clinic"
    },
    "189": {
      "id": 189,
      "x": 568.5,
      "y": 822,
      "bounds": {
        "x": 527,
        "y": 786,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 527,
        "y0": 786,
        "x1": 610,
        "y1": 858
      },
      "hall": false,
      "store": "Optics Clinic"
    },
    "190": {
      "id": 190,
      "x": 646.5,
      "y": 822,
      "bounds": {
        "x": 610,
        "y": 786,
        "w": 73,
        "h": 72,
        "width": 73,
        "height": 72,
        "x0": 610,
        "y0": 786,
        "x1": 683,
        "y1": 858
      },
      "hall": false,
      "store": "Bath Fads"
    },
    "191": {
      "id": 191,
      "x": 719,
      "y": 822,
      "bounds": {
        "x": 683,
        "y": 786,
        "w": 72,
        "h": 72,
        "width": 72,
        "height": 72,
        "x0": 683,
        "y0": 786,
        "x1": 755,
        "y1": 858
      },
      "hall": false,
      "store": "Bath Fads"
    },
    "192": {
      "id": 192,
      "x": 802.5,
      "y": 822,
      "bounds": {
        "x": 755,
        "y": 786,
        "w": 95,
        "h": 72,
        "width": 95,
        "height": 72,
        "x0": 755,
        "y0": 786,
        "x1": 850,
        "y1": 858
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "193": {
      "id": 193,
      "x": 886,
      "y": 822,
      "bounds": {
        "x": 850,
        "y": 786,
        "w": 72,
        "h": 72,
        "width": 72,
        "height": 72,
        "x0": 850,
        "y0": 786,
        "x1": 922,
        "y1": 858
      },
      "hall": false,
      "store": "Bob’s Barber Shop"
    },
    "194": {
      "id": 194,
      "x": 959,
      "y": 822,
      "bounds": {
        "x": 922,
        "y": 786,
        "w": 74,
        "h": 72,
        "width": 74,
        "height": 72,
        "x0": 922,
        "y0": 786,
        "x1": 996,
        "y1": 858
      },
      "hall": false,
      "store": "Bea’s Bakery"
    },
    "195": {
      "id": 195,
      "x": 1034,
      "y": 822,
      "bounds": {
        "x": 996,
        "y": 786,
        "w": 76,
        "h": 72,
        "width": 76,
        "height": 72,
        "x0": 996,
        "y0": 786,
        "x1": 1072,
        "y1": 858
      },
      "hall": false,
      "store": "Floorshine Shoes"
    },
    "196": {
      "id": 196,
      "x": 1118,
      "y": 822,
      "bounds": {
        "x": 1072,
        "y": 786,
        "w": 92,
        "h": 72,
        "width": 92,
        "height": 72,
        "x0": 1072,
        "y0": 786,
        "x1": 1164,
        "y1": 858
      },
      "hall": false,
      "store": "Floorshine Shoes"
    },
    "197": {
      "id": 197,
      "x": 1205.5,
      "y": 822,
      "bounds": {
        "x": 1164,
        "y": 786,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1164,
        "y0": 786,
        "x1": 1247,
        "y1": 858
      },
      "hall": false,
      "store": "Family Book Nook"
    },
    "198": {
      "id": 198,
      "x": 1289.5,
      "y": 822,
      "bounds": {
        "x": 1247,
        "y": 786,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 1247,
        "y0": 786,
        "x1": 1332,
        "y1": 858
      },
      "hall": false,
      "store": "Store Room"
    },
    "199": {
      "id": 199,
      "x": 1373.5,
      "y": 822,
      "bounds": {
        "x": 1332,
        "y": 786,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1332,
        "y0": 786,
        "x1": 1415,
        "y1": 858
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "200": {
      "id": 200,
      "x": 1456.5,
      "y": 822,
      "bounds": {
        "x": 1415,
        "y": 786,
        "w": 83,
        "h": 72,
        "width": 83,
        "height": 72,
        "x0": 1415,
        "y0": 786,
        "x1": 1498,
        "y1": 858
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "201": {
      "id": 201,
      "x": 1540.5,
      "y": 822,
      "bounds": {
        "x": 1498,
        "y": 786,
        "w": 85,
        "h": 72,
        "width": 85,
        "height": 72,
        "x0": 1498,
        "y0": 786,
        "x1": 1583,
        "y1": 858
      },
      "hall": false,
      "store": "Murphy Brothers"
    },
    "202": {
      "id": 202,
      "x": 568.5,
      "y": 893.5,
      "bounds": {
        "x": 527,
        "y": 858,
        "w": 83,
        "h": 71,
        "width": 83,
        "height": 71,
        "x0": 527,
        "y0": 858,
        "x1": 610,
        "y1": 929
      },
      "hall": false,
      "store": "Brane Lyant"
    },
    "203": {
      "id": 203,
      "x": 646.5,
      "y": 893.5,
      "bounds": {
        "x": 610,
        "y": 858,
        "w": 73,
        "h": 71,
        "width": 73,
        "height": 71,
        "x0": 610,
        "y0": 858,
        "x1": 683,
        "y1": 929
      },
      "hall": false,
      "store": "Brane Lyant"
    },
    "204": {
      "id": 204,
      "x": 719,
      "y": 893.5,
      "bounds": {
        "x": 683,
        "y": 858,
        "w": 72,
        "h": 71,
        "width": 72,
        "height": 71,
        "x0": 683,
        "y0": 858,
        "x1": 755,
        "y1": 929
      },
      "hall": false,
      "store": "Brane Lyant"
    },
    "205": {
      "id": 205,
      "x": 802.5,
      "y": 893.5,
      "bounds": {
        "x": 755,
        "y": 858,
        "w": 95,
        "h": 71,
        "width": 95,
        "height": 71,
        "x0": 755,
        "y0": 858,
        "x1": 850,
        "y1": 929
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "206": {
      "id": 206,
      "x": 886,
      "y": 893.5,
      "bounds": {
        "x": 850,
        "y": 858,
        "w": 72,
        "h": 71,
        "width": 72,
        "height": 71,
        "x0": 850,
        "y0": 858,
        "x1": 922,
        "y1": 929
      },
      "hall": false,
      "store": "Uniforms, Inc."
    },
    "207": {
      "id": 207,
      "x": 959,
      "y": 893.5,
      "bounds": {
        "x": 922,
        "y": 858,
        "w": 74,
        "h": 71,
        "width": 74,
        "height": 71,
        "x0": 922,
        "y0": 858,
        "x1": 996,
        "y1": 929
      },
      "hall": false,
      "store": "Uniforms, Inc."
    },
    "208": {
      "id": 208,
      "x": 1034,
      "y": 893.5,
      "bounds": {
        "x": 996,
        "y": 858,
        "w": 76,
        "h": 71,
        "width": 76,
        "height": 71,
        "x0": 996,
        "y0": 858,
        "x1": 1072,
        "y1": 929
      },
      "hall": false,
      "store": "Uniforms, Inc."
    },
    "209": {
      "id": 209,
      "x": 568.5,
      "y": 966,
      "bounds": {
        "x": 527,
        "y": 929,
        "w": 83,
        "h": 74,
        "width": 83,
        "height": 74,
        "x0": 527,
        "y0": 929,
        "x1": 610,
        "y1": 1003
      },
      "hall": false,
      "store": "Special Gifts"
    },
    "210": {
      "id": 210,
      "x": 646.5,
      "y": 966,
      "bounds": {
        "x": 610,
        "y": 929,
        "w": 73,
        "h": 74,
        "width": 73,
        "height": 74,
        "x0": 610,
        "y0": 929,
        "x1": 683,
        "y1": 1003
      },
      "hall": false,
      "store": "Special Gifts"
    },
    "211": {
      "id": 211,
      "x": 719,
      "y": 966,
      "bounds": {
        "x": 683,
        "y": 929,
        "w": 72,
        "h": 74,
        "width": 72,
        "height": 74,
        "x0": 683,
        "y0": 929,
        "x1": 755,
        "y1": 1003
      },
      "hall": false,
      "store": "Special Gifts"
    },
    "212": {
      "id": 212,
      "x": 802.5,
      "y": 966,
      "bounds": {
        "x": 755,
        "y": 929,
        "w": 95,
        "h": 74,
        "width": 95,
        "height": 74,
        "x0": 755,
        "y0": 929,
        "x1": 850,
        "y1": 1003
      },
      "hall": true,
      "store": "Mall concourse"
    },
    "213": {
      "id": 213,
      "x": 886,
      "y": 966,
      "bounds": {
        "x": 850,
        "y": 929,
        "w": 72,
        "h": 74,
        "width": 72,
        "height": 74,
        "x0": 850,
        "y0": 929,
        "x1": 922,
        "y1": 1003
      },
      "hall": false,
      "store": "Amusement Arcade"
    },
    "214": {
      "id": 214,
      "x": 959,
      "y": 966,
      "bounds": {
        "x": 922,
        "y": 929,
        "w": 74,
        "h": 74,
        "width": 74,
        "height": 74,
        "x0": 922,
        "y0": 929,
        "x1": 996,
        "y1": 1003
      },
      "hall": false,
      "store": "Amusement Arcade"
    },
    "215": {
      "id": 215,
      "x": 1034,
      "y": 966,
      "bounds": {
        "x": 996,
        "y": 929,
        "w": 76,
        "h": 74,
        "width": 76,
        "height": 74,
        "x0": 996,
        "y0": 929,
        "x1": 1072,
        "y1": 1003
      },
      "hall": false,
      "store": "Amusement Arcade"
    }
  },
  "edges": [
    {
      "id": "edge-1-8",
      "a": 1,
      "b": 8,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 96,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 566.5,
        "y": 96
      }
    },
    {
      "id": "edge-2-3",
      "a": 2,
      "b": 3,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 25,
        "to": 96
      },
      "doorPosition": {
        "x": 683,
        "y": 61
      }
    },
    {
      "id": "edge-3-4",
      "a": 3,
      "b": 4,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 25,
        "to": 96
      },
      "doorPosition": {
        "x": 755,
        "y": 59
      }
    },
    {
      "id": "edge-4-5",
      "a": 4,
      "b": 5,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 25,
        "to": 96
      },
      "doorPosition": {
        "x": 850,
        "y": 61.5
      }
    },
    {
      "id": "edge-4-11",
      "a": 4,
      "b": 11,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 96,
        "from": 755,
        "to": 850
      },
      "doorPosition": {
        "x": 799.5,
        "y": 96
      }
    },
    {
      "id": "edge-5-6",
      "a": 5,
      "b": 6,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 25,
        "to": 96
      },
      "doorPosition": {
        "x": 922,
        "y": 60.5
      }
    },
    {
      "id": "edge-6-7",
      "a": 6,
      "b": 7,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 25,
        "to": 96
      },
      "doorPosition": {
        "x": 996,
        "y": 60.5
      }
    },
    {
      "id": "edge-7-14",
      "a": 7,
      "b": 14,
      "type": "solid",
      "boundary": {
        "axis": "h",
        "at": 96,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1036,
        "y": 96
      }
    },
    {
      "id": "edge-8-21",
      "a": 8,
      "b": 21,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 167,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 566,
        "y": 167
      }
    },
    {
      "id": "edge-9-22",
      "a": 9,
      "b": 22,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 167,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 644,
        "y": 167
      }
    },
    {
      "id": "edge-10-23",
      "a": 10,
      "b": 23,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 167,
        "from": 683,
        "to": 755
      },
      "doorPosition": {
        "x": 715.5,
        "y": 167
      }
    },
    {
      "id": "edge-11-24",
      "a": 11,
      "b": 24,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 167,
        "from": 755,
        "to": 850
      },
      "doorPosition": {
        "x": 799,
        "y": 167
      }
    },
    {
      "id": "edge-12-13",
      "a": 12,
      "b": 13,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 96,
        "to": 167
      },
      "doorPosition": {
        "x": 922,
        "y": 131.5
      }
    },
    {
      "id": "edge-12-25",
      "a": 12,
      "b": 25,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 167,
        "from": 850,
        "to": 922
      },
      "doorPosition": {
        "x": 885,
        "y": 167
      }
    },
    {
      "id": "edge-13-26",
      "a": 13,
      "b": 26,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 167,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 955,
        "y": 167
      }
    },
    {
      "id": "edge-14-27",
      "a": 14,
      "b": 27,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 167,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1033,
        "y": 167
      }
    },
    {
      "id": "edge-15-34",
      "a": 15,
      "b": 34,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 20,
        "to": 108
      },
      "doorPosition": {
        "x": 60,
        "y": 240
      }
    },
    {
      "id": "edge-16-17",
      "a": 16,
      "b": 17,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 191,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 191,
        "y": 203.5
      }
    },
    {
      "id": "edge-16-35",
      "a": 16,
      "b": 35,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 108,
        "to": 191
      },
      "doorPosition": {
        "x": 148.5,
        "y": 240
      }
    },
    {
      "id": "edge-17-18",
      "a": 17,
      "b": 18,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 273,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 273,
        "y": 208
      }
    },
    {
      "id": "edge-17-36",
      "a": 17,
      "b": 36,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 191,
        "to": 273
      },
      "doorPosition": {
        "x": 229.5,
        "y": 240
      }
    },
    {
      "id": "edge-18-37",
      "a": 18,
      "b": 37,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 273,
        "to": 360
      },
      "doorPosition": {
        "x": 312,
        "y": 240
      }
    },
    {
      "id": "edge-19-20",
      "a": 19,
      "b": 20,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 442,
        "y": 204
      }
    },
    {
      "id": "edge-19-38",
      "a": 19,
      "b": 38,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 400,
        "y": 240
      }
    },
    {
      "id": "edge-20-39",
      "a": 20,
      "b": 39,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 442,
        "to": 527
      },
      "doorPosition": {
        "x": 481.5,
        "y": 240
      }
    },
    {
      "id": "edge-21-40",
      "a": 21,
      "b": 40,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 568.5,
        "y": 240
      }
    },
    {
      "id": "edge-22-41",
      "a": 22,
      "b": 41,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 645,
        "y": 240
      }
    },
    {
      "id": "edge-23-42",
      "a": 23,
      "b": 42,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 683,
        "to": 755
      },
      "doorPosition": {
        "x": 720,
        "y": 240
      }
    },
    {
      "id": "edge-24-43",
      "a": 24,
      "b": 43,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 755,
        "to": 850
      },
      "doorPosition": {
        "x": 799,
        "y": 240
      }
    },
    {
      "id": "edge-26-45",
      "a": 26,
      "b": 45,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 959,
        "y": 240
      }
    },
    {
      "id": "edge-27-46",
      "a": 27,
      "b": 46,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1032.5,
        "y": 240
      }
    },
    {
      "id": "edge-28-29",
      "a": 28,
      "b": 29,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 1164,
        "y": 203
      }
    },
    {
      "id": "edge-28-47",
      "a": 28,
      "b": 47,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 1072,
        "to": 1164
      },
      "doorPosition": {
        "x": 1116.5,
        "y": 240
      }
    },
    {
      "id": "edge-29-30",
      "a": 29,
      "b": 30,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 1247,
        "y": 204.5
      }
    },
    {
      "id": "edge-30-49",
      "a": 30,
      "b": 49,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 1247,
        "to": 1332
      },
      "doorPosition": {
        "x": 1286,
        "y": 240
      }
    },
    {
      "id": "edge-31-32",
      "a": 31,
      "b": 32,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 1415,
        "y": 204
      }
    },
    {
      "id": "edge-31-50",
      "a": 31,
      "b": 50,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 1332,
        "to": 1415
      },
      "doorPosition": {
        "x": 1370,
        "y": 240
      }
    },
    {
      "id": "edge-32-33",
      "a": 32,
      "b": 33,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 1498,
        "y": 204.5
      }
    },
    {
      "id": "edge-33-52",
      "a": 33,
      "b": 52,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1537.5,
        "y": 240
      }
    },
    {
      "id": "edge-34-53",
      "a": 34,
      "b": 53,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 20,
        "to": 108
      },
      "doorPosition": {
        "x": 60,
        "y": 321
      }
    },
    {
      "id": "edge-35-36",
      "a": 35,
      "b": 36,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 191,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 191,
        "y": 279
      }
    },
    {
      "id": "edge-35-54",
      "a": 35,
      "b": 54,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 108,
        "to": 191
      },
      "doorPosition": {
        "x": 146,
        "y": 321
      }
    },
    {
      "id": "edge-36-37",
      "a": 36,
      "b": 37,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 273,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 273,
        "y": 285.5
      }
    },
    {
      "id": "edge-38-39",
      "a": 38,
      "b": 39,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 442,
        "y": 279.5
      }
    },
    {
      "id": "edge-40-41",
      "a": 40,
      "b": 41,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 610,
        "y": 280.5
      }
    },
    {
      "id": "edge-40-59",
      "a": 40,
      "b": 59,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 566,
        "y": 321
      }
    },
    {
      "id": "edge-41-42",
      "a": 41,
      "b": 42,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 683,
        "y": 281
      }
    },
    {
      "id": "edge-42-43",
      "a": 42,
      "b": 43,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 755,
        "y": 281
      }
    },
    {
      "id": "edge-43-44",
      "a": 43,
      "b": 44,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 850,
        "y": 280.5
      }
    },
    {
      "id": "edge-44-45",
      "a": 44,
      "b": 45,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 922,
        "y": 280.5
      }
    },
    {
      "id": "edge-45-46",
      "a": 45,
      "b": 46,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 996,
        "y": 280.5
      }
    },
    {
      "id": "edge-46-47",
      "a": 46,
      "b": 47,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 1072,
        "y": 282.5
      }
    },
    {
      "id": "edge-46-66",
      "a": 46,
      "b": 66,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1033,
        "y": 321
      }
    },
    {
      "id": "edge-48-49",
      "a": 48,
      "b": 49,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 1247,
        "y": 279.5
      }
    },
    {
      "id": "edge-49-50",
      "a": 49,
      "b": 50,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 1332,
        "y": 281
      }
    },
    {
      "id": "edge-51-52",
      "a": 51,
      "b": 52,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 1498,
        "y": 279.5
      }
    },
    {
      "id": "edge-51-71",
      "a": 51,
      "b": 71,
      "type": "solid",
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1453.5,
        "y": 321
      }
    },
    {
      "id": "edge-53-73",
      "a": 53,
      "b": 73,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 20,
        "to": 108
      },
      "doorPosition": {
        "x": 59.5,
        "y": 393
      }
    },
    {
      "id": "edge-54-74",
      "a": 54,
      "b": 74,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 108,
        "to": 191
      },
      "doorPosition": {
        "x": 146,
        "y": 393
      }
    },
    {
      "id": "edge-55-75",
      "a": 55,
      "b": 75,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 191,
        "to": 273
      },
      "doorPosition": {
        "x": 229.5,
        "y": 393
      }
    },
    {
      "id": "edge-56-57",
      "a": 56,
      "b": 57,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 360,
        "y": 358
      }
    },
    {
      "id": "edge-57-58",
      "a": 57,
      "b": 58,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 442,
        "y": 358
      }
    },
    {
      "id": "edge-59-60",
      "a": 59,
      "b": 60,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 610,
        "y": 354.5
      }
    },
    {
      "id": "edge-59-79",
      "a": 59,
      "b": 79,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 566,
        "y": 393
      }
    },
    {
      "id": "edge-61-62",
      "a": 61,
      "b": 62,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 755,
        "y": 357
      }
    },
    {
      "id": "edge-62-63",
      "a": 62,
      "b": 63,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 809,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 809,
        "y": 357
      }
    },
    {
      "id": "edge-62-82",
      "a": 62,
      "b": 82,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 755,
        "to": 809
      },
      "doorPosition": {
        "x": 781,
        "y": 393
      }
    },
    {
      "id": "edge-63-64",
      "a": 63,
      "b": 64,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 850,
        "y": 357
      }
    },
    {
      "id": "edge-63-83",
      "a": 63,
      "b": 83,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 809,
        "to": 850
      },
      "doorPosition": {
        "x": 828.5,
        "y": 393
      }
    },
    {
      "id": "edge-64-84",
      "a": 64,
      "b": 84,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 850,
        "to": 922
      },
      "doorPosition": {
        "x": 882.5,
        "y": 393
      }
    },
    {
      "id": "edge-66-67",
      "a": 66,
      "b": 67,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 1072,
        "y": 360.5
      }
    },
    {
      "id": "edge-66-86",
      "a": 66,
      "b": 86,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1033,
        "y": 393
      }
    },
    {
      "id": "edge-67-68",
      "a": 67,
      "b": 68,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 1164,
        "y": 358
      }
    },
    {
      "id": "edge-68-69",
      "a": 68,
      "b": 69,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 1247,
        "y": 358
      }
    },
    {
      "id": "edge-70-90",
      "a": 70,
      "b": 90,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 1332,
        "to": 1415
      },
      "doorPosition": {
        "x": 1369.5,
        "y": 393
      }
    },
    {
      "id": "edge-71-72",
      "a": 71,
      "b": 72,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 1498,
        "y": 358.5
      }
    },
    {
      "id": "edge-71-91",
      "a": 71,
      "b": 91,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1455.5,
        "y": 393
      }
    },
    {
      "id": "edge-72-92",
      "a": 72,
      "b": 92,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1537.5,
        "y": 393
      }
    },
    {
      "id": "edge-73-93",
      "a": 73,
      "b": 93,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 20,
        "to": 108
      },
      "doorPosition": {
        "x": 61.5,
        "y": 465
      }
    },
    {
      "id": "edge-74-94",
      "a": 74,
      "b": 94,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 108,
        "to": 191
      },
      "doorPosition": {
        "x": 146,
        "y": 465
      }
    },
    {
      "id": "edge-75-95",
      "a": 75,
      "b": 95,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 191,
        "to": 273
      },
      "doorPosition": {
        "x": 231,
        "y": 465
      }
    },
    {
      "id": "edge-76-77",
      "a": 76,
      "b": 77,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 360,
        "y": 429
      }
    },
    {
      "id": "edge-77-78",
      "a": 77,
      "b": 78,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 442,
        "y": 429
      }
    },
    {
      "id": "edge-79-80",
      "a": 79,
      "b": 80,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 610,
        "y": 431.5
      }
    },
    {
      "id": "edge-79-99",
      "a": 79,
      "b": 99,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 566.5,
        "y": 465
      }
    },
    {
      "id": "edge-81-82",
      "a": 81,
      "b": 82,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 755,
        "y": 425
      }
    },
    {
      "id": "edge-81-101",
      "a": 81,
      "b": 101,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 683,
        "to": 745
      },
      "doorPosition": {
        "x": 709.5,
        "y": 465
      }
    },
    {
      "id": "edge-82-83",
      "a": 82,
      "b": 83,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 809,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 809,
        "y": 428
      }
    },
    {
      "id": "edge-83-84",
      "a": 83,
      "b": 84,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 850,
        "y": 428
      }
    },
    {
      "id": "edge-83-103",
      "a": 83,
      "b": 103,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 809,
        "to": 850
      },
      "doorPosition": {
        "x": 828.5,
        "y": 465
      }
    },
    {
      "id": "edge-84-85",
      "a": 84,
      "b": 85,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 922,
        "y": 426
      }
    },
    {
      "id": "edge-84-104",
      "a": 84,
      "b": 104,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 859,
        "to": 922
      },
      "doorPosition": {
        "x": 887,
        "y": 465
      }
    },
    {
      "id": "edge-85-105",
      "a": 85,
      "b": 105,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 956,
        "y": 465
      }
    },
    {
      "id": "edge-86-111",
      "a": 86,
      "b": 111,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1033,
        "y": 465
      }
    },
    {
      "id": "edge-87-112",
      "a": 87,
      "b": 112,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 1072,
        "to": 1164
      },
      "doorPosition": {
        "x": 1122,
        "y": 465
      }
    },
    {
      "id": "edge-88-113",
      "a": 88,
      "b": 113,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 1164,
        "to": 1247
      },
      "doorPosition": {
        "x": 1205,
        "y": 465
      }
    },
    {
      "id": "edge-89-90",
      "a": 89,
      "b": 90,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 1332,
        "y": 429.5
      }
    },
    {
      "id": "edge-89-114",
      "a": 89,
      "b": 114,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 1247,
        "to": 1332
      },
      "doorPosition": {
        "x": 1286.5,
        "y": 465
      }
    },
    {
      "id": "edge-91-92",
      "a": 91,
      "b": 92,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 1498,
        "y": 428
      }
    },
    {
      "id": "edge-92-117",
      "a": 92,
      "b": 117,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1536.5,
        "y": 465
      }
    },
    {
      "id": "edge-93-94",
      "a": 93,
      "b": 94,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 108,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 108,
        "y": 510
      }
    },
    {
      "id": "edge-93-118",
      "a": 93,
      "b": 118,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 20,
        "to": 108
      },
      "doorPosition": {
        "x": 60.5,
        "y": 555
      }
    },
    {
      "id": "edge-94-95",
      "a": 94,
      "b": 95,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 191,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 191,
        "y": 510
      }
    },
    {
      "id": "edge-94-119",
      "a": 94,
      "b": 119,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 108,
        "to": 191
      },
      "doorPosition": {
        "x": 146,
        "y": 555
      }
    },
    {
      "id": "edge-95-96",
      "a": 95,
      "b": 96,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 273,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 273,
        "y": 510
      }
    },
    {
      "id": "edge-95-120",
      "a": 95,
      "b": 120,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 191,
        "to": 273
      },
      "doorPosition": {
        "x": 227.5,
        "y": 555
      }
    },
    {
      "id": "edge-96-97",
      "a": 96,
      "b": 97,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 360,
        "y": 510
      }
    },
    {
      "id": "edge-97-98",
      "a": 97,
      "b": 98,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 442,
        "y": 510
      }
    },
    {
      "id": "edge-98-99",
      "a": 98,
      "b": 99,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 527,
        "y": 510
      }
    },
    {
      "id": "edge-99-100",
      "a": 99,
      "b": 100,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 610,
        "y": 511.5
      }
    },
    {
      "id": "edge-99-124",
      "a": 99,
      "b": 124,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 566.5,
        "y": 555
      }
    },
    {
      "id": "edge-100-101",
      "a": 100,
      "b": 101,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 465,
        "to": 511
      },
      "doorPosition": {
        "x": 683,
        "y": 488
      }
    },
    {
      "id": "edge-100-106",
      "a": 100,
      "b": 106,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 511,
        "to": 555
      },
      "doorPosition": {
        "x": 683,
        "y": 532
      }
    },
    {
      "id": "edge-101-106",
      "a": 101,
      "b": 106,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 511,
        "from": 683,
        "to": 745
      },
      "doorPosition": {
        "x": 709.5,
        "y": 511
      }
    },
    {
      "id": "edge-102-103",
      "a": 102,
      "b": 103,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 802,
        "from": 465,
        "to": 511
      },
      "doorPosition": {
        "x": 802,
        "y": 487
      }
    },
    {
      "id": "edge-102-107",
      "a": 102,
      "b": 107,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 511,
        "from": 745,
        "to": 802
      },
      "doorPosition": {
        "x": 772.5,
        "y": 511
      }
    },
    {
      "id": "edge-103-104",
      "a": 103,
      "b": 104,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 859,
        "from": 465,
        "to": 511
      },
      "doorPosition": {
        "x": 859,
        "y": 487
      }
    },
    {
      "id": "edge-103-108",
      "a": 103,
      "b": 108,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 511,
        "from": 802,
        "to": 859
      },
      "doorPosition": {
        "x": 829.5,
        "y": 511
      }
    },
    {
      "id": "edge-104-109",
      "a": 104,
      "b": 109,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 511,
        "from": 859,
        "to": 922
      },
      "doorPosition": {
        "x": 887,
        "y": 511
      }
    },
    {
      "id": "edge-105-110",
      "a": 105,
      "b": 110,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 511,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 956,
        "y": 511
      }
    },
    {
      "id": "edge-106-126",
      "a": 106,
      "b": 126,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 573,
        "from": 683,
        "to": 745
      },
      "doorPosition": {
        "x": 709.5,
        "y": 573
      }
    },
    {
      "id": "edge-107-108",
      "a": 107,
      "b": 108,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 802,
        "from": 511,
        "to": 573
      },
      "doorPosition": {
        "x": 802,
        "y": 541
      }
    },
    {
      "id": "edge-108-109",
      "a": 108,
      "b": 109,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 859,
        "from": 511,
        "to": 573
      },
      "doorPosition": {
        "x": 859,
        "y": 541
      }
    },
    {
      "id": "edge-108-128",
      "a": 108,
      "b": 128,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 573,
        "from": 802,
        "to": 859
      },
      "doorPosition": {
        "x": 829.5,
        "y": 573
      }
    },
    {
      "id": "edge-109-129",
      "a": 109,
      "b": 129,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 573,
        "from": 859,
        "to": 922
      },
      "doorPosition": {
        "x": 887,
        "y": 573
      }
    },
    {
      "id": "edge-110-130",
      "a": 110,
      "b": 130,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 573,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 955.5,
        "y": 573
      }
    },
    {
      "id": "edge-111-112",
      "a": 111,
      "b": 112,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 1072,
        "y": 510.5
      }
    },
    {
      "id": "edge-111-131",
      "a": 111,
      "b": 131,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1033,
        "y": 555
      }
    },
    {
      "id": "edge-112-113",
      "a": 112,
      "b": 113,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 1164,
        "y": 510.5
      }
    },
    {
      "id": "edge-112-132",
      "a": 112,
      "b": 132,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 1072,
        "to": 1164
      },
      "doorPosition": {
        "x": 1121.5,
        "y": 555
      }
    },
    {
      "id": "edge-113-114",
      "a": 113,
      "b": 114,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 1247,
        "y": 510.5
      }
    },
    {
      "id": "edge-114-115",
      "a": 114,
      "b": 115,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 1332,
        "y": 510.5
      }
    },
    {
      "id": "edge-114-134",
      "a": 114,
      "b": 134,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 1247,
        "to": 1332
      },
      "doorPosition": {
        "x": 1283.5,
        "y": 555
      }
    },
    {
      "id": "edge-115-116",
      "a": 115,
      "b": 116,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 1415,
        "y": 510.5
      }
    },
    {
      "id": "edge-116-117",
      "a": 116,
      "b": 117,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 465,
        "to": 555
      },
      "doorPosition": {
        "x": 1498,
        "y": 510.5
      }
    },
    {
      "id": "edge-116-136",
      "a": 116,
      "b": 136,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1455,
        "y": 555
      }
    },
    {
      "id": "edge-118-138",
      "a": 118,
      "b": 138,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 20,
        "to": 108
      },
      "doorPosition": {
        "x": 60.5,
        "y": 631
      }
    },
    {
      "id": "edge-119-139",
      "a": 119,
      "b": 139,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 108,
        "to": 191
      },
      "doorPosition": {
        "x": 146.5,
        "y": 631
      }
    },
    {
      "id": "edge-120-121",
      "a": 120,
      "b": 121,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 273,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 273,
        "y": 594
      }
    },
    {
      "id": "edge-121-122",
      "a": 121,
      "b": 122,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 360,
        "y": 596
      }
    },
    {
      "id": "edge-124-125",
      "a": 124,
      "b": 125,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 610,
        "y": 598.5
      }
    },
    {
      "id": "edge-124-144",
      "a": 124,
      "b": 144,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 566.5,
        "y": 631
      }
    },
    {
      "id": "edge-126-127",
      "a": 126,
      "b": 127,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 745,
        "from": 573,
        "to": 631
      },
      "doorPosition": {
        "x": 745,
        "y": 601.5
      }
    },
    {
      "id": "edge-126-146",
      "a": 126,
      "b": 146,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 683,
        "to": 745
      },
      "doorPosition": {
        "x": 709.5,
        "y": 631
      }
    },
    {
      "id": "edge-127-128",
      "a": 127,
      "b": 128,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 802,
        "from": 573,
        "to": 631
      },
      "doorPosition": {
        "x": 802,
        "y": 597.5
      }
    },
    {
      "id": "edge-128-129",
      "a": 128,
      "b": 129,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 859,
        "from": 573,
        "to": 631
      },
      "doorPosition": {
        "x": 859,
        "y": 601
      }
    },
    {
      "id": "edge-128-148",
      "a": 128,
      "b": 148,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 802,
        "to": 859
      },
      "doorPosition": {
        "x": 829.5,
        "y": 631
      }
    },
    {
      "id": "edge-129-130",
      "a": 129,
      "b": 130,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 573,
        "to": 631
      },
      "doorPosition": {
        "x": 922,
        "y": 603
      }
    },
    {
      "id": "edge-129-149",
      "a": 129,
      "b": 149,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 859,
        "to": 922
      },
      "doorPosition": {
        "x": 887,
        "y": 631
      }
    },
    {
      "id": "edge-131-151",
      "a": 131,
      "b": 151,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1033,
        "y": 631
      }
    },
    {
      "id": "edge-132-133",
      "a": 132,
      "b": 133,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 1164,
        "y": 596.5
      }
    },
    {
      "id": "edge-134-135",
      "a": 134,
      "b": 135,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 1332,
        "y": 596.5
      }
    },
    {
      "id": "edge-135-155",
      "a": 135,
      "b": 155,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 1332,
        "to": 1415
      },
      "doorPosition": {
        "x": 1370,
        "y": 631
      }
    },
    {
      "id": "edge-136-137",
      "a": 136,
      "b": 137,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 555,
        "to": 623
      },
      "doorPosition": {
        "x": 1498,
        "y": 592.5
      }
    },
    {
      "id": "edge-136-156",
      "a": 136,
      "b": 156,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 623,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1455.5,
        "y": 623
      }
    },
    {
      "id": "edge-137-157",
      "a": 137,
      "b": 157,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 623,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1538,
        "y": 623
      }
    },
    {
      "id": "edge-140-141",
      "a": 140,
      "b": 141,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 273,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 273,
        "y": 666
      }
    },
    {
      "id": "edge-141-142",
      "a": 141,
      "b": 142,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 360,
        "y": 668
      }
    },
    {
      "id": "edge-142-143",
      "a": 142,
      "b": 143,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 442,
        "y": 667
      }
    },
    {
      "id": "edge-142-165",
      "a": 142,
      "b": 165,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 398,
        "y": 702
      }
    },
    {
      "id": "edge-144-145",
      "a": 144,
      "b": 145,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 610,
        "y": 668
      }
    },
    {
      "id": "edge-144-167",
      "a": 144,
      "b": 167,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 566.5,
        "y": 702
      }
    },
    {
      "id": "edge-146-147",
      "a": 146,
      "b": 147,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 745,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 745,
        "y": 667
      }
    },
    {
      "id": "edge-147-148",
      "a": 147,
      "b": 148,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 802,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 802,
        "y": 667
      }
    },
    {
      "id": "edge-147-170",
      "a": 147,
      "b": 170,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 755,
        "to": 802
      },
      "doorPosition": {
        "x": 767,
        "y": 702
      }
    },
    {
      "id": "edge-148-149",
      "a": 148,
      "b": 149,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 859,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 859,
        "y": 665.5
      }
    },
    {
      "id": "edge-151-152",
      "a": 151,
      "b": 152,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 1072,
        "y": 671
      }
    },
    {
      "id": "edge-151-173",
      "a": 151,
      "b": 173,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1033.5,
        "y": 702
      }
    },
    {
      "id": "edge-152-153",
      "a": 152,
      "b": 153,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 1164,
        "y": 667.5
      }
    },
    {
      "id": "edge-153-154",
      "a": 153,
      "b": 154,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 1247,
        "y": 668
      }
    },
    {
      "id": "edge-154-176",
      "a": 154,
      "b": 176,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 1247,
        "to": 1332
      },
      "doorPosition": {
        "x": 1286,
        "y": 702
      }
    },
    {
      "id": "edge-155-177",
      "a": 155,
      "b": 177,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 1332,
        "to": 1415
      },
      "doorPosition": {
        "x": 1369.5,
        "y": 702
      }
    },
    {
      "id": "edge-156-157",
      "a": 156,
      "b": 157,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 623,
        "to": 675
      },
      "doorPosition": {
        "x": 1498,
        "y": 648
      }
    },
    {
      "id": "edge-156-158",
      "a": 156,
      "b": 158,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 675,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1455.5,
        "y": 675
      }
    },
    {
      "id": "edge-157-159",
      "a": 157,
      "b": 159,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 675,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1538,
        "y": 675
      }
    },
    {
      "id": "edge-158-159",
      "a": 158,
      "b": 159,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 675,
        "to": 727
      },
      "doorPosition": {
        "x": 1498,
        "y": 700
      }
    },
    {
      "id": "edge-158-178",
      "a": 158,
      "b": 178,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 727,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1455.5,
        "y": 727
      }
    },
    {
      "id": "edge-159-179",
      "a": 159,
      "b": 179,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 727,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1538,
        "y": 727
      }
    },
    {
      "id": "edge-160-161",
      "a": 160,
      "b": 161,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 94,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 94,
        "y": 744.5
      }
    },
    {
      "id": "edge-160-180",
      "a": 160,
      "b": 180,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 20,
        "to": 94
      },
      "doorPosition": {
        "x": 56,
        "y": 786
      }
    },
    {
      "id": "edge-161-162",
      "a": 161,
      "b": 162,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 167,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 167,
        "y": 744.5
      }
    },
    {
      "id": "edge-161-181",
      "a": 161,
      "b": 181,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 94,
        "to": 167
      },
      "doorPosition": {
        "x": 129.5,
        "y": 786
      }
    },
    {
      "id": "edge-162-163",
      "a": 162,
      "b": 163,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 240,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 240,
        "y": 744.5
      }
    },
    {
      "id": "edge-162-182",
      "a": 162,
      "b": 182,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 202.5,
        "y": 786
      }
    },
    {
      "id": "edge-163-164",
      "a": 163,
      "b": 164,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 300,
        "from": 702,
        "to": 742
      },
      "doorPosition": {
        "x": 300,
        "y": 728.5
      }
    },
    {
      "id": "edge-163-183",
      "a": 163,
      "b": 183,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 240,
        "to": 300
      },
      "doorPosition": {
        "x": 267,
        "y": 786
      }
    },
    {
      "id": "edge-164-165",
      "a": 164,
      "b": 165,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 702,
        "to": 742
      },
      "doorPosition": {
        "x": 360,
        "y": 723
      }
    },
    {
      "id": "edge-164-184",
      "a": 164,
      "b": 184,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 742,
        "from": 300,
        "to": 360
      },
      "doorPosition": {
        "x": 328,
        "y": 742
      }
    },
    {
      "id": "edge-166-188",
      "a": 166,
      "b": 188,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 442,
        "to": 527
      },
      "doorPosition": {
        "x": 482.5,
        "y": 786
      }
    },
    {
      "id": "edge-167-168",
      "a": 167,
      "b": 168,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 610,
        "y": 744.5
      }
    },
    {
      "id": "edge-168-169",
      "a": 168,
      "b": 169,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 683,
        "y": 744.5
      }
    },
    {
      "id": "edge-169-170",
      "a": 169,
      "b": 170,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 755,
        "y": 743.5
      }
    },
    {
      "id": "edge-170-171",
      "a": 170,
      "b": 171,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 850,
        "y": 743.5
      }
    },
    {
      "id": "edge-170-192",
      "a": 170,
      "b": 192,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 755,
        "to": 850
      },
      "doorPosition": {
        "x": 799,
        "y": 786
      }
    },
    {
      "id": "edge-171-172",
      "a": 171,
      "b": 172,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 922,
        "y": 744.5
      }
    },
    {
      "id": "edge-172-173",
      "a": 172,
      "b": 173,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 996,
        "y": 744.5
      }
    },
    {
      "id": "edge-173-174",
      "a": 173,
      "b": 174,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 1072,
        "y": 747
      }
    },
    {
      "id": "edge-174-175",
      "a": 174,
      "b": 175,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 1164,
        "y": 745
      }
    },
    {
      "id": "edge-175-197",
      "a": 175,
      "b": 197,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 1164,
        "to": 1247
      },
      "doorPosition": {
        "x": 1202.5,
        "y": 786
      }
    },
    {
      "id": "edge-176-198",
      "a": 176,
      "b": 198,
      "type": "solid",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 1247,
        "to": 1332
      },
      "doorPosition": {
        "x": 1286,
        "y": 786
      }
    },
    {
      "id": "edge-178-179",
      "a": 178,
      "b": 179,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 727,
        "to": 786
      },
      "doorPosition": {
        "x": 1498,
        "y": 755.5
      }
    },
    {
      "id": "edge-178-200",
      "a": 178,
      "b": 200,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1455.5,
        "y": 786
      }
    },
    {
      "id": "edge-179-201",
      "a": 179,
      "b": 201,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1538,
        "y": 786
      }
    },
    {
      "id": "edge-180-181",
      "a": 180,
      "b": 181,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 94,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 94,
        "y": 819
      }
    },
    {
      "id": "edge-181-182",
      "a": 181,
      "b": 182,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 167,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 167,
        "y": 819
      }
    },
    {
      "id": "edge-182-183",
      "a": 182,
      "b": 183,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 240,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 240,
        "y": 819
      }
    },
    {
      "id": "edge-183-186",
      "a": 183,
      "b": 186,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 300,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 300,
        "y": 829
      }
    },
    {
      "id": "edge-184-185",
      "a": 184,
      "b": 185,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 742,
        "to": 786
      },
      "doorPosition": {
        "x": 360,
        "y": 771
      }
    },
    {
      "id": "edge-184-186",
      "a": 184,
      "b": 186,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 300,
        "to": 360
      },
      "doorPosition": {
        "x": 326,
        "y": 786
      }
    },
    {
      "id": "edge-185-187",
      "a": 185,
      "b": 187,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 426.5,
        "y": 786
      }
    },
    {
      "id": "edge-186-187",
      "a": 186,
      "b": 187,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 360,
        "y": 827.5
      }
    },
    {
      "id": "edge-188-189",
      "a": 188,
      "b": 189,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 527,
        "y": 822.5
      }
    },
    {
      "id": "edge-190-191",
      "a": 190,
      "b": 191,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 683,
        "y": 822
      }
    },
    {
      "id": "edge-191-192",
      "a": 191,
      "b": 192,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 755,
        "y": 824.5
      }
    },
    {
      "id": "edge-192-193",
      "a": 192,
      "b": 193,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 850,
        "y": 824
      }
    },
    {
      "id": "edge-192-205",
      "a": 192,
      "b": 205,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 858,
        "from": 755,
        "to": 850
      },
      "doorPosition": {
        "x": 799,
        "y": 858
      }
    },
    {
      "id": "edge-194-207",
      "a": 194,
      "b": 207,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 858,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 955.5,
        "y": 858
      }
    },
    {
      "id": "edge-195-196",
      "a": 195,
      "b": 196,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 1072,
        "y": 822.5
      }
    },
    {
      "id": "edge-196-197",
      "a": 196,
      "b": 197,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 1164,
        "y": 822
      }
    },
    {
      "id": "edge-198-199",
      "a": 198,
      "b": 199,
      "type": "solid",
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 1332,
        "y": 820
      }
    },
    {
      "id": "edge-199-200",
      "a": 199,
      "b": 200,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 1415,
        "y": 822.5
      }
    },
    {
      "id": "edge-200-201",
      "a": 200,
      "b": 201,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 1498,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 1498,
        "y": 821
      }
    },
    {
      "id": "edge-202-203",
      "a": 202,
      "b": 203,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 858,
        "to": 929
      },
      "doorPosition": {
        "x": 610,
        "y": 893
      }
    },
    {
      "id": "edge-203-204",
      "a": 203,
      "b": 204,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 858,
        "to": 929
      },
      "doorPosition": {
        "x": 683,
        "y": 893.5
      }
    },
    {
      "id": "edge-204-205",
      "a": 204,
      "b": 205,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 858,
        "to": 929
      },
      "doorPosition": {
        "x": 755,
        "y": 895.5
      }
    },
    {
      "id": "edge-205-206",
      "a": 205,
      "b": 206,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 858,
        "to": 929
      },
      "doorPosition": {
        "x": 850,
        "y": 896.5
      }
    },
    {
      "id": "edge-205-212",
      "a": 205,
      "b": 212,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 929,
        "from": 755,
        "to": 850
      },
      "doorPosition": {
        "x": 799,
        "y": 929
      }
    },
    {
      "id": "edge-208-215",
      "a": 208,
      "b": 215,
      "type": "open",
      "boundary": {
        "axis": "h",
        "at": 929,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1033,
        "y": 929
      }
    },
    {
      "id": "edge-209-210",
      "a": 209,
      "b": 210,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 929,
        "to": 1003
      },
      "doorPosition": {
        "x": 610,
        "y": 965.5
      }
    },
    {
      "id": "edge-210-211",
      "a": 210,
      "b": 211,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 929,
        "to": 1003
      },
      "doorPosition": {
        "x": 683,
        "y": 965.5
      }
    },
    {
      "id": "edge-211-212",
      "a": 211,
      "b": 212,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 929,
        "to": 1003
      },
      "doorPosition": {
        "x": 755,
        "y": 966
      }
    },
    {
      "id": "edge-212-213",
      "a": 212,
      "b": 213,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 929,
        "to": 1003
      },
      "doorPosition": {
        "x": 850,
        "y": 968
      }
    },
    {
      "id": "edge-213-214",
      "a": 213,
      "b": 214,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 929,
        "to": 1003
      },
      "doorPosition": {
        "x": 922,
        "y": 966
      }
    },
    {
      "id": "edge-214-215",
      "a": 214,
      "b": 215,
      "type": "open",
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 929,
        "to": 1003
      },
      "doorPosition": {
        "x": 996,
        "y": 966.5
      }
    },
    {
      "id": "edge-39-40",
      "a": 39,
      "b": 40,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 527,
        "y": 284
      }
    },
    {
      "id": "edge-58-59",
      "a": 58,
      "b": 59,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 527,
        "y": 360
      }
    },
    {
      "id": "edge-78-79",
      "a": 78,
      "b": 79,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 527,
        "y": 437
      }
    },
    {
      "id": "edge-42-61",
      "a": 42,
      "b": 61,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 683,
        "to": 755
      },
      "doorPosition": {
        "x": 718,
        "y": 321
      }
    },
    {
      "id": "edge-43-62",
      "a": 43,
      "b": 62,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 755,
        "to": 809
      },
      "doorPosition": {
        "x": 775,
        "y": 321
      }
    },
    {
      "id": "edge-45-65",
      "a": 45,
      "b": 65,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 958,
        "y": 321
      }
    },
    {
      "id": "edge-110-111",
      "a": 110,
      "b": 111,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 511,
        "to": 555
      },
      "doorPosition": {
        "x": 996,
        "y": 543
      }
    },
    {
      "id": "edge-123-124",
      "a": 123,
      "b": 124,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 527,
        "y": 596
      }
    },
    {
      "id": "edge-143-144",
      "a": 143,
      "b": 144,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 527,
        "y": 672
      }
    },
    {
      "id": "edge-150-151",
      "a": 150,
      "b": 151,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 996,
        "y": 671
      }
    },
    {
      "id": "edge-166-167",
      "a": 166,
      "b": 167,
      "type": "glass",
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 527,
        "y": 746
      }
    },
    {
      "id": "edge-172-194",
      "a": 172,
      "b": 194,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 964,
        "y": 786
      }
    },
    {
      "id": "edge-173-195",
      "a": 173,
      "b": 195,
      "type": "glass",
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1026,
        "y": 786
      }
    },
    {
      "id": "main-north",
      "a": 4,
      "b": null,
      "type": "main",
      "direction": "north"
    },
    {
      "id": "main-west",
      "a": 93,
      "b": null,
      "type": "main",
      "direction": "west"
    },
    {
      "id": "main-east",
      "a": 117,
      "b": null,
      "type": "main",
      "direction": "east"
    },
    {
      "id": "main-south",
      "a": 212,
      "b": null,
      "type": "main",
      "direction": "south"
    }
  ],
  "walls": [
    {
      "id": "edge-1-2",
      "a": 1,
      "b": 2,
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 25,
        "to": 96
      },
      "doorPosition": {
        "x": 610,
        "y": 30
      }
    },
    {
      "id": "edge-2-9",
      "a": 2,
      "b": 9,
      "boundary": {
        "axis": "h",
        "at": 96,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 617,
        "y": 96
      }
    },
    {
      "id": "edge-3-10",
      "a": 3,
      "b": 10,
      "boundary": {
        "axis": "h",
        "at": 96,
        "from": 683,
        "to": 755
      },
      "doorPosition": {
        "x": 689,
        "y": 96
      }
    },
    {
      "id": "edge-5-12",
      "a": 5,
      "b": 12,
      "boundary": {
        "axis": "h",
        "at": 96,
        "from": 850,
        "to": 922
      },
      "doorPosition": {
        "x": 856,
        "y": 96
      }
    },
    {
      "id": "edge-6-13",
      "a": 6,
      "b": 13,
      "boundary": {
        "axis": "h",
        "at": 96,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 927,
        "y": 96
      }
    },
    {
      "id": "edge-8-9",
      "a": 8,
      "b": 9,
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 96,
        "to": 167
      },
      "doorPosition": {
        "x": 610,
        "y": 101
      }
    },
    {
      "id": "edge-9-10",
      "a": 9,
      "b": 10,
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 96,
        "to": 167
      },
      "doorPosition": {
        "x": 683,
        "y": 101
      }
    },
    {
      "id": "edge-10-11",
      "a": 10,
      "b": 11,
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 96,
        "to": 167
      },
      "doorPosition": {
        "x": 755,
        "y": 103.5
      }
    },
    {
      "id": "edge-11-12",
      "a": 11,
      "b": 12,
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 96,
        "to": 167
      },
      "doorPosition": {
        "x": 850,
        "y": 101
      }
    },
    {
      "id": "edge-13-14",
      "a": 13,
      "b": 14,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 96,
        "to": 167
      },
      "doorPosition": {
        "x": 996,
        "y": 101
      }
    },
    {
      "id": "edge-15-16",
      "a": 15,
      "b": 16,
      "boundary": {
        "axis": "v",
        "at": 108,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 108,
        "y": 172
      }
    },
    {
      "id": "edge-18-19",
      "a": 18,
      "b": 19,
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 360,
        "y": 172
      }
    },
    {
      "id": "edge-20-21",
      "a": 20,
      "b": 21,
      "boundary": {
        "axis": "v",
        "at": 527,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 527,
        "y": 172
      }
    },
    {
      "id": "edge-21-22",
      "a": 21,
      "b": 22,
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 610,
        "y": 231.5
      }
    },
    {
      "id": "edge-22-23",
      "a": 22,
      "b": 23,
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 683,
        "y": 231.5
      }
    },
    {
      "id": "edge-23-24",
      "a": 23,
      "b": 24,
      "boundary": {
        "axis": "v",
        "at": 755,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 755,
        "y": 231.5
      }
    },
    {
      "id": "edge-24-25",
      "a": 24,
      "b": 25,
      "boundary": {
        "axis": "v",
        "at": 850,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 850,
        "y": 172
      }
    },
    {
      "id": "edge-25-26",
      "a": 25,
      "b": 26,
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 922,
        "y": 231
      }
    },
    {
      "id": "edge-25-44",
      "a": 25,
      "b": 44,
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 850,
        "to": 922
      },
      "doorPosition": {
        "x": 855,
        "y": 240
      }
    },
    {
      "id": "edge-26-27",
      "a": 26,
      "b": 27,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 996,
        "y": 231
      }
    },
    {
      "id": "edge-27-28",
      "a": 27,
      "b": 28,
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 1072,
        "y": 231.5
      }
    },
    {
      "id": "edge-29-48",
      "a": 29,
      "b": 48,
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 1164,
        "to": 1247
      },
      "doorPosition": {
        "x": 1170.5,
        "y": 240
      }
    },
    {
      "id": "edge-30-31",
      "a": 30,
      "b": 31,
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 167,
        "to": 240
      },
      "doorPosition": {
        "x": 1332,
        "y": 172
      }
    },
    {
      "id": "edge-32-51",
      "a": 32,
      "b": 51,
      "boundary": {
        "axis": "h",
        "at": 240,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1421,
        "y": 240
      }
    },
    {
      "id": "edge-34-35",
      "a": 34,
      "b": 35,
      "boundary": {
        "axis": "v",
        "at": 108,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 108,
        "y": 245
      }
    },
    {
      "id": "edge-36-55",
      "a": 36,
      "b": 55,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 191,
        "to": 273
      },
      "doorPosition": {
        "x": 197,
        "y": 321
      }
    },
    {
      "id": "edge-37-38",
      "a": 37,
      "b": 38,
      "boundary": {
        "axis": "v",
        "at": 360,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 360,
        "y": 313
      }
    },
    {
      "id": "edge-37-56",
      "a": 37,
      "b": 56,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 273,
        "to": 360
      },
      "doorPosition": {
        "x": 280,
        "y": 321
      }
    },
    {
      "id": "edge-38-57",
      "a": 38,
      "b": 57,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 365,
        "y": 321
      }
    },
    {
      "id": "edge-39-58",
      "a": 39,
      "b": 58,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 442,
        "to": 527
      },
      "doorPosition": {
        "x": 447,
        "y": 321
      }
    },
    {
      "id": "edge-41-60",
      "a": 41,
      "b": 60,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 617.5,
        "y": 321
      }
    },
    {
      "id": "edge-43-63",
      "a": 43,
      "b": 63,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 809,
        "to": 850
      },
      "doorPosition": {
        "x": 814,
        "y": 321
      }
    },
    {
      "id": "edge-44-64",
      "a": 44,
      "b": 64,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 850,
        "to": 922
      },
      "doorPosition": {
        "x": 855,
        "y": 321
      }
    },
    {
      "id": "edge-47-48",
      "a": 47,
      "b": 48,
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 1164,
        "y": 313
      }
    },
    {
      "id": "edge-47-67",
      "a": 47,
      "b": 67,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 1072,
        "to": 1164
      },
      "doorPosition": {
        "x": 1083.5,
        "y": 321
      }
    },
    {
      "id": "edge-48-68",
      "a": 48,
      "b": 68,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 1164,
        "to": 1247
      },
      "doorPosition": {
        "x": 1169,
        "y": 321
      }
    },
    {
      "id": "edge-49-69",
      "a": 49,
      "b": 69,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 1247,
        "to": 1332
      },
      "doorPosition": {
        "x": 1252,
        "y": 321
      }
    },
    {
      "id": "edge-50-51",
      "a": 50,
      "b": 51,
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 240,
        "to": 321
      },
      "doorPosition": {
        "x": 1415,
        "y": 313.5
      }
    },
    {
      "id": "edge-50-70",
      "a": 50,
      "b": 70,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 1332,
        "to": 1415
      },
      "doorPosition": {
        "x": 1338,
        "y": 321
      }
    },
    {
      "id": "edge-52-72",
      "a": 52,
      "b": 72,
      "boundary": {
        "axis": "h",
        "at": 321,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1503,
        "y": 321
      }
    },
    {
      "id": "edge-53-54",
      "a": 53,
      "b": 54,
      "boundary": {
        "axis": "v",
        "at": 108,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 108,
        "y": 326
      }
    },
    {
      "id": "edge-54-55",
      "a": 54,
      "b": 55,
      "boundary": {
        "axis": "v",
        "at": 191,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 191,
        "y": 326
      }
    },
    {
      "id": "edge-55-56",
      "a": 55,
      "b": 56,
      "boundary": {
        "axis": "v",
        "at": 273,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 273,
        "y": 326
      }
    },
    {
      "id": "edge-56-76",
      "a": 56,
      "b": 76,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 273,
        "to": 360
      },
      "doorPosition": {
        "x": 280,
        "y": 393
      }
    },
    {
      "id": "edge-57-77",
      "a": 57,
      "b": 77,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 365,
        "y": 393
      }
    },
    {
      "id": "edge-58-78",
      "a": 58,
      "b": 78,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 442,
        "to": 527
      },
      "doorPosition": {
        "x": 447,
        "y": 393
      }
    },
    {
      "id": "edge-60-61",
      "a": 60,
      "b": 61,
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 683,
        "y": 384
      }
    },
    {
      "id": "edge-60-80",
      "a": 60,
      "b": 80,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 617.5,
        "y": 393
      }
    },
    {
      "id": "edge-61-81",
      "a": 61,
      "b": 81,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 683,
        "to": 755
      },
      "doorPosition": {
        "x": 689.5,
        "y": 393
      }
    },
    {
      "id": "edge-64-65",
      "a": 64,
      "b": 65,
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 922,
        "y": 326
      }
    },
    {
      "id": "edge-65-66",
      "a": 65,
      "b": 66,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 996,
        "y": 384
      }
    },
    {
      "id": "edge-65-85",
      "a": 65,
      "b": 85,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 927,
        "y": 393
      }
    },
    {
      "id": "edge-67-87",
      "a": 67,
      "b": 87,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 1072,
        "to": 1164
      },
      "doorPosition": {
        "x": 1083.5,
        "y": 393
      }
    },
    {
      "id": "edge-68-88",
      "a": 68,
      "b": 88,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 1164,
        "to": 1247
      },
      "doorPosition": {
        "x": 1170.5,
        "y": 393
      }
    },
    {
      "id": "edge-69-70",
      "a": 69,
      "b": 70,
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 1332,
        "y": 384.5
      }
    },
    {
      "id": "edge-69-89",
      "a": 69,
      "b": 89,
      "boundary": {
        "axis": "h",
        "at": 393,
        "from": 1247,
        "to": 1332
      },
      "doorPosition": {
        "x": 1253.5,
        "y": 393
      }
    },
    {
      "id": "edge-70-71",
      "a": 70,
      "b": 71,
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 321,
        "to": 393
      },
      "doorPosition": {
        "x": 1415,
        "y": 326
      }
    },
    {
      "id": "edge-73-74",
      "a": 73,
      "b": 74,
      "boundary": {
        "axis": "v",
        "at": 108,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 108,
        "y": 456
      }
    },
    {
      "id": "edge-74-75",
      "a": 74,
      "b": 75,
      "boundary": {
        "axis": "v",
        "at": 191,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 191,
        "y": 456
      }
    },
    {
      "id": "edge-75-76",
      "a": 75,
      "b": 76,
      "boundary": {
        "axis": "v",
        "at": 273,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 273,
        "y": 456.5
      }
    },
    {
      "id": "edge-76-96",
      "a": 76,
      "b": 96,
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 273,
        "to": 360
      },
      "doorPosition": {
        "x": 278,
        "y": 465
      }
    },
    {
      "id": "edge-77-97",
      "a": 77,
      "b": 97,
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 365,
        "y": 465
      }
    },
    {
      "id": "edge-78-98",
      "a": 78,
      "b": 98,
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 442,
        "to": 527
      },
      "doorPosition": {
        "x": 447,
        "y": 465
      }
    },
    {
      "id": "edge-80-81",
      "a": 80,
      "b": 81,
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 683,
        "y": 456
      }
    },
    {
      "id": "edge-80-100",
      "a": 80,
      "b": 100,
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 617.5,
        "y": 465
      }
    },
    {
      "id": "edge-82-102",
      "a": 82,
      "b": 102,
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 755,
        "to": 802
      },
      "doorPosition": {
        "x": 793.5,
        "y": 465
      }
    },
    {
      "id": "edge-85-86",
      "a": 85,
      "b": 86,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 996,
        "y": 398
      }
    },
    {
      "id": "edge-86-87",
      "a": 86,
      "b": 87,
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 1072,
        "y": 398
      }
    },
    {
      "id": "edge-87-88",
      "a": 87,
      "b": 88,
      "boundary": {
        "axis": "v",
        "at": 1164,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 1164,
        "y": 456.5
      }
    },
    {
      "id": "edge-88-89",
      "a": 88,
      "b": 89,
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 1247,
        "y": 456.5
      }
    },
    {
      "id": "edge-90-91",
      "a": 90,
      "b": 91,
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 393,
        "to": 465
      },
      "doorPosition": {
        "x": 1415,
        "y": 456.5
      }
    },
    {
      "id": "edge-90-115",
      "a": 90,
      "b": 115,
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 1332,
        "to": 1415
      },
      "doorPosition": {
        "x": 1337,
        "y": 465
      }
    },
    {
      "id": "edge-91-116",
      "a": 91,
      "b": 116,
      "boundary": {
        "axis": "h",
        "at": 465,
        "from": 1415,
        "to": 1498
      },
      "doorPosition": {
        "x": 1420,
        "y": 465
      }
    },
    {
      "id": "edge-96-121",
      "a": 96,
      "b": 121,
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 273,
        "to": 360
      },
      "doorPosition": {
        "x": 278,
        "y": 555
      }
    },
    {
      "id": "edge-97-122",
      "a": 97,
      "b": 122,
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 365,
        "y": 555
      }
    },
    {
      "id": "edge-98-123",
      "a": 98,
      "b": 123,
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 442,
        "to": 527
      },
      "doorPosition": {
        "x": 449,
        "y": 555
      }
    },
    {
      "id": "edge-100-125",
      "a": 100,
      "b": 125,
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 617.5,
        "y": 555
      }
    },
    {
      "id": "edge-101-102",
      "a": 101,
      "b": 102,
      "boundary": {
        "axis": "v",
        "at": 745,
        "from": 465,
        "to": 511
      },
      "doorPosition": {
        "x": 745,
        "y": 470
      }
    },
    {
      "id": "edge-104-105",
      "a": 104,
      "b": 105,
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 465,
        "to": 511
      },
      "doorPosition": {
        "x": 922,
        "y": 470
      }
    },
    {
      "id": "edge-105-111",
      "a": 105,
      "b": 111,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 465,
        "to": 511
      },
      "doorPosition": {
        "x": 996,
        "y": 470
      }
    },
    {
      "id": "edge-106-107",
      "a": 106,
      "b": 107,
      "boundary": {
        "axis": "v",
        "at": 745,
        "from": 511,
        "to": 573
      },
      "doorPosition": {
        "x": 745,
        "y": 516
      }
    },
    {
      "id": "edge-106-125",
      "a": 106,
      "b": 125,
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 555,
        "to": 573
      },
      "doorPosition": {
        "x": 683,
        "y": 560
      }
    },
    {
      "id": "edge-107-127",
      "a": 107,
      "b": 127,
      "boundary": {
        "axis": "h",
        "at": 573,
        "from": 745,
        "to": 802
      },
      "doorPosition": {
        "x": 750,
        "y": 573
      }
    },
    {
      "id": "edge-109-110",
      "a": 109,
      "b": 110,
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 511,
        "to": 573
      },
      "doorPosition": {
        "x": 922,
        "y": 516
      }
    },
    {
      "id": "edge-110-131",
      "a": 110,
      "b": 131,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 555,
        "to": 573
      },
      "doorPosition": {
        "x": 996,
        "y": 560
      }
    },
    {
      "id": "edge-113-133",
      "a": 113,
      "b": 133,
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 1164,
        "to": 1247
      },
      "doorPosition": {
        "x": 1169,
        "y": 555
      }
    },
    {
      "id": "edge-115-135",
      "a": 115,
      "b": 135,
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 1332,
        "to": 1415
      },
      "doorPosition": {
        "x": 1337,
        "y": 555
      }
    },
    {
      "id": "edge-117-137",
      "a": 117,
      "b": 137,
      "boundary": {
        "axis": "h",
        "at": 555,
        "from": 1498,
        "to": 1583
      },
      "doorPosition": {
        "x": 1553.5,
        "y": 555
      }
    },
    {
      "id": "edge-118-119",
      "a": 118,
      "b": 119,
      "boundary": {
        "axis": "v",
        "at": 108,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 108,
        "y": 560
      }
    },
    {
      "id": "edge-119-120",
      "a": 119,
      "b": 120,
      "boundary": {
        "axis": "v",
        "at": 191,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 191,
        "y": 560
      }
    },
    {
      "id": "edge-120-140",
      "a": 120,
      "b": 140,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 191,
        "to": 273
      },
      "doorPosition": {
        "x": 197,
        "y": 631
      }
    },
    {
      "id": "edge-121-141",
      "a": 121,
      "b": 141,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 273,
        "to": 360
      },
      "doorPosition": {
        "x": 278,
        "y": 631
      }
    },
    {
      "id": "edge-122-123",
      "a": 122,
      "b": 123,
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 442,
        "y": 623
      }
    },
    {
      "id": "edge-122-142",
      "a": 122,
      "b": 142,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 365,
        "y": 631
      }
    },
    {
      "id": "edge-123-143",
      "a": 123,
      "b": 143,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 442,
        "to": 527
      },
      "doorPosition": {
        "x": 447,
        "y": 631
      }
    },
    {
      "id": "edge-125-126",
      "a": 125,
      "b": 126,
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 573,
        "to": 631
      },
      "doorPosition": {
        "x": 683,
        "y": 622.5
      }
    },
    {
      "id": "edge-125-145",
      "a": 125,
      "b": 145,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 617.5,
        "y": 631
      }
    },
    {
      "id": "edge-127-147",
      "a": 127,
      "b": 147,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 745,
        "to": 802
      },
      "doorPosition": {
        "x": 750,
        "y": 631
      }
    },
    {
      "id": "edge-130-131",
      "a": 130,
      "b": 131,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 573,
        "to": 631
      },
      "doorPosition": {
        "x": 996,
        "y": 623
      }
    },
    {
      "id": "edge-130-150",
      "a": 130,
      "b": 150,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 928,
        "y": 631
      }
    },
    {
      "id": "edge-131-132",
      "a": 131,
      "b": 132,
      "boundary": {
        "axis": "v",
        "at": 1072,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 1072,
        "y": 560.5
      }
    },
    {
      "id": "edge-132-152",
      "a": 132,
      "b": 152,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 1072,
        "to": 1164
      },
      "doorPosition": {
        "x": 1084.5,
        "y": 631
      }
    },
    {
      "id": "edge-133-134",
      "a": 133,
      "b": 134,
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 555,
        "to": 631
      },
      "doorPosition": {
        "x": 1247,
        "y": 561
      }
    },
    {
      "id": "edge-133-153",
      "a": 133,
      "b": 153,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 1164,
        "to": 1247
      },
      "doorPosition": {
        "x": 1169,
        "y": 631
      }
    },
    {
      "id": "edge-134-154",
      "a": 134,
      "b": 154,
      "boundary": {
        "axis": "h",
        "at": 631,
        "from": 1247,
        "to": 1332
      },
      "doorPosition": {
        "x": 1252,
        "y": 631
      }
    },
    {
      "id": "edge-135-136",
      "a": 135,
      "b": 136,
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 555,
        "to": 623
      },
      "doorPosition": {
        "x": 1415,
        "y": 561
      }
    },
    {
      "id": "edge-138-139",
      "a": 138,
      "b": 139,
      "boundary": {
        "axis": "v",
        "at": 108,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 108,
        "y": 694
      }
    },
    {
      "id": "edge-138-160",
      "a": 138,
      "b": 160,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 20,
        "to": 94
      },
      "doorPosition": {
        "x": 27,
        "y": 702
      }
    },
    {
      "id": "edge-138-161",
      "a": 138,
      "b": 161,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 94,
        "to": 108
      },
      "doorPosition": {
        "x": 99,
        "y": 702
      }
    },
    {
      "id": "edge-139-140",
      "a": 139,
      "b": 140,
      "boundary": {
        "axis": "v",
        "at": 191,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 191,
        "y": 694
      }
    },
    {
      "id": "edge-139-161",
      "a": 139,
      "b": 161,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 108,
        "to": 167
      },
      "doorPosition": {
        "x": 113,
        "y": 702
      }
    },
    {
      "id": "edge-139-162",
      "a": 139,
      "b": 162,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 167,
        "to": 191
      },
      "doorPosition": {
        "x": 172,
        "y": 702
      }
    },
    {
      "id": "edge-140-162",
      "a": 140,
      "b": 162,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 191,
        "to": 240
      },
      "doorPosition": {
        "x": 196,
        "y": 702
      }
    },
    {
      "id": "edge-140-163",
      "a": 140,
      "b": 163,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 240,
        "to": 273
      },
      "doorPosition": {
        "x": 245,
        "y": 702
      }
    },
    {
      "id": "edge-141-163",
      "a": 141,
      "b": 163,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 273,
        "to": 300
      },
      "doorPosition": {
        "x": 278,
        "y": 702
      }
    },
    {
      "id": "edge-141-164",
      "a": 141,
      "b": 164,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 300,
        "to": 360
      },
      "doorPosition": {
        "x": 306.5,
        "y": 702
      }
    },
    {
      "id": "edge-143-166",
      "a": 143,
      "b": 166,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 442,
        "to": 527
      },
      "doorPosition": {
        "x": 448.5,
        "y": 702
      }
    },
    {
      "id": "edge-145-146",
      "a": 145,
      "b": 146,
      "boundary": {
        "axis": "v",
        "at": 683,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 683,
        "y": 693.5
      }
    },
    {
      "id": "edge-145-168",
      "a": 145,
      "b": 168,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 615,
        "y": 702
      }
    },
    {
      "id": "edge-146-169",
      "a": 146,
      "b": 169,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 683,
        "to": 745
      },
      "doorPosition": {
        "x": 688,
        "y": 702
      }
    },
    {
      "id": "edge-148-170",
      "a": 148,
      "b": 170,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 802,
        "to": 850
      },
      "doorPosition": {
        "x": 807,
        "y": 702
      }
    },
    {
      "id": "edge-149-150",
      "a": 149,
      "b": 150,
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 922,
        "y": 693.5
      }
    },
    {
      "id": "edge-149-171",
      "a": 149,
      "b": 171,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 859,
        "to": 922
      },
      "doorPosition": {
        "x": 864,
        "y": 702
      }
    },
    {
      "id": "edge-150-172",
      "a": 150,
      "b": 172,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 927,
        "y": 702
      }
    },
    {
      "id": "edge-152-174",
      "a": 152,
      "b": 174,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 1072,
        "to": 1164
      },
      "doorPosition": {
        "x": 1085,
        "y": 702
      }
    },
    {
      "id": "edge-153-175",
      "a": 153,
      "b": 175,
      "boundary": {
        "axis": "h",
        "at": 702,
        "from": 1164,
        "to": 1247
      },
      "doorPosition": {
        "x": 1169,
        "y": 702
      }
    },
    {
      "id": "edge-154-155",
      "a": 154,
      "b": 155,
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 631,
        "to": 702
      },
      "doorPosition": {
        "x": 1332,
        "y": 636
      }
    },
    {
      "id": "edge-155-156",
      "a": 155,
      "b": 156,
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 631,
        "to": 675
      },
      "doorPosition": {
        "x": 1415,
        "y": 636
      }
    },
    {
      "id": "edge-155-158",
      "a": 155,
      "b": 158,
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 675,
        "to": 702
      },
      "doorPosition": {
        "x": 1415,
        "y": 680
      }
    },
    {
      "id": "edge-158-177",
      "a": 158,
      "b": 177,
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 702,
        "to": 727
      },
      "doorPosition": {
        "x": 1415,
        "y": 707
      }
    },
    {
      "id": "edge-163-184",
      "a": 163,
      "b": 184,
      "boundary": {
        "axis": "v",
        "at": 300,
        "from": 742,
        "to": 786
      },
      "doorPosition": {
        "x": 300,
        "y": 747
      }
    },
    {
      "id": "edge-165-166",
      "a": 165,
      "b": 166,
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 702,
        "to": 742
      },
      "doorPosition": {
        "x": 442,
        "y": 707
      }
    },
    {
      "id": "edge-165-185",
      "a": 165,
      "b": 185,
      "boundary": {
        "axis": "h",
        "at": 742,
        "from": 360,
        "to": 442
      },
      "doorPosition": {
        "x": 366,
        "y": 742
      }
    },
    {
      "id": "edge-166-185",
      "a": 166,
      "b": 185,
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 742,
        "to": 786
      },
      "doorPosition": {
        "x": 442,
        "y": 750
      }
    },
    {
      "id": "edge-167-189",
      "a": 167,
      "b": 189,
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 532,
        "y": 786
      }
    },
    {
      "id": "edge-168-190",
      "a": 168,
      "b": 190,
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 617,
        "y": 786
      }
    },
    {
      "id": "edge-169-191",
      "a": 169,
      "b": 191,
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 683,
        "to": 755
      },
      "doorPosition": {
        "x": 688,
        "y": 786
      }
    },
    {
      "id": "edge-171-193",
      "a": 171,
      "b": 193,
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 850,
        "to": 922
      },
      "doorPosition": {
        "x": 856,
        "y": 786
      }
    },
    {
      "id": "edge-174-196",
      "a": 174,
      "b": 196,
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 1072,
        "to": 1164
      },
      "doorPosition": {
        "x": 1078.5,
        "y": 786
      }
    },
    {
      "id": "edge-175-176",
      "a": 175,
      "b": 176,
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 1247,
        "y": 707
      }
    },
    {
      "id": "edge-176-177",
      "a": 176,
      "b": 177,
      "boundary": {
        "axis": "v",
        "at": 1332,
        "from": 702,
        "to": 786
      },
      "doorPosition": {
        "x": 1332,
        "y": 778
      }
    },
    {
      "id": "edge-177-178",
      "a": 177,
      "b": 178,
      "boundary": {
        "axis": "v",
        "at": 1415,
        "from": 727,
        "to": 786
      },
      "doorPosition": {
        "x": 1415,
        "y": 777.5
      }
    },
    {
      "id": "edge-177-199",
      "a": 177,
      "b": 199,
      "boundary": {
        "axis": "h",
        "at": 786,
        "from": 1332,
        "to": 1415
      },
      "doorPosition": {
        "x": 1338,
        "y": 786
      }
    },
    {
      "id": "edge-187-188",
      "a": 187,
      "b": 188,
      "boundary": {
        "axis": "v",
        "at": 442,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 442,
        "y": 794
      }
    },
    {
      "id": "edge-189-190",
      "a": 189,
      "b": 190,
      "boundary": {
        "axis": "v",
        "at": 610,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 610,
        "y": 849
      }
    },
    {
      "id": "edge-189-202",
      "a": 189,
      "b": 202,
      "boundary": {
        "axis": "h",
        "at": 858,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 534.5,
        "y": 858
      }
    },
    {
      "id": "edge-190-203",
      "a": 190,
      "b": 203,
      "boundary": {
        "axis": "h",
        "at": 858,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 615,
        "y": 858
      }
    },
    {
      "id": "edge-191-204",
      "a": 191,
      "b": 204,
      "boundary": {
        "axis": "h",
        "at": 858,
        "from": 683,
        "to": 755
      },
      "doorPosition": {
        "x": 688,
        "y": 858
      }
    },
    {
      "id": "edge-193-194",
      "a": 193,
      "b": 194,
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 922,
        "y": 849.5
      }
    },
    {
      "id": "edge-193-206",
      "a": 193,
      "b": 206,
      "boundary": {
        "axis": "h",
        "at": 858,
        "from": 850,
        "to": 922
      },
      "doorPosition": {
        "x": 856.5,
        "y": 858
      }
    },
    {
      "id": "edge-194-195",
      "a": 194,
      "b": 195,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 996,
        "y": 791
      }
    },
    {
      "id": "edge-195-208",
      "a": 195,
      "b": 208,
      "boundary": {
        "axis": "h",
        "at": 858,
        "from": 996,
        "to": 1072
      },
      "doorPosition": {
        "x": 1002.5,
        "y": 858
      }
    },
    {
      "id": "edge-197-198",
      "a": 197,
      "b": 198,
      "boundary": {
        "axis": "v",
        "at": 1247,
        "from": 786,
        "to": 858
      },
      "doorPosition": {
        "x": 1247,
        "y": 849
      }
    },
    {
      "id": "edge-202-209",
      "a": 202,
      "b": 209,
      "boundary": {
        "axis": "h",
        "at": 929,
        "from": 527,
        "to": 610
      },
      "doorPosition": {
        "x": 534,
        "y": 929
      }
    },
    {
      "id": "edge-203-210",
      "a": 203,
      "b": 210,
      "boundary": {
        "axis": "h",
        "at": 929,
        "from": 610,
        "to": 683
      },
      "doorPosition": {
        "x": 615,
        "y": 929
      }
    },
    {
      "id": "edge-204-211",
      "a": 204,
      "b": 211,
      "boundary": {
        "axis": "h",
        "at": 929,
        "from": 683,
        "to": 755
      },
      "doorPosition": {
        "x": 688,
        "y": 929
      }
    },
    {
      "id": "edge-206-207",
      "a": 206,
      "b": 207,
      "boundary": {
        "axis": "v",
        "at": 922,
        "from": 858,
        "to": 929
      },
      "doorPosition": {
        "x": 922,
        "y": 920
      }
    },
    {
      "id": "edge-206-213",
      "a": 206,
      "b": 213,
      "boundary": {
        "axis": "h",
        "at": 929,
        "from": 850,
        "to": 922
      },
      "doorPosition": {
        "x": 856,
        "y": 929
      }
    },
    {
      "id": "edge-207-208",
      "a": 207,
      "b": 208,
      "boundary": {
        "axis": "v",
        "at": 996,
        "from": 858,
        "to": 929
      },
      "doorPosition": {
        "x": 996,
        "y": 920
      }
    },
    {
      "id": "edge-207-214",
      "a": 207,
      "b": 214,
      "boundary": {
        "axis": "h",
        "at": 929,
        "from": 922,
        "to": 996
      },
      "doorPosition": {
        "x": 927,
        "y": 929
      }
    }
  ],
  "entrances": {
    "north": {
      "cell": 4
    },
    "west": {
      "cell": 93
    },
    "east": {
      "cell": 117
    },
    "south": {
      "cell": 212
    }
  },
  "zombieStarts": [
    3,
    17,
    19,
    22,
    24,
    25,
    27,
    29,
    43,
    51,
    53,
    58,
    61,
    65,
    69,
    72,
    75,
    79,
    88,
    94,
    96,
    100,
    107,
    112,
    114,
    118,
    123,
    129,
    136,
    145,
    150,
    152,
    155,
    165,
    170,
    173,
    181,
    188,
    191,
    196,
    199,
    205,
    207,
    210,
    213
  ],
  "humanStarts": {
    "Peter": 139,
    "Roger": 140,
    "Steve": 160,
    "Fran": 160
  }
};root.CHOPPING_BOARD=board;if(typeof module!=="undefined")module.exports=board;})(globalThis);
