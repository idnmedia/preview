(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x480_atlas_", frames: [[644,0,320,480],[0,482,320,480],[322,0,320,480],[0,0,320,480],[322,482,320,480]]}
];


// symbols:



(lib._1 = function() {
	this.initialize(ss["320x480_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["320x480_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["320x480_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["320x480_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["320x480_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Scene_1_e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// e
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160,240);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},157).to({state:[{t:this.instance_1}]},10).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(157).to({_off:false},0).to({_off:true,alpha:1},10).wait(43));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// d
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-51.75,240);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},92).to({state:[{t:this.instance_1}]},10).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({_off:true,x:160,alpha:1},10,cjs.Ease.quadOut).wait(66));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// c
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(480,240);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},78).to({state:[{t:this.instance_1}]},15).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).to({_off:true,x:160},15,cjs.Ease.quadIn).wait(76));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-12.65,240);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,240);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true,x:160,alpha:1},10,cjs.Ease.quadOut).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},10,cjs.Ease.quadOut).wait(61).to({startPosition:0},0).to({x:-159.25},15,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// a
	this.instance = new lib._1();
	this.instance.parent = this;

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,240);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-159.25,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},78).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({_off:false},0).to({_off:true,x:-159.25},15,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._320x480 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_209 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(209).call(this.frame_209).wait(1));

	// e_obj_
	this.e = new lib.Scene_1_e();
	this.e.name = "e";
	this.e.parent = this;
	this.e.depth = 0;
	this.e.isAttachedToCamera = 0
	this.e.isAttachedToMask = 0
	this.e.layerDepth = 0
	this.e.layerIndex = 0
	this.e.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.e).wait(210));

	// d_obj_
	this.d = new lib.Scene_1_d();
	this.d.name = "d";
	this.d.parent = this;
	this.d.depth = 0;
	this.d.isAttachedToCamera = 0
	this.d.isAttachedToMask = 0
	this.d.layerDepth = 0
	this.d.layerIndex = 1
	this.d.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.d).wait(102).to({_off:true},66).wait(42));

	// b_obj_
	this.b = new lib.Scene_1_b();
	this.b.name = "b";
	this.b.parent = this;
	this.b.depth = 0;
	this.b.isAttachedToCamera = 0
	this.b.isAttachedToMask = 0
	this.b.layerDepth = 0
	this.b.layerIndex = 2
	this.b.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.b).wait(93).to({_off:true},1).wait(116));

	// c_obj_
	this.c = new lib.Scene_1_c();
	this.c.name = "c";
	this.c.parent = this;
	this.c.depth = 0;
	this.c.isAttachedToCamera = 0
	this.c.isAttachedToMask = 0
	this.c.layerDepth = 0
	this.c.layerIndex = 3
	this.c.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.c).wait(93).to({_off:true},76).wait(41));

	// a_obj_
	this.a = new lib.Scene_1_a();
	this.a.name = "a";
	this.a.parent = this;
	this.a.setTransform(160,240,1,1,0,0,0,160,240);
	this.a.depth = 0;
	this.a.isAttachedToCamera = 0
	this.a.isAttachedToMask = 0
	this.a.layerDepth = 0
	this.a.layerIndex = 4
	this.a.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.a).wait(93).to({_off:true},1).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.2,240,799.2,240);
// library properties:
lib.properties = {
	id: 'BC075A2CF7F4BB4A987E8AE37C0E229C',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x480_atlas_.png", id:"320x480_atlas_"}
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
an.compositions['BC075A2CF7F4BB4A987E8AE37C0E229C'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;