const utils = {
	urlPrefix: 'https://apinyx.chuangshangapp.com/',
	request: function(paras) { //获取url参数
		var url = location.href;
		var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
		var paraObj = {};
		for (let i = 0,j; j = paraString[i]; i++) {
			paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
		}
		var returnValue = paraObj[paras.toLowerCase()];
		if (typeof(returnValue) == "undefined") {
			return "";
		} else {
			return returnValue;
		}
	},
}

export default utils;