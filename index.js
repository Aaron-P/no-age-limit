var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

pageMod.PageMod({
	include: /^https:\/\/www\.youtube\.com\/watch\?v\=.*/,
	contentScriptFile: [self.data.url( "jquery-1.12.1.min.js" ), self.data.url( "modifier.js" )]
});

var button = buttons.ActionButton({
	id: "no-age-limit",
	label: "Watch restricted video",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});

function handleClick() {
    var regex = /^https:\/\/www\.youtube\.com\/watch\?v\=.*/;
 
    if (regex.test(tabs.activeTab.url) === true) {
	tabs.activeTab.reload();
    }
}

