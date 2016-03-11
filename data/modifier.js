if ( $( "#player-unavailable" ).is( ":visible" ) ) {
	var $player = $( "#player-unavailable" ),
		page_class = $( "#page" ).attr( "class" ),
		regexp = /video-([\w-_]*)/,
		iframe = "<iframe id=\"no-age-limit-iframe\" width=\"" + $player.width() + "\" height=\"" + $player.height() + "\" src=\"https://www.youtube.com/embed/" + page_class.match(regexp)[1] + "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>";

	$( "#player-unavailable" ).html( iframe );

	$( window ).resize( function() {
		$( "#no-age-limit-iframe" ).height( $( "#player-unavailable" ).height() ).width( $( "#player-unavailable" ).width() );
	} );
}

