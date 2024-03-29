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

goog.provide('Blockly.Blocks.serial');  // Deprecated
goog.provide('Blockly.Constants.Serial');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Msg.SERIAL_HUE = 255;
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "serial_list",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["Serial0","0"],
                        ["Serial1","1"],
                        ["Serial2","2"]]
          }
        ],
        "output": "Number",
        "colour": "%{BKY_SERIAL_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "serial_write",
        "message0": "%{BKY_CATSERIAL_WRITE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_SERIAL_HUE}",
        "tooltip":"",
        "helpUrl": ""
      },
      {
        "type": "serial_writeline",
        "message0": "%{BKY_CATSERIAL_WRITELINE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_SERIAL_HUE}",
        "tooltip":"",
        "helpUrl": ""
      },
      {
        "type": "serial_writebyte",
        "message0": "%{BKY_CATSERIAL_WRITE_ARRAY_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE",     
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_SERIAL_HUE}",
        "tooltip":"",
        "helpUrl": ""
      },
      {
        "type": "serial_setbaudrate",
        "message0": "%{BKY_CATSERIAL_SET_BAUDRATE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE",     
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_SERIAL_HUE}",
        "tooltip":"",
        "helpUrl": ""
      },
      {
        "type": "serial_readstr",
        "message0": "%{BKY_CATSERIAL_READSTR_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE",     
            "check": "Number"
          }
        ],
        "output": null,
        "inputsInline": true,
        "colour": "%{BKY_SERIAL_HUE}",
        "tooltip":"",
        "helpUrl": ""
      },
      {
        "type": "serial_dataavailable",
        "message0": "%{BKY_CATSERIAL_DATAAVAILABLE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE",     
            "check": "Number"
          }
        ],
        "output": "Number",
        "inputsInline": true,
        "colour": "%{BKY_SERIAL_HUE}",
        "tooltip":"",
        "helpUrl": ""
      },
      {
        "type": "serial_modbus",
        "message0": "%{BKY_CATSERIAL_MODBUS_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "BAUDRATE",     
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE",     
            "check": "Array"
          },
          {
            "type": "field_dropdown",
            "name": "CRC",
            "options": [["%{BKY_CATSERIAL_MODBUS_CHECKNULL}","False"],["%{BKY_CATSERIAL_MODBUS_CHECKCRC16}","True"]
            ]
          }
        ],
        "output": null,
        "inputsInline": true,
        "colour": "%{BKY_SERIAL_HUE}",
        "tooltip":"",
        "helpUrl": ""
      },

]);