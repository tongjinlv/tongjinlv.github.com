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

goog.provide('Blockly.Python.weeemake');

goog.require('Blockly.Python');

Blockly.Python['weeemake_buttonlist'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['weeemake_openclose'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['weeemake_we130motor'] = function(block) {
  var dropdown_name =block.getFieldValue('NAME');
  var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = "we130motor"+dropdown_name+".run("+dropdown_value+")\n";
  var def ="we130motor"+dropdown_name+"=weeemake.We130DCMotor("+dropdown_name+")";
  // TODO: Change ORDER_NONE to the correct strength.
  Blockly.Python.definitions_[def] = def;
  Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
  return code;
};
Blockly.Python['weeemake_wedcmotor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "wedcmotor"+dropdown_name+".run("+dropdown_value+")\n";
    var def ="wedcmotor"+dropdown_name+"=weeemake.WeDCMotor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_webot'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "webot."+dropdown_name+"("+dropdown_value+")\n";
    var def ="webot=weeemake.WeBot()";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_weservo'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "weservo"+dropdown_name+".write("+dropdown_value+")\n";
    var def ="weservo"+dropdown_name+"=weeemake.WeServo("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_wehumiture'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');//Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "wehumiture"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="wehumiture"+dropdown_name+"=weeemake.WeHumiture("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_wegassensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var code = "wegassensor"+dropdown_name+".getValue()";
    var def ="wegassensor"+dropdown_name+"=weeemake.WeGasSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  
  Blockly.Python['weeemake_weflamesensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
    var code = "weflamesensor"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="weflamesensor"+dropdown_name+"=weeemake.WeFlameSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_wecompasssensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
    var code = "wecompasssensor"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="wecompasssensor"+dropdown_name+"=weeemake.WeCompassSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_weultrasondistancesensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var code = "weultrasonsensor"+dropdown_name+".distanceCM()";
    var def ="weultrasonsensor"+dropdown_name+"=weeemake.WeUltrasonicSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_weultrasonshowrgbsensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
    var colour2 = Blockly.Python.valueToCode(block, 'VALUE_C',Blockly.Python.ORDER_NONE) || '\'#000000\'';
    var code = "weultrasonsensor"+dropdown_name+".showRGB("+dropdown_value+","+colour2+")\n";
    var def ="weultrasonsensor"+dropdown_name+"=weeemake.WeUltrasonicSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_wergb5module'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
    var colour2 = Blockly.Python.valueToCode(block, 'VALUE_C',Blockly.Python.ORDER_NONE) || '\'#000000\'';
    var code = "wergb5module"+dropdown_name+".showRGB("+dropdown_value+","+colour2+")\n";
    var def ="wergb5module"+dropdown_name+"=weeemake.WeRGB5Module("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_wergbstrip'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
   var colour2 = Blockly.Python.valueToCode(block, 'VALUE_C',Blockly.Python.ORDER_NONE) || '\'#000000\'';
   var code = "wergbstrip"+dropdown_name+".showRGB("+dropdown_value+","+colour2+")\n";
    var def ="wergbstrip"+dropdown_name+"=weeemake.WeRGBStrip("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_wejoystick'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
   var code = "wejoystick"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="wejoystick"+dropdown_name+"=weeemake.WeJoystick("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_wemoisturesensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var code = "wemoisturesensor"+dropdown_name+".getValue()";
    var def ="wemoisturesensor"+dropdown_name+"=weeemake.WeMoistureSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_wepirsensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var code = "wepirsensor"+dropdown_name+".getValue()";
    var def ="wepirsensor"+dropdown_name+"=weeemake.WePIRSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_welinefollower'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
   var code = "welinefollower"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="welinefollower"+dropdown_name+"=weeemake.WeLineFollower("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_weds18b20'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var code = "weds18b20"+dropdown_name+".getValue()";
    var def ="weds18b20"+dropdown_name+"=weeemake.DS18B20("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_wecolorsensor_setlight'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "wecolorsensor"+dropdown_name+".setLight("+dropdown_value+")\n";
    var def ="wecolorsensor"+dropdown_name+"=weeemake.WeColorSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_wecolorsensor_whitebalance'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var code = "wecolorsensor"+dropdown_name+".whiteBalance()\n";
    var def ="wecolorsensor"+dropdown_name+"=weeemake.WeColorSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_wecolorsensor_getcolor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
    var code = "wecolorsensor"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="wecolorsensor"+dropdown_name+"=weeemake.WeColorSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  
  Blockly.Python['weeemake_wetiltswitch'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
    var code = "wetiltswitch"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="wetiltswitch"+dropdown_name+"=weeemake.WeTiltSwitch("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  
  Blockly.Python['weeemake_we4ledbutton'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
    var code = "we4ledbutton"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="we4ledbutton"+dropdown_name+"=weeemake.We4LEDButton("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_wepotentiometer'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "wepotentiometer"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="wepotentiometer"+dropdown_name+"=weeemake.WePotentiometer("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_werelay'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "werelay"+dropdown_name+".setNC("+dropdown_value+")\n";
    var def ="werelay"+dropdown_name+"=weeemake.WeRelay("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_weatomizer'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "weatomizer"+dropdown_name+".setRun("+dropdown_value+")\n";
    var def ="weatomizer"+dropdown_name+"=weeemake.WeAtomizer("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_wesingleled'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "wesingleled"+dropdown_name+".setLight("+dropdown_value+")\n";
    var def ="wesingleled"+dropdown_name+"=weeemake.WeSingleLED("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return code;
  };
  Blockly.Python['weeemake_weuvsensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value = block.getFieldValue('VALUE');
    var code = "weuvsensor"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="weuvsensor"+dropdown_name+"=weeemake.WeUVSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_wepm2_5sensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =block.getFieldValue('VALUE');
    var code = "wepm2_5sensor"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="wepm2_5sensor"+dropdown_name+"=weeemake.WePM25Sensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_webarometer'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "webarometer"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="webarometer"+dropdown_name+"=weeemake.WeBarometer("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['weeemake_wewatersensor'] = function(block) {
    var dropdown_name =block.getFieldValue('NAME');
    var dropdown_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var code = "wewatersensor"+dropdown_name+".getValue("+dropdown_value+")";
    var def ="wewatersensor"+dropdown_name+"=weeemake.WeWaterSensor("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_weeemake'] = 'import weeemake';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  
    