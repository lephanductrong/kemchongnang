
(function ($) {
	
	///////////////
	/// METHODS ///
	///////////////
	
	/**
	 * @function: save current window width and height
	 */
	desktop_saveWindowDimension = function () {
		Drupal.settings.window_w = $(window).width();
		Drupal.settings.window_h = window.innerHeight ? window.innerHeight : $(window).height();
	};
	
	/**
	 * @function: global responsive for home, beach and city
	 */
	desktop_responsiveResize = function () {
		
		var win_w = Drupal.settings.window_w;
		var win_h = Drupal.settings.window_h;
		
		// body font size
		if ((win_w < 500) || win_h < 400) $('body').css('font-size', '80%');
		if ((win_w >= 500 && win_w < 768) || (win_h >= 400 && win_h < 500)) $('body').css('font-size', '90%');
		if ((win_w >= 768 && win_w < 1280) || (win_h >= 500 && win_h < 600)) $('body').css('font-size', '100%');
		
		// footer line height
		//$('#footer').css('line-height', $('#footer').height() + 'px');
		//$('#footer').css('font-size', '90%');
	};
	
	/////////////////
	/// BEHAVIORS ///
	/////////////////
	
	/**
	 * @behavios: on document ready
	 */
	Drupal.behaviors.desktop_onDocumentReady = {
		attach: function (context, settings) {
			desktop_saveWindowDimension();
		}
	};
	
	/**
	 * @behavios: on window load
	 */
	Drupal.behaviors.desktop_onWindowLoad = {
		attach: function (context, settings) {
			$(window).bind('load', function() {
				desktop_saveWindowDimension(); // get window sizes
				desktop_responsiveResize(); // resposive resize
			});
		}
	};
	
	/**
	 * @behavios: on window resize
	 */
	Drupal.behaviors.desktop_onWindowResize = {
		attach: function (context, settings) {
			$(window).bind('resize', function() {
				desktop_saveWindowDimension(); // get window sizes
				desktop_responsiveResize(); // responsive resize
			});
		}
	};
	
	/**
	 * @behavios: on window resize
	 */
	Drupal.behaviors.desktop_onFooterSocialHover = {
		attach: function (context, settings) {
			$('#footer_social .buttons').css('opacity', 0);
			$('#footer_social').hover(
				function() { $(this).find('.buttons').stop().animate({'opacity': 1}); },
				function() { $(this).find('.buttons').stop().animate({'opacity': 0}); }
			);
		}
	};
	
})(jQuery);
;
