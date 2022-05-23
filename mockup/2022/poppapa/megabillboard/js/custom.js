var host = window.location.host;
var expr = 'local';
var expr2 = 'dev';

// Debug Init
var gaTrackDebug = false;
var scrollDebug = false;
var scrollPageDebug = false;

var isLocal = (host.indexOf(expr) !== -1 || host.indexOf(expr2) !== -1);

var socialPopup = function(url) {
  window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=400,height=400");
  return false;
};

// Function to track a virtual page view
// var gaTrack = function(path, title) {
//   if (isLocal && gaTrackDebug) {
//     console.log('ga-track: ' + path + ' #INIT');
//   }
//   if (path === "" || path === null || isLocal || typeof ga !== "function") {
//     return false;
//   }
//   if (title !== "") {
//     ga('set', { page: path, title: title });
//     ga('send', 'pageview');
//   } else {
//     // ga('send', 'pageview', location.pathname);
//     ga('send', 'pageview', path);
//   }
//   if (isLocal && gaTrackDebug) {
//     console.log('ga-track: ' + path + ' #DONE');
//   }
//   return true;
// };

var reCalcSearchWrapHeight = function() {
  let searchDisplay = $('.search-container').css('display');
  let searchContainerHeight = $('.search-container').height();
  var windowH = $(window).height();
  if(searchDisplay === 'block'){
    windowH = searchContainerHeight;
  }
  var logoH = $('.search-container .logo').length ? $('.search-container .logo').outerHeight() : 0;
  var searchH = $('.search-container .search-input').length ? $('.search-container .search-input').outerHeight() : 0;
  var recentTagH = $('.search-container .recent-tags').length ? $('.search-container .recent-tags').outerHeight() : 0;
  var addtLogoMargin = 46;
  var addtRecentTagsMargin = 14 + 5;
  var addtMargin = 10;
  if ($('#popmama-desktop').length) {
    addtLogoMargin = 60;
    addtRecentTagsMargin = 14 + 10;
    addtMargin = 31;
  }
  $('.search-container .grid-wrapper .grid-blog').height(windowH - (logoH + addtLogoMargin) - searchH - (recentTagH + addtRecentTagsMargin) - (addtMargin));
};

var reCalcSearchCommunityWrapHeight = function() {
  var windowH = $(window).height();
  var logoH = $('.search-container-community .logo').length ? $('.search-container-community .logo').outerHeight() : 0;
  var searchH = $('.search-container-community .search-input').length ? $('.search-container-community .search-input').outerHeight() : 0;
  var recentTagH = $('.search-container-community .recent-topic-search').is(':visible').length ? $('.search-container-community .recent-topic-search').is(':visible').outerHeight() : 0;
  var addtLogoMargin = 45;
  var addtSearchMargin = 20;
  // var addtRecentTagsMargin = 14 + 5;
  var addtRecentTagsMargin = 0;
  var addtMargin = 70;
  if ($('#popmama-desktop').length) {
    addtLogoMargin = 60;
    addtSearchMargin = 25;
    // addtRecentTagsMargin = 14 + 40;
    addtMargin = 100;
  }
  $('.search-container-community .grid-wrapper .grid-blog').height(windowH - (logoH + addtLogoMargin) - (searchH + addtSearchMargin) - (recentTagH + addtRecentTagsMargin) - (addtMargin));
};

var reSyncDesign = function() {
  // console.log('recalc!');
  var windowHeight = $(window).height();

  var $header, $mainContent, $footer;

  if ($('#popmama-mobile').length) {
    $header = $('.navbar');
    $mainContent = $('.main-container');
  }
  if ($('#popmama-desktop').length) {
    $header = $('header.no-shrink');

    if ($('.section__dashboard').length !== 0)
      $mainContent = $('.section__dashboard');
    else
      $mainContent = $('body > .container');
  }
  $footer = $('footer');

  var headerHeight = 0;
  var headerMargin = 0;
  if ($header.length) {
    headerHeight = $header.outerHeight();
    headerMargin = parseInt($header.css("marginBottom").replace('px', ''));
  }

  var mainContentHeight = $mainContent.outerHeight();

  var footerHeight = 0;
  var footerMargin = 0;

  if ($('#popmama-desktop').length && $footer.length) {
    $footer.removeAttr('style');
    footerHeight = $footer.outerHeight();
    footerMargin = parseInt($footer.css("marginTop").replace('px', ''));
  }

  if ($(window).height() > ((headerHeight + headerMargin) + mainContentHeight + (footerHeight + footerMargin))) {
    $footer.css({ position: 'fixed', zIndex: 9, bottom: 0, width: '100%' });
  }

  reCalcSearchWrapHeight();
  reCalcSearchCommunityWrapHeight();
};

