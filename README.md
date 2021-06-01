![Anti-Adblock Killer](https://raw.githubusercontent.com/reek/anti-adblock-killer/gh-pages/images/header.png)

# ';-- No-No-Dont-Touch-Me-There ';--
NNDTMET is a extension designed for protecting your privacy. Using the built in `chrome.webRequest.onBeforeRequest` API, we will tell chrome to block these requests in the `const` variable we made.

**Example:**
```js
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: '*://*.doubleclick.net/*' },
    ["blocking"]
)
```
