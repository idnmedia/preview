InnityVideo = function(eid, video, logger) {
	this.pauseTracker = function(){
		this.video.isTracking = false;
	};
	this.resumeTracker = function(){
		this.video.isTracking = true;
	};
	this.isTracking = true;
	this.video = video;
	this.video.eid = eid;
	this.video.view = false;
	this.video.started = false;
	this.video.playing = false;
	this.video.finished= false;
	this.video.played_00 = false;
	this.video.played_25 = false;
	this.video.played_50 = false;
	this.video.played_75 = false;
	this.video.logger = logger;
	this.video.mute = this.video.defaultMuted;
	this.video.addEventListener("play", this.videoHandler, false);
	this.video.addEventListener("pause", this.videoHandler, false);
	this.video.addEventListener("ended", this.videoHandler, false);
	this.video.addEventListener("timeupdate", this.onTimeupdate, false);
	this.video.addEventListener("volumechange", this.onVolumechange, false);
	this.video.addEventListener('fullscreenchange', this.onFullscreenChange, false);
	this.video.addEventListener('webkitfullscreenchange', this.onFullscreenChange, false);
	document.addEventListener('mozfullscreenchange', this.onFullscreenChange, false);
	document.addEventListener('MSFullscreenChange', this.onFullscreenChange, false);
	this.video.pm = function(msg, target) {
		try {
			parent.postMessage(msg, target);
		} catch(e) {}
	}
	try {
		console.log("Video obj:" + video.id + ", id:" + eid + ", registered to logger: " + logger);
	} catch(e) {}
}
InnityVideo.prototype.videoHandler = function(e) {
	if (this.isTracking === false) {
		return;
	}
	if(this.started && e.type == "pause" && this.currentTime < this.duration) {
		this.logger.log(this.eid, "p");
		this.logger.log(this.eid + "_Pause", "c");
		this.logger.log(this.eid + "_Audio", "p");
		this.pm("interaction|" + this.eid + ",p", "*");
		this.pm("interaction|" + this.eid + "_Pause,c", "*");
		this.pm("interaction|" + this.eid + "_Audio,p", "*");
		this.playing = false;
	}
	if(this.started && e.type == "play") {
		this.logger.log(this.eid, "r");
		this.logger.log(this.eid + "_Play", "c");
		this.pm("interaction|" + this.eid + ",r", "*");
		this.pm("interaction|" + this.eid + "_Play,c", "*");
		if(this.volume > 0 && !this.mute) {
			this.logger.log(this.eid + "_Audio", "s");
			this.pm("interaction|" + this.eid + "_Audio,s", "*");
		}
		this.playing = true;
	}
	if(e.type == "play") {
		if(this.finished) {
			this.logger.log(this.eid + "_Replay", "c");
			this.pm("interaction|" + this.eid + "_Replay,c", "*");
			this.finished = false;
		}
	}
	if(e.type == "ended") {
		this.logger.log(this.eid, "f");
		this.pm("interaction|" + this.eid + ",f", "*");
		if(this.volume > 0 && !this.mute) {
			this.logger.log(this.eid + "_Audio", "f");
			this.pm("interaction|" + this.eid + "_Audio,f", "*");
		}
		this.started = false;
		this.playing = false;
		this.finished= true;
		this.played_25 = false;
		this.played_50 = false;
		this.played_75 = false;
		this.pm(InnityHTMLAd.trackingId + "_videoEnded", "*");
		this.pm(InnityHTMLAd.trackingId + "_" + InnityHTMLAd.cb + "_videoEnded", "*");
		this.pm("interaction|" + this.eid + "_100,c", "*");
	}
}
InnityVideo.prototype.onTimeupdate = function() {
	if(this.isTracking === false) {
		return;
	}
	if(this.currentTime >= 0 && !this.played_00) {
		this.played_00 = true;
		this.pm("interaction|" + this.eid + "_00,c", "*");
	}
	if(this.currentTime > 0 && !this.started) {
		if(this.volume > 0 && !this.mute) {
			this.logger.log(this.eid + "_Audio", "s");
			this.pm("interaction|" + this.eid + "_Audio,s", "*");
		}
		this.started = true;
		this.playing = true;
		this.logger.log(this.eid, "s");
		this.pm("interaction|" + this.eid + ",s", "*");
	}
	if(this.currentTime > (this.duration * 0.25) && !this.played_25) {
		this.played_25 = true;
		this.logger.log(this.eid + "_25", "c");
		this.pm("interaction|" + this.eid + "_25,c", "*");
	}
	if(this.currentTime > (this.duration * 0.5) && !this.played_50) {
		this.played_50 = true;
		this.logger.log(this.eid + "_50", "c");
		this.pm("interaction|" + this.eid + "_50,c", "*");
	}
	if(this.currentTime > (this.duration * 0.75) && !this.played_75) {
		this.played_75 = true;
		this.logger.log(this.eid + "_75", "c");
		this.pm("interaction|" + this.eid + "_75,c", "*");
	}
	this.pm(InnityHTMLAd.id + "_current_time|" + Math.ceil(this.currentTime), "*");
	this.pm(InnityHTMLAd.id + "_" + InnityHTMLAd.cb + "_current_time|" + Math.ceil(this.currentTime), "*");
}
InnityVideo.prototype.onVolumechange = function() {
	if(this.muted) {
		this.mute = true;
		this.logger.log(this.eid + "_Mute", "c");
		this.pm("interaction|" + this.eid + "_Mute,c", "*");
		if(this.playing) {
			this.logger.log(this.eid + "_Audio", "p");
			this.pm("interaction|" + this.eid + "_Audio,p", "*");
		}
	}
	if(this.mute && !this.muted && this.volume > 0) {
		this.mute = false;
		this.logger.log(this.eid + "_Unmute", "c");
		this.pm("interaction|" + this.eid + "_Unmute,c", "*");
		if(this.playing) {
			this.logger.log(this.eid + "_Audio", "s");
			this.pm("interaction|" + this.eid + "_Audio,s", "*");
		}
	}
}
InnityVideo.prototype.onFullscreenChange = function() {
	InnityHTMLAd.pm(InnityHTMLAd.id + "_fullscreenChange", "*");
	InnityHTMLAd.pm(InnityHTMLAd.id + "_" + InnityHTMLAd.cb + "_fullscreenChange", "*");
}
var InnityHTMLAd = {
	"id" : "test",
	"host" : "http://",
	"urls" : [],
	"clickTrackings" : [],
	"vids" : [],
	"InnityVideos" : [],
	"dco" : "",
	"init" : function() {
		if(this.initOnLoad) {
			this.InnityAd = new InnityAd(this.trackingId, this.host, {
				"pid" : auth_340348,
				"autostart" : this.autostart,
				"intervalTracking" : InnityHTMLAd.intervalTracking
			});
		}
		var self = this;
		self.isReady = false;
		self.isLoaded = false;
		function _setAdReady() {
			if(!self.isReady) {
				self.setAdReady();
				self.isReady = true;
				try{
					if (typeof InnityHTMLAd.ias != "undefined") {
						InnityHTMLAd.ias.dispatch(
							InnityHTMLAd.isTeaser,
							((InnityHTMLAd.isTeaser) ? InnityHTMLAd.ias.teaserTrackableElement : InnityHTMLAd.ias.fullTrackableElement)
						);
					}
					InnityHTMLAd.moatApi.dispatch(
						InnityHTMLAd.isTeaser,
						true,
						((InnityHTMLAd.isTeaser) ? InnityHTMLAd.moatApi.teaserTrackableElement : InnityHTMLAd.moatApi.fullTrackableElement)
					);
				} catch(e) {}
			}
		}
		function _setAdLoaded() {
			if(!self.isLoaded) {
				self.setAdLoaded();
				self.isLoaded = true;
			}
		}
		try {
			window.addEventListener("DOMContentLoaded", _setAdReady, false);
			window.addEventListener("load", _setAdReady, false);
			window.addEventListener("load", _setAdLoaded, false);
		} catch(e) {}
		window.addEventListener("message", InnityHTMLAd.messageHandler, false);
		window.addEventListener("resize", InnityHTMLAd.resizeHandler, false);
	},
	"track" : function(event) {
		this.InnityAd.log(event, "c");
		this.pm("interaction|" + event + ",c", "*");
		this.pm(this.id + "_" + this.cb + "_track", "*");
	},
	"startTimer" : function(event) {
		this.InnityAd.log(event, "s");
		this.pm("interaction|" + event + ",s", "*");
		this.pm(this.id + "_" + this.cb + "_startTimer", "*");
	},
	"stopTimer" : function(event) {
		this.InnityAd.log(event, "p");
		this.pm("interaction|" + event + ",p", "*");
		this.pm(this.id + "_" + this.cb + "_stopTimer", "*");
	},
	"resumeTimer" : function(event) {
		this.InnityAd.log(event, "r");
		this.pm("interaction|" + event + ",r", "*");
		this.pm(this.id + "_" + this.cb + "_resumeTimer", "*");
	},
	"attachVideo" : function(obj) {
		this.vids.push(obj);
		this.InnityVideo = new InnityVideo("_Video" + this.vids.length, obj, this.InnityAd);
		this.InnityVideos.push(this.InnityVideo);
	},
	"attachVideoCustom" : function(obj, name) {
		this.InnityVideo = new InnityVideo(name, obj, this.InnityAd);
		this.InnityVideos.push(this.InnityVideo);
	},
	"endVideo" : function(event) {
		this.InnityAd.log(event, "f");
		this.pm("interaction|" + event + ",f", "*");
		this.pm(this.id + "_videoEnded", "*");
		this.pm(this.id + "_" + this.cb + "_videoEnded", "*");
	},
	"impact" : function() {
		this.pm(this.id + "_impact", "*");
		this.pm(this.id + "_" + this.cb + "_impact", "*");
	},
	"engage" : function() {
		this.pm(this.id + "_" + this.cb + "_engage", "*");
	},
	"engaged" : function() {
		this.pm(this.id + "_" + this.cb + "_engaged", "*");
	},
	"expand" : function() {
		this.pm(this.id + "_expand", "*");
		this.pm(this.id + "_" + this.cb + "_expand", "*");
	},
	"expanded" : function() {
		if(!this.initOnLoad) {
			this.InnityAd = new InnityAd(this.trackingId, this.host, {
				"pid" : auth_340348,
				"autostart" : true,
				"intervalTracking" : InnityHTMLAd.intervalTracking
			});
		}
		this.pm(this.id + "_expanded", "*");
		this.pm(this.id + "_" + this.cb + "_expanded", "*");
		if(InnityHTMLAd.adFormat == 57){ //Mobile Pull Up
			InnityHTMLAd.moatApi.dispatch(
				InnityHTMLAd.isTeaser,
				false,
				InnityHTMLAd.moatApi.fullTrackableElement
			);
		}
	},
	"subExpand" : function() {
		this.pm(this.id + "_subExpand", "*");
		this.pm(this.id + "_" + this.cb + "_subExpand", "*");
	},
	"subExpanded" : function() {
		this.pm(this.id + "_subExpanded", "*");
		this.pm(this.id + "_" + this.cb + "_subExpanded", "*");
	},
	"subShrink" : function() {
		this.pm(this.id + "_subShrink", "*");
		this.pm(this.id + "_" + this.cb + "_subShrink", "*");
	},
	"subShrinked" : function() {
		this.pm(this.id + "_subShrinked", "*");
		this.pm(this.id + "_" + this.cb + "_subShrinked", "*");
	},
	"shrink" : function() {
		this.pm(this.id + "_shrink", "*");
		this.pm(this.id + "_" + this.cb + "_shrink", "*");
	},
	"shrinked" : function() {
		this.pm(this.id + "_shrinked", "*");
		this.pm(this.id + "_" + this.cb + "_shrinked", "*");
	},
	"clearRM" : function() {
		this.InnityAd.clear();
	},
	"close" : function() {
		this.pm(this.id + "_close", "*");
		this.pm(this.id + "_" + this.cb + "_close", "*");
	},
	"closed" : function() {
		this.pm(this.id + "_closed", "*");
		this.pm(this.id + "_" + this.cb + "_closed", "*");
	},
	"pauseTracker" : function() {
		for (let i = 0; i < this.InnityVideos.length; i++) {
			this.InnityVideos[i].pauseTracker();
		}
	},
	"resumeTracker" : function() {
		for (let i = 0; i < this.InnityVideos.length; i++) {
			this.InnityVideos[i].resumeTracker();
		}
	},
	"click" : function(options, newWindow) {
		newWindow	= (typeof newWindow == "undefined" || typeof newWindow == "null")?true:newWindow;
		if(typeof options == "object") {
			if(typeof options.clickTAG != "undefined" && typeof this.urls[options.clickTAG] != "undefined") {
				var lnk = this.dco != "" ? this.urls[options.clickTAG] + "&type=" + this.dco : this.urls[options.clickTAG];
			} else if(typeof options.url == "string") {
				var lnk = this.cBeacon + encodeURIComponent(options.url);
			}
		}else if(typeof options == "string") {
			if(typeof this.urls[options] != "undefined") {
				var lnk = this.dco != "" ? this.urls[options] + "&type=" + this.dco : this.urls[options];
			}
		}
		if(typeof lnk != "undefined" && lnk != "") {
			if (newWindow) {
				window.open(lnk);
			} else {
				top.window.location = lnk;
			}
			this.pm(this.id + "_click", "*");
			this.pm(this.id + "_" + this.cb + "_click", "*");
			if (typeof this.clickTrackings != "undefined" && this.clickTrackings.length > 0) {
				this.clickTrackings.forEach(function(url){
					(new Image()).src = url;
				});
			}
		} else {
			this.trace(options);
		}
    
	},
	"resize" : function(width, height){
		InnityHTMLAd.pm(InnityHTMLAd.id + "_resized["+ width + "x" + height +"]", "*");
		InnityHTMLAd.pm(InnityHTMLAd.id + "_" + InnityHTMLAd.cb + "_resized["+ width + "x" + height +"]", "*");
	},
	"setAdReady" : function() {
		this.pm(this.id + "_adReady", "*");
		this.pm(this.id + "_" + this.cb + "_adReady", "*");
	},
	"setAdLoaded" : function() {
		this.pm(this.id + "_adLoaded", "*");
		this.pm(this.id + "_" + this.cb + "_adLoaded", "*");
	},
	"setDCO" : function(dco) {
		this.dco = dco;
		var data = this.host + "/dco/?c=" + this.id.split("c")[1] + "&d=" + dco + "&cb=" + this.cb;
		this.dispatch(data);
	},
	"setClickTAG" : function() {
		InnityHTMLAd.cBeacon = InnityHTMLAd.trackingDomain + "/click/?campaignid=47486&adid=340349&zoneid=" + InnityHTMLAd.zoneid + "&pubid=" + InnityHTMLAd.pubid + "&cb=" + InnityHTMLAd.cb + "&ex=" + innity_exclk + "&pcu=" + InnityHTMLAd.pcu + "&auth=" + InnityHTMLAd.auth + "&ref=" + InnityHTMLAd.ref + "&url=";
		InnityHTMLAd.urls["clickTAG"] = InnityHTMLAd.trackingDomain + "/click/?campaignid=47486&adid=340349&zoneid=" + InnityHTMLAd.zoneid + "&pubid=" + InnityHTMLAd.pubid + "&cb=" + InnityHTMLAd.cb + "&ex=" + innity_exclk + "&pcu=" + InnityHTMLAd.pcu + "&auth=" + InnityHTMLAd.auth + "&ref=" + InnityHTMLAd.ref + "&url=https%3A%2F%2Fwww.tokopedia.com%2Fabc-official%2Fetalase%2Fbumbu-kacang-serbaguna";
InnityHTMLAd.urls["clickTAG1"] = InnityHTMLAd.trackingDomain + "/click/?campaignid=47486&adid=340349&zoneid=" + InnityHTMLAd.zoneid + "&pubid=" + InnityHTMLAd.pubid + "&cb=" + InnityHTMLAd.cb + "&ex=" + innity_exclk + "&pcu=" + InnityHTMLAd.pcu + "&auth=" + InnityHTMLAd.auth + "&ref=" + InnityHTMLAd.ref + "&url=https%3A%2F%2Fwww.tokopedia.com%2Fabc-official%2Fetalase%2Fbumbu-kacang-serbaguna%2F%3Fi%3D1";
InnityHTMLAd.urls["clickTAG2"] = InnityHTMLAd.trackingDomain + "/click/?campaignid=47486&adid=340349&zoneid=" + InnityHTMLAd.zoneid + "&pubid=" + InnityHTMLAd.pubid + "&cb=" + InnityHTMLAd.cb + "&ex=" + innity_exclk + "&pcu=" + InnityHTMLAd.pcu + "&auth=" + InnityHTMLAd.auth + "&ref=" + InnityHTMLAd.ref + "&url=https%3A%2F%2Fwww.tokopedia.com%2Fabc-official%2Fetalase%2Fbumbu-kacang-serbaguna%2F%3Fi%3D2";
InnityHTMLAd.urls["clickTAG3"] = InnityHTMLAd.trackingDomain + "/click/?campaignid=47486&adid=340349&zoneid=" + InnityHTMLAd.zoneid + "&pubid=" + InnityHTMLAd.pubid + "&cb=" + InnityHTMLAd.cb + "&ex=" + innity_exclk + "&pcu=" + InnityHTMLAd.pcu + "&auth=" + InnityHTMLAd.auth + "&ref=" + InnityHTMLAd.ref + "&url=https%3A%2F%2Fwww.tokopedia.com%2Fabc-official%2Fetalase%2Fbumbu-kacang-serbaguna%2F%3Fi%3D3";
	},
	"getParam" : function(param) {
		return decodeURIComponent((new RegExp("[?|&]" + param + "=" + "([^&;]+?)(&|#|;|$)").exec(self.location.href)||[,""])[1].replace(/\+/g, "%20"))||"";
	},
	"dispatch" : function(data) {
		if(data instanceof Array){
			for (var i = 0; i < data.length; i++) {
				(new Image()).src = data[i];
			}
		}else{
			(new Image()).src = data;
		}
	},
	"trace" : function(msg) {
		try {
			console.log(msg);
		} catch(e) {}
	},
	"pm" : function(msg, target) {
		try {
			top.postMessage(msg, target);
		} catch(e) {
			try {
				parent.postMessage(msg, target);
			} catch(e) {}
		}
	},
	"messageHandler" : function(event) {
		if(event.data == "c340348_expandAd") {
			if(!InnityHTMLAd.initOnLoad) {
				InnityHTMLAd.InnityAd = new InnityAd(InnityHTMLAd.trackingId, InnityHTMLAd.host, {
					"pid" : auth_340348,
					"autostart" : true,
					"intervalTracking" : InnityHTMLAd.intervalTracking
				});
			}
			if(!InnityHTMLAd.autostart) {
				InnityHTMLAd.startTimer("_ad_display");
			}
		}else if(event.data == "c340348_closeAd") {
			// Clear ad body to mute all audio
			document.getElementsByTagName("body")[0].innerHTML = "";
			setTimeout(function(){
				// Clear Rich Media queue
				InnityHTMLAd.clearRM();
			}, 50);
		}else if(event.data.owner == 'Innity' && (event.data.action == 'fullad_closed' || event.data.action == 'shrink-banner')){
			try{
				InnityHTMLAd.moatApi.dispatch(
					InnityHTMLAd.isTeaser,
					false,
					InnityHTMLAd.moatApi.teaserTrackableElement
				);
			} catch(e) {}
		}else if(event.data.owner == 'Innity' && event.data.action == 'resize'){
			try{
				InnityHTMLAd.moatApi.dispatch(
					false,
					true,
					InnityHTMLAd.moatApi.fullTrackableElement
				);
			} catch(e) {}
		} else if(event.data.owner == 'Innity' && (event.data.action == 'update_innity_pcu')){
			pcu_340348   = event.data.data.innity_pcu;
			InnityHTMLAd.pcu    = pcu_340348;
			InnityHTMLAd.setClickTAG();
		}
	},
	"resizeHandler" : function(event) {
		height = Math.max(document.body.scrollHeight,document.body.offsetHeight);
		width = Math.max(document.body.scrollWidth,document.body.offsetWidth);
		InnityHTMLAd.pm(InnityHTMLAd.id + "_resized["+ width + "x" + height +"]", "*");
		InnityHTMLAd.pm(InnityHTMLAd.id + "_" + InnityHTMLAd.cb + "_resized["+ width + "x" + height +"]", "*");
	}
}
innity_protocol = "https:";
innity_prem = "https://avn.innity.com";
innity_adnw = "https://avp.innity.com";
innity_exclk = (typeof innity_exclk == "undefined") ? Math.floor((new Date().getTime() + 86400000) / 1000) : innity_exclk;
cb_340348 = (typeof cb_340348 == "undefined")?InnityHTMLAd.getParam("cb"):cb_340348;
auth_340348 = (typeof auth_340348 == "undefined")?InnityHTMLAd.getParam("auth"):auth_340348;
zone_340348 = (typeof zone_340348 == "undefined")?InnityHTMLAd.getParam("zone"):zone_340348;
pub_340348 = (typeof pub_340348 == "undefined")?InnityHTMLAd.getParam("pub"):pub_340348;
ref_340348 = (typeof ref_340348 == "undefined")?InnityHTMLAd.getParam("ref"):ref_340348;
idfa_340348 = (typeof idfa_340348 == "undefined")?InnityHTMLAd.getParam("idfa"):idfa_340348;
pcu_340348 = encodeURIComponent((typeof pcu_340348 == "undefined")?InnityHTMLAd.getParam("pcu"):pcu_340348);
country_340348 = encodeURIComponent((typeof country_340348 == "undefined")?InnityHTMLAd.getParam("country"):country_340348);

