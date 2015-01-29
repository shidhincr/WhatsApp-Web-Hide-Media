'use strict';
var opacity = 0.1;
chrome.storage.sync.get('opacity', function(storage){
	opacity = storage.opacity || 0.1;
});
var enableImageBindings = function(){
	document.body.addEventListener(
	    'load',
	    function(event){
	        var tgt = event.target;
	        var $elem  = jQuery(tgt);
	        if( $elem.is('img') && $elem.hasClass('image-thumb-body')){
	            $elem.css({
	            	visibility: 'hidden',
	            	opacity: opacity
	            });
	            $elem.attr('data-ext-image-blocked', 'true');
	            $elem.parent().hover(function(){
	            	$elem.css('visibility', 'visible');
	            },function(){
	            	$elem.css('visibility', 'hidden');
	            })
	        }
	    },
	    true
	);	
};

enableImageBindings();