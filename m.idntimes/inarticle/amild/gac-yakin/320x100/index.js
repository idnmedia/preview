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
p.nominalBounds = new cjs.Rectangle(0,0,667,208);


(lib.bolong = function() {
	this.initialize(img.bolong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,65);


(lib.img_art = function() {
	this.initialize(img.img_art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,160);


(lib.img_button = function() {
	this.initialize(img.img_button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,39);


(lib.img_cursor = function() {
	this.initialize(img.img_cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,34);


(lib.img_globe = function() {
	this.initialize(img.img_globe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,195);


(lib.img_mappin = function() {
	this.initialize(img.img_mappin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,68);


(lib.img_plane = function() {
	this.initialize(img.img_plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,151);


(lib.img_tech = function() {
	this.initialize(img.img_tech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,110);


(lib.line = function() {
	this.initialize(img.line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,197);


(lib.logohead = function() {
	this.initialize(img.logohead);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,31);


(lib.music = function() {
	this.initialize(img.music);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,157);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,91);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,70);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,64);


(lib.txt5 = function() {
	this.initialize(img.txt5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,65);


(lib.txt_PEROKOKDEWASA18 = function() {
	this.initialize(img.txt_PEROKOKDEWASA18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,11);


(lib.txt_reward = function() {
	this.initialize(img.txt_reward);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,52);


(lib.txt_syarat_ketentuanberlaku_ = function() {
	this.initialize(img.txt_syarat_ketentuanberlaku_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,11);// helper functions:

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


(lib.Tween43 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-33.85,-2.65,0.4801,0.4801);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-2.6,67.69999999999999,5.300000000000001);


(lib.Tween42 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-41.5,-9.45,0.3641,0.3641);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-9.4,83,18.9);


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
	this.instance.setTransform(-55,-86,1.1573,1.1573);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-86,398.1,105.3);


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
p.nominalBounds = new cjs.Rectangle(-14.5,-17,29,34);


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
	this.instance.setTransform(-60,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-19.5,120,39);


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
p.nominalBounds = new cjs.Rectangle(-99.5,-30,229,65);


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
	this.instance.setTransform(-32.5,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-34,65,68);


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
	this.instance.setTransform(-139,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-97.5,278,195);


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
p.nominalBounds = new cjs.Rectangle(-202,-98.5,404,197);


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
	this.instance.setTransform(-38,-19,2.1343,2.1343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-19,160.1,234.8);


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
	this.instance.setTransform(-61,-60,0.8791,0.8791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-60,101.1,140.7);


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
	this.instance.setTransform(-60,-53,0.8403,0.8403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-53,95.8,132);


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
	mask.graphics.p("Az/jPIAAkOMAn/AAAIAAEOg");
	mask.setTransform(-32.975,-47.775);

	// Layer_1
	this.instance = new lib.txt3();
	this.instance.setTransform(-142,-111,0.4619,0.4619);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3b, new cjs.Rectangle(-142,-95.5,144.1,14.099999999999994), null);


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
	mask.graphics.p("Ax4l7IAAkEMAjxAAAIAAEEg");
	mask.setTransform(-56.775,-64.05);

	// Layer_1
	this.instance = new lib.txt3();
	this.instance.setTransform(-148,-120,0.5058,0.5058);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3a, new cjs.Rectangle(-148,-120,157.8,17.900000000000006), null);


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
	mask.graphics.p("A3Wh2IAAl8MAutAAAIAAF8g");
	mask.setTransform(-13.5,-49.9);

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.setTransform(-119,-117,0.4743,0.4743);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2b, new cjs.Rectangle(-119,-99.8,177.9,16), null);


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
	mask.graphics.p("AybmhIAAlyMAk3AAAIAAFyg");
	mask.setTransform(-13.9,-78.75);

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.setTransform(-120,-135,0.4699,0.4699);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2a, new cjs.Rectangle(-120,-135,176.2,14.5), null);


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
	this.instance.setTransform(41,32,0.5684,0.5684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(41,32,106.30000000000001,85.9), null);


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
	this.instance.setTransform(443,143,0.2801,0.1997);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAjIAFgQIABgTIgBgPQgBgIgFgLIAGAAQAEAJACAIQADAKAAAHQAAAHgDAKQgCAJgEAJg");
	this.shape.setTransform(665.8287,151.9401,0.4103,0.4103);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAXQgEgDgBgIIAJgBQAAAEACACQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgFgCgCQgBgCgDABQgDAAgDACIgHgBIAFgbIAVAAIAAAKIgPAAIgBAJIAEgCQAGAAADAEQAFAFAAAIQAAAHgEAGQgEAGgHAAQgFAAgEgEg");
	this.shape_1.setTransform(664.721,151.6632,0.4103,0.4103);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAVQgFgGAAgPQAAgNAFgHQAEgGAGAAQAFAAADADQAEAEABAGIgIABQgBgGgEAAQgCAAgCADQgBACgBAKIADgDIAEgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgGAAQgFAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQABgBAAAAQAAAAABAAQAAgBABAAQABgCAAgGQAAgFgBgCQgBgCgEAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(663.285,151.6529,0.4103,0.4103);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAXQgEgDgBgIIAJgBIACAGQAAAAABABQABAAAAAAQABABAAAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgFgCgCQgBgCgDABQgDAAgDACIgHgBIAFgbIAVAAIAAAKIgPAAIgBAJIAFgCQAFAAADAEQAFAFAAAIQAAAHgEAGQgEAGgHAAQgFAAgEgEg");
	this.shape_3.setTransform(661.8491,151.6632,0.4103,0.4103);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAVQgFgGAAgPQAAgNAFgHQAEgGAGAAQAFAAAEADQADAEABAGIgIABQgBgGgEAAQgBAAgDADQgCAEAAAIIAEgDIADgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgFAAQgGAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQABgCAAgGQAAgFgBgCQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_4.setTransform(660.4132,151.6529,0.4103,0.4103);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAFIAAgJIAQAAIAAAJg");
	this.shape_5.setTransform(659.2542,151.9401,0.4103,0.4103);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAaQAAgJADgNQAEgKAFgKIgSAAIAAgJIAbAAIAAAHIgHANQgEAHgBAIQgCAIAAAIg");
	this.shape_6.setTransform(658.0952,151.6426,0.4103,0.4103);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAaQAAgJAEgNQADgKAGgKIgSAAIAAgJIAcAAIAAAHQgEAFgEAIIgGAPQgBAIAAAIg");
	this.shape_7.setTransform(656.6695,151.6426,0.4103,0.4103);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABAbIAAgmQgDAGgGACIAAgJIAGgGQAEgDABgFIAHAAIAAA1g");
	this.shape_8.setTransform(655.1311,151.6324,0.4103,0.4103);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIAAAJg");
	this.shape_9.setTransform(654.0746,151.9401,0.4103,0.4103);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAVQgEgFAAgQQAAgPAEgFQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgCAEAAALQAAAMACADQABAEACAAQACAAACgEQABgDAAgMQAAgLgBgEQgCgDgCAAQgCAAgBADg");
	this.shape_10.setTransform(652.9259,151.6529,0.4103,0.4103);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQABABAAABQAAAAABABQAAAAABABQAAAAAAAAQADAAABgEQABgDAAgMQAAgLgBgEQgBgDgDAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAABgBAAg");
	this.shape_11.setTransform(651.49,151.6529,0.4103,0.4103);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAXQgDgFAAgHQAAgFACgDQABgDAEgCIgFgEQgCgDABgEQAAgGADgEQADgDAGAAQAHAAACAEQAEADAAAGQAAAEgBADIgFAEQAFACABADQABACAAAGQAAAFgBADQgCADgEADQgCACgFAAQgFAAgFgEgAgDAEQgCADAAADQAAAEACADQACACABAAQACAAADgCQABgCAAgFQAAgEgCgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACgAgDgRIgBAFQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQABAAAAAAQABAAAAABQAAAAAAAAIAEgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_12.setTransform(650.0643,151.6529,0.4103,0.4103);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAFAAAPQAAAQgEAFQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQACAEABAAQADAAABgEQACgDAAgMQAAgLgCgEQgBgDgDAAQgBAAgCADg");
	this.shape_13.setTransform(648.6181,151.6529,0.4103,0.4103);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AACAjQgEgJgCgIQgCgKgBgIQABgHACgKQACgIAEgJIAGAAIgGATIgCAPQAAAKACAJIAGAQg");
	this.shape_14.setTransform(647.5002,151.9401,0.4103,0.4103);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AADALIgDgKIgDADIAAAHIgEAAIAAgVIAEAAIAAAJIAGgJIAFAAIgHAIIAHANg");
	this.shape_15.setTransform(645.475,151.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAVQgGgHAAgOQAAgIACgGQADgHAFgDQAEgDAGAAQAJAAAGAHQAGAIAAAMQAAAOgGAHQgGAHgJAAQgIAAgGgHgAgIgNQgDAEAAAJQAAAKADAEQAEAFAEAAQAFAAAEgFQADgEAAgKQAAgJgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_16.setTransform(643.4693,151.6324,0.4103,0.4103);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAIAbIgKgZIgIAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
	this.shape_17.setTransform(641.6334,151.6324,0.4103,0.4103);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAVQgGgIgBgNQAAgIAEgGQADgHAEgDQAFgDAFAAQAKAAAFAHQAHAIAAAMQgBAOgGAHQgFAHgKAAQgJAAgFgHgAgHgNQgEAEAAAJQAAAKAEAEQADAFAEAAQAFAAAEgFQADgFAAgJQAAgJgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_18.setTransform(639.6231,151.6324,0.4103,0.4103);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAJAbIgKgUQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgEgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQADABACAEQACADAAAFQAAAHgDADQgDAEgFAAIAEAFIAFAIIAGALgAgKgDIANgBQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDgCIgNgBg");
	this.shape_19.setTransform(637.7872,151.6324,0.4103,0.4103);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_20.setTransform(635.941,151.6324,0.4103,0.4103);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANAbIAAgpIgJApIgHAAIgJgpIAAApIgIAAIAAg1IANAAIAHAkIAIgkIANAAIAAA1g");
	this.shape_21.setTransform(633.9923,151.6324,0.4103,0.4103);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_22.setTransform(631.8384,151.6324,0.4103,0.4103);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAbIAAgsIgOAAIAAgJIAiAAIAAAJIgMAAIAAAsg");
	this.shape_23.setTransform(630.6794,151.6324,0.4103,0.4103);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAJAbIgRgiIAAAiIgIAAIAAg1IAJAAIARAjIAAgjIAIAAIAAA1g");
	this.shape_24.setTransform(628.9563,151.6324,0.4103,0.4103);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_25.setTransform(627.2229,151.6324,0.4103,0.4103);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAJAbIAAgYIgRAAIAAAYIgIAAIAAg1IAIAAIAAAVIARAAIAAgVIAJAAIAAA1g");
	this.shape_26.setTransform(625.4075,151.6324,0.4103,0.4103);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAJAbIgKgUIgCgCIgFgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQAEACABADQACADAAAFQAAAHgDADQgDAEgFAAIAFAFIAKATgAgKgDIAHAAIAHgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgEIgBgEIgDgCIgNgBg");
	this.shape_27.setTransform(623.6331,151.6324,0.4103,0.4103);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGALIAAgVIAMAAIAAAEIgIAAIAAAEIAIAAIAAADIgIAAIAAAGIAJAAIAAAEg");
	this.shape_28.setTransform(621.8,151.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IARAAQAGAAADACQADAAACAEQACADAAAFQAAAEgBADIgFAEQAEABACADQACADAAAFQAAAGgCAEQgEAFgDAAIgLABgAgJASIAPgBIACgCIABgEIgBgFIgDgCIgGgBIgIAAgAgJgEIAMgBIADgCQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAAAgBIgBgEIgDgBIgHgBIgGAAg");
	this.shape_29.setTransform(620.0228,151.6324,0.4103,0.4103);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAJAbIgRgiIAAAiIgJAAIAAg1IAJAAIARAjIAAgjIAJAAIAAA1g");
	this.shape_30.setTransform(617.4074,151.6324,0.4103,0.4103);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgGAGIAMAAIgGgTg");
	this.shape_31.setTransform(615.5612,151.6324,0.4103,0.4103);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAIAbIgQgiIAAAiIgIAAIAAg1IAIAAIARAjIAAgjIAIAAIAAA1g");
	this.shape_32.setTransform(613.7047,151.6324,0.4103,0.4103);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
	this.shape_33.setTransform(611.8586,151.6324,0.4103,0.4103);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAbIAAgXIgQgeIALAAIAJAVIALgVIAJAAIgQAeIAAAXg");
	this.shape_34.setTransform(610.3098,151.6324,0.4103,0.4103);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAFALIgBgFIgHAAIgBAFIgEAAIAHgVIADAAIAHAVgAgCACIAFAAIgDgHg");
	this.shape_35.setTransform(608.75,151.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgPAaIAAgzIAJAAIAAAqIAWAAIAAAJg");
	this.shape_36.setTransform(607.1098,151.6426,0.4103,0.4103);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_37.setTransform(605.4625,152.5953,0.3636,0.3636);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgGAGIAMAAIgGgVg");
	this.shape_38.setTransform(570.6084,151.6771,0.3636,0.3636);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAKAfIgTgoIAAAoIgKAAIAAg9IAKAAIATApIAAgpIAKAAIAAA9g");
	this.shape_39.setTransform(568.7175,151.6771,0.3636,0.3636);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSAfIAAg9IAlAAIAAAKIgbAAIAAAPIAZAAIAAAJIgZAAIAAARIAbAAIAAAKg");
	this.shape_40.setTransform(566.9266,151.6771,0.3636,0.3636);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAKAfIgNgdIgJALIAAASIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_41.setTransform(565.1812,151.6771,0.3636,0.3636);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAKAfIgLgXIgDgCIgGgBIgCAAIAAAaIgKAAIAAg9IAWAAQAIAAACACQAEACACAEQACAEAAAFQAAAHgDAFQgEAEgGABIAGAFIAFAKIAHAMgAgMgEIAIAAIAIAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgDgBgBIgDgDIgIgBIgIAAg");
	this.shape_42.setTransform(563.2903,151.6771,0.3636,0.3636);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAfIAAg9IAkAAIAAAKIgaAAIAAAPIAYAAIAAAJIgYAAIAAARIAbAAIAAAKg");
	this.shape_43.setTransform(561.4176,151.6771,0.3636,0.3636);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAfIAAgzIgPAAIAAgKIAnAAIAAAKIgPAAIAAAzg");
	this.shape_44.setTransform(559.7085,151.6771,0.3636,0.3636);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAPAfIgFgOIgTAAIgFAOIgLAAIAUg9IAKAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_45.setTransform(557.2995,151.6771,0.3636,0.3636);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgEAfIAAgaIgTgjIAMAAIALAZIAMgZIAMAAIgTAjIAAAag");
	this.shape_46.setTransform(555.7267,151.6771,0.3636,0.3636);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAOAfIgEgOIgUAAIgDAOIgLAAIAUg9IAJAAIAUA9gAgGAGIAMAAIgGgVg");
	this.shape_47.setTransform(554.1359,151.6771,0.3636,0.3636);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUALIAKgBQACALAIABQAEgBAEgCQACgCAAgEIgBgDIgCgDIgJgDIgJgEQgDgCgCgDQgCgEAAgEQAAgHADgCQACgEAEgDQAGgCADAAQAJAAAFAFQAEAEABAKIgKAAQgBgFgCgCQgCgCgEAAQgDABgDABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABACAHADQAJACACACQAFADABADQACAEAAAFQAAAIgFAFQgGAGgKAAQgRAAgDgVg");
	this.shape_48.setTransform(552.3086,151.6771,0.3636,0.3636);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAJAfIgSgnIAAAnIgKAAIAAg9IAKAAIATAoIAAgoIAKAAIAAA9g");
	this.shape_49.setTransform(604.2262,151.6862,0.3636,0.3636);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_50.setTransform(602.3353,151.6862,0.3636,0.3636);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
	this.shape_51.setTransform(600.5444,151.6862,0.3636,0.3636);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRAYQgHgHAAgRQAAgKAEgHQAEgIAEgCQAFgEAHAAQALAAAHAIQAGAJABAOQAAAPgIAJQgGAIgLAAQgJAAgIgIgAgJgPQgEAEAAALQAAALAEAFQAEAFAFAAQAGAAAEgFQAEgGAAgKQAAgKgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_52.setTransform(598.499,151.6862,0.3636,0.3636);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AALAfIgMgXIgDgCIgFgBIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEACQADABACAFQADAEAAAFQAAAIgEAEQgDADgHACIAGAFIAMAWgAgMgEIAIAAIAIAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQABgCAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgIAAIgIAAg");
	this.shape_53.setTransform(596.6172,151.6862,0.3636,0.3636);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRAYQgHgIAAgQQAAgKAEgHQADgHAGgDQAFgEAGAAQALAAAHAIQAHAIAAAPQgBAPgGAJQgHAIgLAAQgJAAgIgIgAgJgPQgEAFAAAKQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgGAAgKQAAgLgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_54.setTransform(594.5717,151.6862,0.3636,0.3636);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgKAcQgGgDgDgIQgDgHAAgKQAAgKADgHQADgGAGgEQAFgEAGAAQAKAAAFAFQAGAFABAIIgKADQgBgGgDgCQgEgCgEAAQgFAAgEAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAHgBIAGgEIAAgIIgNAAIAAgJIAXAAIAAAXQgEAEgFADQgGADgHAAQgHAAgFgEg");
	this.shape_55.setTransform(592.5172,151.6862,0.3636,0.3636);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgKAcQgGgEgDgHQgEgHAAgKQAAgKAEgHQADgGAFgEQAGgEAGAAQAKAAAFAFQAFAEACAJIgKADQgBgFgDgDQgEgCgEAAQgGAAgDAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAGgBIAGgEIAAgIIgLAAIAAgJIAWAAIAAAXQgFAFgFACQgFADgHAAQgHAAgFgEg");
	this.shape_56.setTransform(590.49,151.6862,0.3636,0.3636);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAKAfIgUgnIAAAnIgJAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
	this.shape_57.setTransform(588.5355,151.6862,0.3636,0.3636);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
	this.shape_58.setTransform(586.7537,151.6862,0.3636,0.3636);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEAfIAAgyIgPAAIAAgLIAnAAIAAALIgPAAIAAAyg");
	this.shape_59.setTransform(585.0446,151.6862,0.3636,0.3636);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AALAfIgMgXIgDgCIgFgBIgCAAIAAAaIgLAAIAAg9IAWAAQAHAAAEACQAEABACAFQACADAAAGQAAAIgEAEQgCADgIACQAFACABADIAMAWgAgLgEIAHAAIAIAAIADgDIABgFIgBgEQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgHAAIgIAAg");
	this.shape_60.setTransform(582.6355,151.6862,0.3636,0.3636);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
	this.shape_61.setTransform(580.7628,151.6862,0.3636,0.3636);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAJAfIgMgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
	this.shape_62.setTransform(579.0174,151.6862,0.3636,0.3636);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAKAfIgTgnIAAAnIgKAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
	this.shape_63.setTransform(577.0265,151.6862,0.3636,0.3636);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAPAfIgFgOIgTAAIgFAOIgLAAIAUg9IAKAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_64.setTransform(575.1356,151.6862,0.3636,0.3636);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAKAfIgNgdIgJALIAAASIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_65.setTransform(573.3447,151.6771,0.3636,0.3636);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgEAIQACgBACgCQAAgCAAgDIgEAAIAAgMIAJAAIAAAJQAAAHgCACQgBAEgEADg");
	this.shape_66.setTransform(551.0121,152.915,0.3569,0.3569);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAKAhIgOgfIgIAKIAAAVIgLAAIAAhBIALAAIAAAdIAUgdIAPAAIgTAaIAUAng");
	this.shape_67.setTransform(549.7982,151.8442,0.3359,0.3359);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgQAYQgIgIAAgPQAAgLAEgHQADgGAFgFQAFgDAHAAQALAAAHAJQAHAIAAAOQAAAQgIAIQgGAIgLAAQgKAAgGgIgAgJgPQgEAGAAAJQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgFAAgLQAAgLgEgEQgEgFgGgBQgFABgEAFg");
	this.shape_68.setTransform(547.8178,151.7818,0.3569,0.3569);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAKAhIgOgfIgJAKIAAAVIgKAAIAAhBIAKAAIAAAdIAWgdIAOAAIgUAaIAVAng");
	this.shape_69.setTransform(545.9605,151.8442,0.3359,0.3359);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgQAYQgIgIABgPQAAgKACgIQADgGAGgFQAFgDAHAAQAKAAAIAJQAGAIAAAOQABAQgIAIQgGAIgLAAQgKAAgGgIgAgKgPQgDAFAAAKQAAALAEAFQAEAFAFAAQAHAAADgFQAEgGAAgKQAAgKgEgFQgEgFgGgBQgFABgFAFg");
	this.shape_70.setTransform(543.9722,151.7818,0.3569,0.3569);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AALAfIgMgXIgDgDIgFAAIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEABQAEADABAEQADAEAAAFQAAAHgEAFQgEAEgGABIAGAEIAMAXgAgMgEIAIAAIAIAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgIgBIgIAAg");
	this.shape_71.setTransform(542.1252,151.7818,0.3569,0.3569);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgSAfIAAg9IAkAAIAAAKIgaAAIAAAOIAYAAIAAAKIgYAAIAAARIAbAAIAAAKg");
	this.shape_72.setTransform(540.2872,151.7818,0.3569,0.3569);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAQAhIAAgzIgLAyIAAABIgJAAIAAgBIgLgyIAAAzIgKAAIAAhBIAQAAIAJAsIAKgsIAQAAIAABBg");
	this.shape_73.setTransform(538.3102,151.8442,0.3359,0.3359);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgHAGIAOAAIgHgVg");
	this.shape_74.setTransform(535.6921,151.7818,0.3569,0.3569);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAKAfIgTgoIAAAoIgKAAIAAg9IAKAAIATApIAAgpIAKAAIAAA9g");
	this.shape_75.setTransform(533.8362,151.7818,0.3569,0.3569);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgSAfIAAg9IAlAAIAAAKIgbAAIAAAOIAZAAIAAAKIgZAAIAAARIAbAAIAAAKg");
	this.shape_76.setTransform(532.0784,151.7818,0.3569,0.3569);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAKAfIgLgXQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgFAAIgCAAIAAAaIgKAAIAAg9IAWAAQAHAAADABQAFADABAEQACADAAAGQAAAIgDAEQgDADgHACIAGAEIAMAXgAgMgEIAIAAIAIAAIADgDQABgBAAgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIgDgDIgIgBIgIAAg");
	this.shape_77.setTransform(530.3653,151.7818,0.3569,0.3569);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_78.setTransform(528.4112,151.7818,0.3569,0.3569);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_79.setTransform(526.6535,151.7818,0.3569,0.3569);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgFAXIAAgMIALAAIAAAMgAgFgKIAAgMIALAAIAAAMg");
	this.shape_80.setTransform(623.3199,146.8285,0.6134,0.6134);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAMAgIgYgpIAAApIgMAAIAAg/IAMAAIAZAqIAAgqIAMAAIAAA/g");
	this.shape_81.setTransform(620.4064,146.2765,0.6134,0.6134);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AASAgIgGgPIgYAAIgGAPIgNAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
	this.shape_82.setTransform(616.4503,146.2765,0.6134,0.6134);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgGAgIAAg0IgTAAIAAgLIAzAAIAAALIgTAAIAAA0g");
	this.shape_83.setTransform(613.2148,146.2765,0.6134,0.6134);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AASAgIgGgPIgYAAIgFAPIgOAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
	this.shape_84.setTransform(609.9487,146.2765,0.6134,0.6134);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgOAdQgHgEgEgIQgEgIAAgJQAAgJAFgIQADgIAIgEQAHgDAIAAQALAAAHAFQAIAFABAJIgMACQgCgFgDgCQgEgDgGAAQgHAAgGAFQgEAFAAALQAAALAEAFQAGAGAHAAQAFAAADgCIAHgDIAAgJIgPAAIAAgJIAcAAIAAAYQgEAEgHADQgIADgJAAQgJAAgHgEg");
	this.shape_85.setTransform(605.7932,146.2765,0.6134,0.6134);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAMAgIgZgpIAAApIgMAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_86.setTransform(601.7144,146.2765,0.6134,0.6134);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_87.setTransform(598.9849,146.2765,0.6134,0.6134);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AANAgIgPgXIgEgDIgJgBIAAAbIgNAAIAAg/IAbAAQAIAAAGACQAFABADAFQADAEAAAGQAAAHgFAFQgEADgIACIAHAFIAPAXgAgPgEIAUgBIAEgCQABgCAAgDQAAgEgCgBQgBgDgDAAIgJAAIgKAAg");
	this.shape_88.setTransform(596.4242,146.2765,0.6134,0.6134);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgXAgIAAg/IAuAAIAAALIgiAAIAAAOIAgAAIAAAKIggAAIAAARIAjAAIAAALg");
	this.shape_89.setTransform(592.4834,146.2765,0.6134,0.6134);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgXAgIAAg/IAUAAIAPABQAFABAEAFQAEAEgBAJQAAAGgBAEQgDACgDADQgCACgEABIgNABIgJAAIAAAYgAgLgCIAIAAQAHAAABgBQADgBACgCIABgFQAAgEgCgCQgBgCgEgBIgIAAIgHAAg");
	this.shape_90.setTransform(588.8339,146.2765,0.6134,0.6134);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgqArQgSgSAAgZQAAgYASgRQASgSAYAAQAZAAASASQARARABAYQgBAZgRASQgSARgZAAQgYAAgSgRgAglglQgQAQAAAVQAAAWAQAQQAQAQAVAAQAWAAAQgQQAQgQAAgWQAAgVgQgQQgQgQgWAAQgVAAgQAQg");
	this.shape_91.setTransform(749.4,149.225);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgCANIAAgJIgKAAIAAgGIAKAAIAAgKIAFAAIAAAKIAKAAIAAAGIgKAAIAAAJg");
	this.shape_92.setTransform(752.175,148.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgIAQQgEgDAAgFQABgDABgDQACgCADgBQgDgBgBgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAgEADgCQADgEAFAAQAFAAADAEQADACAAAEIgBAFQgBADgDAAQADABACACQACACAAADQgBAGgDADQgEAEgFAAQgDAAgFgEgAgDADIgBAEIABAFIADACQABgBAAAAQABAAAAAAQABAAAAAAQAAgBABAAQABgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAgAgDgMIAAAEIAAADQABAAAAABQAAAAABAAQAAAAABAAQAAAAAAABQABgBAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgDgBIgDABg");
	this.shape_93.setTransform(749.15,148.95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AADA3IAAhOQgLALgPAFIAAgTQAIgDAKgIQAIgHAEgKIARAAIAABtg");
	this.shape_94.setTransform(746.005,148.9148,0.3437,0.3437);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#040202").s().p("A4/FoIAArPMAx/AAAIAALPg");
	this.shape_95.setTransform(581.5352,186.6993,1.5455,1.2694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(334.3,141,494.49999999999994,91.4);


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
	this.instance.setTransform(257.15,-123.55,0.5448,0.5448,0,0,0,0,-4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({startPosition:0},8).to({regX:0.2,regY:-4.2,scaleX:0.3824,scaleY:0.3824,x:250.4,y:-122.75},4).to({regX:0,regY:-4,scaleX:0.5448,scaleY:0.5448,x:257.15,y:-123.55},4).wait(43));

	// Layer_29
	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.setTransform(222.9,-125.55,0.5636,0.5636,0,0,0,0.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({_off:false},0).to({startPosition:0},7).wait(11).to({startPosition:0},0).to({scaleX:0.4538,scaleY:0.4538},4).to({scaleX:0.5636,scaleY:0.5636},4).wait(43));

	// Layer_28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_200 = new cjs.Graphics().p("AxaCYIAAkvMAi1AAAIAAEvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(200).to({graphics:mask_graphics_200,x:137.75,y:-125.6}).wait(78));

	// Layer_27
	this.instance_2 = new lib.Tween17("synched",0);
	this.instance_2.setTransform(121.95,-94.55,0.4711,0.4711);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).to({y:-126.55},9).wait(69));

	// Layer_1
	this.instance_3 = new lib.Tween19("synched",0);
	this.instance_3.setTransform(230.5,189);

	this.instance_4 = new lib.Tween18("synched",0);
	this.instance_4.setTransform(169,176.5);

	this.instance_5 = new lib.Tween17("synched",0);
	this.instance_5.setTransform(173.5,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(277));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-140.6,303,346.6);


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
	var mask_graphics_128 = new cjs.Graphics().p("AkuD3IMKgsIAJCqIsJAsg");
	var mask_graphics_129 = new cjs.Graphics().p("AkIDzIMegtIAJCuIsdAtg");
	var mask_graphics_130 = new cjs.Graphics().p("AjiDuIMyguIAKCzIsyAug");
	var mask_graphics_131 = new cjs.Graphics().p("Ai7DqINFgvIAKC3ItFAvg");
	var mask_graphics_132 = new cjs.Graphics().p("AiVDmINZgxIALC8ItaAwg");
	var mask_graphics_133 = new cjs.Graphics().p("AhvDiINtgyIALDAIttAxg");
	var mask_graphics_134 = new cjs.Graphics().p("AhJDdIOBgyIAMDEIuCAyg");
	var mask_graphics_135 = new cjs.Graphics().p("AgiDZIOVg0IALDIIuVA0g");
	var mask_graphics_136 = new cjs.Graphics().p("AACDUIOqg1IAMDNIuqA1g");
	var mask_graphics_180 = new cjs.Graphics().p("AACDUIOqg1IAMDNIuqA1g");
	var mask_graphics_181 = new cjs.Graphics().p("AgHDUIOpg1IAMDNIuqA1g");
	var mask_graphics_182 = new cjs.Graphics().p("AgRDUIOpg1IAMDNIupA1g");
	var mask_graphics_183 = new cjs.Graphics().p("AgbDUIOpg1IAMDNIupA1g");
	var mask_graphics_184 = new cjs.Graphics().p("AglDUIOpg1IAMDNIupA1g");
	var mask_graphics_185 = new cjs.Graphics().p("AgvDUIOpg1IAMDNIupA1g");
	var mask_graphics_186 = new cjs.Graphics().p("Ag5DUIOpg1IAMDNIupA1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_graphics_128,x:48.5088,y:41.7}).wait(1).to({graphics:mask_graphics_129,x:54.3491,y:41.7058}).wait(1).to({graphics:mask_graphics_130,x:60.1894,y:41.7117}).wait(1).to({graphics:mask_graphics_131,x:66.0297,y:41.7175}).wait(1).to({graphics:mask_graphics_132,x:71.87,y:41.7233}).wait(1).to({graphics:mask_graphics_133,x:77.7103,y:41.7292}).wait(1).to({graphics:mask_graphics_134,x:83.5506,y:41.735}).wait(1).to({graphics:mask_graphics_135,x:89.3909,y:41.7409}).wait(1).to({graphics:mask_graphics_136,x:95.1671,y:41.6698}).wait(44).to({graphics:mask_graphics_180,x:95.1671,y:41.6698}).wait(1).to({graphics:mask_graphics_181,x:94.1671,y:41.6698}).wait(1).to({graphics:mask_graphics_182,x:93.1671,y:41.6698}).wait(1).to({graphics:mask_graphics_183,x:92.1671,y:41.6698}).wait(1).to({graphics:mask_graphics_184,x:91.1671,y:41.6698}).wait(1).to({graphics:mask_graphics_185,x:90.1671,y:41.6698}).wait(1).to({graphics:mask_graphics_186,x:89.1671,y:41.6698}).wait(1).to({graphics:null,x:0,y:0}).wait(91));

	// Layer_14
	this.instance = new lib.txt_reward();
	this.instance.setTransform(97,60,0.3641,0.3641);

	this.instance_1 = new lib.Tween42("synched",0);
	this.instance_1.setTransform(138.5,69.45);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},128).to({state:[{t:this.instance_1}]},52).to({state:[{t:this.instance_1}]},6).to({state:[]},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({x:131.9,alpha:0},6).to({_off:true},1).wait(91));

	// Layer_18 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_119 = new cjs.Graphics().p("AzrE1IAAknMAnqAAAIAAEng");
	var mask_1_graphics_180 = new cjs.Graphics().p("Az1CTIAAkmMAnrAAAIAAEmg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AzwE1IAAknMAnrAAAIAAEng");
	var mask_1_graphics_182 = new cjs.Graphics().p("Az0E1IAAknMAnqAAAIAAEng");
	var mask_1_graphics_183 = new cjs.Graphics().p("Az1E1IAAknMAnrAAAIAAEng");
	var mask_1_graphics_184 = new cjs.Graphics().p("Az1E1IAAknMAnrAAAIAAEng");
	var mask_1_graphics_185 = new cjs.Graphics().p("Az1E1IAAknMAnrAAAIAAEng");
	var mask_1_graphics_186 = new cjs.Graphics().p("Az1E1IAAknMAnrAAAIAAEng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_1_graphics_119,x:127.9,y:30.925}).wait(61).to({graphics:mask_1_graphics_180,x:128.825,y:47.1}).wait(1).to({graphics:mask_1_graphics_181,x:127.4667,y:30.925}).wait(1).to({graphics:mask_1_graphics_182,x:127.0333,y:30.925}).wait(1).to({graphics:mask_1_graphics_183,x:126.225,y:30.925}).wait(1).to({graphics:mask_1_graphics_184,x:125.3583,y:30.925}).wait(1).to({graphics:mask_1_graphics_185,x:124.4917,y:30.925}).wait(1).to({graphics:mask_1_graphics_186,x:123.625,y:30.925}).wait(1).to({graphics:null,x:0,y:0}).wait(91));

	// Layer_16
	this.instance_2 = new lib.text3b();
	this.instance_2.setTransform(172.05,162.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({x:172.35,y:140.85},7).wait(54).to({x:162.75,alpha:0},6).to({_off:true},1).wait(91));

	// Layer_17 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_114 = new cjs.Graphics().p("AyiCTIAAklMAlFAAAIAAElg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AyiCTIAAklMAlFAAAIAAElg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AxODpIAAkmMAlGAAAIAAEmg");
	var mask_2_graphics_182 = new cjs.Graphics().p("AxUDpIAAkmMAlFAAAIAAEmg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AxcDpIAAkmMAlGAAAIAAEmg");
	var mask_2_graphics_184 = new cjs.Graphics().p("AxiDpIAAkmMAlFAAAIAAEmg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AxqDpIAAkmMAlGAAAIAAEmg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AxwDpIAAkmMAlFAAAIAAEmg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(114).to({graphics:mask_2_graphics_114,x:137.075,y:31.9}).wait(66).to({graphics:mask_2_graphics_180,x:137.075,y:31.9}).wait(1).to({graphics:mask_2_graphics_181,x:127.2,y:23.325}).wait(1).to({graphics:mask_2_graphics_182,x:126.5,y:23.325}).wait(1).to({graphics:mask_2_graphics_183,x:125.8,y:23.325}).wait(1).to({graphics:mask_2_graphics_184,x:125.1,y:23.325}).wait(1).to({graphics:mask_2_graphics_185,x:124.4,y:23.325}).wait(1).to({graphics:mask_2_graphics_186,x:123.7,y:23.325}).wait(1).to({graphics:null,x:0,y:0}).wait(91));

	// Layer_13
	this.instance_3 = new lib.text3a();
	this.instance_3.setTransform(174,167.6);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).to({y:148.75},7).wait(59).to({x:163.6,alpha:0},6).to({_off:true},1).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.8,79);


// stage content:
(lib._320x100yakin = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-278.2,-21,1,1,0,0,0,160,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278));

	// logo
	this.instance_1 = new lib.logohead();
	this.instance_1.setTransform(33,7,0.424,0.424);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(278));

	// frame4
	this.instance_2 = new lib.frame4();
	this.instance_2.setTransform(136.7,321.4,1,1,0,0,0,173.5,147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(278));

	// Layer_24
	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.setTransform(376.95,29.1,0.3182,0.3182,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(190).to({_off:false},0).to({x:291.95},17).wait(71));

	// Layer_21
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(36.25,-74.6,0.8713,0.8713,0,0,0,79.2,75.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(183).to({_off:false},0).wait(1).to({regX:94.1,regY:74.9,scaleX:0.8812,scaleY:0.8812,x:59.9,y:-58.6},0).wait(1).to({scaleX:0.8911,scaleY:0.8911,x:72.15,y:-44.7},0).wait(1).to({scaleX:0.901,scaleY:0.901,x:85.25,y:-32.45},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,x:98.9,y:-21.4},0).wait(1).to({scaleX:0.9208,scaleY:0.9208,x:113.05,y:-11.45},0).wait(1).to({scaleX:0.9307,scaleY:0.9307,x:127.35,y:-2.25},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:141.8,y:6.2},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,x:156.35,y:13.9},0).wait(1).to({scaleX:0.9604,scaleY:0.9604,x:170.9,y:21},0).wait(1).to({scaleX:0.9703,scaleY:0.9703,x:185.4,y:27.4},0).wait(1).to({scaleX:0.9802,scaleY:0.9802,x:199.75,y:33.15},0).wait(1).to({scaleX:0.9901,scaleY:0.9901,x:213.9,y:38.2},0).wait(1).to({scaleX:1,scaleY:1,x:227.9,y:42.6},0).wait(1).to({x:242.7,y:45.15},0).wait(1).to({x:258.15,y:47.35},0).wait(1).to({x:269.25,y:50.05,alpha:0.8},0).wait(1).to({x:274.6,y:51.6,alpha:0.6},0).wait(1).to({x:277.2,y:52.3,alpha:0.4},0).wait(1).to({x:281.65,y:52.7,alpha:0.2},0).wait(1).to({x:296.95,y:53.65,alpha:0},0).wait(75));

	// Layer_26 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_183 = new cjs.Graphics().p("AqaiaIC6nmIR7G4Ii6Hlg");
	var mask_graphics_184 = new cjs.Graphics().p("Aqjh3IC9nyISKHCIi9Hxg");
	var mask_graphics_185 = new cjs.Graphics().p("AqshUIC/n/ISaHOIi/H9g");
	var mask_graphics_186 = new cjs.Graphics().p("Aq1gyIDCoKISpHYIjCIJg");
	var mask_graphics_187 = new cjs.Graphics().p("Aq8gPIDFoWIS4HjIjEIVg");
	var mask_graphics_188 = new cjs.Graphics().p("AqTATIDGoiITIHuIjHIig");
	var mask_graphics_189 = new cjs.Graphics().p("AprAbIDJouITXH5IjJIug");
	var mask_graphics_190 = new cjs.Graphics().p("ApDAbIDLo5ITnIEIjMI5g");
	var mask_graphics_191 = new cjs.Graphics().p("AobAcIDOpGIT2IPIjOJGg");
	var mask_graphics_192 = new cjs.Graphics().p("AnzAdIDRpSIUFIZIjRJSg");
	var mask_graphics_193 = new cjs.Graphics().p("AnLAdIDTpeIUVIlIjTJeg");
	var mask_graphics_194 = new cjs.Graphics().p("AmjAeIDWpqIUkIvIjWJqg");
	var mask_graphics_195 = new cjs.Graphics().p("Al7AeIDZp2IUzI7IjYJ2g");
	var mask_graphics_196 = new cjs.Graphics().p("AlSAfIDaqCIVDJFIjbKCg");
	var mask_graphics_197 = new cjs.Graphics().p("AkqAgIDdqPIVSJQIjdKPg");
	var mask_graphics_198 = new cjs.Graphics().p("AkCAgIDfqaIViJbIjgKag");
	var mask_graphics_199 = new cjs.Graphics().p("AjaAhIDhqnIVyJmIjiKng");
	var mask_graphics_200 = new cjs.Graphics().p("AiyAhIDkqzIWBJyIjkKzg");
	var mask_graphics_201 = new cjs.Graphics().p("AiKAiIDmq/IWRJ8IjnK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(183).to({graphics:mask_graphics_183,x:27.8091,y:-64.0653}).wait(1).to({graphics:mask_graphics_184,x:38.5213,y:-61.8086}).wait(1).to({graphics:mask_graphics_185,x:49.2334,y:-59.552}).wait(1).to({graphics:mask_graphics_186,x:59.9456,y:-57.2954}).wait(1).to({graphics:mask_graphics_187,x:70.4565,y:-55.0388}).wait(1).to({graphics:mask_graphics_188,x:76.2605,y:-52.7821}).wait(1).to({graphics:mask_graphics_189,x:82.0644,y:-47.876}).wait(1).to({graphics:mask_graphics_190,x:87.8684,y:-42.2104}).wait(1).to({graphics:mask_graphics_191,x:93.6724,y:-36.5448}).wait(1).to({graphics:mask_graphics_192,x:99.4764,y:-30.8792}).wait(1).to({graphics:mask_graphics_193,x:105.2804,y:-25.2136}).wait(1).to({graphics:mask_graphics_194,x:111.0843,y:-19.548}).wait(1).to({graphics:mask_graphics_195,x:116.8883,y:-13.8824}).wait(1).to({graphics:mask_graphics_196,x:122.6923,y:-8.2168}).wait(1).to({graphics:mask_graphics_197,x:128.4963,y:-2.5512}).wait(1).to({graphics:mask_graphics_198,x:134.3003,y:3.1144}).wait(1).to({graphics:mask_graphics_199,x:140.1042,y:8.78}).wait(1).to({graphics:mask_graphics_200,x:145.9082,y:14.4456}).wait(1).to({graphics:mask_graphics_201,x:151.7122,y:20.1111}).wait(77));

	// Layer_22
	this.instance_5 = new lib.Tween10("synched",0);
	this.instance_5.setTransform(265,17,0.4337,0.4337,-16.1625,0,0,1.1,1.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(183).to({_off:false},0).to({regY:1.4,rotation:-4.4533,x:209.4,y:5.15},24).wait(71));

	// Layer_23
	this.instance_6 = new lib.Tween11("synched",0);
	this.instance_6.setTransform(370.7,64,0.3693,0.3693);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(190).to({_off:false},0).to({x:287.05},17).wait(71));

	// Layer_10
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(268.55,39,0.3371,0.3371,0,0,0,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).to({x:299.75},16).wait(110).to({x:282.55},0).to({x:273.55,alpha:0},6).to({_off:true},1).wait(81));

	// Layer_11
	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.setTransform(269.55,39.55,0.3313,0.3313,0,0,0,0.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({_off:false},0).to({x:267.8},14).wait(110).to({x:248.8},0).to({x:243.2,alpha:0},6).to({_off:true},1).wait(81));

	// Layer_12
	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.setTransform(262.65,23.85,0.1883,0.1883);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(68).to({_off:false},0).to({x:226.6},12).wait(110).to({x:205.9},0).to({x:198.9,alpha:0},6).to({_off:true},1).wait(81));

	// Layer_20
	this.instance_10 = new lib.txt_syarat_ketentuanberlaku_();
	this.instance_10.setTransform(243,76,0.4801,0.4801);

	this.instance_11 = new lib.Tween43("synched",0);
	this.instance_11.setTransform(276.85,78.65);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},121).to({state:[{t:this.instance_11}]},69).to({state:[{t:this.instance_11}]},6).to({state:[]},1).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(190).to({_off:false},0).to({x:271.6,alpha:0},6).to({_off:true},1).wait(81));

	// frame3
	this.instance_12 = new lib.frame3();
	this.instance_12.setTransform(11,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(278));

	// Layer_19
	this.instance_13 = new lib.txt_PEROKOKDEWASA18();
	this.instance_13.setTransform(264,75,0.4924,0.4924);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(63).to({_off:false},0).to({_off:true},58).wait(157));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_50 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A6oDIIAAmPMA1RAAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_1_graphics_50,x:164.6,y:44.7}).wait(61).to({graphics:mask_1_graphics_111,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_112,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_113,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_114,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_115,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_116,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_117,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_118,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_119,x:164.5997,y:44.6998}).wait(1).to({graphics:mask_1_graphics_120,x:164.5997,y:44.6998}).wait(1).to({graphics:null,x:0,y:0}).wait(157));

	// text2b
	this.instance_14 = new lib.text2b();
	this.instance_14.setTransform(125.8,70.25,0.9603,0.9603,0,0,0,-36.8,-92.2);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({y:53},13).wait(48).to({alpha:0},9).to({_off:true},1).wait(157));

	// Layer_8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_45 = new cjs.Graphics().p("A7zC+IAAl7MA3nAAAIAAF7g");
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

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_2_graphics_45,x:158.85,y:24.5}).wait(66).to({graphics:mask_2_graphics_111,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_112,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_113,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_114,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_115,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_116,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_117,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_118,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_119,x:158.85,y:24.4998}).wait(1).to({graphics:mask_2_graphics_120,x:158.85,y:24.4998}).wait(1).to({graphics:null,x:0,y:0}).wait(157));

	// text2a
	this.instance_15 = new lib.text2a();
	this.instance_15.setTransform(132.55,53.65,0.9591,0.9591,0,0,0,-31.9,-127.3);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45).to({_off:false},0).to({y:38.65},13,cjs.Ease.sineOut).wait(53).to({alpha:0},9).to({_off:true},1).wait(157));

	// text1
	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.setTransform(167.45,5.25,1.7921,1.7921,0,0,0,145,-49.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({_off:false},0).to({regX:143.6,regY:-51.8,scaleX:0.4208,scaleY:0.4208,x:168.4,y:38.4,alpha:1},4,cjs.Ease.sineOut).to({regX:143.7,regY:-51.6,scaleX:0.478,scaleY:0.478,y:38.45},1,cjs.Ease.sineOut).to({regX:143.8,regY:-51.8,scaleX:0.4338,scaleY:0.4338,y:38.4},1,cjs.Ease.sineOut).to({_off:true},37).wait(233));

	// bg
	this.instance_17 = new lib.BG();
	this.instance_17.setTransform(0,0,0.4798,0.4808);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(278));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-62.4,553.4,442.29999999999995);
// library properties:
lib.properties = {
	id: 'D5623009D360A24C896175AC6EDD28FC',
	width: 320,
	height: 100,
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