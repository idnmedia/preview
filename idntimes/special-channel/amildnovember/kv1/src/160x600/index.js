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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.bg1b = function() {
	this.initialize(img.bg1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.bg2b = function() {
	this.initialize(img.bg2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


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


(lib.item3a = function() {
	this.initialize(img.item3a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item3b = function() {
	this.initialize(img.item3b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.item3d = function() {
	this.initialize(img.item3d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.pop2 = function() {
	this.initialize(img.pop2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.pop3 = function() {
	this.initialize(img.pop3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);// helper functions:

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
p.nominalBounds = new cjs.Rectangle(-147,-241,137.8,516.9);


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
p.nominalBounds = new cjs.Rectangle(-160,-240,150,562.5);


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
p.nominalBounds = new cjs.Rectangle(-158,-192,160,600);


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

	// Layer_1
	this.instance = new lib.item3a();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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
p.nominalBounds = new cjs.Rectangle(-196,-294,196,735.1);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pop3();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJPA9QgIgFgEgKQgDgJAAgNIAAgwQAAgNADgJQAEgKAIgFQAIgEAOAAQAOAAAIAEQAIAFAEAKQADAJABANIAAAwQgBANgDAJQgEAKgIAFQgIAGgOgBQgOABgIgGgAJdgtQgDACgCAEIgBAKIAAA6IABAKQACAEADADQACADAGAAQAGAAADgDQACgDABgEIABgKIAAg6IgBgKQgBgEgCgCQgDgDgGAAQgFAAgDADgAFqA+QgJgFgDgJQgFgIAAgNIAUgFQAAAJADAFQAAAGAEADQADADAFAAQAGAAADgDQABgEAAgFQAAgJgDgFQgEgGgGgFIgQgNQgIgGgDgIQgFgHAAgLQAAgPAJgIQAJgJAQABQAJAAAGADQAGACAEAFQADAFACAGIACANIgUAEIgCgKQgBgFgCgDQgCgDgGAAQgFAAgDAEQgCADAAAFQAAAGACAFQADAEAFAEIAQAPQAIAGAFAIQAGAKABANQAAAIgFAIQgEAHgHAEQgIAFgJgBQgMAAgHgEgAgSA+QgIgFgFgJQgEgIAAgNIAUgFQABAJABAFQABAGAEADQADADAFAAQAFAAADgDQACgEAAgFQgBgJgDgFQgEgGgGgFIgQgNQgGgGgFgIQgEgHAAgLQAAgPAJgIQAJgJAPABQAJAAAGADQAGACADAFQAEAFACAGIACANIgUAEIgBgKQgBgFgDgDQgCgDgFAAQgFAAgDAEQgCADgBAFQABAGACAFQACAEAGAEIAPAPQAIAGAGAIQAFAKAAANQAAAIgDAIQgFAHgHAEQgHAFgKgBQgLAAgHgEgAndA9QgIgGgEgJQgDgKAAgOIAAhWIAYAAIAABaIAAALQABAFADADQADADAGAAQAGAAADgDQACgDABgFIACgLIAAhaIAWAAIAABWQAAAOgCAKQgEAJgIAGQgIAGgOgBQgPABgHgGgAr6A9QgIgGgDgJQgDgKAAgOIAAhWIAXAAIAABaIAAALQABAFADADQAEADAFAAQAHAAACgDQADgDABgFIABgLIAAhaIAXAAIAABWQAAAOgDAKQgEAJgHAGQgIAGgPgBQgOABgIgGgAMcBAIAAiAIAYAAIAACAgALDBAIAAiAIAfAAQAPAAAJAEQAJAEAEAKQADAIAAAOIAAAuQAAAOgDAKQgEAJgJAFQgJAEgOAAgALbAwIAHAAQAIAAADgDQAEgDAAgFIACgNIAAgyIgCgMQgBgFgDgCQgEgCgHAAIgHAAgAH+BAIAAiAIAYAAIAABwIAgAAIAAAQgAGsBAIAAiAIAYAAIAACAgAE6BAIgFgdIgYAAIgEAdIgXAAIAaiAIAZAAIAaCAgAEgATIASAAIgJg1gADhBAIgQg7IgKAAIAAA7IgYAAIAAiAIAfAAQANAAAJADQAJADAFAHQAEAIAAANQABAIgCAGQgCAGgDAFQgDAEgHABIASBAgADHgIIAHAAQAHAAAEgCQAEgCABgFQADgFAAgGQAAgKgEgFQgEgFgKAAIgIAAgACDBAIAAiAIAYAAIAACAgAAvBAIAAiAIAlAAQAMAAAHAEQAIAEADAJQADAIABAMQgBANgEAHQgEAHgIADQgHAEgLAAIgNAAIAAA5gABGgIIAJAAQAGAAAEgCQAEgCABgFQABgEAAgGQAAgIgBgEQgBgEgDgCQgEgCgHAAIgJAAgAhDBAIgfhMIAABMIgVAAIAAiAIARAAIAfBJIAAhJIAUAAIAACAgAiiBAIAAiAIAXAAIAACAgAjtBAIgfhMIAABMIgUAAIAAiAIAQAAIAfBJIAAhJIAUAAIAACAgAlMBAIAAiAIAXAAIAACAgAmQBAIAAiAIAYAAIAABwIAfAAIAAAQgAo/BAIAAiAIAmAAQALAAAIAEQAHAEADAJQAEAIAAAMQAAANgFAHQgEAHgHADQgIAEgKAAIgOAAIAAA5gAoogIIAJAAQAHAAADgCQAEgCABgFQACgEAAgGQAAgIgCgEQgBgEgDgCQgDgCgIAAIgJAAgApkBAIgChZIgTBZIgOAAIgShZIgDBZIgRAAIACiAIAYAAIATBZIAUhZIAXAAIADCAgAspBAIgWg6IgFAKIAAAwIgYAAIAAiAIAYAAIAAA5IAZg5IAWAAIgYA6IAbBGgANIA1IAAgWIAVAAIAAAWgANIAAIAAgWIAVAAIAAAWg");
	this.shape.setTransform(1.4,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-8.3,172.2,13.3);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHYByQgLgDgHgKIgEgIIgEgLIgBgPIgBgYIAAibIAwAAIAACbIAAANIACAHQACACACABIAIABIAHgBQACgBACgCQACgCgBgFIABgNIAAibIAvAAIAACbIgBAYIgDAPIgCALIgFAIIgHAIQgEADgGACQgGACgIAAIgTABQgWABgLgEgAAAByQgLgDgGgKIgFgIIgDgLIgCgPIgBgYIAAibIAwAAIAACbIAAANIABAHQADACACABIAHABIAHgBQADgBACgCQABgCAAgFIABgNIAAibIAvAAIAACbIgBAYIgDAPIgDALIgEAIIgIAIQgEADgFACQgHACgIAAIgTABQgVABgLgEgAlcBrQgOgLAAgaIAAgSIADgPIAnAAIgBAFIAAAEQAAANADAFQADAFAIAAQAKAAADgFQACgEAAgOQAAgIgCgFQgDgFgGgEIgLgHIgNgFIgLgGQgGgDgFgEQgJgHgCgOQgCgOAAgXQAAgQADgLQACgLAHgHQAGgGAKgDQALgEARAAQAQABAJACQALACAGAGQAHAGADAJQADAKAAAPIAAAOIgDAKIgnAAIABgEIAAgGQAAgLgCgDQgDgFgJAAQgJAAgCAFQgCADgBALQABAKACAEQACAEAGAEIANAGIALAFIAJAEIAJAFIAJAIQADADACAGQADAHABAKIABAXQAAAVgCANQgEANgGAJQgHAHgLAEQgMAEgRgBQgcAAgNgKgANeByIg2h5IgCAAIAAB5IgqAAIAAjiIAuAAIAgBOIABAAIAAhOIAsAAIAADigAK3ByIAAjiIAwAAIAADigAJJByIAAjiIAvAAIAACvIAwAAIAAAzgAE3ByIAAjiIBEAAQAPAAAKADQAKAEAFAKQAGAJADAOQACAQAAAVQAAAXgCAOQgDAPgGAKQgFAJgKAFQgKAEgPAAIgVAAIAABFgAFmgBIANAAQAGAAADgHQACgIAAgUQAAgSgCgFQgEgGgHAAIgLAAgAD3ByIAAiHIgBAAIgjCHIgUAAIgjiHIgCAAIAACHIgrAAIAAjiIBCAAIAWBiIACAAIAYhiIBCAAIAADigAhdByIgdhmIgCAAIAAAIIAAAIIAABWIgwAAIAAjiIAwAAIAABSIAAAHIAAAFIACAAIAfheIAyAAIAAABIgkBlIAmB6IAAACgAmjByIgFg1IgWAAIgEA1IgwAAIAZjiIBPAAIAXDigAm9APIATAAIgIhQIgDAAgAp0ByIAAjiIBCAAQAQgBAKAEQAKAEAGAGQAHAIACALQACAMAAAQIAAAVQgBAHgCAFQgCAGgDADIgIAHIAAABIAIAFQAEACADAFQACAFABAKIABAbQAAARgCALQgCAMgGAHQgGAIgKADQgKADgPABgApFBEIAPAAQAGAAAEgFQACgEAAgNQAAgPgCgHQgDgGgGgBIgQAAgApFgTIANAAQAHAAACgGQADgFAAgQQAAgNgDgEQgDgFgHABIgMAAgArsByIAAjiIBkAAIAAAwIg1AAIAAAnIA0AAIAAAtIg0AAIAAArIA1AAIAAAzgAt2ByIAAjiIBDAAQAQgBAJAEQALAEAFAGQAHAIACALQADAMAAAQIgBAVQgBAHgCAFQgBAGgEADIgHAHIAAABIAIAFQADACADAFQADAFABAKIABAbQAAARgDALQgCAMgFAHQgGAIgKADQgKADgQABgAtHBEIAPAAQAGAAAEgFQADgEAAgNQAAgPgDgHQgDgGgGgBIgQAAgAtHgTIAOAAQAGAAADgGQADgFgBgQQAAgNgCgEQgDgFgHABIgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-11.7,177.4,23.5);


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
p.nominalBounds = new cjs.Rectangle(-196,-294,196,735.1);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG8BrQgOgLAAgaIABgSIACgPIAnAAIgBAFIAAAEQAAANADAFQADAFAJAAQAJAAADgFQADgEAAgOQAAgIgDgFQgDgFgGgEIgLgHIgNgFIgLgGQgGgDgFgEQgJgHgCgOQgCgOAAgXQAAgQADgLQACgLAHgHQAGgGALgDQAKgEARAAQAQABAKACQAKACAHAGQAGAGADAJQADAKAAAPIAAAOIgCAKIgnAAIAAgEIAAgGQAAgLgCgDQgDgFgJAAQgJAAgCAFQgCADAAALQAAAKACAEQADAEAFAEIANAGIALAFIAJAEIAJAFIAJAIQAEADACAGQACAHABAKIABAXQAAAVgCANQgDANgHAJQgHAHgLAEQgMAEgRgBQgcAAgNgKgAA0ByQgMgEgGgLIgFgMIgDgQIgCgcIgBgrIABgrIACgbIADgQIAFgMQADgFAFgEQAEgDAGgCIAOgEIATgBQAVAAAMAFQALAEAGAKIAFAMQACAFABALIADAbIAAArIAAArIgDAcQgBAKgCAGIgFAMQgDAFgEADQgEAEgGADIgOACIgTABQgWAAgLgDgABNhEQgDABgBADIgBAFIgBAKIgBATIAAAdIAAAdIABASIABAKIABAFQABADADACQACABAGAAQAGAAACgBQACgCACgDIABgFIABgKIAAgSIAAgdIAAgdIAAgTIgBgKIgBgFQgCgDgCgBQgCgCgGAAQgGAAgCACgAlOBrQgNgLAAgaIAAgSIACgPIAoAAIgBAFIAAAEQAAANADAFQACAFAJAAQAJAAADgFQADgEAAgOQAAgIgDgFQgCgFgGgEIgMgHIgMgFIgMgGQgGgDgEgEQgKgHgBgOQgCgOAAgXQAAgQACgLQADgLAGgHQAGgGALgDQALgEARAAQAPABAKACQALACAGAGQAHAGADAJQADAKAAAPIgBAOIgCAKIgnAAIABgEIAAgGQAAgLgDgDQgDgFgIAAQgJAAgCAFQgDADAAALQAAAKADAEQACAEAGAEIAMAGIALAFIAKAEIAJAFIAIAIQAEADACAGQADAHABAKIABAXQAAAVgDANQgDANgHAJQgGAHgMAEQgLAEgRgBQgdAAgNgKgAIxByIAAjiIAwAAIAADigAF1ByIgEg1IgXAAIgEA1IgvAAIAYjiIBPAAIAXDigAFcAPIATAAIgIhQIgEAAgADtByIgBgHIgCgJIgCgSIgEgfIgCgNIgCgHIgDgDIgEgBIgHAAIAABZIgvAAIAAjiIBFAAQAPgBAKAEQAKAEAGAGQAFAIADALQACAMAAAQIgBAdQgCAJgCAGQgCAGgEACIgJAFIAAACIAEADIAEAGQACAFADAMQACALACATIADAXIACANIABAIIACAFIAAACgADSgRIANAAQAHABADgGQACgFAAgRQAAgMgDgGQgDgEgHAAIgMAAgAhSByIAAjiIAvAAIAACvIAwAAIAAAzgAjZByIAAjiIBEAAQAPAAAKADQAKAEAGAKQAGAJACAOQACAQAAAVQAAAXgCAOQgCAPgGAKQgGAJgKAFQgKAEgPAAIgVAAIAABFgAiqgBIANAAQAGAAADgHQADgIAAgUQAAgSgDgFQgEgGgHAAIgLAAgAmaByIgchmIgDAAIAAAIIAAAIIAABWIgwAAIAAjiIAwAAIAABSIAAAHIAAAFIADAAIAeheIAyAAIAAABIgjBlIAlB6IAAACgApgByIAAjiIBkAAIAAAwIg1AAIAAAnIA0AAIAAAtIg0AAIAAArIA1AAIAAAzg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-11.7,121.9,23.5);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFJBrQgOgLAAgaIABgSIACgPIAnAAIgBAFIAAAEQAAANADAFQADAFAJAAQAJAAADgFQADgDAAgPQAAgIgDgFQgDgFgGgEIgLgHIgNgFIgLgGQgGgDgFgDQgJgJgCgNQgCgOAAgXQAAgQADgLQACgLAHgHQAGgGALgEQAKgDARAAQAQABAKACQAKACAHAGQAGAGADAKQADAJAAAPIAAAOIgCAKIgnAAIAAgEIAAgGQAAgLgCgDQgDgFgJAAQgJAAgCAFQgCADAAALQAAAKACAEQADAEAFAEIANAGIALAFIAJAEIAJAGIAJAHQAEADACAGQACAHABAKIABAXQAAAUgCAOQgDAOgHAIQgHAHgLAEQgMAEgRgBQgcAAgNgKgAkRBrQgNgLAAgaIAAgSIACgPIAoAAIgBAFIAAAEQAAANADAFQACAFAJAAQAJAAADgFQADgDAAgPQAAgIgDgFQgCgFgGgEIgMgHIgMgFIgMgGQgGgDgEgDQgKgJgBgNQgCgOAAgXQAAgQACgLQADgLAGgHQAGgGALgEQALgDARAAQAPABAKACQALACAGAGQAHAGADAKQADAJAAAPIgBAOIgCAKIgnAAIABgEIAAgGQAAgLgDgDQgDgFgIAAQgJAAgCAFQgDADAAALQAAAKADAEQACAEAGAEIAMAGIALAFIAKAEIAJAGIAIAHQAEADACAGQADAHABAKIABAXQAAAUgDAOQgDAOgHAIQgGAHgMAEQgLAEgRgBQgdAAgNgKgAG+ByIAAjiIAwAAIAADigAECByIgEg1IgXAAIgEA1IgvAAIAYjiIBPAAIAXDigADpAPIATAAIgIhQIgEAAgAB6ByIgBgHIgCgJIgCgSIgEgfIgCgNIgCgHIgDgDIgEgBIgHAAIAABZIgvAAIAAjiIBFAAQAPAAAKADQAKAEAGAGQAFAIADALQACAMAAAQIgBAcQgCAKgCAGQgCAGgEACIgJAFIAAACIAEADIAEAGQACAGADALQACALACATIADAXIACANIABAIIACAFIAAACgABfgRIANAAQAHABADgGQACgGAAgQQAAgMgDgGQgDgEgHAAIgMAAgAgUByIAAjiIAvAAIAADigAicByIAAjiIBEAAQAPAAAKADQAKAFAGAIQAGAKACAOQACAQAAAVQAAAXgCAOQgCAPgGAKQgGAJgKAFQgKAEgPAAIgVAAIAABFgAhtAAIANAAQAGgBADgHQADgIAAgUQAAgSgDgGQgEgFgHAAIgLAAgAlGByIg2h5IgCAAIAAB5IgqAAIAAjiIAuAAIAgBOIABAAIAAhOIAsAAIAADigAntByIAAjiIAwAAIAADig");
	this.shape.setTransform(2.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-11.7,98.9,23.5);


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
	this.shape.graphics.f("#FFFFFF").s().p("ADbBrQgOgLAAgaIAAgSIADgPIAnAAIgBAFIAAAEQAAANADAFQADAFAIAAQAKAAADgFQACgDAAgPQAAgIgCgFQgDgFgGgEIgLgHIgNgFIgLgGQgGgDgFgEQgJgIgCgNQgCgOAAgXQAAgQADgLQACgLAHgHQAGgGAKgEQALgDARAAQAQABAJACQALACAGAGQAHAGADAJQADAKAAAPIAAAOIgDAKIgnAAIABgEIAAgGQAAgLgCgDQgDgFgJAAQgJAAgCAFQgCADAAALQAAAKACAEQACAEAGAEIANAGIALAFIAJAEIAJAGIAJAHQADADACAGQADAHABAKIABAXQAAAUgCAOQgEAOgGAIQgHAHgLAEQgMAEgRgBQgcAAgNgKgACUByIgFg1IgWAAIgEA1IgwAAIAZjiIBPAAIAXDigAB6APIATAAIgIhQIgDAAgAg8ByIAAjiIBBAAQAQAAAKADQAKAEAGAGQAHAIACALQACAMAAAQIAAAVQgBAIgCAFQgCAFgDADIgIAHIAAACIAIADQAEADADAFQACAGABAJIABAbQAAARgCALQgCAMgGAHQgGAIgKADQgKADgPABgAgNBEIAOAAQAGAAAEgFQACgEAAgNQAAgPgCgHQgDgGgGgBIgPAAgAgNgTIANAAQAGAAACgGQADgFAAgQQAAgNgDgEQgDgFgGABIgMAAgAi0ByIAAjiIBkAAIAAAwIg1AAIAAAnIA0AAIAAAtIg0AAIAAArIA1AAIAAAzgAk+ByIAAjiIBDAAQAQAAAJADQALAEAFAGQAHAIACALQADAMAAAQIgBAVQgBAIgCAFQgBAFgEADIgHAHIAAACIAIADQADADADAFQADAGABAJIABAbQAAARgDALQgCAMgFAHQgGAIgKADQgKADgQABgAkPBEIAPAAQAGAAAEgFQADgEAAgNQAAgPgDgHQgDgGgGgBIgQAAgAkPgTIAOAAQAGAAADgGQADgFgBgQQAAgNgCgEQgDgFgHABIgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-11.7,63.8,23.5);


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
	mask.graphics.p("AobF3IAArtIQ3AAIAALtg");
	mask.setTransform(54,37.5);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.4158,0.4158);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,108,75), null);


(lib.Tween4_1 = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(-160,-240,106.7,400);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},120).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(78));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_graphics_97,x:155.5,y:80.8}).wait(109));

	// t2
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(62.5,119.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).to({x:61.7,y:79.8},7).wait(102));

	// mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_97 = new cjs.Graphics().p("A3MCvIAAldMAuZAAAIAAFdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_1_graphics_97,x:155.5,y:50.55}).wait(109));

	// t2
	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(102.6,91.55);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({x:101.8,y:51.55},7).wait(102));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,98.3);


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
	var mask_graphics_1 = new cjs.Graphics().p("AwyFZIAAlAMAiNAAAIAAFAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:111.5,y:34.525}).wait(205));

	// t1
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(74.4,83.55);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:51.55},8).wait(197));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AxGCgIAAk/MAiNAAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:113.5,y:20.05}).wait(205));

	// t1
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(45,51.55);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:23.55},8).wait(197));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.4,69.1);


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


