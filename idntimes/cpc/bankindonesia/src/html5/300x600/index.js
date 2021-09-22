(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,600,1200],[602,0,600,1200],[1204,0,600,1200]]},
		{name:"index_atlas_2", frames: [[0,0,600,1200]]}
];


// symbols:



(lib._1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.item = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Scene_1_bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.item();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.05,418.25,0.33,0.33);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,55,1.1698,1.1698);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true,scaleX:1.1698,scaleY:1.1698,x:150,y:55,alpha:1},6,cjs.Ease.quadOut).wait(79).to({_off:false,scaleX:0.33,scaleY:0.33,x:150.05,y:418.25,alpha:0},0).to({_off:true,scaleX:1.1698,scaleY:1.1698,x:150,y:55,alpha:1},6,cjs.Ease.quadOut).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},6,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.0001,scaleY:1,x:150.1,y:125.1},3).to({_off:true},46).wait(29).to({_off:false,regX:0,regY:0,scaleX:1.1698,scaleY:1.1698,x:150,y:55},6,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.0001,scaleY:1,x:150.1,y:125.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// a
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.1,125.05,0.2027,0.2027);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1.1333,1.1333);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true,scaleX:1.1333,scaleY:1.1333,x:150,y:125,alpha:1},6,cjs.Ease.quadOut).wait(79).to({_off:false,scaleX:0.2027,scaleY:0.2027,x:150.1,y:125.05,alpha:0},0).to({_off:true,scaleX:1.1333,scaleY:1.1333,x:150,y:125,alpha:1},6,cjs.Ease.quadOut).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},6,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({scaleX:1,scaleY:1},3,cjs.Ease.quadIn).to({_off:true},66).wait(9).to({_off:false,scaleX:1.1333,scaleY:1.1333},6,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({scaleX:1,scaleY:1},3,cjs.Ease.quadIn).wait(21));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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
	this.frame_169 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(169).call(this.frame_169).wait(1));

	// b_obj_
	this.b = new lib.Scene_1_b();
	this.b.name = "b";
	this.b.parent = this;
	this.b.depth = 0;
	this.b.isAttachedToCamera = 0
	this.b.isAttachedToMask = 0
	this.b.layerDepth = 0
	this.b.layerIndex = 0
	this.b.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.b).wait(124).to({_off:true},1).wait(45));

	// a_obj_
	this.a = new lib.Scene_1_a();
	this.a.name = "a";
	this.a.parent = this;
	this.a.depth = 0;
	this.a.isAttachedToCamera = 0
	this.a.isAttachedToMask = 0
	this.a.layerDepth = 0
	this.a.layerIndex = 1
	this.a.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.a).wait(104).to({_off:true},21).wait(45));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(150,300,1,1,0,0,0,150,300);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 2
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(85).to({_off:true},40).wait(45));

	// bg_obj_
	this.bg_1 = new lib.Scene_1_bg_1();
	this.bg_1.name = "bg_1";
	this.bg_1.parent = this;
	this.bg_1.setTransform(150,300,1,1,0,0,0,150,300);
	this.bg_1.depth = 0;
	this.bg_1.isAttachedToCamera = 0
	this.bg_1.isAttachedToMask = 0
	this.bg_1.layerDepth = 0
	this.bg_1.layerIndex = 3
	this.bg_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg_1).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124.6,208.8,200.9,454.59999999999997);
// library properties:
lib.properties = {
	id: 'DEFE0D78F5C98F4685590D55ABA6F189',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"}
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
an.compositions['DEFE0D78F5C98F4685590D55ABA6F189'] = {
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