//==============================================================================
//==============================================================================
var buildbotmeta = {
    borderwidth : 1
}


function Point(x,y) {
    this.x  = x || 0;
    this.y = y || 0;
}


/**
 * storage class for animation data
 */
function Animation(framemap, framenumb, cols, rows, framewidth, frameheight, bordersize, initialFrame ) {
    this._currentframe = initialFrame || 0;
    this._frames = [];
    this._framemap = framemap;
    this._framewidth = framewidth;
    this._frameheight = frameheight;
    this._borderwidth = bordersize;

    /**
     * currently oscillates, can be changed to provide custom frame updating
     * on a per AnimatedSprite basis
     */
    this._frameupdate= function() {
	
	this._currentframe += 1;
	if( this._currentframe >= this._frames.length ) { this._currentframe = -(this._currentframe-1); }

    }
   
    this.initFrames = function(framenumb) {
	    var i = 0;
	    var done = false;
	    var top = new Point(0,0);
	    
	    for (var row  = 0; row < rows && !done; row++) {
		for (var col = 0; col < cols && !done; col++) {
		    top = new Point( col * (frameheight+1)+(col+1)*bordersize, row * (framewidth+1) +(row+1)* bordersize);
		    console.log(col*frameheight,(col+1)*bordersize);
		    this._frames.push ( top );
		    i+=1;
		    if( i >= framenumb ) { done = true; }
		}
	    }
    }
    this.initFrames( framenumb );


    this.draw = function(ctx, dx, dy, dWidth, dHeight) {
	//absolute value of current frame index is used, allowing for negative frame counts
	var curframe = this._currentframe<0? -1 * this._currentframe : this._currentframe;
	var frametop = this._frames[curframe];
	Pender.ctx.drawImage( this._framemap, frametop.x, frametop.y, this._framewidth, this._frameheight, dx, dy, this._framewidth, this._frameheight   );
	this._frameupdate();
    }
}

function AnimatedSprite(anim) {

    this._animation = anim;


    this.init = function (framemap, framenumb, cols, rows, framewidth, frameheight) {
	var i = 0;
	var done = false;
	var top = new Point(0,0);
	
	//initialize
	this._framemap = framemap;
	this._framewidth = framewidth;
	this._frameheight = frameheight;
	/*
	for (var row  = 0; row < rows && !done; row++) {
	    for (var col = 0; col < cols && !done; col++) {
		i+=1;
		if( i >= framenumb ) { done = true; }
		var top = new Point(col * frameheight+col+1, row * framewidth+row+1);
		var bot = new Point(top.x + frameheight, top.y + framewidth);

		this._frames.push ( [top,bot] );
	    }
	}*/
	this._frames;

    }

}

//==============================================================================



var img = new Image();
img.src = "client/assets/build_bot_map.png";
var anim = new Animation( img, 9, 4, 3, 254, 254, 1 );
console.log( anim._frames );

var sprite  = new AnimatedSprite(anim);
//==============================================================================

function init() {

    var i = 0;

    for (i = 0; i < catnumb; i += 1) {
        console.log("it's a new cat!");
        cats[i] = new Bot();
    }

}

//==============================================================================

function draw() {
    Pender.ctx.clearRect(0,0,Pender.canvas.width,Pender.canvas.height);    
    console.log( sprite );
    sprite._animation.draw( Pender.ctx, 10,10, 255, 255 );
    var i = 0;


    
    //for (i = 0; i < catnumb; i += 1) {
    //  cats[i].drawme();

    //}

}

//==============================================================================