(lib.item3a_1 = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(-164,-242,324,484);


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


(lib.Layer1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(65,45.1,1,1,0,0,0,58,37.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADA").s().p("AgHAmIAFgRQACgKAAgLQAAgIgBgIIgGgVIAGAAQAEAJACAKQADAJAAAJQAAAJgDAKQgCAKgEAJg");
	this.shape.setTransform(205.075,72.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFADA").s().p("AgKAZQgEgEgBgIIAJgBQAAADACADQABAAAAABQABAAAAAAQABABABAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgGgCgCQgBgCgDAAQgDAAgEADIgHgBIAFgdIAXAAIAAAKIgQAAIgCAKIAFgCQAGAAAEAFQAFAFAAAJQAAAHgEAHQgFAGgHAAQgGAAgEgEg");
	this.shape_1.setTransform(202.175,71.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFADA").s().p("AgKAXQgFgHAAgQQAAgOAFgHQAEgHAIAAQAFAAADADQAEAEABAHIgJABQAAgGgFAAQgBAAgDADQgBADgBAKIAEgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAGAAAEAFQAEAEAAAJQAAAKgEAEQgFAFgGAAQgGAAgFgGgAgDACQgBACAAAFQAAAGACACQABADACAAQABAAAAAAQABAAABAAQAAgBAAAAQABgBAAAAQACgCAAgGQAAgGgCgCQgBgCgDAAQgBAAgDACg");
	this.shape_2.setTransform(198.375,71.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFADA").s().p("AgKAZQgEgEgBgIIAJgBQAAADACADQABAAAAABQABAAAAAAQABABABAAQAAAAAAAAQADAAACgDQACgEAAgEQAAgFgCgDQgDgCgCAAQgDAAgDADIgIgBIAFgdIAXAAIAAAKIgQAAIgCAKIAFgCQAGAAAEAFQAFAFAAAJQAAAHgEAHQgFAGgHAAQgGAAgEgEg");
	this.shape_3.setTransform(194.675,71.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFADA").s().p("AgKAXQgFgHAAgQQAAgOAFgHQAFgHAGAAQAGAAADADQAEAEABAHIgJABQAAgGgFAAQgCAAgCADQgCAEgBAJIAEgEIAEgBQAGAAADAFQAFAFAAAIQAAAJgFAFQgEAFgHAAQgGAAgEgGgAgDACQgCACAAAFQAAAGACACQADADABAAQACAAACgCQACgCAAgGQAAgGgCgCQgCgCgDAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABg");
	this.shape_4.setTransform(190.925,71.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFADA").s().p("AgIAGIAAgKIARAAIAAAKg");
	this.shape_5.setTransform(187.875,72.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFADA").s().p("AgIAcQAAgLAEgNQAEgLAFgKIgTAAIAAgKIAdAAIAAAIQgDAEgEAJQgFAHgBAKQgCALAAAGg");
	this.shape_6.setTransform(184.85,71.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFADA").s().p("AgIAcQAAgLAEgNQADgLAGgKIgTAAIAAgKIAdAAIAAAIQgDAEgEAJIgGARQgCALAAAGg");
	this.shape_7.setTransform(181.1,71.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFADA").s().p("AABAdIAAgpQgDAFgIAEIAAgKQAEgCAEgEQADgEACgFIAHAAIAAA5g");
	this.shape_8.setTransform(177.1,71.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFADA").s().p("AgIAGIAAgKIARAAIAAAKg");
	this.shape_9.setTransform(174.375,72.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFADA").s().p("AgKAXQgEgGAAgRQAAgPAEgHQAEgGAGAAQAHAAAEAGQAEAGAAAQQAAARgEAGQgEAGgHAAQgGAAgEgGgAgDgQQgCAEAAAMQAAANACAEQABADACAAQADAAABgDQACgFAAgMQAAgLgCgFQgBgDgDAAQgCAAgBADg");
	this.shape_10.setTransform(171.325,71.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFADA").s().p("AgKAXQgEgGAAgRQAAgPAEgHQAEgGAGAAQAHAAAEAGQAFAHgBAPQABAQgFAHQgEAGgHAAQgGAAgEgGgAgEgQQgBAEAAAMQAAANABAEQACADACAAQACAAACgDQACgEAAgNQAAgMgCgEQgCgDgCAAQgCAAgCADg");
	this.shape_11.setTransform(167.6,71.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFADA").s().p("AgKAZQgFgFAAgIQAAgEADgFIAFgFQgDgCgBgCQgCgDAAgFQAAgHAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGQAAAFgCADIgEAEQAEACACADQACADAAAGQAAAFgCAEQgCAEgEACQgDACgFAAQgFAAgFgEgAgDAEQgDADAAAEQAAAFADACQABACACAAQADAAACgCQABgCABgFQgBgEgBgDQgCgCgDAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAABAAAAgAgDgSQgCACAAADQAAAEACABQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBAAgEQAAgDgCgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_12.setTransform(163.85,71.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFADA").s().p("AgKAXQgEgGAAgRQAAgQAEgGQAEgGAGAAQAHAAAEAGQAEAHAAAPQAAAQgEAHQgEAGgHAAQgGAAgEgGgAgDgQQgCAEAAAMQAAANACAEQABADACAAQADAAABgDQACgEAAgNQAAgMgCgEQgBgDgDAAQgCAAgBADg");
	this.shape_13.setTransform(160.125,71.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFADA").s().p("AACAmQgEgJgCgKQgDgJAAgKQAAgJADgKQACgJAEgJIAGAAIgGAVQgBAIAAAIQAAALACAJIAFASg");
	this.shape_14.setTransform(157.175,72.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFADA").s().p("AAQAjIgFgQIgWAAIgFAQIgMAAIAWhFIAMAAIAXBFgAgHAIIAPAAIgIgag");
	this.shape_15.setTransform(209.625,41.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFADA").s().p("AALAjIgXgtIAAAtIgKAAIAAhFIALAAIAXAuIAAguIALAAIAABFg");
	this.shape_16.setTransform(203.7,41.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFADA").s().p("AgVAjIAAhFIAqAAIAAAMIgeAAIAAAPIAcAAIAAALIgcAAIAAAUIAfAAIAAALg");
	this.shape_17.setTransform(198.075,41.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFADA").s().p("AALAjIgPghIgKAMIAAAVIgLAAIAAhFIALAAIAAAfIAXgfIAQAAIgWAbIAXAqg");
	this.shape_18.setTransform(192.55,41.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFADA").s().p("AAMAjIgNgZQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgGgBIgDAAIAAAdIgLAAIAAhFIAZAAQAIAAAEACQAEABADAFQACAFAAAHQAAAIgDAFQgFAEgHABIAGAGIAOAZgAgOgEIAJAAIAJgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQABgCABgDQgBgEgBgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgIAAIgKAAg");
	this.shape_19.setTransform(186.6,41.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFADA").s().p("AgVAjIAAhFIAqAAIAAAMIgfAAIAAAPIAcAAIAAALIgcAAIAAAUIAgAAIAAALg");
	this.shape_20.setTransform(180.7,41.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFADA").s().p("AgFAjIAAg5IgRAAIAAgMIAtAAIAAAMIgSAAIAAA5g");
	this.shape_21.setTransform(175.35,41.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFADA").s().p("AAQAjIgFgQIgWAAIgFAQIgMAAIAWhFIAMAAIAXBFgAgHAIIAPAAIgIgag");
	this.shape_22.setTransform(167.775,41.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFADA").s().p("AgFAjIAAgdIgVgoIAOAAIAMAcIAOgcIANAAIgVAoIAAAdg");
	this.shape_23.setTransform(162.8,41.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFADA").s().p("AAQAjIgFgQIgWAAIgFAQIgMAAIAWhFIAMAAIAXBFgAgHAIIAPAAIgIgag");
	this.shape_24.setTransform(157.825,41.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFADA").s().p("AgXAMIAMgBQACAOAJAAQAGgBADgDQADgBAAgGIgBgEIgDgCIgKgEQgIgCgDgCQgEgCgBgFQgCgEAAgFQAAgFADgFQABgEAGgEQAEgBAGAAQALgBAFAGQAGAFAAALIgMAAQAAgEgDgEQgCgCgFAAQgEAAgDACQgCACAAADQAAADACACIAKAEQAJADAEACQAEADABAEQACAEABAGQAAAKgGAGQgFAGgNABQgVgBgCgYg");
	this.shape_25.setTransform(152.05,41.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFADA").s().p("AAJAdIgMgbIgIAKIAAARIgJAAIAAg5IAJAAIAAAaIASgaIANAAIgSAXIATAig");
	this.shape_26.setTransform(231.025,62.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFADA").s().p("AgPAXQgHgJAAgNQAAgKAEgGQADgHAEgDQAGgEAFAAQAKAAAHAIQAGAHAAAOQAAAOgHAJQgFAHgLAAQgJAAgGgHgAgIgOQgEAEAAAKQAAAKAEAFQAEAFAEAAQAGAAAEgFQADgFAAgKQAAgKgDgEQgEgFgGAAQgFAAgDAFg");
	this.shape_27.setTransform(225.75,62.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFADA").s().p("AAJAdIgMgbIgIAKIAAARIgJAAIAAg5IAJAAIAAAaIASgaIANAAIgSAXIATAig");
	this.shape_28.setTransform(220.975,62.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFADA").s().p("AgPAXQgHgIAAgOQAAgJADgHQADgIAFgCQAGgEAFAAQAKAAAGAIQAHAHAAAOQAAAPgHAIQgGAHgKAAQgKAAgFgHgAgIgOQgEAFAAAJQAAAKAEAFQADAFAFAAQAGAAADgFQAEgFAAgKQAAgKgEgEQgDgFgGAAQgFAAgDAFg");
	this.shape_29.setTransform(215.725,62.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFADA").s().p("AAKAdIgLgVIgDgCIgFgBIgCAAIAAAYIgJAAIAAg5IAUAAQAHAAADACQADABACAEQACAEAAAFQAAAIgDADQgDADgGACQADABACADIAFAKIAGALgAgLgDIAHAAIAHgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgOgBg");
	this.shape_30.setTransform(210.925,62.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFADA").s().p("AgRAdIAAg5IAiAAIAAAKIgYAAIAAANIAWAAIAAAJIgWAAIAAAPIAZAAIAAAKg");
	this.shape_31.setTransform(206.1,62.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFADA").s().p("AAOAdIAAgsIgKAsIgIAAIgJgsIAAAsIgJAAIAAg5IAOAAIAIAnIAIgnIAPAAIAAA5g");
	this.shape_32.setTransform(201.025,62.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFADA").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_33.setTransform(195.375,62.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFADA").s().p("AgEAdIAAgvIgOAAIAAgKIAlAAIAAAKIgOAAIAAAvg");
	this.shape_34.setTransform(192.375,62.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFADA").s().p("AAJAdIgSglIAAAlIgJAAIAAg5IAJAAIATAmIAAgmIAJAAIAAA5g");
	this.shape_35.setTransform(187.875,62.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFADA").s().p("AgRAdIAAg5IAiAAIAAAKIgZAAIAAANIAYAAIAAAJIgYAAIAAAPIAaAAIAAAKg");
	this.shape_36.setTransform(183.3,62.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFADA").s().p("AAJAdIAAgZIgRAAIAAAZIgKAAIAAg5IAKAAIAAAXIARAAIAAgXIAKAAIAAA5g");
	this.shape_37.setTransform(178.575,62.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFADA").s().p("AAKAdIgLgVIgDgCIgFgBIgCAAIAAAYIgJAAIAAg5IAUAAQAHAAADACQADABACAEQACAEAAAFQAAAIgDADQgDADgGACQADABACADIAFAKIAGALgAgLgDIAHAAIAHgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgOgBg");
	this.shape_38.setTransform(173.975,62.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFADA").s().p("AgRAdIAAg5IAiAAIAAAKIgYAAIAAANIAXAAIAAAJIgXAAIAAAPIAZAAIAAAKg");
	this.shape_39.setTransform(169.15,62.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFADA").s().p("AgTAdIAAg5IATAAQAHAAADACQADACACADQACADAAAFQAAAFgCACQgBAEgDABQAEABACADQADAEAAAFQAAAGgDAFQgDAFgFAAIgMABgAgJATIAPAAIADgDIABgEIgBgFQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgBIgHAAgAgJgFIAMAAIAEgCQABgCAAgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDgCIgNAAg");
	this.shape_40.setTransform(164.525,62.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFADA").s().p("AAJAdIgSglIAAAlIgJAAIAAg5IAKAAIASAmIAAgmIAJAAIAAA5g");
	this.shape_41.setTransform(157.675,62.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFADA").s().p("AAOAdIgFgNIgRAAIgEANIgLAAIATg5IAJAAIATA5gAgGAGIAMAAIgGgUg");
	this.shape_42.setTransform(152.825,62.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFADA").s().p("AAJAdIgSglIAAAlIgIAAIAAg5IAJAAIASAmIAAgmIAIAAIAAA5g");
	this.shape_43.setTransform(148,62.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFADA").s().p("AANAdIgEgNIgSAAIgEANIgKAAIATg5IAJAAIATA5gAgGAGIAMAAIgGgUg");
	this.shape_44.setTransform(143.175,62.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFADA").s().p("AgEAdIAAgYIgRghIALAAIAKAXIALgXIALAAIgSAhIAAAYg");
	this.shape_45.setTransform(139.15,62.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFADA").s().p("AANAdIgEgNIgSAAIgEANIgKAAIATg5IAJAAIATA5gAgGAGIAMAAIgGgUg");
	this.shape_46.setTransform(135.075,62.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFADA").s().p("AgQAdIAAg5IAKAAIAAAvIAXAAIAAAKg");
	this.shape_47.setTransform(130.775,62.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFADA").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_48.setTransform(232.65,54.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFADA").s().p("AALAjIgWgtIAAAtIgLAAIAAhFIAMAAIAWAuIAAguIALAAIAABFg");
	this.shape_49.setTransform(228.75,52.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFADA").s().p("AAQAjIgFgQIgWAAIgFAQIgMAAIAXhFIALAAIAXBFgAgHAHIAPAAIgIgZg");
	this.shape_50.setTransform(222.825,52.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFADA").s().p("AALAjIgPghIgKAMIAAAVIgLAAIAAhFIALAAIAAAfIAXgfIAQAAIgWAbIAXAqg");
	this.shape_51.setTransform(217.2,52.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFADA").s().p("AgTAbQgIgJAAgSQAAgMADgIQAEgHAHgEQAFgFAIAAQANAAAHAKQAIAJAAARQAAASgIAJQgIAJgMAAQgLAAgIgJgAgKgSQgFAHAAALQAAAMAFAGQAEAGAGAAQAHAAAEgGQAFgGAAgMQAAgLgFgHQgEgFgHAAQgGAAgEAFg");
	this.shape_52.setTransform(210.75,52.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFADA").s().p("AAMAjIgOgZIgDgDIgGgBIgDAAIAAAdIgLAAIAAhFIAYAAQAJAAAEACQAEABADAFQADAFAAAHQgBAIgDAFQgFAEgHABIAGAGIAHAMIAHANgAgOgEIAJAAIAJgBIAEgDIABgFQAAgFgBgBQgBgCgDgBIgIAAIgKAAg");
	this.shape_53.setTransform(204.85,52.075);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFADA").s().p("AgSAbQgJgJAAgSQAAgKAEgKQADgHAGgEQAGgFAIAAQANAAAHAKQAIAJAAARQAAASgIAJQgIAJgMAAQgLAAgHgJgAgKgSQgFAHAAALQAAAMAFAGQAFAGAFAAQAHAAAEgGQAFgGAAgMQAAgLgEgHQgFgFgHAAQgGAAgEAFg");
	this.shape_54.setTransform(198.4,52.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFADA").s().p("AgMAgQgGgEgEgIQgEgIAAgMQAAgMAEgHQAEgJAGgDQAGgFAHAAQALABAGAFQAGAEACALIgLADQgCgFgDgDQgDgDgGAAQgGAAgFAFQgEAGAAAMQAAAMAFAGQAEAGAGAAQAFAAACgBQAFgCADgDIAAgJIgOAAIAAgLIAZAAIAAAbQgDAFgIADQgGADgHAAQgIABgHgFg");
	this.shape_55.setTransform(191.95,52.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFADA").s().p("AgMAgQgGgEgEgIQgEgIAAgMQAAgKAEgJQAEgJAGgDQAGgFAHAAQALABAGAFQAGAEACALIgLADQgCgFgDgDQgDgDgGAAQgGAAgFAFQgEAGAAAMQAAAMAFAGQAEAGAGAAQAFAAACgBQAEgCAEgDIAAgJIgOAAIAAgLIAZAAIAAAbQgEAFgHADQgHADgHAAQgHABgHgFg");
	this.shape_56.setTransform(185.55,52.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFADA").s().p("AALAjIgWgtIAAAtIgLAAIAAhFIAMAAIAWAuIAAguIALAAIAABFg");
	this.shape_57.setTransform(179.4,52.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFADA").s().p("AgVAjIAAhFIAqAAIAAAMIgeAAIAAAPIAcAAIAAALIgcAAIAAATIAfAAIAAAMg");
	this.shape_58.setTransform(173.8,52.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFADA").s().p("AgFAjIAAg5IgRAAIAAgMIAtAAIAAAMIgRAAIAAA5g");
	this.shape_59.setTransform(168.45,52.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFADA").s().p("AAMAjIgIgPQgEgIgCgCIgDgDIgGgBIgCAAIAAAdIgMAAIAAhFIAYAAQAJAAAEACQAEABACAFQADAEAAAIQAAAJgEAEQgEAEgHABIAGAGIAHAMIAHANgAgNgEIAIAAIAKgBIADgDIABgFIgBgGIgEgDIgIAAIgJAAg");
	this.shape_60.setTransform(160.9,52.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFADA").s().p("AgVAjIAAhFIAqAAIAAAMIgeAAIAAAPIAcAAIAAALIgcAAIAAATIAfAAIAAAMg");
	this.shape_61.setTransform(155,52.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFADA").s().p("AALAjIgPghIgKAMIAAAVIgLAAIAAhFIALAAIAAAfIAXgfIAQAAIgWAbIAXAqg");
	this.shape_62.setTransform(149.475,52.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFADA").s().p("AAMAjIgXgtIAAAtIgLAAIAAhFIALAAIAXAuIAAguIALAAIAABFg");
	this.shape_63.setTransform(143.2,52.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFADA").s().p("AAQAjIgFgQIgWAAIgFAQIgMAAIAXhFIALAAIAXBFgAgHAHIAPAAIgIgZg");
	this.shape_64.setTransform(137.275,52.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFADA").s().p("AALAjIgPghIgJAMIAAAVIgMAAIAAhFIAMAAIAAAfIAWgfIAQAAIgWAbIAXAqg");
	this.shape_65.setTransform(131.65,52.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFADA").s().p("AgFAJQACgBADgDQAAgCAAgDIgEAAIAAgOIAKAAIAAAKQAAAHgCAEQgDAFgEADg");
	this.shape_66.setTransform(221.15,34.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFADA").s().p("AALAjIgPghIgKAMIAAAVIgLAAIAAhFIALAAIAAAfIAXgfIAQAAIgWAbIAXAqg");
	this.shape_67.setTransform(217.375,30.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFADA").s().p("AgTAcQgIgKAAgSQAAgKAEgJQADgIAGgEQAHgFAHAAQAMAAAIAKQAIALAAAPQAAASgIAKQgHAJgNgBQgMABgHgJgAgLgRQgEAFAAAMQAAANAFAFQAEAHAGgBQAHABAEgHQAFgFAAgNQAAgMgEgGQgFgFgHAAQgGAAgFAGg");
	this.shape_68.setTransform(210.925,30.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFADA").s().p("AALAjIgPghIgJAMIAAAVIgMAAIAAhFIAMAAIAAAfIAWgfIAQAAIgWAbIAXAqg");
	this.shape_69.setTransform(205.025,30.425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFADA").s().p("AgTAcQgIgKAAgSQAAgKAEgJQADgIAGgEQAHgFAHAAQAMAAAIAKQAIAJAAARQAAASgIAKQgHAJgNgBQgMABgHgJgAgKgRQgFAFAAAMQAAANAFAFQAEAHAGgBQAHABAFgHQAEgFAAgNQAAgLgEgHQgFgFgHAAQgGAAgEAGg");
	this.shape_70.setTransform(198.575,30.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFADA").s().p("AAMAjIgOgaIgDgCIgGgBIgCAAIAAAdIgMAAIAAhFIAZAAQAIAAAEACQAFACACAEQACAFAAAGQAAAJgEAFQgDAEgIABQAEACACAEIAOAZgAgNgEIAIAAIAJgBQABgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgEQAAgDgBgCIgEgDIgIAAIgJAAg");
	this.shape_71.setTransform(192.675,30.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFADA").s().p("AgVAjIAAhFIAqAAIAAAMIgeAAIAAAPIAbAAIAAALIgbAAIAAATIAfAAIAAAMg");
	this.shape_72.setTransform(186.8,30.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFADA").s().p("AASAjIAAg2IgMA2IgLAAIgLg2IAAA2IgLAAIAAhFIASAAIAJAvIAKgvIASAAIAABFg");
	this.shape_73.setTransform(180.5,30.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFADA").s().p("AAQAjIgFgQIgWAAIgFAQIgMAAIAWhFIAMAAIAXBFgAgHAHIAPAAIgIgZg");
	this.shape_74.setTransform(172.05,30.425);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFADA").s().p("AALAjIgWgtIAAAtIgLAAIAAhFIAMAAIAWAuIAAguIALAAIAABFg");
	this.shape_75.setTransform(166.1,30.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFADA").s().p("AgVAjIAAhFIAqAAIAAAMIgeAAIAAAPIAcAAIAAALIgcAAIAAATIAfAAIAAAMg");
	this.shape_76.setTransform(160.5,30.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFADA").s().p("AANAjIgOgaIgEgCIgGgBIgCAAIAAAdIgMAAIAAhFIAZAAQAIAAAFACQADABADAFQADAFAAAGQgBAIgEAGQgDAEgHABQADACADAEIAGALIAHAOgAgNgEIAJAAIAJgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQACgCgBgEQABgDgCgCIgDgDIgJAAIgJAAg");
	this.shape_77.setTransform(154.95,30.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFADA").s().p("AAQAjIgEgQIgXAAIgFAQIgMAAIAXhFIALAAIAXBFgAgIAHIAPAAIgHgZg");
	this.shape_78.setTransform(148.75,30.425);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFADA").s().p("AALAjIgPghIgJAMIAAAVIgMAAIAAhFIAMAAIAAAfIAXgfIAPAAIgWAbIAXAqg");
	this.shape_79.setTransform(143.1,30.425);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFADA").s().p("AgHAeIAAgQIAPAAIAAAQgAgHgNIAAgQIAPAAIAAAQg");
	this.shape_80.setTransform(217.875,19.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFADA").s().p("AAPApIgfg0IAAA0IgPAAIAAhQIAQAAIAgA1IAAg1IAPAAIAABQg");
	this.shape_81.setTransform(211.85,18.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFADA").s().p("AAXApIgHgTIggAAIgGATIgSAAIAghQIAQAAIAhBQgAgLAIIAWAAIgLgcg");
	this.shape_82.setTransform(203.675,18.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFADA").s().p("AgHApIAAhDIgYAAIAAgNIA/AAIAAANIgYAAIAABDg");
	this.shape_83.setTransform(197,18.25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFADA").s().p("AAXApIgHgTIggAAIgGATIgSAAIAghQIAQAAIAhBQgAgLAIIAVAAIgKgcg");
	this.shape_84.setTransform(190.275,18.25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFADA").s().p("AgSAkQgJgEgFgLQgFgKAAgLQAAgNAFgJQAFgJALgGQAJgEAJAAQAQAAAIAGQAIAHADALIgQADQgDgHgEgCQgEgEgIAAQgJAAgHAHQgGAHAAANQAAANAGAIQAHAHAJAAQAEAAAGgCIAJgFIAAgLIgSAAIAAgMIAjAAIAAAfQgGAFgJAEQgLAEgJAAQgLAAgKgGg");
	this.shape_85.setTransform(181.725,18.25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFADA").s().p("AAQApIggg0IAAA0IgPAAIAAhQIAQAAIAgA1IAAg1IAPAAIAABQg");
	this.shape_86.setTransform(173.275,18.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFADA").s().p("AgHApIAAhQIAPAAIAABQg");
	this.shape_87.setTransform(167.675,18.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFADA").s().p("AARApIgMgSIgHgMQgCgDgEgBIgHgBIgEAAIAAAjIgRAAIAAhQIAjAAQAMAAAGABQAGACADAHQAEAEAAAIQAAAIgGAHQgEAFgMACQAFACAEAFIAJAMIAKARgAgTgFIAMAAQAMAAACgCQADgBACgCQABgCAAgEQAAgEgCgCQgCgCgEgCIgLAAIgNAAg");
	this.shape_88.setTransform(162.35,18.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFADA").s().p("AgeApIAAhQIA7AAIAAANIgqAAIAAASIAnAAIAAANIgnAAIAAAVIAsAAIAAAPg");
	this.shape_89.setTransform(154.25,18.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFADA").s().p("AgeApIAAhQIAbAAQAPAAADABQAHACAEAGQAFAFAAALQAAAHgCAFQgFAFgCACQgEADgFAAQgGACgKAAIgKAAIAAAfgAgNgDIAUgBIAGgEIABgGQAAgFgCgDQgDgDgEgBIgKAAIgIAAg");
	this.shape_90.setTransform(146.7,18.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFADA").s().p("AiaCbQhBhAAAhbQAAhaBBhAQBAhBBaAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAQhaAAhAhBgAiKiKQg5A6AABQQAABRA5A6QA6A6BQAAQBRAAA6g6QA6g6AAhRQAAhQg6g6Qg6g6hRAAQhQAAg6A6g");
	this.shape_91.setTransform(267.975,44.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFADA").s().p("AgMA0IAAgnIgnAAIAAgaIAnAAIAAgmIAZAAIAAAmIAnAAIAAAaIgnAAIAAAng");
	this.shape_92.setTransform(279.125,45.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFADA").s().p("AggBCQgQgOAAgVQAAgMAGgKQAHgKAMgFQgLgEgFgJQgGgIAAgKQAAgQANgMQAMgKAUgBQAUABAMAKQAMAMAAAQQABALgGAHQgFAJgKAEQAMAGAGAHQAHAKAAANQAAAUgNAOQgOANgVgBQgTABgOgLgAgOAMQgGAJAAAHQAAAMAGAHQAHAGAHABQAIAAAHgHQAGgGAAgMQAAgLgGgGQgGgHgJAAQgLAAgDAHgAgMgwQgFAFAAAJQAAAIAFAEQAFAFAHABQAIgBAFgFQAEgEAAgJQAAgIgEgFQgFgEgIAAQgIAAgEAEg");
	this.shape_93.setTransform(267.2,45.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFADA").s().p("AAEBLIAAhrQgPAQgVAGIAAgaQAMgEANgKQAMgKAFgOIAXAAIAACVg");
	this.shape_94.setTransform(254.775,44.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#040202").s().p("A3bHCIAAuDMAu3AAAIAAODg");
	this.shape_95.setTransform(150,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Layer1, new cjs.Rectangle(0,0,300,90), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({alpha:1},9).wait(67));

	// Layer_20
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.setTransform(96.5,376.5,1.7402,1.7402);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.sineOut).wait(7).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(6).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(6).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(6));

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
	this.instance = new lib.item3a_1();
	this.instance.setTransform(126,238,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160,y:240},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,0,325.9,480);


// stage content:
(lib._160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Layer1();
	this.instance.setTransform(79.95,576.05,0.5333,0.5333,0,0,0,149.9,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0706").s().p("AkiFRIAAqhID9AAQCbABBbBpQBSBfAACHQAACIhSBfQhbBpibABgAh2C0IBRAAQBLAAAtg4QAogzAAhJQAAhIgogyQgtg5hLAAIhRAAg");
	this.shape.setTransform(116.1508,511.2317,0.1019,0.1019);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0706").s().p("Ai4FQIAAqgIFoAAIAACaIi9AAIAABgIDDAAIAACYIjDAAIAAB2IDGAAIAACYg");
	this.shape_1.setTransform(99.8063,511.2317,0.1019,0.1019);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0706").s().p("ABoFQIAAkOIjPAAIAAEOIiwAAIAAqgICwAAIAAD1IDPAAIAAj1ICwAAIAAKgg");
	this.shape_2.setTransform(92.3168,511.2317,0.1019,0.1019);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_3.setTransform(107.4945,511.1884,0.1019,0.1019);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_4.setTransform(83.7777,511.1884,0.1019,0.1019);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C0706").s().p("AjsEFQhshhAAikQAAikBshhQBhhXCLAAQCMAABhBXQBsBhAACkQAACkhsBhQhhBYiMAAQiLAAhhhYgAhziHQg0AyAABVQAABWA0AzQAvAtBFAAQBEAAAwgtQA0gzAAhWQAAhVg0gyQgwguhEAAQhFAAgvAug");
	this.shape_5.setTransform(63.8388,511.2469,0.1019,0.1019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0706").s().p("AjfEDQhthgAAijQAAihBthgQBhhXCKAAQBgABBLAqQBVAwAkBYIiXA8QgVgrgigTQgigTg0AAQhOAAgtA4QgrAzAABPQAABUAtAyQAuAzBLAAQA2AAAggRQAkgTAWgvIiPAAIAAiUIE+AAQAEA8gEAnQgEA1gPAtQgiBihYAzQhMAshmAAQiLAAhghVg");
	this.shape_6.setTransform(55.0653,511.2266,0.1019,0.1019);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED1C24").s().p("ApFMqIgFgHQgQgYgDglQgCglALgqQAJgnAQgZIDnmPQghgFgugPQhegfhJg3QhnhMgthtQgMgdgIgfQgeh1AciSIACgLQAWhtBAhVQA5hMBWg2QBIgsBTgYQBGgUA3AAQB7AABkAeQBQAYA+AqQAsAeAfAkQAPASAGAMQArgsAlgbQAjgZAlgNQAhgMAogDQAggCA1ABQBiAKBNBQQAYAZATAdIAOAYQhwg1hSAPQhDALgrA1QgfAmgRA3QgJAcgCAUIB0OaIBvBoIBnhMIAtBHIkRDKIjNinIgLhgIl1D8IlIj/Ig9BrQAQAaAKAjQAKAlAAAgQgBAagIASQgDAGgFAGQgRAXgjAAQgsAAgXgcgAknEwIFaEPIDXiYIghjeInSAAgAncpAQg6AggtA3QgsA1gWBBQgWBDAGBAQAKBgAmBIQAjBBA4AqQAyAmBAASQA6AQA+gDICUj6QgCgSgJgbQgQg1gdgqQgpg7g7gbQhLghhlATIAJgOQAMgSARgPQA3gxBTgIQAtgEAhABQAnACAhALQBIAXBJBIIAVgfQgHgMgPgSQgfgkgngeQg2gqg+gYQhMgehUgBQhCAAg+AhgAiLAkIFfAAIg/nkg");
	this.shape_7.setTransform(101.6794,489.7352,0.8159,0.8159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(206));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(77.55,389,0.7187,0.7187,0,0,0,103.3,394);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206));

	// bm
	this.instance_2 = new lib.bm_1();
	this.instance_2.setTransform(115.6,117.5,0.8,0.8,0,0,0,160.1,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// t2
	this.instance_3 = new lib.text2();
	this.instance_3.setTransform(81.2,83.35,0.8309,0.8309,0,0,0,101.8,65.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(206));

	// t1
	this.instance_4 = new lib.text1();
	this.instance_4.setTransform(58.25,32.85,0.8309,0.8309,0,0,0,74.2,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(206));

	// Layer_9
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(156.25,205.25,0.8163,0.8163,0,0,0,-4.6,-42.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).to({regX:-4.4,regY:-42.4,scaleX:2.4348,scaleY:2.4345,x:307.9,y:73.2},7,cjs.Ease.sineIn).to({_off:true},1).wait(160));

	// bg
	this.instance_6 = new lib.Tween4_1("synched",0);
	this.instance_6.setTransform(231,295.5,1.5,1.5,0,0,0,-6,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},38).wait(168));

	// item1d
	this.instance_7 = new lib.item1d();
	this.instance_7.setTransform(-77.55,259.05,1.1665,1.1665,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({scaleX:1.6563,scaleY:1.6563,x:-146.65,y:259.65,alpha:0.6992},6).to({regX:159.9,scaleX:1.7379,scaleY:1.7379,x:-158.2,y:259.8,alpha:0},1).to({_off:true},1).wait(109));

	// item1c
	this.instance_8 = new lib.item1c();
	this.instance_8.setTransform(47.85,408.9,1.1912,1.1912,-21.2478,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({scaleX:1.6914,scaleY:1.6914,rotation:-21.2477,x:31.55,y:472.45,alpha:0.6992},6).to({scaleX:1.7748,scaleY:1.7748,x:28.75,y:483,alpha:0},1).to({_off:true},1).wait(109));

	// item1b
	this.instance_9 = new lib.item1b();
	this.instance_9.setTransform(127.1,301.8,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({scaleX:1.42,scaleY:1.42,x:144.1,y:320.45,alpha:0.6992},6).to({scaleX:1.49,scaleY:1.49,x:146.9,y:323.5,alpha:0},1).to({_off:true},1).wait(109));

	// item1a
	this.instance_10 = new lib.item1a();
	this.instance_10.setTransform(260.7,216,1.1062,1.1062,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({regX:160.1,scaleX:1.5708,scaleY:1.5708,x:333.9,y:198.6,alpha:0.6992},6).to({regX:160,scaleX:1.6483,scaleY:1.6483,x:345.9,y:195.65,alpha:0},1).to({_off:true},1).wait(109));

	// Layer_17
	this.instance_11 = new lib.Tween14("synched",0);
	this.instance_11.setTransform(157.95,206,0.8163,0.8163,0,0,0,-2.4,-41.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(89).to({_off:false},0).to({regX:-2.2,scaleX:2.5885,scaleY:2.5883,x:327.95,y:70.9},7).to({_off:true},1).wait(109));

	// pop2_png
	this.instance_12 = new lib.Tween20("synched",0);
	this.instance_12.setTransform(152.5,240,0.8529,0.8529);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(43).to({_off:false},0).to({scaleX:1.0667,scaleY:1.0667,x:170.65,y:256},8,cjs.Ease.sineOut).to({_off:true},38).wait(117));

	// bg2
	this.instance_13 = new lib.Tween19("synched",0);
	this.instance_13.setTransform(159.1,209,1.0001,1.0001,0,0,0,1.1,17);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(43).to({_off:false},0).to({regX:1,regY:17.1,scaleX:1.0574,scaleY:1.0574,x:163.55,y:210.05},8,cjs.Ease.sineOut).to({_off:true},38).wait(117));

	// Layer_5
	this.instance_14 = new lib.Tween13("synched",0);
	this.instance_14.setTransform(82,235.95,0.8333,0.8333,0,0,0,2,-64);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,y:236},8,cjs.Ease.sineOut).wait(103));

	// item3d4
	this.instance_15 = new lib.item3d4();
	this.instance_15.setTransform(-23.5,241.65,1.2452,1.2452,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(206));

	// item3b2
	this.instance_16 = new lib.item3b2();
	this.instance_16.setTransform(40.8,196.8,1.2452,1.2452,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(206));

	// item3a1
	this.instance_17 = new lib.item3a1();
	this.instance_17.setTransform(18,305.8,1,1,0,0,180,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(206));

	// bg3_jpg
	this.instance_18 = new lib.Tween21("synched",0);
	this.instance_18.setTransform(86.15,299.4,1.1612,1.1609,0,0,0,-72.8,16.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(95).to({_off:false},0).to({scaleX:1.2737,scaleY:1.2734,x:86.1},8,cjs.Ease.sineOut).wait(103));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_8.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(206));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-356,-282.3,965.6,1602.5);
// library properties:
lib.properties = {
	id: '2EDBCB7250A8AE4D9B494557D76DD9DC',
	width: 160,
	height: 600,
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
		{src:"images/item3a.png", id:"item3a"},
		{src:"images/item3b.png", id:"item3b"},
		{src:"images/item3d.png", id:"item3d"},
		{src:"images/pop2.png", id:"pop2"},
		{src:"images/pop3.png", id:"pop3"}
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
an.compositions['2EDBCB7250A8AE4D9B494557D76DD9DC'] = {
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