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
 * Pender
 * small shim allowing Pender Client projects to run on desktop browsers
 */

var Pender = {

    //html5 Canvas element
    canvaselem : null,
    //canvas 2d rendering context
    canvas : null,
    //preloaded texture assets
    images : [],
    //default or expected id of the Canvas element
    canvasDefaultId : "pendercanvas",
    
    ready : true,
    /**
     *  Initialize Pender
     */
    init : function (canvasid) {
	canvasid = canvasid || this.canvasDefaultId;
	this.canvaselem = document.getElementById (canvasid);
	if (this.canvaselem.getContext) {
	    this.canvas = this.canvaselem.getContext("2d");
	}
	else {
	    throw "Error: canvas id \"" + canvasid + "or " +canvasDefaultId+" not found or not a canvas";
	}
	PenderEvent.addListener ("penderImageOnLoad",this);
    },


    /**
     * load images specified by an array
     */
    loadImage : function (path) {
	var i = 0;
	var img = null;

	var imgcb = function() {
	    
	    Pender.images.push(img);
	    // pending-=1;
	}

        img = new Image(); 
        img.onload = imgcb;
	img.src = path;
	return i;
    },
    
    getImage : function (id) {
	return(this.images[id]);
    },
    
    setInterval : function (func,spf) {
	var self = this;
	setInterval (function() {
		if (self.ready) {
		    func();
		}
	    } ,spf);
    },

    _imgEnd : 0

}


function testdraw() {

    Pender.ctx.fillStyle = "rgb(200,0,0)";  
    Pender.ctx.fillRect (10, 10, 55, 50);  
  
    Pender.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";  
    Pender.ctx.fillRect (30, 30, 55, 50);

}