var player = document.getElementById( "player-unavailable" );

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
}
