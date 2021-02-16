(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BG2 = function() {
	this.initialize(img.BG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.COPY1 = function() {
	this.initialize(img.COPY1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,118);


(lib.COPY2 = function() {
	this.initialize(img.COPY2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,57);


(lib.COPY3 = function() {
	this.initialize(img.COPY3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,44);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,27);


(lib.IMG = function() {
	this.initialize(img.IMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,467,259);


(lib.LOGO1 = function() {
	this.initialize(img.LOGO1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,27);


(lib.PRODUK = function() {
	this.initialize(img.PRODUK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,247);


(lib.PRODUK_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PRODUK();
	this.instance.parent = this;
	this.instance.setTransform(-70,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-123.5,140,247);


(lib.LOGOIQOS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LOGO1();
	this.instance.parent = this;
	this.instance.setTransform(-41.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-13.5,83,27);


(lib.IMG_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IMG();
	this.instance.parent = this;
	this.instance.setTransform(-233.5,-129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.5,-129.5,467,259);


(lib.CTA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(-92.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-13.5,185,27);


(lib.COPY3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COPY3();
	this.instance.parent = this;
	this.instance.setTransform(-130.5,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.5,-22,261,44);


(lib.COPY2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COPY2();
	this.instance.parent = this;
	this.instance.setTransform(-138,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-28.5,276,57);


(lib.COPY1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COPY1();
	this.instance.parent = this;
	this.instance.setTransform(-160,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-59,320,118);


(lib.BG2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG2();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.BG1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


// stage content:
(lib._320x480 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNA1IAAgnIgnAAIAAgaIAnAAIAAgoIAaAAIAAAoIAoAAIAAAaIgoAAIAAAng");
	this.shape.setTransform(52.9,443.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggBDQgRgNAAgXQAAgMAGgKQAGgJAOgGQgMgFgFgIQgFgIAAgKQAAgRAMgLQAMgLAVAAQAVAAAMALQAMALAAARQAAAKgFAIQgGAJgKAEQANAFAGAJQAHAJAAANQAAAVgOANQgNANgWAAQgUAAgNgKgAgPANQgFAHAAAJQAAAMAGAGQAGAHAIAAQAJAAAGgGQAGgHAAgMQAAgLgGgGQgGgHgJAAQgKAAgFAIgAgMgwQgGAFAAAIQAAAIAGAFQAEAFAIAAQAHAAAGgFQAEgFAAgIQABgJgFgEQgFgFgIAAQgHAAgFAFg");
	this.shape_1.setTransform(40.8,443.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAEBMIAAhtQgPAPgVAIIAAgbQALgDANgLQANgLAFgNIAXAAIAACXg");
	this.shape_2.setTransform(28.2,443.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(250));

	// bulet
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AD4AAQAABTgzA/QgKAMgMAMQgdAcghASQgzAag+AAQhmAAhIhIQhJhHAAhjQAAhkBJhGQBIhHBmAAQBmAABJBHQBJBGAABkg");
	this.shape_3.setTransform(40.2,443.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(250));

	// tulisan
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_4.setTransform(293.2,456.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVAnIAAguQAAgHgBgEQgBgEgDgDQgCgDgEgDQgEgBgFAAQgEAAgEACQgEACgDADQgDAEgCAEQgCAFAAAFIAAAuIgGAAIAAhLIAGAAIAAAMQAEgGAFgEIAHgDIAHgBQAGAAAFACQAFACADADQAEAFACAEQABAGAAAHIAAAwg");
	this.shape_5.setTransform(287.4,452.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAmQgFgCgDgCQgFgEgCgEQgBgFAAgFIAAgBQAAgFABgFQACgEAFgDQADgDAGgCQAFgCAFABQAJAAAMACIAAgFQAAgFgBgEQgCgEgCgCQgDgDgEgCQgEgBgFAAIgKABIgJAFIgDgHIALgEIALgCQAHAAAFACQAGACADAEQADADACAFQACAFAAAGIAAAyIgHAAIAAgMQgDAGgGAEIgHACIgHABQgFABgEgCgAgIgBIgHACQgDADgBAEQgBADAAAEIAAABQAAAEABACIAEAHIAGADIAIABQADAAAFgCQAEgBAEgDQADgDACgEIABgJIAAgLQgMgDgJAAQgEAAgEACg");
	this.shape_6.setTransform(279.1,453);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAwQgIgCgGgFIADgGQAGAFAGACQAIACAFAAQAGAAAEgCQAFgBAEgDQADgEABgEQADgFAAgGIAAgOQgHAJgFADIgGAEIgIACQgHAAgFgDQgGgCgEgFQgEgFgCgGQgEgGAAgJIAAAAQAAgIAEgHQACgHAEgFQAEgEAGgDQAFgCAHAAIAIABIAHAEIAFAFIAGAGIAAgPIAGAAIAABDQAAAHgCAGQgCAGgEAEQgEAEgHACQgFACgIAAQgHAAgHgCgAgJgpQgEACgEAEQgDAEgCAFQgCAGAAAHIAAAAQAAAHACAGQACAEADAEIAIAGQAFACAEAAQAEAAAFgCQAFgCAEgEQADgEACgEQADgGAAgHIAAAAQAAgHgDgGQgCgFgDgEQgEgEgFgCQgFgCgEAAQgEAAgFACg");
	this.shape_7.setTransform(270.8,454);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAVAnIAAguQAAgHgBgEQgBgEgDgDQgCgDgEgDQgEgBgFAAQgEAAgEACQgEACgDADQgDAEgCAEQgCAFAAAFIAAAuIgGAAIAAhLIAGAAIAAAMQAEgGAFgEIAHgDIAHgBQAGAAAFACQAFACADADQAEAFACAEQABAGAAAHIAAAwg");
	this.shape_8.setTransform(262.4,452.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMAlQgFgCgEgDIgEgJQgCgGAAgGIAAgxIAGAAIAAAuQAAAHACAEQABAEADADQADAEAEABQADABAFAAIAIgBQAEgCADgEQADgDACgEQABgFAAgGIAAgtIAIAAIAABMIgIAAIAAgOQgDAHgGADQgDADgDABIgHABQgGAAgFgCg");
	this.shape_9.setTransform(254,453.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACAyQgDgCgCgCQgDgCgBgDQgBgEAAgFIAAgzIgKAAIAAgHIAKAAIAAgYIAHAAIAAAYIAUAAIAAAHIgUAAIAAAzQAAAGACADQADADAGAAQAFAAAEgCIAAAGQgEADgGAAIgHgBg");
	this.shape_10.setTransform(247.1,451.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVAnIAAguQAAgHgBgEQgBgEgDgDQgCgDgEgDQgEgBgFAAQgEAAgEACQgEACgDADQgDAEgCAEQgCAFAAAFIAAAuIgGAAIAAhLIAGAAIAAAMQAEgGAFgEIAHgDIAHgBQAGAAAFACQAFACADADQAEAFACAEQABAGAAAHIAAAwg");
	this.shape_11.setTransform(240.3,452.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMAmQgEgCgEgCQgEgEgBgEQgCgFAAgFIAAgBQAAgFACgFQABgEAEgDQAEgDAFgCQAGgCAGABQAIAAAMACIAAgFQABgFgCgEQgCgEgCgCQgDgDgEgCQgEgBgFAAIgKABIgKAFIgCgHIALgEIAMgCQAGAAAFACQAFACAEAEQAEADACAFQACAFAAAGIAAAyIgIAAIAAgMQgDAGgGAEIgHACIgHABQgFABgFgCgAgIgBIgHACQgCADgCAEQgCADAAAEIAAABQAAAEACACIAEAHIAGADIAHABQAFAAAEgCQAEgBADgDQAEgDACgEIABgJIAAgLQgMgDgJAAQgEAAgEACg");
	this.shape_12.setTransform(232,453);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAwQgHgCgIgFIAFgGQAFAFAHACQAHACAFAAQAGAAAFgCQAEgBAEgDQADgEABgEQACgFAAgGIAAgOQgGAJgFADIgHAEIgIACQgFAAgGgDQgFgCgFgFQgEgFgDgGQgCgGAAgJIAAAAQAAgIACgHQADgHAEgFQAFgEAFgDQAGgCAFAAIAIABIAIAEIAGAFIAEAGIAAgPIAHAAIAABDQABAHgDAGQgCAGgEAEQgEAEgHACQgFACgIAAQgHAAgHgCgAgJgpQgEACgEAEQgDAEgCAFQgCAGAAAHIAAAAQAAAHACAGQACAEADAEIAIAGQAEACAFAAQAEAAAFgCQAFgCADgEQAFgEABgEQACgGAAgHIAAAAQAAgHgCgGQgBgFgFgEQgDgEgFgCQgFgCgEAAQgFAAgEACg");
	this.shape_13.setTransform(223.7,454);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAnIAAhMIAHAAIAAASIAFgIIAFgGIAIgEQAFgBAFAAIAAAIIgBAAQgGAAgFACQgFACgDAEQgEAEgCAGQgCAGAAAHIAAAmg");
	this.shape_14.setTransform(217.1,452.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAlQgGgDgEgFQgGgFgCgHQgDgIAAgJIAAAAQAAgIADgHQACgIAEgFQAFgFAGgDQAFgDAGAAQAGAAAGADQAFADAEAFQAEAFACAHQACAIAAAIIAAADIg1AAQABAHACAGQACAFAEAEQAEAEAEACQAFACAEAAQAHAAAFgCQAFgDAFgEIADAFQgFAFgFADQgJADgHAAQgFAAgGgDgAAXgCQAAgHgCgFQgBgGgDgEQgDgEgEgCQgFgDgEAAQgEAAgEADQgEACgEAEQgDAEgCAFQgCAGgBAHIAuAAIAAAAg");
	this.shape_15.setTransform(210,453);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AACAyQgDgCgCgCQgDgCgBgDQgBgEAAgFIAAgzIgKAAIAAgHIAKAAIAAgYIAHAAIAAAYIAUAAIAAAHIgUAAIAAAzQAAAGACADQADADAGAAQAFAAAEgCIAAAGQgEADgGAAIgHgBg");
	this.shape_16.setTransform(203.2,451.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAlQgGgDgEgFQgFgFgDgHQgCgIAAgJIAAAAQAAgIACgHQACgIAFgFQADgFAHgDQAFgDAFAAQAHAAAGADQAFADAEAFQAEAFACAHQACAIAAAIIAAADIg1AAQABAHACAGQADAFADAEQAEAEAEACQAFACAEAAQAGAAAGgCQAFgDAFgEIADAFQgFAFgFADQgJADgHAAQgFAAgGgDgAAXgCQAAgHgCgFQgBgGgDgEQgDgEgEgCQgFgDgFAAQgDAAgFADQgDACgEAEQgDAEgCAFQgCAGgBAHIAuAAIAAAAg");
	this.shape_17.setTransform(196.6,453);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AATA2IgYgmIgPARIAAAVIgHAAIAAhrIAHAAIAABNIAmguIAJAAIgbAgIAcAsg");
	this.shape_18.setTransform(189.2,451.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAVAnIAAguQAAgHgBgEQgBgEgDgDQgCgDgEgDQgEgBgFAAQgEAAgEACQgEACgDADQgDAEgCAEQgCAFAAAFIAAAuIgGAAIAAhLIAGAAIAAAMQAEgGAFgEIAHgDIAHgBQAGAAAFACQAFACADADQAEAFACAEQABAGAAAHIAAAwg");
	this.shape_19.setTransform(176.9,452.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMAmQgEgCgDgCQgFgEgBgEQgCgFAAgFIAAgBQAAgFACgFQABgEAFgDQADgDAGgCQAFgCAGABQAIAAAMACIAAgFQABgFgCgEQgCgEgCgCQgDgDgEgCQgEgBgFAAIgKABIgJAFIgDgHIALgEIAMgCQAGAAAFACQAFACAEAEQAEADACAFQABAFAAAGIAAAyIgHAAIAAgMQgDAGgGAEIgHACIgHABQgFABgFgCgAgIgBIgHACQgDADgBAEQgCADAAAEIAAABQAAAEACACIAEAHIAGADIAIABQAEAAAEgCQAEgBADgDQAEgDACgEIABgJIAAgLQgMgDgJAAQgEAAgEACg");
	this.shape_20.setTransform(168.6,453);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATA2IgYgmIgPARIAAAVIgHAAIAAhrIAHAAIAABNIAmguIAJAAIgbAgIAcAsg");
	this.shape_21.setTransform(161.5,451.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHA1QgEgBgDgCIgGgGIgFgHIAAAQIgGAAIAAhrIAGAAIAAAwIAFgHIAGgGIAHgEIAIgBQAGAAAGADQAFACAFAFQAEAFADAHQACAHAAAJIAAABQAAAJgCAIQgDAHgEAFQgFAFgFADQgGADgGgBQgEABgEgCgAgIgQQgFADgEAEQgEAFgCAEQgCAHAAAHIAAACQAAAGACAHQACAGAEAFQAEAEAFACQAEACAEAAQAGAAAEgCQAEgCAEgEQADgFACgGQACgGAAgHIAAgBQAAgIgCgHQgCgEgDgFQgEgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_22.setTransform(153.1,451.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgLAmQgFgCgDgCQgFgEgCgEQgBgFAAgFIAAgBQAAgFABgFQACgEAFgDQADgDAGgCQAFgCAFABQAJAAAMACIAAgFQAAgFgBgEQgCgEgCgCQgDgDgEgCQgEgBgFAAIgKABIgJAFIgDgHIALgEIALgCQAHAAAFACQAGACADAEQAEADACAFQABAFAAAGIAAAyIgHAAIAAgMQgDAGgGAEIgHACIgHABQgFABgEgCgAgIgBIgHACQgDADgBAEQgBADAAAEIAAABQAAAEABACIAEAHIAGADIAIABQAEAAAEgCQAFgBADgDQADgDACgEIABgJIAAgLQgMgDgJAAQgEAAgEACg");
	this.shape_23.setTransform(144.4,453);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHA1QgEgBgDgCIgGgGIgFgHIAAAQIgGAAIAAhrIAGAAIAAAwIAFgHIAGgGIAHgEIAIgBQAGAAAGADQAFACAFAFQAEAFADAHQACAHAAAJIAAABQAAAJgCAIQgDAHgEAFQgFAFgFADQgGADgGgBQgEABgEgCgAgIgQQgFADgEAEQgEAFgCAEQgCAHAAAHIAAACQAAAGACAHQACAGAEAFQAEAEAFACQAEACAEAAQAGAAAEgCQAEgCAEgEQADgFACgGQACgGAAgHIAAgBQAAgIgCgHQgCgEgDgFQgEgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_24.setTransform(136.5,451.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAlQgGgDgFgFQgFgFgCgHQgDgIAAgJIAAAAQAAgIADgHQACgIAEgFQAFgFAFgDQAGgDAGAAQAGAAAGADQAFADAEAFQAEAFADAHQABAIAAAIIAAADIg1AAQABAHACAGQACAFAEAEQAEAEAEACQAFACAEAAQAGAAAGgCQAFgDAEgEIAFAFQgGAFgFADQgKADgFAAQgGAAgGgDgAAXgCQAAgHgCgFQgBgGgDgEQgDgEgEgCQgFgDgEAAQgFAAgDADQgFACgDAEQgDAEgCAFQgCAGgBAHIAuAAIAAAAg");
	this.shape_25.setTransform(128,453);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAuIADgFQAFACAGAAQAEAAAEgEQAEgDAEgJIgghLIAIAAIAaBCIAXhCIAHAAIgcBMIgEAKIgEAHQgDACgDABIgGACQgIgBgGgDg");
	this.shape_26.setTransform(120,454.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAVAnIAAguQAAgHgBgEQgBgEgDgDQgCgDgEgDQgEgBgFAAQgEAAgEACQgEACgDADQgDAEgCAEQgCAFAAAFIAAAuIgGAAIAAhLIAGAAIAAAMQAEgGAFgEIAHgDIAHgBQAGAAAFACQAFACADADQAEAFACAEQABAGAAAHIAAAwg");
	this.shape_27.setTransform(111.9,452.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJAlQgGgDgEgFQgGgFgCgHQgDgIAAgJIAAAAQAAgIADgHQACgIAEgFQAFgFAGgDQAFgDAGAAQAGAAAGADQAFADAEAFQAEAFADAHQABAIAAAIIAAADIg1AAQABAHACAGQACAFAEAEQAEAEAEACQAFACAEAAQAHAAAFgCQAFgDAFgEIAEAFQgGAFgFADQgJADgHAAQgFAAgGgDgAAXgCQAAgHgCgFQgBgGgDgEQgDgEgEgCQgFgDgEAAQgEAAgEADQgEACgEAEQgDAEgCAFQgCAGgBAHIAuAAIAAAAg");
	this.shape_28.setTransform(103.8,453);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AArAnIAAguQAAgHgBgEQgBgEgDgDQgCgEgEgCQgDgBgFAAQgEAAgEABQgEADgCADQgDADgCAFQgCAFAAAFIAAAuIgGAAIAAgvIgBgKIgEgIQgCgDgEgCQgDgBgFAAQgEAAgEACQgDACgDADQgDAEgCAEQgCAFAAAFIAAAuIgGAAIAAhLIAGAAIAAAMQAEgGAFgEIAGgDIAIgBIAHABIAGADIAFAEIADAHQAEgHAFgDQADgDADgBIAJgBQAGAAAEACQAFACADADQAEAEABAFQACAGAAAHIAAAwg");
	this.shape_29.setTransform(93.5,452.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVAnIAAguQAAgGgBgFQgBgEgDgDQgCgEgEgCQgEgBgFAAQgEAAgEACQgEABgDAEQgDAEgCAEQgCAFAAAFIAAAuIgGAAIAAhLIAGAAIAAAMQAEgGAFgEIAHgDIAHgBQAGAAAFACQAFACADADQAEAFACAEQABAGAAAHIAAAwg");
	this.shape_30.setTransform(295.6,435);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLAmQgFgBgDgDQgEgEgDgEQgCgFAAgFIAAgBQAAgGACgEQADgFAEgCQADgDAGgCQAFgCAFABQAJAAANACIAAgFQAAgFgCgEQgBgEgDgCQgDgDgEgCQgEgBgFAAIgKABIgJAFIgDgHIALgEIALgBQAHAAAGABQAFACADAEQADADACAFQACAFAAAHIAAAxIgGAAIAAgMQgEAGgGAEIgHACIgHABQgFAAgEgBgAgIgBIgHACQgCADgCAEQgCADABAEIAAABQgBADACADIAEAGIAGAEIAIABQADAAAFgCQAFgBADgDQADgDACgEIACgJIAAgLQgNgCgJAAQgEAAgEABg");
	this.shape_31.setTransform(287.3,435.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgLA0QgGgDgFgFQgEgEgCgIQgEgHAAgKIAAgBQAAgJAEgGQACgIAEgFQAFgFAGgCQAFgDAGAAIAIABIAHAEIAGAGIAFAGIAAgvIAHAAIAABrIgHAAIAAgRQgHAKgEAEQgDACgEABQgFABgDAAQgGAAgFgCgAgJgQQgEADgEADQgEAFgBAFQgCAGAAAIIAAABQAAAIACAGQACAGADAFQADAEAFACQAEACAFAAQAFAAAEgCQAFgDAEgEQADgEADgGQACgGAAgIIAAgBQAAgHgCgHQgDgEgDgFQgEgEgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_32.setTransform(279,433.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgMAlQgGgDgFgGQgEgFgDgHQgCgHAAgJIAAAAQAAgHACgIQADgHAEgFQAFgGAGgDQAGgDAGAAQAHAAAGADQAGADAFAFQAEAGADAHQACAHAAAIIAAAAQAAAIgCAIQgDAHgEAFQgFAGgGADQgGADgHAAQgGAAgGgDgAgJgeQgFACgEAFQgDAFgCAGQgCAGAAAGIAAAAQAAAHACAGQACAGAEAFQADAEAFADQAFACAEAAQAGAAAEgCQAFgDAEgEQADgFACgGQACgGAAgHIAAAAQAAgGgCgGQgCgHgEgEQgDgFgFgCQgFgCgFAAQgFAAgEACg");
	this.shape_33.setTransform(266.5,435.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATA2IgYgmIgPARIAAAVIgHAAIAAhrIAHAAIAABNIAmguIAJAAIgbAgIAcAsg");
	this.shape_34.setTransform(258.8,433.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgCA1IAAhMIAGAAIAABMgAgDgqIAAgKIAHAAIAAAKg");
	this.shape_35.setTransform(252.8,433.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgMAlQgHgDgGgFIAFgGQAFAFAGADQAGACAFAAIAGgBIAGgDIADgEIACgGIAAgBIgCgFIgDgEQgEgDgJgEIgIgDIgHgEIgFgGQgCgDAAgFQAAgEACgEIAFgGIAHgEQAEgCAEAAQAHAAAGADQAGACAFAEIgEAFQgFgDgFgCQgFgCgFAAQgGAAgEADQgFAEAAAFIAAABIACAFIADAEIANAHIAJADIAHAFIAEAFQACAEAAAEIAAAAQAAAFgCAEQgCAEgEADQgDADgEABQgFACgFAAQgGAAgHgDg");
	this.shape_36.setTransform(247.5,435.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCA1IAAhMIAGAAIAABMgAgDgqIAAgKIAHAAIAAAKg");
	this.shape_37.setTransform(242.4,433.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRAnIAAhMIAHAAIAAASIAFgIIAFgGIAIgEQAFgBAFAAIAAAIIgBAAQgGAAgFACQgFACgDAEQgEAEgCAGQgCAGAAAHIAAAmg");
	this.shape_38.setTransform(238.2,435);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgMAlQgHgDgGgFIAFgGQAFAFAGADQAGACAFAAIAGgBIAGgDIADgEIACgGIAAgBIgCgFIgDgEQgEgDgJgEIgIgDIgHgEIgFgGQgCgDAAgFQAAgEACgEIAFgGIAHgEQAEgCAEAAQAHAAAGADQAGACAFAEIgEAFQgFgDgFgCQgFgCgFAAQgGAAgEADQgFAEAAAFIAAABIACAFIADAEIANAHIAJADIAHAFIAEAFQACAEAAAEIAAAAQAAAFgCAEQgCAEgEADQgDADgEABQgFACgFAAQgGAAgHgDg");
	this.shape_39.setTransform(227.6,435.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLAmQgFgBgDgDQgEgEgDgEQgCgFAAgFIAAgBQAAgGACgEQADgFAEgCQADgDAGgCQAFgCAFABQAJAAANACIAAgFQAAgFgCgEQgBgEgDgCQgDgDgEgCQgEgBgFAAIgKABIgJAFIgDgHIALgEIALgBQAHAAAGABQAFACADAEQADADACAFQACAFAAAHIAAAxIgGAAIAAgMQgEAGgGAEIgHACIgHABQgFAAgEgBgAgIgBIgHACQgCADgCAEQgCADABAEIAAABQgBADACADIAEAGIAGAEIAIABQADAAAFgCQAFgBADgDQADgDACgEIACgJIAAgLQgNgCgJAAQgEAAgEABg");
	this.shape_40.setTransform(220.2,435.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHA1QgEgBgDgCIgGgGIgFgHIAAAQIgGAAIAAhrIAGAAIAAAwIAFgHIAGgGIAHgEIAIgBQAGAAAGADQAFACAFAFQAEAFADAHQACAHAAAJIAAABQAAAJgCAIQgDAHgEAFQgFAFgFADQgGACgGAAQgEAAgEgBgAgIgQQgFADgEAEQgEAFgCAEQgCAHAAAHIAAABQAAAIACAGQACAGAEAFQAEAEAFACQAEACAEAAQAGAAAEgCQAEgCAEgEQADgFACgFQACgHAAgIIAAAAQAAgJgCgGQgCgEgDgFQgEgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_41.setTransform(212.4,433.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJAlQgGgDgFgFQgEgFgDgHQgCgIgBgJIAAAAQABgIACgHQACgIAEgFQAEgFAGgDQAGgDAGAAQAGAAAGADQAGADADAFQAEAFADAHQACAIAAAIIAAADIg1AAQAAAHACAGQADAFADAEQAEAEAFACQAEACAEAAQAGAAAGgCQAFgDAEgEIAFAFQgGAFgGADQgIADgGAAQgGAAgGgDgAAXgCQAAgHgBgFQgCgGgDgEQgDgEgEgCQgEgDgFAAQgFAAgDADQgFACgDAEQgDAEgCAFQgCAGAAAHIAtAAIAAAAg");
	this.shape_42.setTransform(203.9,435.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHA1QgEgBgDgCIgGgGIgFgHIAAAQIgGAAIAAhrIAGAAIAAAwIAFgHIAGgGIAHgEIAIgBQAGAAAGADQAFACAFAFQAEAFADAHQACAHAAAJIAAABQAAAJgCAIQgDAHgEAFQgFAFgFADQgGACgGAAQgEAAgEgBgAgIgQQgFADgEAEQgEAFgCAEQgCAHAAAHIAAABQAAAIACAGQACAGAEAFQAEAEAFACQAEACAEAAQAGAAAEgCQAEgCAEgEQADgFACgFQACgHAAgIIAAAAQAAgJgCgGQgCgEgDgFQgEgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_43.setTransform(195.7,433.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATA2IgYgmIgPARIAAAVIgHAAIAAhrIAHAAIAABNIAmguIAJAAIgbAgIAcAsg");
	this.shape_44.setTransform(183.6,433.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMAmQgEgBgDgDQgFgEgBgEQgCgFAAgFIAAgBQAAgGACgEQABgFAFgCQADgDAGgCQAFgCAGABQAIAAAMACIAAgFQABgFgCgEQgCgEgCgCQgDgDgEgCQgEgBgFAAIgKABIgJAFIgDgHIALgEIAMgBQAGAAAFABQAFACAEAEQAEADACAFQABAFAAAHIAAAxIgHAAIAAgMQgDAGgGAEIgHACIgHABQgFAAgFgBgAgIgBIgHACQgDADgBAEQgCADAAAEIAAABQAAADACADIAEAGIAGAEIAIABQAEAAAEgCQAEgBADgDQAEgDACgEIABgJIAAgLQgMgCgJAAQgEAAgEABg");
	this.shape_45.setTransform(175.4,435.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgMA0QgGgDgEgFQgEgEgDgIQgCgHAAgKIAAgBQAAgJACgGQADgIAEgFQAEgFAGgCQAGgDAGAAIAHABIAIAEIAGAGIAEAGIAAgvIAHAAIAABrIgHAAIAAgRQgGAKgEAEQgDACgFABQgEABgDAAQgGAAgGgCgAgJgQQgFADgDADQgDAFgCAFQgCAGAAAIIAAABQAAAIACAGQACAGAEAFQADAEAEACQAEACAFAAQAEAAAGgCQAEgDAEgEQAEgEABgGQACgGAAgIIAAgBQAAgHgCgHQgBgEgEgFQgEgEgEgDQgGgCgEAAQgFAAgEACg");
	this.shape_46.setTransform(167.1,433.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgCA1IAAhMIAGAAIAABMgAgDgqIAAgKIAHAAIAAAKg");
	this.shape_47.setTransform(161,433.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AACAyQgDgBgCgDQgDgCgBgDQgBgEAAgFIAAgzIgKAAIAAgHIAKAAIAAgXIAHAAIAAAXIAUAAIAAAHIgUAAIAAAzQAAAGACADQADADAGAAQAFAAAEgCIAAAHQgEACgGAAIgHgBg");
	this.shape_48.setTransform(156.4,434);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgCA1IAAhMIAGAAIAABMgAgDgqIAAgKIAHAAIAAAKg");
	this.shape_49.setTransform(147.9,433.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAVAnIAAguQAAgGgBgFQgBgEgDgDQgCgEgEgCQgEgBgFAAQgEAAgEACQgEABgDAEQgDAEgCAEQgCAFAAAFIAAAuIgGAAIAAhLIAGAAIAAAMQAEgGAFgEIAHgDIAHgBQAGAAAFACQAFACADADQAEAFACAEQABAGAAAHIAAAwg");
	this.shape_50.setTransform(141.9,435);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgCA1IAAhMIAGAAIAABMgAgDgqIAAgKIAHAAIAAAKg");
	this.shape_51.setTransform(135.8,433.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AATA2IgYgmIgPARIAAAVIgHAAIAAhrIAHAAIAABNIAmguIAJAAIgbAgIAcAsg");
	this.shape_52.setTransform(126.6,433.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgMAlQgFgCgEgEIgEgJQgCgFAAgGIAAgxIAGAAIAAAuQAAAHACAEQABAEADADQACAEAFABQADACAFgBQAEABAEgCQAEgCADgEQADgDACgEQABgFAAgGIAAgtIAHAAIAABMIgHAAIAAgOQgDAHgGADQgDADgDABIgHABQgGAAgFgCg");
	this.shape_53.setTransform(118.2,435.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgLA0QgHgDgDgFQgFgEgCgIQgDgHAAgKIAAgBQAAgJADgGQACgIAFgFQADgFAHgCQAFgDAGAAIAIABIAHAEIAGAGIAEAGIAAgvIAIAAIAABrIgIAAIAAgRQgGAKgEAEQgEACgDABQgEABgEAAQgGAAgFgCgAgJgQQgFADgDADQgEAFgBAFQgCAGAAAIIAAABQAAAIACAGQACAGADAFQADAEAFACQAFACAEAAQAEAAAFgCQAFgDADgEQAEgEADgGQABgGAAgIIAAgBQAAgHgBgHQgDgEgEgFQgDgEgFgDQgFgCgEAAQgEAAgFACg");
	this.shape_54.setTransform(109.5,433.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMAlQgGgDgFgGQgEgFgDgHQgCgHAAgJIAAAAQAAgHACgIQADgHAEgFQAFgGAGgDQAGgDAGAAQAHAAAGADQAGADAFAFQAEAGADAHQACAHAAAIIAAAAQAAAIgCAIQgDAHgEAFQgFAGgGADQgGADgHAAQgGAAgGgDgAgJgeQgFACgEAFQgDAFgCAGQgCAGAAAGIAAAAQAAAHACAGQACAGAEAFQADAEAFADQAFACAEAAQAGAAAEgCQAFgDAEgEQADgFACgGQACgGAAgHIAAAAQAAgGgCgGQgCgHgEgEQgDgFgFgCQgFgCgFAAQgFAAgEACg");
	this.shape_55.setTransform(101,435.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRAnIAAhMIAHAAIAAASIAFgIIAFgGIAIgEQAFgBAFAAIAAAIIgBAAQgGAAgFACQgFACgDAEQgEAEgCAGQgCAGAAAHIAAAmg");
	this.shape_56.setTransform(94.4,435);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AggA0IAAhnIAeAAQAHAAAHACQAHADAEAEQAFADADAHQACAFAAAIQAAAIgDAHQgCAFgGAEQgFAEgHACQgGACgHABIgWAAIAAAmgAgZAGIAWAAQAGABAFgCQAGgCAEgDQAEgDACgFQACgEAAgHIAAAAQAAgGgCgFQgCgEgEgEQgEgDgFgBQgGgDgFAAIgXAAg");
	this.shape_57.setTransform(87.1,433.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(250));

	// BG
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("A4/FoIAArQMAx/AAAIAALQg");
	this.shape_58.setTransform(160,444);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(250));

	// PRODUK
	this.instance = new lib.PRODUK_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(161,212.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({_off:false},0).to({alpha:0.5},2).to({alpha:1},10).wait(50).to({startPosition:0},0).wait(1));

	// LOGOIQOS copy 2
	this.instance_1 = new lib.LOGOIQOS("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(142.6,25.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({x:153.4,alpha:0.602},3).to({x:160.6,alpha:1},7).wait(25).to({startPosition:0},0).wait(70).to({startPosition:0},0).wait(1));

	// COPY3
	this.instance_2 = new lib.COPY3_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(143.7,191.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({x:154.5,alpha:0.602},3).to({x:161.7,alpha:1},7).wait(19).to({startPosition:0},0).to({y:118.1},3).to({y:97.1},3).to({y:69},6).wait(58).to({startPosition:0},0).wait(1));

	// CTA
	this.instance_3 = new lib.CTA_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(145.8,243.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(147).to({_off:false},0).to({x:156.6,alpha:0.602},3).to({x:163.8,alpha:1},7).wait(22).to({startPosition:0},0).to({y:316.4},3).to({y:337.3},3).to({y:365},6).wait(58).to({startPosition:0},0).wait(1));

	// BG1 copy
	this.instance_4 = new lib.BG1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(160,240);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(135).to({_off:false},0).to({alpha:1},10).wait(34).to({startPosition:0},0).wait(70).to({startPosition:0},0).wait(1));

	// COPY2
	this.instance_5 = new lib.COPY2_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(151.8,332.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).to({x:155.9},2).to({x:160},8).wait(104).to({startPosition:0},0).wait(70).to({startPosition:0},0).wait(1));

	// LOGOIQOS copy
	this.instance_6 = new lib.LOGOIQOS("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(151.8,256.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({_off:false},0).to({x:158.4},4).to({x:160},6).wait(108).to({startPosition:0},0).wait(70).to({startPosition:0},0).wait(1));

	// BG2
	this.instance_7 = new lib.BG2_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(160,240);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).to({alpha:1},7).wait(50).to({startPosition:0},0).to({_off:true},34).wait(105));

	// IMG
	this.instance_8 = new lib.IMG_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(170.6,129.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({alpha:1},7).to({_off:true},84).wait(105));

	// COPY1
	this.instance_9 = new lib.COPY1_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(146.7,218);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:155.6,alpha:0.672},3).to({x:160,alpha:1},6).to({_off:true},55).wait(186));

	// LOGOIQOS
	this.instance_10 = new lib.LOGOIQOS("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(160.6,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},64).wait(186));

	// BG1
	this.instance_11 = new lib.BG1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},64).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.4,240,669.6,480);
// library properties:
lib.properties = {
	width: 320,
	height: 480,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/BG2.png", id:"BG2"},
		{src:"images/COPY1.png", id:"COPY1"},
		{src:"images/COPY2.png", id:"COPY2"},
		{src:"images/COPY3.png", id:"COPY3"},
		{src:"images/CTA.png", id:"CTA"},
		{src:"images/IMG.jpg", id:"IMG"},
		{src:"images/LOGO1.png", id:"LOGO1"},
		{src:"images/PRODUK.png", id:"PRODUK"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;