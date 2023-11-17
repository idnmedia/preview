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


(lib.batu = function() {
	this.initialize(img.batu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,155);


(lib.bg728 = function() {
	this.initialize(img.bg728);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,124);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


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


(lib.orang = function() {
	this.initialize(img.orang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,994);


(lib.pohon = function() {
	this.initialize(img.pohon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,125);


(lib.shadow728 = function() {
	this.initialize(img.shadow728);
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
	this.instance = new lib.shadow728();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


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
	this.instance = new lib.box3();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


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
	this.shape.graphics.f("#000000").s().p("AK7BcQgNgIgFgOQgGgPAAgTIAAhIQAAgUAGgNQAFgPANgHQAMgIAVAAQAUAAAMAIQANAHAFAPQAFANABAUIAABIQgBATgFAPQgFAOgNAIQgMAIgUgBQgVABgMgIgALOhFQgEAEgBAHQgCAGAAAIIAABYQAAAJACAGQABAHAEADQAFAEAJABQAIgBAEgEQAEgDACgHQABgGABgJIAAhYQgBgIgBgGQgCgHgEgEQgEgDgIgBQgJABgFADgACVBcQgMgJgFgPQgFgPAAgUIAAhAQAAgVAFgPQAFgPAMgJQAMgHAWgBQATAAAMAHQAMAHAFAMQAFANAAASIAAAKIghAAIAAgLQgBgJgBgHQgBgHgEgDQgEgDgJgBQgJABgFAEQgEAFgBAHIgBAQIAABRQAAAKACAHQACAIAEADQAFAEAIABQAIAAAFgFQAEgEACgIQACgHAAgLIAAgSIgUAAIAAgWIA0AAIAABiIgXAAIgCgTQgEAJgIAHQgHAFgOAAQgUAAgKgHgAw4BcQgMgJgFgPQgEgOAAgTIAAhEQAAgVAEgOQAFgOAMgJQAMgHAWgBQAUABAMAGQALAHAEANQAGAMAAASIAAAPIgjAAIAAgQIgBgPQAAgHgEgDQgEgFgJAAQgJAAgEAFQgEAEgCAHQgBAHAAAJIAABTQAAALACAGQACAHAEAEQAFAEAHAAQAJAAAEgFQADgEABgHIABgQIAAgRIAjAAIAAAQQgBARgEANQgEAOgMAHQgMAIgUgBQgWAAgMgHgAPuBhIAAjBIAjAAIAADBgANnBhIAAjBIAuAAQAYgBANAHQAOAGAGAOQAFANAAAVIAABGQAAAVgFAOQgGAOgNAHQgNAHgXAAgAOLBIIALAAQAMABAFgFQAGgFABgHIABgVIAAhKQAAgLgCgHQgBgIgGgDQgFgDgMAAIgKAAgAJCBhIAAjBIAjAAIAACoIAvAAIAAAZgAHTBhIgwhzIAABzIgeAAIAAjBIAZAAIAvBuIAAhuIAeAAIAADBgAFRBhIgIgtIgiAAIgIAtIggAAIAmjBIAmAAIAnDBgAErAeIAbAAIgOhRgABNBhIgvhzIAABzIgeAAIAAjBIAYAAIAvBuIAAhuIAeAAIAADBgAgzBhIgIgtIgiAAIgIAtIghAAIAnjBIAmAAIAmDBgAhaAeIAbAAIgNhRgAjQBhIAAioIgfAAIAAgZIBhAAIAAAZIgfAAIAACogAkYBhIgvhzIAABzIgfAAIAAjBIAZAAIAvBuIAAhuIAeAAIAADBgAmaBhIgHgtIgjAAIgIAtIggAAIAmjBIAmAAIAnDBgAnAAeIAaAAIgNhRgAo3BhIAAioIgeAAIAAgZIBhAAIAAAZIgfAAIAACogArEBhIAAjBIAiAAIAADBgAsABhIgYhZIgRAAIAABZIgjAAIAAjBIAvAAQATAAAOAEQANAFAIALQAGALAAAUQAAAMgCAJQgCAJgFAHQgFAGgJAEIAbBfgAspgNIAMAAQAKAAAGgEQAGgDADgGQACgHABgKQgBgPgFgHQgFgHgPAAIgOAAgAuABhIgHgtIgjAAIgIAtIggAAIAmjBIAmAAIAnDBgAumAeIAaAAIgNhRgAQvBPIAAggIAgAAIAAAggAQvgBIAAggIAgAAIAAAgg");
	this.shape.setTransform(2.0674,3.7069,0.6608,0.6608);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-2.8,145.7,13.100000000000001);


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
	this.instance = new lib.pohon();
	this.instance.setTransform(-30,-235,0.5701,0.5701);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-235,57,71.30000000000001);


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
	this.instance = new lib.box2();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


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
	this.instance = new lib.box1();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


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
	this.instance = new lib.pohon();
	this.instance.setTransform(-38,-154,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-154,66,82.5);


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
	this.instance = new lib.batu();
	this.instance.setTransform(22.1,-218,0.2803,0.2804,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-218,84.1,43.5);


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

	// Layer_2
	this.instance = new lib.bg728();
	this.instance.setTransform(1787,-266,0.728,0.7278);

	this.instance_1 = new lib.bg728();
	this.instance_1.setTransform(1791,-266,0.728,0.7278,0,0,180);

	this.instance_2 = new lib.bg728();
	this.instance_2.setTransform(335,-266,0.728,0.7278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(335,-266,2180,90.30000000000001);


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
	this.instance = new lib.pohon();
	this.instance.setTransform(-29,-146,0.5982,0.5982);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-146,59.8,74.8);


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
	this.instance = new lib.batu();
	this.instance.setTransform(-44,-134,0.2833,0.2833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-134,85,43.900000000000006);


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
	this.shape.graphics.f("#FFFFFF").s().p("AMDBVQgKgIAAgWIAAgNIACgMIAfAAIAAAEIAAADQAAAKACAFQACADAHAAQAHAAADgDQACgEAAgLQAAgHgCgDQgCgEgFgEIgJgFIgKgEIgKgFIgIgFQgHgGgCgLQgBgMAAgSQAAgMACgKQACgIAFgFQAFgGAIgCQAJgDANAAQANAAAIACQAIACAGAFQAFAFACAHQACAIAAAMIAAALIgCAHIgfAAIAAgCIAAgFQAAgIgCgEQgCgDgHAAQgHAAgBADQgCAEAAAIQAAAHACAEQACADAEADIAKAFIAJAEIAHAEIAIAEIAGAGQADACACAFIADANIABASQAAARgCALQgDAKgFAHQgFAGgKADQgJADgNAAQgXAAgLgJgAKiBbQgJgCgEgIIgEgHIgDgIIgCgMIAAgTIAAh8IAmAAIAAB8IABAKIABAGQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAIAFABIAGgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIACgGIAAgKIAAh8IAmAAIAAB8IgBATIgCAMIgDAIIgDAHQgCAEgEADQgDACgFABIgLACIgPABQgSAAgJgDgACkBVQgKgIAAgWIAAgNIACgMIAfAAIAAAEIAAADQAAAKACAFQACADAHAAQAHAAADgDQACgEAAgLQAAgHgCgDQgCgEgFgEIgJgFIgKgEIgKgFIgIgFQgHgGgCgLQgBgMAAgSQAAgMACgKQACgIAFgFQAFgGAIgCQAJgDANAAQANAAAIACQAIACAGAFQAFAFACAHQACAIAAAMIAAALIgCAHIgfAAIAAgCIAAgFQAAgIgCgEQgCgDgHAAQgHAAgBADQgCAEAAAIQAAAHACAEQACADAEADIAKAFIAJAEIAHAEIAIAEIAGAGQADACACAFIADANIABASQAAARgCALQgDAKgFAHQgFAGgKADQgJADgNAAQgXAAgLgJgABDBbQgJgCgEgIIgEgHIgDgIIgCgMIAAgTIAAh8IAmAAIAAB8IABAKIABAGQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAIAFABIAGgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIACgGIAAgKIAAh8IAmAAIAAB8IgBATIgCAMIgDAIIgDAHQgCAEgEADQgDACgFABIgLACIgPABQgSAAgJgDgAQbBbIgrhhIgCAAIAABhIgiAAIAAi0IAlAAIAaA/IABAAIAAg/IAjAAIAAC0gAOaBbIgDgqIgSAAIgDAqIgmAAIAUi0IA/AAIASC0gAOHAMIAOAAIgGhAIgCAAgAJaBbIgBgEIgCgIIgCgPIgDgZIgBgKIgCgFIgCgDIgDgBIgGAAIAABHIgmAAIAAi0IA3AAQANgBAIADQAHADAFAFQAFAHACAJQABAJAAANIgBAXQgBAHgCAFQgCAEgCACIgHAEIAAACIADADIADAEIAEAOQACAIABAQIADASIABALIABAFIABAFIAAABgAJEgNIALAAQAFABACgFQACgFAAgMQAAgLgCgEQgDgEgFABIgKAAgAG/BbIAAi0IBQAAIAAAlIgqAAIAAAhIAqAAIAAAkIgqAAIAAAiIAqAAIAAAogAFxBbIAAiPIgcAAIAAglIBfAAIAAAlIgdAAIAACPgAgEBbIgBgEIgCgIIgCgPIgDgZIgBgKIgCgFIgCgDIgDgBIgGAAIAABHIgmAAIAAi0IA3AAQAMgBAIADQAHADAFAFQAFAHACAJQABAJAAANIgBAXQgBAHgCAFQgCAEgCACIgHAEIAAACIADADIADAEIAEAOQACAIABAQIADASIABALIABAFIABAFIAAABgAgagNIALAAQAFABACgFQACgFAAgMQAAgLgCgEQgDgEgFABIgKAAgAifBbIAAi0IBQAAIAAAlIgqAAIAAAhIAqAAIAAAkIgqAAIAAAiIAqAAIAAAogAjtBbIAAiPIgcAAIAAglIBfAAIAAAlIgdAAIAACPgAlmBbIgDgqIgSAAIgDAqIgmAAIAUi0IA/AAIASC0gAl5AMIAOAAIgGhAIgCAAgAnwBbIAAhCIghhyIAAAAIAnAAIAGAbIADAQIACAJIACAGIACAAIABgGIACgJIAEgQIAGgbIAmAAIAAAAIggByIAABCgAouBbIgrhhIgBAAIAABhIgiAAIAAi0IAlAAIAZA/IABAAIAAg/IAjAAIAAC0gAqyBbIgWhRIgDAAIABAGIAAAHIAABEIgnAAIAAi0IAnAAIAABBIgBAGIAAAEIADAAIAYhLIAnAAIAAAAIgbBSIAdBhIAAABgAsjBbIgDgqIgTAAIgCAqIgmAAIATi0IA/AAIATC0gAs3AMIAPAAIgGhAIgDAAgAuABbIgrhhIgBAAIAABhIgiAAIAAi0IAlAAIAZA/IABAAIAAg/IAjAAIAAC0gAwuBbIAAi0IBRAAIAAAlIgrAAIAAAhIAqAAIAAAkIgqAAIAAAiIArAAIAAAogAD/APIAAgeIBOAAIAAAeg");
	this.shape.setTransform(19.0866,7.4842,1.5169,1.5169);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.3,-6.8,324.8,28.6);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AInBbQgJgEgFgHIgEgJIgDgPIgCgVIAAgjIAAgiIACgXIADgMIAEgJQAFgJAJgCQAJgEARAAQAUAAAKAGQAKAEAEANQADAKAAARIAAAEIAAAFIgjAAIAAgCIAAgCIAAgJIgBgEQgBgFgKAAIgHACQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAEIgBAIIAAAPIgBAXIABAYIAAAPIABAHIAAAEQACAFAKAAIAHgBQACgBACgDIABgCIABgDIAAgGIAAgIIAAgJIgRAAIAAgkIAzAAIABAOIAAAVIgBAZIgBAQIgDALIgEAIIgFAGIgIAFIgMACIgPABQgRAAgJgDgAmoBVQgKgIAAgVIAAgPIACgLIAfAAIAAADIAAAEQAAAKACAEQACAFAHAAQAHgBADgDQACgDAAgMQAAgHgCgDQgCgEgFgDIgJgGIgKgEIgKgFIgIgFQgHgHgCgKQgBgMAAgSQAAgMACgKQACgIAFgGQAFgFAIgCQAJgDANAAQANAAAIACQAIACAGAFQAFAFACAHQACAIAAAMIAAALIgCAIIgfAAIAAgDIAAgFQAAgJgCgDQgCgDgHAAQgHAAgBADQgCADAAAJQAAAIACADQACADAEADIAKAFIAJAEIAHADIAIAFIAGAFQADADACAFIADANIABATQAAAQgCALQgDALgFAGQgFAHgKADQgJACgNAAQgXAAgLgJgAM4BbIgrhhIgBAAIAABhIgiAAIAAi0IAlAAIAZA/IABAAIAAg/IAjAAIAAC0gAK4BbIgDgqIgTAAIgCAqIgmAAIATi0IA/AAIATC0gAKkAMIAPAAIgGhAIgDAAgAHvBbIgrhhIgBAAIAABhIgiAAIAAi0IAlAAIAZA/IABAAIAAg/IAjAAIAAC0gAFvBbIgDgqIgTAAIgCAqIgmAAIATi0IA/AAIATC0gAFbAMIAPAAIgGhAIgDAAgADoBbIAAiOIgcAAIAAgmIBfAAIAAAmIgdAAIAACOgACtBbIgrhhIgBAAIAABhIgiAAIAAi0IAlAAIAZA/IABAAIAAg/IAjAAIAAC0gAAtBbIgDgqIgTAAIgCAqIglAAIASi0IA/AAIATC0gAAZAMIAPAAIgGhAIgDAAgAhZBbIAAiOIgcAAIAAgmIBfAAIAAAmIgdAAIAACOgAjDBbIgrhhIgCAAIAABhIgiAAIAAi0IAlAAIAaA/IABAAIAAg/IAjAAIAAC0gAlJBbIAAi0IAmAAIAAC0gAoOBbIAAi0IBQAAIAAAmIgqAAIAAAfIAqAAIAAAlIgqAAIAAAhIAqAAIAAApgApCBbIgBgFIgBgIIgCgNIgDgaIgBgJIgCgHIgDgCIgDgBIgFAAIAABHIgmAAIAAi0IA3AAQAMAAAIACQAIADAFAGQAEAFACAKQACAJAAANIgBAXQgBAHgCAFQgCAFgDABIgHAEIAAACIADADIADAEIAEAOQACAIACAQIACARIABAMIABAFIACAFIAAABgApXgNIAKAAQAFABADgFQACgEAAgNQAAgLgDgEQgCgDgGAAIgJAAgArdBbIAAi0IBRAAIAAAmIgrAAIAAAfIAqAAIAAAlIgqAAIAAAhIArAAIAAApgAtLBbIAAi0IA2AAQAMAAAIACQAIADAFAGQAFAFACAKQACAJAAANIAAARIgDAJQgBAFgDADIgGAEIAAACIAHADQADACACAFQACADABAJIABAVQAAANgCAKQgCAJgFAGQgFAGgIACQgHADgNAAgAslA3IAMAAQAFgBADgDQACgDAAgLQAAgNgCgEQgCgGgFAAIgNAAgAslgPIALAAQAFAAACgFQACgEAAgMQAAgLgCgDQgDgEgFABIgKAAg");
	this.shape.setTransform(25.4065,4.3947,1.467,1.467);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-9.4,247.70000000000002,27.6);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},99).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(98));

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
	var mask_graphics_87 = new cjs.Graphics().p("A+RF0IAAnaMA8jAAAIAAHag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_graphics_87,x:155.5359,y:37.15}).wait(119));

	// t2
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(155.2,83.55);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({y:51.55},8).wait(111));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.7,74.3);


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
	mask.graphics.p("A9EDoIAAnQMA6JAAAIAAHQg");
	mask.setTransform(113.5744,20.05);

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
p.nominalBounds = new cjs.Rectangle(0,0,259,43.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({alpha:1},9).wait(82));

	// Layer_20
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.setTransform(96.5,376.5,1.7402,1.7402);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.sineOut).wait(7).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(12).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(12).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,0,326.1,469);


