(function () {
	var ua = window.navigator.userAgent;
	//ua = Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C)
	var msie = ua.indexOf('MSIE ');
	// msie = 25
	var IEVersion = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	// IEVersion : Version number of Internet Explorer
	if (IEVersion == 7) alert('Hello World');
})();
