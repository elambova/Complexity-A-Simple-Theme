"use strict";
//function slider() {
//    var $rightButton = $('#next');
//    var $leftButton = $('#prev');
//
//
//    $leftButton.hide();
//    $('div#slider div.slide').hide();
//    $('div#slider div#slide-1.slide').show();
//
//    function onRightButtonClick() {
//        var $currentSlide = $('div#slider div.slide:visible');
//        if (!$currentSlide.hasClass('end-slide')) {
//            $currentSlide.hide().next().show();
//            $leftButton.show();
//        }
//        if ($currentSlide.next().hasClass('end-slide')) {
//            $rightButton.hide();
//        }
//    }
//
//    function onLeftButtonClick() {
//        var $currentSlide = $('div#slider div.slide:visible');
//        if ($currentSlide.attr('id') !== 'slide-1') {
//            $currentSlide.hide().prev().show();
//            $rightButton.show();
//        }
//        if ($currentSlide.prev().attr('id') === 'slide-1') {
//            $leftButton.hide();
//        }
//    }
//
//    $rightButton.on('click', onRightButtonClick);
//    $leftButton.on('click', onLeftButtonClick);
//}
//slider();

$('#slider').bxSlider({
  mode: 'fade',
  auto: true,
  autoControls: true,
  pause: 2000
});