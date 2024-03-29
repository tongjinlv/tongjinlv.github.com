/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.sound');

goog.require('Blockly.Python');


Blockly.Python['sound_play'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    Blockly.Python.definitions_['import_sound'] = 'import sound';
    var code ="sound.play('"+dropdown_name+"')\n";
    return code;
  };
  Blockly.Python['sound_piano'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_value = block.getFieldValue('VALUE');
    Blockly.Python.definitions_['import_sound'] = 'import sound';
    var code ="sound.play('"+dropdown_name+"',"+dropdown_value+")\n";
    return code;
  };
  Blockly.Python['sound_melody'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    Blockly.Python.definitions_['import_sound'] = 'import sound';
    var code ="sound.play('"+dropdown_name+"')\n";
    return code;
  };
  Blockly.Python['sound_effect'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    Blockly.Python.definitions_['import_sound'] = 'import sound';
    var code ="sound.play('"+dropdown_name+"')\n";
    return code;
  };
  Blockly.Python['sound_dance'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    Blockly.Python.definitions_['import_sound'] = 'import sound';
    var code ="sound.play('"+dropdown_name+"')\n";
    return code;
  };
  Blockly.Python['sound_playpath'] = function(block) {
    var text_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code ="sound.playPath("+text_value+")\n";
    Blockly.Python.definitions_['import_sound'] = 'import sound';
    return code;
  };
  Blockly.Python['sound_record'] = function(block) {
    var text_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_sound'] = 'import sound';
    return ['sound.record(' + text_value + ')', Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['sound_tts'] = function(block) {
    var text_value =Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);
    var text_key=  Blockly.Python.valueToCode(block, 'API_KEY', Blockly.Python.ORDER_ATOMIC);
    var text_secret=  Blockly.Python.valueToCode(block, 'SECRET_KEY', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var def='tts_create1=tts.tts('+text_key+','+text_secret+')';
    Blockly.Python.definitions_['import_tts'] = 'import tts';
    Blockly.Python.definitions_[def] = def;
    return ['tts_create1.create(' + text_value + ')', Blockly.Python.ORDER_FUNCTION_CALL];
  };
