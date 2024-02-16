(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bolong = function() {
	this.initialize(img.bolong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,65);


(lib.img_art = function() {
	this.initialize(img.img_art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,89);


(lib.img_button = function() {
	this.initialize(img.img_button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,29);


(lib.img_cursor = function() {
	this.initialize(img.img_cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,26);


(lib.img_globe = function() {
	this.initialize(img.img_globe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,91);


(lib.img_mappin = function() {
	this.initialize(img.img_mappin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,50);


(lib.img_plane = function() {
	this.initialize(img.img_plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,122);


(lib.img_tech = function() {
	this.initialize(img.img_tech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,89);


(lib.line = function() {
	this.initialize(img.line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,149);


(lib.logohead = function() {
	this.initialize(img.logohead);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,23);


(lib.music = function() {
	this.initialize(img.music);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,88);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,221);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,41);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,40);


(lib.txt5 = function() {
	this.initialize(img.txt5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,42);


(lib.txt_PEROKOKDEWASA18 = function() {
	this.initialize(img.txt_PEROKOKDEWASA18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,8);


(lib.txt_reward = function() {
	this.initialize(img.txt_reward);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,26);


(lib.txt_syarat_ketentuanberlaku_ = function() {
	this.initialize(img.txt_syarat_ketentuanberlaku_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,8);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt_syarat_ketentuanberlaku_();
	this.instance.setTransform(-51,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-4,102,8);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt_reward();
	this.instance.setTransform(-58,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-13,116,26);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt1();
	this.instance.setTransform(-47,-83,0.557,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-83,83,122);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_cursor();
	this.instance.setTransform(-14.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-17,22,26);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_button();
	this.instance.setTransform(-44,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-83,91,29);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt5();
	this.instance.setTransform(-99.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-30,150,42);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_mappin();
	this.instance.setTransform(-23,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-19,49,50);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_globe();
	this.instance.setTransform(-139,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-137,207,91);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line();
	this.instance.setTransform(-202,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202,-98.5,303,149);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_tech();
	this.instance.setTransform(-64,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-65,59,89);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_art();
	this.instance.setTransform(-68,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-70,65,89);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.music();
	this.instance.setTransform(-69,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-66,64,88);


(lib.text3b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az/hUIAAkOMAn/AAAIAAEOg");
	mask.setTransform(0.025,-35.475);

	// Layer_1
	this.instance = new lib.txt3();
	this.instance.setTransform(-101,-91);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3b, new cjs.Rectangle(-101,-70.9,188,19.900000000000006), null);


(lib.text3a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax4grIAAkEMAjxAAAIAAEEg");
	mask.setTransform(-0.475,-30.375);

	// Layer_1
	this.instance = new lib.txt3();
	this.instance.setTransform(-102,-51);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3a, new cjs.Rectangle(-102,-51,188,16.299999999999997), null);


(lib.text2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3WBNIAAl7MAutAAAIAAF7g");
	mask.setTransform(-10.65,-30.275);

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.setTransform(-119,-85);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2b, new cjs.Rectangle(-119,-60.5,207,16.5), null);


(lib.text2a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AybC5IAAlxMAk3AAAIAAFxg");
	mask.setTransform(-1.9,-90.4);

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.setTransform(-111,-92);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2a, new cjs.Rectangle(-111,-92,207,20.099999999999994), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_plane();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,152,122), null);


(lib.ghwai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bolong();
	this.instance.setTransform(10,-50,0.6527,0.5535);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADA").s().p("AgGAjIAFgQIABgTIgBgPQgBgIgFgLIAGAAQAEAJACAIQADAKAAAHQAAAHgDAKQgCAJgEAJg");
	this.shape.setTransform(229.3384,-20.9302,0.7197,0.7197);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFADA").s().p("AgJAXQgEgDgBgIIAJgBQAAAEACACQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgFgCgCQgBgCgDABQgDAAgDACIgHgBIAFgbIAVAAIAAAKIgPAAIgBAJIAEgCQAGAAADAEQAFAFAAAIQAAAHgEAGQgEAGgHAAQgFAAgEgEg");
	this.shape_1.setTransform(227.3952,-21.416,0.7197,0.7197);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFADA").s().p("AgJAVQgFgGAAgPQAAgNAFgHQAEgGAGAAQAFAAADADQAEAEABAGIgIABQgBgGgEAAQgCAAgCADQgBACgBAKIADgDIAEgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgGAAQgFAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQABgBAAAAQAAAAABAAQAAgBABAAQABgCAAgGQAAgFgBgCQgBgCgEAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(224.8764,-21.434,0.7197,0.7197);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFADA").s().p("AgJAXQgEgDgBgIIAJgBIACAGQAAAAABABQABAAAAAAQABABAAAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgFgCgCQgBgCgDABQgDAAgDACIgHgBIAFgbIAVAAIAAAKIgPAAIgBAJIAFgCQAFAAADAEQAFAFAAAIQAAAHgEAGQgEAGgHAAQgFAAgEgEg");
	this.shape_3.setTransform(222.3575,-21.416,0.7197,0.7197);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFADA").s().p("AgJAVQgFgGAAgPQAAgNAFgHQAEgGAGAAQAFAAAEADQADAEABAGIgIABQgBgGgEAAQgBAAgDADQgCAEAAAIIAEgDIADgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgFAAQgGAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQABgCAAgGQAAgFgBgCQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_4.setTransform(219.8386,-21.434,0.7197,0.7197);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFADA").s().p("AgIAFIAAgJIAQAAIAAAJg");
	this.shape_5.setTransform(217.8055,-20.9302,0.7197,0.7197);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFADA").s().p("AgHAaQAAgJADgNQAEgKAFgKIgSAAIAAgJIAbAAIAAAHIgHANQgEAHgBAIQgCAIAAAIg");
	this.shape_6.setTransform(215.7724,-21.4519,0.7197,0.7197);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFADA").s().p("AgIAaQAAgJAEgNQADgKAGgKIgSAAIAAgJIAcAAIAAAHQgEAFgEAIIgGAPQgBAIAAAIg");
	this.shape_7.setTransform(213.2715,-21.4519,0.7197,0.7197);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFADA").s().p("AABAbIAAgmQgDAGgGACIAAgJIAGgGQAEgDABgFIAHAAIAAA1g");
	this.shape_8.setTransform(210.5727,-21.4699,0.7197,0.7197);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFADA").s().p("AgHAFIAAgJIAPAAIAAAJg");
	this.shape_9.setTransform(208.7195,-20.9302,0.7197,0.7197);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFADA").s().p("AgJAVQgEgFAAgQQAAgPAEgFQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgCAEAAALQAAAMACADQABAEACAAQACAAACgEQABgDAAgMQAAgLgBgEQgCgDgCAAQgCAAgBADg");
	this.shape_10.setTransform(206.7044,-21.434,0.7197,0.7197);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFADA").s().p("AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQABABAAABQAAAAABABQAAAAABABQAAAAAAAAQADAAABgEQABgDAAgMQAAgLgBgEQgBgDgDAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAABgBAAg");
	this.shape_11.setTransform(204.1855,-21.434,0.7197,0.7197);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFADA").s().p("AgKAXQgDgFAAgHQAAgFACgDQABgDAEgCIgFgEQgCgDABgEQAAgGADgEQADgDAGAAQAHAAACAEQAEADAAAGQAAAEgBADIgFAEQAFACABADQABACAAAGQAAAFgBADQgCADgEADQgCACgFAAQgFAAgFgEgAgDAEQgCADAAADQAAAEACADQACACABAAQACAAADgCQABgCAAgFQAAgEgCgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACgAgDgRIgBAFQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQABAAAAAAQABAAAAABQAAAAAAAAIAEgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_12.setTransform(201.6846,-21.434,0.7197,0.7197);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFADA").s().p("AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAFAAAPQAAAQgEAFQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQACAEABAAQADAAABgEQACgDAAgMQAAgLgCgEQgBgDgDAAQgBAAgCADg");
	this.shape_13.setTransform(199.1478,-21.434,0.7197,0.7197);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFADA").s().p("AACAjQgEgJgCgIQgCgKgBgIQABgHACgKQACgIAEgJIAGAAIgGATIgCAPQAAAKACAJIAGAQg");
	this.shape_14.setTransform(197.1866,-20.9302,0.7197,0.7197);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFADA").s().p("AAIAbIgLgZIgHAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
	this.shape_15.setTransform(193.6422,-21.4699,0.7197,0.7197);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFADA").s().p("AgOAVQgGgHAAgOQAAgIACgGQADgHAFgDQAEgDAGAAQAJAAAGAHQAGAIAAAMQAAAOgGAHQgGAHgJAAQgIAAgGgHgAgIgNQgDAEAAAJQAAAKADAEQAEAFAEAAQAFAAAEgFQADgEAAgKQAAgJgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_16.setTransform(190.1158,-21.4699,0.7197,0.7197);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFADA").s().p("AAIAbIgKgZIgIAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
	this.shape_17.setTransform(186.8952,-21.4699,0.7197,0.7197);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFADA").s().p("AgOAVQgGgIgBgNQAAgIAEgGQADgHAEgDQAFgDAFAAQAKAAAFAHQAHAIAAAMQgBAOgGAHQgFAHgKAAQgJAAgFgHgAgHgNQgEAEAAAJQAAAKAEAEQADAFAEAAQAFAAAEgFQADgFAAgJQAAgJgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_18.setTransform(183.3688,-21.4699,0.7197,0.7197);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFADA").s().p("AAJAbIgKgUQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgEgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQADABACAEQACADAAAFQAAAHgDADQgDAEgFAAIAEAFIAFAIIAGALgAgKgDIANgBQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDgCIgNgBg");
	this.shape_19.setTransform(180.1482,-21.4699,0.7197,0.7197);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_20.setTransform(176.9096,-21.4699,0.7197,0.7197);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFADA").s().p("AANAbIAAgpIgJApIgHAAIgJgpIAAApIgIAAIAAg1IANAAIAHAkIAIgkIANAAIAAA1g");
	this.shape_21.setTransform(173.4911,-21.4699,0.7197,0.7197);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFADA").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_22.setTransform(169.7128,-21.4699,0.7197,0.7197);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFADA").s().p("AgDAbIAAgsIgOAAIAAgJIAiAAIAAAJIgMAAIAAAsg");
	this.shape_23.setTransform(167.6797,-21.4699,0.7197,0.7197);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFADA").s().p("AAJAbIgRgiIAAAiIgIAAIAAg1IAJAAIARAjIAAgjIAIAAIAAA1g");
	this.shape_24.setTransform(164.6571,-21.4699,0.7197,0.7197);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_25.setTransform(161.6164,-21.4699,0.7197,0.7197);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFADA").s().p("AAJAbIAAgYIgRAAIAAAYIgIAAIAAg1IAIAAIAAAVIARAAIAAgVIAJAAIAAA1g");
	this.shape_26.setTransform(158.4318,-21.4699,0.7197,0.7197);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFADA").s().p("AAJAbIgKgUIgCgCIgFgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQAEACABADQACADAAAFQAAAHgDADQgDAEgFAAIAFAFIAKATgAgKgDIAHAAIAHgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgEIgBgEIgDgCIgNgBg");
	this.shape_27.setTransform(155.3192,-21.4699,0.7197,0.7197);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_28.setTransform(152.1166,-21.4699,0.7197,0.7197);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFADA").s().p("AgRAbIAAg1IARAAQAGAAADACQADAAACAEQACADAAAFQAAAEgBADIgFAEQAEABACADQACADAAAFQAAAGgCAEQgEAFgDAAIgLABgAgJASIAPgBIACgCIABgEIgBgFIgDgCIgGgBIgIAAgAgJgEIAMgBIADgCQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAAAgBIgBgEIgDgBIgHgBIgGAAg");
	this.shape_29.setTransform(148.986,-21.4699,0.7197,0.7197);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFADA").s().p("AAJAbIgRgiIAAAiIgJAAIAAg1IAJAAIARAjIAAgjIAJAAIAAA1g");
	this.shape_30.setTransform(144.3981,-21.4699,0.7197,0.7197);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFADA").s().p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgGAGIAMAAIgGgTg");
	this.shape_31.setTransform(141.1595,-21.4699,0.7197,0.7197);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFADA").s().p("AAIAbIgQgiIAAAiIgIAAIAAg1IAIAAIARAjIAAgjIAIAAIAAA1g");
	this.shape_32.setTransform(137.9029,-21.4699,0.7197,0.7197);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFADA").s().p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
	this.shape_33.setTransform(134.6644,-21.4699,0.7197,0.7197);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFADA").s().p("AgEAbIAAgXIgQgeIALAAIAJAVIALgVIAJAAIgQAeIAAAXg");
	this.shape_34.setTransform(131.9476,-21.4699,0.7197,0.7197);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFADA").s().p("AANAbIgFgMIgQAAIgEAMIgJAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
	this.shape_35.setTransform(129.2128,-21.4699,0.7197,0.7197);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFADA").s().p("AgPAaIAAgzIAJAAIAAAqIAWAAIAAAJg");
	this.shape_36.setTransform(126.3341,-21.4519,0.7197,0.7197);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFADA").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_37.setTransform(263.0738,-25.8857,0.7197,0.7197);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgGAGIAMAAIgGgVg");
	this.shape_38.setTransform(194.0924,-27.7029,0.7197,0.7197);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFADA").s().p("AAKAfIgTgoIAAAoIgKAAIAAg9IAKAAIATApIAAgpIAKAAIAAA9g");
	this.shape_39.setTransform(190.35,-27.7029,0.7197,0.7197);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAlAAIAAAKIgbAAIAAAPIAZAAIAAAJIgZAAIAAARIAbAAIAAAKg");
	this.shape_40.setTransform(186.8056,-27.7029,0.7197,0.7197);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJALIAAASIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_41.setTransform(183.3511,-27.7029,0.7197,0.7197);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFADA").s().p("AAKAfIgLgXIgDgCIgGgBIgCAAIAAAaIgKAAIAAg9IAWAAQAIAAACACQAEACACAEQACAEAAAFQAAAHgDAFQgEAEgGABIAGAFIAFAKIAHAMgAgMgEIAIAAIAIAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgDgBgBIgDgDIgIgBIgIAAg");
	this.shape_42.setTransform(179.6088,-27.7029,0.7197,0.7197);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAAKIgaAAIAAAPIAYAAIAAAJIgYAAIAAARIAbAAIAAAKg");
	this.shape_43.setTransform(175.9024,-27.7029,0.7197,0.7197);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFADA").s().p("AgEAfIAAgzIgPAAIAAgKIAnAAIAAAKIgPAAIAAAzg");
	this.shape_44.setTransform(172.5199,-27.7029,0.7197,0.7197);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgTAAIgFAOIgLAAIAUg9IAKAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_45.setTransform(167.752,-27.7029,0.7197,0.7197);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFADA").s().p("AgEAfIAAgaIgTgjIAMAAIALAZIAMgZIAMAAIgTAjIAAAag");
	this.shape_46.setTransform(164.6394,-27.7029,0.7197,0.7197);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgUAAIgDAOIgLAAIAUg9IAJAAIAUA9gAgGAGIAMAAIgGgVg");
	this.shape_47.setTransform(161.4908,-27.7029,0.7197,0.7197);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFADA").s().p("AgUALIAKgBQACALAIABQAEgBAEgCQACgCAAgEIgBgDIgCgDIgJgDIgJgEQgDgCgCgDQgCgEAAgEQAAgHADgCQACgEAEgDQAGgCADAAQAJAAAFAFQAEAEABAKIgKAAQgBgFgCgCQgCgCgEAAQgDABgDABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABACAHADQAJACACACQAFADABADQACAEAAAFQAAAIgFAFQgGAGgKAAQgRAAgDgVg");
	this.shape_48.setTransform(157.8744,-27.7029,0.7197,0.7197);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFADA").s().p("AAJAfIgSgnIAAAnIgKAAIAAg9IAKAAIATAoIAAgoIAKAAIAAA9g");
	this.shape_49.setTransform(260.6268,-27.6849,0.7197,0.7197);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_50.setTransform(256.8845,-27.6849,0.7197,0.7197);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
	this.shape_51.setTransform(253.3401,-27.6849,0.7197,0.7197);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFADA").s().p("AgRAYQgHgHAAgRQAAgKAEgHQAEgIAEgCQAFgEAHAAQALAAAHAIQAGAJABAOQAAAPgIAJQgGAIgLAAQgJAAgIgIgAgJgPQgEAEAAALQAAALAEAFQAEAFAFAAQAGAAAEgFQAEgGAAgKQAAgKgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_52.setTransform(249.2919,-27.6849,0.7197,0.7197);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgCIgFgBIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEACQADABACAFQADAEAAAFQAAAIgEAEQgDADgHACIAGAFIAMAWgAgMgEIAIAAIAIAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQABgCAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgIAAIgIAAg");
	this.shape_53.setTransform(245.5675,-27.6849,0.7197,0.7197);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFADA").s().p("AgRAYQgHgIAAgQQAAgKAEgHQADgHAGgDQAFgEAGAAQALAAAHAIQAHAIAAAPQgBAPgGAJQgHAIgLAAQgJAAgIgIgAgJgPQgEAFAAAKQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgGAAgKQAAgLgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_54.setTransform(241.5193,-27.6849,0.7197,0.7197);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFADA").s().p("AgKAcQgGgDgDgIQgDgHAAgKQAAgKADgHQADgGAGgEQAFgEAGAAQAKAAAFAFQAGAFABAIIgKADQgBgGgDgCQgEgCgEAAQgFAAgEAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAHgBIAGgEIAAgIIgNAAIAAgJIAXAAIAAAXQgEAEgFADQgGADgHAAQgHAAgFgEg");
	this.shape_55.setTransform(237.4531,-27.6849,0.7197,0.7197);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFADA").s().p("AgKAcQgGgEgDgHQgEgHAAgKQAAgKAEgHQADgGAFgEQAGgEAGAAQAKAAAFAFQAFAEACAJIgKADQgBgFgDgDQgEgCgEAAQgGAAgDAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAGgBIAGgEIAAgIIgLAAIAAgJIAWAAIAAAXQgFAFgFACQgFADgHAAQgHAAgFgEg");
	this.shape_56.setTransform(233.4409,-27.6849,0.7197,0.7197);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFADA").s().p("AAKAfIgUgnIAAAnIgJAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
	this.shape_57.setTransform(229.5726,-27.6849,0.7197,0.7197);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
	this.shape_58.setTransform(226.0462,-27.6849,0.7197,0.7197);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFADA").s().p("AgEAfIAAgyIgPAAIAAgLIAnAAIAAALIgPAAIAAAyg");
	this.shape_59.setTransform(222.6637,-27.6849,0.7197,0.7197);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgCIgFgBIgCAAIAAAaIgLAAIAAg9IAWAAQAHAAAEACQAEABACAFQACADAAAGQAAAIgEAEQgCADgIACQAFACABADIAMAWgAgLgEIAHAAIAIAAIADgDIABgFIgBgEQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgHAAIgIAAg");
	this.shape_60.setTransform(217.8958,-27.6849,0.7197,0.7197);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
	this.shape_61.setTransform(214.1894,-27.6849,0.7197,0.7197);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFADA").s().p("AAJAfIgMgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
	this.shape_62.setTransform(210.735,-27.6849,0.7197,0.7197);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFADA").s().p("AAKAfIgTgnIAAAnIgKAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
	this.shape_63.setTransform(206.7947,-27.6849,0.7197,0.7197);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgTAAIgFAOIgLAAIAUg9IAKAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_64.setTransform(203.0524,-27.6849,0.7197,0.7197);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJALIAAASIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_65.setTransform(199.508,-27.7029,0.7197,0.7197);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFADA").s().p("AgEAIQACgBACgCQAAgCAAgDIgEAAIAAgMIAJAAIAAAJQAAAHgCACQgBAEgEADg");
	this.shape_66.setTransform(155.9996,-25.4184,0.7197,0.7197);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFADA").s().p("AAKAfIgOgdIgIAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_67.setTransform(153.6066,-27.7034,0.7197,0.7197);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFADA").s().p("AgQAYQgIgIAAgPQAAgLAEgHQADgGAFgFQAFgDAHAAQALAAAHAJQAHAIAAAOQAAAQgIAIQgGAIgLAAQgKAAgGgIgAgJgPQgEAGAAAJQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgFAAgLQAAgLgEgEQgEgFgGgBQgFABgEAFg");
	this.shape_68.setTransform(149.5583,-27.7034,0.7197,0.7197);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_69.setTransform(145.8519,-27.7034,0.7197,0.7197);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFADA").s().p("AgQAYQgIgIABgPQAAgKACgIQADgGAGgFQAFgDAHAAQAKAAAIAJQAGAIAAAOQABAQgIAIQgGAIgLAAQgKAAgGgIgAgKgPQgDAFAAAKQAAALAEAFQAEAFAFAAQAHAAADgFQAEgGAAgKQAAgKgEgFQgEgFgGgBQgFABgFAFg");
	this.shape_70.setTransform(141.8036,-27.7034,0.7197,0.7197);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgDIgFAAIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEABQAEADABAEQADAEAAAFQAAAHgEAFQgEAEgGABIAGAEIAMAXgAgMgEIAIAAIAIAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgIgBIgIAAg");
	this.shape_71.setTransform(138.0792,-27.7034,0.7197,0.7197);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAAKIgaAAIAAAOIAYAAIAAAKIgYAAIAAARIAbAAIAAAKg");
	this.shape_72.setTransform(134.3727,-27.7034,0.7197,0.7197);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFADA").s().p("AAPAfIAAgwIgKAwIgJAAIgKgwIAAAwIgKAAIAAg9IAQAAIAIApIAJgpIAQAAIAAA9g");
	this.shape_73.setTransform(130.4324,-27.7034,0.7197,0.7197);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgHAGIAOAAIgHgVg");
	this.shape_74.setTransform(125.1067,-27.7034,0.7197,0.7197);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFADA").s().p("AAKAfIgTgoIAAAoIgKAAIAAg9IAKAAIATApIAAgpIAKAAIAAA9g");
	this.shape_75.setTransform(121.3642,-27.7034,0.7197,0.7197);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAlAAIAAAKIgbAAIAAAOIAZAAIAAAKIgZAAIAAARIAbAAIAAAKg");
	this.shape_76.setTransform(117.8197,-27.7034,0.7197,0.7197);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFADA").s().p("AAKAfIgLgXQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgFAAIgCAAIAAAaIgKAAIAAg9IAWAAQAHAAADABQAFADABAEQACADAAAGQAAAIgDAEQgDADgHACIAGAEIAMAXgAgMgEIAIAAIAIAAIADgDQABgBAAgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIgDgDIgIgBIgIAAg");
	this.shape_77.setTransform(114.3652,-27.7034,0.7197,0.7197);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_78.setTransform(110.4249,-27.7034,0.7197,0.7197);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_79.setTransform(106.8804,-27.7034,0.7197,0.7197);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFADA").s().p("AgFAXIAAgMIALAAIAAAMgAgFgKIAAgMIALAAIAAAMg");
	this.shape_80.setTransform(208.975,-36.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFADA").s().p("AAMAgIgYgpIAAApIgMAAIAAg/IAMAAIAZAqIAAgqIAMAAIAAA/g");
	this.shape_81.setTransform(204.225,-37.125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFADA").s().p("AASAgIgGgPIgYAAIgGAPIgNAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
	this.shape_82.setTransform(197.775,-37.125);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFADA").s().p("AgGAgIAAg0IgTAAIAAgLIAzAAIAAALIgTAAIAAA0g");
	this.shape_83.setTransform(192.5,-37.125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFADA").s().p("AASAgIgGgPIgYAAIgFAPIgOAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
	this.shape_84.setTransform(187.175,-37.125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFADA").s().p("AgOAdQgHgEgEgIQgEgIAAgJQAAgJAFgIQADgIAIgEQAHgDAIAAQALAAAHAFQAIAFABAJIgMACQgCgFgDgCQgEgDgGAAQgHAAgGAFQgEAFAAALQAAALAEAFQAGAGAHAAQAFAAADgCIAHgDIAAgJIgPAAIAAgJIAcAAIAAAYQgEAEgHADQgIADgJAAQgJAAgHgEg");
	this.shape_85.setTransform(180.4,-37.125);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFADA").s().p("AAMAgIgZgpIAAApIgMAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_86.setTransform(173.75,-37.125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFADA").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_87.setTransform(169.3,-37.125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFADA").s().p("AANAgIgPgXIgEgDIgJgBIAAAbIgNAAIAAg/IAbAAQAIAAAGACQAFABADAFQADAEAAAGQAAAHgFAFQgEADgIACIAHAFIAPAXgAgPgEIAUgBIAEgCQABgCAAgDQAAgEgCgBQgBgDgDAAIgJAAIgKAAg");
	this.shape_88.setTransform(165.125,-37.125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFADA").s().p("AgXAgIAAg/IAuAAIAAALIgiAAIAAAOIAgAAIAAAKIggAAIAAARIAjAAIAAALg");
	this.shape_89.setTransform(158.7,-37.125);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFADA").s().p("AgXAgIAAg/IAUAAIAPABQAFABAEAFQAEAEgBAJQAAAGgBAEQgDACgDADQgCACgEABIgNABIgJAAIAAAYgAgLgCIAIAAQAHAAABgBQADgBACgCIABgFQAAgEgCgCQgBgCgEgBIgIAAIgHAAg");
	this.shape_90.setTransform(152.75,-37.125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFADA").s().p("AhxByQgwgvAAhDQAAhCAwgvQAvgwBCAAQBDAAAvAwQAwAvAABCQAABDgwAvQgvAwhDAAQhCAAgvgwgAhlhlQgrAqAAA7QAAA8ArAqQAqArA7AAQA8AAAqgrQArgqAAg8QAAg7grgqQgqgrg8AAQg7AAgqArg");
	this.shape_91.setTransform(292.5281,-40.9362,0.5174,0.5174);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFADA").s().p("AgIAmIAAgcIgeAAIAAgTIAeAAIAAgcIASAAIAAAcIAdAAIAAATIgdAAIAAAcg");
	this.shape_92.setTransform(296.7746,-40.8985,0.5174,0.5174);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFADA").s().p("AgXAwQgMgJAAgQQAAgJAEgIQAEgGAKgEQgIgDgEgHQgDgFAAgIQAAgMAIgIQAIgIAQAAQAQAAAIAIQAIAIAAAMQAAAIgDAGQgFAGgHADQAKAEAEAGQAFAHAAAJQAAAPgKAKQgKAJgQAAQgNAAgKgIgAgLAJQgDAFAAAHQAAAIAEAFQAFAFAFAAQAHAAAEgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgHAAgEAFgAgJgjQgEAEAAAGQAAAGAEADQADAEAGAAQAGAAADgEQAEgDAAgGQAAgHgEgDQgDgDgGAAQgGAAgDADg");
	this.shape_93.setTransform(292.2346,-40.8855,0.5174,0.5174);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFADA").s().p("AADA3IAAhOQgLALgPAFIAAgTQAIgDAKgIQAIgHAEgKIARAAIAABtg");
	this.shape_94.setTransform(287.5005,-40.9373,0.5174,0.5174);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#040202").s().p("A4/FoIAArPMAx/AAAIAALPg");
	this.shape_95.setTransform(153.5488,-16,0.9456,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,-52,302.59999999999997,72);


(lib.frame4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_30
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(323.9,203.55);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({x:221.9,y:121.9},8).to({scaleX:0.8333,scaleY:0.8333,x:216.85,y:118.5},4).to({scaleX:1,scaleY:1,x:221.9,y:121.9},4).wait(43));

	// Layer_29
	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.setTransform(168.4,107.5,1,1,0,0,0,-0.6,-69);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({_off:false},0).to({alpha:1},7).wait(11).to({startPosition:0},0).to({scaleX:0.8662,scaleY:0.8662},4).to({scaleX:1,scaleY:1},4).wait(43));

	// Layer_28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_200 = new cjs.Graphics().p("AsrGwIAAqZMAi1AAAIAAKZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(200).to({graphics:mask_graphics_200,x:141.775,y:43.1704}).wait(78));

	// Layer_27
	this.instance_2 = new lib.Tween17("synched",0);
	this.instance_2.setTransform(192,121.6);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).to({y:69.6},9).wait(69));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,331.4,212.6);


(lib.frame3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_135 = new cjs.Graphics().p("AudDZIclhnIAWGPI8lBog");
	var mask_graphics_136 = new cjs.Graphics().p("AudDVIclhnIAWGPI8lBog");
	var mask_graphics_137 = new cjs.Graphics().p("AuLDRIclhnIAWGPI8lBog");
	var mask_graphics_138 = new cjs.Graphics().p("AsiDNIclhoIAWGQI8lBng");
	var mask_graphics_139 = new cjs.Graphics().p("Aq5DJIclhoIAWGQI8lBng");
	var mask_graphics_140 = new cjs.Graphics().p("ApQDFIclhoIAWGQI8lBng");
	var mask_graphics_141 = new cjs.Graphics().p("AnoDAIclhnIAXGPI8lBog");
	var mask_graphics_142 = new cjs.Graphics().p("Al/C8IclhnIAXGPI8lBog");
	var mask_graphics_143 = new cjs.Graphics().p("AkWC4IclhnIAXGPI8lBog");
	var mask_graphics_190 = new cjs.Graphics().p("AkWC4IclhnIAXGPI8lBog");
	var mask_graphics_191 = new cjs.Graphics().p("AkgC4IclhnIAWGPI8lBog");
	var mask_graphics_192 = new cjs.Graphics().p("AkrC4IclhnIAWGPI8lBog");
	var mask_graphics_193 = new cjs.Graphics().p("Ak2C4IclhnIAXGPI8lBog");
	var mask_graphics_194 = new cjs.Graphics().p("AlAC4IclhnIAWGPI8lBog");
	var mask_graphics_195 = new cjs.Graphics().p("AlLC4IclhnIAWGPI8lBog");
	var mask_graphics_196 = new cjs.Graphics().p("AlWC4IclhnIAXGPI8lBog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_graphics_135,x:54.275,y:61.7}).wait(1).to({graphics:mask_graphics_136,x:75.2563,y:61.2813}).wait(1).to({graphics:mask_graphics_137,x:94.4313,y:60.8625}).wait(1).to({graphics:mask_graphics_138,x:104.9219,y:60.4438}).wait(1).to({graphics:mask_graphics_139,x:115.4125,y:60.025}).wait(1).to({graphics:mask_graphics_140,x:125.9031,y:59.6063}).wait(1).to({graphics:mask_graphics_141,x:136.3938,y:59.1875}).wait(1).to({graphics:mask_graphics_142,x:146.8844,y:58.7688}).wait(1).to({graphics:mask_graphics_143,x:157.375,y:58.35}).wait(47).to({graphics:mask_graphics_190,x:157.375,y:58.35}).wait(1).to({graphics:mask_graphics_191,x:156.3083,y:58.35}).wait(1).to({graphics:mask_graphics_192,x:155.2417,y:58.35}).wait(1).to({graphics:mask_graphics_193,x:154.175,y:58.35}).wait(1).to({graphics:mask_graphics_194,x:153.1083,y:58.35}).wait(1).to({graphics:mask_graphics_195,x:152.0417,y:58.35}).wait(1).to({graphics:mask_graphics_196,x:150.975,y:58.35}).wait(1).to({graphics:null,x:0,y:0}).wait(81));

	// Layer_14
	this.instance = new lib.txt_reward();
	this.instance.setTransform(146,74);

	this.instance_1 = new lib.Tween26("synched",0);
	this.instance_1.setTransform(204,87);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},135).to({state:[{t:this.instance_1}]},55).to({state:[{t:this.instance_1}]},6).to({state:[]},1).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190).to({_off:false},0).to({x:186.4,alpha:0},6).to({_off:true},1).wait(81));

	// Layer_18 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_126 = new cjs.Graphics().p("Az1C0IAAlmMAnrAAAIAAFmg");
	var mask_1_graphics_190 = new cjs.Graphics().p("Az1C0IAAlmMAnrAAAIAAFmg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AwbFqIAAlnMAnrAAAIAAFng");
	var mask_1_graphics_192 = new cjs.Graphics().p("AwnFqIAAlnMAnrAAAIAAFng");
	var mask_1_graphics_193 = new cjs.Graphics().p("AwyFqIAAlnMAnqAAAIAAFng");
	var mask_1_graphics_194 = new cjs.Graphics().p("Aw+FqIAAlnMAnqAAAIAAFng");
	var mask_1_graphics_195 = new cjs.Graphics().p("AxLFqIAAlnMAnrAAAIAAFng");
	var mask_1_graphics_196 = new cjs.Graphics().p("AxWFqIAAlnMAnqAAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(126).to({graphics:mask_1_graphics_126,x:173.025,y:54.4}).wait(64).to({graphics:mask_1_graphics_190,x:173.025,y:54.4}).wait(1).to({graphics:mask_1_graphics_191,x:148.8,y:36.175}).wait(1).to({graphics:mask_1_graphics_192,x:147.6,y:36.175}).wait(1).to({graphics:mask_1_graphics_193,x:146.4,y:36.175}).wait(1).to({graphics:mask_1_graphics_194,x:145.2,y:36.175}).wait(1).to({graphics:mask_1_graphics_195,x:144,y:36.175}).wait(1).to({graphics:mask_1_graphics_196,x:142.8,y:36.175}).wait(1).to({graphics:null,x:0,y:0}).wait(81));

	// Layer_16
	this.instance_2 = new lib.text3b();
	this.instance_2.setTransform(172.05,138.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(126).to({_off:false},0).to({x:174,y:122.4},7).wait(57).to({x:165.2,alpha:0},6).to({_off:true},1).wait(81));

	// Layer_17 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_121 = new cjs.Graphics().p("AubEEIAAkmMAlFAAAIAAEmg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AyiCTIAAkmMAlFAAAIAAEmg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AunEEIAAkmMAlGAAAIAAEmg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AuyEEIAAkmMAlFAAAIAAEmg");
	var mask_2_graphics_193 = new cjs.Graphics().p("Au+EEIAAkmMAlGAAAIAAEmg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AvJEEIAAkmMAlGAAAIAAEmg");
	var mask_2_graphics_195 = new cjs.Graphics().p("AvUEEIAAkmMAlFAAAIAAEmg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AvfEEIAAkmMAlFAAAIAAEmg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(121).to({graphics:mask_2_graphics_121,x:145,y:25.975}).wait(69).to({graphics:mask_2_graphics_190,x:171.275,y:37.2}).wait(1).to({graphics:mask_2_graphics_191,x:143.8667,y:25.975}).wait(1).to({graphics:mask_2_graphics_192,x:142.7333,y:25.975}).wait(1).to({graphics:mask_2_graphics_193,x:141.6,y:25.975}).wait(1).to({graphics:mask_2_graphics_194,x:140.4667,y:25.975}).wait(1).to({graphics:mask_2_graphics_195,x:139.3333,y:25.975}).wait(1).to({graphics:mask_2_graphics_196,x:138.2,y:25.975}).wait(1).to({graphics:null,x:0,y:0}).wait(81));

	// Layer_13
	this.instance_3 = new lib.text3a();
	this.instance_3.setTransform(174,108.8);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121).to({_off:false},0).to({y:84},7).wait(62).to({x:165.2,alpha:0},6).to({_off:true},1).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,100);


// stage content:
(lib._300x250yakin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ghw
	this.instance = new lib.ghwai("synched",0);
	this.instance.setTransform(156.8,298.9,1,1,0,0,0,160,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278));

	// logo
	this.instance_1 = new lib.logohead();
	this.instance_1.setTransform(72,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(278));

	// frame4
	this.instance_2 = new lib.frame4();
	this.instance_2.setTransform(159,157.05,1,1,0,0,0,173.5,147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(278));

	// Layer_24
	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.setTransform(389.95,164.65);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(190).to({_off:false},0).to({x:152.05,y:155.05},17).wait(71));

	// Layer_21
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(-120.9,4.75);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(183).to({_off:false},0).wait(1).to({regX:76,regY:61,x:-29.35,y:86.4},0).wait(1).to({x:-9.15,y:103.75},0).wait(1).to({x:13.6,y:118.85},0).wait(1).to({x:37.65,y:132.4},0).wait(1).to({x:62.45,y:144.7},0).wait(1).to({x:87.45,y:155.9},0).wait(1).to({x:112.4,y:166.2},0).wait(1).to({x:136.95,y:175.65},0).wait(1).to({x:160.85,y:184.3},0).wait(1).to({x:183.85,y:192.15},0).wait(1).to({x:205.6,y:199.25},0).wait(1).to({x:225.85,y:205.55},0).wait(1).to({x:244.25,y:211.05},0).wait(1).to({x:291.7,y:228.6,alpha:0.5},0).wait(1).to({x:341.35,y:246.4,alpha:0},0).wait(1).to({x:360.7,y:252.05},0).wait(1).to({x:381.4,y:259.95},0).wait(1).to({x:404.05,y:269.15},0).wait(1).to({x:429.45,y:278.05},0).wait(1).to({x:459.45,y:283.85},0).wait(75));

	// Layer_26 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_183 = new cjs.Graphics().p("A+xBFIIm2bMA09AUSIomWbg");
	var mask_graphics_184 = new cjs.Graphics().p("A/UBGIIv20MA16AUpIovW0g");
	var mask_graphics_185 = new cjs.Graphics().p("A/4BIII63PMA23AVAIo6XPg");
	var mask_graphics_186 = new cjs.Graphics().p("EggbABJIJD3pMA30AVYIpDXpg");
	var mask_graphics_187 = new cjs.Graphics().p("Egg/ABKIJN4CMA4yAVvIpNYCg");
	var mask_graphics_188 = new cjs.Graphics().p("EghiABLIJX4cMA5uAWHIpXYcg");
	var mask_graphics_189 = new cjs.Graphics().p("EgiGABNIJh43MA6sAWeIphY3g");
	var mask_graphics_190 = new cjs.Graphics().p("EgipABOIJr5QMA7oAW1IprZQg");
	var mask_graphics_191 = new cjs.Graphics().p("EgjNABPIJ15qMA8mAXNIp1Zqg");
	var mask_graphics_192 = new cjs.Graphics().p("EgjwABQIJ/6DMA9iAXkIp/aDg");
	var mask_graphics_193 = new cjs.Graphics().p("EgkUABSIKJ6eMA+gAX7IqJaeg");
	var mask_graphics_194 = new cjs.Graphics().p("Egk3ABTIKS64MA/dAYTIqSa4g");
	var mask_graphics_195 = new cjs.Graphics().p("EglbABUIKd7RMBAaAYqIqdbRg");
	var mask_graphics_196 = new cjs.Graphics().p("Egl+ABVIKm7rMBBXAZCIqmbrg");
	var mask_graphics_197 = new cjs.Graphics().p("EgmiABXIKx8GMBCUAZZIqxcGg");
	var mask_graphics_198 = new cjs.Graphics().p("EgnFABYIK68fMBDRAZwIq6cfg");
	var mask_graphics_199 = new cjs.Graphics().p("EgnpABZILE85MBEPAaIIrEc5g");
	var mask_graphics_200 = new cjs.Graphics().p("EgoMABkILO9TMBFLAafIrOdTg");
	var mask_graphics_201 = new cjs.Graphics().p("EgowACaILY9sMBGJAa2IrYdtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(183).to({graphics:mask_graphics_183,x:-164.2792,y:-42.2831}).wait(1).to({graphics:mask_graphics_184,x:-153.3206,y:-29.184}).wait(1).to({graphics:mask_graphics_185,x:-142.3621,y:-16.085}).wait(1).to({graphics:mask_graphics_186,x:-131.4035,y:-2.9859}).wait(1).to({graphics:mask_graphics_187,x:-120.4449,y:10.1131}).wait(1).to({graphics:mask_graphics_188,x:-109.4864,y:23.2122}).wait(1).to({graphics:mask_graphics_189,x:-98.5278,y:36.3113}).wait(1).to({graphics:mask_graphics_190,x:-87.5692,y:49.4103}).wait(1).to({graphics:mask_graphics_191,x:-76.6107,y:62.5094}).wait(1).to({graphics:mask_graphics_192,x:-65.6521,y:75.6084}).wait(1).to({graphics:mask_graphics_193,x:-54.6935,y:88.7075}).wait(1).to({graphics:mask_graphics_194,x:-43.735,y:101.8066}).wait(1).to({graphics:mask_graphics_195,x:-32.7764,y:114.9056}).wait(1).to({graphics:mask_graphics_196,x:-21.8178,y:128.0047}).wait(1).to({graphics:mask_graphics_197,x:-10.8593,y:141.1038}).wait(1).to({graphics:mask_graphics_198,x:0.0993,y:154.2028}).wait(1).to({graphics:mask_graphics_199,x:11.0579,y:167.3019}).wait(1).to({graphics:mask_graphics_200,x:22.0164,y:179.4694}).wait(1).to({graphics:mask_graphics_201,x:32.925,y:187.275}).wait(77));

	// Layer_22
	this.instance_5 = new lib.Tween10("synched",0);
	this.instance_5.setTransform(203.25,144.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(183).to({_off:false},0).to({x:50.35,y:135.55},24).wait(71));

	// Layer_23
	this.instance_6 = new lib.Tween11("synched",0);
	this.instance_6.setTransform(439.5,296);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(190).to({_off:false},0).to({x:187.5},17).wait(71));

	// Layer_10
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(188.8,167.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).to({x:248.5},16).wait(110).to({startPosition:0},0).to({x:228.5,alpha:0},6).to({_off:true},1).wait(81));

	// Layer_11
	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.setTransform(194.35,172.75);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({_off:false},0).to({x:187.85,y:173.4},14).wait(110).to({startPosition:0},0).to({x:171.85,alpha:0},6).to({_off:true},1).wait(81));

	// Layer_12
	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.setTransform(180.5,171.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({_off:false},0).to({x:127.85},13).wait(110).to({startPosition:0},0).to({x:115.85,alpha:0},6).to({_off:true},1).wait(81));

	// Layer_20
	this.instance_10 = new lib.txt_syarat_ketentuanberlaku_();
	this.instance_10.setTransform(187,196);

	this.instance_11 = new lib.Tween30("synched",0);
	this.instance_11.setTransform(238,200);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},121).to({state:[{t:this.instance_11}]},69).to({state:[{t:this.instance_11}]},6).to({state:[]},1).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(190).to({_off:false},0).to({x:223.6,alpha:0},6).to({_off:true},1).wait(81));

	// frame3
	this.instance_12 = new lib.frame3();
	this.instance_12.setTransform(164.5,136.55,1,1,0,0,0,177.5,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(278));

	// Layer_19
	this.instance_13 = new lib.txt_PEROKOKDEWASA18();
	this.instance_13.setTransform(217,197);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(63).to({_off:false},0).to({_off:true},58).wait(157));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_50 = new cjs.Graphics().p("A6oHAIAAlgMA1RAAAIAAFgg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A6oCwIAAlfMA1RAAAIAAFfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_1_graphics_50,x:166.6,y:44.8157}).wait(61).to({graphics:mask_1_graphics_111,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_112,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_113,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_114,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_115,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_116,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_117,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_118,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_119,x:166.6004,y:72.0247}).wait(1).to({graphics:mask_1_graphics_120,x:166.6004,y:72.0247}).wait(1).to({graphics:null,x:0,y:0}).wait(157));

	// text2b
	this.instance_14 = new lib.text2b();
	this.instance_14.setTransform(173.5,146);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({y:125.2},13,cjs.Ease.sineOut).wait(48).to({alpha:0},9).to({_off:true},1).wait(157));

	// Layer_8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_45 = new cjs.Graphics().p("A7zEaIAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_111 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_112 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_113 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_114 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_115 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_116 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_117 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_118 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_119 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
	var mask_2_graphics_120 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_2_graphics_45,x:169.25,y:28.2}).wait(66).to({graphics:mask_2_graphics_111,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_112,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_113,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_114,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_115,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_116,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_117,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_118,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_119,x:169.2499,y:39.4002}).wait(1).to({graphics:mask_2_graphics_120,x:169.2499,y:39.4002}).wait(1).to({graphics:null,x:0,y:0}).wait(157));

	// text2a
	this.instance_15 = new lib.text2a();
	this.instance_15.setTransform(163,152.75,0.9695,0.9695);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45).to({_off:false},0).to({y:129.35},13,cjs.Ease.sineOut).wait(53).to({alpha:0},9).to({_off:true},1).wait(157));

	// text1
	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.setTransform(170.9,215.6,3.2969,3.2969,0,0,0,0.2,0.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({_off:false},0).to({regX:0,regY:0,scaleX:0.906,scaleY:0.906,x:162.5,y:135.25,alpha:1},4,cjs.Ease.sineOut).to({regX:0.1,regY:0.1,scaleX:0.9655,scaleY:0.9655,x:162.6,y:135.35},1).to({regX:0.2,scaleX:0.949,scaleY:0.949,x:162.7},1).to({_off:true},37).wait(233));

	// bg
	this.instance_17 = new lib.BG();
	this.instance_17.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(278));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,66.7,537.2,278.2);
// library properties:
lib.properties = {
	id: 'D5623009D360A24C896175AC6EDD28FC',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/bolong.jpg", id:"bolong"},
		{src:"images/img_art.png", id:"img_art"},
		{src:"images/img_button.png", id:"img_button"},
		{src:"images/img_cursor.png", id:"img_cursor"},
		{src:"images/img_globe.png", id:"img_globe"},
		{src:"images/img_mappin.png", id:"img_mappin"},
		{src:"images/img_plane.png", id:"img_plane"},
		{src:"images/img_tech.png", id:"img_tech"},
		{src:"images/line.png", id:"line"},
		{src:"images/logohead.png", id:"logohead"},
		{src:"images/music.png", id:"music"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/txt3.png", id:"txt3"},
		{src:"images/txt5.png", id:"txt5"},
		{src:"images/txt_PEROKOKDEWASA18.png", id:"txt_PEROKOKDEWASA18"},
		{src:"images/txt_reward.png", id:"txt_reward"},
		{src:"images/txt_syarat_ketentuanberlaku_.png", id:"txt_syarat_ketentuanberlaku_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D5623009D360A24C896175AC6EDD28FC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;