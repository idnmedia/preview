/* BEGIN INIT VARS */
var path, queryString;

if (killAjax === undefined) {
  var killAjax = false;
}
if (page === undefined) {
  var page = 1;
}
if (scrollMoreBlog === undefined) {
  var scrollMoreBlog = 0;
}
if (scrollMoreBlogPage === undefined) {
  var scrollMoreBlogPage = 1;
}
if (scrollSearchMoreGroups === undefined) {
  var scrollSearchMoreGroups = 0;
}
if (scrollSearchMorePageGroups === undefined) {
  var scrollSearchMorePageGroups = 1;
}
if (scrollSearchMoreBirthClubs === undefined) {
  var scrollSearchMoreBirthClubs = 0;
}
if (scrollSearchMorePageBirthClubs === undefined) {
  var scrollSearchMorePageBirthClubs = 1;
}

if (scrollSearchMoreTopics === undefined) {
  var scrollSearchMoreTopics = 0;
}
if (scrollSearchMorePageTopics === undefined) {
  var scrollSearchMorePageTopics = 1;
}

if (scrollSearchMoreUsers === undefined) {
  var scrollSearchMoreUsers = 0;
}
if (scrollSearchMorePageUsers === undefined) {
  var scrollSearchMorePageUsers = 1;
}

if (scrollSearchMorePosts === undefined) {
  var scrollSearchMorePosts = 0;
}
if (scrollSearchMorePagePosts === undefined) {
  var scrollSearchMorePagePosts = 1;
}
/* END INIT VARS */

/* BEGIN FUNCTION */
var searchByKeyword = function() {
  var $inp = $("#search-field");
  var $target = $(".search-container .grid-blog");

  if ($inp.val().trim() == "") {
    $inp.prop('disabled', false).val('');
    alert('Please type a keyword..');
    return false;
  }

  reCalcSearchWrapHeight();

  if (killAjax === false) {
    killAjax = true;
    $('.search-container .grid-wrapper').removeClass('hide');
    $target.html('<br><div class="text-center">Searching ...</div>');
    $inp.prop('disabled', true);
    $.ajax({
      type: "GET",
      data: { "q": $inp.val().trim() },
      url: searchUrl,
      success: function(res) {
        var resJson = $.parseJSON(res);
        if (resJson.success == false || resJson.result == "") {
          // $target.html('<br><div class="alert alert-warning text-center lead"><strong>Ooops!</strong><br>We couldn\'t find any results for <strong>' + $inp.val().trim() + '</strong> keywords.</div>');
          // $target.append($target.next('.not-found').clone().removeClass('hide'));
          $target.next('.not-found').find('.keyword').html(resJson.q);
          $target.html($target.next('.not-found').clone().removeClass('hide'));
        } else {
          $target.html(resJson.result);
        }
        killAjax = false;
        scrollSearchMore = 0;
        scrollSearchMorePage = 1;
        $inp.prop('disabled', false);
        googleAfs();
      }
    });
  }
};

