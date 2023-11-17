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
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.bg1b = function() {
	this.initialize(img.bg1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.bg2b = function() {
	this.initialize(img.bg2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


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


(lib.item3cnada = function() {
	this.initialize(img.item3cnada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,113);


(lib.item3dnada = function() {
	this.initialize(img.item3dnada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,54);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.pop1 = function() {
	this.initialize(img.pop1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.pop2 = function() {
	this.initialize(img.pop2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


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
p.nominalBounds = new cjs.Rectangle(-147,-241,275.7,43.099999999999994);


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
	this.instance = new lib.pop1();
	this.instance.setTransform(-160,-240,0.4688,0.469);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,300,46.900000000000006);


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
p.nominalBounds = new cjs.Rectangle(-158,-192,320,50);


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
p.nominalBounds = new cjs.Rectangle(-196,-294,392,61.30000000000001);


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
	this.shape.setTransform(3.35,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-5.8,172.2,13.3);


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
	this.instance = new lib.pop2();
	this.instance.setTransform(-160,-50,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-50,320,50);


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
p.nominalBounds = new cjs.Rectangle(-196,-294,392,61.30000000000001);


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
p.nominalBounds = new cjs.Rectangle(-160,-240,426.7,66.69999999999999);


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
	this.shape.graphics.f("#FFFFFF").s().p("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");
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
(lib._320x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image();
	this.instance.setTransform(2.5,43.3,0.0326,0.0326);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADA").s().p("AgCANIACgGIAAgHIAAgFIgCgHIACAAIACAGIABAGIgBAHQgBAEgBACg");
	this.shape.setTransform(233.2,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFADA").s().p("AgDAIQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgBIABACQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACgBIAAgDIAAgDIgCAAIgCABIgCgBIABgJIAHAAIAAADIgFAAIAAAEIACAAIADABQABABAAADQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_1.setTransform(232.2,46.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFADA").s().p("AgDAIQgBgCAAgGQAAgEABgDQACgCACAAIADABIABAEIgDAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAABIABgCIABAAIADACQAAAAABAAQAAAAAAAAQAAABAAABQAAAAAAABQAAAEgBABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAgAAAABIgBACIABADIAAABIACgBIAAgCIAAgDIgCgBg");
	this.shape_2.setTransform(230.875,46.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFADA").s().p("AgDAIQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgBIABACQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACgBIAAgDIAAgDIgCAAIgCABIgCgBIABgJIAHAAIAAADIgFAAIAAAEIACAAIACABQACABAAADQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_3.setTransform(229.6,46.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFADA").s().p("AgDAIQgBgCAAgGQAAgEABgDQACgCACAAIADABIABAEIgDAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAABIABgCIABAAIADACIABADQAAAEgBABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAgAAAABIgBACIABADIAAABIACgBIAAgCIAAgDIgCgBg");
	this.shape_4.setTransform(228.275,46.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFADA").s().p("AgCACIAAgDIAFAAIAAADg");
	this.shape_5.setTransform(227.225,46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFADA").s().p("AgCAKIABgJIADgGIgGAAIAAgEIAJAAIAAADIgCAFIgCAFIgBAGg");
	this.shape_6.setTransform(226.175,46.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFADA").s().p("AgCAKIABgJIADgGIgGAAIAAgEIAJAAIAAADIgCAFIgCAFIgBAGg");
	this.shape_7.setTransform(224.875,46.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFADA").s().p("AABAKIAAgOIgEADIAAgDIADgBIABgEIADAAIAAATg");
	this.shape_8.setTransform(223.475,46.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFADA").s().p("AgCACIAAgDIAFAAIAAADg");
	this.shape_9.setTransform(222.525,46.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFADA").s().p("AgDAIQgBgCAAgGQAAgEABgDQABAAAAgBQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQABADAAAEQAAAGgBACQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAgAAAgFIgBAFQAAAFABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACgBIAAgGIAAgFIgCgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_10.setTransform(221.475,46.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFADA").s().p("AgDAIQgBgCAAgGQAAgEABgDQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQABADAAAEQAAAGgBACQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAgAAAgFIgBAFQAAAFABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACgBIAAgGIAAgFIgCgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_11.setTransform(220.175,46.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFADA").s().p("AgDAJQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgDIACgBIgBgCIgBgCIABgEQABAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIgBACIgBACIACABIAAADIAAADIgCACIgDABQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAgAgBACIAAACIAAACIABABIACgBIAAgCIAAgCIgCgBgAAAgFIgBABIABACIAAABIABgBIABgCIgBgBIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_12.setTransform(218.875,46.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFADA").s().p("AgDAIQgBgCAAgGQAAgEABgDQABAAAAgBQAAAAABgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQABADAAAEQAAAGgBACQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgBgBAAAAQAAgBgBAAgAAAgFIgBAFQAAAFABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACgBIAAgGIAAgFIgCgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_13.setTransform(217.575,46.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFADA").s().p("AABANIgCgGIgBgHIABgGIACgGIACAAIgCAHIgBAFIABAHIACAGg");
	this.shape_14.setTransform(216.575,46.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFADA").s().p("AADAKIgDgJIgDADIAAAGIgDAAIAAgTIADAAIAAAJIAGgJIAEAAIgGAIIAGALg");
	this.shape_15.setTransform(214.725,46.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFADA").s().p("AgFAIQgCgEAAgEIABgFIADgDIADgBQAFAAABACQACAEAAADQAAAEgCAEQgDACgDAAQgCAAgDgCgAgCgEIgBAEQAAADABACQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAgBIACgFIgCgEQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_16.setTransform(212.9,46.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFADA").s().p("AADAKIgDgJIgDADIAAAGIgDAAIAAgTIADAAIAAAJIAGgJIAEAAIgGAIIAHALg");
	this.shape_17.setTransform(211.25,46.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFADA").s().p("AgEAIQgDgEAAgEQAAgCABgDIADgDIADgBQAEAAACACQACADAAAEQAAAFgCADQgCACgEAAQgCAAgCgCgAgCgEQgBABAAADQAAADABACIACACQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBIABgFQAAgDgBgBQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABg");
	this.shape_18.setTransform(209.4,46.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFADA").s().p("AADAKIgDgHIgBgBIgCAAIAAAIIgEAAIAAgTIAHAAIADABIACACIABADIgBADIgEACIACABIAFAHgAgDgBIAEAAIABgBIAAgBIAAgCIgBAAIgEAAg");
	this.shape_19.setTransform(207.75,46.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAHAAIAAADIgHAAIAAAFIAIAAIAAADg");
	this.shape_20.setTransform(206.075,46.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFADA").s().p("AAFAKIAAgPIgDAPIgDAAIgDgPIAAAPIgDAAIAAgTIAFAAIACANIADgNIAFAAIAAATg");
	this.shape_21.setTransform(204.3,46.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFADA").s().p("AAAAKIAAgTIACAAIAAATg");
	this.shape_22.setTransform(202.35,46.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFADA").s().p("AgBAKIAAgPIgFAAIAAgEIANAAIAAAEIgGAAIAAAPg");
	this.shape_23.setTransform(201.3,46.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFADA").s().p("AADAKIgFgMIAAAMIgEAAIAAgTIAEAAIAFAMIAAgMIAEAAIAAATg");
	this.shape_24.setTransform(199.75,46.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAHAAIAAADIgHAAIAAAFIAIAAIAAADg");
	this.shape_25.setTransform(198.175,46.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFADA").s().p("AADAKIAAgIIgFAAIAAAIIgEAAIAAgTIAEAAIAAAIIAFAAIAAgIIAEAAIAAATg");
	this.shape_26.setTransform(196.5,46.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFADA").s().p("AADAKIgDgHIgBgBIgCAAIAAAIIgDAAIAAgTIAGAAIADABIACACIABADIgBADIgDACIABABIAEAHgAgDgBIAEAAIABgBIABgBIgBgCIgBAAIgEAAg");
	this.shape_27.setTransform(194.925,46.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAIAAIAAADIgIAAIAAAFIAIAAIAAADg");
	this.shape_28.setTransform(193.225,46.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFADA").s().p("AgGAKIAAgTIAGAAIAEABIABACIABACIgBADIgBABIACACIABACIgBAEIgDACgAgDAHIADAAIACgBIABgBIAAgCIgBgBIgFAAgAgDgBIAEAAIABgBIABgBIgBgCIAAAAIgFAAg");
	this.shape_29.setTransform(191.625,46.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFADA").s().p("AADAKIgFgMIAAAMIgDAAIAAgTIADAAIAGAMIAAgMIACAAIAAATg");
	this.shape_30.setTransform(189.25,46.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFADA").s().p("AAFAKIgCgFIgFAAIgCAFIgDAAIAGgTIADAAIAGATgAgBADIADAAIgCgHg");
	this.shape_31.setTransform(187.575,46.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFADA").s().p("AADAKIgFgMIAAAMIgEAAIAAgTIAEAAIAFAMIAAgMIAEAAIAAATg");
	this.shape_32.setTransform(185.9,46.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFADA").s().p("AAFAKIgCgFIgFAAIgCAFIgDAAIAGgTIADAAIAGATgAgBADIADAAIgCgHg");
	this.shape_33.setTransform(184.225,46.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFADA").s().p("AgBAKIAAgIIgGgLIAEAAIADAIIAEgIIAEAAIgGALIAAAIg");
	this.shape_34.setTransform(182.825,46.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFADA").s().p("AAEAKIgBgFIgGAAIgBAFIgDAAIAGgTIACAAIAHATgAgCADIAEAAIgCgHg");
	this.shape_35.setTransform(181.425,46.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFADA").s().p("AgFAKIAAgTIADAAIAAAQIAIAAIAAADg");
	this.shape_36.setTransform(179.925,46.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFADA").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_37.setTransform(178.15,47.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFADA").s().p("AAEAKIgGgMIAAAMIgDAAIAAgTIADAAIAGAMIAAgMIACAAIAAATg");
	this.shape_38.setTransform(176.95,46.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFADA").s().p("AAFAKIgCgFIgFAAIgCAFIgDAAIAGgTIADAAIAGATgAgBADIADAAIgCgHg");
	this.shape_39.setTransform(175.275,46.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFADA").s().p("AADAKIgEgJIgCADIAAAGIgDAAIAAgTIADAAIAAAJIAGgJIAEAAIgGAIIAGALg");
	this.shape_40.setTransform(173.7,46.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFADA").s().p("AgFAIQgCgDAAgFIABgFIADgDIADgBQAEAAACACQACADAAAEQAAAFgCADQgDACgDAAQgCAAgDgCgAgCgEQgCABAAADQAAADACACQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAAAIADgCQACgCAAgDQAAgDgCgBIgDgCQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABg");
	this.shape_41.setTransform(171.875,46.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFADA").s().p("AAEAKIgEgHIgBgBIgCAAIAAAIIgDAAIAAgTIAGAAIAEABIABACIABADIgBADIgDACIACABIADAHgAgDgBIAFAAIABgBIAAgDIgBAAIgFAAg");
	this.shape_42.setTransform(170.2,46.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFADA").s().p("AgFAIQgCgDAAgFIABgFQAAAAABgBQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQADAAACACQADAEAAADQAAAEgDAEQgCACgDAAQgDAAgCgCgAgDgEIgBAEIABAFQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQACgCgBgDQABgDgCgBQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_43.setTransform(168.4,46.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFADA").s().p("AgDAJIgDgEIgBgFIABgFIADgDIADgBQADAAACABIACAEIgDABIgBgCIgDgBQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIgBAEQAAADABACQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIACgBIACgBIAAgCIgEAAIAAgDIAIAAIAAAHIgEACIgDABg");
	this.shape_44.setTransform(166.575,46.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFADA").s().p("AgCAJQgDgBgBgDIgBgFIABgFQABAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAIACgBQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAIADAEIgEABIgBgCIgDgBQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBABAAADIABAFQAAABABAAQAAAAABAAQAAABAAAAQAAAAAAAAIACgBIADgBIAAgCIgFAAIAAgDIAIAAIAAAHIgDACIgFABg");
	this.shape_45.setTransform(164.75,46.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFADA").s().p("AADAKIgFgMIAAAMIgDAAIAAgTIADAAIAFAMIAAgMIADAAIAAATg");
	this.shape_46.setTransform(163,46.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAHAAIAAADIgHAAIAAAFIAIAAIAAADg");
	this.shape_47.setTransform(161.425,46.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFADA").s().p("AgBAKIAAgPIgFAAIAAgEIANAAIAAAEIgFAAIAAAPg");
	this.shape_48.setTransform(159.9,46.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFADA").s().p("AADAKIgCgEIgBgDIgBgBIgCAAIAAAIIgDAAIAAgTIAGAAIADABIACACIABADQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIgDACIACABIADAHgAgDgBIAEAAIABgBIABgBIgBgCIgBAAIgEAAg");
	this.shape_49.setTransform(157.775,46.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAHAAIAAADIgHAAIAAAFIAIAAIAAADg");
	this.shape_50.setTransform(156.125,46.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFADA").s().p("AADAKIgDgJIgDADIAAAGIgDAAIAAgTIADAAIAAAJIAGgJIAEAAIgGAIIAHALg");
	this.shape_51.setTransform(154.55,46.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFADA").s().p("AADAKIgFgMIAAAMIgDAAIAAgTIADAAIAGAMIAAgMIACAAIAAATg");
	this.shape_52.setTransform(152.8,46.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFADA").s().p("AAEAKIgBgFIgGAAIgBAFIgDAAIAGgTIACAAIAHATgAgCADIAEAAIgCgHg");
	this.shape_53.setTransform(151.125,46.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFADA").s().p("AADAKIgDgJIgDADIAAAGIgDAAIAAgTIADAAIAAAJIAGgJIAEAAIgGAIIAGALg");
	this.shape_54.setTransform(149.525,46.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFADA").s().p("AAFAKIgCgFIgFAAIgCAFIgDAAIAGgTIADAAIAGATgAgBADIADAAIgCgHg");
	this.shape_55.setTransform(147.175,46.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFADA").s().p("AADAKIgFgMIAAAMIgEAAIAAgTIAEAAIAGAMIAAgMIADAAIAAATg");
	this.shape_56.setTransform(145.5,46.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAHAAIAAADIgHAAIAAAFIAIAAIAAADg");
	this.shape_57.setTransform(143.925,46.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFADA").s().p("AADAKIgEgJIgCADIAAAGIgEAAIAAgTIAEAAIAAAJIAFgJIAFAAIgGAIIAGALg");
	this.shape_58.setTransform(142.35,46.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFADA").s().p("AAEAKIgEgHIgBgBIgCAAIAAAIIgEAAIAAgTIAHAAIAEABIACACIAAADIgBADIgDACIACABIADAHgAgDgBIAEAAIACgBIAAgDIgCAAIgEAAg");
	this.shape_59.setTransform(140.65,46.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAHAAIAAADIgHAAIAAAFIAIAAIAAADg");
	this.shape_60.setTransform(138.975,46.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFADA").s().p("AgBAKIAAgPIgEAAIAAgEIALAAIAAAEIgFAAIAAAPg");
	this.shape_61.setTransform(137.5,46.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFADA").s().p("AAFAKIgCgFIgFAAIgCAFIgDAAIAGgTIADAAIAGATgAgBADIADAAIgCgHg");
	this.shape_62.setTransform(135.325,46.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFADA").s().p("AgBAKIAAgIIgGgLIAEAAIADAIIAEgIIAEAAIgGALIAAAIg");
	this.shape_63.setTransform(133.925,46.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFADA").s().p("AAFAKIgCgFIgFAAIgCAFIgDAAIAGgTIADAAIAGATgAgBADIADAAIgCgHg");
	this.shape_64.setTransform(132.525,46.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFADA").s().p("AgGADIAEAAQAAABAAABQAAAAABABQAAAAABABQAAAAAAAAIACgBIABgCIAAgBIgBgBIgCgBIgDgBIgCgBIAAgDIAAgDIADgCIACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgDAAIgBgCIgCgBIgBAAIgBACIABABIACABIADACIACABIABADQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgBACgEAAQgFAAgBgHg");
	this.shape_65.setTransform(130.9,46.225);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFADA").s().p("AgBADIABgCIAAgBIAAAAIAAgDIACAAIAAACIgBADIgBACg");
	this.shape_66.setTransform(129.125,47.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFADA").s().p("AADAKIgEgJIgCADIAAAGIgEAAIAAgTIAEAAIAAAJIAGgJIAEAAIgGAIIAGALg");
	this.shape_67.setTransform(128.05,46.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFADA").s().p("AgFAIQgCgDAAgFIABgFIADgDIADgBQAEAAACACQACADAAAEQAAAFgCADQgDACgDAAQgCAAgDgCgAgCgEQgCABAAADQAAADACACQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAAAIADgCQACgCAAgDQAAgDgCgBIgDgCQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABg");
	this.shape_68.setTransform(126.225,46.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFADA").s().p("AADAKIgEgJIgCADIAAAGIgDAAIAAgTIADAAIAAAJIAFgJIAFAAIgGAIIAGALg");
	this.shape_69.setTransform(124.575,46.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFADA").s().p("AgEAIQgDgDAAgFIABgFQAAAAABgBQAAgBAAAAQABgBAAAAQAAAAABAAIADgBQADAAACACQADAEAAADQAAAEgDAEQgCACgDAAQgDAAgBgCgAgCgEIgBAEIABAFQAAABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABgCABgDQgBgDgBgBQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_70.setTransform(122.75,46.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFADA").s().p("AADAKIgDgHIgBgBIgCAAIAAAIIgDAAIAAgTIAGAAIADABIACACIABADIgBADIgDACIABABIACADIACAEgAgDgBIAEAAIABgBIABgBIgBgCIgBAAIgEAAg");
	this.shape_71.setTransform(121.075,46.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAHAAIAAADIgHAAIAAAFIAIAAIAAADg");
	this.shape_72.setTransform(119.425,46.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFADA").s().p("AAEAKIAAgPIgCAPIgDAAIgDgPIAAAPIgDAAIAAgTIAFAAIACANIADgNIAFAAIAAATg");
	this.shape_73.setTransform(117.65,46.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFADA").s().p("AAFAKIgCgFIgFAAIgCAFIgDAAIAGgTIADAAIAGATgAgBADIADAAIgCgHg");
	this.shape_74.setTransform(115.225,46.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFADA").s().p("AAEAKIgGgMIAAAMIgEAAIAAgTIAEAAIAGAMIAAgMIADAAIAAATg");
	this.shape_75.setTransform(113.55,46.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFADA").s().p("AgFAKIAAgTIALAAIAAAEIgIAAIAAAEIAHAAIAAADIgHAAIAAAFIAIAAIAAADg");
	this.shape_76.setTransform(111.975,46.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFADA").s().p("AADAKIgDgHIgBgBIgCAAIAAAIIgDAAIAAgTIAGAAIADABIACACIABADIgBADIgDACIABABIAEAHgAgDgBIAEAAIABgBIAAgDIgBAAIgEAAg");
	this.shape_77.setTransform(110.425,46.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFADA").s().p("AAEAKIgBgFIgGAAIgBAFIgDAAIAGgTIADAAIAGATgAgCADIAEAAIgCgHg");
	this.shape_78.setTransform(108.65,46.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFADA").s().p("AADAKIgDgJIgDADIAAAGIgEAAIAAgTIAEAAIAAAJIAFgJIAFAAIgGAIIAHALg");
	this.shape_79.setTransform(107.05,46.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFADA").s().p("AgBAHIAAgEIADAAIAAAEgAgBgCIAAgEIADAAIAAAEg");
	this.shape_80.setTransform(104.675,46.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFADA").s().p("AAEAKIgHgMIAAAMIgEAAIAAgTIAEAAIAHAMIAAgMIAEAAIAAATg");
	this.shape_81.setTransform(103.2,46.225);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFADA").s().p("AAGAKIgCgFIgHAAIgCAFIgEAAIAIgTIADAAIAIATgAgCACIAEAAIgCgGg");
	this.shape_82.setTransform(101.2,46.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFADA").s().p("AgBAKIAAgQIgGAAIAAgDIAPAAIAAADIgGAAIAAAQg");
	this.shape_83.setTransform(99.55,46.225);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFADA").s().p("AAGAKIgCgFIgHAAIgBAFIgFAAIAIgTIADAAIAIATgAgCACIAFAAIgDgGg");
	this.shape_84.setTransform(97.9,46.225);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFADA").s().p("AgEAJIgDgEIgBgFIABgFIAEgDIADgBQAEAAACABQADACAAADIgEAAIgCgCQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQgBABAAADQAAADABACQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAIADgBIACgBIAAgCIgEAAIAAgDIAIAAIAAAHIgDACIgFABQgCAAgDgBg");
	this.shape_85.setTransform(95.825,46.225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFADA").s().p("AAEAKIgHgMIAAAMIgEAAIAAgTIAEAAIAHAMIAAgMIAEAAIAAATg");
	this.shape_86.setTransform(93.75,46.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFADA").s().p("AgBAKIAAgTIADAAIAAATg");
	this.shape_87.setTransform(92.35,46.225);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFADA").s().p("AAEAKIgEgHIgBgBIgDAAIAAAIIgEAAIAAgTIAMABIACACIABADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgEABIACACIAFAHgAgEgBIAGAAIABgBIAAgBIAAgCIgCAAIgCgBIgDAAg");
	this.shape_88.setTransform(91.075,46.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFADA").s().p("AgGAKIAAgTIANAAIAAADIgKAAIAAAFIAJAAIAAACIgJAAIAAAGIAKAAIAAADg");
	this.shape_89.setTransform(89.1,46.225);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFADA").s().p("AgHAKIAAgTIAKAAIAEACIABAEIgBADIgCABIgCABIgFAAIAAAIgAgCAAIACAAIABAAIACgBIAAgCIgBgCIgBAAIgCgBIgBAAg");
	this.shape_90.setTransform(87.25,46.225);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFADA").s().p("AgUAWQgKgJABgNQgBgLAKgJQAJgKALABQANgBAJAKQAIAJABALQgBANgIAJQgJAIgNABQgLgBgJgIgAgTgSQgHAIgBAKQABALAHAIQAJAIAKAAQALAAAIgIQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgJAIg");
	this.shape_91.setTransform(313.45,46.35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFADA").s().p("AgBAHIAAgFIgFAAIAAgDIAFAAIAAgFIADAAIAAAFIAFAAIAAADIgFAAIAAAFg");
	this.shape_92.setTransform(314.975,46.375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFADA").s().p("AgEAJQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgEIADgBIgDgCIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQADABACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBACIgCACIADABIABAEQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgEgBgAgBACIgBACIABACIABABIACgBIABgCIgBgCIgCgBIgBABgAgBgFIgBABIABACIABAAIACAAIAAgCIAAgBIgCgBg");
	this.shape_93.setTransform(313.325,46.35);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFADA").s().p("AABAKIAAgNQgCACgDAAIAAgDIAEgCIACgEIACAAIAAAUg");
	this.shape_94.setTransform(311.6,46.35);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#040202").s().p("A4/AlIAAhKMAx/AAAIAABKg");
	this.shape_95.setTransform(160,46.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(206));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(185,-84,0.2836,0.2836);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206));

	// cta
	this.instance_2 = new lib.cta();
	this.instance_2.setTransform(249.3,20.3,0.2596,0.2596,0,0,0,110,380.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// bm
	this.instance_3 = new lib.bm_1();
	this.instance_3.setTransform(153.45,20,0.2594,0.2594,-5.8545,0,0,160.8,238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(206));

	// Layer_3
	this.instance_4 = new lib.text2();
	this.instance_4.setTransform(60.1,26.75,0.39,0.39,0,0,0,155.5,51.6);

	this.instance_5 = new lib.text1();
	this.instance_5.setTransform(42.35,16.4,0.39,0.39,0,0,0,110,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(206));

	// Layer_9
	this.instance_6 = new lib.Tween5("synched",0);
	this.instance_6.setTransform(175.65,18.1,0.8163,0.8155,0,0,0,19.2,-271.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({_off:false},0).wait(1).to({regX:0,regY:-263.4,scaleX:1.056,scaleY:1.0549,x:155.45,y:27},0).wait(1).to({scaleX:1.2956,scaleY:1.2943,x:150.9,y:29.05},0).wait(1).to({scaleX:1.5353,scaleY:1.5336,x:146.4,y:31.1},0).wait(1).to({scaleX:1.7749,scaleY:1.773,x:141.85,y:33.15},0).wait(1).to({scaleX:2.0145,scaleY:2.0124,x:137.35,y:35.15},0).wait(1).to({scaleX:2.2542,scaleY:2.2518,x:132.8,y:37.2},0).wait(1).to({regX:19.4,regY:-271.7,scaleX:2.4938,scaleY:2.4912,x:176.2,y:18.25},0).to({_off:true},1).wait(160));

	// bg
	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(115.5,147.75,0.75,0.75,0,0,0,-6,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},38).wait(168));

	// item1d
	this.instance_8 = new lib.item1d();
	this.instance_8.setTransform(110.85,33.2,0.3441,0.3441,0,0,0,160.2,239.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({regX:160.3,regY:239.6,scaleX:0.4708,scaleY:0.4708,x:89.7,y:33.3,alpha:0.6992},6).to({regY:239.7,scaleX:0.4919,scaleY:0.4919,x:86.2,alpha:0},1).to({_off:true},1).wait(109));

	// item1c
	this.instance_9 = new lib.item1c();
	this.instance_9.setTransform(142.1,56.15,0.6391,0.6391,0.1847,0,0,160.3,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({scaleX:0.8743,scaleY:0.8743,rotation:0.184,x:132.5,y:64.75,alpha:0.6992},6).to({regX:160.2,scaleX:0.9135,scaleY:0.9135,rotation:0.1838,x:130.8,y:66.1,alpha:0},1).to({_off:true},1).wait(109));

	// item1b
	this.instance_10 = new lib.item1b();
	this.instance_10.setTransform(180.85,38.4,0.2993,0.2993,0,0,0,160,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({regX:160.1,scaleX:0.4095,scaleY:0.4095,x:185.5,y:40.45,alpha:0.6992},6).to({scaleX:0.4279,scaleY:0.4279,x:186.25,y:40.75,alpha:0},1).to({_off:true},1).wait(109));

	// item1a
	this.instance_11 = new lib.item1a();
	this.instance_11.setTransform(242.1,28.25,0.3314,0.3314,0,0,0,160.2,239.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(89).to({regY:239.8,y:28.3},0).to({regY:239.7,scaleX:0.4534,scaleY:0.4534,x:269.25,y:26.6,alpha:0.6992},6).to({scaleX:0.4737,scaleY:0.4737,x:273.8,y:26.25,alpha:0},1).to({_off:true},1).wait(109));

	// Layer_17
	this.instance_12 = new lib.Tween14("synched",0);
	this.instance_12.setTransform(177,22.05,0.8163,0.8148,0,0,0,20.8,-267);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(89).to({_off:false},0).to({regX:20.9,regY:-266.9,scaleX:2.3351,scaleY:2.3306,x:177.15,y:22.2},7).to({_off:true},1).wait(109));

	// pop2_png
	this.instance_13 = new lib.Tween20("synched",0);
	this.instance_13.setTransform(176.35,20.35,0.8006,0.7995,0,0,0,5.4,-220.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(43).to({_off:false},0).to({regY:-221,scaleX:1.0667,scaleY:1.0652,x:176.4},8).to({_off:true},38).wait(117));

	// bg2
	this.instance_14 = new lib.Tween19("synched",0);
	this.instance_14.setTransform(176,20.65,1,0.9992,0,0,0,18,-171.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(43).to({_off:false},0).to({regY:-171.3,scaleX:1.1284,scaleY:1.1276,y:20.7},8).to({_off:true},38).wait(117));

	// item3d4
	this.instance_15 = new lib.item3d4();
	this.instance_15.setTransform(181.7,45.6,0.2496,0.2496,0,0,0,160.5,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(206));

	// item3c3
	this.instance_16 = new lib.item3c3();
	this.instance_16.setTransform(187.55,34.85,0.2069,0.2069,0,0,0,160.2,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(206));

	// Layer_4
	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.setTransform(176,20.55,0.7512,0.7512,0,0,0,16,-29.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(95).to({_off:false},0).to({regY:-29.5,scaleX:1,scaleY:1,y:20.5},7).wait(104));

	// item3a1
	this.instance_18 = new lib.item3a1();
	this.instance_18.setTransform(143.4,-5.6,0.4498,0.4498,0,0,0,17.4,203.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(206));

	// bg3_jpg
	this.instance_19 = new lib.Tween21("synched",0);
	this.instance_19.setTransform(176.7,19.75,1.1609,1.1591,0,0,0,5.2,-224);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(95).to({_off:false},0).to({regX:5.3,scaleX:1.2417,scaleY:1.2399,x:176.8,y:19.7},7).wait(104));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-200.9,-128.4,817.5,414.4);
// library properties:
lib.properties = {
	id: 'DD744713088F674E9745122FD10377DA',
	width: 320,
	height: 50,
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
		{src:"images/item3cnada.png", id:"item3cnada"},
		{src:"images/item3dnada.png", id:"item3dnada"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/pop1.png", id:"pop1"},
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
an.compositions['DD744713088F674E9745122FD10377DA'] = {
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