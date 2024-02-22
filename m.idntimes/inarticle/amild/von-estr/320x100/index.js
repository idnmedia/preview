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



(lib.Asset5arrow = function() {
	this.initialize(img.Asset5arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,33);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,200);


(lib.bolong = function() {
	this.initialize(img.bolong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,65);


(lib.ctaupdate = function() {
	this.initialize(img.ctaupdate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,86);


(lib.lbm = function() {
	this.initialize(img.lbm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,202);// helper functions:

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


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Asset5arrow();
	this.instance.setTransform(-13,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-16.5,26,33);


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

	// Layer_3
	this.instance = new lib.ctaupdate();
	this.instance.setTransform(-59,-13,0.3235,0.3235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-13,116.2,27.9);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(42.225,-13.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AglhQIAmAAQAOAAAGADQAGADAEAHQADAEAAAEIACALIACATIgCBOIgCAMIgDAHIgEAGIgGAEIgJACIgxABgAgLA1IALAAQAFAAABgBQACgBABgDIABgFIABgHIgBhQIgBgEQAAgBgBgBQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgLAAg");
	this.shape_1.setTransform(34.8,-13.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AALBRIgDgpIgQAAIgDApIgaAAIAQihIAsAAIAPChgAgHAOIAOAAIgGhEIgBAAg");
	this.shape_2.setTransform(20.375,-13.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgMBRIAAhBIgbhfIAAgBIAbAAIAMA5IABAAIABgFIAMg0IAaAAIAAABIgZBfIAABBg");
	this.shape_3.setTransform(11.9,-13.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAYBRIgjhjIgBAAIAABjIgYAAIAAihIAbAAIAVBFIABAAIAAhFIAYAAIAAChg");
	this.shape_4.setTransform(2.325,-13.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgjBRIAAihIAoAAQAKAAAFADQAGACAEAHQADAGACALQABAKAAAQQAAAPgBAKQgCAMgDAGQgEAGgGADQgGADgJAAIgOAAIAAAzgAgJAEIAJAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQADgCAAgCIACgKIAAgdIgCgIQgBgEgCAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgJAAg");
	this.shape_5.setTransform(-7.175,-13.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AALBRIgDgpIgQAAIgDApIgaAAIAQihIAsAAIAPChgAgHAOIAOAAIgGhEIgBAAg");
	this.shape_6.setTransform(-16.675,-13.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AALBRIgWhNIgCAAIABADIAABKIgbAAIAAihIAbAAIAABDIgBACIACAAIAWhFIAcAAIAAABIgaBJIAbBWIAAABg");
	this.shape_7.setTransform(-26.175,-13.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgUBRQgGgDgEgIIgDgIIgCgLIAAhlIACgMIADgHIAEgGIAHgFIAIgCIALgBIAMABIAIACQACABADADIAFAGQADAGABAIQABAIAAAKIAAAEIAAAEIgYAAIAAgIIgCgOQgBgEgIAAQgEgBgBACQgCABgCAEIgCAMIABBTIABAFQACAEACAAQACACADAAQAFAAACgCQADgBAAgDIABgGIABgeIgOAAIAAgZIAmAAIgBBAIgFARQgEAIgGADQgGADgOAAQgOAAgGgDg");
	this.shape_8.setTransform(-36.05,-13.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAXBRIgihjIgBAAIAABjIgYAAIAAihIAbAAIAVBFIABAAIAAhFIAYAAIAAChg");
	this.shape_9.setTransform(-45.725,-13.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgeBRIAAihIA9AAIAAAbIgjAAIAAAnIAiAAIAAAZIgiAAIAAAqIAiAAIAAAcg");
	this.shape_10.setTransform(-54.85,-13.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgcBRIAAihIAaAAIAACFIAfAAIAAAcg");
	this.shape_11.setTransform(-62.85,-13.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgeBRIAAihIA9AAIAAAbIgiAAIAAAnIAhAAIAAAZIghAAIAAAqIAhAAIAAAcg");
	this.shape_12.setTransform(-71.15,-13.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgQBSQgGgBgEgFQgEgFgBgHQgDgHAAgOIACgQIAWAAIAAAEIAAAQIACAGQAAABABABQAAAAAAABQABAAAAAAQABAAAAABIAFAAIAFAAQAAgBAAAAQABAAAAAAQABgBAAAAQABgBAAgBIABgGIABgUIgBgEIgBgDIgCgDIgHgFIgRgKIgHgEIgEgGIgDgGIgCgMIAAgRQAAgMACgIQACgGADgFQAFgFAGgCQAGgCAKAAQAKAAAGACQAGACAEAFQAEAEABAGQABAHABAKIAAAKIgCAIIgWAAIABgKQAAgJgCgFQgCgEgGAAIgEABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABgBAAIgCAGIAAARIABAEIABAEIADADIAFAEIAQAIIAGAEIAGAEIAEAHIACAKIAAASQAAAQgBAJQgCAJgEAGQgFAFgGACQgHACgKAAQgIAAgHgCg");
	this.shape_13.setTransform(-79.9,-13.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AALBRIgWhLIAAgCIgCAAIAAADIABAEIAABGIgbAAIAAihIAbAAIgBBFIACAAIABgDIAVhCIAcAAIAAABIgaBJIAbBWIAAABg");
	this.shape_14.setTransform(-93.875,-13.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgdBRIAAihIA7AAIAAAbIghAAIAAAnIAhAAIAAAZIghAAIAAAqIAhAAIAAAcg");
	this.shape_15.setTransform(-103.325,-13.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgTBRQgHgDgEgIIgDgIIgCgMIAAhmIACgLIAEgHQADgGAHgEQAGgCANgBQALABAHACQAHADADAEQAHALAAAcIAAAOIgZAAIAAgZIgCgHIgCgDIgGgBIgGABQgBACgBACIgCANIABBTIABAGIACADQACABAEAAQAIABABgGIABgKIAAgVIAZAAIABAOQAAAOgCAIQgBAKgEAGQgDAHgIACQgGADgMABQgNAAgGgDg");
	this.shape_16.setTransform(-112.3,-13.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.9,-21.5,159.5,16.7);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lbm();
	this.instance.setTransform(-27,-29,0.2708,0.2708);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-29,54.2,54.7);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#231F20").s().p("Ag0EAIAAmTIhRAAIAAhsIELAAIAABsIhRAAIAAGTg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-25.6,26.700000000000003,51.3);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#231F20").s().p("Ag0AzIAAhlIBpAAIAABlg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.1,10.7,10.2);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhxEAIAAn/IDiAAIAABsIh3AAIAABaIB1AAIAABnIh1AAIAABhIB2AAIAABxg");
	this.shape.setTransform(42.35,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AiGEAIAAn/ICZAAQAjAAAWAJQAWAJAOAVQANAWAFAgQAFAgAAAzQAAAzgFAhQgFAhgNAXQgOAWgWAJQgWAKgjAAIguAAIAACagAgbgDIAbAAQAPAAAGgQQAGgRAAguQAAgogHgOQgHgMgPAAIgZAAg");
	this.shape_1.setTransform(15.325,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhwEAIAAn/IDhAAIAABsIh3AAIAABaIB2AAIAABnIh2AAIAABhIB3AAIAABxg");
	this.shape_2.setTransform(-12.4,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAbEAIgDgNIgSiEIgEgdQgBgHgCgJQgDgGgEgCQgEgBgFAAIgQAAIAADHIhrAAIAAn/ICbAAQAjAAAVAHQAXAJANAQQANAQAFAaQAFAZAAAnQAAAlgCAZQgDAYgGAMQgGAOgIAFQgIAGgLAGIAAAEIAJAHQAEAEAEAKQAFAMAGAZQAFAXAGAuIAGAyIAEAfIADARQAAAGADAGIAAADgAghgmIAeAAQAOAAAGgMQAGgNAAgkQAAgegHgLQgIgKgOAAIgbAAg");
	this.shape_3.setTransform(-39.625,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.7,-25.6,107.4,51.3);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACBhIgEABIgHgEIgFACIgHgKIgFgCIACgFIgEgEIAFgOIgBgGIADgCIAAgEIADgDIAAgDIgDgEIADgEIADgNIgIgGIgLAAIgEgCIgHgFIgDgEIACgEIgBgFIgCgBIABgEIgDgEIACgNIgBgKIABgRIAHgCIgIgGIACgGIgBgJIAAgLIALgGIAVgEIAUACIAEABIAEgCIAHACIAFgCIAKAAIAFABIAJAGIACADIACAFIgFACIAEAJIABAKIgCAdIABAPIACADIgCADIgEAAIACADIADAIIgCAKIgCAEIgDADIgBAKIgCAJIgDADIgEACIgRApIgEADIgFAJIgDADgAgFA1IACAAIgCgEgAAEAkIgCACIAJgBIgBgDgAABARIAEABIAAgGgAgUAPIACAAIAAgDIgCAAgAgLADIADAAIgCgDgAAEgBIALAAIAEgRIgEAAIABAEIgCABIABAGIgFAFIgDgCgAgIgEIAEgBIgFgCgAAJgHIACgBIgEgCgAAZgLIACAAIAAgCIgCAAgAgIgNIAGgBIgEgFgAgwgQIACAAIAAgDIgCAAgAgDgYIABgDIgEAAgAAHgcIgDADIAKAAIgCgFgAAYgeIACAFIAFgBIACgEIgFgBIgDgDgAgNgnIACALIAFgIIgDgFgAAfgjIACAEIACgEgAgXgoIADACIACADIAEACIgBgGIgFgDgAAmgiIADgBIgFgDgAAAgqIACAAIAEAEIAEgFIgJgBgAgKgqIAEgCIgDgDgAAHgwIAEgCIgBgCgAgdg5IADAAIAAgCIgDAAgAgKg+IACAAIgCgEgAAAhGIACADIACgDg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-9.7,10.5,19.5);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhxEAIAAoAIDiAAIAABtIh3AAIAABaIB2AAIAABnIh2AAIAABhIB3AAIAABxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-25.6,22.700000000000003,51.3);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag0EAIAAmTIhRAAIAAhtIELAAIAABtIhRAAIAAGTg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-25.6,26.700000000000003,51.3);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgwBjIAAgEIAhhdIgCgFIgjAAIAAhfIBpAAIAABiIgyBjg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-9.9,10.6,19.9);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgvBjIAAgEIAghdIgCgFIgjAAIAAhfIBpAAIAABiIgzBjg");
	this.shape.setTransform(60.05,20.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AiGEAIAAoAICZAAQAjAAAWAKQAVAJAOAVQAOAWAEAgQAGAiAAAwQAAAygGAiQgEAigOAYQgNAVgWAJQgWAKgjAAIguAAIAACagAgbgCIAbAAQAPAAAGgRQAGgRAAguQAAgogHgNQgHgOgOAAIgaAAg");
	this.shape_1.setTransform(50.275,-4.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhwEAIAAoAIDiAAIAABtIh4AAIAABaIB2AAIAABnIh2AAIAABhIB3AAIAABxg");
	this.shape_2.setTransform(22.9,-4.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhxEAIAAoAIDiAAIAABtIh3AAIAABaIB1AAIAABnIh1AAIAABhIB2AAIAABxg");
	this.shape_3.setTransform(-2.35,-4.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhrEAIAAoAIBqAAIAAGPIBtAAIAABxg");
	this.shape_4.setTransform(-26.7,-4.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhiDxQgdgYAAg8IABgoQABgUADgMIBZAAQgCAEAAAFIAAAKQAAAeAHALQAGALAUAAQATAAAHgKQAGgKAAggQAAgUgGgKQgHgKgNgKQgLgIgOgHIgbgMIgbgOQgMgGgLgJQgVgSgFggQgEggAAgzQAAgjAGgaQAGgYAOgPQAOgPAYgIQAYgGAnAAQAiAAAXAFQAXAGAPANQAOAMAHAXQAHAXAAAfIgBAhQgCAMgDAKIhYAAIABgWQAAgYgGgKQgGgJgSABQgUgBgFAJQgGAJAAAZQAAAVAGAKQAGAJANAHQAMAJAPAHIAtAUQAIAEANAIQAMAJAHAIQAJAJAFAOQAFASACASQADAVAAAgQAAArgGAhQgHAggPASQgPARgaAJQgaAHgmAAQhAAAgegYg");
	this.shape_5.setTransform(-52.425,-4.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.3,-30.8,130.7,61.7);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-25.6,33.3,51.3);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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IgBgJIgDgGIAIgHIAFACIAAgGIACgDIAIADIACgDIAEABIgBgLIAIAAIACgFIAEACIAEgLIAFgFIgEgGIAAgFIACgGIAFgEIAEACIABgFIgFADIgDgGIAEgCIgCgHIgGADIgDAFIAEAEIgGACIgHgIIAIgKIAFACIgBgFIgEgDIgHAJIgEAEIgBgRIgCgEIgDgDIgCAFIgDADIAFABIAAAGIAGALIABAEIgFADIgHgKIgFgMIgFABIgDAEIAHADIgDACIgFgCIgCAAIAEAFIABAKIAFAEIADgGIACAGIAEADIAAAHIAGADIAJANIgFAEIgDgMIgKABIgDgIIgCAEIAAAGIAHABIgEADIAFAEIgEAAIgEgCIAAAIIALACIgEAFIgFADIgFgEIgDAFIgGAFIgCgGIABgFIgHADIAAgJIAFgCIACgFIgJADIgCgGIADgGIAGgCIgFgIIgCAFIgDgEIgDgLIAGgEIgRADIgFgBIgGgEIgDAHIgHgCIgBgFIgIAFIgBgGIgEgCIACgDIAIAEIAAgFIACgFIAEgCIAIAJIgJgDIADAIIAFgBIANACIAEgBIACgGIAEgCIAAAHIAKgFIAGgCIgBgFIgDgDIgFAEIgGgEIAEgDIAMgBIAFgCIgCgHIAIABIACgFIANAAIgDgFIgHAAIADgIIgOAAIgHgJIgEgKIgCAGIgDAFIgEABIgEgEIAFgGIgGABIgGAIIgGABIgFACIgDgGIgFgDIgCAGIgGgDIgBADIgFAAIgCAHIAAAGIAKgEIAGAAIAFACIgCgGIAGACIAKgCIAFADIACgFIAFACIAJgDIACALIAGgDIAAAHIAHgHIABAFIgBAEIgEADIgJADIgCgEIgDgDIAAAHIACAFIgFgBIgIgHIgEAFIgBAGIgCAFIgDgBIgFADIgBgDIAEgFIgFgNIAGADIALgCIAIABIgIgKIgCAFIgFACIgGgCIgHAAIgGADIACAFIgCADIgGAAIgFgKIgBAGIgFABIABAGIgCAFIAIAFIgHAAIgFAKIAEAEIgGAFIgFgKIgCAMIACAJIAHAAIAAgKIAGANIgCAFIgCgDIgFgCIgBAFIACAFIAFAAIADADIgCADIAEADIALAEIgDAFIgEACIgCgDIgEgBIAAALIAIABIADgGIAFAAIAAAGIAFgDIgDgGIAAgHIAEADIAEgDIgFgD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");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-25.6,37.3,51.3);


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
	this.shape.graphics.f("#FFFFFF").s().p("ACmD+IgFgBIgYADIgGgDIgDABIgGgEIgEAEIgEgCIgIgBIgEgJIgDgDIADgKIgCgGIgBgMIADgMIgDgMIgBgQIADgEIgCgNIADgDIgEgOIADgWIgBgGIgCgEIACgFIAAgFIgCgGIADgIIgCgSIADgJIgCgFIACgOIgEgDIACgGIgBgSIgJgBIgFACIAAAOIgHADIACAJIgDAGIgGACIACAGIgEAFIgBALIgEAMIgGAHIABAGIgDAFIgFACIADAHIgXAoIgNAAIgGgBIgFAFIgGgCIgTAAIgCgEIgKACIgFgCIgIgKIgEgLIAAgGIgHgLIgBgOIgFgGIAGgCIgEgCIgHgJIgIgWIgFgLIABgGIgKgQIgCgNIgGgDIAAAJIgFAEIAAAlIgEANIgCAEIAIACIgFAHIAFABIABALIgEAiIADAKIgCAGIACAVIgFAHIAEAMIABALIgDAHIACAHIgCAFIADASIgDALIgDAFIABAGIgDADIgLACIgEADIghAAIgQgDIgDADIgGgDIgHADIgGgBIgJgEIgMgMIAAgmIADgMIgEgGIAEgFIgEgBIACgLIgCgiIADgFIgDgpIAEgGIgCgMIgBghIACgMIgDgGIADgEIgCgKIACguIgCgWIABgIIAEgFIgFgLIAAgEIADgGIgEgQIADgDIgDgLIAEgFIgEgIIADgCIgDgVIADgEIgBgZIgCgSIAEgDIgDgWIAKgMIAMgHIAFACIANgCIAFABIAFADIAEgEIAYADIAGgCIAGAAIADADIAEgEIAIAFIAHABIAHAJIAFAKIANAjIgCAHIAIAFIACAGIACANIAEACIgBAGIAFAJIAAAEIAKAVIABAHIAAAGIADACIACAFIgHgCIAHAIIAFAJIACAMIAEADIAEAKIACARIAGABIgEAFIAJAOIAIAWIADAEIAGABIAGgBIgFgCIAFgKIAEAAIgCgIIACgFIAFgDIAAgGIAGgZIAFACIgBgGIABgHIAGgLIAAgFIAJgVIAHACIgFgKIABgIIAIgEIgCgDIAIgXIABgGIAFgLIADgMIAFgLIAEgFIgBgJIAHgDIgDgHIAFgJIAGgQIADAAIAEgDIACgHIALgCIANACIAFACIAKgGIAxADIAQAEIAFAEIgFAEIAFAEIACAEIgBASIACAFIgDAIIADARIgDACIADAEIAAAGIgDAEIACAF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AEgKIAEgEIgDgEIgEAGIgGAAgABmiBIgBAFIAFgDIAGgCIAGACIADgKIgEAAIgDAHIgJgEIgGAAgAC5iAIADACIAAgDgACmh/IAFABIgCgEIgFAAgAh3iGIAFAFIAGADIABgGIgCgEIgFAAgAC+h/IAFgDIgFAAgAiCh/IAFgDIACgGIgCgEgAioiAIgBgGIgEgCgAhbiHIgEAFIAFAAIAEgCIACgFgACWiGIACACIACgGIgEgCgABYiKIADADIAFgBIgEgFIgGgDgAifiIIADAAIgBgEgAh3iJIAFgFIgCgGgAiIiNIADAEIACgFIgEgDgAiTiJIADAAIABgFIgDAAgAifiQIAHACIgHgIIgEAAgAC5iOIADAAIAAgDIgDAAgAiriOIAAgDIgEAAgAi2iOIADgEIgDgEgACIiSIAEACIgDgGgACQiSIAFABIgCgDgACciWIAFAEIABgGIgEgCgABqiSIAEAAIgEgEgAiniSIACAAIAAgEIgCAAgABbibIgBAFIAEgDIACgEgAi/iXIACAAIAAgCIgCAAgACHicIAFAEIgBgFIgFgGgAh9iZIAEgEIgJAAgABriaIAFAAIgGgFgAB4iaIADAAIgDgDgACQigIACAEIAEgBIgCgEgABripIAIAJIACgFIAGABIgDgFIgHgBgAjTihIADABIgDgEgACzilIAEAEIAAgIgAhtihIADgCIgDgCgAiEirIgEAKIAOgEIgDgGIgDgEgAiYilIADAEIAFAAIgDgFIgFgDgACpioIgBAFIAEgCIACgGIgIgBgACBipIAMAFIAGgHIgMgCIgEgEgACZivIgDAEIAFAFIAFgDIABgGIgGgCIgDgEgAC/inIACgEIgDAAgAhyipIAEACIAFgCIgBgEIgFgEIABAGIgDgCgAiTipIADACIADgEgAjOipIADgDIgCgFgAjGisIAEAAIgEgDgAigitIAEAAIACgEIgGAAgACui9IgGAIIgFABIAJADIAFgIIACgGgAitixIACAAIAAgCIgCAAgAhli4IgEADIAHAEIADgHIgCgFgAiQjCIAGAFIgBAFIACAEIAFADIABgFIgFgIIgCgGIgJgDgAinixIACgKIgIgBgAh0i2IAEACIAAgDgAifi1IAEABIgCgEgACci+IAEADIAAgEIgFgEgAhpjDIgBAHIAEgDIACgHgAh8i9IANgFIgDgEIgDgGgAC2jEIACAEIADgDIgCgFgAhsjIIACgFIgFgCgAirjIIADAAIgCgEgAizjQIgDAGIAEgCIAEgDIABgEgAB6jPIAEAAIgEgEgACzjTIADABIgCgEgAibjTIAAgDIgEAAgAChjUIADgDIgDgCgAihjfIADAFIAEABIgBgFIgFgFgAitj3IADAAIAAgDIgDAAgAB5gNIACgFIADgDIAGADIgBADIgFADgACkgjIACgCIACAAIABAFIgDABgABohcIADAAIgBAEg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-25.7,43.1,51.5);


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
	this.shape.graphics.f("#FFFFFF").s().p("AiFEAIgFgFIgHADIgEgDIgIgBIgEgKIABgKIgCgRIACgeIgDgIIACgZIgDgFIAEgEIAGAAIgJgEIABgHIAEgKIgDgYIAAgXIgDgLIADgVIgCgtIADgdIgDgKIAFgGIgCgDIgDgNIAAgOIADgFIgDgKIAAgFIAFgEIgFgCIADgFIAGgFIgEgBIgGACIADgNIADgFIgDgEIAAgRIgDgKIAGhSIAQgKIAFADIAKgCIAfABIACgCIAYADIALgBIAEgCIAFACIATgCIgBAHIAGgEIAGgCIAGAEIAJgDIAlAAIASgCIAWADIAcgDIAHAHIAGgFIAHADIAFADIANAAIAMALIAAAIIAFADIAEACIgDALIAGACIACA9IgEATIAFAIIgDAXIADAMIgCAEIgFABIAEAEIABAGIgBAFIABAUIAAAGIgDAEIADAMIAAANIgDAMIADAKIgEAQIADAGIgUAbIgGABIgQAKIgYAAIgKgDIgEACIgNACIgGgBIgGgDIgLADIgOAAIAAgFIgJAFIgLgBIgMABIgSgBIgFgCIgaAJIACANIgCAGIACAOIgCAQIACAMIgCAEIACALIgBANIgDAFIAEAJIgCAMIAAAtIgCAMIgHABIgIAHgAhaDHIAEADIAEgDIgFgCgAiJC/IAEAAIgEgCgAiaC4IAEAAIAAgCIgEAAgAiDCsIADAGIAFgEIgFgEgAh3CqIAAgGIgDAAgAiOCnIAIgDIABgFIgLAAgAhXCdIACAAIgBgDgAh9CdIACgDIgCgDgAhUCVIAEgCIgGgBgAhtCSIAHADIABgEIgEgCgAhDCUIAAgCIgDAAgAhcCBIgIACIgBAKIADAEIADgGIAHAAIgBgGIADgCIgEgLIgHACIgGgBIgEABIADAFIAKgCgAiACDIgDAEIAJAEIADAEIAAgLIgEgDgAiNCNIAFgCIgIgCgAhJCMIAFABIACgEgAhyCJIADACIgCgHgAh9B6IgFADIALACIAAgGgAiaB9IAEACIgBgFIgDgCgAhQBzIgCAEIAGAAIAAgGgAh6BsIAHABIACAEIAEADIgCgNIgFABIgFgCgAiSByIAEgCIADgEIgFAAgAhdBwIAFABIgEgDgAhPBpIALAHIABgJIgHgCIgDgEgAiLBqIAFACIAAgEIgEgEgAhbBoIAGABIADgFIAAgIIAFgBIAGAEIgDgGIgDgFIgFACIgCgDIAHgCIAAgGIgDgEIgDAFIgFABIAAAEIADAAIgDAEIACAKIgCAFIgHAAgAh2BRIgBARIAFgCIACgDIABgKIgEgGgAicBfIAEAAIAAgDIgEAAgAhaBEIgFADIgEAFIgEAKIgBAGIAGACIACgHIAEgEIgBgGIAIgKgAiDBJIgDAFIAGAFIADgKIgDgEgAiaBTIAEAAIAAgEIgEAAgAhzBFIAAAHIAGgBIgBgGIgDgEgAhEBKIACgEIgFAAgAhNAxIAAAHIgFABIgCACIAKAAIAFAIIADgDIAGADIgBgGIgEgEIgEACIgDgLIADgGIADAFIAAAFIAHgCIAHgIIAGAAIACgNIgEACIgDAAIAAAGIgEgEIgBgPIgEgEIgLABIgGgCIABAIIAKADIAHAIIAAALIgEgFIgFgBIAFgHIgIACIgFgGIgBAHIABAHIgKAEIgEgCIAFgDIgCgFIgDAGIgFADIgHgFIgBAGIADACIABAFIAFADIAHgGIAFAEIADgGgAiKAwIACALIgBAGIAIAAIgCgGIgFgFIACgFIgDgHgAhgA+IAEACIAEgFIgGABIgGgBgAh6A8IAFACIAEgDIgMgDgAgxAzIAJABIgCgEIgEgBgAhhgEIADAEIAGADIgCAGIgJAIIgFACIgLACIAAAEIAEAEIgKACIACAGIAFAEIgFABIgEAJIAIgCIAAgHIAGAEIgCgGIACgRIAHAFIgCgHIAGACIgBAGIgCADIAIADIgCgGIACgDIAGAAIgBgHIAEAAIgBgHIAIgKIgKgEIACgDIAFgBIADADIAIAAIAHgIIgBgFIAIgGIgFgDIgJADIACAIIgGgBIgEgEIgDADIAEACIAIAIIgHgBIgHgHIgEAFIgGAEIgBgLIgFADIgCgJIAGgCIAEgEIgDgFIACgGIgCgGIgGADIAAAKIADAFIgGgCIgEACIAEANIgHACIgGAKIADACIAKACIgEgGIAKgHgAgQArIAAAFIAGACIAGgDIAFgFIgNgEgAg0ARIADAGIAGAAIACAHIAGAAIgCAEIgEADIACAFIAAAGIAFgCIAAgGIAEgDIgCgNIgHgBIADgFIAFACIAGgCIgFgHIgJAGIgHABIgGgHgABNAuIADAAIAAgDIgDAAgAAeAjIgBAGIAHADIAEgMIgFgBgAASAsIAEgCIgHAAgABGAmIAGADI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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-25.6,32.9,51.2);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAND+IgiABIgZgBIgKgQIADgLIgBgEIgBgLIgDgEIACgMIADgKIgDgJIADAAIgDgFIABgNIgDgEIADgEIABgFIgEgYIABgFIADgGIgCgMIACgFIgEgGIACgFIABgYIABgGIgEgGIACgGIAAgNIACgGIgCgiIACgLIgCgNIACgNIgEgIIACgFIAAgMIADAAIgCgFIgDgNIADgGIAFgEIgGgBIABgdIgBgGIABgGIgBgXIACgGIgBgKIAAgiIgDgFIAEgKIgBgNIAUgLIAGABIAFACIAWgDIAhACIALgCIAIAIIAGAJIACASIgDANIAEARIgBAHIgCADIAAAFIgCAGIACADIABAHIgBAMIACAIIgFAdIADAKIABANIgBASIACALIgDAXIgCADIAFAFIgCAMIAAAiIgDAKIAFADIgCAiIgCALIADAMIgBAGIgFADIAFADIABALIgDAMIADAFIgBAYIACALIgCARIACAKIgEAGIACAGIABAMIgBASIAAAHIgIAAIADAFIAAAEIgGAAIgCAEIgJAEgAgdD1IgBAEIAFgCIACgDgAgfDvIAEAAIgEgBgAgEDsIAEgCIgDgDgAALDkIAEgDIgEgCgAAXDjIAAgFIgEAAgAAADfIADgCIgGgCgAgdDSIAJAAIACgEIgLgEIgFgCgAgYDKIAEgBIABgFgAAaDEIAFAEIgBgIIgEAAgAAADGIAEACIgEgHgAAIDBIAGAAIACgBIgGgFgAgdC5IAMAFIAFADIgDgIIgGgBIgDgDIgIAAgAArC+IAHAAIgCgEIgDAAgAgfC+IACAAIAAgDIgCAAgAANC6IALgBIABAAIAEgBIADgDIgJgDIABAGIgJgGgAgCC2IACABIAHAAIgFgDgAAECtIgCACIAEABIACgFgAAbCrIADACIABgEgAAlCrIADgCIgDgDgAgHCpIAFgGIgDgBgAASClIABgEIgEAAgAgQChIADAAIAAgDIgDAAgAgaCdIgEAEIAGgBIADgFgAAACfIgEgMIgEgFIABAEIAAAFIgDABIgCgIIgFACIgBAEIAEACIACAEIAHABIAFACgAACCTIgCAFIAFACIACgKgAgfCXIAFgDIgDgEgAASCTIADAAIAAgDIgDAAgAAYCSIADAAIgEgEgAANCOIAHgCIABgFIgEABIgEgBgAggCOIAFgCIADgCIgGAAgAAdCHIADAEIAAgFgAgZB8IABAGIAHgCIAEgFIgIgDIgCgFgAgEBzIgBAEIAEgEIAGgCIgCgDIgFABIgFAAgAgnBxIgDAEIAHgEIgCgDgAAYByIADgDIgEAAgAgNBxIgGgLIgEgFIACAKIgFgBIgFAEIAFACIANABgAAFBpIAAAGIAGgCIgBgGgAAeBpIABgDIgDgGIgFgCgAAXBMIgKAHIgCAEIACAGIgFAEIAHAIIAGAAIACgDIgHgCIABgGIgCgKIAMgBIAFgDIACgEgAACBjIADADIAAgGgAgPBmIAEAAIAAgFIgCAAgAAkBYIgCAEIAEACIAEgIgAgXBdIAEABIAAgDIgCgDgAAXBbIADACIgCgGIgDgBgAgKBTIAEACIACAFIAGgCIgGgHIAAgGIgGABIgLgCIAAAEIAEACIAFgCgAAgBVIgDADIAGgBIACgEgAAEBYIADAAIAAgDIgDAAgAgmBVIAEABIACgGIgHAAgAAFBSIADAAIgFgFgAgdBKIgBAGIAGgCIgCgGIgEgEgAgvBKIAEACIAFgEIgFAAgAAHBLIAAgMIgDgEIgIgEIAHAJIgDABIgFgHIgEAFIgKAFIAMgDIADAEIAEADIADgCgAgYBBIADAAIAAgCIgDAAgAALBAIAEAAIgEgGgAAjA5IAAAEIAFgFgAgQA6IAFADIAAgEgAAuA5IAFABIgDgFgAgnA4IAHACIACgHIgMgBgAgYA1IAEABIAFgDIAAgDIgGAAgAAVAzIACgGIgFAAIAAgGIgGACIgEAFIAAAEIAGgCgAAVAcIAFALIAAAKIAGgEIgEgIIgBgGIAHgDIgFgBIgDgCgAgKArIAGAFIgDgHIgFgEgAg1AvIAGABIgDgFgAgHAkIAFACIACAFIAFAAIgCgEIgBgGIgHgDgAgVAmIAFADIgCgIIgFAAgAgdAkIADADIgBgGIgFgDgAgMAhIAEgIIgHgHIgGgDgAAIAeIADAAIAAgCIgDAAgAgqAcIAEACIgBgHgAgEAbIAFACIAEgBIgDgGgAArAUIACADIADAAIAAgFgAggAVIAFACIAAgFIgEgFgAAYAVIAFABIAGAAIADgCIgGABIgIgGgAgCALIgFACIAFAIIACgIIAAgGgAAIASIAFAAIgCgEIgGgCgAAgAPIAEgCIgCgDgAANAJIAFABIgDgEgAgjAAIAEAEIAAgJIgGAAgAgXgFIAMAEIAEgEIgGABIgFgBgAAAgGIgBgGIAGgNIgFADIgEAFIABAGIgHAAIAGAEIAEABgAAogHIADAAIACgEIgFgBgAgdgOIADAAIAAgDIgDAAgAANgRIAAgGIgFAAgAgWgaIgFADIAEAEIACgEIAEgDIACgFIgEgBgAAngaIABADIAEgFgAAVgaIAGgEIgDgBgAAdghIADADIAGACIgIgKgAgLglIgCAFIAGgBIACgGgAgnghIAFAAIADgFIgGABIgDgCgAgCgnIAJAAIgFgFgAAXgoIAEgBIgEgGgAgOg1IAHANIADgFIgDgFIADgIIgDgFIgGAIIgEAAgAgYgpIADgGIgFgBgAgnguIAEAAIgCgDgAASg0IgCAFIASgFIgMgDgAAngxIADgCIgDgCgAAtg5IAFAEIgCgFgAgdg3IAGAAIAAgEgAgjhJIAEAJIgDAFIAGgDIAIgJIgHADIgDgGgAgPhBIACAFIACgBIgBgHIgDAAgAABhIIgBAHIAIgIIAJAFIAEgBIgQgHgAAYhSIADAAIAAgCIgDAAgAAwhYIADAEIACgIgAgHhYIAFgEIgGAAgAAahfIAGAAIAEABIADgCIgFgEIgIAAgAALhiIAEAAIgEgCgAgDhxIADAAIAAgCIgDAAgAgPh/IgEAFIgCAFIAGgEIAFgBIgBgGgAgnh/IAEAEIgBgGIgDgCgAANh/IAEgBIACgDIgFAAgAADiBIAGABIAEgFIgGAAgAAYiJIADADIgBgEgAAAiOIAEAAIABgEIgFgCgAAdiRIACAAIgBgEgAgiibIADADIgDgGgAgaigIAAAEIAFAAIADgCIgLgHgAALieIAFgCIgOgHIgCAHIAFAAgAgEilIAEgCIgDgDgAAdipIAAgFIgDgFIgDADIgFgBIACADIAEgBgAADiwIgDADIALgCIgDgEgAgNixIAFgMIgHADIAAAHIgGAAgAAeizIACAAIACgFIgEAAgAAAizIABgGIgFAAgAARi+IAGADIgCgFIgFgDgAgLjAIAEAAIgEgFgAAYjLIgDAGIAJACIgCgGIABgFgAAFjTIADgDIgEAAgAAmjiIAFACIgCgEg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-25.6,11.7,51.3);


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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-25.6,28.700000000000003,51.3);


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
	mask.graphics.p("Ah9A9IAAh5ID7AAIAAB5g");
	mask.setTransform(13.025,8.975);

	// Layer_5
	this.instance = new lib.bolong();
	this.instance.setTransform(0,0,0.2662,0.2662);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.5,2.9,25.1,12.2), null);


(lib.textend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_end
	this.instance = new lib.Tween25("synched",0);
	this.instance.setTransform(146.85,226.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({x:132.35,alpha:1},6).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190.4,221.4);


(lib.tampil = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween16("synched",0);
	this.instance.setTransform(238.75,127.85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({x:222.5},6).wait(137));

	// Layer_4
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(494.8,117.55,0.7917,0.7917,-7.499,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.4428,scaleY:1.4428,rotation:-6.0419,x:499.1,y:114.55},11,cjs.Ease.sineOut).to({regX:0,scaleX:1.3131,scaleY:1.3131,rotation:-19.2704,x:498.3,y:114.8},5).to({regY:0,scaleX:1.187,scaleY:1.187,rotation:0,x:218.7,y:103.9},6).to({scaleX:1.2909,scaleY:1.2909,x:233.7,y:105.4},4).to({regX:0.1,regY:0.1,scaleX:1.2523,scaleY:1.2523,x:229.2,y:104.55},7).to({regX:0,scaleX:1.0196,scaleY:1.0196,x:198.05,y:103.55},7,cjs.Ease.sineOut).wait(157));

	// Layer_5
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(416.85,150.2,1,0.8408,-7.7508,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0.3,scaleX:1.7372,scaleY:1.5122,rotation:-12.591,x:417.85,y:153.1},11,cjs.Ease.sineOut).to({scaleX:1.5598,scaleY:1.3712,rotation:-11.2808,x:417.4,y:152.65},5).to({regX:0,regY:0,scaleX:1.187,scaleY:1.187,rotation:0,x:191.2,y:104},6).to({scaleX:1.2909,scaleY:1.2909,x:203.8,y:105.5},4).to({regX:0.1,regY:0.1,scaleX:1.2523,scaleY:1.2523,x:200.2,y:104.65},7).to({scaleX:1.0196,scaleY:1.0196,x:174.5,y:103.65},7,cjs.Ease.sineOut).wait(157));

	// Layer_6
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(325.9,149.4,0.7568,0.7568,2.0556,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.2,scaleX:1.3935,scaleY:1.3935,rotation:8.9674,x:324,y:145.15},11,cjs.Ease.sineOut).to({scaleX:1.2717,scaleY:1.2717,rotation:8.0337,x:330,y:142.5},5).to({regX:0,regY:0,scaleX:1.187,scaleY:1.187,rotation:0,x:161.3,y:103.9},6).to({scaleX:1.2909,scaleY:1.2909,x:171.25,y:105.4},4).to({regX:0.1,regY:0.1,scaleX:1.2523,scaleY:1.2523,x:168.6,y:104.55},7).to({scaleX:1.0196,scaleY:1.0196,x:148.75,y:103.55},7,cjs.Ease.sineOut).wait(157));

	// Layer_7
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(237,87.05,1,1,7.276);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,scaleX:1.7373,scaleY:1.7373,rotation:5.7235,x:237.3,y:87.6},11,cjs.Ease.sineOut).to({regX:0,scaleX:1.5598,scaleY:1.5598,rotation:9.1096,x:238.95,y:90.65},5).to({scaleX:1.187,scaleY:1.187,rotation:0,x:111.05,y:104.1},6).to({scaleX:1.2909,scaleY:1.2909,x:116.65,y:105.6},4).to({regX:0.1,regY:0.1,scaleX:1.2523,scaleY:1.2523,x:115.65,y:104.75},7).to({scaleX:1.0196,scaleY:1.0196,x:105.65,y:103.75},7,cjs.Ease.sineOut).wait(157));

	// Layer_8
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(138.15,129.65,1,1,4.0285,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.7373,scaleY:1.7373,rotation:-1.7823,x:140.5,y:124.85},11,cjs.Ease.sineOut).to({scaleX:1.5598,scaleY:1.5598,rotation:-1.5976,x:142.1,y:117.6},5).to({regX:0,regY:0,scaleX:1.187,scaleY:1.187,rotation:0,x:59.95,y:104},6).to({regX:0.1,regY:0.1,scaleX:1.2909,scaleY:1.2909,x:61.2,y:105.65},4).to({scaleX:1.2523,scaleY:1.2523,x:61.7,y:104.65},7).to({scaleX:1.0196,scaleY:1.0196,y:103.65},7,cjs.Ease.sineOut).wait(157));

	// Layer_9
	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.setTransform(48.9,111.9,1,1,-5.4875);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.1,regY:0.1,scaleX:1.7373,scaleY:1.7373,rotation:-2.3977,x:51.3,y:114.7},11,cjs.Ease.sineOut).to({scaleX:1.5598,scaleY:1.5598,rotation:2.5478,x:52.1,y:111.65},5).to({regX:0,regY:0,scaleX:1.187,scaleY:1.187,rotation:0,x:27.1,y:103.95},6).to({scaleX:1.2909,scaleY:1.2909,x:25.35,y:105.45},4).to({regY:0.1,scaleX:1.2523,scaleY:1.2523,x:26.95,y:104.6},7).to({regX:0.1,scaleX:1.0196,scaleY:1.0196,x:33.55,y:103.6},7,cjs.Ease.sineOut).wait(157));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,39.8,522.5,152.10000000000002);


(lib.sleep = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sleep
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(292.65,46.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:186.2,y:48,alpha:1},10).wait(147));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,358,78.9);


(lib.repeat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_19
	this.instance = new lib.Tween21("synched",0);
	this.instance.setTransform(224.65,164.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({x:71.65,alpha:1},9).wait(129));

	// Layer_20
	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.setTransform(342.8,184.65);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({x:189.8,alpha:1},9).wait(10).to({startPosition:0},0).to({x:191.55},7).wait(5).to({startPosition:0},0).to({x:188.55},6).wait(101));

	// Layer_21
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(326.75,164.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({x:173.75,alpha:1},9).wait(10).to({startPosition:0},0).to({x:175.5},7).wait(5).to({startPosition:0},0).to({x:172.5},6).wait(101));

	// Layer_22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,31,32,0)").s().p("AAlEkIgKiHIg6AAIgJCHIh5AAIA+pHIDLAAIA6JHgAgZAnIAvAAIgUjQIgIAAg");
	this.shape.setTransform(298.9821,164.4723,0.8887,0.8887);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(35,31,32,0.11)").s().p("AAhEEIgIh4Ig0AAIgIB4IhsAAIA3oHIC0AAIA0IHgAgWAiIAqAAIgZi4g");
	this.shape_1.setTransform(281.875,164.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(35,31,32,0.224)").s().p("AAhEEIgIh4Ig0AAIgIB4IhsAAIA3oHIC0AAIA0IHgAgWAiIAqAAIgZi4g");
	this.shape_2.setTransform(264.775,164.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(35,31,32,0.333)").s().p("AAhEEIgIh4Ig0AAIgIB4IhsAAIA3oHIC0AAIA0IHgAgWAiIAqAAIgZi4g");
	this.shape_3.setTransform(247.725,164.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(35,31,32,0.443)").s().p("AAhEEIgIh4Ig0AAIgIB4IhsAAIA3oHIC0AAIA0IHgAgWAiIAqAAIgZi4g");
	this.shape_4.setTransform(230.625,164.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(35,31,32,0.557)").s().p("AAhEEIgIh4Ig0AAIgIB4IhsAAIA3oHIC0AAIA0IHgAgWAiIAqAAIgZi4g");
	this.shape_5.setTransform(213.525,164.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(35,31,32,0.667)").s().p("AAhEEIgIh4Ig0AAIgIB4IhsAAIA3oHIC0AAIA0IHgAgWAiIAqAAIgZi4g");
	this.shape_6.setTransform(196.425,164.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(35,31,32,0.776)").s().p("AAhEEIgIh4Ig0AAIgIB4IhsAAIA3oHIC0AAIA0IHgAgWAiIAqAAIgZi4g");
	this.shape_7.setTransform(179.375,164.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(35,31,32,0.89)").s().p("AAhEEIgIh4Ig0AAIgIB4IhsAAIA3oHIC0AAIA0IHgAgWAiIAqAAIgZi4g");
	this.shape_8.setTransform(162.275,164.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAlEkIgKiHIg6AAIgJCHIh5AAIA+pHIDLAAIA6JHgAgZAnIAvAAIgUjQIgIAAg");
	this.shape_9.setTransform(145.1821,164.1223,0.8887,0.8887);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#423F40").s().p("AAiEIIgJh6Ig0AAIgIB6IhvAAIA5oPIC3AAIA1IPgAgXAjIArAAIgZi8g");
	this.shape_10.setTransform(145.125,164.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#625F60").s().p("AAjENIgJh8Ig2AAIgIB8IhxAAIA6oZIC6AAIA2IZgAgXAkIArAAIgZjAg");
	this.shape_11.setTransform(145.1,164.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#817F80").s().p("AAjESIgJh/Ig2AAIgIB/IhzAAIA7ojIC+AAIA2IjgAgYAkIAtAAIgajCg");
	this.shape_12.setTransform(145.05,164.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A19F9F").s().p("AAkEWIgKiAIg3AAIgJCAIh0AAIA8orIDBAAIA4IrgAgYAlIAtAAIgajGg");
	this.shape_13.setTransform(145.025,164.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C0BFBF").s().p("AAkEbIgJiDIg4AAIgJCDIh2AAIA8o1IDFAAIA4I1gAgYAlIAtAAIgajJg");
	this.shape_14.setTransform(144.975,164.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0DFDF").s().p("AAlEgIgKiFIg5AAIgJCFIh4AAIA9o/IDIAAIA6I/gAgZAmIAuAAIgbjNg");
	this.shape_15.setTransform(144.95,164.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAlEkIgKiHIg6AAIgJCHIh5AAIA+pHIDLAAIA6JHgAgZAnIAvAAIgUjQIgIAAg");
	this.shape_16.setTransform(144.9,164.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DADADA").s().p("AAkEfIgJiFIg5AAIgICFIh5AAIA+o9IDHAAIA6I9gAgZAmIAuAAIgbjMg");
	this.shape_17.setTransform(144.95,164.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B6B4B5").s().p("AAkEZIgJiCIg5AAIgICCIh2AAIA9oxIDDAAIA4IxgAgYAlIAtAAIgajIg");
	this.shape_18.setTransform(145,164.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#918F90").s().p("AAjEUIgJh/Ig2AAIgJB/Ih0AAIA8onIC/AAIA3IngAgYAkIAtAAIgajEg");
	this.shape_19.setTransform(145.05,164.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C6A6A").s().p("AAjEPIgJh9Ig2AAIgIB9IhxAAIA6odIC7AAIA2IdgAgXAkIAsAAIgajBg");
	this.shape_20.setTransform(145.075,164.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#484445").s().p("AAiEJIgJh6Ig0AAIgJB6IhuAAIA4oRIC4AAIA1IRgAgXAjIArAAIgZi8g");
	this.shape_21.setTransform(145.125,164.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},5).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_9}]},1).wait(101));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.2,193.4);


(lib.eat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_13
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(208.45,67.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:102,y:68.95,alpha:1},10).wait(147));

	// Layer_14
	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.setTransform(193.75,42.15);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({x:87.3,y:43.65,alpha:1},10).wait(28).to({startPosition:0},0).to({x:88.05},7).wait(5).to({startPosition:0},0).to({x:85.05},6).wait(101));

	// Layer_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,31,32,0)").s().p("AAlEkIgKiHIg5AAIgJCHIh7AAIA/pHIDLAAIA6JHgAgZAnIAvAAIgUjQIgIAAg");
	this.shape.setTransform(165.5649,43.1995,0.9144,0.9144);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(35,31,32,0.102)").s().p("AAiELIgJh8Ig1AAIgIB8IhvAAIA4oVIC6AAIA2IVgAgWAjIArAAIgai9g");
	this.shape_1.setTransform(154.7,43.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(35,31,32,0.2)").s().p("AAjELIgJh7Ig1AAIgJB7IhwAAIA6oVIC5AAIA1IVgAgXAkIArAAIgZi/g");
	this.shape_2.setTransform(143.85,43.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(35,31,32,0.302)").s().p("AAjELIgJh8Ig1AAIgJB8IhwAAIA6oVIC5AAIA1IVgAgXAjIArAAIgZi9g");
	this.shape_3.setTransform(133.05,43.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(35,31,32,0.4)").s().p("AAiELIgJh7Ig1AAIgIB7IhvAAIA4oVIC6AAIA2IVgAgWAkIArAAIgai/g");
	this.shape_4.setTransform(122.2,43.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(35,31,32,0.502)").s().p("AAjELIgJh8Ig1AAIgJB8IhwAAIA6oVIC5AAIA1IVgAgXAjIAsAAIgai+g");
	this.shape_5.setTransform(111.35,43.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(35,31,32,0.6)").s().p("AAiELIgJh7Ig0AAIgJB7IhvAAIA4oVIC6AAIA2IVgAgWAkIAqAAIgZi+g");
	this.shape_6.setTransform(100.5,43.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(35,31,32,0.698)").s().p("AAiELIgJh8Ig1AAIgIB8IhwAAIA5oVIC6AAIA1IVgAgXAjIAsAAIgai+g");
	this.shape_7.setTransform(89.65,43.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(35,31,32,0.8)").s().p("AAiELIgJh7Ig1AAIgIB7IhwAAIA5oVIC6AAIA1IVgAgWAkIArAAIgai+g");
	this.shape_8.setTransform(78.85,43.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(35,31,32,0.898)").s().p("AAjELIgJh8Ig1AAIgJB8IhvAAIA5oVIC5AAIA2IVgAgXAjIArAAIgZi+g");
	this.shape_9.setTransform(68,43.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAlEkIgKiHIg5AAIgJCHIh7AAIA/pHIDLAAIA6JHgAgZAnIAvAAIgUjQIgIAAg");
	this.shape_10.setTransform(57.1649,43.6995,0.9144,0.9144);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#423F40").s().p("AAjEOIgKh9Ig1AAIgJB9IhwAAIA5ocIC8AAIA2IcgAgXAkIAsAAIgajAg");
	this.shape_11.setTransform(57.05,43.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#625F60").s().p("AAjESIgJh/Ig3AAIgIB/IhzAAIA7ojIC+AAIA3IjgAgXAlIAsAAIgajEg");
	this.shape_12.setTransform(56.95,43.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#817F80").s().p("AAjEWIgJiBIg3AAIgICBIh1AAIA8orIDAAAIA4IrgAgYAlIAtAAIgbjGg");
	this.shape_13.setTransform(56.85,43.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A19F9F").s().p("AAlEZIgKiCIg4AAIgJCCIh2AAIA9oxIDEAAIA4IxgAgXAlIAtAAIgbjIg");
	this.shape_14.setTransform(56.7,43.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C0BFBF").s().p("AAlEdIgKiEIg5AAIgJCEIh2AAIA9o5IDGAAIA4I5gAgYAmIAuAAIgbjLg");
	this.shape_15.setTransform(56.6,43.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0DFDF").s().p("AAlEhIgKiGIg5AAIgJCGIh5AAIA+pBIDJAAIA5JBgAgZAnIAvAAIgbjOg");
	this.shape_16.setTransform(56.5,43.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAlEkIgKiHIg5AAIgJCHIh7AAIA/pHIDLAAIA6JHgAgZAnIAvAAIgUjQIgIAAg");
	this.shape_17.setTransform(56.4,43.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DADADA").s().p("AAlEgIgKiFIg5AAIgJCFIh4AAIA9o/IDIAAIA6I/gAgZAmIAvAAIgbjNg");
	this.shape_18.setTransform(56.525,43.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B6B4B5").s().p("AAkEcIgJiEIg4AAIgJCEIh3AAIA9o3IDFAAIA5I3gAgYAmIAtAAIgbjKg");
	this.shape_19.setTransform(56.65,43.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#918F90").s().p("AAkEXIgJiBIg4AAIgJCBIh1AAIA8ouIDDAAIA4IugAgYAlIAtAAIgajHg");
	this.shape_20.setTransform(56.8,43.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C6A6A").s().p("AAkETIgKh/Ig3AAIgIB/IhzAAIA6olIDAAAIA3IlgAgXAlIAsAAIgajEg");
	this.shape_21.setTransform(56.9,43.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#484445").s().p("AAjEPIgJh9Ig2AAIgJB9IhxAAIA6odIC9AAIA2IdgAgXAkIAsAAIgajBg");
	this.shape_22.setTransform(57.025,43.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},40).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},28).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},5).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_10}]},1).wait(101));

	// Layer_16
	this.instance_2 = new lib.Tween15("synched",0);
	this.instance_2.setTransform(131.75,42.15);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({x:25.3,y:43.65,alpha:1},10).wait(28).to({startPosition:0},0).to({x:24.3},7).wait(5).to({startPosition:0},0).to({x:27.3},6).wait(101));

	// Layer_1
	this.instance_3 = new lib.Tween13("synched",0);
	this.instance_3.setTransform(102,68.95);

	this.instance_4 = new lib.Tween14("synched",0);
	this.instance_4.setTransform(85.05,43.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AAlEkIgKiHIg5AAIgJCHIh7AAIA/pHIDLAAIA6JHgAgZAnIAvAAIgUjQIgIAAg");
	this.shape_23.setTransform(57.1649,43.6995,0.9144,0.9144);

	this.instance_5 = new lib.Tween15("synched",0);
	this.instance_5.setTransform(27.3,43.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_23},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(196));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213.8,78.9);


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

	// Layer_27
	this.instance = new lib.Tween27("synched",0);
	this.instance.setTransform(220.85,368.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145).to({_off:false},0).to({x:172,y:247.5},11).to({x:169.95},4).to({x:172},4).wait(33));

	// Layer_26
	this.instance_1 = new lib.Tween26("synched",0);
	this.instance_1.setTransform(125,240,0.75,0.75);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).to({scaleX:1,scaleY:1},11).wait(16).to({startPosition:0},0).to({regX:0.1,scaleX:0.9099,scaleY:0.9099,x:125.1},4).to({regX:0,scaleX:1,scaleY:1,x:125},4).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,385.3);


(lib.bukanmain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_99 = new cjs.Graphics().p("AlGE2IAAprIKOAAIAAJrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_graphics_99,x:225.25,y:164.95}).wait(98));

	// Layer_23
	this.instance = new lib.Tween24("synched",0);
	this.instance.setTransform(171.15,167.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({x:227.6},11,cjs.Ease.sineOut).wait(87));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.8,193.6);


// stage content:
(lib._320x100 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgCAMIAAgGIAFAAIAAAGgAgCgFIAAgGIAFAAIAAAGg");
	this.shape.setTransform(176.775,91.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHARIgNgVIAAAVIgGAAIAAghIAGAAIANAWIAAgWIAGAAIAAAhg");
	this.shape_1.setTransform(174.275,90.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJARIgDgIIgMAAIgDAIIgHAAIANghIAGAAIAOAhgAgEAEIAIAAIgEgMg");
	this.shape_2.setTransform(170.925,90.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCARIAAgbIgKAAIAAgGIAZAAIAAAGIgKAAIAAAbg");
	this.shape_3.setTransform(168.175,90.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKARIgDgIIgNAAIgCAIIgIAAIANghIAHAAIANAhgAgEAEIAJAAIgFgMg");
	this.shape_4.setTransform(165.375,90.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAPQgEgCgCgEQgCgFAAgEQAAgEADgEQACgEAEgDIAHgBQAGAAAEACQADADABAFIgHABQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAIgFgBQgEAAgCACQgDAEAAAEQAAAFADAEQADADADAAIAEgBIAEgCIAAgFIgIAAIAAgEIAPAAIAAAMIgHAEQgDABgFAAQgEAAgEgCg");
	this.shape_5.setTransform(161.875,90.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAHARIgNgVIAAAVIgGAAIAAghIAGAAIANAWIAAgWIAGAAIAAAhg");
	this.shape_6.setTransform(158.375,90.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCARIAAghIAFAAIAAAhg");
	this.shape_7.setTransform(156.075,90.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAHARIgHgMIgCgCIgEAAIgCAAIAAAOIgGAAIAAghIAOAAIAHABIAEADQABADAAADQAAADgCADQgCACgFAAIAEADIAIAMgAgIgCIALAAIACgBIABgDIgBgDIgDgBIgKAAg");
	this.shape_8.setTransform(153.9,90.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMARIAAghIAYAAIAAAGIgRAAIAAAHIAQAAIAAAFIgQAAIAAAJIARAAIAAAGg");
	this.shape_9.setTransform(150.55,90.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMARIAAghIASABQADAAACADQACADAAAEQAAADgBACIgDACIgEACIgKAAIAAANgAgFgBIAIAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAgBIABgCIgBgDIgDgCIgEAAIgDAAg");
	this.shape_10.setTransform(147.45,90.775);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(17.6,91.3,1,1,0,0,0,13,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCARIACgIIAAgJIAAgHIgCgJIACAAIADAIIABAIIgBAIQgBAEgCAFg");
	this.shape_11.setTransform(243.2,95.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEALIgCgFIAEgBIABADIABABIACgBIABgEIgBgEIgCAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgEgBIADgMIAJAAIAAAFIgGAAIgBAEIACgBQAAAAABAAQABABAAAAQABAAAAAAQAAABABAAQACACAAAEQAAADgCADQgCADgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_12.setTransform(241.925,95.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAKQgCgEAAgGQAAgGADgDQABgDADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQACACAAAEIgDAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAIgCACIgBAFIACgCIABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAAEQAAADgCADQgCACgCAAQgCAAgDgDgAgBAAIgBAEIABADIACACIACgBIAAgDIAAgEQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_13.setTransform(240.25,95.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDALQgCgBgBgEIAEgBIABADIABABIACgBIABgEIgBgEIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgEgBIADgMIAJAAIAAAFIgHAAIAAAEIACgBQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQACACAAAEQAAAEgBACQgCADgEAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_14.setTransform(238.6,95.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAKQgCgDAAgHQAAgHACgCQADgDACAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQACACABAEIgFAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIgCACIgBAFIACgCIABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAAEQAAADgCADQgCACgCAAQgCAAgDgDgAAAAAIgBAEIABADIABACIABgBIABgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgBgBg");
	this.shape_15.setTransform(236.95,95.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDACIAAgDIAHAAIAAADg");
	this.shape_16.setTransform(235.6,95.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDANIACgLQABgFACgEIgIAAIAAgFIANAAIAAAEIgEAGIgCAHIgBAIg");
	this.shape_17.setTransform(234.275,95.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDANIACgLQABgFACgEIgIAAIAAgFIANAAIAAAEIgEAGIgCAHIgBAIg");
	this.shape_18.setTransform(232.625,95.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAANIAAgSIgDAEIAAgEIADgDIABgEIAEAAIAAAZg");
	this.shape_19.setTransform(230.85,95.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDACIAAgDIAHAAIAAADg");
	this.shape_20.setTransform(229.65,95.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAKQgCgEAAgGQAAgFACgEQADgDABAAQADAAACADQACADAAAGQAAAHgCADQgCADgDAAQgBAAgDgDgAgBgGIAAAGIAAAHIABACQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIABgHIgBgGQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgBACg");
	this.shape_21.setTransform(228.275,95.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAKQgCgEAAgGQAAgFACgEQADgDABAAQADAAACADQACADAAAGQAAAHgCADQgCADgDAAQgBAAgDgDgAgBgGIAAAGIAAAHIABACQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIABgHIgBgGQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgBACg");
	this.shape_22.setTransform(226.625,95.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEALQgCgCAAgEIABgDIADgCIgDgDIgBgCQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAACIgDADIADABIABAEIgBAEQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAIgDABQgCAAgCgCgAgBACQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIABADIABABIACgBIABgDIgBgDIgCgBIgBABgAgBgIIAAADIAAACIABABIABgBIABgCIgBgDIgBAAg");
	this.shape_23.setTransform(225,95.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAKQgCgDAAgHQAAgHACgCQACgDACAAQADAAACADQACACAAAHQAAAHgCADQgCADgDAAQgCAAgCgDgAgBgGIgBAGIABAHIABACIACgCIABgHIgBgGIgCgCIgBACg");
	this.shape_24.setTransform(223.325,95.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AABARIgCgJQgCgDAAgFIACgIIACgIIADAAIgDAJIgBAHIABAJIADAIg");
	this.shape_25.setTransform(222.025,95.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAEANIgFgMIgDAEIAAAIIgFAAIAAgZIAFAAIAAAMIAIgMIAFAAIgIAKIAIAPg");
	this.shape_26.setTransform(219.7,95.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGAKQgDgDAAgHQAAgDABgDIAEgFQACgBACAAQAEAAADADQADAEAAAFQAAAHgDADQgDADgEAAQgDAAgDgDgAgDgGQgCADAAADQAAAFACACQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQACgCAAgFQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_27.setTransform(217.375,95.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAEANIgEgMIgEAEIAAAIIgEAAIAAgZIAEAAIAAAMIAHgMIAGAAIgIAKIAJAPg");
	this.shape_28.setTransform(215.25,95.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgGAKQgDgDAAgHQAAgDABgDIAEgFQACgBACAAQAFAAACADQADAEAAAFQAAAHgDADQgDADgEAAQgDAAgDgDgAgDgGQgCADAAADQAAAFACACQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQACgCAAgFQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDACg");
	this.shape_29.setTransform(212.925,95.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAFANIgFgKIgBgBIgDAAIAAALIgFAAIAAgZIAJAAIAFABIACACIABAEQAAAEgCABIgDACIACACIAEAJgAgEgBIADAAIACAAIACgBIABgCIgBgCIgCgBIgFAAg");
	this.shape_30.setTransform(210.8,95.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAFIgLAAIAAAFIAKAAIAAAEIgKAAIAAAGIALAAIAAAFg");
	this.shape_31.setTransform(208.7,95.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAGANIAAgTIgEATIgDAAIgFgTIAAATIgDAAIAAgZIAGAAIADARIADgRIAHAAIAAAZg");
	this.shape_32.setTransform(206.45,95.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBANIAAgZIADAAIAAAZg");
	this.shape_33.setTransform(203.95,95.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgBANIAAgUIgGAAIAAgFIAPAAIAAAFIgGAAIAAAUg");
	this.shape_34.setTransform(202.625,95.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAEANIgHgQIAAAQIgEAAIAAgZIAEAAIAHAQIAAgQIAEAAIAAAZg");
	this.shape_35.setTransform(200.625,95.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAFIgLAAIAAAFIAKAAIAAAEIgKAAIAAAGIALAAIAAAFg");
	this.shape_36.setTransform(198.6,95.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAEANIAAgLIgHAAIAAALIgFAAIAAgZIAFAAIAAAKIAHAAIAAgKIAEAAIAAAZg");
	this.shape_37.setTransform(196.5,95.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAEANIgEgKIgBgBIgDAAIAAALIgEAAIAAgZIAIAAIAEABQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIABAEQAAAEgCABIgEACIACACIAFAJgAgEgBIADAAIADAAIABgBIAAgCIAAgCIgBgBIgGAAg");
	this.shape_38.setTransform(194.475,95.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAFIgJAAIAAAFIAJAAIAAAEIgJAAIAAAGIAKAAIAAAFg");
	this.shape_39.setTransform(192.35,95.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIgMIAIAAIAFABIACACIABAEIgBADIgCACQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIgBAFIgEACIgMABgAgDAIIAGAAIABgBIABgCIgBgCIgBgBIgGAAgAgDgCIAEAAIACgBIABgCIgBgBIgBgBIgFAAg");
	this.shape_40.setTransform(190.275,95.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAEANIgHgQIAAAQIgEAAIAAgZIAEAAIAHAQIAAgQIAEAAIAAAZg");
	this.shape_41.setTransform(187.275,95.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgHAAIgCAGIgFAAIAIgZIAEAAIAIAZgAgCADIAFAAIgDgJg");
	this.shape_42.setTransform(185.15,95.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAEANIgHgQIAAAQIgEAAIAAgZIAEAAIAIAQIAAgQIADAAIAAAZg");
	this.shape_43.setTransform(182.975,95.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgHAAIgCAGIgFAAIAIgZIAEAAIAJAZgAgCADIAFAAIgDgJg");
	this.shape_44.setTransform(180.85,95.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgBANIAAgLIgIgOIAFAAIAEAKIAFgKIAFAAIgIAOIAAALg");
	this.shape_45.setTransform(179.075,95.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgHAAIgCAGIgEAAIAIgZIADAAIAIAZgAgCADIAFAAIgDgJg");
	this.shape_46.setTransform(177.275,95.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGANIAAgZIAEAAIAAAUIAJAAIAAAFg");
	this.shape_47.setTransform(175.375,95.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_48.setTransform(173.15,96.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAEANIgHgQIAAAQIgEAAIAAgZIAEAAIAHAQIAAgQIAEAAIAAAZg");
	this.shape_49.setTransform(171.625,95.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgHAAIgCAGIgFAAIAIgZIAEAAIAJAZgAgCADIAFAAIgDgJg");
	this.shape_50.setTransform(169.5,95.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAEANIgFgMIgDAEIAAAIIgEAAIAAgZIAEAAIAAAMIAHgMIAGAAIgIAKIAIAPg");
	this.shape_51.setTransform(167.475,95.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGAKQgDgDAAgHIABgGIADgFQADgBACAAQAEAAADADQADAEAAAFQAAAHgDADQgCADgFAAQgEAAgCgDgAgDgGQgCACAAAEQAAAFACACQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQACgCAAgFQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_52.setTransform(165.15,95.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAEANIgEgKIgBgBIgDAAIAAALIgEAAIAAgZIAIAAIAEABQABAAAAAAQAAABABAAQAAAAAAAAQAAABABAAIABAEQAAAEgCABIgEACIACACIAFAJgAgEgBIADAAIADAAIABgBIAAgCIAAgCIgCgBIgFAAg");
	this.shape_53.setTransform(163.025,95.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGAKQgDgDAAgHQAAgDACgDQAAgDADgCQACgBACAAQAEAAADADQADAEAAAFQAAAHgDADQgCADgFAAQgDAAgDgDgAgDgGQgBADgBADQABAFABACQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQACgCAAgFQAAgEgCgCQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_54.setTransform(160.7,95.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgEAMQgCgBgBgEQgCgDAAgEQAAgDACgDIADgFQADgBACAAQADAAADACQACACABADIgFABIgBgDIgDgBQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBADAAADQAAAFABACQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAIACgBIADgBIAAgEIgFAAIAAgDIAJAAIAAAJIgEADIgFABQgCAAgDgBg");
	this.shape_55.setTransform(158.375,95.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAMQgCgBgBgEQgCgDAAgEQAAgDACgDIADgFQADgBACAAQADAAADACQACACAAADIgEABIgBgDIgDgBQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBADAAADQAAAFABACQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAIACgBIADgBIAAgEIgFAAIAAgDIAJAAIAAAJIgEADIgFABQgCAAgDgBg");
	this.shape_56.setTransform(156.075,95.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAEANIgHgQIAAAQIgEAAIAAgZIAEAAIAHAQIAAgQIAEAAIAAAZg");
	this.shape_57.setTransform(153.875,95.375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAOAAIAAAFIgJAAIAAAFIAJAAIAAAEIgJAAIAAAGIAKAAIAAAFg");
	this.shape_58.setTransform(151.85,95.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgBANIAAgUIgGAAIAAgFIAPAAIAAAFIgGAAIAAAUg");
	this.shape_59.setTransform(149.925,95.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAEANIgEgKIgBgBIgDAAIAAALIgEAAIAAgZIAIAAIAEABIACACIABAEQAAAEgBABIgEACIACACIAGAJgAgEgBIADAAIADAAIABgBIABgCIgBgCIgBgBIgGAAg");
	this.shape_60.setTransform(147.2,95.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAFIgLAAIAAAFIAKAAIAAAEIgKAAIAAAGIALAAIAAAFg");
	this.shape_61.setTransform(145.075,95.375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAEANIgFgMIgEAEIAAAIIgEAAIAAgZIAEAAIAAAMIAIgMIAGAAIgIAKIAIAPg");
	this.shape_62.setTransform(143.1,95.375);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAEANIgHgQIAAAQIgEAAIAAgZIAEAAIAHAQIAAgQIAEAAIAAAZg");
	this.shape_63.setTransform(140.825,95.375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgHAAIgCAGIgFAAIAJgZIADAAIAIAZgAgCADIAFAAIgDgJg");
	this.shape_64.setTransform(138.7,95.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAEANIgFgMIgDAEIAAAIIgEAAIAAgZIAEAAIAAAMIAHgMIAGAAIgIAKIAIAPg");
	this.shape_65.setTransform(136.675,95.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgIAAIgBAGIgFAAIAIgZIAEAAIAJAZgAgCADIAFAAIgDgJg");
	this.shape_66.setTransform(133.7,95.375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAEANIgIgQIAAAQIgDAAIAAgZIAEAAIAHAQIAAgQIAFAAIAAAZg");
	this.shape_67.setTransform(131.55,95.375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAFIgLAAIAAAFIAKAAIAAAEIgKAAIAAAGIALAAIAAAFg");
	this.shape_68.setTransform(129.525,95.375);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAEANIgFgMIgDAEIAAAIIgFAAIAAgZIAFAAIAAAMIAIgMIAFAAIgIAKIAIAPg");
	this.shape_69.setTransform(127.55,95.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAFANIgFgKIgBgBIgDAAIAAALIgFAAIAAgZIAJAAIAFABIACACIAAAEIgBAFQgCABgCABIADACIAEAJgAgEgBIADAAIADAAIABgBIABgCIgBgCIgBgBIgGAAg");
	this.shape_70.setTransform(125.4,95.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAFIgLAAIAAAFIAKAAIAAAEIgKAAIAAAGIALAAIAAAFg");
	this.shape_71.setTransform(123.275,95.375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgBANIAAgUIgHAAIAAgFIAQAAIAAAFIgGAAIAAAUg");
	this.shape_72.setTransform(121.35,95.375);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgHAAIgCAGIgEAAIAIgZIADAAIAIAZgAgCADIAFAAIgDgJg");
	this.shape_73.setTransform(118.625,95.375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgBANIAAgLIgIgOIAFAAIAEAKIAFgKIAFAAIgIAOIAAALg");
	this.shape_74.setTransform(116.825,95.375);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgHAAIgCAGIgFAAIAIgZIAEAAIAJAZgAgCADIAFAAIgDgJg");
	this.shape_75.setTransform(115.05,95.375);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgHAEIAEAAQAAAFADAAIADgBIABgDIAAgBIgBgBIgDgBIgEgCIgCgCIgBgDIABgEIADgCIADgBQADAAADACQACACAAAEIgEAAIgCgDIgCgBIgCABIgBACIABABIAIAEIACABIAAAEQAAAEgCACQgBACgFAAQgGAAgBgJg");
	this.shape_76.setTransform(112.975,95.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgBADIABgBIAAgCIgBAAIAAgEIADAAIAAADIgBAEQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBAAg");
	this.shape_77.setTransform(110.725,96.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAEANIgFgMIgDAEIAAAIIgFAAIAAgZIAFAAIAAAMIAHgMIAGAAIgIAKIAIAPg");
	this.shape_78.setTransform(109.35,95.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgGAKQgDgDAAgHQAAgDABgDIAEgFQACgBACAAQAEAAADADQADAEAAAFQAAAHgDADQgDADgEAAQgDAAgDgDgAgDgGQgCADAAADQAAAFACACQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQACgCAAgFQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_79.setTransform(107.025,95.375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAEANIgFgMIgDAEIAAAIIgEAAIAAgZIAEAAIAAAMIAHgMIAGAAIgIAKIAJAPg");
	this.shape_80.setTransform(104.9,95.375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgHAKQgCgEAAgGIABgGIADgFQADgBACAAQAEAAADADQADAEAAAFQAAAHgDADQgCADgFAAQgEAAgDgDgAgDgGQgCADAAADQAAAFACACQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQACgCAAgFQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDACg");
	this.shape_81.setTransform(102.6,95.375);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAFANIgFgKIgBgBIgDAAIAAALIgFAAIAAgZIAJAAIAFABIACACIABAEQAAAEgBABIgFACIADACIAEAJgAgEgBIADAAIACAAIACgBIABgCIgBgCIgCgBIgFAAg");
	this.shape_82.setTransform(100.45,95.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAFIgLAAIAAAFIAKAAIAAAEIgKAAIAAAGIALAAIAAAFg");
	this.shape_83.setTransform(98.35,95.375);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAGANIAAgTIgEATIgDAAIgFgTIAAATIgDAAIAAgZIAGAAIADARIADgRIAHAAIAAAZg");
	this.shape_84.setTransform(96.1,95.375);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgIAAIgBAGIgEAAIAIgZIADAAIAIAZgAgCADIAEAAIgCgJg");
	this.shape_85.setTransform(93.05,95.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAEANIgHgQIAAAQIgFAAIAAgZIAFAAIAIAQIAAgQIADAAIAAAZg");
	this.shape_86.setTransform(90.9,95.375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgHANIAAgZIAPAAIAAAFIgLAAIAAAFIAKAAIAAAEIgKAAIAAAGIALAAIAAAFg");
	this.shape_87.setTransform(88.9,95.375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAEANIgEgKIgCgBIgDAAIAAALIgDAAIAAgZIAIAAIAEABIACACIABAEQAAAEgBABIgEACIACACIAGAJgAgFgBIAEAAIADAAIABgBIAAgCIAAgCIgBgBIgHAAg");
	this.shape_88.setTransform(86.9,95.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAGANIgCgGIgIAAIgBAGIgFAAIAIgZIAEAAIAJAZgAgCADIAFAAIgDgJg");
	this.shape_89.setTransform(84.65,95.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAEANIgFgMIgDAEIAAAIIgEAAIAAgZIAEAAIAAAMIAHgMIAGAAIgIAKIAIAPg");
	this.shape_90.setTransform(82.625,95.375);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgqArQgSgSAAgZQAAgYASgSQASgRAYAAQAZAAASARQARASABAYQgBAZgRASQgSARgZAAQgYAAgSgRgAglglQgQAQAAAVQAAAWAQAQQAQAQAVAAQAWAAAQgQQAQgQAAgWQAAgVgQgQQgQgQgWAAQgVAAgQAQg");
	this.shape_91.setTransform(307.25,92.725);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgDAPIAAgMIgKAAIAAgFIAKAAIAAgMIAHAAIAAAMIAKAAIAAAFIgKAAIAAAMg");
	this.shape_92.setTransform(310.325,92.75);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgIASQgEgEgBgFQABgEABgDQADgCADgBIgFgEQgCgCAAgCQAAgFAEgDQADgDAFAAQAGAAADADQADADAAAFQAAACgBACQgCAEgDAAIAFADQACADAAADQABAGgEAEQgEADgGAAQgEAAgEgDgAgEADIgBAFQABADABACQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIgBgFQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAgAgDgNQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIADABIADgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgDgBQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_93.setTransform(307.05,92.75);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AABAVIAAgdQgDADgGADIAAgHIAHgEQACgDABgEIAHAAIAAApg");
	this.shape_94.setTransform(303.65,92.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("A5bBUIAAinMAy3AAAIAACng");
	this.shape_95.setTransform(160.075,93.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(197));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(100.35,74.5,0.4067,0.4067,0,0,0,125.4,245.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(197));

	// text_end
	this.instance_2 = new lib.textend();
	this.instance_2.setTransform(40,73.6,0.4193,0.4193,0,0,0,96.5,215.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(197));

	// bm
	this.instance_3 = new lib.bukanmain();
	this.instance_3.setTransform(76.3,55.7,0.3584,0.3584,3.578,0,0,227.2,165.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(197));

	// repeat
	this.instance_4 = new lib.repeat();
	this.instance_4.setTransform(35.45,54.25,0.3314,0.3314,0,0,0,106.2,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(197));

	// sleep
	this.instance_5 = new lib.sleep();
	this.instance_5.setTransform(63.05,14.1,0.3314,0.3314,0,0,0,186.6,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(197));

	// eat
	this.instance_6 = new lib.eat();
	this.instance_6.setTransform(21.85,14.05,0.3314,0.3314,0,0,0,62.1,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(197));

	// tampil
	this.instance_7 = new lib.tampil();
	this.instance_7.setTransform(54.6,42.95,0.3314,0.3314,0,0,0,161.8,131.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(197));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(197));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(157.3,50,165.59999999999997,51.8);
// library properties:
lib.properties = {
	id: '0CB517BA92B3274CB65886AC2F2A69D8',
	width: 320,
	height: 100,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Asset5arrow.png", id:"Asset5arrow"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bolong.jpg", id:"bolong"},
		{src:"images/ctaupdate.png", id:"ctaupdate"},
		{src:"images/lbm.png", id:"lbm"}
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
an.compositions['0CB517BA92B3274CB65886AC2F2A69D8'] = {
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