(lib.box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// box3_png
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(861.75,190.9,0.3559,0.3559,0,0,0,74,-73.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({regY:-74,scaleX:1,scaleY:1,x:314,y:191,alpha:1},10,cjs.Ease.sineOut).wait(121));

	// box2_png
	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(857.25,189.9,0.3622,0.3622,0,0,0,77.3,-75);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({regX:62.3,regY:-73.7,scaleX:1,scaleY:1,x:302.3,y:191.3,alpha:1},9,cjs.Ease.sineOut).wait(36).to({regX:77,regY:-75,x:317,y:190},0).to({regX:77.1,scaleX:0.8105,scaleY:0.8105,x:-352.75,y:189.95,alpha:0},8,cjs.Ease.sineOut).to({_off:true},1).wait(122));

	// box1_png
	this.instance_2 = new lib.box1();

	this.instance_3 = new lib.Tween8("synched",0);
	this.instance_3.setTransform(311,196,1,1,0,0,0,71,-69);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_3}]},7).to({state:[]},1).wait(168));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({scaleX:0.9184,scaleY:0.9184,x:-382.75,alpha:0},7,cjs.Ease.sineOut).to({_off:true},1).wait(168));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-668.3,0,1589.1,530);


// stage content:
(lib._728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape_96.setTransform(702.7129,52.7646,0.0585,0.0585);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0C0706").s().p("Ai4FQIAAqgIFoAAIAACaIi9AAIAABgIDDAAIAACYIjDAAIAAB2IDGAAIAACYg");
	this.shape_97.setTransform(693.3267,52.7646,0.0585,0.0585);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0C0706").s().p("ABoFQIAAkOIjPAAIAAEOIiwAAIAAqgICwAAIAAD1IDPAAIAAj1ICwAAIAAKgg");
	this.shape_98.setTransform(689.0257,52.7646,0.0585,0.0585);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_99.setTransform(697.7419,52.7397,0.0585,0.0585);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_100.setTransform(684.1219,52.7397,0.0585,0.0585);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0C0706").s().p("AjsEFQhshhAAikQAAikBshhQBhhXCLAAQCMAABhBXQBsBhAACkQAACkhsBhQhhBYiMAAQiLAAhhhYgAhziHQg0AyAABVQAABWA0AzQAvAtBFAAQBEAAAwgtQA0gzAAhWQAAhVg0gyQgwguhEAAQhFAAgvAug");
	this.shape_101.setTransform(672.6715,52.7734,0.0585,0.0585);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0C0706").s().p("AjfEDQhthgAAijQAAihBthgQBhhXCKAAQBgABBLAqQBVAwAkBYIiXA8QgVgrgigTQgigTg0AAQhOAAgtA4QgrAzAABPQAABUAtAyQAuAzBLAAQA2AAAggRQAkgTAWgvIiPAAIAAiUIE+AAQAEA8gEAnQgEA1gPAtQgiBihYAzQhMAshmAAQiLAAhghVg");
	this.shape_102.setTransform(667.6332,52.7616,0.0585,0.0585);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ED1C24").s().p("AkQF8IgCgEQgIgLgBgRQgBgSAFgTQAEgTAIgLIBsi7QgPgDgWgGQgsgPgigaQgwgkgVgyQgGgOgEgPQgOg2ANhEIABgGQALgzAegoQAagkApgZQAhgUAngLQAhgKAaAAQA5AAAvAOQAlALAdAVQAVANAOARQAHAIADAHQAVgWARgMQAQgMARgGQAQgGATgBQAPgBAYAAQAvAGAkAlQALALAJAOIAGALQg0gZgnAHQgfAFgUAZQgPASgIAaQgEAOgBAJIA2GwIA1AwIAwgkIAVAiIiABeIhghOIgFgtIivB3IiZh4IgdAyQAHAMAFAQQAFASAAAPQAAAMgEAIIgEAGQgIALgQAAQgVAAgLgNgAiKCOICiB/IBlhHIgQhnIjaAAgAjekOQgcAPgVAaQgUAagLAdQgKAgADAeQAEAtASAiQAQAfAbASQAXATAeAIQAcAHAcgBIBGh1IgFgVQgIgZgNgUQgTgbgcgNQgjgPgwAIIAFgGQAFgJAIgGQAagYAngDQAVgCAPABQATABAPAEQAiALAiAiIAKgOIgKgPQgPgQgSgOQgagVgcgLQgkgOgoAAQgeAAgdAPgAhAARICjAAIgdjig");
	this.shape_103.setTransform(694.0311,40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]}).wait(206));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(583.25,41.25,0.6365,0.6365,0,0,0,104,393.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206));

	// Layer_2
	this.instance_2 = new lib.bm();
	this.instance_2.setTransform(252.1,63.9,0.8526,0.8526,-9.4778,0,0,150.5,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// Layer_5
	this.instance_3 = new lib.text2();
	this.instance_3.setTransform(97.45,49.3,0.7726,0.7726,0,0,0,127.4,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(206));

	// text
	this.instance_4 = new lib.text1();
	this.instance_4.setTransform(91.35,29,0.8123,0.8123,0,0,0,113.7,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(206));

	// orang
	this.instance_5 = new lib.orang();
	this.instance_5.setTransform(276,-70,0.3287,0.3287);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(206));

	// box
	this.instance_6 = new lib.box();
	this.instance_6.setTransform(403.65,79.85,0.652,0.652,0,0,0,240.3,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(206));

	// Layer_4
	this.instance_7 = new lib.Tween14("synched",0);
	this.instance_7.setTransform(364,45);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},7).wait(199));

	// batu3
	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.setTransform(771.25,368.3,1.7709,1.7709,0,0,180,0.2,0.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75).to({_off:false},0).to({x:143.1},8,cjs.Ease.sineOut).wait(123));

	// batu2
	this.instance_9 = new lib.Tween6("synched",0);
	this.instance_9.setTransform(931.7,396.1,1.9142,1.9142,0,0,180,-0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({x:429.25,y:394.55},7,cjs.Ease.sineOut).wait(38).to({startPosition:0},0).to({x:-122.85,y:397.45},8,cjs.Ease.sineOut).to({_off:true},1).wait(122));

	// batu1
	this.instance_10 = new lib.Tween3("synched",0);
	this.instance_10.setTransform(156.3,225.55,1.8214,1.8214);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({startPosition:0},0).to({x:-165.25},7,cjs.Ease.sineOut).to({_off:true},1).wait(168));

	// pohon3
	this.instance_11 = new lib.Tween10("synched",0);
	this.instance_11.setTransform(1118.4,365.7,1.7709,1.7709,0,0,0,0.1,0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(75).to({_off:false},0).to({x:490.25},8,cjs.Ease.sineOut).wait(123));

	// pohon2
	this.instance_12 = new lib.Tween7("synched",0);
	this.instance_12.setTransform(779.2,170.45,1.3471,1.3471);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(30).to({_off:false},0).to({x:276.75,y:168.9},7,cjs.Ease.sineOut).wait(38).to({startPosition:0},0).to({x:-275.35,y:171.8},8).to({_off:true},1).wait(122));

	// pohon1
	this.instance_13 = new lib.Tween4("synched",0);
	this.instance_13.setTransform(263.9,206.3,1.7421,1.7421,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({startPosition:0},0).to({x:-57.65},7,cjs.Ease.sineOut).to({_off:true},1).wait(168));

	// Layer_1
	this.instance_14 = new lib.Tween5("synched",0);
	this.instance_14.setTransform(-336,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(30).to({startPosition:0},0).to({x:-1061,y:265.1},7,cjs.Ease.sineOut).wait(38).to({startPosition:0},0).to({x:-1784.85},8).wait(123));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1085.8,-47.8,3264.8,304.5);
// library properties:
lib.properties = {
	id: 'C4AA3C9042EE6C44BAE0A79A3AF4451B',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/batu.png", id:"batu"},
		{src:"images/bg728.jpg", id:"bg728"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
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
		{src:"images/orang.png", id:"orang"},
		{src:"images/pohon.png", id:"pohon"},
		{src:"images/shadow728.png", id:"shadow728"}
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
an.compositions['C4AA3C9042EE6C44BAE0A79A3AF4451B'] = {
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