var searchByKeywordCommunity = function() {
  var $inp = $("#search-field-community");
  var $target = $(".search-container-community .grid-blog");

  scrollSearchMoreGroups = 0;
  scrollSearchMorePageGroups = 1;
  scrollSearchMoreBirthClubs = 0;
  scrollSearchMorePageBirthClubs = 1;
  scrollSearchMoreTopics = 0;
  scrollSearchMorePageTopics = 1;
  scrollSearchMoreUsers = 0;
  scrollSearchMorePageUsers = 1;
  scrollSearchMorePosts = 0;
  scrollSearchMorePagePosts = 1;
  scrollLoadMoreHomepage = 0;
  scrollLoadMorePageHomepage = 0;


  if ($inp.val().trim() == "") {
    $inp.prop('disabled', false).val('');
    alert('Please type a keyword..');
    return false;
  }

  reCalcSearchCommunityWrapHeight();

  if (killAjaxCommunity === false) {
    killAjaxCommunity = true;
    $('.search-container-community .grid-wrapper').removeClass('hide');
    $target.html('<br><div class="text-center">Searching ...</div>');
    $(".recent-topic-search").addClass("hide");
    $(".icon-search-page-community").addClass("hide");
    $inp.prop('disabled', true);
    $.ajax({
      type: "GET",
      data: { "q": $inp.val().trim(), "type": "groups" },
      url: searchUrl,
      success: function(res) {
        var resJson = $.parseJSON(res);
        if (resJson.success == false || resJson.result == "") {
          // $target.html('<br><div class="alert alert-warning text-center lead"><strong>Ooops!</strong><br>We couldn\'t find any results for <strong>' + $inp.val().trim() + '</strong> keywords.</div>');
          // $target.append($target.next('.not-found').clone().removeClass('hide'));
          $('#result-group').next('.not-found').find('.keyword').html(resJson.q);
          $('#result-group').html($('#result-group').next('.not-found').clone().removeClass('hide'));
          $(".recent-topic-search").addClass("hide");
          $(".recent-topic-search").addClass("hide");
          $(".icon-search-page-community").addClass("hide");
        } else {
          //$target.html(resJson.result);
          $('#result-group').html(resJson.result);
        }
        killAjaxCommunity = false;
        scrollSearchMore = 0;
        scrollSearchMorePage = 1;
        $inp.prop('disabled', false);
      }
    });
    /*$.ajax({
      type: "GET",
      data: { "q": $inp.val().trim(), "type": "birth-clubs" },
      url: searchUrl,
      success: function(res) {
        var resJson = $.parseJSON(res);
        if (resJson.success == false || resJson.result == "") {
          // $target.html('<br><div class="alert alert-warning text-center lead"><strong>Ooops!</strong><br>We couldn\'t find any results for <strong>' + $inp.val().trim() + '</strong> keywords.</div>');
          // $target.append($target.next('.not-found').clone().removeClass('hide'));
          //$target.next('.not-found').find('.keyword').html($inp.val().trim());
          //$target.html($target.next('.not-found').clone().removeClass('hide'));
          $('#result-birth-clubs').next('.not-found').find('.keyword').html($inp.val().trim());
          $('#result-birth-clubs').html($('#result-birth-clubs').next('.not-found').clone().removeClass('hide'));
          $(".recent-topic-search").addClass("hide");
          $(".icon-search-page-community").addClass("hide");
        } else {
          //$target.html(resJson.result);
          $('#result-birth-clubs').html(resJson.result);
        }
        killAjaxCommunity = false;
        scrollSearchMore = 0;
        scrollSearchMorePage = 1;
        $inp.prop('disabled', false);
      }
    });
    */
    $.ajax({
      type: "GET",
      data: { "q": $inp.val().trim(), "type": "users" },
      url: searchUrl,
      success: function(res) {
        var resJson = $.parseJSON(res);
        if (resJson.success == false || resJson.result == "") {
          // $target.html('<br><div class="alert alert-warning text-center lead"><strong>Ooops!</strong><br>We couldn\'t find any results for <strong>' + $inp.val().trim() + '</strong> keywords.</div>');
          // $target.append($target.next('.not-found').clone().removeClass('hide'));
          //$target.next('.not-found').find('.keyword').html($inp.val().trim());
          //$target.html($target.next('.not-found').clone().removeClass('hide'));
          $('#result-users').next('.not-found').find('.keyword').html(resJson.q);
          $('#result-users').html($('#result-users').next('.not-found').clone().removeClass('hide'));
          $(".recent-topic-search").addClass("hide");
          $(".icon-search-page-community").addClass("hide");
        } else {
          //$target.html(resJson.result);
          $('#result-users').html(resJson.result);
        }
        killAjaxCommunity = false;
        scrollSearchMore = 0;
        scrollSearchMorePage = 1;
        $inp.prop('disabled', false);
      }
    });

    $.ajax({
      type: "GET",
      data: { "q": $inp.val().trim(), "type": "threads" },
      url: searchUrl,
      success: function(res) {
        var resJson = $.parseJSON(res);
        if (resJson.success == false || resJson.result == "") {
          // $target.html('<br><div class="alert alert-warning text-center lead"><strong>Ooops!</strong><br>We couldn\'t find any results for <strong>' + $inp.val().trim() + '</strong> keywords.</div>');
          // $target.append($target.next('.not-found').clone().removeClass('hide'));
          //$target.next('.not-found').find('.keyword').html($inp.val().trim());
          //$target.html($target.next('.not-found').clone().removeClass('hide'));
          $('#result-threads').next('.not-found').find('.keyword').html(resJson.q);
          $('#result-threads').html($('#result-threads').next('.not-found').clone().removeClass('hide'));
          $(".recent-topic-search").addClass("hide");
          $(".icon-search-page-community").addClass("hide");
        } else {
          //$target.html(resJson.result);
          $('#result-threads').html(resJson.result);
        }
        killAjaxCommunity = false;
        scrollSearchMore = 0;
        scrollSearchMorePage = 1;
        $inp.prop('disabled', false);
      }
    });

    $.ajax({
      type: "GET",
      data: { "q": $inp.val().trim(), "type": "topics" },
      url: searchUrl,
      success: function(res) {
        var resJson = $.parseJSON(res);
        if (resJson.success == false || resJson.result == "") {
          // $target.html('<br><div class="alert alert-warning text-center lead"><strong>Ooops!</strong><br>We couldn\'t find any results for <strong>' + $inp.val().trim() + '</strong> keywords.</div>');
          // $target.append($target.next('.not-found').clone().removeClass('hide'));
          //$target.next('.not-found').find('.keyword').html($inp.val().trim());
          //$target.html($target.next('.not-found').clone().removeClass('hide'));
          $('#result-topics').next('.not-found').find('.keyword').html(resJson.q);
          $('#result-topics').html($('#result-topics').next('.not-found').clone().removeClass('hide'));
          $(".recent-topic-search").addClass("hide");
          $(".icon-search-page-community").addClass("hide");
        } else {
          //$target.html(resJson.result);
          $('#result-topics').html(resJson.result);
        }
        killAjaxCommunity = false;
        scrollSearchMore = 0;
        scrollSearchMorePage = 1;
        $inp.prop('disabled', false);
      }
    });
  }
};