InnityHTMLAd.id = "c340348";
InnityHTMLAd.trackingId = "c340349";
InnityHTMLAd.isTeaser = true;
InnityHTMLAd.cb = cb_340348;
InnityHTMLAd.auth = auth_340348;
InnityHTMLAd.zoneid = zone_340348;
InnityHTMLAd.pubid = pub_340348; 
InnityHTMLAd.ref = ref_340348;
InnityHTMLAd.idfa = idfa_340348;
InnityHTMLAd.pcu = pcu_340348;
InnityHTMLAd.campaignId = "47486";
InnityHTMLAd.campaignCountry = country_340348;
InnityHTMLAd.adid = "340348";
InnityHTMLAd.adTrackingId = "340349";
InnityHTMLAd.inclid = InnityHTMLAd.auth + ".340349." + InnityHTMLAd.zoneid;
InnityHTMLAd.trackingDomain = innity_adnw;
InnityHTMLAd.host = "https://cast.innity.com";
InnityHTMLAd.autostart = false;
InnityHTMLAd.intervalTracking = true;
InnityHTMLAd.initOnLoad= true;
InnityHTMLAd.isHeavyAd = false;
InnityHTMLAd.adFormat = 84;
InnityHTMLAd.init();
InnityHTMLAd.setClickTAG();



