var player = document.getElementById( "player-unavailable" );
var sign_in_request = document.querySelector( "ytd-button-renderer.ytd-player-error-message-renderer" );

if ( player.offsetParent !== null ) {
	var page_class = document.getElementById( "page" ).className,
		regexp = /video-([\w-_]*)/,
		iframe = document.createElement( "iframe" );
		
	iframe.setAttribute( "id", "no-age-limit-iframe" );
	iframe.setAttribute( "width", player.clientWidth );
	iframe.setAttribute( "height", player.clientHeight );
	iframe.setAttribute( "src", "https://www.youtube.com/embed/" + page_class.match(regexp)[1] + "?autoplay=1" );
	iframe.setAttribute( "frameborder" , 0);
	iframe.setAttribute( "allowFullScreen", "" );

	while ( player.hasChildNodes() ) player.removeChild( player.lastChild );

	player.appendChild( iframe );

	window.addEventListener( "resize", function() {
		var player = document.getElementById( "player-unavailable" )
			iframe = document.getElementById( "no-age-limit-iframe" );
		iframe.setAttribute( "width", player.clientWidth );
		iframe.setAttribute( "height", player.clientHeight );
	} );
} else if ( sign_in_request ) {
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
		player = document.getElementById( "player-container" ),
		video_id = document.querySelector( "ytd-watch" ).getAttribute('video-id'),
		iframe = document.createElement( "iframe" );

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type == "attributes") {
				iframe = document.getElementById( "no-age-limit-iframe" );

				iframe.remove();
			}
		});
	});

	observer.observe(document.querySelector( "ytd-watch" ), {
		attributes: true
	});

	iframe.setAttribute( "id", "no-age-limit-iframe" );
	iframe.setAttribute( "width", player.clientWidth );
	iframe.setAttribute( "height", player.clientHeight );
	iframe.setAttribute( "src", "https://www.youtube.com/embed/" + video_id + "?autoplay=1" );
	iframe.setAttribute( "frameborder" , 0);
	iframe.setAttribute( "allowFullScreen", "" );
	iframe.style.position = 'relative';
	iframe.style.bottom = player.clientHeight + 'px';

	player.parentElement.appendChild( iframe );

	window.addEventListener( "resize", function() {
		var player = document.getElementById( "player-container" )
		iframe = document.getElementById( "no-age-limit-iframe" );

		iframe.setAttribute( "width", player.clientWidth );
		iframe.setAttribute( "height", player.clientHeight );
		iframe.style.bottom = player.clientHeight + 'px';
	} );
}
