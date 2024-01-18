jQuery_T4NT(document).ready(function($) {

     /**
     * Variant selection changed
     */
	  $( document ).on( "variant:change", function( evt, variant ) {
	    //console.log( variant );
	  });


  /**
   * Web Developer Custom Script
   */
  $('.simple_video').on('click', function() {

    $(this).get(0).pause();
    $(this).closest('.simple_video_wrap').addClass('paused');

  });

  $('.play_btn').on('click', function() {

    $(this).closest('.simple_video_wrap').removeClass('paused');
    $(this).siblings('video').get(0).play();

  });

  $('.countertop_images > .countertop_image').on('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

     var $this = $(this),
        title = $this.data('title'),
        $label = $('.countertop_selected'),
        $inputLabel = $('[data-js-countertop-label]'),
        $inputImage = $('[data-js-countertop-image]');

     $this.parent().find('.is-selected').removeClass('is-selected');
     $this.addClass('is-selected');

     $label.html(title);
     $inputLabel.val(title);
     $inputImage.val($this.find('img').attr('src'));
  });

});