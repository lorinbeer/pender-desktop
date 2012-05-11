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

var Pender = {

    canvas : null,

    ctx    : null,

    images : {},

    canvasDefaultId : "pendercanvas",

    init : function (canvasid) {
	canvasid = canvasid || this.canvasDefaultId;
	this.canvas = document.getElementById (canvasid);
	if (this.canvas.getContext) {
	    this.ctx = this.canvas.getContext("2d");
	}
	else {
	    throw "Error: canvas id \"" + canvasid + "or " +canvasDefaultId+" not found or not a canvas";
	}
        PenderEvent.addListener ("penderImageOnLoad",this);
    },

    loadImages : function (imagepaths) {
        var i = 0;
	var img = null;
        var pending = imagepaths.length;
        for (i = 0; i < imagepaths.length; i+=1) {
	    img = new Image();
            img.onload = function() {
		images[imagepaths[i]] = img;
                pending-=1;
		if (pending == 0) {
		    PenderEvent.fire("PenderImagesLoaded",this);
		}
	    }
            img.src = imagepaths[i];
	}
    }

}


function testdraw() {

    Pender.ctx.fillStyle = "rgb(200,0,0)";  
    Pender.ctx.fillRect (10, 10, 55, 50);  
  
    Pender.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";  
    Pender.ctx.fillRect (30, 30, 55, 50);

}