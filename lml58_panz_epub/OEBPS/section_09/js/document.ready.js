$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({

		ready: function () {
			$(this).jPlayer("setMedia", {
				m4v: "video/learning_media.m4v",
				webmv: "video/learning_media.webm",
				poster: "images/poster_learning_media.jpg"
			});
		},

		swfPath: "js",
		supplied: "m4v, webmv",
		size: {
			width: "447px",
			height: "252px",
			cssClass: "jp-video-217p"
		},
/*
		sizeFull: {
			width: "1024px",
			height: "697px"
		},
*/
		autohide: {
			full: "false",
			fadein: "0",
			hold: "100000"
		}
		
	});

	$("a.jp-full-screen").bind('click', function(event){
		/* Make sure the controls show immediately upon transition to full-screen */
		/* as tablets don't have mousemove. */
		$("div#jquery_jplayer_1").trigger('mousemove');
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