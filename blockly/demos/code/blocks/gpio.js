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

goog.provide('Blockly.Blocks.gpio');  // Deprecated
goog.provide('Blockly.Constants.Gpio');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Msg.GPIO_HUE = 165;
Blockly.Msg.DRIVER_HUE = 190;
Blockly.Msg.SENSOR_HUE = 185;
Blockly.Msg.CONTROL_HUE = 185;
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "gpio_write",
    "message0": "%{BKY_CATGPIO_WRITE_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip":"",
    "helpUrl": ""
  },
  {
    "type": "gpio_led",
    "message0": "%{BKY_CATGPIO_LED_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip":"",
    "helpUrl": ""
  },
  {
    "type": "gpio_read",
    "message0": "%{BKY_CATGPIO_READ_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "gpio_mode",
    "message0":"%{BKY_CATGPIO_MODE_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [["%{BKY_CATGPIO_MODE_OUT}","DIR_OUT"],["%{BKY_CATGPIO_MODE_IN}","DIR_IN"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "gpio_value",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [["%{BKY_CATGPIO_VALUE_HIGH}","1"],["%{BKY_CATGPIO_VALUE_LOW}","0"]]
      }
    ],
    "output": "Boolean",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "gpio_list",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
                    ["GPIO14","14"],
                    ["GPIO15","15"],
                    ["GPIO16","16"],
                    ["GPIO17","17"],
                    ["GPIO18(PWM18)","18"],
                    ["GPIO19(PWM19)","19"],
                    ["GPIO20(TX2/PWM20)","20"],
                    ["GPIO21(RX2/PWM21)","21"],
                    ["GPIO38","38"],
                    ["GPIO39","39"],
                    ["GPIO40","40"],
                    ["GPIO41","41"],
                    ["GPIO42","42"],
                    ["GPIO4(I2C)","4"],
                    ["GPIO5(I2C)","5"],
                    ]
      }
    ],
    "output": "Number",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "gpio_ledlist",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
                    ["LED0(GPIO24)","24"],
                    ["LED1(GPIO22)","22"],
                    ]
      }
    ],
    "output": "Number",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "gpio_joklist",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
                    ["K4↑(GPIO26)","26"],
                    ["K6←(GPIO23)","23"],
                    ["K8→(GPIO28)","28"],
                    ["K5↓(GPIO25)","25"],
                    ["K1↩(GPIO29)","29"],
                    ["K2↪(GPIO27)","27"],
                    ]
      }
    ],
    "output": "Number",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "gpio_buttonlist",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
                    ["BUTTON0(GPIO38)","38"],
                    ["BUTTON1(GPIO39)","39"],
                    ["BUTTON2(GPIO40)","40"],
                    ]
      }
    ],
    "output": "Number",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "gpio_interrupt",
    "message0": "%{BKY_CATGPIO_INTERRUPT_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number"
      },
      {
        "type": "input_statement",
        "name": "FUNC"
      }
    ],
    "previousStatement": null,
    "inputsInline": true,
    "nextStatement": null,
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip":  "",
    "helpUrl": ""
  },
  {
    "type": "gpio_keydown",
    "message0": "%{BKY_CATGPIO_KEYDOWN_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number"
      },
      {
        "type": "input_statement",
        "name": "FUNC"
      },
      {
        "type": "input_statement",
        "name": "FUNC1"
      }
    ],
    "previousStatement": null,
    "inputsInline": true,
    "nextStatement": null,
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip":  "",
    "helpUrl": ""
  }
]);  // END JSON EXTRACT (Do not delete this comment.)
