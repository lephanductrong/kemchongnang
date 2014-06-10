(function ($) {
    
    /**
     * @function: Detect small screen by media query
     */
    isSmallScreen = function() {
      return (!Modernizr.mq('(min-width: 1300px)'));
    };
    
    /**
     * @function: Detect big screen by media query
     */
    isBigScreen = function() {
      return (Modernizr.mq('(min-width: 1300px)'));
    };
    
    /**
     * @function: Add data attributs (start/end) depending on the screen size
     */
    setDatasDestinations = function (callback) {
      
      if (isBigScreen()) {
        
        /*** SET DATAS - BIG SCREENS */
        
        // CITY
        
        $('#helicopter').attr({
          'data-start':   '{"top":"194px","left":"348px"}',
          'data-end':     '{"top":"134px","left":"318px"}'
        });
          $('#buildings').attr({
          'data-start':   '{"top":"10px","left":"170px"}',
          'data-end':     '{"left":"150px"}'
        });
        $('#pigeon-sky').attr({
          'data-start':   '{"top":"96px","left":"19px"}',
          'data-end':     '{"top":"76px","left":"0px"}'
        });
        $('#bike').attr({
          'data-start':   '{"top":"267px","left":"345px"}',
          'data-end':     '{"left":"295px"}'
        });
        $('#car').attr({
          'data-start':   '{"top":"305px","left":"15px"}',
          'data-end':     '{"left":"-50px"}'
        });
        $('#the-city').attr({
          'data-start':   '{"top":"392px","left":"209px"}',
          'data-end':     '{"top":"412px","left":"199px"}'
        });
        $('#pigeons-street').attr({
          'data-start':   '{"top":"432px","left":"36px"}',
          'data-end':     '{"top":"440px","left":"-20px"}'
        });
        $('#squirrel').attr({
          'data-start':   '{"top":"390px","left":"58px"}',
          'data-end':     '{"top":"400px","left":"38px"}'
        });
        
        // BEACH
        
        $('#sea').attr({
          'data-start':   '{"top":"341px","right":"122px"}',
          'data-end':     '{"right":"82px"}'
        });
        $('#parasol').attr({
          'data-start':   '{"top":"242px","right":"222px"}',
          'data-end':     '{"top":"232px","right":"202px"}'
        });
        $('#family').attr({
          'data-start':   '{"top":"241px","right":"0px"}',
          'data-end':     '{"top":"251px","right":"-20px"}'
        });
        $('#seabirds').attr({
          'data-start':   '{"top":"114px","right":"163px"}',
          'data-end':     '{"top":"94px","right":"123px"}'
        });
        $('#the-beach').attr({
          'data-start':   '{"top":"392px","right":"143px"}',
          'data-end':     '{"top":"412px","right":"133px"}'
        });
        $('#crab').attr({
          'data-start':   '{"top":"475px","right":"73px"}',
          'data-end':     '{"top":"485px","right":"33px"}'
        });
        
      } else {
        
        /*** SET DATAS - SMALL SCREENS */
        
        // CITY
        
        $('#helicopter').attr({
          'data-start':   '{"top":"248px","left":"247px"}',
          'data-end':     '{"top":"188px","left":"217px"}'
        });
        $('#buildings').attr({
          'data-start':   '{"top":"59px","left":"118px"}',
          'data-end':     '{"left":"98px"}'
        });
        $('#pigeon-sky').attr({
          'data-start':   '{"top":"96px","left":"0"}',
          'data-end':     '{"top":"76px","left":"-20px"}'
        });
        $('#bike').attr({
          'data-start':   '{"top":"274px","left":"252px"}',
          'data-end':     '{"left":"202px"}'
        });
        $('#car').attr({
          'data-start':   '{"top":"305px","left":"0"}',
          'data-end':     '{"left":"-60px"}'
        });
        $('#the-city').attr({
          'data-start':   '{"top":"406px","left":"109px"}',
          'data-end':     '{"top":"426px","left":"99px"}'
        });
        $('#pigeons-street').attr({
          'data-start':   '{"top":"432px","left":"36px"}',
          'data-end':     '{"top":"452px","left":"-16px"}'
        });
        $('#squirrel').attr({
          'data-start':   '{"top":"390px","left":"35px"}',
          'data-end':     '{"top":"400px","left":"15px"}'
        });
        
        // BEACH
        
        $('#sea').attr({
          'data-start':   '{"top":"341px","right":"43px"}',
          'data-end':     '{"right":"0px"}'
        });
        $('#parasol').attr({
          'data-start':   '{"top":"258px","right":"127px"}',
          'data-end':     '{"top":"248px","right":"107px"}'
        });
        $('#family').attr({
          'data-start':   '{"top":"246px","right":"-50px"}',
          'data-end':     '{"top":"256px","right":"-70px"}'
        });
        $('#seabirds').attr({
          'data-start':   '{"top":"120px","right":"109px"}',
          'data-end':     '{"top":"100px","right":"69px"}'
        });
        $('#the-beach').attr({
          'data-start':   '{"top":"406px","right":"-57px"}',
          'data-end':     '{"top":"426px","right":"-67px"}'
        });
        $('#crab').attr({
          'data-start':   '{"top":"474px","right":"98px"}',
          'data-end':     '{"top":"484px","right":"58px"}'
        });
        
      }
      
      if (typeof callback === 'function') {
        callback();
      }
    };
    
    /**
     *@function: Get attribut data-'type' value form the HTML element 'elem' and convert it into type object (JSON)
     */
    getDataDestination = function(elem, type) {
      var data = elem.attr('data-'+type);
      var styles = $.parseJSON(data);
      return (typeof styles == 'object') ? styles : false;
    };
    
    /**
     * @function: Add data attributs (start/end) depending on the screen size
     */
    applyDatasDestinations = function () {
      $('a.destination .object').each(function() {
        var styles = getDataDestination($(this), 'start');
        if (styles) $(this).css(styles);
      });
    };
    
    /**
     * @behaviors: Init destinations datas on document ready and on window resize
     */
    Drupal.behaviors.front_initDestinations = {
      attach: function (context) {
        
        // on document ready
        $(document).ready(function() {
          $('body').addClass((isSmallScreen()) ? 'small-screen' : 'big-screen');
          setDatasDestinations(applyDatasDestinations);
        });
        
        // on window resize
        $(window).resize(function() {
          if ((isSmallScreen() && $('body').hasClass('big-screen')) || (isBigScreen() && $('body').hasClass('small-screen'))) {
            setDatasDestinations(applyDatasDestinations);
            $('body').removeClass('small-screen big-screen');
            $('body').addClass((isSmallScreen()) ? 'small-screen' : 'big-screen');
          }
        });
        
      }
    };
    
    /**
     * @behaviors: Animate objects on destination link hover
     */
    Drupal.behaviors.front_hoverDestinations = {
      attach: function (context) {
        
        $('a.destination').hover(
          
          /*** MOUSEENTER ***/
          
          function() {
            
            // hide off layer
            $(this).find('.object .off').fadeOut(400);
            
            // animate objects
            $(this).find('.object').each(function() {
              var styles = getDataDestination($(this), 'end');
              if (styles) $(this).stop().animate(styles, 400);
            });
          },
          
          /*** MOUSELEAVE ***/
          
          function() {
            
            // show off layer
            $(this).find('.object .off').fadeIn(200);
            
            // animate objects
            $(this).find('.object').each(function() {
              var styles = getDataDestination($(this), 'start');
              if (styles) $(this).stop().animate(styles, 200);
            });
          }
          
        );
        
      }
    };
    
    /**
	 * @behavior: Google Analytics CLICKS
	 */
	Drupal.behaviors.front_gaClicks = {
		attach: function (context, settings) {
			
			$('#box-city').click(function() {
				ga('send', 'event', 'Choice', 'Click', 'City');
			});
            
            $('#box-beach').click(function() {
				ga('send', 'event', 'Choice', 'Click', 'Beach');
			});
        }
    };
    
})(jQuery);;
