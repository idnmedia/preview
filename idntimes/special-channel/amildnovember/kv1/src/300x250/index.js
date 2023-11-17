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



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg1b = function() {
	this.initialize(img.bg1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg2b = function() {
	this.initialize(img.bg2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,400);


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


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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


(lib.item3b = function() {
	this.initialize(img.item3b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item3c = function() {
	this.initialize(img.item3c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item3d = function() {
	this.initialize(img.item3d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.pop2 = function() {
	this.initialize(img.pop2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
p.nominalBounds = new cjs.Rectangle(-147,-241,413.5,344.6);


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
p.nominalBounds = new cjs.Rectangle(-160,-240,281.3,234.4);


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
p.nominalBounds = new cjs.Rectangle(-158,-192,300,250);


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
	this.instance = new lib.item3d();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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
	this.instance = new lib.item3c();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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

	// Layer_1
	this.instance = new lib.item3b();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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
p.nominalBounds = new cjs.Rectangle(-196,-294,367.5,306.3);


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
p.nominalBounds = new cjs.Rectangle(-196,-294,367.5,306.3);


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
p.nominalBounds = new cjs.Rectangle(-160,-240,200,166.7);


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


(lib.item3d_1 = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(-161,-242,322,482);


(lib.item3c_1 = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(-161,-242,322,483);


(lib.item3b_1 = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(-162,-242,324,483);


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
	this.instance = new lib.item3d_1();
	this.instance.setTransform(184,240,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


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
	this.instance = new lib.item3c_1();
	this.instance.setTransform(184,240,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


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
	this.instance = new lib.item3b_1();
	this.instance.setTransform(184,240,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


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
(lib._300x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ghw();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0706").s().p("AkiFRIAAqhID9AAQCbABBbBpQBSBfAACHQAACIhSBfQhbBpibABgAh2C0IBRAAQBLAAAtg4QAogzAAhJQAAhIgogyQgtg5hLAAIhRAAg");
	this.shape.setTransform(273.2746,189.4176,0.0608,0.0608);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0706").s().p("Ai4FQIAAqgIFoAAIAACaIi9AAIAABgIDDAAIAACYIjDAAIAAB2IDGAAIAACYg");
	this.shape_1.setTransform(263.5212,189.4176,0.0608,0.0608);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0706").s().p("ABoFQIAAkOIjPAAIAAEOIiwAAIAAqgICwAAIAAD1IDPAAIAAj1ICwAAIAAKgg");
	this.shape_2.setTransform(259.052,189.4176,0.0608,0.0608);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_3.setTransform(268.1091,189.3918,0.0608,0.0608);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_4.setTransform(253.9564,189.3918,0.0608,0.0608);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C0706").s().p("AjsEFQhshhAAikQAAikBshhQBhhXCLAAQCMAABhBXQBsBhAACkQAACkhsBhQhhBYiMAAQiLAAhhhYgAhziHQg0AyAABVQAABWA0AzQAvAtBFAAQBEAAAwgtQA0gzAAhWQAAhVg0gyQgwguhEAAQhFAAgvAug");
	this.shape_5.setTransform(242.0581,189.4267,0.0608,0.0608);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0706").s().p("AjfEDQhthgAAijQAAihBthgQBhhXCKAAQBgABBLAqQBVAwAkBYIiXA8QgVgrgigTQgigTg0AAQhOAAgtA4QgrAzAABPQAABUAtAyQAuAzBLAAQA2AAAggRQAkgTAWgvIiPAAIAAiUIE+AAQAEA8gEAnQgEA1gPAtQgiBihYAzQhMAshmAAQiLAAhghVg");
	this.shape_6.setTransform(236.8227,189.4146,0.0608,0.0608);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED1C24").s().p("ApFMqIgFgHQgQgYgDglQgCglALgqQAJgnAQgZIDnmPQghgFgugPQhegfhJg3QhnhMgthtQgMgdgIgfQgeh1AciSIACgLQAWhtBAhVQA5hMBWg2QBIgsBTgYQBGgUA3AAQB7AABkAeQBQAYA+AqQAsAeAfAkQAPASAGAMQArgsAlgbQAjgZAlgNQAhgMAogDQAggCA1ABQBiAKBNBQQAYAZATAdIAOAYQhwg1hSAPQhDALgrA1QgfAmgRA3QgJAcgCAUIB0OaIBvBoIBnhMIAtBHIkRDKIjNinIgLhgIl1D8IlIj/Ig9BrQAQAaAKAjQAKAlAAAgQgBAagIASQgDAGgFAGQgRAXgjAAQgsAAgXgcgAknEwIFaEPIDXiYIghjeInSAAgAncpAQg6AggtA3QgsA1gWBBQgWBDAGBAQAKBgAmBIQAjBBA4AqQAyAmBAASQA6AQA+gDICUj6QgCgSgJgbQgQg1gdgqQgpg7g7gbQhLghhlATIAJgOQAMgSARgPQA3gxBTgIQAtgEAhABQAnACAhALQBIAXBJBIIAVgfQgHgMgPgSQgfgkgngeQg2gqg+gYQhMgehUgBQhCAAg+AhgAiLAkIFfAAIg/nkg");
	this.shape_7.setTransform(264.5617,176.8091,0.4876,0.4876);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(206));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(53.2,187.3,0.4744,0.4744,0,0,0,109.6,380.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206));

	// bm
	this.instance_2 = new lib.bm_1();
	this.instance_2.setTransform(82.1,59.05,0.5264,0.5264,-5.8653,0,0,160,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// Layer_3
	this.instance_3 = new lib.text2();
	this.instance_3.setTransform(144.2,46.45,0.9578,0.9578,0,0,0,155.2,51.5);

	this.instance_4 = new lib.text1();
	this.instance_4.setTransform(100.7,19.7,0.9578,0.9578,0,0,0,109.8,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(206));

	// Layer_9
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(151.75,114.25,0.8164,0.8162,0,0,0,-10.1,-154.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).wait(1).to({regX:-12.3,regY:-140.9,scaleX:1.0514,scaleY:1.0512,x:149.9,y:124.95},0).wait(1).to({scaleX:1.2851,scaleY:1.2849,y:124.9},0).wait(1).to({scaleX:1.5176,scaleY:1.5174,x:149.95},0).wait(1).to({scaleX:1.7488,scaleY:1.7486,x:149.9,y:124.85},0).wait(1).to({scaleX:1.9788,scaleY:1.9785,y:124.8},0).wait(1).to({scaleX:2.2074,scaleY:2.2072},0).wait(1).to({regX:-10.1,regY:-154.1,scaleX:2.4348,scaleY:2.4345,x:155.25,y:92.8},0).to({_off:true},1).wait(160));

	// bg
	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(231,295.5,1.5,1.5,0,0,0,-6,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},38).wait(168));

	// item1d
	this.instance_7 = new lib.item1d();
	this.instance_7.setTransform(142.05,168.55,0.8646,0.8646,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({scaleX:1.233,scaleY:1.233,x:123,y:177.9,alpha:0.6992},6).to({scaleX:1.2944,scaleY:1.2944,x:119.85,y:179.4,alpha:0},1).to({_off:true},1).wait(109));

	// item1c
	this.instance_8 = new lib.item1c();
	this.instance_8.setTransform(181.65,123.55,0.7943,0.7943,-7.8029,0,0,159.9,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({regX:159.8,scaleX:1.1327,scaleY:1.1327,rotation:-7.8027,x:174.3,y:113.8,alpha:0.6992},6).to({regX:159.9,regY:239.9,scaleX:1.1892,scaleY:1.1892,rotation:-7.8026,x:173.2,y:112,alpha:0},1).to({_off:true},1).wait(109));

	// item1b
	this.instance_9 = new lib.item1b();
	this.instance_9.setTransform(120.35,128.2,0.6668,0.6668,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({scaleX:0.9509,scaleY:0.9509,x:125.6,y:120.35,alpha:0.6992},6).to({regX:160.1,scaleX:0.9983,scaleY:0.9983,x:126.45,y:119.05,alpha:0},1).to({_off:true},1).wait(109));

	// item1a
	this.instance_10 = new lib.item1a();
	this.instance_10.setTransform(167.45,138.15,0.7376,0.7376,0,0,0,160.1,239.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({regY:239.8,scaleX:1.0519,scaleY:1.0519,x:167,y:134.45,alpha:0.6992},6).to({regX:160,regY:239.9,scaleX:1.1043,scaleY:1.1043,x:166.8,y:133.9,alpha:0},1).to({_off:true},1).wait(109));

	// Layer_17
	this.instance_11 = new lib.Tween14("synched",0);
	this.instance_11.setTransform(151.25,115.8,0.8163,0.8162,0,0,0,-10.7,-152.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(89).to({_off:false},0).to({regY:-152.3,scaleX:2.5885,scaleY:2.5883,x:154,y:95.4},7).to({_off:true},1).wait(109));

	// pop2_png
	this.instance_12 = new lib.Tween20("synched",0);
	this.instance_12.setTransform(148.5,115.9,0.9508,0.9508,0,0,0,-20.9,-131.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(43).to({_off:false},0).to({regX:-21,scaleX:1.0667,scaleY:1.0666,x:148.25,y:115.25},8).to({_off:true},38).wait(117));

	// bg2
	this.instance_13 = new lib.Tween19("synched",0);
	this.instance_13.setTransform(159.1,209,1.0001,1.0001,0,0,0,1.1,17);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(43).to({_off:false},0).to({regX:1,regY:17.1,scaleX:1.0574,scaleY:1.0574,x:160,y:210.05},8,cjs.Ease.sineOut).to({_off:true},38).wait(117));

	// item3d4
	this.instance_14 = new lib.item3d4();
	this.instance_14.setTransform(128.35,161.25,0.8608,0.8608,0,0,0,160.1,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(206));

	// item3c3
	this.instance_15 = new lib.item3c3();
	this.instance_15.setTransform(131.25,162.15,0.8608,0.8608,0,0,0,159.9,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(206));

	// item3b2
	this.instance_16 = new lib.item3b2();
	this.instance_16.setTransform(178.25,108.1,0.6942,0.6942,0,0,0,160,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(206));

	// item3a1
	this.instance_17 = new lib.item3a1();
	this.instance_17.setTransform(59.2,118.45,0.6607,0.6607,0,0,0,17.1,204.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(206));

	// bg3_jpg
	this.instance_18 = new lib.Tween21("synched",0);
	this.instance_18.setTransform(157.55,206.85,0.7275,0.7274,0,0,0,70.2,44.4);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(95).to({_off:false},0).to({regY:44.3,scaleX:0.7498,scaleY:0.7496,x:157.85,y:209.75},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-175.6,-146.3,801.3000000000001,667.7);
// library properties:
lib.properties = {
	id: '37113867CE315B4296B0573A7211566C',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
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
		{src:"images/ghw.png", id:"ghw"},
		{src:"images/item2a.png", id:"item2a"},
		{src:"images/item2b.png", id:"item2b"},
		{src:"images/item2c.png", id:"item2c"},
		{src:"images/item2d.png", id:"item2d"},
		{src:"images/item3adrum.png", id:"item3adrum"},
		{src:"images/item3b.png", id:"item3b"},
		{src:"images/item3c.png", id:"item3c"},
		{src:"images/item3d.png", id:"item3d"},
		{src:"images/pop2.png", id:"pop2"}
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
an.compositions['37113867CE315B4296B0573A7211566C'] = {
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