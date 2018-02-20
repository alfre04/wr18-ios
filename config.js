define( function ( require ) {

	"use strict";

	return {
		app_slug : 'ios',
		wp_ws_url : 'http://warroom2018.com/wp-appkit-api/ios',
		wp_url : 'http://warroom2018.com',
		theme : 'wpak-theme-bootstrap-feature-user-login-ios',
		version : '1.0',
		app_title : 'WR2018',
		app_platform : 'ios',
		gmt_offset : -6,
		debug_mode : 'off',
		auth_key : 'put your unique phrase here',
		options : {"refresh_interval":0,"pushwoosh":{"pwid":"442BA-1D782","googleid":""}},
		theme_settings : [],
		addons : [{"name":"Pushwoosh for WP-AppKit","slug":"wpak-addon-pushwoosh","url":"http:\/\/warroom2018.com\/wp-content\/plugins\/wpak-addon-pushwoosh","js_files":[{"file":"js\/wpak-pushwoosh.js","type":"module","position":""},{"file":"js\/wpak-pushwoosh-app.js","type":"init","position":"before"}],"css_files":[],"html_files":[],"template_files":[],"app_data":null}]
	};

});
