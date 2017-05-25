function handleClick() {
	var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});

	gettingActiveTab.then((tabs) => {
		var regex = /^https:\/\/www\.youtube\.com\/watch\?v\=.*/;

		if (regex.test(tabs[0].url)) {
			browser.tabs.reload();
		}
	});
}

browser.browserAction.onClicked.addListener(handleClick);
