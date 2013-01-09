//
// Tests for GPU Accelerated CSS
// ---------------------------------------------


// Initialize animated boxes
// Inspired by @valmar http://stackoverflow.com/questions/10014461/why-does-enabling-hardware-acceleration-in-css3-slow-down-performance
function init() {
  var max = 1000;
  var w = 715;
  for(var i = 0; i < max; i++) {
    var left = i;
    if(left > w - 10) {
      left = left % (w - 10);
    }
    $('#stage').append('<div class="box box-small finish ease-linear" style="left: ' + left + 'px;"></div>');
  }
}

// Random key generator
function getRandom(min, max) {
  if(min > max) return -1;
  if(min == max) return min;
  var r;
  do r = Math.random();
  while(r == 1.0);
  return min + parseInt(r * (max - min + 1));
}

// Move the given box
function moveBox(box) {
  var rand = getRandom(0, 5000); // Don't let all boxes start at the same time
  setTimeout(function() {
    // Start animation for the current box
    $(box).toggleClass("move finish");
  }, rand);
}

!function ($) {
  $(function(){

    var $window = $(window)

    /*
     * INITIALIZE TESTS
     * ============================== */

    init();

    // Enable or disable hardware-acceleration
    $("#toggle").click(function() {
      // $(".box").toggleClass("gpu");
      $("#stage").toggleClass("gpu");
    });

    // Click handler for #startButton
    $("#startButton").click(function() {
      // Reset
      $(".box").removeClass("move").addClass("finish");
      // Start animation for each box
      $(".box").each(function() {
        moveBox(this);
      });
    });
    // TODO: Click handler for #stopButton
    // $("#stopButton").click(function() {});


    /*
     * DISABLE CERTAIN LINKS
     * ============================== */

    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })


    /*
     * AFFIX
     * ============================== */

    setTimeout(function () {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        }
      })
    }, 100)

    // make code pretty
    window.prettyPrint && prettyPrint()

  })

}(window.jQuery)