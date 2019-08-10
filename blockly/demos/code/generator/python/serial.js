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

goog.provide('Blockly.Python.serial');

goog.require('Blockly.Python');



Blockly.Python['serial_list'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['serial_write'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
    var dropdown_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code ="serial"+dropdown_name+".write(bytearray(str("+dropdown_value+")))\n";
    var def ="serial"+dropdown_name+"=mraa.Uart("+dropdown_name+")";
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    Blockly.Python.definitions_[def]=def;
    return code;
  };
  Blockly.Python['serial_writeline'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
    var dropdown_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code ="serial"+dropdown_name+".write(bytearray("+dropdown_value+")+bytearray('\\r\\n'"+"))\n";
    var def ="serial"+dropdown_name+"=mraa.Uart("+dropdown_name+")";
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    Blockly.Python.definitions_[def]=def;
    return code;
  };
  Blockly.Python['serial_writebyte'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
    var dropdown_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code ="serial"+dropdown_name+".write(bytearray("+dropdown_value+"))\n";
    var def ="serial"+dropdown_name+"=mraa.Uart("+dropdown_name+")";
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    Blockly.Python.definitions_[def]=def;
    return code;
  };
  Blockly.Python['serial_setbaudrate'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
    var dropdown_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code ="serial"+dropdown_name+".setBaudRate("+dropdown_value+")\n";
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var def ="serial"+dropdown_name+"=mraa.Uart("+dropdown_name+")";
    Blockly.Python.definitions_[def]=def;
    return code;
  };
  Blockly.Python['serial_readstr'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
    var dropdown_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code ="serial"+dropdown_name+".readStr("+dropdown_value+")";
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var def ="serial"+dropdown_name+"=mraa.Uart("+dropdown_name+")";
    Blockly.Python.definitions_[def]=def;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['serial_dataavailable'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
    var dropdown_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code ="serial"+dropdown_name+".DataAvailable("+dropdown_value+")";
    var def ="serial"+dropdown_name+"=mraa.Uart("+dropdown_name+")";
    Blockly.Python.definitions_[def]=def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['serial_modbus'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
    var dropdown_baurdrate = Blockly.Python.valueToCode(block, 'BAUDRATE', Blockly.Python.ORDER_NONE);
    var dropdown_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var dropdown_crc =block.getFieldValue('CRC');
    // TODO: Assemble Python into code variable.
    var code ="rs485_modbus"+dropdown_name+".writeRead("+dropdown_value+','+dropdown_crc+")";
    var def ="rs485_modbus"+dropdown_name+"=rs485.modBus("+dropdown_name+','+dropdown_baurdrate+")";
    Blockly.Python.definitions_['import_rs485'] = 'import rs485';
    Blockly.Python.definitions_[def] =def;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  