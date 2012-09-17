$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({

		ready: function () {
			$(this).jPlayer("setMedia", {
				m4v: "video/skylight.m4v",
				webmv: "video/skylight.webm",
				poster: "images/poster_skylight.png"
			});
		},

		swfPath: "js",
		supplied: "m4v, webmv",
		size: {
			width: "382px",
			height: "216px",
			cssClass: "jp-video-217p"
		},

		autohide: {
			full: "false",
			fadein: "0",
			hold: "100000"
		}
		
	});

	$("a.jp-full-screen").bind('click', function(event){
		/* Safari on iPad display requires full screen controls moved up. */
		var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
		if (isiPad) {
    	$('div.jp-video-full div.jp-interface').css('bottom', '88px');
		}

		/* Make sure the controls show immediately upon transition to full-screen */
		/* as tablets don't have mousemove. */
		$("div#jquery_jplayer_1").trigger('mousemove');
	});

	$("a.jp-restore-screen").bind('click', function(event){
		/* Restore controls to rightful place for Safari on iPad. */
		var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
		if (isiPad) {
    	$('div.jp-video div.jp-interface').css('bottom', '0px');
		}
	});

	$("div.jp-video-play").bind('click', function(event){
		/* Show the controls when the video begins playing. */
		$("div.jp-interface").show('slow');
		$("div.jp-video-play").hide();
	});

	$("a.jp-stop").bind('click', function(event){
		/* Stopping the video will automatically restore from full-screen.  */
		$("a.jp-restore-screen").click();
		/* Hide the controls when the video is stopped. */
		$("div.jp-interface").hide('slow');
		$("div.jp-video-play").show();
	});

});