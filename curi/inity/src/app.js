var spinAd;

var firstTime=true;



window.addEventListener('load', initCreative, false);



function initCreative() {

		setTimeout(function(){

			for (var i = 0; i < materials.length; i++) {

				generateMaterial(materials[i], document.getElementById('invitation-content'));

			}

			imageLoadDelay();

		}, 100);	

		

    spinAd = new Spin('invitation-content', {	

				sector: 4,

				autoSpinDirection: 'counter-clockwise',

        		sectorClickedCallback: clickTagCallBack,

				sectorChangedCallback: doChangesWhenSpin,

				autoSpinEnded: autoSpinEndedCallBack

    });

    spinAd.startAutoAnimation();

    

    // Append Animation Timeline

    appendTimeline(slideAnimation1);

    appendTimeline(slideAnimation2);

    appendTimeline(slideAnimation3);

    appendTimeline(slideAnimation4);

};



function autoSpinEndedCallBack() {

	doChangesWhenSpin(1);

}



function slideAnimation1() {

	this.getFrame = fn;

	var frame = new TimelineMax({paused:true});

    function fn() { return frame};

    

	frame.fromTo('#sector1', 0.3, {opacity:0}, {opacity:1}, '-=0.5');

	frame.fromTo('#top', 0.5, {scale:0, opacity:0}, {scale:1, opacity:1, ease:Back.easeOut}, '-=0.5');

	

};



function slideAnimation2() {

	this.getFrame = fn;

	var frame = new TimelineMax({paused:true});

    function fn() { return frame};

    

    frame.fromTo('#sector2', 0.3, {opacity:0}, {opacity:1}, '-=0.5');

	frame.fromTo('#right', 0.5, {scale:0, opacity:0}, {scale:1, opacity:1, ease:Back.easeOut}, '-=0.5');

	

};



function slideAnimation3() {

	this.getFrame = fn;

	var frame = new TimelineMax({paused:true});

    function fn() { return frame};

    

    frame.fromTo('#sector3', 0.3, {opacity:0}, {opacity:1}, '-=0.5');

	frame.fromTo('#bottom', 0.5, {scale:0, opacity:0}, {scale:1, opacity:1, ease:Back.easeOut}, '-=0.5');



};



function slideAnimation4() {

	this.getFrame = fn;

	var frame = new TimelineMax({paused:true});

    function fn() { return frame};

    

    frame.fromTo('#sector4', 0.3, {opacity:0}, {opacity:1}, '-=0.5');

	frame.fromTo('#left', 0.5, {scale:0, opacity:0}, {scale:1, opacity:1, ease:Back.easeOut}, '-=0.5');

    



};



function clickTagCallBack(sector) {

	switch(sector) {

		case 1:

			triggerClickTag('clickTAG');

			break;

		case 2:

			triggerClickTag('clickTAG1');

			break;

		case 3:

			triggerClickTag('clickTAG2');

			break;

		case 4:

			triggerClickTag('clickTAG3');

			break;

	}

};



function doChangesWhenSpin(sector){

	switch(sector) {

		case 1:

			startTween(0);

            stopTween(1);

            stopTween(2);

            stopTween(3);

		break;

		case 2:

			stopTween(0);

            startTween(1);

            stopTween(2);

            stopTween(3);

		break;

		case 3:

			stopTween(0);

            stopTween(1);

            startTween(2);

            stopTween(3);

		break;

		case 4:

			stopTween(0);

            stopTween(1);

            stopTween(2);

            startTween(3);

		break;

	}

};





// ====== Timeline Template ======



var bannerTweens = [];

function appendTimeline(fn) {

	if(typeof fn !== 'function') { return; }

	var tl = new fn();

	bannerTweens.push(tl);

};

function startTween(t) {

    var total = bannerTweens.length - 1;

    if(total < t) { return; }

    if(typeof bannerTweens[t].getFrame().restart !== 'function') { return; }

    bannerTweens[t].getFrame().seek(0);

    bannerTweens[t].getFrame().play();

};

function stopTween(t) {

    var total = bannerTweens.length - 1;

    if(total < t) { return; }

    if(typeof bannerTweens[t].getFrame().pause !== 'function') { return; }

    bannerTweens[t].getFrame().pause();

    bannerTweens[t].getFrame().seek(0);

};