//MOAT API
InnityHTMLAd.moatApi = new moatApi({
	runMoatApi: 'false',
	jsUrl: '',
	creativeType: ''
});
InnityHTMLAd.moatApi.teaserTrackableElement = '{TEASER_MOAT_TRACKABLE_ELEMENT}';
InnityHTMLAd.moatApi.fullTrackableElement = '';
function moatApi(settings){
	var moatTrackableTeaser = {};
	var moatTrackableFull = {};
	var moatSettings = mergeObject({
		runMoatApi: 'false',
		jsUrl: '',
		creativeType: 'banner',
		version: '1',
		adProxyElement: ''
	}, settings, 'moatSettings');

	this.dispatch = dispatch;
	this.init = init;
	function init(isTeaser, trackableElement){
		temp_research_tag = document.createElement('script');
		temp_research_tag.src = moatSettings.jsUrl;
		current_moatTrackable = temp_research_tag_div = document.createElement('div');
		temp_research_tag_div.classList.add('moat_trackable');
		trackableElement.parentNode.insertBefore(temp_research_tag, trackableElement.nextSibling);
		temp_research_tag.parentNode.insertBefore(temp_research_tag_div, temp_research_tag.nextSibling);
		current_moatTrackable.moatObject = {
			adElement: null,
			adLoaded: true,
			creativeType: moatSettings.creativeType,
			version: moatSettings.version
		};
		current_moatTrackable.addEventListener('adLoaded', function(){	
			console.log('moatTrackable-adLoaded', current_moatTrackable.moatObject);
		});
		if(isTeaser){
			moatTrackableTeaser = current_moatTrackable;
		}else{
			moatTrackableFull = current_moatTrackable;
		}
	};
	function dispatch(isTeaser, runInit, trackableElementId){
		if(trackableElementId != ''){
			if(moatSettings.runMoatApi == 'true'){
				var interval = setInterval(function(){
					trackableElement = document.querySelector(trackableElementId);
					if(trackableElement != null){
						clearInterval(interval);
						elementReady(isTeaser, runInit, trackableElement);
					}
				}, 10);
			}
			setTimeout(function(){
				clearInterval(interval);
			}, 100)
			function elementReady(isTeaser, runInit, trackableElement){
				console.log('Innity MOAT trackable:', trackableElement);
				if(runInit){
					init(isTeaser, trackableElement);
				}
				if(isTeaser){
					current_moatTrackable = moatTrackableTeaser;
				}else{
					current_moatTrackable = moatTrackableFull;
				}
				current_moatTrackable.moatObject.adElement = trackableElement;
				current_moatTrackable.dispatchEvent(new Event("adLoaded", {bubbles:true, cancelable:false}));
			}
		}
	};
	function mergeObject(defaultObj, overrideObject, reference) {
		for (var attributeKey in overrideObject) {
			if (defaultObj.hasOwnProperty(attributeKey)) {
				defaultObj[attributeKey] = overrideObject[attributeKey];
			}
			else {
				console.warn('Key ['+attributeKey+'] not found in object merging process.', reference);
			}
		}

		return defaultObj;
	};
};

try {
	// callback that will handle intervention reports
	function sendReports(reports) {
		for (let report of reports) {
			InnityHTMLAd.pm("Advenue Intervention detection", "*");
			InnityHTMLAd.pm(InnityHTMLAd.id + "_" + InnityHTMLAd.cb + "_heavy_ad_intervention", "*");
			// Log the `report` json via your own reporting process
			(new Image()).src = "https://pixel.innity-asia.com/heavy_ad/?adid=340348&auth=" + InnityHTMLAd.auth + "&zone=" + InnityHTMLAd.zoneid + "&ref=" + InnityHTMLAd.ref + "&msg="+encodeURIComponent(report.body.message);
			InnityHTMLAd.isHeavyAd = true;
		}
	}
	
	//Google Chrome Heavy Ad Interventions
	const observer = new ReportingObserver((reports, observer) => {
		sendReports(reports);
	}, {types: ['intervention'], buffered: true});
	observer.observe();

	window.addEventListener('pagehide', (event) => {
		// pull all pending reports from the queue
		let reports = observer.takeRecords();
		//sendReports(reports);
	});
} catch(e) {}