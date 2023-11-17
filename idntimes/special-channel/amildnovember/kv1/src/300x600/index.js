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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg1b = function() {
	this.initialize(img.bg1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg2b = function() {
	this.initialize(img.bg2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,960);


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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
p.nominalBounds = new cjs.Rectangle(0,0,320,640);


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
p.nominalBounds = new cjs.Rectangle(-147,-241,413.5,827);


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
p.nominalBounds = new cjs.Rectangle(-160,-240,300,600);


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
p.nominalBounds = new cjs.Rectangle(-158,-192,300,600);


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
p.nominalBounds = new cjs.Rectangle(-196,-294,367.5,735.1);


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
p.nominalBounds = new cjs.Rectangle(-196,-294,367.5,735.1);


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
p.nominalBounds = new cjs.Rectangle(-160,-240,200,400);


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


(lib.text = function(mode,startPosition,loop,reversed) {
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

	// mask1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AxGCgIAAk/MAiNAAAIAAE/g");
	mask_2.setTransform(113.5,20.05);

	// t1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(109.7,51.55);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:23.55},8).wait(198));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.4,98.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.sineOut).wait(7).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(8).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(6).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(4));

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
	this.instance = new lib.item3a_1();
	this.instance.setTransform(126,238,0.8248,0.8248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:160,y:240},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,0,325.9,480);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ghw();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	// Layer_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A+nIrIAAxVMA9PAAAIAARVg");
	this.shape.setTransform(152.1,569.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(206));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0706").s().p("AkiFRIAAqhID9AAQCbABBbBpQBSBfAACHQAACIhSBfQhbBpibABgAh2C0IBRAAQBLAAAtg4QAogzAAhJQAAhIgogyQgtg5hLAAIhRAAg");
	this.shape_1.setTransform(255.9126,467.6343,0.1019,0.1019);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0706").s().p("Ai4FQIAAqgIFoAAIAACaIi9AAIAABgIDDAAIAACYIjDAAIAAB2IDGAAIAACYg");
	this.shape_2.setTransform(239.573,467.6343,0.1019,0.1019);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0706").s().p("ABoFQIAAkOIjPAAIAAEOIiwAAIAAqgICwAAIAAD1IDPAAIAAj1ICwAAIAAKgg");
	this.shape_3.setTransform(232.0858,467.6343,0.1019,0.1019);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_4.setTransform(247.259,467.591,0.1019,0.1019);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_5.setTransform(223.5493,467.591,0.1019,0.1019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0706").s().p("AjsEFQhshhAAikQAAikBshhQBhhXCLAAQCMAABhBXQBsBhAACkQAACkhsBhQhhBYiMAAQiLAAhhhYgAhziHQg0AyAABVQAABWA0AzQAvAtBFAAQBEAAAwgtQA0gzAAhWQAAhVg0gyQgwguhEAAQhFAAgvAug");
	this.shape_6.setTransform(203.6163,467.6496,0.1019,0.1019);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C0706").s().p("AjfEDQhthgAAijQAAihBthgQBhhXCKAAQBgABBLAqQBVAwAkBYIiXA8QgVgrgigTQgigTg0AAQhOAAgtA4QgrAzAABPQAABUAtAyQAuAzBLAAQA2AAAggRQAkgTAWgvIiPAAIAAiUIE+AAQAEA8gEAnQgEA1gPAtQgiBihYAzQhMAshmAAQiLAAhghVg");
	this.shape_7.setTransform(194.8455,467.6292,0.1019,0.1019);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED1C24").s().p("ApFMqIgFgHQgQgYgDglQgCglALgqQAJgnAQgZIDnmPQghgFgugPQhegfhJg3QhnhMgthtQgMgdgIgfQgeh1AciSIACgLQAWhtBAhVQA5hMBWg2QBIgsBTgYQBGgUA3AAQB7AABkAeQBQAYA+AqQAsAeAfAkQAPASAGAMQArgsAlgbQAjgZAlgNQAhgMAogDQAggCA1ABQBiAKBNBQQAYAZATAdIAOAYQhwg1hSAPQhDALgrA1QgfAmgRA3QgJAcgCAUIB0OaIBvBoIBnhMIAtBHIkRDKIjNinIgLhgIl1D8IlIj/Ig9BrQAQAaAKAjQAKAlAAAgQgBAagIASQgDAGgFAGQgRAXgjAAQgsAAgXgcgAknEwIFaEPIDXiYIghjeInSAAgAncpAQg6AggtA3QgsA1gWBBQgWBDAGBAQAKBgAmBIQAjBBA4AqQAyAmBAASQA6AQA+gDICUj6QgCgSgJgbQgQg1gdgqQgpg7g7gbQhLghhlATIAJgOQAMgSARgPQA3gxBTgIQAtgEAhABQAnACAhALQBIAXBJBIIAVgfQgHgMgPgSQgfgkgngeQg2gqg+gYQhMgehUgBQhCAAg+AhgAiLAkIFfAAIg/nkg");
	this.shape_8.setTransform(241.5167,446.4195,0.816,0.816);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(206));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(3.3,179.85,0.7187,0.7187);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206));

	// bm
	this.instance_2 = new lib.bm_1();
	this.instance_2.setTransform(144.1,138.1,0.9187,0.9187,0,0,0,160.1,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(145.85,62.15,1.3446,1.3446,0,0,0,113.5,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(206));

	// Layer_9
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(156.25,205.25,0.8163,0.8163,0,0,0,-4.6,-42.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).to({regX:-4.4,regY:-42.4,scaleX:2.4348,scaleY:2.4345,y:73.2},7,cjs.Ease.sineIn).to({_off:true},1).wait(160));

	// bg
	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.setTransform(231,295.5,1.5,1.5,0,0,0,-6,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},38).wait(168));

	// item1d
	this.instance_6 = new lib.item1d();
	this.instance_6.setTransform(23.95,263,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({scaleX:1.3486,scaleY:1.3486,x:-32.6,y:237.8,alpha:0.6992},6).to({scaleX:1.4066,scaleY:1.4066,x:-42.1,y:233.6,alpha:0},1).to({_off:true},1).wait(109));

	// item1c
	this.instance_7 = new lib.item1c();
	this.instance_7.setTransform(126.45,363.9,1.1912,1.1912,-21.2475,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({scaleX:1.6063,scaleY:1.6063,rotation:-21.2477,x:105.6,y:373.85,alpha:0.6992},6).to({scaleX:1.6756,scaleY:1.6756,rotation:-21.2474,x:102.1,y:375.45,alpha:0},1).to({_off:true},1).wait(109));

	// item1b
	this.instance_8 = new lib.item1b();
	this.instance_8.setTransform(169.1,274.85,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({scaleX:1.3486,scaleY:1.3486,x:163.1,y:253.7,alpha:0.6992},6).to({scaleX:1.4066,scaleY:1.4066,x:162.1,y:250.25,alpha:0},1).to({_off:true},1).wait(109));

	// item1a
	this.instance_9 = new lib.item1a();
	this.instance_9.setTransform(350.7,237,1.1062,1.1062,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({regX:160.1,scaleX:1.4918,scaleY:1.4918,x:408.1,y:202.7,alpha:0.6992},6).to({regX:160,scaleX:1.5561,scaleY:1.5561,x:417.45,y:197,alpha:0},1).to({_off:true},1).wait(109));

	// Layer_17
	this.instance_10 = new lib.Tween14("synched",0);
	this.instance_10.setTransform(157.95,206,0.8163,0.8163,0,0,0,-2.4,-41.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({_off:false},0).to({regX:-2.2,scaleX:2.5885,scaleY:2.5883,x:158.2,y:70.9},7).to({_off:true},1).wait(109));

	// pop2_png
	this.instance_11 = new lib.Tween20("synched",0);
	this.instance_11.setTransform(160,240,0.8529,0.8529);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1},8,cjs.Ease.sineOut).to({_off:true},38).wait(117));

	// bg2
	this.instance_12 = new lib.Tween19("synched",0);
	this.instance_12.setTransform(159.1,209,1.0001,1.0001,0,0,0,1.1,17);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(43).to({_off:false},0).to({regX:1,regY:17.1,scaleX:1.0574,scaleY:1.0574,x:160,y:210.05},8,cjs.Ease.sineOut).to({_off:true},38).wait(117));

	// item3d4
	this.instance_13 = new lib.item3d4();
	this.instance_13.setTransform(62.5,261.65,1.2452,1.2452,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(206));

	// item3c3
	this.instance_14 = new lib.item3c3();
	this.instance_14.setTransform(33.85,284.95,1.2452,1.2452,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(206));

	// item3b2
	this.instance_15 = new lib.item3b2();
	this.instance_15.setTransform(109.8,211.8,1.2452,1.2452,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(206));

	// item3a1
	this.instance_16 = new lib.item3a1();
	this.instance_16.setTransform(153,308.05,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(206));

	// bg3_jpg
	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.setTransform(157.55,206.85,0.7275,0.7274,0,0,0,70.2,44.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(95).to({_off:false},0).to({regY:44.2,scaleX:0.7715,scaleY:0.7713,x:157.6,y:206.7},8,cjs.Ease.sineOut).wait(103));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-193.4,-282.3,859.8,1602.5);
// library properties:
lib.properties = {
	id: 'E073DA77E106FE4DB830E78EB45DBD4E',
	width: 300,
	height: 600,
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
		{src:"images/item3a.png", id:"item3a"},
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
an.compositions['E073DA77E106FE4DB830E78EB45DBD4E'] = {
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