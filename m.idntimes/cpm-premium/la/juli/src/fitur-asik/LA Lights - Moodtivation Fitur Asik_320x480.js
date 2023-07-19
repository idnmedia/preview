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



(lib.FLIPYOURMOOD_320x480min = function() {
	this.initialize(img.FLIPYOURMOOD_320x480min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.hand_320x480min = function() {
	this.initialize(img.hand_320x480min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.LogoLA_320x480min = function() {
	this.initialize(img.LogoLA_320x480min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.orang_320x480min = function() {
	this.initialize(img.orang_320x480min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.PHW_320x480min = function() {
	this.initialize(img.PHW_320x480min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.ribbon_320x480min = function() {
	this.initialize(img.ribbon_320x480min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.skymin = function() {
	this.initialize(img.skymin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.SKY = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.skymin();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.Ribbon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ribbon_320x480min();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.PHW = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PHW_320x480min();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.Orang = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.orang_320x480min();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.myButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4QhBeMBwhAAAMAAACC9MhwhAAAg");
	this.shape.setTransform(361.1,420.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg4QBBfMAAAiC9MBwhAAAMAAACC9g");
	this.shape_1.setTransform(361.1,420.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,722.2,840.2);


(lib.LogoLA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.LogoLA_320x480min();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.instance = new lib.hand_320x480min();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.FlipYourMood = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_9
	this.instance = new lib.FLIPYOURMOOD_320x480min();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


// stage content:
(lib.LALightsMoodtivationFiturAsik_320x480 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.myButton.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		EB.clickthrough(); 
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(240));

	// myButton
	this.myButton = new lib.myButton();
	this.myButton.name = "myButton";
	this.myButton.setTransform(12.75,111.95,1,1,0,0,0,361.1,420.1);
	this.myButton.compositeOperation = "screen";
	new cjs.ButtonHelper(this.myButton, 0, 1, 2, false, new lib.myButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.myButton).wait(240));

	// PHW
	this.instance = new lib.PHW();
	this.instance.setTransform(160,240,1,1,0,0,0,160,240);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.PHW(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// Layer_16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_73 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_74 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_75 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_76 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_77 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_78 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_79 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_80 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_81 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_82 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_83 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_84 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_85 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_86 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_87 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_88 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_89 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_90 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_91 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_92 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_93 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_94 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_95 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_129 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_130 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_131 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_132 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_133 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_134 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_135 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_136 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_137 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_138 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_139 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_140 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_141 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_142 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_143 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_144 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_145 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_146 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_147 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_148 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_149 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_150 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_151 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_185 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_186 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_187 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_188 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_189 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_190 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_191 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_192 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_193 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_194 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_195 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_196 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_197 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_198 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_199 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_200 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_201 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_202 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_203 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_204 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_205 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_206 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_207 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");
	var mask_graphics_239 = new cjs.Graphics().p("AgJp6IJhhkInqUxIrFCMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_73,x:-56.975,y:340.5748}).wait(1).to({graphics:mask_graphics_74,x:-44.9294,y:341.3929}).wait(1).to({graphics:mask_graphics_75,x:-32.8838,y:342.211}).wait(1).to({graphics:mask_graphics_76,x:-20.8386,y:343.0291}).wait(1).to({graphics:mask_graphics_77,x:-8.7935,y:343.8477}).wait(1).to({graphics:mask_graphics_78,x:3.2521,y:344.6662}).wait(1).to({graphics:mask_graphics_79,x:15.2977,y:345.4843}).wait(1).to({graphics:mask_graphics_80,x:27.3433,y:346.3024}).wait(1).to({graphics:mask_graphics_81,x:39.389,y:347.1205}).wait(1).to({graphics:mask_graphics_82,x:51.4341,y:347.9386}).wait(1).to({graphics:mask_graphics_83,x:63.4793,y:348.7567}).wait(1).to({graphics:mask_graphics_84,x:75.5248,y:349.5748}).wait(1).to({graphics:mask_graphics_85,x:87.5704,y:350.3929}).wait(1).to({graphics:mask_graphics_86,x:99.616,y:351.211}).wait(1).to({graphics:mask_graphics_87,x:111.6616,y:352.0291}).wait(1).to({graphics:mask_graphics_88,x:123.7068,y:352.8477}).wait(1).to({graphics:mask_graphics_89,x:135.7519,y:353.6662}).wait(1).to({graphics:mask_graphics_90,x:147.7976,y:354.4843}).wait(1).to({graphics:mask_graphics_91,x:159.8431,y:355.3024}).wait(1).to({graphics:mask_graphics_92,x:171.8888,y:356.1205}).wait(1).to({graphics:mask_graphics_93,x:183.9343,y:356.9386}).wait(1).to({graphics:mask_graphics_94,x:195.9795,y:357.7567}).wait(1).to({graphics:mask_graphics_95,x:208.0751,y:358.5748}).wait(34).to({graphics:mask_graphics_129,x:-56.975,y:340.5748}).wait(1).to({graphics:mask_graphics_130,x:-44.9294,y:341.3929}).wait(1).to({graphics:mask_graphics_131,x:-32.8838,y:342.211}).wait(1).to({graphics:mask_graphics_132,x:-20.8386,y:343.0291}).wait(1).to({graphics:mask_graphics_133,x:-8.7935,y:343.8477}).wait(1).to({graphics:mask_graphics_134,x:3.2521,y:344.6662}).wait(1).to({graphics:mask_graphics_135,x:15.2977,y:345.4843}).wait(1).to({graphics:mask_graphics_136,x:27.3433,y:346.3024}).wait(1).to({graphics:mask_graphics_137,x:39.389,y:347.1205}).wait(1).to({graphics:mask_graphics_138,x:51.4341,y:347.9386}).wait(1).to({graphics:mask_graphics_139,x:63.4793,y:348.7567}).wait(1).to({graphics:mask_graphics_140,x:75.5248,y:349.5748}).wait(1).to({graphics:mask_graphics_141,x:87.5704,y:350.3929}).wait(1).to({graphics:mask_graphics_142,x:99.616,y:351.211}).wait(1).to({graphics:mask_graphics_143,x:111.6616,y:352.0291}).wait(1).to({graphics:mask_graphics_144,x:123.7068,y:352.8477}).wait(1).to({graphics:mask_graphics_145,x:135.7519,y:353.6662}).wait(1).to({graphics:mask_graphics_146,x:147.7976,y:354.4843}).wait(1).to({graphics:mask_graphics_147,x:159.8431,y:355.3024}).wait(1).to({graphics:mask_graphics_148,x:171.8888,y:356.1205}).wait(1).to({graphics:mask_graphics_149,x:183.9343,y:356.9386}).wait(1).to({graphics:mask_graphics_150,x:195.9795,y:357.7567}).wait(1).to({graphics:mask_graphics_151,x:208.0751,y:358.5748}).wait(34).to({graphics:mask_graphics_185,x:-56.975,y:340.5748}).wait(1).to({graphics:mask_graphics_186,x:-44.9294,y:341.3929}).wait(1).to({graphics:mask_graphics_187,x:-32.8838,y:342.211}).wait(1).to({graphics:mask_graphics_188,x:-20.8386,y:343.0291}).wait(1).to({graphics:mask_graphics_189,x:-8.7935,y:343.8477}).wait(1).to({graphics:mask_graphics_190,x:3.2521,y:344.6662}).wait(1).to({graphics:mask_graphics_191,x:15.2977,y:345.4843}).wait(1).to({graphics:mask_graphics_192,x:27.3433,y:346.3024}).wait(1).to({graphics:mask_graphics_193,x:39.389,y:347.1205}).wait(1).to({graphics:mask_graphics_194,x:51.4341,y:347.9386}).wait(1).to({graphics:mask_graphics_195,x:63.4793,y:348.7567}).wait(1).to({graphics:mask_graphics_196,x:75.5248,y:349.5748}).wait(1).to({graphics:mask_graphics_197,x:87.5704,y:350.3929}).wait(1).to({graphics:mask_graphics_198,x:99.616,y:351.211}).wait(1).to({graphics:mask_graphics_199,x:111.6616,y:352.0291}).wait(1).to({graphics:mask_graphics_200,x:123.7068,y:352.8477}).wait(1).to({graphics:mask_graphics_201,x:135.7519,y:353.6662}).wait(1).to({graphics:mask_graphics_202,x:147.7976,y:354.4843}).wait(1).to({graphics:mask_graphics_203,x:159.8431,y:355.3024}).wait(1).to({graphics:mask_graphics_204,x:171.8888,y:356.1205}).wait(1).to({graphics:mask_graphics_205,x:183.9343,y:356.9386}).wait(1).to({graphics:mask_graphics_206,x:195.9795,y:357.7567}).wait(1).to({graphics:mask_graphics_207,x:208.0751,y:358.5748}).wait(32).to({graphics:mask_graphics_239,x:208.0751,y:358.5748}).wait(1));

	// Logo_LA_copy
	this.instance_1 = new lib.LogoLA();
	this.instance_1.setTransform(77,344.1,1,1,0,0,0,77,344.1);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.LogoLA(), 3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({_off:false},0).wait(167));

	// Logo_LA
	this.instance_2 = new lib.LogoLA();
	this.instance_2.setTransform(525.3,376.1,1.6673,2.7159,-29.9988,0,0,77,344);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.LogoLA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regY:344.1,scaleX:1,scaleY:1,rotation:0,x:77,y:344.1},49,cjs.Ease.quintOut).wait(141).to({regY:344.2,scaleX:0.445,scaleY:0.6745,rotation:26.9702,x:-93.05,y:256.1},25,cjs.Ease.quintIn).wait(1));

	// Layer_15_copy_copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_20 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_1_graphics_20,x:-223.7504,y:610.5753}).wait(1).to({graphics:mask_1_graphics_21,x:-207.2273,y:604.1169}).wait(1).to({graphics:mask_1_graphics_22,x:-190.7042,y:597.6585}).wait(1).to({graphics:mask_1_graphics_23,x:-174.1811,y:591.2001}).wait(1).to({graphics:mask_1_graphics_24,x:-157.658,y:584.7417}).wait(1).to({graphics:mask_1_graphics_25,x:-141.1358,y:578.2833}).wait(1).to({graphics:mask_1_graphics_26,x:-124.6127,y:571.8249}).wait(1).to({graphics:mask_1_graphics_27,x:-108.0896,y:565.3665}).wait(1).to({graphics:mask_1_graphics_28,x:-91.5665,y:558.9081}).wait(1).to({graphics:mask_1_graphics_29,x:-75.0434,y:552.4497}).wait(1).to({graphics:mask_1_graphics_30,x:-58.5212,y:545.9913}).wait(1).to({graphics:mask_1_graphics_31,x:-41.9981,y:539.5334}).wait(1).to({graphics:mask_1_graphics_32,x:-25.475,y:533.0749}).wait(1).to({graphics:mask_1_graphics_33,x:-8.9519,y:526.617}).wait(1).to({graphics:mask_1_graphics_34,x:7.5708,y:520.1586}).wait(1).to({graphics:mask_1_graphics_35,x:24.0934,y:513.7002}).wait(1).to({graphics:mask_1_graphics_36,x:40.6165,y:507.2418}).wait(1).to({graphics:mask_1_graphics_37,x:57.1396,y:500.7834}).wait(1).to({graphics:mask_1_graphics_38,x:73.6627,y:494.325}).wait(1).to({graphics:mask_1_graphics_39,x:90.1854,y:487.8666}).wait(1).to({graphics:mask_1_graphics_40,x:106.708,y:481.4082}).wait(1).to({graphics:mask_1_graphics_41,x:123.2311,y:474.9498}).wait(1).to({graphics:mask_1_graphics_42,x:139.7542,y:468.4914}).wait(1).to({graphics:mask_1_graphics_43,x:156.2773,y:462.033}).wait(1).to({graphics:mask_1_graphics_44,x:172.8,y:455.575}).wait(195).to({graphics:mask_1_graphics_239,x:172.8,y:455.575}).wait(1));

	// Ribbon_copy_copy
	this.instance_3 = new lib.Ribbon();
	this.instance_3.setTransform(160,240,1,1,0,0,0,160,240);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Ribbon(), 3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).wait(194).to({alpha:0},14).wait(12));

	// Layer_15_copy_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_16 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_2_graphics_16,x:-223.7504,y:610.5753}).wait(1).to({graphics:mask_2_graphics_17,x:-207.2273,y:604.1169}).wait(1).to({graphics:mask_2_graphics_18,x:-190.7042,y:597.6585}).wait(1).to({graphics:mask_2_graphics_19,x:-174.1811,y:591.2001}).wait(1).to({graphics:mask_2_graphics_20,x:-157.658,y:584.7417}).wait(1).to({graphics:mask_2_graphics_21,x:-141.1358,y:578.2833}).wait(1).to({graphics:mask_2_graphics_22,x:-124.6127,y:571.8249}).wait(1).to({graphics:mask_2_graphics_23,x:-108.0896,y:565.3665}).wait(1).to({graphics:mask_2_graphics_24,x:-91.5665,y:558.9081}).wait(1).to({graphics:mask_2_graphics_25,x:-75.0434,y:552.4497}).wait(1).to({graphics:mask_2_graphics_26,x:-58.5212,y:545.9913}).wait(1).to({graphics:mask_2_graphics_27,x:-41.9981,y:539.5334}).wait(1).to({graphics:mask_2_graphics_28,x:-25.475,y:533.0749}).wait(1).to({graphics:mask_2_graphics_29,x:-8.9519,y:526.617}).wait(1).to({graphics:mask_2_graphics_30,x:7.5708,y:520.1586}).wait(1).to({graphics:mask_2_graphics_31,x:24.0934,y:513.7002}).wait(1).to({graphics:mask_2_graphics_32,x:40.6165,y:507.2418}).wait(1).to({graphics:mask_2_graphics_33,x:57.1396,y:500.7834}).wait(1).to({graphics:mask_2_graphics_34,x:73.6627,y:494.325}).wait(1).to({graphics:mask_2_graphics_35,x:90.1854,y:487.8666}).wait(1).to({graphics:mask_2_graphics_36,x:106.708,y:481.4082}).wait(1).to({graphics:mask_2_graphics_37,x:123.2311,y:474.9498}).wait(1).to({graphics:mask_2_graphics_38,x:139.7542,y:468.4914}).wait(1).to({graphics:mask_2_graphics_39,x:156.2773,y:462.033}).wait(1).to({graphics:mask_2_graphics_40,x:172.8,y:455.575}).wait(200));

	// Ribbon_copy_copy
	this.instance_4 = new lib.Ribbon();
	this.instance_4.setTransform(160,240,1,1,0,0,0,160,240);
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Ribbon(), 3);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).wait(210).to({alpha:0},13,cjs.Ease.quintOut).wait(1));

	// Layer_15_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_16 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EggsgFOMA5WgT2IAKBzIEshuIAABGIibA3IAAA3IFoiCIAABfIkYBkIAFB4ICbgoIgFBLImBCRIAABLIC0hBIAABaIi5BaIAFB9IHWjmIAABuIi+BkIAKBzIkECRIgKCgIDShaIgUDwIi0A8IgFG3Mg50AUPg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_3_graphics_16,x:-223.7504,y:610.5753}).wait(1).to({graphics:mask_3_graphics_17,x:-207.2273,y:604.1169}).wait(1).to({graphics:mask_3_graphics_18,x:-190.7042,y:597.6585}).wait(1).to({graphics:mask_3_graphics_19,x:-174.1811,y:591.2001}).wait(1).to({graphics:mask_3_graphics_20,x:-157.658,y:584.7417}).wait(1).to({graphics:mask_3_graphics_21,x:-141.1358,y:578.2833}).wait(1).to({graphics:mask_3_graphics_22,x:-124.6127,y:571.8249}).wait(1).to({graphics:mask_3_graphics_23,x:-108.0896,y:565.3665}).wait(1).to({graphics:mask_3_graphics_24,x:-91.5665,y:558.9081}).wait(1).to({graphics:mask_3_graphics_25,x:-75.0434,y:552.4497}).wait(1).to({graphics:mask_3_graphics_26,x:-58.5212,y:545.9913}).wait(1).to({graphics:mask_3_graphics_27,x:-41.9981,y:539.5334}).wait(1).to({graphics:mask_3_graphics_28,x:-25.475,y:533.0749}).wait(1).to({graphics:mask_3_graphics_29,x:-8.9519,y:526.617}).wait(1).to({graphics:mask_3_graphics_30,x:7.5708,y:520.1586}).wait(1).to({graphics:mask_3_graphics_31,x:24.0934,y:513.7002}).wait(1).to({graphics:mask_3_graphics_32,x:40.6165,y:507.2418}).wait(1).to({graphics:mask_3_graphics_33,x:57.1396,y:500.7834}).wait(1).to({graphics:mask_3_graphics_34,x:73.6627,y:494.325}).wait(1).to({graphics:mask_3_graphics_35,x:90.1854,y:487.8666}).wait(1).to({graphics:mask_3_graphics_36,x:106.708,y:481.4082}).wait(1).to({graphics:mask_3_graphics_37,x:123.2311,y:474.9498}).wait(1).to({graphics:mask_3_graphics_38,x:139.7542,y:468.4914}).wait(1).to({graphics:mask_3_graphics_39,x:156.2773,y:462.033}).wait(1).to({graphics:mask_3_graphics_40,x:172.8,y:455.575}).wait(200));

	// Ribbon_copy
	this.instance_5 = new lib.Ribbon();
	this.instance_5.setTransform(160,240,1,1,0,0,0,160,240);
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Ribbon(), 3);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).wait(210).to({alpha:0},13,cjs.Ease.quintOut).wait(1));

	// hand
	this.instance_6 = new lib.hand();
	this.instance_6.setTransform(220,-115.15,0.5808,0.5808,0,0,0,220,207.9);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.hand(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:205,y:229.95},26,cjs.Ease.quadInOut).to({regY:208.1,scaleX:0.9958,scaleY:0.9958,x:219.05,y:207.2},25,cjs.Ease.quintOut).to({regX:219.9,scaleX:1.1361,scaleY:1.1361,x:219,y:222.25},163).to({regX:220,regY:207.9,scaleX:0.5808,scaleY:0.5808,x:220,y:-115.15},25,cjs.Ease.quintIn).wait(1));

	// Flip_Your_Mood
	this.instance_7 = new lib.FlipYourMood();
	this.instance_7.setTransform(160,92,1,1,0,0,0,160,240);
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.FlipYourMood(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({y:240},24,cjs.Ease.quintOut).wait(176).to({y:92},25,cjs.Ease.quintIn).wait(1));

	// Orang
	this.instance_8 = new lib.Orang();
	this.instance_8.setTransform(160,-92.95,1,1,0,0,0,160,240);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.Orang(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:264},24,cjs.Ease.quadInOut).to({y:226},8,cjs.Ease.quadInOut).to({y:248},5,cjs.Ease.quadInOut).to({y:238},4,cjs.Ease.quadInOut).to({y:240},4,cjs.Ease.quadInOut).wait(169).to({y:-92.95},25,cjs.Ease.quintIn).wait(1));

	// SKY
	this.instance_9 = new lib.SKY();
	this.instance_9.setTransform(160,174,1,1,0,0,0,160,240);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.SKY(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:240},24,cjs.Ease.quadOut).to({scaleX:1.2127,scaleY:1.2127,x:160.05,y:200.05},190).to({scaleX:1,scaleY:1,x:160,y:174},25,cjs.Ease.quintIn).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgajgnDMA1HAAAMAAABOHMg1HAAAg");
	this.shape.setTransform(160,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgajAnEMAAAhOHMA1HAAAMAAABOHg");
	this.shape_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-188.4,-395.6,1249.2,1155.8000000000002);
// library properties:
lib.properties = {
	id: '5A5DC5E27B23714B995D527D9E7CC1E2',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/FLIPYOURMOOD_320x480min.png?1689579919762", id:"FLIPYOURMOOD_320x480min"},
		{src:"images/hand_320x480min.png?1689579919762", id:"hand_320x480min"},
		{src:"images/LogoLA_320x480min.png?1689579919762", id:"LogoLA_320x480min"},
		{src:"images/orang_320x480min.png?1689579919762", id:"orang_320x480min"},
		{src:"images/PHW_320x480min.png?1689579919762", id:"PHW_320x480min"},
		{src:"images/ribbon_320x480min.png?1689579919762", id:"ribbon_320x480min"},
		{src:"images/skymin.jpg?1689579919762", id:"skymin"}
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
an.compositions['5A5DC5E27B23714B995D527D9E7CC1E2'] = {
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