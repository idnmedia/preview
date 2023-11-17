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



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,181);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bg1b = function() {
	this.initialize(img.bg1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bg2b = function() {
	this.initialize(img.bg2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bm = function() {
	this.initialize(img.bm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,750);


(lib.BukanMain03 = function() {
	this.initialize(img.BukanMain03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.BukanMain04 = function() {
	this.initialize(img.BukanMain04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.BukanMain05 = function() {
	this.initialize(img.BukanMain05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.BukanMain07 = function() {
	this.initialize(img.BukanMain07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.BukanMain08 = function() {
	this.initialize(img.BukanMain08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.BukanMain09 = function() {
	this.initialize(img.BukanMain09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.BukanMain11 = function() {
	this.initialize(img.BukanMain11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.BukanMain13 = function() {
	this.initialize(img.BukanMain13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.CTAcopy = function() {
	this.initialize(img.CTAcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,908,277);


(lib.item2a = function() {
	this.initialize(img.item2a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item2b = function() {
	this.initialize(img.item2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item2c = function() {
	this.initialize(img.item2c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item2d = function() {
	this.initialize(img.item2d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item3adrum = function() {
	this.initialize(img.item3adrum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,83);


(lib.item3bnada = function() {
	this.initialize(img.item3bnada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,104);


(lib.item3cnada = function() {
	this.initialize(img.item3cnada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,113);


(lib.item3dnada = function() {
	this.initialize(img.item3dnada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,54);


(lib.pop2 = function() {
	this.initialize(img.pop2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.SHAD = function() {
	this.initialize(img.SHAD);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);// helper functions:

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


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg3();
	this.instance.setTransform(-147,-241,0.8614,0.8614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-241,627.1,77.6);


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
	this.instance = new lib.pop2();
	this.instance.setTransform(-160,-240,0.9375,0.9375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,682.5,84.4);


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
	this.instance = new lib.bg2();
	this.instance.setTransform(-158,-192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-192,728.1,90);


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

	// Layer_2
	this.instance = new lib.item3dnada();
	this.instance.setTransform(95,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95,-112,50,54);


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

	// Layer_2
	this.instance = new lib.item3cnada();
	this.instance.setTransform(86,-144,0.488,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86,-144,24.400000000000006,55.2);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.item3bnada();
	this.instance.setTransform(102,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102,-55,51,104);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.item3adrum();
	this.instance.setTransform(-175,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-72,80,83);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg2b();
	this.instance.setTransform(-196,-294,1.225,1.2251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-294,891.8,110.30000000000001);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJPA9QgIgFgEgKQgDgJAAgNIAAgwQAAgNADgJQAEgKAIgFQAIgEAOAAQAOAAAIAEQAIAFAEAKQADAJABANIAAAwQgBANgDAJQgEAKgIAFQgIAGgOgBQgOABgIgGgAJdgtQgDACgCAEIgBAKIAAA6IABAKQACAEADADQACADAGAAQAGAAADgDQACgDABgEIABgKIAAg6IgBgKQgBgEgCgCQgDgDgGAAQgFAAgDADgAFqA+QgJgFgDgJQgFgIAAgNIAUgFQAAAJADAFQAAAGAEADQADADAFAAQAGAAADgDQABgEAAgFQAAgJgDgFQgEgGgGgFIgQgNQgIgGgDgIQgFgHAAgLQAAgPAJgIQAJgJAQABQAJAAAGADQAGACAEAFQADAFACAGIACANIgUAEIgCgKQgBgFgCgDQgCgDgGAAQgFAAgDAEQgCADAAAFQAAAGACAFQADAEAFAEIAQAPQAIAGAFAIQAGAKABANQAAAIgFAIQgEAHgHAEQgIAFgJgBQgMAAgHgEgAgSA+QgIgFgFgJQgEgIAAgNIAUgFQABAJABAFQABAGAEADQADADAFAAQAFAAADgDQACgEAAgFQgBgJgDgFQgEgGgGgFIgQgNQgGgGgFgIQgEgHAAgLQAAgPAJgIQAJgJAPABQAJAAAGADQAGACADAFQAEAFACAGIACANIgUAEIgBgKQgBgFgDgDQgCgDgFAAQgFAAgDAEQgCADgBAFQABAGACAFQACAEAGAEIAPAPQAIAGAGAIQAFAKAAANQAAAIgDAIQgFAHgHAEQgHAFgKgBQgLAAgHgEgAndA9QgIgGgEgJQgDgKAAgOIAAhWIAYAAIAABaIAAALQABAFADADQADADAGAAQAGAAADgDQACgDABgFIACgLIAAhaIAWAAIAABWQAAAOgCAKQgEAJgIAGQgIAGgOgBQgPABgHgGgAr6A9QgIgGgDgJQgDgKAAgOIAAhWIAXAAIAABaIAAALQABAFADADQAEADAFAAQAHAAACgDQADgDABgFIABgLIAAhaIAXAAIAABWQAAAOgDAKQgEAJgHAGQgIAGgPgBQgOABgIgGgAMcBAIAAiAIAYAAIAACAgALDBAIAAiAIAfAAQAPAAAJAEQAJAEAEAKQADAIAAAOIAAAuQAAAOgDAKQgEAJgJAFQgJAEgOAAgALbAwIAHAAQAIAAADgDQAEgDAAgFIACgNIAAgyIgCgMQgBgFgDgCQgEgCgHAAIgHAAgAH+BAIAAiAIAYAAIAABwIAgAAIAAAQgAGsBAIAAiAIAYAAIAACAgAE6BAIgFgdIgYAAIgEAdIgXAAIAaiAIAZAAIAaCAgAEgATIASAAIgJg1gADhBAIgQg7IgKAAIAAA7IgYAAIAAiAIAfAAQANAAAJADQAJADAFAHQAEAIAAANQABAIgCAGQgCAGgDAFQgDAEgHABIASBAgADHgIIAHAAQAHAAAEgCQAEgCABgFQADgFAAgGQAAgKgEgFQgEgFgKAAIgIAAgACDBAIAAiAIAYAAIAACAgAAvBAIAAiAIAlAAQAMAAAHAEQAIAEADAJQADAIABAMQgBANgEAHQgEAHgIADQgHAEgLAAIgNAAIAAA5gABGgIIAJAAQAGAAAEgCQAEgCABgFQABgEAAgGQAAgIgBgEQgBgEgDgCQgEgCgHAAIgJAAgAhDBAIgfhMIAABMIgVAAIAAiAIARAAIAfBJIAAhJIAUAAIAACAgAiiBAIAAiAIAXAAIAACAgAjtBAIgfhMIAABMIgUAAIAAiAIAQAAIAfBJIAAhJIAUAAIAACAgAlMBAIAAiAIAXAAIAACAgAmQBAIAAiAIAYAAIAABwIAfAAIAAAQgAo/BAIAAiAIAmAAQALAAAIAEQAHAEADAJQAEAIAAAMQAAANgFAHQgEAHgHADQgIAEgKAAIgOAAIAAA5gAoogIIAJAAQAHAAADgCQAEgCABgFQACgEAAgGQAAgIgCgEQgBgEgDgCQgDgCgIAAIgJAAgApkBAIgChZIgTBZIgOAAIgShZIgDBZIgRAAIACiAIAYAAIATBZIAUhZIAXAAIADCAgAspBAIgWg6IgFAKIAAAwIgYAAIAAiAIAYAAIAAA5IAZg5IAWAAIgYA6IAbBGgANIA1IAAgWIAVAAIAAAWgANIAAIAAgWIAVAAIAAAWg");
	this.shape.setTransform(3.35,-3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-10.3,172.2,13.3);


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
	this.instance = new lib.CTAcopy();
	this.instance.setTransform(-82,-4,0.2064,0.2064);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-4,187.5,57.2);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.item2d();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.item2c();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.item2b();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.item2a();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg1b();
	this.instance.setTransform(-196,-294,1.225,1.2251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-294,891.8,110.30000000000001);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg1();
	this.instance.setTransform(-160,-240,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,485.4,60);


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
	this.instance = new lib.SHAD();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AToBrQgOgLAAgaIABgSIACgPIAnAAIgBAFIAAAEQAAANADAFQADAFAJAAQAJAAADgFQADgEAAgOQAAgIgDgFQgDgFgGgEIgLgHIgNgFIgLgGQgGgDgFgEQgJgHgCgOQgCgOAAgXQAAgQADgLQACgLAHgHQAGgGALgDQAKgEARAAQAQABAKACQAKACAHAGQAGAGADAJQADAKAAAPIAAAOIgCAKIgnAAIAAgEIAAgGQAAgLgCgDQgDgFgJAAQgJAAgCAFQgCADAAALQAAAKACAEQADAEAFAEIANAGIALAFIAJAEIAJAFIAJAIQAEADACAGQACAHABAKIABAXQAAAVgCANQgDANgHAJQgHAHgLAEQgMAEgRgBQgcAAgNgKgAKNBrQgNgLAAgaIAAgSIACgPIAoAAIgBAFIAAAEQAAANADAFQACAFAJAAQAJAAADgFQADgEAAgOQAAgIgDgFQgCgFgGgEIgMgHIgMgFIgMgGQgGgDgEgEQgKgHgBgOQgCgOAAgXQAAgQACgLQADgLAGgHQAGgGALgDQALgEARAAQAPABAKACQALACAGAGQAHAGADAJQADAKAAAPIgBAOIgCAKIgnAAIABgEIAAgGQAAgLgDgDQgDgFgIAAQgJAAgCAFQgDADAAALQAAAKADAEQACAEAGAEIAMAGIALAFIAKAEIAJAFIAIAIQAEADACAGQADAHABAKIABAXQAAAVgDANQgDANgHAJQgGAHgMAEQgLAEgRgBQgdAAgNgKgAg9ByQgMgDgGgKIgEgIIgEgLIgCgPIgBgYIAAibIAxAAIAACbIAAANIACAHQACACACABIAHABIAHgBQADgBACgCQABgCAAgFIABgNIAAibIAuAAIAACbIgBAYIgDAPIgDALIgEAIIgHAIQgEADgGACQgFACgIAAIgTABQgWABgLgEgAoWByQgLgDgGgKIgFgIIgDgLIgCgPIgBgYIAAibIAwAAIAACbIABANIABAHQACACADABIAHABIAHgBQADgBABgCQACgCAAgFIAAgNIAAibIAvAAIAACbIgBAYIgCAPIgDALIgFAIIgHAIQgEADgGACQgGACgIAAIgTABQgVABgMgEgAtzBrQgNgLAAgaIAAgSIACgPIAoAAIgBAFIAAAEQAAANADAFQACAFAJAAQAJAAADgFQADgEAAgOQAAgIgDgFQgCgFgGgEIgMgHIgMgFIgMgGQgGgDgEgEQgKgHgBgOQgCgOAAgXQAAgQACgLQADgLAGgHQAGgGALgDQALgEARAAQAPABAKACQALACAGAGQAHAGADAJQADAKAAAPIgBAOIgCAKIgnAAIABgEIAAgGQAAgLgDgDQgDgFgIAAQgJAAgCAFQgDADAAALQAAAKADAEQACAEAGAEIAMAGIALAFIAKAEIAJAFIAIAIQAEADACAGQADAHABAKIABAXQAAAVgDANQgDANgHAJQgGAHgMAEQgLAEgRgBQgdAAgNgKgAVdByIAAjiIAwAAIAADigAShByIgEg1IgXAAIgEA1IgvAAIAYjiIBPAAIAXDigASIAPIATAAIgIhQIgEAAgAQZByIgBgHIgCgJIgCgSIgEgfIgCgNIgCgHIgDgDIgEgBIgHAAIAABZIgvAAIAAjiIBFAAQAPgBAKAEQAKAEAGAGQAFAIADALQACAMAAAQIgBAdQgCAJgCAGQgCAGgEACIgJAFIAAACIAEADIAEAGQACAFADAMQACALACATIADAXIACANIABAIIACAFIAAACgAP+gRIANAAQAHABADgGQACgFAAgRQAAgMgDgGQgDgEgHAAIgMAAgAOKByIAAjiIAwAAIAADigAMCByIAAjiIBEAAQAPAAAKADQAKAEAGAKQAGAJACAOQACAQAAAVQAAAXgCAOQgCAPgGAKQgGAJgKAFQgKAEgPAAIgVAAIAABFgAMxgBIANAAQAGAAADgHQADgIAAgUQAAgSgDgFQgEgGgHAAIgLAAgAJYByIg2h5IgCAAIAAB5IgqAAIAAjiIAuAAIAgBOIABAAIAAhOIAsAAIAADigAGxByIAAjiIAwAAIAADigAFIByIg2h5IgCAAIAAB5IgqAAIAAjiIAuAAIAgBOIABAAIAAhOIAsAAIAADigAChByIAAjiIAwAAIAADigAAyByIAAjiIAvAAIAACvIAxAAIAAAzgAjeByIAAjiIBEAAQAPAAAKADQAKAEAFAKQAGAJADAOQACAQAAAVQAAAXgCAOQgDAPgGAKQgFAJgKAFQgKAEgPAAIgVAAIAABFgAivgBIAMAAQAHAAACgHQADgIAAgUQAAgSgDgFQgDgGgHAAIgLAAgAkeByIAAiHIgBAAIgjCHIgVAAIgiiHIgCAAIAACHIgrAAIAAjiIBCAAIAWBiIACAAIAXhiIBCAAIABDigApzByIgdhmIgDAAIABAIIAAAIIAABWIgwAAIAAjiIAwAAIAABSIAAAHIgBAFIADAAIAfheIAxAAIAAABIgjBlIAmB6IAAACgAu6ByIgEg1IgXAAIgDA1IgwAAIAZjiIBPAAIAXDigAvTAPIATAAIgIhQIgDAAgAyLByIAAjiIBDAAQAQgBAKAEQAKAEAGAGQAGAIADALQACAMAAAQIAAAVQgBAHgCAFQgCAGgDADIgIAHIAAABIAIAFQAEACACAFQADAFABAKIABAbQAAARgCALQgCAMgGAHQgGAIgKADQgKADgPABgAxcBEIAPAAQAHAAADgFQADgEAAgNQAAgPgCgHQgDgGgHgBIgQAAgAxcgTIAOAAQAHAAACgGQADgFAAgQQAAgNgDgEQgDgFgHABIgNAAgA0CByIAAjiIBkAAIAAAwIg1AAIAAAnIA0AAIAAAtIg0AAIAAArIA1AAIAAAzgA2MByIAAjiIBDAAQAPgBAKAEQAKAEAGAGQAHAIACALQADAMAAAQIgBAVQgBAHgCAFQgCAGgDADIgHAHIAAABIAIAFQADACADAFQACAFACAKIABAbQAAARgDALQgCAMgGAHQgGAIgKADQgJADgQABgA1dBEIAPAAQAGAAAEgFQADgEAAgNQAAgPgDgHQgDgGgGgBIgQAAgA1dgTIANAAQAHAAADgGQACgFAAgQQAAgNgDgEQgDgFgHABIgMAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.1,-11.7,284.29999999999995,23.5);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMhBrQgOgLAAgaIABgSIACgPIAnAAIgBAFIAAAEQAAANADAFQADAFAJAAQAJAAADgFQADgDAAgPQAAgIgDgFQgDgFgGgEIgLgHIgNgFIgLgGQgGgDgFgEQgJgIgCgNQgCgOAAgXQAAgQADgLQACgLAHgHQAGgGALgEQAKgDARAAQAQABAKACQAKACAHAGQAGAGADAJQADAKAAAPIAAAOIgCAKIgnAAIAAgEIAAgGQAAgLgCgDQgDgFgJAAQgJAAgCAFQgCADAAALQAAAKACAEQADAEAFAEIANAGIALAFIAJAEIAJAGIAJAHQAEADACAGQACAHABAKIABAXQAAAUgCAOQgDAOgHAIQgHAHgLAEQgMAEgRgBQgcAAgNgKgAGZByQgMgFgGgKIgFgLIgDgRIgCgcIgBgrIABgrIACgbIADgRIAFgLQADgFAFgEQAEgDAGgCIAOgEIATgBQAVAAAMAFQALAEAGAKIAFALQACAHABAKIADAbIAAArIAAArIgDAcQgBAKgCAHIgFALQgDAFgEADQgEAEgGADIgOACIgTABQgWAAgLgDgAGyhFQgDACgBADIgBAFIgBAKIgBATIAAAdIAAAdIABASIABAKIABAFQABADADABQACACAGAAQAGAAACgCQACgBACgDIABgFIABgKIAAgSIAAgdIAAgdIAAgTIgBgKIgBgFQgCgDgCgCQgCgBgGAAQgGAAgCABgAAWBrQgNgLAAgaIAAgSIACgPIAoAAIgBAFIAAAEQAAANADAFQACAFAJAAQAJAAADgFQADgDAAgPQAAgIgDgFQgCgFgGgEIgMgHIgMgFIgMgGQgGgDgEgEQgKgIgBgNQgCgOAAgXQAAgQACgLQADgLAGgHQAGgGALgEQALgDARAAQAPABAKACQALACAGAGQAHAGADAJQADAKAAAPIgBAOIgCAKIgnAAIABgEIAAgGQAAgLgDgDQgDgFgIAAQgJAAgCAFQgDADAAALQAAAKADAEQACAEAGAEIAMAGIALAFIAKAEIAJAGIAIAHQAEADACAGQADAHABAKIABAXQAAAUgDAOQgDAOgHAIQgGAHgMAEQgLAEgRgBQgdAAgNgKgAmsBrQgNgLAAgaIAAgSIACgPIAoAAIgBAFIAAAEQAAANADAFQACAFAJAAQAJAAADgFQADgDAAgPQAAgIgDgFQgCgFgGgEIgMgHIgMgFIgMgGQgGgDgEgEQgKgIgBgNQgCgOAAgXQAAgQACgLQADgLAGgHQAGgGALgEQALgDARAAQAPABAKACQALACAGAGQAHAGADAJQADAKAAAPIgBAOIgCAKIgnAAIABgEIAAgGQAAgLgDgDQgDgFgIAAQgJAAgCAFQgDADAAALQAAAKADAEQACAEAGAEIAMAGIALAFIAKAEIAJAGIAIAHQAEADACAGQADAHABAKIABAXQAAAUgDAOQgDAOgHAIQgGAHgMAEQgLAEgRgBQgdAAgNgKgAOWByIAAjiIAwAAIAADigALaByIgEg1IgXAAIgEA1IgvAAIAYjiIBPAAIAXDigALBAPIATAAIgIhQIgEAAgAJSByIgBgHIgCgJIgCgSIgEgfIgCgNIgCgHIgDgDIgEgBIgHAAIAABZIgvAAIAAjiIBFAAQAPAAAKADQAKAEAGAGQAFAIADALQACAMAAAQIgBAcQgCAKgCAGQgCAGgEACIgJAFIAAACIAEADIAEAGQACAGADALQACALACATIADAXIACANIABAIIACAFIAAACgAI3gRIANAAQAHABADgGQACgFAAgRQAAgMgDgGQgDgEgHAAIgMAAgAESByIAAjiIAvAAIAACvIAxAAIAAAzgACLByIAAjiIBEAAQAPAAAKADQAKAFAGAIQAGAKACAOQACAQAAAVQAAAXgCAOQgCAPgGAKQgGAJgKAFQgKAEgPAAIgVAAIAABFgAC6gBIANAAQAGAAADgHQADgIAAgUQAAgSgDgGQgEgFgHAAIgLAAgAg1ByIgchnIgDAAIAAAJIAAAIIAABWIgwAAIAAjiIAwAAIAABSIAAAGIAAAGIADAAIAeheIAyAAIAAABIgjBmIAkB5IAAACgAj7ByIAAjiIBkAAIAAAwIg1AAIAAAnIA0AAIAAAtIg0AAIAAArIA1AAIAAAzgAnzByIgEg1IgXAAIgDA1IgwAAIAZjiIBPAAIAXDigAoMAPIATAAIgIhQIgDAAgArEByIAAjiIBDAAQAQAAAKADQAKAEAGAGQAGAIADALQACAMAAAQIAAAVQgBAIgCAFQgCAFgDADIgIAHIAAACIAIADQAEADACAFQADAGABAJIABAbQAAARgCALQgCAMgGAHQgGAIgKADQgKADgPABgAqVBEIAPAAQAHAAADgFQADgEAAgNQAAgPgCgHQgDgGgHgBIgQAAgAqVgTIAOAAQAHAAACgGQADgFAAgQQAAgNgDgEQgDgFgHABIgNAAgAs7ByIAAjiIBkAAIAAAwIg1AAIAAAnIA0AAIAAAtIg0AAIAAArIA1AAIAAAzgAvFByIAAjiIBDAAQAPAAAKADQAKAEAGAGQAHAIACALQADAMAAAQIgBAVQgBAIgCAFQgCAFgDADIgHAHIAAACIAIADQADADADAFQACAGACAJIABAbQAAARgDALQgCAMgGAHQgGAIgKADQgJADgQABgAuWBEIAPAAQAGAAAEgFQADgEAAgNQAAgPgDgHQgDgGgGgBIgQAAgAuWgTIANAAQAHAAADgGQACgFAAgQQAAgNgDgEQgDgFgHABIgMAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.6,-11.7,193.3,23.5);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ah+AyIAAhjID8AAIAABjg");
	mask.setTransform(12.65,8.5);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0907,0.0907);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,3.5,25.3,10), null);


(lib.bm_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_23
	this.instance = new lib.BukanMain03();
	this.instance.setTransform(0,0,1.3333,1.3333);

	this.instance_1 = new lib.BukanMain04();
	this.instance_1.setTransform(0,0,1.3333,1.3333);

	this.instance_2 = new lib.BukanMain05();
	this.instance_2.setTransform(0,0,1.3333,1.3333);

	this.instance_3 = new lib.BukanMain07();
	this.instance_3.setTransform(0,0,1.3333,1.3333);

	this.instance_4 = new lib.BukanMain08();
	this.instance_4.setTransform(0,0,1.3333,1.3333);

	this.instance_5 = new lib.BukanMain09();
	this.instance_5.setTransform(0,0,1.3333,1.3333);

	this.instance_6 = new lib.BukanMain11();
	this.instance_6.setTransform(0,0,1.3333,1.3333);

	this.instance_7 = new lib.BukanMain13();
	this.instance_7.setTransform(0,0,1.3333,1.3333);

	this.instance_8 = new lib.bm();
	this.instance_8.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},121).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(77));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_97 = new cjs.Graphics().p("A3MCvIAAldMAuZAAAIAAFdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_graphics_97,x:155.5,y:50.55}).wait(109));

	// t2
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(155.2,80.55);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).to({y:51.55},8).wait(101));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297.4,68.1);


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AxGCgIAAk/MAiNAAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:113.5,y:20.05}).wait(205));

	// t1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(109.7,51.55);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:23.55},8).wait(197));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.4,36.1);


(lib.item3d = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween18("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2},8).to({x:-1,y:0},9).to({x:0,y:-1},8).to({x:1,y:0},8).to({x:-1},7).to({x:0},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94,-114,52,56);


(lib.item3c = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween17("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1},8).to({x:0,y:-2},8).to({x:-1,y:0},8).to({x:0,y:1},8).to({x:1},8).to({x:0,y:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85,-146,26.400000000000006,58.2);


(lib.item3b = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween16("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1,y:-2},9).to({x:-2,y:0},9).to({x:0,y:1},8).to({x:2,y:0},8).to({x:0,y:-1},7).to({y:0},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,-57,55,107);


(lib.item3a = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween15("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-4},8).to({x:0,y:-2},8).to({y:2},8).to({x:-2,y:0},8).to({y:-2},8).to({x:0,y:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179,-74,84,87);


(lib.item2d_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween9("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2},9).to({x:2},9).to({x:0,y:-2},8).to({x:-1,y:0},8).to({x:0,y:1},7).to({y:0},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,-242,323,484);


(lib.item2c_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween8("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-2},8).to({x:0,y:-2},8).to({x:2,y:0},8).to({x:0,y:1},7).to({x:-1,y:0},7).to({x:0},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-242,324,483);


(lib.item2b_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween7("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2},8).to({x:2,y:0},8).to({x:0,y:2},8).to({x:-1,y:0},7).to({x:0,y:-2},7).to({y:0},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,-242,323,484);


(lib.item2a_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween6("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2,y:-2},8).to({x:-2,y:0},7).to({x:0,y:2},8).to({x:2,y:0},8).to({x:0,y:-2},8).to({y:0},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-242,324,484);


(lib.item1d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// item2d_png
	this.instance = new lib.item2d_1();
	this.instance.setTransform(160,240,0.8529,0.8529);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1},8,cjs.Ease.sineOut).to({_off:true},38).wait(109));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item1c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// item2c_png
	this.instance = new lib.item2c_1();
	this.instance.setTransform(160,240,0.8529,0.8529);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1},8,cjs.Ease.sineOut).to({_off:true},38).wait(109));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// item2b_png
	this.instance = new lib.item2b_1();
	this.instance.setTransform(160,240,0.8529,0.8529);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1},8,cjs.Ease.sineOut).to({_off:true},38).wait(109));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// item2a_png
	this.instance = new lib.item2a_1();
	this.instance.setTransform(160,240,0.8529,0.8529);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1},8,cjs.Ease.sineOut).to({_off:true},38).wait(109));

	// Layer_1
	this.instance_1 = new lib.item2a_1();
	this.instance_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(197));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_21
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(107.2,357.45,0.9936,0.9936,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).to({alpha:1},9).wait(66));

	// Layer_20
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.setTransform(96.5,376.5,1.7402,1.7402);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(127).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.sineOut).wait(6).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(7).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(6).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,0,326.1,469);


(lib.item3d4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// item3d_png
	this.instance = new lib.item3d();
	this.instance.setTransform(184,240,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305,192.2);


(lib.item3c3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// item3c_png
	this.instance = new lib.item3c();
	this.instance.setTransform(184,240,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275.1,166.7);


(lib.item3b2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// item3b_png
	this.instance = new lib.item3b();
	this.instance.setTransform(184,240,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,313,289);


(lib.item3a1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// item3a_png
	this.instance = new lib.item3a();
	this.instance.setTransform(126,238,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160,y:240},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,0,83.3,251);


// stage content:
(lib._728X90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(16.9,82.95,1,1,0,0,0,12.7,8.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADA").s().p("AgFAeIAEgOIABgQIgBgMIgEgRIAEAAIAGAPQABAGAAAIQAAAIgBAHQgDAIgDAHg");
	this.shape.setTransform(530.9,83.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFADA").s().p("AgHAUQgEgEgBgGIAHgBIACAFQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQACgCAAgFQAAgEgCgCQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgCAAgDACIgFgBIADgXIASAAIAAAIIgMAAIgCAIIAEgBQAFAAADADQADAEAAAHQAAAGgCAFQgEAFgGAAQgEAAgDgDg");
	this.shape_1.setTransform(528.6,83.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFADA").s().p("AgHASQgFgFAAgNQAAgKAFgHQADgFAGAAQADAAADADQAEAEAAAEIgHABQgBgFgDAAQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAABIgCAKIADgDIADgBQAEAAAEAEQADADAAAHQgBAIgDADQgCAEgGAAQgFAAgDgFgAgCABQgBADgBADQAAAEACADQABAAAAABQABAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIABgGQABgFgCgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_2.setTransform(525.6,82.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFADA").s().p("AgIAUQgDgEgBgGIAIgBQAAAEABABQABABAAAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAgBABAAQABAAAAAAQAAgBABAAQABgCAAgFQAAgEgBgCQgBgBAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgCAAgDACIgGgBIAEgXIASAAIAAAIIgNAAIgBAIIAEgBQAFAAADADQAEAEAAAHQAAAFgEAGQgDAFgGAAQgEAAgEgDg");
	this.shape_3.setTransform(522.675,83.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFADA").s().p("AgIASQgDgFAAgNQAAgLADgGQAFgFAEAAQAEAAADADQADADAAAFIgHABQAAgFgEAAQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgCADAAAHQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAIACgBQAFAAADAEQAEADgBAHQABAHgEAEQgEAEgFAAQgEAAgEgFgAgCABQgCADAAADQAAAFACACQAAAAABABQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgEQAAgFgCgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_4.setTransform(519.7,82.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFADA").s().p("AgGAEIAAgHIANAAIAAAHg");
	this.shape_5.setTransform(517.3,83.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFADA").s().p("AgGAXQAAgKADgKQADgKAEgGIgPAAIAAgIIAXAAIAAAGQgDADgDAHQgDAGgBAHQgCAHAAAIg");
	this.shape_6.setTransform(514.9,83);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFADA").s().p("AgGAXQABgLACgJQADgKAEgGIgPAAIAAgIIAXAAIAAAGQgDADgDAHIgFANIgBAPg");
	this.shape_7.setTransform(511.925,83);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFADA").s().p("AABAXIAAggQgDAEgFACIAAgIQACAAAEgDQACgDABgFIAGAAIAAAtg");
	this.shape_8.setTransform(508.775,82.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFADA").s().p("AgGAEIAAgHIANAAIAAAHg");
	this.shape_9.setTransform(506.6,83.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFADA").s().p("AgIASQgDgFAAgNQAAgLADgGQAEgFAEAAQAFAAAEAFQADAFAAAMQAAANgDAFQgEAFgFAAQgFAAgDgFgAgDgMQgBACAAAKQAAAMABABQABABAAABQABAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAgBIABgNIgBgMQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBABg");
	this.shape_10.setTransform(504.2,82.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFADA").s().p("AgIASQgDgGAAgMQAAgLADgGQAEgFAEAAQAGAAADAFQADAFAAAMQAAANgDAFQgDAFgGAAQgEAAgEgFgAgCgMQgCADAAAJQAAALACACQAAABABABQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAgBQACgDAAgKQAAgJgCgDQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABg");
	this.shape_11.setTransform(501.225,82.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFADA").s().p("AgIAUQgDgEAAgGQAAgFABgCQACgDADgBQgDgCgBgCQgBgCAAgDQAAgGADgDQADgDAEAAQAFAAADADQADAEAAAFQAAADgBACIgEAEIAFADQABADAAAEQAAAFgBADQgCADgDACQgCABgEAAQgEAAgEgDgAgDAEQgBABAAAEQAAAEABABQABABAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQABgBAAgEQAAgEgBgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABgAgCgOQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAIACACQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgEIgBgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_12.setTransform(498.275,82.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFADA").s().p("AgHASQgEgFAAgNQAAgMAEgFQADgFAEAAQAFAAAEAFQADAGAAALQAAANgDAFQgDAFgGAAQgEAAgDgFgAgDgMIgBAMQAAAKABADQABABAAABQABAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAgBQABgCAAgLQAAgKgBgCQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBABg");
	this.shape_13.setTransform(495.3,82.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFADA").s().p("AABAeQgCgHgCgIQgCgHAAgIQAAgIACgGQACgIACgHIAFAAIgFARIgBAMIACAQIAEAOg");
	this.shape_14.setTransform(493,83.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgGAIIAAAOIgIAAIAAgtIAIAAIAAAUIAOgUIAKAAIgOASIAPAbg");
	this.shape_15.setTransform(488.8,82.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFADA").s().p("AgMASQgFgHAAgKQAAgJACgEQADgFADgDQAFgCAEgBQAIAAAFAHQAFAFAAALQAAAMgFAGQgFAGgIgBQgHABgFgGgAgGgLQgEAFAAAGQAAAIAEAEQADAEADAAQAEAAADgEQAEgDAAgJQAAgHgEgEQgDgDgEAAQgDAAgDADg");
	this.shape_16.setTransform(484.65,82.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgHAIIAAAOIgHAAIAAgtIAHAAIAAAUIAPgUIAKAAIgOASIAPAbg");
	this.shape_17.setTransform(480.85,82.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFADA").s().p("AgMASQgFgHAAgKQAAgJACgEQADgFADgDQAEgCAFgBQAIAAAFAHQAFAFAAALQAAAMgFAGQgFAGgIgBQgHABgFgGgAgHgLQgCAFgBAGQABAIACAEQAEAEADAAQAFAAACgEQADgDAAgJQAAgHgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_18.setTransform(476.7,82.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFADA").s().p("AAIAXIgJgRIgCgCIgEAAIgBAAIAAATIgIAAIAAgtIAQAAQAGAAACABQADACABADQACADAAAEQAAAGgDACQgBACgGACIAEADIAJARgAgIgDIALAAIACgCIABgEIgBgDIgCgCIgLAAg");
	this.shape_19.setTransform(472.875,82.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAbAAIAAAIIgUAAIAAAKIASAAIAAAHIgSAAIAAAMIAUAAIAAAIg");
	this.shape_20.setTransform(469.075,82.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFADA").s().p("AALAXIAAgjIgIAjIgGAAIgHgjIAAAjIgHAAIAAgtIALAAIAGAeIAHgeIALAAIAAAtg");
	this.shape_21.setTransform(465.05,82.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFADA").s().p("AgDAXIAAgtIAHAAIAAAtg");
	this.shape_22.setTransform(460.575,82.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFADA").s().p("AgDAXIAAglIgLAAIAAgIIAdAAIAAAIIgMAAIAAAlg");
	this.shape_23.setTransform(458.2,82.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFADA").s().p("AAHAXIgOgdIAAAdIgHAAIAAgtIAHAAIAOAdIAAgdIAIAAIAAAtg");
	this.shape_24.setTransform(454.65,82.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAbAAIAAAIIgUAAIAAAKIASAAIAAAHIgSAAIAAAMIAUAAIAAAIg");
	this.shape_25.setTransform(451.025,82.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFADA").s().p("AAHAXIAAgUIgNAAIAAAUIgIAAIAAgtIAIAAIAAASIANAAIAAgSIAIAAIAAAtg");
	this.shape_26.setTransform(447.275,82.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFADA").s().p("AAIAXIgJgRIgCgCIgEAAIgBAAIAAATIgIAAIAAgtIAQAAQAGAAACABQADACABADQACADAAAEQAAAGgDACQgBACgGACIAEADIAJARgAgIgDIALAAIACgCIABgEIgBgDIgCgCIgLAAg");
	this.shape_27.setTransform(443.625,82.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAbAAIAAAIIgUAAIAAAKIASAAIAAAHIgSAAIAAAMIAUAAIAAAIg");
	this.shape_28.setTransform(439.825,82.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFADA").s().p("AgOgWIAOAAQAGAAACABQACABACADQACADAAAEQAAADgCACQgBADgCABIAFADQABADAAAEQAAAGgCADQgCAEgEAAIgVABgAgHAPIAMgBIACgBIABgEIgBgEIgDgCIgLAAgAgHgEIAKAAIACgCIABgDIgBgDIgBgCIgLAAg");
	this.shape_29.setTransform(436.15,82.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFADA").s().p("AAHAXIgOgdIAAAdIgHAAIAAgtIAIAAIAOAdIAAgdIAHAAIAAAtg");
	this.shape_30.setTransform(430.725,82.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFADA").s().p("AAKAXIgDgLIgOAAIgDALIgIAAIAPgtIAHAAIAPAtgAgEAFIAJAAIgFgQg");
	this.shape_31.setTransform(426.925,82.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFADA").s().p("AAHAXIgOgdIAAAdIgHAAIAAgtIAIAAIAOAdIAAgdIAHAAIAAAtg");
	this.shape_32.setTransform(423.075,82.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFADA").s().p("AAKAXIgDgLIgOAAIgDALIgIAAIAPgtIAHAAIAPAtgAgEAFIAJAAIgFgQg");
	this.shape_33.setTransform(419.275,82.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFADA").s().p("AgCAXIAAgUIgPgZIAJAAIAIASIAJgSIAIAAIgNAaIAAATg");
	this.shape_34.setTransform(416.05,82.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFADA").s().p("AALAXIgDgLIgOAAIgEALIgIAAIAPgtIAHAAIAPAtgAgEAFIAJAAIgFgQg");
	this.shape_35.setTransform(412.825,82.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFADA").s().p("AgMAXIAAgtIAHAAIAAAlIASAAIAAAIg");
	this.shape_36.setTransform(409.425,82.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFADA").s().p("AgDAFIAAgIIAHAAIAAAIg");
	this.shape_37.setTransform(405.425,84.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFADA").s().p("AAHAXIgOgdIAAAdIgHAAIAAgtIAIAAIAOAdIAAgdIAHAAIAAAtg");
	this.shape_38.setTransform(402.725,82.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFADA").s().p("AAKAXIgDgLIgOAAIgDALIgIAAIAPgtIAHAAIAPAtgAgEAFIAJAAIgFgQg");
	this.shape_39.setTransform(398.925,82.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgGAIIAAAOIgIAAIAAgtIAIAAIAAAUIAOgUIAKAAIgOASIAPAbg");
	this.shape_40.setTransform(395.275,82.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFADA").s().p("AgMASQgFgHAAgKQAAgHACgGQACgEAFgEQAEgCAEgBQAIAAAFAHQAFAGAAAKQAAALgFAHQgFAGgIgBQgIABgEgGgAgGgLQgDAFAAAGQAAAIADAEQADAEADAAQAEAAADgEQADgDAAgJQAAgHgCgEQgDgDgFAAQgDAAgDADg");
	this.shape_41.setTransform(391.125,82.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFADA").s().p("AAIAXIgJgRIgCgCIgEAAIgBAAIAAATIgIAAIAAgtIAQAAQAGAAACABIAEAFQACADAAAEQAAAFgDADQgCACgFACIAEADIAJARgAgIgDIALAAIACgCIABgEIgBgDIgCgCIgLAAg");
	this.shape_42.setTransform(387.325,82.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFADA").s().p("AgMASQgFgHAAgKQAAgHACgGQACgEAFgEQAEgCAEgBQAIAAAFAHQAFAGAAAKQAAALgFAHQgFAGgIgBQgIABgEgGgAgGgLQgDAFAAAGQAAAIADAEQADAEADAAQAEAAADgEQADgDAAgJQAAgHgCgEQgDgDgFAAQgDAAgDADg");
	this.shape_43.setTransform(383.175,82.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFADA").s().p("AgHAVQgEgDgDgFQgCgGAAgHQAAgGACgGQADgFAEgDQAFgCADgBQAHABAEADQAFAEAAAGIgHACQgCgEgCgCQgCgBgDAAQgDAAgDADQgDAEAAAHQAAAHADAFQADAEADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIAFgCIAAgGIgIAAIAAgHIAQAAIAAARQgDADgEACQgFACgEAAQgFABgEgDg");
	this.shape_44.setTransform(379,82.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFADA").s().p("AgIAVQgEgEgCgEQgCgGgBgHQABgGACgGQACgEAEgEQAEgCAFgBQAHABADADQAFACABAIIgIACQgBgEgBgCQgCgBgEAAQgEAAgDADQgDAEAAAHQAAAHADAFQAEAEADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBIAEgCIAAgGIgJAAIAAgHIAQAAIAAARIgHAFQgDACgGAAQgEABgFgDg");
	this.shape_45.setTransform(374.9,82.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFADA").s().p("AAHAXIgOgdIAAAdIgHAAIAAgtIAIAAIAOAdIAAgdIAHAAIAAAtg");
	this.shape_46.setTransform(370.925,82.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAbAAIAAAIIgUAAIAAAKIASAAIAAAHIgSAAIAAAMIAUAAIAAAIg");
	this.shape_47.setTransform(367.325,82.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFADA").s().p("AgDAXIAAglIgLAAIAAgIIAdAAIAAAIIgLAAIAAAlg");
	this.shape_48.setTransform(363.875,82.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFADA").s().p("AAIAXIgIgRIgDgCIgEAAIgBAAIAAATIgIAAIAAgtIAQAAQAGAAACABQADACABADQACADAAAEQAAAGgDACQgBACgGACIAEADIAJARgAgIgDIALAAIACgCIABgEIgBgDIgCgCIgLAAg");
	this.shape_49.setTransform(358.975,82.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAbAAIAAAIIgTAAIAAAKIARAAIAAAHIgRAAIAAAMIATAAIAAAIg");
	this.shape_50.setTransform(355.175,82.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgGAIIAAAOIgIAAIAAgtIAIAAIAAAUIAOgUIAKAAIgOASIAPAbg");
	this.shape_51.setTransform(351.625,82.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFADA").s().p("AAHAXIgOgdIAAAdIgHAAIAAgtIAHAAIAPAdIAAgdIAHAAIAAAtg");
	this.shape_52.setTransform(347.625,82.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFADA").s().p("AALAXIgEgLIgOAAIgDALIgIAAIAPgtIAHAAIAPAtgAgEAFIAJAAIgFgQg");
	this.shape_53.setTransform(343.775,82.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgGAIIAAAOIgIAAIAAgtIAIAAIAAAUIAOgUIAKAAIgOASIAPAbg");
	this.shape_54.setTransform(340.15,82.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFADA").s().p("AAKAXIgDgLIgOAAIgDALIgIAAIAPgtIAHAAIAPAtgAgFAFIAKAAIgFgQg");
	this.shape_55.setTransform(334.825,82.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFADA").s().p("AAHAXIgOgdIAAAdIgHAAIAAgtIAHAAIAPAdIAAgdIAHAAIAAAtg");
	this.shape_56.setTransform(330.975,82.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAaAAIAAAIIgTAAIAAAKIASAAIAAAHIgSAAIAAAMIAUAAIAAAIg");
	this.shape_57.setTransform(327.375,82.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgHAIIAAAOIgHAAIAAgtIAHAAIAAAUIAPgUIAKAAIgOASIAPAbg");
	this.shape_58.setTransform(323.8,82.975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFADA").s().p("AAIAXIgJgRIgCgCIgEAAIgBAAIAAATIgIAAIAAgtIAQAAQAGAAACABIAEAFQACACAAAFQAAAFgDADQgCACgFACIAEADIAJARgAgIgDIALAAIACgCIABgEIgBgDIgCgCIgLAAg");
	this.shape_59.setTransform(319.975,82.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAaAAIAAAIIgTAAIAAAKIASAAIAAAHIgSAAIAAAMIAUAAIAAAIg");
	this.shape_60.setTransform(316.175,82.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFADA").s().p("AgDAXIAAglIgLAAIAAgIIAdAAIAAAIIgLAAIAAAlg");
	this.shape_61.setTransform(312.725,82.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFADA").s().p("AALAXIgEgLIgOAAIgDALIgIAAIAPgtIAHAAIAPAtgAgEAFIAJAAIgFgQg");
	this.shape_62.setTransform(307.825,82.975);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFADA").s().p("AgDAXIAAgUIgNgZIAIAAIAIASIAIgSIAJAAIgNAaIAAATg");
	this.shape_63.setTransform(304.65,82.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFADA").s().p("AALAXIgEgLIgOAAIgDALIgIAAIAPgtIAHAAIAPAtgAgEAFIAJAAIgFgQg");
	this.shape_64.setTransform(301.425,82.975);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFADA").s().p("AgOAIIAHgBQABAJAGAAQAEAAACgCQAAAAABgBQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgDIgCgCIgGgCQgFgCgCgBIgEgEIgBgGQAAgEACgCQABgEADgBQADgBAEgBQAHABADADQADADABAIIgIAAQAAgEgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEACIgCACQAAABAAABQAAAAABABQAAAAAAAAQAAAAABABQABABAFACIAIADQACABACADQABACAAAFQAAAFgEAFQgDADgIAAQgNAAgBgPg");
	this.shape_65.setTransform(297.725,82.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFADA").s().p("AgDAGIADgDIAAgDIgCAAIAAgIIAGAAIAAAGIgBAHQgCADgDACg");
	this.shape_66.setTransform(293.675,85.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgGAIIAAAOIgIAAIAAgtIAIAAIAAAUIAOgUIAKAAIgOASIAPAbg");
	this.shape_67.setTransform(291.225,82.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFADA").s().p("AgMASQgFgHAAgKQAAgHACgGQACgFAFgDQAEgCAEgBQAIAAAFAHQAFAGAAAKQAAALgFAHQgFAGgIgBQgIABgEgGgAgHgLQgCAFAAAGQAAAIADAEQADAEADAAQAEAAADgEQADgDAAgJQAAgHgDgEQgCgDgFAAQgEAAgDADg");
	this.shape_68.setTransform(287.075,82.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgGAIIAAAOIgIAAIAAgtIAIAAIAAAUIAOgUIAKAAIgOASIAPAbg");
	this.shape_69.setTransform(283.275,82.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFADA").s().p("AgMASQgFgHAAgKQAAgHACgGQACgFAFgDQAEgCAEgBQAIAAAFAHQAFAGAAAKQAAALgFAHQgFAGgIgBQgIABgEgGgAgHgLQgCAFAAAGQAAAIADAEQADAEADAAQAEAAADgEQADgDAAgJQAAgHgDgEQgCgDgFAAQgEAAgDADg");
	this.shape_70.setTransform(279.125,82.95);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFADA").s().p("AAIAXIgJgRIgCgCIgEAAIgBAAIAAATIgIAAIAAgtIAQAAQAGAAACABIAEAFQACACAAAFQAAAFgDADQgCACgFACIAEADIAJARgAgIgDIALAAIACgCIABgEIgBgDIgCgCIgLAAg");
	this.shape_71.setTransform(275.325,82.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAaAAIAAAIIgTAAIAAAKIASAAIAAAHIgSAAIAAAMIAUAAIAAAIg");
	this.shape_72.setTransform(271.525,82.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFADA").s().p("AALAXIAAgjIgHAjIgHAAIgHgjIAAAjIgHAAIAAgtIALAAIAGAeIAHgeIALAAIAAAtg");
	this.shape_73.setTransform(267.475,82.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFADA").s().p("AALAXIgEgLIgOAAIgDALIgIAAIAPgtIAHAAIAPAtgAgEAFIAJAAIgFgQg");
	this.shape_74.setTransform(262.025,82.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFADA").s().p("AAHAXIgOgdIAAAdIgHAAIAAgtIAIAAIAOAdIAAgdIAHAAIAAAtg");
	this.shape_75.setTransform(258.175,82.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFADA").s().p("AgNAXIAAgtIAbAAIAAAIIgUAAIAAAKIASAAIAAAHIgSAAIAAAMIAUAAIAAAIg");
	this.shape_76.setTransform(254.575,82.975);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFADA").s().p("AAIAXIgJgRIgCgCIgEAAIgBAAIAAATIgIAAIAAgtIAQAAQAGAAACABIAEAFQACACAAAFQAAAFgDADQgCACgFACIAEADIAJARgAgIgDIALAAIACgCIABgEIgBgDIgCgCIgLAAg");
	this.shape_77.setTransform(251.025,82.975);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFADA").s().p("AAKAXIgCgLIgPAAIgCALIgIAAIAOgtIAHAAIAOAtgAgFAFIAKAAIgFgQg");
	this.shape_78.setTransform(247,82.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFADA").s().p("AAHAXIgJgWIgGAIIAAAOIgIAAIAAgtIAIAAIAAAUIAOgUIAKAAIgOASIAPAbg");
	this.shape_79.setTransform(243.375,82.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFADA").s().p("AgDARIAAgJIAHAAIAAAJgAgDgHIAAgJIAHAAIAAAJg");
	this.shape_80.setTransform(237.925,83.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFADA").s().p("AAJAXIgRgdIAAAdIgJAAIAAgtIAJAAIASAeIAAgeIAIAAIAAAtg");
	this.shape_81.setTransform(234.55,82.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFADA").s().p("AANAXIgEgLIgRAAIgEALIgJAAIARgtIAJAAIASAtgAgGAFIAMAAIgGgQg");
	this.shape_82.setTransform(230,82.975);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFADA").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgNAAIAAAlg");
	this.shape_83.setTransform(226.25,82.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFADA").s().p("AANAXIgEgLIgRAAIgEALIgKAAIASgtIAIAAIATAtgAgGAFIAMAAIgGgQg");
	this.shape_84.setTransform(222.525,82.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFADA").s().p("AgJAUQgGgDgCgFQgDgFAAgHQAAgGADgGQADgFAGgDQAEgCAFAAQAJAAAFADQAEAEACAGIgJACQgBgDgDgDQgEgCgDAAQgEAAgEAEQgEAFAAAGQAAAHAEAFQAEAEAEAAIAGgBIAFgDIAAgGIgKAAIAAgHIATAAIAAARQgDADgFACQgFACgGAAQgGAAgFgDg");
	this.shape_85.setTransform(217.725,82.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFADA").s().p("AAJAXIgSgdIAAAdIgIAAIAAgtIAJAAIARAeIAAgeIAJAAIAAAtg");
	this.shape_86.setTransform(213,82.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFADA").s().p("AgEAXIAAgtIAIAAIAAAtg");
	this.shape_87.setTransform(209.9,82.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFADA").s().p("AAJAXIgKgRIgDgCIgEAAIgCAAIAAATIgJAAIAAgtIATAAQAGAAADACQADAAADAEQACADAAAEQAAAFgDAEQgEACgFABIAFADIAKARgAgKgCIAHAAIAHgBIACgCIABgDIgBgEIgDgCIgNAAg");
	this.shape_88.setTransform(206.925,82.975);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFADA").s().p("AgQAXIAAgtIAgAAIAAAIIgXAAIAAAKIAWAAIAAAHIgWAAIAAAMIAYAAIAAAIg");
	this.shape_89.setTransform(202.375,82.975);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFADA").s().p("AgQAXIAAgtIAYABQAFABACAEQACACAAAGQAAAEgBADQgCADgCABIgFACIgIABIgGAAIAAARgAgHgBIALgBIADgCIABgEIgBgEIgEgCIgKAAg");
	this.shape_90.setTransform(198.175,82.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFADA").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOgAgegdQgMAMAAARQAAASAMANQANANARAAQASAAANgNQAMgNAAgSQAAgRgMgMQgNgNgSgBQgRABgNANg");
	this.shape_91.setTransform(709.625,83.25);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFADA").s().p("AgCALIAAgIIgJAAIAAgEIAJAAIAAgJIAEAAIAAAJIAJAAIAAAEIgJAAIAAAIg");
	this.shape_92.setTransform(712.1,83.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFADA").s().p("AgHAOQgDgCAAgFIABgFIAFgDIgEgCIgBgEQAAgEACgCQAEgDADAAQAEAAADADQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABIgDACQAEABAAACIACAFQAAAFgDACQgDADgFAAQgEAAgDgDgAgCADIgBADIABAEQAAABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBIABgEIgBgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABgAgCgKIgBADIABADIACABIADgBIABgDIgBgDIgDgBIgCABg");
	this.shape_93.setTransform(709.45,83.275);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFADA").s().p("AABARIAAgYQgCAEgFACIAAgGIAFgDIADgGIAFAAIAAAhg");
	this.shape_94.setTransform(706.725,83.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#040202").s().p("Eg43ABDIAAiGMBxvAAAIAACGg");
	this.shape_95.setTransform(364,83.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(206));

	// Layer_2
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0C0706").s().p("AkiFRIAAqhID9AAQCbABBbBpQBSBfAACHQAACIhSBfQhbBpibABgAh2C0IBRAAQBLAAAtg4QAogzAAhJQAAhIgogyQgtg5hLAAIhRAAg");
	this.shape_96.setTransform(702.8748,52.6672,0.0585,0.0585);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0C0706").s().p("AgKAUIAAgnIAUAAIAAAJIgKAAIAAAGIAKAAIAAAIIgKAAIAAAHIALAAIAAAJg");
	this.shape_97.setTransform(693.5,52.675);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0C0706").s().p("ABoFQIAAkOIjPAAIAAEOIiwAAIAAqgICwAAIAAD1IDPAAIAAj1ICwAAIAAKgg");
	this.shape_98.setTransform(689.1947,52.6672,0.0585,0.0585);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_99.setTransform(697.9063,52.6423,0.0585,0.0585);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_100.setTransform(684.2935,52.6423,0.0585,0.0585);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0C0706").s().p("AjsEFQhshhAAikQAAikBshhQBhhXCLAAQCMAABhBXQBsBhAACkQAACkhsBhQhhBYiMAAQiLAAhhhYgAhziHQg0AyAABVQAABWA0AzQAvAtBFAAQBEAAAwgtQA0gzAAhWQAAhVg0gyQgwguhEAAQhFAAgvAug");
	this.shape_101.setTransform(672.849,52.676,0.0585,0.0585);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0C0706").s().p("AjfEDQhthgAAijQAAihBthgQBhhXCKAAQBgABBLAqQBVAwAkBYIiXA8QgVgrgigTQgigTg0AAQhOAAgtA4QgrAzAABPQAABUAtAyQAuAzBLAAQA2AAAggRQAkgTAWgvIiPAAIAAiUIE+AAQAEA8gEAnQgEA1gPAtQgiBihYAzQhMAshmAAQiLAAhghVg");
	this.shape_102.setTransform(667.8133,52.6643,0.0585,0.0585);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ED1C24").s().p("AkQF8IgCgEQgIgLgBgRQgBgSAFgTQAEgTAIgLIBsi7QgNgCgSgGIgGgCQgsgOgigaQgwgkgVgyQgGgOgEgPQgOg3ANhDIABgGQAKgzAegoQAbgkAogZQAigUAngLQAhgKAaAAQA5AAAvAOQAlAMAdATQAVAOAOARQAHAIADAHQAUgWASgMQAQgMARgGQAQgGATgBQAPgBAYAAQAvAGAkAlQALALAJAOIAGALQg0gZgnAHQgfAFgUAZQgPASgIAaQgEAOgBAJIA2GwIA1AwIAwgkIAVAiIiABeIhghOIgFgtIivB3Iiah4IgcAxQAHANAFAQQAFASAAAPQAAAMgEAIIgEAGQgIALgQAAQgVAAgLgNgAiKCOICiB/IBlhHIgQhnIjaAAgAjfkOQgbAPgVAaQgUAZgLAeQgKAgADAeQAEAtASAiQAQAfAbASQAXATAeAHQAcAIAcgBIBGh1QgBgIgEgNQgIgZgNgUQgTgbgcgNQgkgPgvAIIAFgGQAFgJAIgGQAagYAngDQAVgCAPABQASABAQAEQAiALAiAiIAJgOIgJgPQgPgQgSgOQgagVgdgLQgjgOgoAAQgeAAgeAPgAhBAQICkAAIgdjhg");
	this.shape_103.setTransform(694.0245,40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]}).wait(206));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(584.1,36.4,0.6587,0.6587,0,0,0,109.5,380.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206));

	// bm
	this.instance_2 = new lib.bm_1();
	this.instance_2.setTransform(352,37.2,0.5113,0.5113,-5.86,0,0,160.1,239.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// Layer_3
	this.instance_3 = new lib.text2();
	this.instance_3.setTransform(143.7,49.75,0.945,0.945,0,0,0,155.3,51.6);

	this.instance_4 = new lib.text1();
	this.instance_4.setTransform(100.8,24.7,0.945,0.945,0,0,0,109.9,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(206));

	// Layer_4
	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.setTransform(364,45);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},5).wait(201));

	// Layer_9
	this.instance_6 = new lib.Tween5("synched",0);
	this.instance_6.setTransform(417,32.85,0.8163,0.8159,0,0,0,314.8,-253.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({_off:false},0).wait(1).to({regX:249.9,regY:-238.9,scaleX:1.0116,scaleY:1.0111,x:351.05,y:47.85},0).wait(1).to({scaleX:1.2069,scaleY:1.2063,x:338.1,y:50.8},0).wait(1).to({scaleX:1.4022,scaleY:1.4014,x:325.2,y:53.7},0).wait(1).to({scaleX:1.5975,scaleY:1.5966,x:312.3,y:56.65},0).wait(1).to({scaleX:1.7927,scaleY:1.7917,x:299.4,y:59.5},0).wait(1).to({scaleX:1.988,scaleY:1.9868,x:286.45,y:62.45},0).wait(1).to({regX:314.4,regY:-253.7,scaleX:2.1832,scaleY:2.1819,x:415.2,y:32.75},0).to({_off:true},1).wait(160));

	// bg
	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(231,295.5,1.5,1.5,0,0,0,-6,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},38).wait(168));

	// item1d
	this.instance_8 = new lib.item1d();
	this.instance_8.setTransform(452.65,52.7,0.5223,0.5223,0,0,0,160.2,239.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({regY:239.8,scaleX:0.7384,scaleY:0.7384,x:463.75,y:61.05,alpha:0.6992},6).to({scaleX:0.7744,scaleY:0.7744,x:465.6,y:62.45,alpha:0},1).to({_off:true},1).wait(109));

	// item1c
	this.instance_9 = new lib.item1c();
	this.instance_9.setTransform(437.7,69.1,0.5695,0.5695,-7.8018,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({regX:160.1,regY:239.9,scaleX:0.8051,scaleY:0.8051,rotation:-7.8008,x:442.75,y:84.2,alpha:0.6992},6).to({regX:160,scaleX:0.8443,scaleY:0.8443,rotation:-7.8015,x:443.45,y:86.75,alpha:0},1).to({_off:true},1).wait(109));

	// item1b
	this.instance_10 = new lib.item1b();
	this.instance_10.setTransform(357.15,31.45,0.4543,0.4543,0,0,0,160,239.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({regX:160.1,regY:239.8,scaleX:0.6423,scaleY:0.6423,x:328.8,y:31.05,alpha:0.6992},6).to({regY:239.9,scaleX:0.6736,scaleY:0.6736,x:324.05,y:31,alpha:0},1).to({_off:true},1).wait(109));

	// item1a
	this.instance_11 = new lib.item1a();
	this.instance_11.setTransform(393.15,49.05,0.5791,0.5791,0,0,0,160.1,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(89).to({regX:160.2,scaleX:0.8186,scaleY:0.8186,x:379.7,y:55.95,alpha:0.6992},6).to({scaleX:0.8586,scaleY:0.8586,x:377.45,y:57.15,alpha:0},1).to({_off:true},1).wait(109));

	// Layer_17
	this.instance_12 = new lib.Tween14("synched",0);
	this.instance_12.setTransform(416.8,35.2,0.8163,0.8159,0,0,0,314.6,-250.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(89).to({_off:false},0).to({regX:314.4,regY:-250.7,scaleX:2.4328,scaleY:2.4315,x:416.2,y:35.5},7).to({_off:true},1).wait(109));

	// pop2_png
	this.instance_13 = new lib.Tween20("synched",0);
	this.instance_13.setTransform(418.9,35.4,1.0666,1.0659,0,0,0,232.7,-206.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(43).to({_off:false},0).to({regX:232.8,scaleX:1.1393,scaleY:1.1386,x:418.95,y:35.35},8).to({_off:true},38).wait(117));

	// bg2
	this.instance_14 = new lib.Tween19("synched",0);
	this.instance_14.setTransform(417.2,35.65,0.9999,0.9996,0,0,0,259.2,-158);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(43).to({_off:false},0).to({regX:259.3,regY:-157.8,scaleX:1.0773,scaleY:1.077,x:417.3,y:35.8},8).to({_off:true},38).wait(117));

	// item3d4
	this.instance_15 = new lib.item3d4();
	this.instance_15.setTransform(443.25,59.65,0.4488,0.4488,0,0,0,160.3,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(206));

	// item3c3
	this.instance_16 = new lib.item3c3();
	this.instance_16.setTransform(293.4,107,0.4557,0.4557,0,0,0,160.1,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(206));

	// item3b2
	this.instance_17 = new lib.item3b2();
	this.instance_17.setTransform(470.75,51.05,0.1989,0.1989,0,0,0,160.3,240.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(206));

	// item3a1
	this.instance_18 = new lib.item3a1();
	this.instance_18.setTransform(318.3,19.35,0.41,0.41,0,0,0,17.2,204.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(206));

	// bg3_jpg
	this.instance_19 = new lib.Tween21("synched",0);
	this.instance_19.setTransform(417.6,34,1.1609,1.1603,0,0,0,212.7,-211.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(95).to({_off:false},0).to({regY:-211.6,scaleX:1.1985,scaleY:1.1978,x:417.55,y:34.05},6).wait(105));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-461.4,-103.7,1805.5,409.59999999999997);
// library properties:
lib.properties = {
	id: '5D5D8634DD44AA418239910F9B4C8BF6',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg1b.jpg", id:"bg1b"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/bg2b.jpg", id:"bg2b"},
		{src:"images/bg3.jpg", id:"bg3"},
		{src:"images/bm.png", id:"bm"},
		{src:"images/BukanMain03.png", id:"BukanMain03"},
		{src:"images/BukanMain04.png", id:"BukanMain04"},
		{src:"images/BukanMain05.png", id:"BukanMain05"},
		{src:"images/BukanMain07.png", id:"BukanMain07"},
		{src:"images/BukanMain08.png", id:"BukanMain08"},
		{src:"images/BukanMain09.png", id:"BukanMain09"},
		{src:"images/BukanMain11.png", id:"BukanMain11"},
		{src:"images/BukanMain13.png", id:"BukanMain13"},
		{src:"images/CTAcopy.png", id:"CTAcopy"},
		{src:"images/item2a.png", id:"item2a"},
		{src:"images/item2b.png", id:"item2b"},
		{src:"images/item2c.png", id:"item2c"},
		{src:"images/item2d.png", id:"item2d"},
		{src:"images/item3adrum.png", id:"item3adrum"},
		{src:"images/item3bnada.png", id:"item3bnada"},
		{src:"images/item3cnada.png", id:"item3cnada"},
		{src:"images/item3dnada.png", id:"item3dnada"},
		{src:"images/pop2.png", id:"pop2"},
		{src:"images/SHAD.png", id:"SHAD"}
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
an.compositions['5D5D8634DD44AA418239910F9B4C8BF6'] = {
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