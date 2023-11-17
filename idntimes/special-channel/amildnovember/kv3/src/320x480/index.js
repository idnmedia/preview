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



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,105);


(lib.avatar1 = function() {
	this.initialize(img.avatar1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.avatar2 = function() {
	this.initialize(img.avatar2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.avatar3 = function() {
	this.initialize(img.avatar3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,720);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,720);


(lib.bm = function() {
	this.initialize(img.bm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,750);


(lib.bolong = function() {
	this.initialize(img.bolong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,65);


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


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.jari1 = function() {
	this.initialize(img.jari1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,73);


(lib.jari2 = function() {
	this.initialize(img.jari2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,67);


(lib.out1 = function() {
	this.initialize(img.out1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.out2 = function() {
	this.initialize(img.out2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.out3 = function() {
	this.initialize(img.out3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


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
	this.instance = new lib.shadow();
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
	this.instance = new lib.bg2();
	this.instance.setTransform(-240,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


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
	this.instance = new lib.bg1();
	this.instance.setTransform(-160,-240,0.6667,0.6667);

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
	this.instance = new lib.frame();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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
	this.shape.graphics.f("#000000").s().p("ADBA6QgJgLAAgWIAAgyQAAgXAJgKQAJgLAWAAQAVAAAKALQAIAKAAAXIAAAyQAAAugngBQgWAAgJgMgADUguQgDAFAAAKIAAA+QAAAKADAFQADAGAJAAQAIAAADgGQADgFAAgKIAAg+QAAgKgDgFQgDgFgIAAQgJAAgDAFgAiUA6QgHgKAAgYIAAhcIAYAAIAABfQAAAMACAFQAEAIAIgBQAJABADgIQADgFAAgMIAAhfIAYAAIAABcQAAAYgIAKQgJAMgWAAQgWAAgJgMgAsGAYIAAgvQAAgYAIgLQAKgMAVABQAUAAAJAKQAIAJAAAUIAAALIgYAAIAAgMQAAgLgBgDQgDgGgJAAQgIAAgEAGQgCAFAAALIAAA7QAAALADAGQADAFAIAAQAJAAACgGQACgFAAgLIAAgMIAYAAIAAALQAAATgHAKQgJAMgVAAQgnABAAgvgALDBEIAAiIIAZAAIAACIgAJhBEIAAiIIAhAAQAYAAAKAKQAJAKAAAXIAAAxQAAAXgJAKQgKAMgXgBgAJ6AzIAIAAQAMAAADgGQADgGAAgPIAAgzQAAgOgDgEQgEgFgLAAIgIAAgAIeBEIgGgfIgYAAIgFAfIgYAAIAciIIAbAAIAbCIgAIWAVIgKg5IgJA5IATAAgAGyBEIAAg0IgchUIAXAAIARA2IAQg2IAXAAIgbBUIAAA0gAF0BEIghhRIAABRIgWAAIAAiIIASAAIAhBOIAAhOIAVAAIAACIgABsBEIAAiIIA4AAIAAARIgfAAIAAAoIAZAAIAAAQIgZAAIAAA/gABHBEIghhRIAABRIgWAAIAAiIIASAAIAhBOIAAhOIAVAAIAACIgAgcBEIAAiIIAZAAIAACIgAjGBEIAAg+IgdAAIAAA+IgZAAIAAiIIAZAAIAAA5IAdAAIAAg5IAZAAIAACIgAkgBEIgGgfIgYAAIgFAfIgYAAIAciIIAbAAIAbCIgAkoAVIgKg5IgJA5IATAAgAmIBEIAAh2IgWAAIAAgSIBEAAIAAASIgVAAIAAB2gAnoBEIAAiIIAZAAIAACIgAoVBEIgRg/IgLAAIAAA/IgZAAIAAiIIAhAAQAVAAALAIQALAIAAAUQAAAagRAHIATBDgAoxgJIAIAAQAKAAAFgFQAEgFAAgMQAAgKgDgFQgFgFgKAAIgJAAgApvBEIgFgfIgYAAIgGAfIgXAAIAbiIIAbAAIAcCIgAp3AVIgJg5IgKA5IATAAgALxA4IAAgXIAWAAIAAAXgALxgBIAAgWIAWAAIAAAWg");
	this.shape.setTransform(1.8004,0.4147,0.9297,0.9297);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-6.1,144.2,13.1);


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
	this.instance = new lib.jari1();
	this.instance.setTransform(-24.5,-25.55,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-25.5,49,51.1);


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
	this.instance = new lib.jari1();
	this.instance.setTransform(-24.5,-25.55,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-25.5,49,51.1);


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
	this.instance = new lib.avatar3();
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
	this.instance = new lib.avatar2();
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
	this.instance = new lib.avatar1();
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
	this.instance = new lib.out3();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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
	this.instance = new lib.out2();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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
	this.instance = new lib.out1();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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
	this.instance = new lib.arrow();
	this.instance.setTransform(-8.55,-12.8,0.2441,0.2441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-12.8,17.1,25.700000000000003);


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
	this.instance = new lib.arrow();
	this.instance.setTransform(8.55,-12.8,0.2441,0.2441,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-12.8,17.1,25.700000000000003);


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
	this.instance.setTransform(8,7,0.9352,0.9352);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADA").s().p("AgGAjIAFgQIABgTIgBgPQgBgIgFgLIAGAAQAEAJACAIQADAKAAAHQAAAHgDAKQgCAJgEAJg");
	this.shape.setTransform(261.975,50.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFADA").s().p("AgJAXQgEgDgBgIIAJgBQAAAEACACQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgFgCgCQgBgCgDABQgDAAgDACIgHgBIAFgbIAVAAIAAAKIgPAAIgBAJIAEgCQAGAAADAEQAFAFAAAIQAAAHgEAGQgEAGgHAAQgFAAgEgEg");
	this.shape_1.setTransform(259.275,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFADA").s().p("AgJAVQgFgGAAgPQAAgNAFgHQAEgGAGAAQAFAAADADQAEAEABAGIgIABQgBgGgEAAQgCAAgCADQgBACgBAKIADgDIAEgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgGAAQgFAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQABgBAAAAQAAAAABAAQAAgBABAAQABgCAAgGQAAgFgBgCQgBgCgEAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(255.775,49.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFADA").s().p("AgJAXQgEgDgBgIIAJgBIACAGQAAAAABABQABAAAAAAQABABAAAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgFgCgCQgBgCgDABQgDAAgDACIgHgBIAFgbIAVAAIAAAKIgPAAIgBAJIAFgCQAFAAADAEQAFAFAAAIQAAAHgEAGQgEAGgHAAQgFAAgEgEg");
	this.shape_3.setTransform(252.275,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFADA").s().p("AgJAVQgFgGAAgPQAAgNAFgHQAEgGAGAAQAFAAAEADQADAEABAGIgIABQgBgGgEAAQgBAAgDADQgCAEAAAIIAEgDIADgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgFAAQgGAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQABgCAAgGQAAgFgBgCQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_4.setTransform(248.775,49.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFADA").s().p("AgIAFIAAgJIAQAAIAAAJg");
	this.shape_5.setTransform(245.95,50.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFADA").s().p("AgHAaQAAgJADgNQAEgKAFgKIgSAAIAAgJIAbAAIAAAHIgHANQgEAHgBAIQgCAIAAAIg");
	this.shape_6.setTransform(243.125,49.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFADA").s().p("AgIAaQAAgJAEgNQADgKAGgKIgSAAIAAgJIAcAAIAAAHQgEAFgEAIIgGAPQgBAIAAAIg");
	this.shape_7.setTransform(239.65,49.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFADA").s().p("AABAbIAAgmQgDAGgGACIAAgJIAGgGQAEgDABgFIAHAAIAAA1g");
	this.shape_8.setTransform(235.9,49.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFADA").s().p("AgHAFIAAgJIAPAAIAAAJg");
	this.shape_9.setTransform(233.325,50.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFADA").s().p("AgJAVQgEgFAAgQQAAgPAEgFQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgCAEAAALQAAAMACADQABAEACAAQACAAACgEQABgDAAgMQAAgLgBgEQgCgDgCAAQgCAAgBADg");
	this.shape_10.setTransform(230.525,49.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFADA").s().p("AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQABABAAABQAAAAABABQAAAAABABQAAAAAAAAQADAAABgEQABgDAAgMQAAgLgBgEQgBgDgDAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAABgBAAg");
	this.shape_11.setTransform(227.025,49.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFADA").s().p("AgKAXQgDgFAAgHQAAgFACgDQABgDAEgCIgFgEQgCgDABgEQAAgGADgEQADgDAGAAQAHAAACAEQAEADAAAGQAAAEgBADIgFAEQAFACABADQABACAAAGQAAAFgBADQgCADgEADQgCACgFAAQgFAAgFgEgAgDAEQgCADAAADQAAAEACADQACACABAAQACAAADgCQABgCAAgFQAAgEgCgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACgAgDgRIgBAFQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQABAAAAAAQABAAAAABQAAAAAAAAIAEgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_12.setTransform(223.55,49.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFADA").s().p("AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAFAAAPQAAAQgEAFQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQACAEABAAQADAAABgEQACgDAAgMQAAgLgCgEQgBgDgDAAQgBAAgCADg");
	this.shape_13.setTransform(220.025,49.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFADA").s().p("AACAjQgEgJgCgIQgCgKgBgIQABgHACgKQACgIAEgJIAGAAIgGATIgCAPQAAAKACAJIAGAQg");
	this.shape_14.setTransform(217.3,50.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFADA").s().p("AAIAbIgLgZIgHAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
	this.shape_15.setTransform(212.375,49.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFADA").s().p("AgOAVQgGgHAAgOQAAgIACgGQADgHAFgDQAEgDAGAAQAJAAAGAHQAGAIAAAMQAAAOgGAHQgGAHgJAAQgIAAgGgHgAgIgNQgDAEAAAJQAAAKADAEQAEAFAEAAQAFAAAEgFQADgEAAgKQAAgJgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_16.setTransform(207.475,49.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFADA").s().p("AAIAbIgKgZIgIAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
	this.shape_17.setTransform(203,49.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFADA").s().p("AgOAVQgGgIgBgNQAAgIAEgGQADgHAEgDQAFgDAFAAQAKAAAFAHQAHAIAAAMQgBAOgGAHQgFAHgKAAQgJAAgFgHgAgHgNQgEAEAAAJQAAAKAEAEQADAFAEAAQAFAAAEgFQADgFAAgJQAAgJgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_18.setTransform(198.1,49.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFADA").s().p("AAJAbIgKgUQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgEgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQADABACAEQACADAAAFQAAAHgDADQgDAEgFAAIAEAFIAFAIIAGALgAgKgDIANgBQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDgCIgNgBg");
	this.shape_19.setTransform(193.625,49.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_20.setTransform(189.125,49.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFADA").s().p("AANAbIAAgpIgJApIgHAAIgJgpIAAApIgIAAIAAg1IANAAIAHAkIAIgkIANAAIAAA1g");
	this.shape_21.setTransform(184.375,49.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFADA").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_22.setTransform(179.125,49.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFADA").s().p("AgDAbIAAgsIgOAAIAAgJIAiAAIAAAJIgMAAIAAAsg");
	this.shape_23.setTransform(176.3,49.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFADA").s().p("AAJAbIgRgiIAAAiIgIAAIAAg1IAJAAIARAjIAAgjIAIAAIAAA1g");
	this.shape_24.setTransform(172.1,49.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_25.setTransform(167.875,49.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFADA").s().p("AAJAbIAAgYIgRAAIAAAYIgIAAIAAg1IAIAAIAAAVIARAAIAAgVIAJAAIAAA1g");
	this.shape_26.setTransform(163.45,49.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFADA").s().p("AAJAbIgKgUIgCgCIgFgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQAEACABADQACADAAAFQAAAHgDADQgDAEgFAAIAFAFIAKATgAgKgDIAHAAIAHgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgEIgBgEIgDgCIgNgBg");
	this.shape_27.setTransform(159.125,49.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_28.setTransform(154.675,49.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFADA").s().p("AgRAbIAAg1IARAAQAGAAADACQADAAACAEQACADAAAFQAAAEgBADIgFAEQAEABACADQACADAAAFQAAAGgCAEQgEAFgDAAIgLABgAgJASIAPgBIACgCIABgEIgBgFIgDgCIgGgBIgIAAgAgJgEIAMgBIADgCQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAAAgBIgBgEIgDgBIgHgBIgGAAg");
	this.shape_29.setTransform(150.325,49.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFADA").s().p("AAJAbIgRgiIAAAiIgJAAIAAg1IAJAAIARAjIAAgjIAJAAIAAA1g");
	this.shape_30.setTransform(143.95,49.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFADA").s().p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgGAGIAMAAIgGgTg");
	this.shape_31.setTransform(139.45,49.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFADA").s().p("AAIAbIgQgiIAAAiIgIAAIAAg1IAIAAIARAjIAAgjIAIAAIAAA1g");
	this.shape_32.setTransform(134.925,49.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFADA").s().p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
	this.shape_33.setTransform(130.425,49.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFADA").s().p("AgEAbIAAgXIgQgeIALAAIAJAVIALgVIAJAAIgQAeIAAAXg");
	this.shape_34.setTransform(126.65,49.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFADA").s().p("AANAbIgFgMIgQAAIgEAMIgJAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
	this.shape_35.setTransform(122.85,49.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFADA").s().p("AgPAaIAAgzIAJAAIAAAqIAWAAIAAAJg");
	this.shape_36.setTransform(118.85,49.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFADA").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_37.setTransform(263.9,43.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgGAGIAMAAIgGgVg");
	this.shape_38.setTransform(168.05,40.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFADA").s().p("AAKAfIgTgoIAAAoIgKAAIAAg9IAKAAIATApIAAgpIAKAAIAAA9g");
	this.shape_39.setTransform(162.85,40.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAlAAIAAAKIgbAAIAAAPIAZAAIAAAJIgZAAIAAARIAbAAIAAAKg");
	this.shape_40.setTransform(157.925,40.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJALIAAASIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_41.setTransform(153.125,40.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFADA").s().p("AAKAfIgLgXIgDgCIgGgBIgCAAIAAAaIgKAAIAAg9IAWAAQAIAAACACQAEACACAEQACAEAAAFQAAAHgDAFQgEAEgGABIAGAFIAFAKIAHAMgAgMgEIAIAAIAIAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgDgBgBIgDgDIgIgBIgIAAg");
	this.shape_42.setTransform(147.925,40.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAAKIgaAAIAAAPIAYAAIAAAJIgYAAIAAARIAbAAIAAAKg");
	this.shape_43.setTransform(142.775,40.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFADA").s().p("AgEAfIAAgzIgPAAIAAgKIAnAAIAAAKIgPAAIAAAzg");
	this.shape_44.setTransform(138.075,40.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgTAAIgFAOIgLAAIAUg9IAKAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_45.setTransform(131.45,40.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFADA").s().p("AgEAfIAAgaIgTgjIAMAAIALAZIAMgZIAMAAIgTAjIAAAag");
	this.shape_46.setTransform(127.125,40.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgUAAIgDAOIgLAAIAUg9IAJAAIAUA9gAgGAGIAMAAIgGgVg");
	this.shape_47.setTransform(122.75,40.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFADA").s().p("AgUALIAKgBQACALAIABQAEgBAEgCQACgCAAgEIgBgDIgCgDIgJgDIgJgEQgDgCgCgDQgCgEAAgEQAAgHADgCQACgEAEgDQAGgCADAAQAJAAAFAFQAEAEABAKIgKAAQgBgFgCgCQgCgCgEAAQgDABgDABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABACAHADQAJACACACQAFADABADQACAEAAAFQAAAIgFAFQgGAGgKAAQgRAAgDgVg");
	this.shape_48.setTransform(117.725,40.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFADA").s().p("AAJAfIgSgnIAAAnIgKAAIAAg9IAKAAIATAoIAAgoIAKAAIAAA9g");
	this.shape_49.setTransform(260.5,40.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_50.setTransform(255.3,40.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
	this.shape_51.setTransform(250.375,40.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFADA").s().p("AgRAYQgHgHAAgRQAAgKAEgHQAEgIAEgCQAFgEAHAAQALAAAHAIQAGAJABAOQAAAPgIAJQgGAIgLAAQgJAAgIgIgAgJgPQgEAEAAALQAAALAEAFQAEAFAFAAQAGAAAEgFQAEgGAAgKQAAgKgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_52.setTransform(244.75,40.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgCIgFgBIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEACQADABACAFQADAEAAAFQAAAIgEAEQgDADgHACIAGAFIAMAWgAgMgEIAIAAIAIAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQABgCAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgIAAIgIAAg");
	this.shape_53.setTransform(239.575,40.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFADA").s().p("AgRAYQgHgIAAgQQAAgKAEgHQADgHAGgDQAFgEAGAAQALAAAHAIQAHAIAAAPQgBAPgGAJQgHAIgLAAQgJAAgIgIgAgJgPQgEAFAAAKQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgGAAgKQAAgLgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_54.setTransform(233.95,40.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFADA").s().p("AgKAcQgGgDgDgIQgDgHAAgKQAAgKADgHQADgGAGgEQAFgEAGAAQAKAAAFAFQAGAFABAIIgKADQgBgGgDgCQgEgCgEAAQgFAAgEAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAHgBIAGgEIAAgIIgNAAIAAgJIAXAAIAAAXQgEAEgFADQgGADgHAAQgHAAgFgEg");
	this.shape_55.setTransform(228.3,40.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFADA").s().p("AgKAcQgGgEgDgHQgEgHAAgKQAAgKAEgHQADgGAFgEQAGgEAGAAQAKAAAFAFQAFAEACAJIgKADQgBgFgDgDQgEgCgEAAQgGAAgDAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAGgBIAGgEIAAgIIgLAAIAAgJIAWAAIAAAXQgFAFgFACQgFADgHAAQgHAAgFgEg");
	this.shape_56.setTransform(222.725,40.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFADA").s().p("AAKAfIgUgnIAAAnIgJAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
	this.shape_57.setTransform(217.35,40.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
	this.shape_58.setTransform(212.45,40.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFADA").s().p("AgEAfIAAgyIgPAAIAAgLIAnAAIAAALIgPAAIAAAyg");
	this.shape_59.setTransform(207.75,40.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgCIgFgBIgCAAIAAAaIgLAAIAAg9IAWAAQAHAAAEACQAEABACAFQACADAAAGQAAAIgEAEQgCADgIACQAFACABADIAMAWgAgLgEIAHAAIAIAAIADgDIABgFIgBgEQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgHAAIgIAAg");
	this.shape_60.setTransform(201.125,40.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
	this.shape_61.setTransform(195.975,40.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFADA").s().p("AAJAfIgMgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
	this.shape_62.setTransform(191.175,40.525);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFADA").s().p("AAKAfIgTgnIAAAnIgKAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
	this.shape_63.setTransform(185.7,40.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgTAAIgFAOIgLAAIAUg9IAKAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_64.setTransform(180.5,40.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJALIAAASIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_65.setTransform(175.575,40.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFADA").s().p("AgEAIQACgBACgCQAAgCAAgDIgEAAIAAgMIAJAAIAAAJQAAAHgCACQgBAEgEADg");
	this.shape_66.setTransform(225.025,34.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFADA").s().p("AAKAfIgOgdIgIAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_67.setTransform(221.7,31.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFADA").s().p("AgQAYQgIgIAAgPQAAgLAEgHQADgGAFgFQAFgDAHAAQALAAAHAJQAHAIAAAOQAAAQgIAIQgGAIgLAAQgKAAgGgIgAgJgPQgEAGAAAJQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgFAAgLQAAgLgEgEQgEgFgGgBQgFABgEAFg");
	this.shape_68.setTransform(216.075,31.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_69.setTransform(210.925,31.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFADA").s().p("AgQAYQgIgIABgPQAAgKACgIQADgGAGgFQAFgDAHAAQAKAAAIAJQAGAIAAAOQABAQgIAIQgGAIgLAAQgKAAgGgIgAgKgPQgDAFAAAKQAAALAEAFQAEAFAFAAQAHAAADgFQAEgGAAgKQAAgKgEgFQgEgFgGgBQgFABgFAFg");
	this.shape_70.setTransform(205.3,31.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgDIgFAAIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEABQAEADABAEQADAEAAAFQAAAHgEAFQgEAEgGABIAGAEIAMAXgAgMgEIAIAAIAIAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgIgBIgIAAg");
	this.shape_71.setTransform(200.125,31.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAAKIgaAAIAAAOIAYAAIAAAKIgYAAIAAARIAbAAIAAAKg");
	this.shape_72.setTransform(194.975,31.05);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFADA").s().p("AAPAfIAAgwIgKAwIgJAAIgKgwIAAAwIgKAAIAAg9IAQAAIAIApIAJgpIAQAAIAAA9g");
	this.shape_73.setTransform(189.5,31.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgHAGIAOAAIgHgVg");
	this.shape_74.setTransform(182.1,31.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFADA").s().p("AAKAfIgTgoIAAAoIgKAAIAAg9IAKAAIATApIAAgpIAKAAIAAA9g");
	this.shape_75.setTransform(176.9,31.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAlAAIAAAKIgbAAIAAAOIAZAAIAAAKIgZAAIAAARIAbAAIAAAKg");
	this.shape_76.setTransform(171.975,31.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFADA").s().p("AAKAfIgLgXQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgFAAIgCAAIAAAaIgKAAIAAg9IAWAAQAHAAADABQAFADABAEQACADAAAGQAAAIgDAEQgDADgHACIAGAEIAMAXgAgMgEIAIAAIAIAAIADgDQABgBAAgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIgDgDIgIgBIgIAAg");
	this.shape_77.setTransform(167.175,31.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_78.setTransform(161.7,31.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_79.setTransform(156.775,31.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFADA").s().p("AgFAXIAAgMIALAAIAAAMgAgFgKIAAgMIALAAIAAAMg");
	this.shape_80.setTransform(215.975,21.975);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFADA").s().p("AAMAgIgYgpIAAApIgMAAIAAg/IAMAAIAZAqIAAgqIAMAAIAAA/g");
	this.shape_81.setTransform(211.225,21.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFADA").s().p("AASAgIgGgPIgYAAIgGAPIgNAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
	this.shape_82.setTransform(204.775,21.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFADA").s().p("AgGAgIAAg0IgTAAIAAgLIAzAAIAAALIgTAAIAAA0g");
	this.shape_83.setTransform(199.5,21.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFADA").s().p("AASAgIgGgPIgYAAIgFAPIgOAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
	this.shape_84.setTransform(194.175,21.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFADA").s().p("AgOAdQgHgEgEgIQgEgIAAgJQAAgJAFgIQADgIAIgEQAHgDAIAAQALAAAHAFQAIAFABAJIgMACQgCgFgDgCQgEgDgGAAQgHAAgGAFQgEAFAAALQAAALAEAFQAGAGAHAAQAFAAADgCIAHgDIAAgJIgPAAIAAgJIAcAAIAAAYQgEAEgHADQgIADgJAAQgJAAgHgEg");
	this.shape_85.setTransform(187.4,21.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFADA").s().p("AAMAgIgZgpIAAApIgMAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_86.setTransform(180.75,21.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFADA").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_87.setTransform(176.3,21.075);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFADA").s().p("AANAgIgPgXIgEgDIgJgBIAAAbIgNAAIAAg/IAbAAQAIAAAGACQAFABADAFQADAEAAAGQAAAHgFAFQgEADgIACIAHAFIAPAXgAgPgEIAUgBIAEgCQABgCAAgDQAAgEgCgBQgBgDgDAAIgJAAIgKAAg");
	this.shape_88.setTransform(172.125,21.075);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFADA").s().p("AgXAgIAAg/IAuAAIAAALIgiAAIAAAOIAgAAIAAAKIggAAIAAARIAjAAIAAALg");
	this.shape_89.setTransform(165.7,21.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFADA").s().p("AgXAgIAAg/IAUAAIAPABQAFABAEAFQAEAEgBAJQAAAGgBAEQgDACgDADQgCACgEABIgNABIgJAAIAAAYgAgLgCIAIAAQAHAAABgBQADgBACgCIABgFQAAgEgCgCQgBgCgEgBIgIAAIgHAAg");
	this.shape_90.setTransform(159.75,21.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFADA").s().p("AhxByQgwgvAAhDQAAhCAwgvQAvgwBCAAQBDAAAvAwQAwAvAABCQAABDgwAvQgvAwhDAAQhCAAgvgwgAhlhlQgrAqAAA7QAAA8ArAqQAqArA7AAQA8AAAqgrQArgqAAg8QAAg7grgqQgqgrg8AAQg7AAgqArg");
	this.shape_91.setTransform(293.825,35.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFADA").s().p("AgIAmIAAgcIgeAAIAAgTIAeAAIAAgcIASAAIAAAcIAdAAIAAATIgdAAIAAAcg");
	this.shape_92.setTransform(302.05,36.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFADA").s().p("AgXAwQgMgJAAgQQAAgJAEgIQAEgGAKgEQgIgDgEgHQgDgFAAgIQAAgMAIgIQAIgIAQAAQAQAAAIAIQAIAIAAAMQAAAIgDAGQgFAGgHADQAKAEAEAGQAFAHAAAJQAAAPgKAKQgKAJgQAAQgNAAgKgIgAgLAJQgDAFAAAHQAAAIAEAFQAFAFAFAAQAHAAAEgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgHAAgEAFgAgJgjQgEAEAAAGQAAAGAEADQADAEAGAAQAGAAADgEQAEgDAAgGQAAgHgEgDQgDgDgGAAQgGAAgDADg");
	this.shape_93.setTransform(293.275,36.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFADA").s().p("AADA3IAAhOQgLALgPAFIAAgTQAIgDAKgIQAIgHAEgKIARAAIAABtg");
	this.shape_94.setTransform(284.125,35.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#040202").s().p("A4/FoIAArPMAx/AAAIAALPg");
	this.shape_95.setTransform(160,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,72);


(lib.Tween2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ANkBxQgMgDgGgLIgFgMIgDgQIgDhHIADhGIADgQIAFgMQADgFAFgDQAEgEAGgCQAFgCAJgBIATgCQAVABAMAEQALAEAGAKIAFAMIAGBWIgGBXIgFAMQgDAFgEADQgEAEgGACIgOADIgTACQgWgBgLgEgAN9hEQgDABgBACIgBAGIgBBpIABAKIABAFQABAEADABIAIABIAIgBQACgBACgEIACgPIAAhfIgCgQQgCgCgCgBQgCgCgGAAQgGAAgCACgACkBxQgMgDgGgLIgFgMIgDgRIgDhHIADhGIADgQIAFgMQAGgJAMgEQALgEAWgBQAZAAAMAHQANAGAFAQQAEAMAAAVIAAAMIgsAAIAAgDIAAgMIgCgHQgBgFgMAAQgGAAgDACQgDABgBACIgDAQIAABgIACAOQADAGAMAAQAGAAADgBIAEgFIACgDIABgEIABgdIgWAAIAAgsIBAAAIAABLIgCAUIgDANIgFAKQgDAFgEADQgEAEgGACIgOADIgTACQgWgBgLgEgAmFByQgMgEgGgJIgEgIIgEgKIgCgQIgBizIAxAAIAACoIACAHQACACACABIAHABIAHgBQADgBACgCIABgHIABioIAvAAIgBCzIgDAQIgDAKIgEAIIgHAIQgEADgGACIgOACIgTACQgWAAgLgEgAoPBxQgLgEgGgIQgHgJgCgOQgCgNAAgSIABgVIAqAAIACAeIABAFQACAGAJAAIAKgBQACgBACgEIACgPIAAieIAxAAIgDC0IgDATQgCAHgDAFQgDAFgEADQgFAEgGACIgPADIgTACQgTAAgMgFgAsjByQgLgEgGgJIgFgIIgDgKIgDjDIAwAAIABCoIABAHQACACADABIAHABIAHgBQADgBABgCIACgHIAAioIAvAAIgBCzIgCAQIgDAKIgFAIIgHAIQgEADgGACIgOACIgTACQgVAAgMgEgALeBxIAAjhIAvAAIAACvIAwAAIAAAygAJkBxIgEg0IgXAAIgDA0IgwAAIAZjhIBPAAIAXDhgAJeAPIgIhQIgDAAIgIBQIATAAgAG3BxIAAhSIgpiOIAAgBIAxAAIAQBJIADAAIARhJIAvAAIAAABIgoCNIAABTgAFZBxIgEg0IgXAAIgEA0IgvAAIAYjhIBPAAIAXDhgAFTAPIgIhQIgEAAIgHBQIATAAgAAkBxIg1h4IgCAAIAAB4IgrAAIAAjhIAuAAIAfBPIACAAIAAhPIArAAIAADhgAiCBxIAAjhIAwAAIAADhgAjGBxIgchlIgDAAIAABlIgwAAIAAjhIAwAAIAABeIADAAIAeheIAyAAIAAABIgjBlIAlB6IAAABgApQBxIg2h4IgCAAIAAB4IgrAAIAAjhIAuAAIAgBPIACAAIAAhPIArAAIAADhgAueBxIAAiyIgjAAIAAgvIB2AAIAAAvIgkAAIAACyg");
	this.shape.setTransform(-27.8384,7.2902,1.2004,1.2004);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.3,-6.8,231,28.2);


(lib.Tween1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ACiByQgLgEgGgLIgFgLIgEgSIgCgbIAChyIAEgRIAFgLQAGgKALgDQAMgFAWAAQAZABAMAGQAMAHAGAPQADAMAAAVIAAALIgrAAIAAgCIAAgMIgCgHQgBgFgMAAQgHAAgCACQgDABgCACIgCAQIAABfIACAPQACAGANABQAFgBADgBIAFgFIACgCIABgFIABgdIgXAAIAAgsIBBAAIgDBfIgDANIgFAKQgDAFgDADQgFAEgFADIgOACIgTABQgXAAgLgDgAMmByIgdhmIgDAAIAABmIgvAAIAAjiIAvAAIAABeIADAAIAfheIAxAAIAAABIgjBlIAmB6IAAACgAKYByIgEg1IgXAAIgDA1IgwAAIAYjiIBQAAIAWDigAKSAPIgIhQIgDAAIgIBQIATAAgAIkByIg2h5IgBAAIAAB5IgrAAIAAjiIAuAAIAgBOIABAAIAAhOIAsAAIAADigAFMByIAAjiIBjAAIAAAvIg1AAIAAAoIA1AAIAAAtIg1AAIAAArIA1AAIAAAzgABeByIg2h5IgDAAIAAB5IgpAAIAAjiIAtAAIAgBOIABAAIAAhOIAsAAIAADigAhCByIgEg1IgXAAIgEA1IgvAAIAZjiIBPAAIAWDigAhIAPIgIhQIgDAAIgIBQIATAAgAjvByIAAhTIgpiOIAAgBIAwAAIAQBJIADAAIARhJIAwAAIAAABIgoCNIAABUgAmOByIAAheIgdAAIAABeIgxAAIAAjiIAxAAIAABXIAdAAIAAhXIAwAAIAADigAogByIAAjiIAwAAIAADigAqOByIAAjiIAvAAIAACvIAwAAIAAAzgArTByIAAjiIAwAAIAADigAtaByIAAjiIBDAAQAPAAAKADQALAEAFAKQAGAJADAOQACAQAAAVQAAAXgCAOQgDAPgGAKQgFAJgLAFQgKAEgPAAIgUAAIAABFgAsrgBIAMAAQAGAAADgHQADgIAAgUQAAgSgDgFQgDgGgIAAIgKAAg");
	this.shape.setTransform(7.5197,4.1842,1.2329,1.2329);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-10.3,211.9,29);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},106).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(92));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.out3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:162},6).to({x:160,y:238},8).to({x:158,y:240},8).to({x:160},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,324,482);


(lib.out2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:158},7).to({x:160,y:242},7).to({x:158,y:238},8).to({x:160,y:240},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,322,484);


(lib.out1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:157,y:239},7).to({x:160,y:242},8).to({x:158,y:240},7).to({x:160},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-1,323,483);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).to({alpha:1},9).wait(80));

	// Layer_20
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.setTransform(96.5,376.5,1.7402,1.7402);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.sineOut).wait(6).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(7).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(6).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,0,326.1,469);


// stage content:
(lib._320x480 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(160,444,1,1,0,0,0,160,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0706").s().p("AkiFRIAAqhID9AAQCbABBbBpQBSBfAACHQAACIhSBfQhbBpibABgAh2C0IBRAAQBLAAAtg4QAogzAAhJQAAhIgogyQgtg5hLAAIhRAAg");
	this.shape.setTransform(282.3246,371.2628,0.0922,0.0922);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0706").s().p("Ai4FQIAAqgIFoAAIAACaIi9AAIAABgIDDAAIAACYIjDAAIAAB2IDGAAIAACYg");
	this.shape_1.setTransform(267.5294,371.2628,0.0922,0.0922);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0706").s().p("ABoFQIAAkOIjPAAIAAEOIiwAAIAAqgICwAAIAAD1IDPAAIAAj1ICwAAIAAKgg");
	this.shape_2.setTransform(260.7498,371.2628,0.0922,0.0922);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_3.setTransform(274.4889,371.2236,0.0922,0.0922);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_4.setTransform(253.0201,371.2236,0.0922,0.0922);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C0706").s().p("AjsEFQhshhAAikQAAikBshhQBhhXCLAAQCMAABhBXQBsBhAACkQAACkhsBhQhhBYiMAAQiLAAhhhYgAhziHQg0AyAABVQAABWA0AzQAvAtBFAAQBEAAAwgtQA0gzAAhWQAAhVg0gyQgwguhEAAQhFAAgvAug");
	this.shape_5.setTransform(234.9712,371.2766,0.0922,0.0922);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0706").s().p("AjfEDQhthgAAijQAAihBthgQBhhXCKAAQBgABBLAqQBVAwAkBYIiXA8QgVgrgigTQgigTg0AAQhOAAgtA4QgrAzAABPQAABUAtAyQAuAzBLAAQA2AAAggRQAkgTAWgvIiPAAIAAiUIE+AAQAEA8gEAnQgEA1gPAtQgiBihYAzQhMAshmAAQiLAAhghVg");
	this.shape_6.setTransform(227.0294,371.2582,0.0922,0.0922);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED1C24").s().p("AoTLkIgEgGQgOgWgDgiQgCgiAKgmQAIgkAPgXIDTlsQgegFgrgOQhWgchCgyQhehFgphkQgMgbgHgcQgbhrAZiFIACgLQAVhjA6hOQA0hFBPgyQBBgoBNgWQA/gSAyAAQBxAABcAbQBIAXA5AmQApAbAbAhQAOARAGALQAngpAigYQAggYAigLQAegLAlgDQAdgCAwABQBaAKBGBJQAWAXASAaIAMAWQhmgwhLANQg9AKgoAwQgcAjgQAzQgHAZgCATIBpNKIBmBfIBehGIApBCIj6C4Ii7iZIgKhXIlVDmIksjpIg3BiQAOAXAJAgQAKAiAAAeQgBAXgIARQgCAGgEAFQgQAVggAAQgoAAgWgagAkNEWIE8D3IDFiKIgejLImrAAgAmyoOQg1AdgpAyQgpAxgUA7QgUA9AGA7QAJBXAiBCQAgA8AzAmQAuAjA7AQQA1APA4gDICIjkQgCgRgIgYQgPgxgagnQgmg1g2gZQhFgehcARIAJgNQALgQAPgOQAygtBMgHQApgEAfACQAjABAeAKQBCAVBCBCIAUgcQgHgLgNgQQgdgigjgbQgygng4gWQhGgbhNAAQg8AAg4AegAh+AhIFAAAIg6m6g");
	this.shape_7.setTransform(269.0882,351.7906,0.8085,0.8085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(206));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(21.7,114.35,0.6478,0.6478);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206));

	// bm
	this.instance_2 = new lib.bm_1();
	this.instance_2.setTransform(128.5,86.6,0.8419,0.8419,0.0903,0,0,159.9,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// mask2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_73 = new cjs.Graphics().p("A2pF0IAAnaMAuZAAAIAAHag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_73,x:152,y:37.1519}).wait(133));

	// t2
	this.instance_3 = new lib.Tween2_1("synched",0);
	this.instance_3.setTransform(155.2,83.55);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(73).to({_off:false},0).to({y:51.55},8).wait(125));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AylDoIAAnQMAlLAAAIAAHQg");
	mask_1.setTransform(113.55,20.0663);

	// t1
	this.instance_4 = new lib.Tween1_1("synched",0);
	this.instance_4.setTransform(109.7,56.05);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:23.55},8).wait(198));

	// Layer_19
	this.instance_5 = new lib.Tween17("synched",0);
	this.instance_5.setTransform(160,240);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({alpha:1},6).wait(195));

	// jari2_png
	this.instance_6 = new lib.jari2();
	this.instance_6.setTransform(279,202,0.7,0.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({_off:true},4).wait(28).to({_off:false},0).to({_off:true},3).wait(139));

	// jari1_png
	this.instance_7 = new lib.jari1();
	this.instance_7.setTransform(280,197,0.7,0.7);

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.setTransform(304.5,222.55);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween10("synched",0);
	this.instance_9.setTransform(304.5,222.55);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[]},32).to({state:[{t:this.instance_7}]},4).to({state:[]},28).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},31).to({state:[{t:this.instance_9}]},5).to({state:[]},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},0).to({_off:true,alpha:0},5).wait(103));

	// arrow_png
	this.instance_10 = new lib.Tween1("synched",0);
	this.instance_10.setTransform(287.55,200.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({startPosition:0},0).to({scaleX:0.8438,scaleY:0.8438},3).to({scaleX:1,scaleY:1},2).wait(27).to({startPosition:0},0).to({scaleX:0.8438,scaleY:0.8438},3).to({scaleX:1,scaleY:1},2).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(102));

	// arrow_png
	this.instance_11 = new lib.Tween2("synched",0);
	this.instance_11.setTransform(172.55,200.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(102));

	// avatar1_png
	this.instance_12 = new lib.avatar1();

	this.instance_13 = new lib.Tween6("synched",0);
	this.instance_13.setTransform(160,240);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},35).to({state:[{t:this.instance_13}]},5).to({state:[]},1).wait(165));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(35).to({_off:false},0).to({alpha:0},5,cjs.Ease.sineIn).to({_off:true},1).wait(165));

	// avatar2_png
	this.instance_14 = new lib.Tween7("synched",0);
	this.instance_14.setTransform(160,240);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({_off:false},0).to({alpha:1},5,cjs.Ease.sineIn).wait(26).to({startPosition:0},0).to({alpha:0},5,cjs.Ease.sineIn).to({_off:true},1).wait(134));

	// avatar3_png
	this.instance_15 = new lib.Tween8("synched",0);
	this.instance_15.setTransform(160,240);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(66).to({_off:false},0).to({alpha:1},5).wait(27).to({startPosition:0},0).to({scaleX:0.6938,scaleY:0.6938,x:215,y:199.55},9,cjs.Ease.sineOut).wait(99));

	// Layer_15 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("ArKM3IAA5tIWVAAIAAZtg");
	var mask_2_graphics_98 = new cjs.Graphics().p("ArKM3IAA5tIWVAAIAAZtg");
	var mask_2_graphics_99 = new cjs.Graphics().p("ArKM3IAA5tIWVAAIAAZtg");
	var mask_2_graphics_100 = new cjs.Graphics().p("ArKM3IAA5tIWVAAIAAZtg");
	var mask_2_graphics_101 = new cjs.Graphics().p("ArKM3IAA5tIWVAAIAAZtg");
	var mask_2_graphics_102 = new cjs.Graphics().p("ArKM3IAA5tIWVAAIAAZtg");
	var mask_2_graphics_103 = new cjs.Graphics().p("ArKM3IAA5tIWVAAIAAZtg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:231.05,y:200.7}).wait(98).to({graphics:mask_2_graphics_98,x:231.05,y:200.7}).wait(1).to({graphics:mask_2_graphics_99,x:231.05,y:200.7}).wait(1).to({graphics:mask_2_graphics_100,x:231.05,y:200.7}).wait(1).to({graphics:mask_2_graphics_101,x:231.05,y:200.7}).wait(1).to({graphics:mask_2_graphics_102,x:231.05,y:200.7}).wait(1).to({graphics:mask_2_graphics_103,x:231.05,y:200.7}).wait(1).to({graphics:null,x:0,y:0}).wait(102));

	// out1_png
	this.instance_16 = new lib.out1_1();
	this.instance_16.setTransform(160,240,1,1,0,0,0,160,240);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(35).to({x:307.45},5,cjs.Ease.sineIn).to({_off:true},1).wait(165));

	// out3_png
	this.instance_17 = new lib.out2_1();
	this.instance_17.setTransform(46,240,1,1,0,0,0,160,240);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({_off:false},0).to({x:160},5).wait(26).to({x:304.95},5,cjs.Ease.sineIn).to({_off:true},1).wait(134));

	// out2_png
	this.instance_18 = new lib.out3_1();
	this.instance_18.setTransform(37,240,1,1,0,0,0,160,240);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(66).to({_off:false},0).to({x:160},5,cjs.Ease.sineIn).wait(27).to({alpha:0},5).to({_off:true},1).wait(102));

	// frame_png
	this.instance_19 = new lib.frame();

	this.instance_20 = new lib.Tween14("synched",0);
	this.instance_20.setTransform(160,240);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_20}]},98).to({state:[{t:this.instance_20}]},5).to({state:[]},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(98).to({_off:false},0).to({alpha:0},5).to({_off:true},1).wait(102));

	// bg
	this.instance_21 = new lib.bg1();
	this.instance_21.setTransform(0,0,0.6729,0.6729);

	this.instance_22 = new lib.Tween15("synched",0);
	this.instance_22.setTransform(159.95,239.95,1.0094,1.0094);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_22}]},98).to({state:[{t:this.instance_22}]},5).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(98).to({_off:false},0).to({alpha:0},5).wait(103));

	// Layer_16
	this.instance_23 = new lib.bg2();
	this.instance_23.setTransform(0,0,0.6667,0.6667);

	this.instance_24 = new lib.Tween16("synched",0);
	this.instance_24.setTransform(160,240,0.6667,0.6667);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.instance_24}]},100).to({state:[{t:this.instance_24}]},7).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(100).to({_off:false},0).to({scaleX:0.7083,scaleY:0.7083},7).wait(99));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150.1,124.4,180.00000000000003,370.70000000000005);
// library properties:
lib.properties = {
	id: 'FC0EBBA07F2F41999820BD1C727B33E4',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/avatar1.png", id:"avatar1"},
		{src:"images/avatar2.png", id:"avatar2"},
		{src:"images/avatar3.png", id:"avatar3"},
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/bm.png", id:"bm"},
		{src:"images/bolong.jpg", id:"bolong"},
		{src:"images/BukanMain03.png", id:"BukanMain03"},
		{src:"images/BukanMain04.png", id:"BukanMain04"},
		{src:"images/BukanMain05.png", id:"BukanMain05"},
		{src:"images/BukanMain07.png", id:"BukanMain07"},
		{src:"images/BukanMain08.png", id:"BukanMain08"},
		{src:"images/BukanMain09.png", id:"BukanMain09"},
		{src:"images/BukanMain11.png", id:"BukanMain11"},
		{src:"images/BukanMain13.png", id:"BukanMain13"},
		{src:"images/CTAcopy.png", id:"CTAcopy"},
		{src:"images/frame.png", id:"frame"},
		{src:"images/jari1.png", id:"jari1"},
		{src:"images/jari2.png", id:"jari2"},
		{src:"images/out1.png", id:"out1"},
		{src:"images/out2.png", id:"out2"},
		{src:"images/out3.png", id:"out3"},
		{src:"images/shadow.png", id:"shadow"}
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
an.compositions['FC0EBBA07F2F41999820BD1C727B33E4'] = {
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