var infiniteScroll = function() {
  var $moreBlog = $('.the-latest .more-blog');
  var $footer = $('footer');
  if ($('#popmama-desktop').length && $moreBlog.length) {
    $(window).scroll(function() {
      if (isLocal && scrollDebug) {
        console.log('container scroll: ' + $(this).scrollTop());
        console.log('container height: ' + $(this).innerHeight());
        // // console.log('document height: ' + $(document).height());
        // // console.log('footer height: ' + $footer.outerHeight());
        console.log('container scroll + container height: ' + ($(this).scrollTop() + $(this).innerHeight()));
        // // console.log('document height + footer height: ' + ($(document).height() - $footer.outerHeight()));
        // console.log('container moreBlog top: ' + $moreBlog.offset().top);
        // console.log('container moreBlog outerHeight: ' + $moreBlog.outerHeight(true));
        console.log('moreBlog height: ' + ($moreBlog.offset().top + $moreBlog.outerHeight(true)));
        console.log('---------');
      }
      // if (($(this).scrollTop() + $(this).innerHeight()) > ($(document).height() - $footer.outerHeight())) {
      if (($(this).scrollTop() + $(this).innerHeight()) > ($moreBlog.offset().top + $moreBlog.outerHeight(true))) {
        if (scrollMoreBlog < 3) {
          $(".more-blog .btn-ppm").trigger('click');
        }
      }
    });
  }
};
/* END FUNCTION */