// START CUSTOM ANALYTICS
var callAnalytics = function(path, queryString) {
  var gaPage = path;
  var comscorePage = path.replace(/\//g, '-');

  if (queryString) {
      gaPage = gaPage + '?' + queryString;
      comscorePage = comscorePage + '&' + queryString;
  }

  // comscore
  (function() {
      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
      s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
      el.parentNode.insertBefore(s, el);
  })();
  _comscore.push({ c1: "2", c2: "20678181" });

  // alexa
  _atrk_opts = { atrk_acct:"/C69m1agbiF2mh", domain:"popmama.com",dynamic: true};
  (function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://d31qbv1cthcecs.cloudfront.net/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();

  $.get(hostname + '/pv.xml?page=' + comscorePage);
};
// END CUSTOM ANALYTICS

$(document).ready(function() {

  /* Show more button */
  if (typeof killAjax  === undefined) {
    var killAjax = false;
  }

  $(window).on('load', function() {
    reSyncDesign();
  });

  $(window).on('resize', function() {
    reSyncDesign();
  });

  var submitted = false;
  var btnVal = '';
  var $btnSubmit = false;
  $(document).on('submit', 'form', function(e) {
    var $btn = $(document.activeElement);

    if(submitted === false) {
      if ($btn.length && $(this).has($btn) && $btn.is('button[type="submit"]')) {
        $btnSubmit = $btn;
        btnVal = $btnSubmit.html();
        $btnSubmit.html('Loading...');

      } else if($btn.length && $(this).has($btn) && $btn.is('input[type="submit"]')) {
        $btnSubmit = $btn;
        btnVal = $btnSubmit.val();
        $btnSubmit.val('Loading...');
      }

      if ($btnSubmit !== false)
      {
        $btnSubmit.prop('disabled', true);
        submitted = true;
        $(this).submit();
      }
    }

    /*var $buttonSubmit = $(this).find('button[type=submit]').first();
    var $inputSubmit = $(this).find('input[type=submit]').first();
    if (submitted === false) {
      if ($buttonSubmit.length) {
        $btnSubmit = $buttonSubmit;
        btnVal = $btnSubmit.html();
        $btnSubmit.html('Loading...');
      } else {
        $btnSubmit = $inputSubmit;
        btnVal = $btnSubmit.val();
        $btnSubmit.val('Loading...');
      }
      $btnSubmit.prop('disabled', true);
      submitted = true;
      $(this).submit();
    }
    */
  });

  $(document).ajaxSuccess(function() {
    if ($btnSubmit.length) {
      $btnSubmit.prop('disabled', false);
      if($btnSubmit.is('input')) {
        $btnSubmit.val(btnVal);
      } else if($btnSubmit.is('button')) {
        $btnSubmit.html(btnVal);
      }
      submitted = false;
    }
  });

  $(document).ajaxComplete(function() {
    reSyncDesign();

    if (typeof initTimeago === "function") {
      initTimeago();
    }
    if (typeof initTimeagoid === "function") {
      initTimeagoid();
    }
    if (typeof popoverCall === "function") {
      popoverCall();
    }
    if (typeof initSelect === "function") {
      initSelect();
    }
    if (typeof initLazyLoad === "function") {
      initLazyLoad();
    }
  });

  $(document).ajaxError(function() {
    if ($btnSubmit.length) {
      $btnSubmit.prop('disabled', false);
      if($btnSubmit.is('input')) {
        $btnSubmit.val(btnVal);
      } else if($btnSubmit.is('button')) {
        $btnSubmit.html(btnVal);
      }
      submitted = false;
    }
  });

  $(document).on('click', '.tags-more', function() {
    var target = $(this).attr('data-target');
    $(target).toggle();
    $(this).remove();
    reCalcSearchWrapHeight();
  });

  $('.input-group.date').on('click', function() {
    $(this).children('[data-provide=datepicker]').focus();
  });

});

// Youtube Lazy Load
(function() {

  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {

    // var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

    // var image = new Image();
    // image.src = source;
    // image.addEventListener("load", function() {
    //   youtube[i].appendChild(image);
    // }(i));

    youtube[i].addEventListener("click", function() {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };

})();
