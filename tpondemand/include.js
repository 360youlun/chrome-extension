var s = document.createElement('script');
s.src = chrome.extension.getURL('tpondemand/extension.js');
s.onload = function() { this.parentNode.removeChild(this); };
document.documentElement.appendChild(s);