// BEGIN document ready
$(document).ready(function() {

  infiniteScroll();

  // BEGIN load more
  $(document).on('click', "#popmama-desktop .more-blog .btn-ppm", function(e) {
    e.preventDefault();
    if (killAjax === false) {
      killAjax = true;
      var $selector = $(this);
      var $parent = $selector.closest('.more-blog');
      var urlx = $selector.attr('data-url');
      var btnText = $selector.html();

      $selector.prop('disabled', true).html('Loading...');

      $.ajax({
          url: urlx,
          type: 'GET'
        }).done(function(data) {
          var resJson = $.parseJSON(data);
          if (resJson.success && (resJson.result !== undefined || resJson.result !== null || resJson.result !== "")) {
            // insert result
            $(".more-blog .blog-overlay").before(resJson.result);
            // update url
            $selector.attr('data-url', resJson.url);
            // enable button
            $selector.prop('disabled', false).html(btnText);

            scrollMoreBlog = scrollMoreBlog + 1;
            scrollMoreBlogPage = scrollMoreBlogPage + 1;

            // // track ga
            // if (typeof gaTrack !== "undefined" && typeof gaTrack === "function") {
            //   gaTrack(urlx);
            // }

            page++;

            path = urlx.replace(hostname + '/', '');
            // queryString = 'page=' + page;
            queryString = '';
            callAnalytics(path, queryString);

            // re-enable ajax call
            killAjax = false;

            if (isLocal && scrollPageDebug) {
              console.log('scrollMoreBlog: ' + scrollMoreBlog);
              console.log('scrollMoreBlogPage: ' + scrollMoreBlogPage);
              console.log('totalPages: ' + resJson.totalPages);
            }

            if (scrollMoreBlogPage >= resJson.totalPages) {
              $parent.find('.blog-overlay, .btn-show-more').remove();
              $parent.find('.row:last .grid-blog-line').remove();
            }

            if ($(".sticky-sidebar").length) {
              $(".sticky-sidebar").css({
                position: 'fixed',
                top: '65px',
                bottom: 'auto'
              });
            }
          } else {
            $parent.find('.blog-overlay, .btn-show-more').remove();
            $parent.find('.row:last .grid-blog-line').remove();
          }
        })
        .fail(function(data) {
          // enable button back
          $selector.prop('disabled', false).html(btnText);
        });
    }
  });
  // END load more

  // BEGIN Search
  $(document).on('click', ".navbar-search", function(e) {
    e.preventDefault();
    $('.search-container').find('.search-field').val('');
    $('.search-container').find('.grid-blog').html('');
    $('.search-container').find('.grid-wrapper').addClass('hide');
    $('.search-container').show();
    $('body').addClass('no-scroll');

    $('.search-container-community').find('.search-field-community').val('');
    $('.search-container-community').find('.grid-blog').html('');
    $('.search-container-community').find('.grid-wrapper').addClass('hide');
    $('.search-container-community').show();
    $('body').addClass('no-scroll');
  });
  $(document).on('click', ".search-container .btn-close", function(e) {
    e.preventDefault();
    $('.search-container').hide();
    $('body').removeClass('no-scroll');
  });
  $(document).on('click', ".search-container-community .btn-close", function(e) {
    e.preventDefault();
    $('.search-container-community').hide();
    $('body').removeClass('no-scroll');
  });
  $("#search-field").on("keypress", function(e) {
    if (e.which == 13 && killAjax == false) {
      searchByKeyword();
      e.preventDefault();
    }
  });
  $("#search-field-community").on("keypress", function(e) {
    if (e.which == 13 && killAjaxCommunity == false) {
      searchByKeywordCommunity();
      e.preventDefault();
    }
  });
  $(document).on('click', ".search-button", function(e) {
    e.preventDefault();
    if (killAjax == false) {
      searchByKeyword();
    }
  });
  $(document).on('click', ".search-button-community", function(e) {
    e.preventDefault();
    if (killAjaxCommunity == false) {
      searchByKeywordCommunity();
    }
  });


  $(document).on('click', ".search-container .grid-blog .btn-ppm", function(e) {
    e.preventDefault();
    if (killAjax === false) {
      killAjax = true;
      var $selector = $(this);
      var $parent = $selector.closest('.grid-blog');
      var urlx = $selector.attr('data-url');
      var btnText = $selector.html();

      $selector.prop('disabled', true).html('Loading...');

      $.ajax({
          url: urlx,
          type: 'GET'
        }).done(function(data) {
          var resJson = $.parseJSON(data);
          if (resJson.success && (resJson.result !== undefined || resJson.result !== null || resJson.result !== "")) {
            $(".search-container .grid-blog .blog-overlay").before(resJson.result);
            $selector.attr('data-url', resJson.url);
            $selector.prop('disabled', false).html(btnText);

            scrollSearchMore = scrollSearchMore + 1;
            scrollSearchMorePage = scrollSearchMorePage + 1;
            killAjax = false;

            if ((host.indexOf(expr) !== -1 || host.indexOf(expr2) !== -1) && scrollPageDebug) {
              console.log('scrollSearchMore: ' + scrollSearchMore);
              console.log('scrollSearchMorePage: ' + scrollSearchMorePage);
              console.log('searchTotalPages: ' + resJson.totalPages);
            }

            if (scrollSearchMorePage >= resJson.totalPages) {
              $parent.find('.blog-overlay, .btn-show-more').remove();
              $parent.find('.row:last .grid-blog-line').remove();
            }
            // // ga pageview track push
            // if (typeof gaTrack !== "undefined" && typeof gaTrack === "function") {
            //   gaTrack(urlx);
            // }

            path = urlx.replace(hostname + '/', '');
            queryString = '';
            callAnalytics(path, queryString);

          } else {
            $parent.find('.blog-overlay, .btn-show-more').remove();
            $parent.find('.row:last .grid-blog-line').remove();
          }
        })
        .fail(function(data) {
          // enable button back
          $selector.prop('disabled', false).html(btnText);
        });
    }
  });

  if ($('.search-container').length) {
    $('.search-container .grid-blog').scroll(function() {
      if ($(this).scrollTop() > ($(this).prop('scrollHeight') - $(this).innerHeight() - 100)) {
        if (scrollSearchMore < 3) {
          $(this).find(".btn-ppm").trigger('click');
        }
      }
    });
  }
  // END Search


  $(document).on('click', ".search-container-community .grid-blog .btn-ppm", function(e) {
    e.preventDefault();
    if (killAjaxCommunity === false) {
      killAjaxCommunity = true;
      var $selector = $(this);
      var $parent = $selector.closest('.grid-blog');
      var urlx = $selector.attr('data-url');
      //console.log();
      var type = $selector.attr('id')
      var btnText = $selector.html();


      $selector.prop('disabled', true).html('Loading...');


      $.ajax({
          url: urlx,
          type: 'GET'
        }).done(function(data) {
          var resJson = $.parseJSON(data);
          //console.log(resJson.totalPages);
          if (resJson.success && (resJson.result !== undefined || resJson.result !== null || resJson.result !== "")) {

            if(type == "btnShowMoreGroups")
            {
              $("#showMoreGroups").before(resJson.result);
              scrollSearchMoreGroups = scrollSearchMoreGroups + 1;
              scrollSearchMorePageGroups = scrollSearchMorePageGroups + 1;

              $selector.attr('data-url', resJson.nextUrl);
              //console.log(resJson.nextUrl);
              $selector.prop('disabled', false).html(btnText);


              killAjaxCommunity = false;

              if ((host.indexOf(expr) !== -1 || host.indexOf(expr2) !== -1) && scrollPageDebug) {
                console.log('scrollSearchMore: ' + scrollSearchMore);
                console.log('scrollSearchMorePage: ' + scrollSearchMorePage);
                console.log('searchTotalPages: ' + resJson.totalPages);
              }

              if (scrollSearchMorePageGroups >= resJson.totalPages) {
              //$parent.find('.blog-overlay, .btn-show-more').remove();
              $('#btnShowMoreGroups').remove();
              $(parent).find('.row:last .grid-blog-line').remove();
              }
            }
            else if(type == "btnShowMoreBirthClubs")
            {
              $("#showMoreBirthClubs").before(resJson.result);
              scrollSearchMoreBirthClubs = scrollSearchMoreBirthClubs + 1;
              scrollSearchMorePageBirthClubs = scrollSearchMorePageBirthClubs + 1;

              $selector.attr('data-url', resJson.nextUrl);
              //console.log(resJson.nextUrl);
              $selector.prop('disabled', false).html(btnText);


              killAjaxCommunity = false;

              if ((host.indexOf(expr) !== -1 || host.indexOf(expr2) !== -1) && scrollPageDebug) {
                console.log('scrollSearchMore: ' + scrollSearchMore);
                console.log('scrollSearchMorePage: ' + scrollSearchMorePage);
                console.log('searchTotalPages: ' + resJson.totalPages);
              }

              if (scrollSearchMorePageBirthClubs >= resJson.totalPages) {
              //$parent.find('.blog-overlay, .btn-show-more').remove();
              $('#btnShowMoreBirthClubs').remove();
              //$(parent).find('.row:last .grid-blog-line').remove();
              }
            }
            else if(type == "btnShowMoreTopics")
            {
              $("#showMoreTopics").before(resJson.result);
              scrollSearchMoreTopics = scrollSearchMoreTopics + 1;
              scrollSearchMorePageTopics = scrollSearchMorePageTopics + 1;

              $selector.attr('data-url', resJson.nextUrl);
              //console.log(resJson.nextUrl);
              $selector.prop('disabled', false).html(btnText);


              killAjaxCommunity = false;

              if ((host.indexOf(expr) !== -1 || host.indexOf(expr2) !== -1) && scrollPageDebug) {
                console.log('scrollSearchMore: ' + scrollSearchMore);
                console.log('scrollSearchMorePage: ' + scrollSearchMorePage);
                console.log('searchTotalPages: ' + resJson.totalPages);
              }
              if (scrollSearchMorePageTopics >= resJson.totalPages) {
              //$parent.find('.blog-overlay, .btn-show-more').remove();
              $('#btnShowMoreTopics').remove();
              //$parent.find('.row:last .grid-blog-line').remove();
            }
            }

            else if(type == "btnShowMoreUsers")
            {
              $("#showMoreUsers").before(resJson.result);
              scrollSearchMoreUsers = scrollSearchMoreUsers + 1;
              scrollSearchMorePageUsers = scrollSearchMorePageUsers + 1;

              $selector.attr('data-url', resJson.nextUrl);
              //console.log(resJson.nextUrl);
              $selector.prop('disabled', false).html(btnText);


              killAjaxCommunity = false;

              if ((host.indexOf(expr) !== -1 || host.indexOf(expr2) !== -1) && scrollPageDebug) {
                console.log('scrollSearchMore: ' + scrollSearchMore);
                console.log('scrollSearchMorePage: ' + scrollSearchMorePage);
                console.log('searchTotalPages: ' + resJson.totalPages);
              }

              if (scrollSearchMorePageUsers >= resJson.totalPages) {
              //$parent.find('.blog-overlay, .btn-show-more').remove();
              $('#btnShowMoreUsers').remove();
              //$parent.find('.row:last .grid-blog-line').remove();
              }
            }
            else if(type == "btnShowMorePosts")
            {
              $("#showMorePosts").before(resJson.result);
              scrollSearchMorePosts = scrollSearchMorePosts + 1;
              scrollSearchMorePagePosts = scrollSearchMorePagePosts + 1;
              //console.log(scrollSearchMorePagePosts);

              $selector.attr('data-url', resJson.nextUrl);
              //console.log(resJson.nextUrl);
              $selector.prop('disabled', false).html(btnText);


              killAjaxCommunity = false;

              if ((host.indexOf(expr) !== -1 || host.indexOf(expr2) !== -1) && scrollPageDebug) {
                console.log('scrollSearchMore: ' + scrollSearchMore);
                console.log('scrollSearchMorePage: ' + scrollSearchMorePage);
                console.log('searchTotalPages: ' + resJson.totalPages);
              }

              if (scrollSearchMorePagePosts >= resJson.totalPages) {
              //$parent.find('.blog-overlay, .btn-show-more').remove();
              $('#btnShowMorePosts').remove();
              //$parent.find('.row:last .grid-blog-line').remove();
              }
            }


            // // ga pageview track push
            // if (typeof gaTrack !== "undefined" && typeof gaTrack === "function") {
            //   gaTrack(urlx);
            // }
            path = urlx.replace(hostname + '/', '');
            queryString = '';
            callAnalytics(path, queryString);

          } else {
            $parent.find('.blog-overlay, .btn-show-more').remove();
            $parent.find('.row:last .grid-blog-line').remove();
          }
        })
        .fail(function(data) {
          // enable button back
          $selector.prop('disabled', false).html(btnText);
        });
    }
  });
  if ($('.search-container-community').length) {
    $('#result-group').scroll(function() {
      if ($(this).scrollTop() > ($(this).prop('scrollHeight') - $(this).innerHeight() - 100)) {
        if (scrollSearchMoreGroups < 3) {
          $(this).find("#btnShowMoreGroups").trigger('click');
        }
      }
    });
    $('#result-birth-clubs').scroll(function() {
      if ($(this).scrollTop() > ($(this).prop('scrollHeight') - $(this).innerHeight() - 100)) {
        if (scrollSearchMoreBirthClubs < 3) {
          $(this).find("#btnShowMoreBirthClubs").trigger('click');
        }
      }
    });
    $('#result-topics').scroll(function() {
      if ($(this).scrollTop() > ($(this).prop('scrollHeight') - $(this).innerHeight() - 100)) {
        if (scrollSearchMoreTopics < 3) {
          $(this).find("#btnShowMoreTopics").trigger('click');
        }
      }
    });
    $('#result-users').scroll(function() {
      if ($(this).scrollTop() > ($(this).prop('scrollHeight') - $(this).innerHeight() - 100)) {
        if (scrollSearchMoreUsers < 3) {
          $(this).find("#btnShowMoreUsers").trigger('click');
        }
      }
    });
    $('#result-threads').scroll(function() {
      if ($(this).scrollTop() > ($(this).prop('scrollHeight') - $(this).innerHeight() - 100)) {
        if (scrollSearchMorePosts < 3) {
          $(this).find("#btnShowMorePosts").trigger('click');
        }
      }
    });
  }

  /* homepage auto load more */
  var autoLoadMore = 0;
  $(window).scroll(function () {
    var winHeight = $(window).height(); // height of visible window
    var winScrollTop = $(window).scrollTop();
    
    if ($('.btn-show-more').length) {
      var buttonTop = $('.btn-show-more').offset().top;
      
      if (winHeight + winScrollTop >= buttonTop) {
        if ($('#homepage-load-more').length && autoLoadMore < 3) {
          $("#homepage-load-more").trigger('click');
        }
      }
    }
    
  });

  /* homepage manual load more */
  $(document).on('click', '.section-with-load-more .btn-show-more button', function (event) {
    event.preventDefault();

    if (killAjaxCommunity === false) {
      killAjaxCommunity = true;
      var $button = $(this);
      var btnId = $button.attr('id')
      var btnText = $button.html();
      var page = $button.data('page') + 1;
      var totalPages = $button.data('totalpage');
      var url = $button.attr('data-url') + '?page=' + page;

      if ($('#homepage-item').length != 0)
      {
        var $div = $('#homepage-item');
        var sort = $button.data('sort');
        var url = url + '&sort=' + sort;
      }
      else if ($('#parent-details').length != 0)
      {
        var $div = $('#parent-details');
      }
      
      $button.prop('disabled', true).html('Loading...');

      $.ajax({
        type: "GET",
        url: url,
        cache: false
      })
      .done(function(data) {
        $div.append(data);
        $button.data('page', page);
        $button.data('sort', sort);

        if (page < totalPages) {
          $button.prop('disabled', false).html('Load More');
        }
        else {
          $button.remove();
        }
        
        autoLoadMore += 1;
        killAjaxCommunity = false;

      })
      .fail(function() {
        console.log("error");
      });     
    }
  });

});
// END document ready
