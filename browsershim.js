/**
 * Copyright 2012 Adobe Systems Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 *  Globals
 */

//provides global access to canvas as pcanvas, same target name as mobile versions of pender
var canvas = null; 
var pctx = null;
var canvasDefaultId = "pendercanvas";
function penderInit (canvasid) {
    canvasid = canvasid || canvasDefaultId;

    //initiazile global variables
    canvas = document.getElementById (canvasid);

    if (canvas.getContext) {
        pctx = canvas.getContext("2d");
    }
    else {
	throw "Error: canvas id \"" + canvasid + "or " +canvasDefaultId+" not found or not a canvas";
    }
}

function loadImage( path ) {

  

}

function testdraw() {

    pctx.fillStyle = "rgb(200,0,0)";  
    pctx.fillRect (10, 10, 55, 50);  
  
    pctx.fillStyle = "rgba(0, 0, 200, 0.5)";  
    pctx.fillRect (30, 30, 55, 50);

}