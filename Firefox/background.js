/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "Google":
      return "http://www.google.com/";
  case "Facebook":
	return "http://www.facebook.com/";
  case "Telegram":
	return "https://www.telegram.org";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);

