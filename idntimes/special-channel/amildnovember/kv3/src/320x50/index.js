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


(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,105);


(lib.avatar1 = function() {
	this.initialize(img.avatar1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,281);


(lib.avatar2 = function() {
	this.initialize(img.avatar2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,281);


(lib.avatar3 = function() {
	this.initialize(img.avatar3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,281);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.BukanMain02 = function() {
	this.initialize(img.BukanMain02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain03 = function() {
	this.initialize(img.BukanMain03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain05 = function() {
	this.initialize(img.BukanMain05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain07 = function() {
	this.initialize(img.BukanMain07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain09 = function() {
	this.initialize(img.BukanMain09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain10 = function() {
	this.initialize(img.BukanMain10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain11 = function() {
	this.initialize(img.BukanMain11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain12 = function() {
	this.initialize(img.BukanMain12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain13 = function() {
	this.initialize(img.BukanMain13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BukanMain15 = function() {
	this.initialize(img.BukanMain15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


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
	this.instance.setTransform(-255,-364,0.7296,0.7296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255,-364,466.9,73);


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
	this.instance.setTransform(-160,-240,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,50);


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
	this.instance.setTransform(-242,-254,1.3665,1.0538);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242,-254,437.3,505.8);


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
	this.instance.setTransform(-160,-240,0.3556,0.3555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,99.9);


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
	this.instance.setTransform(-160,-240,0.3556,0.3555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,99.9);


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
	this.instance.setTransform(-160,-240,0.3556,0.3555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,99.9);


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
	this.instance.setTransform(-189,-272,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189,-272,358.4,537.6);


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
	this.instance.setTransform(-183,-267,1.1134,1.1134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-267,356.3,534.5);


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


(lib.Tween2copy = function(mode,startPosition,loop,reversed) {
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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANkBxQgMgDgGgLIgFgMIgDgQIgDhHIADhGIADgQIAFgMQADgFAFgDQAEgEAGgCQAFgCAJgBIATgCQAVABAMAEQALAEAGAKIAFAMIAGBWIgGBXIgFAMQgDAFgEADQgEAEgGACIgOADIgTACQgWgBgLgEgAN9hEQgDABgBACIgBAGIgBBpIABAKIABAFQABAEADABIAIABIAIgBQACgBACgEIACgPIAAhfIgCgQQgCgCgCgBQgCgCgGAAQgGAAgCACgACkBxQgMgDgGgLIgFgMIgDgRIgDhHIADhGIADgQIAFgMQAGgJAMgEQALgEAWgBQAZAAAMAHQANAGAFAQQAEAMAAAVIAAAMIgsAAIAAgDIAAgMIgCgHQgBgFgMAAQgGAAgDACQgDABgBACIgDAQIAABgIACAOQADAGAMAAQAGAAADgBIAEgFIACgDIABgEIABgdIgWAAIAAgsIBAAAIAABLIgCAUIgDANIgFAKQgDAFgEADQgEAEgGACIgOADIgTACQgWgBgLgEgAmFByQgMgEgGgJIgEgIIgEgKIgCgQIgBizIAxAAIAACoIACAHQACACACABIAHABIAHgBQADgBACgCIABgHIABioIAvAAIgBCzIgDAQIgDAKIgEAIIgHAIQgEADgGACIgOACIgTACQgWAAgLgEgAoPBxQgLgEgGgIQgHgJgCgOQgCgNAAgSIABgVIAqAAIACAeIABAFQACAGAJAAIAKgBQACgBACgEIACgPIAAieIAxAAIgDC0IgDATQgCAHgDAFQgDAFgEADQgFAEgGACIgPADIgTACQgTAAgMgFgAsjByQgLgEgGgJIgFgIIgDgKIgDjDIAwAAIABCoIABAHQACACADABIAHABIAHgBQADgBABgCIACgHIAAioIAvAAIgBCzIgCAQIgDAKIgFAIIgHAIQgEADgGACIgOACIgTACQgVAAgMgEgALeBxIAAjhIAvAAIAACvIAwAAIAAAygAJkBxIgEg0IgXAAIgDA0IgwAAIAZjhIBPAAIAXDhgAJeAPIgIhQIgDAAIgIBQIATAAgAG3BxIAAhSIgpiOIAAgBIAxAAIAQBJIADAAIARhJIAvAAIAAABIgoCNIAABTgAFZBxIgEg0IgXAAIgEA0IgvAAIAYjhIBPAAIAXDhgAFTAPIgIhQIgEAAIgHBQIATAAgAAkBxIg1h4IgCAAIAAB4IgrAAIAAjhIAuAAIAfBPIACAAIAAhPIArAAIAADhgAiCBxIAAjhIAwAAIAADhgAjGBxIgchlIgDAAIAABlIgwAAIAAjhIAwAAIAABeIADAAIAeheIAyAAIAAABIgjBlIAlB6IAAABgApQBxIg2h4IgCAAIAAB4IgrAAIAAjhIAuAAIAgBPIACAAIAAhPIArAAIAADhgAueBxIAAiyIgjAAIAAgvIB2AAIAAAvIgkAAIAACyg");
	this.shape.setTransform(-27.8384,7.2902,1.2004,1.2004);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.3,-6.8,231,28.2);


(lib.Tween1copy = function(mode,startPosition,loop,reversed) {
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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACiByQgLgEgGgLIgFgLIgEgSIgCgbIAChyIAEgRIAFgLQAGgKALgDQAMgFAWAAQAZABAMAGQAMAHAGAPQADAMAAAVIAAALIgrAAIAAgCIAAgMIgCgHQgBgFgMAAQgHAAgCACQgDABgCACIgCAQIAABfIACAPQACAGANABQAFgBADgBIAFgFIACgCIABgFIABgdIgXAAIAAgsIBBAAIgDBfIgDANIgFAKQgDAFgDADQgFAEgFADIgOACIgTABQgXAAgLgDgAMmByIgdhmIgDAAIAABmIgvAAIAAjiIAvAAIAABeIADAAIAfheIAxAAIAAABIgjBlIAmB6IAAACgAKYByIgEg1IgXAAIgDA1IgwAAIAYjiIBQAAIAWDigAKSAPIgIhQIgDAAIgIBQIATAAgAIkByIg2h5IgBAAIAAB5IgrAAIAAjiIAuAAIAgBOIABAAIAAhOIAsAAIAADigAFMByIAAjiIBjAAIAAAvIg1AAIAAAoIA1AAIAAAtIg1AAIAAArIA1AAIAAAzgABeByIg2h5IgDAAIAAB5IgpAAIAAjiIAtAAIAgBOIABAAIAAhOIAsAAIAADigAhCByIgEg1IgXAAIgEA1IgvAAIAZjiIBPAAIAWDigAhIAPIgIhQIgDAAIgIBQIATAAgAjvByIAAhTIgpiOIAAgBIAwAAIAQBJIADAAIARhJIAwAAIAAABIgoCNIAABUgAmOByIAAheIgdAAIAABeIgxAAIAAjiIAxAAIAABXIAdAAIAAhXIAwAAIAADigAogByIAAjiIAwAAIAADigAqOByIAAjiIAvAAIAACvIAwAAIAAAzgArTByIAAjiIAwAAIAADigAtaByIAAjiIBDAAQAPAAAKADQALAEAFAKQAGAJADAOQACAQAAAVQAAAXgCAOQgDAPgGAKQgFAJgLAFQgKAEgPAAIgUAAIAABFgAsrgBIAMAAQAGAAADgHQADgIAAgUQAAgSgDgFQgDgGgIAAIgKAAg");
	this.shape.setTransform(7.5197,4.1842,1.2329,1.2329);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-10.3,211.9,29);


(lib.bm = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BukanMain02();

	this.instance_1 = new lib.BukanMain03();

	this.instance_2 = new lib.BukanMain05();

	this.instance_3 = new lib.BukanMain07();

	this.instance_4 = new lib.BukanMain09();

	this.instance_5 = new lib.BukanMain10();

	this.instance_6 = new lib.BukanMain11();

	this.instance_7 = new lib.BukanMain12();

	this.instance_8 = new lib.BukanMain13();

	this.instance_9 = new lib.BukanMain15();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},105).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(92));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	var mask_graphics_73 = new cjs.Graphics().p("A2pF0IAAnaMAuZAAAIAAHag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_73,x:152,y:37.1519}).wait(133));

	// t2
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(155.2,83.55);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).to({y:51.55},8).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.9,74.3);


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
	mask.graphics.p("AylDoIAAnPMAlLAAAIAAHPg");
	mask.setTransform(113.55,20.0657);

	// t1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(109.7,56.05);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23.55},8).wait(198));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.2,43.3);


(lib.jariarrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// jari2_png
	this.instance = new lib.jari2();
	this.instance.setTransform(279,202,0.7,0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({_off:true},4).wait(28).to({_off:false},0).to({_off:true},3).wait(139));

	// jari1_png
	this.instance_1 = new lib.jari1();
	this.instance_1.setTransform(280,197,0.7,0.7);

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.setTransform(304.5,222.55);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(304.5,222.55);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},32).to({state:[{t:this.instance_1}]},4).to({state:[]},28).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},31).to({state:[{t:this.instance_3}]},5).to({state:[]},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98).to({_off:false},0).to({_off:true,alpha:0},5).wait(103));

	// arrow_png
	this.instance_4 = new lib.Tween1copy("synched",0);
	this.instance_4.setTransform(287.55,200.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({startPosition:0},0).to({scaleX:0.8438,scaleY:0.8438},3).to({scaleX:1,scaleY:1},2).wait(27).to({startPosition:0},0).to({scaleX:0.8438,scaleY:0.8438},3).to({scaleX:1,scaleY:1},2).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(102));

	// arrow_png
	this.instance_5 = new lib.Tween2copy("synched",0);
	this.instance_5.setTransform(172.55,200.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(102));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329,248.9);


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
p.nominalBounds = new cjs.Rectangle(-25,-29,360.3,536.5);


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
p.nominalBounds = new cjs.Rectangle(-31,-34,360.4,541.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({_off:false},0).to({alpha:1},9).wait(85));

	// Layer_20
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.setTransform(96.5,376.5,1.7402,1.7402);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(106).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.sineOut).wait(7).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(12).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(12).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,0,326.1,469);


(lib.avatarmc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// avatar1_png
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({startPosition:0},0).to({alpha:0},5,cjs.Ease.sineIn).to({_off:true},1).wait(165));

	// avatar2_png
	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(160,240);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({alpha:1},5,cjs.Ease.sineIn).wait(26).to({startPosition:0},0).to({alpha:0},5,cjs.Ease.sineIn).to({_off:true},1).wait(134));

	// avatar3_png
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.setTransform(160,240);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({alpha:1},5).wait(27).to({startPosition:0},0).to({regX:0.2,regY:0.3,scaleX:1.0445,scaleY:1.0445,x:159.5,y:251},9,cjs.Ease.sineOut).wait(99));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,0,334.40000000000003,104.6);


(lib.outfit = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.jariarrow();
	this.instance.setTransform(257.85,216.95,1.4198,1.4198,0,0,0,246.5,218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	// Layer_15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AklWHIAA5sIemAAIAAZsg");
	var mask_graphics_98 = new cjs.Graphics().p("AklWHIAA5sIemAAIAAZsg");
	var mask_graphics_99 = new cjs.Graphics().p("AklWHIAA5sIemAAIAAZsg");
	var mask_graphics_100 = new cjs.Graphics().p("AklWHIAA5sIemAAIAAZsg");
	var mask_graphics_101 = new cjs.Graphics().p("AklWHIAA5sIemAAIAAZsg");
	var mask_graphics_102 = new cjs.Graphics().p("AklWHIAA5sIemAAIAAZsg");
	var mask_graphics_103 = new cjs.Graphics().p("AklWHIAA5sIemAAIAAZsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:166.5001,y:141.475}).wait(98).to({graphics:mask_graphics_98,x:166.5001,y:141.475}).wait(1).to({graphics:mask_graphics_99,x:166.5001,y:141.475}).wait(1).to({graphics:mask_graphics_100,x:166.5001,y:141.475}).wait(1).to({graphics:mask_graphics_101,x:166.5001,y:141.475}).wait(1).to({graphics:mask_graphics_102,x:166.5001,y:141.475}).wait(1).to({graphics:mask_graphics_103,x:166.5001,y:141.475}).wait(1).to({graphics:null,x:0,y:0}).wait(102));

	// out1_png
	this.instance_1 = new lib.out1_1();
	this.instance_1.setTransform(160,240,1,1,0,0,0,160,240);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({x:307.45},5,cjs.Ease.sineIn).to({_off:true},1).wait(165));

	// out3_png
	this.instance_2 = new lib.out2_1();
	this.instance_2.setTransform(46,240,1,1,0,0,0,160,240);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({x:160},5).wait(26).to({x:304.95},5,cjs.Ease.sineIn).to({_off:true},1).wait(134));

	// out2_png
	this.instance_3 = new lib.out3_1();
	this.instance_3.setTransform(37,240,1,1,0,0,0,160,240);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({x:160},5,cjs.Ease.sineIn).wait(27).to({alpha:0},5).to({_off:true},1).wait(102));

	// frame_png
	this.instance_4 = new lib.Tween14("synched",0);
	this.instance_4.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(102));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-14,457,505.8);


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
	this.instance_2.setTransform(243.05,23.75,0.2985,0.2985,0,0,0,103.7,393.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// Layer_2
	this.instance_3 = new lib.bm();
	this.instance_3.setTransform(97.4,34.35,0.4799,0.4799,0,0,0,150.3,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(206));

	// Layer_5
	this.instance_4 = new lib.text2();
	this.instance_4.setTransform(53.7,30.4,0.4291,0.4291,0,0,0,127.5,59.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(206));

	// text
	this.instance_5 = new lib.text1();
	this.instance_5.setTransform(48.1,20.5,0.4291,0.4291,0,0,0,113.8,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(206));

	// Layer_3
	this.instance_6 = new lib.avatarmc();
	this.instance_6.setTransform(68.8,-6.1,0.6068,0.6068);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(206));

	// Layer_1
	this.instance_7 = new lib.outfit();
	this.instance_7.setTransform(192.55,31.1,0.2119,0.2119,0,0,0,165,240.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(206));

	// bg
	this.instance_8 = new lib.Tween15("synched",0);
	this.instance_8.setTransform(160,239.9,1,0.9993);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(102));

	// Layer_16
	this.instance_9 = new lib.Tween16("synched",0);
	this.instance_9.setTransform(175.3,250.95,0.6875,0.6874);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({startPosition:0},0).to({scaleX:0.7083,scaleY:0.7083,x:175.25,y:257.2},7).wait(99));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(154.7,-59,170.7,153.6);
// library properties:
lib.properties = {
	id: '2DCB93F7C45E17409BA3627CA9D80794',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/avatar1.png", id:"avatar1"},
		{src:"images/avatar2.png", id:"avatar2"},
		{src:"images/avatar3.png", id:"avatar3"},
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/BukanMain02.png", id:"BukanMain02"},
		{src:"images/BukanMain03.png", id:"BukanMain03"},
		{src:"images/BukanMain05.png", id:"BukanMain05"},
		{src:"images/BukanMain07.png", id:"BukanMain07"},
		{src:"images/BukanMain09.png", id:"BukanMain09"},
		{src:"images/BukanMain10.png", id:"BukanMain10"},
		{src:"images/BukanMain11.png", id:"BukanMain11"},
		{src:"images/BukanMain12.png", id:"BukanMain12"},
		{src:"images/BukanMain13.png", id:"BukanMain13"},
		{src:"images/BukanMain15.png", id:"BukanMain15"},
		{src:"images/CTAcopy.png", id:"CTAcopy"},
		{src:"images/frame.png", id:"frame"},
		{src:"images/jari1.png", id:"jari1"},
		{src:"images/jari2.png", id:"jari2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/out1.png", id:"out1"},
		{src:"images/out2.png", id:"out2"},
		{src:"images/out3.png", id:"out3"}
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
an.compositions['2DCB93F7C45E17409BA3627CA9D80794'] = {
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