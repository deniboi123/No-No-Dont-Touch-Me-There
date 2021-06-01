// The file we defined in the [manifest.json] file.

const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://.partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://.creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.doubleclick.com/*",
	"*://*.ads.roblox.com/*",
	"*://*.api.ipify.org/*",
	"*://*.googletagmanager.com/*",
	"*://*.ads.facebook.com/*",
	"*://*.assets.adobedtm.com/*",
	"*://*.s.go-mpulse.net/*", // Contribute to the list if you want to.
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
