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

goog.provide('Blockly.Python.lcd');

goog.require('Blockly.Python');


Blockly.Python['lcd_writeline'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var code = 'lcd0.write(bytearray(str('+value_name+')))\n';
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return code;
  };
  Blockly.Python['lcd_drawdot'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'lcd0.drawDot('+value_x+','+value_y+','+value_c+')\n';
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return code;
  };
  Blockly.Python['lcd_clear'] = function(block) {
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    //value_c="0x"+value_c.toString().replace(/[^0-9^a-z]/ig, "");
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    var code = 'lcd0.drawClear('+value_c+')\n';
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return code;
  };
  Blockly.Python['lcd_drawline'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'VALUE_X2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'VALUE_Y2', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawLine('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawrect'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'VALUE_X2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'VALUE_Y2', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawRect('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawrectfill'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'VALUE_X2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'VALUE_Y2', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawRectfill('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawtriangle'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'VALUE_X2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'VALUE_Y2', Blockly.Python.ORDER_ATOMIC);
    var value_x3 = Blockly.Python.valueToCode(block, 'VALUE_X3', Blockly.Python.ORDER_ATOMIC);
    var value_y3 = Blockly.Python.valueToCode(block, 'VALUE_Y3', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawTriangle('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_x3+','+value_y3+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_filltriangle'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'VALUE_X2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'VALUE_Y2', Blockly.Python.ORDER_ATOMIC);
    var value_x3 = Blockly.Python.valueToCode(block, 'VALUE_X3', Blockly.Python.ORDER_ATOMIC);
    var value_y3 = Blockly.Python.valueToCode(block, 'VALUE_Y3', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.fillTriangle('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_x3+','+value_y3+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawcircle'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_r = Blockly.Python.valueToCode(block, 'VALUE_R', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawCircle('+value_x1+','+value_y1+','+value_r+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawcirclefill'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_r = Blockly.Python.valueToCode(block, 'VALUE_R', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawCirclefill('+value_x1+','+value_y1+','+value_r+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_writestring'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_font =block.getFieldValue('VALUE_FONT');
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_fc = Blockly.Python.valueToCode(block, 'VALUE_FC', Blockly.Python.ORDER_ATOMIC);
    var value_bc = Blockly.Python.valueToCode(block, 'VALUE_BC', Blockly.Python.ORDER_ATOMIC);
    var value_ac = Blockly.Python.valueToCode(block, 'VALUE_AC', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawString('+value_font+','+value_x+','+value_y+',str('+value_value+'),'+value_fc+','+value_bc+','+value_ac+')\n';
    return code;
  };
  Blockly.Python['lcd_writestring1'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_font = Blockly.Python.valueToCode(block, 'VALUE_FONT', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_fc = Blockly.Python.valueToCode(block, 'VALUE_FC', Blockly.Python.ORDER_ATOMIC);
    var value_bc = Blockly.Python.valueToCode(block, 'VALUE_BC', Blockly.Python.ORDER_ATOMIC);
    var value_ac = Blockly.Python.valueToCode(block, 'VALUE_AC', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawString1('+value_font+','+value_x+','+value_y+',str('+value_value+'),'+value_fc+','+value_bc+','+value_ac+')\n';
    return code;
  };
  Blockly.Python['lcd_drawawesome'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_font = Blockly.Python.valueToCode(block, 'VALUE_FONT', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_fc = Blockly.Python.valueToCode(block, 'VALUE_FC', Blockly.Python.ORDER_ATOMIC);
    var value_bc = Blockly.Python.valueToCode(block, 'VALUE_BC', Blockly.Python.ORDER_ATOMIC);
    var value_ac = Blockly.Python.valueToCode(block, 'VALUE_AC', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawAwesome('+value_font+','+value_x+','+value_y+','+value_value+','+value_fc+','+value_bc+','+value_ac+')\n';
    return code;
  };
  Blockly.Python['lcd_drawimage'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'PATH', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawJpg('+value_x+','+value_y+','+value_value+')\n';
    return code;
  };
  Blockly.Python['lcd_showicons'] = function(block) {
    var value_value =block.getFieldValue('PATH');
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawJpg('+value_x+','+value_y+',"'+value_value+'")\n';
    return code;
  };
  Blockly.Python['lcd_showtrafficlight'] = function(block) {
    var value_value ="/www/pyly/static/demos/code/css/rgb/"+block.getFieldValue('PATH');
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawJpg('+value_x+','+value_y+',"'+value_value+'")\n';
    return code;
  };
  Blockly.Python['lcd_map0init'] = function(block) {
    var value_value ="/www/pyly/static/demos/code/css/maps/";
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    var math="";
    var offseta='a'.charCodeAt();
    var dataIntArr=[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00];  
    for(var x=0;x<4;x++)
    for(var y=0;y<3;y++)
    {
      var str=String.fromCharCode(offseta+y)+String.fromCharCode(offseta+x);
      var checkbox_hh = block.getFieldValue(str);
      math+="lcd0.drawJpg("+x*80+","+y*80+",'"+value_value+checkbox_hh+"')\n";
      
    }
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code =math;
    return code;
  };
  Blockly.Python['lcd_dotarray'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var offseta='a'.charCodeAt();
    var dataIntArr=[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00];  
    for(var x=0;x<8;x++)
    for(var y=0;y<8;y++)
    {
      var str=String.fromCharCode(offseta+x)+String.fromCharCode(offseta+y);
      var checkbox_hh = block.getFieldValue(str) == 'TRUE';
      if(checkbox_hh)dataIntArr[x]|=(1<<y);
      
    }
    var code="["+dataIntArr+"]";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  Blockly.Python['lcd_drawdotarray'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_f = Blockly.Python.valueToCode(block, 'VALUE_F', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.drawDotarray(bytearray("+value_value+"),"+value_f+","+value_c+")\n";
    return code;
  };
  Blockly.Python['lcd_drawdotarraybit'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_v = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.drawDotarraybit("+value_x+","+value_y+","+value_v+")\n";
    return code;
  };
  Blockly.Python['lcd_drawdotarraybit'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_v = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.drawDotarraybit("+value_x+","+value_y+","+value_v+")\n";
    return code;
  };
  Blockly.Python['lcd_selectarrarydot'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_v = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.selectArraryDot("+value_x+","+value_y+","+value_v+")\n";
    return code;
  };
  
  Blockly.Python['lcd_getdotarraybit'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.getDotarraybit("+value_x+","+value_y+")";
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['lcd_drawdotarraymove'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.drawDotarraymove("+value_x+","+value_y+")\n";
    return code;
  };
  Blockly.Python['lcd_screenshot'] = function(block) {
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.screenShot()";
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Python['lcd_screenshotdebug'] = function(block) {
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.screenShotdebug('"+window.location.host+"')\n";
    return code;
  };
  Blockly.Python['lcd_screenprevie'] = function(block) {
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = "lcd0.screenPrevie('"+window.location.host+"')\n";
    return code;
  };
  Blockly.Python['lcd_carinit'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_f =block.getFieldValue('FOUND');
    Blockly.Python.definitions_['import_motion'] = 'import motion';
    var code = "motion_car0=motion.car("+value_x+","+value_y+","+value_f+")\n";
    return code;
  };
  Blockly.Python['lcd_carmove'] = function(block) {
    var value_1 = block.getFieldValue('FOUND');
    var value_2 = Blockly.Python.valueToCode(block, 'STEP', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_motion'] = 'import motion';
    var code = "motion_car0.move("+value_1+","+value_2+")\n";
    return code;
  };
  Blockly.Python['lcd_inittemp'] = function(block) {
    var value_s = Blockly.Python.valueToCode(block, 'VALUE_S', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_motion'] = 'import motion';
    var code = value_s+"=motion.temp("+value_x+","+value_y+")\n";
    return code;
  };
  Blockly.Python['lcd_showtemp'] = function(block) {
    var value_s = Blockly.Python.valueToCode(block, 'VALUE_S', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_V', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_M', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_motion'] = 'import motion';
    var code = value_s+".set("+value_x+","+value_y+")\n";
    return code;
  };
  