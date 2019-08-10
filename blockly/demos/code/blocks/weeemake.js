/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.weeemake');  // Deprecated
goog.provide('Blockly.Constants.Weeemake');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Msg.WEEEMAKE_HUE = 30;
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "weeemake_openclose",
    "message0":"%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
                    ["%{BKY_CATWEEEMAKE_OPENCLOSE_CLOSE}","0"],
                    ["%{BKY_CATWEEEMAKE_OPENCLOSE_OPEN}","1"],
                    ]
      },
    ],
    "output":"Number",
    "inputsInline": true,
    "colour": "%{BKY_WEEEMAKE_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "weeemake_buttonlist",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
                    ["Button1","24"],
                    ["Button2","22"],
                    ]
      }
    ],
    "output": "Number",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
    {
      "type": "weeemake_we130motor",
      "message0":"%{BKY_CATWEEEMAKE_130MOTOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wedcmotor",
      "message0":"%{BKY_CATWEEEMAKE_DCMOTOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["M1","1"],
                      ["M2","2"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_webot",
      "message0":"%{BKY_CATWEEEMAKE_BOT_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["%{BKY_CATWEEEMAKE_BOT_FORWARD}","forward"],
                      ["%{BKY_CATWEEEMAKE_BOT_BACKWARD}","backward"],
                      ["%{BKY_CATWEEEMAKE_BOT_TRUN_LEFT}","turn_left"],
                      ["%{BKY_CATWEEEMAKE_BOT_TRUN_RIGHT}","turn_right"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_weservo",
      "message0":"%{BKY_CATWEEEMAKE_SERVO_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ["P1","18"],
                      ["P2","19"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wehumiture",
      "message0":"%{BKY_CATWEEEMAKE_HUMITURE_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [["%{BKY_CATWEEEMAKE_TEMPERATURE}","0"],["%{BKY_CATWEEEMAKE_HUMITURE}","1"]]
        }
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wegassensor",
      "message0":"%{BKY_CATWEEEMAKE_GASSENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_weflamesensor",
      "message0":"%{BKY_CATWEEEMAKE_FLAMESENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["1","1"],
                      ["2","2"],
                      ["3","3"],
                      ]
        }
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wecompasssensor",
      "message0":"%{BKY_CATWEEEMAKE_COMPASSSENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["X","0"],
                      ["Y","1"],
                      ]
        }
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_weultrasondistancesensor",
      "message0":"%{BKY_CATWEEEMAKE_ULTRASONDISTANCESENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_weultrasonshowrgbsensor",
      "message0":"%{BKY_CATWEEEMAKE_ULTRASONSHOWRGBSENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["%{BKY_CATWEEEMAKE_ULTRASONSHOWRGBSENSOR_LEFT}","2"],
                      ["%{BKY_CATWEEEMAKE_ULTRASONSHOWRGBSENSOR_RIGHT}","1"],
                      ["%{BKY_CATWEEEMAKE_ULTRASONSHOWRGBSENSOR_ALL}","3"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE_C",
          "check": "Colour"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wergb5module",
      "message0":"%{BKY_CATWEEEMAKE_RGB5MODULE_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["1~5","0"],
                      ["1","1"],
                      ["2","2"],
                      ["3","3"],
                      ["4","4"],
                      ["5","5"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE_C",
          "check": "Colour"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wergbstrip",
      "message0":"%{BKY_CATWEEEMAKE_RGBSTRIP_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ["P1","18"],
                      ["P2","19"],
                      ]
        },
        {
          "type": "field_number",
          "name": "VALUE",
          "value": 0,
          "min": 0,
          "max": 255
        },
        {
          "type": "input_value",
          "name": "VALUE_C",
          "check": "Colour"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wejoystick",
      "message0":"%{BKY_CATWEEEMAKE_JOYSTICK_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["X","0"],
                      ["Y","1"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wemoisturesensor",
      "message0":"%{BKY_CATWEEEMAKE_MOISTURESENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","21"],
                      ["P1","18"],
                      ["P2","19"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wepirsensor",
      "message0":"%{BKY_CATWEEEMAKE_PIRSENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_welinefollower",
      "message0":"%{BKY_CATWEEEMAKE_LINEFOLLOWER_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["S1","1"],
                      ["S2","2"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_weds18b20",
      "message0":"%{BKY_CATWEEEMAKE_DS18B20_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ["P1","18"],
                      ["P2","19"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wecolorsensor_setlight",
      "message0":"%{BKY_CATWEEEMAKE_COLORSENSOR_SETLIGHT_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wecolorsensor_whitebalance",
      "message0":"%{BKY_CATWEEEMAKE_COLORSENSOR_WHITEBALANCE_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wecolorsensor_getcolor",
      "message0":"%{BKY_CATWEEEMAKE_COLORSENSOR_GETCOLOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["%{BKY_CATWEEEMAKE_COLORSENSOR_GETCOLOR_LIGHT}","0"],
                      ["%{BKY_CATWEEEMAKE_COLORSENSOR_GETCOLOR_RED}","1"],
                      ["%{BKY_CATWEEEMAKE_COLORSENSOR_GETCOLOR_GREEN}","2"],
                      ["%{BKY_CATWEEEMAKE_COLORSENSOR_GETCOLOR_BLUE}","3"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wetiltswitch",
      "message0":"%{BKY_CATWEEEMAKE_TILTSWITCH_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["S1","1"],
                      ["S2","2"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_we4ledbutton",
      "message0":"%{BKY_CATWEEEMAKE_4LEDBUTTON_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["K1","1"],
                      ["K2","2"],
                      ["K3","3"],
                      ["K4","4"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wepotentiometer",
      "message0":"%{BKY_CATWEEEMAKE_POTENTIOMETER_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_werelay",
      "message0":"%{BKY_CATWEEEMAKE_RELAY_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_weatomizer",
      "message0":"%{BKY_CATWEEEMAKE_ATOMIZER_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wesingleled",
      "message0":"%{BKY_CATWEEEMAKE_SINGLELED_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_weuvsensor",
      "message0":"%{BKY_CATWEEEMAKE_UVSENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["%{BKY_CATWEEEMAKE_UVSENSOR_ANALOG}","0"],
                      ["%{BKY_CATWEEEMAKE_UVSENSOR_VALUE}","1"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wepm2_5sensor",
      "message0":"%{BKY_CATWEEEMAKE_PM2_5SENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
                      ["PM1.0","0"],
                      ["PM2.5","1"],
                      ["PM10","2"],
                      ["PM0.3/0.1L","3"],
                      ["PM0.5/0.1L","4"],
                      ["PM1.0/0.1L","5"],
                      ["PM2.5/0.1L","6"],
                      ["PM5.0/0.1L","7"],
                      ["PM10/0.1L","8"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_webarometer",
      "message0":"%{BKY_CATWEEEMAKE_BAROMETERSENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "weeemake_wewatersensor",
      "message0":"%{BKY_CATWEEEMAKE_WATERSENSOR_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
                      ["A","14"],
                      ["B","15"],
                      ["C","16"],
                      ["D","17"],
                      ["E","2"],
                      ]
        },
      ],
      "output":"Number",
      "inputsInline": true,
      "colour": "%{BKY_WEEEMAKE_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
]);