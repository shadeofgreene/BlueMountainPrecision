var request = require('request-promise');
var accounting = require('accounting');
var Q = require('q');

module.exports = {
	getWebLinkGroup: function (webLinkGroupFilter, cb) {

		if (webLinkGroupFilter) {
			var url = GlobalService.serverBaseUrl + 'WebLinkManager/GetWebGroupPublic';
			var options = {
				uri: url,
				method: 'POST',
				body: webLinkGroupFilter,
				json: true
			}

			request(options).then(function (webLinkGroup) {
				console.log(webLinkGroup);
				console.log(webLinkGroup.WebLinks.length);
				return cb(null, webLinkGroup);
			}).catch(function (err) {
				console.log('THIS IS AN ERROR: ' + err);
				return cb(err, null);
			});
		} else {
			return cb('No web link group filter provided', null);
		}
	},
	getWebLinkGroupPromise: function (webLinkGroupFilter, cb) {
		var deferred = Q.defer();
		if (webLinkGroupFilter) {
			var url = GlobalService.serverBaseUrl + 'WebLinkManager/GetWebGroupPublic';
			var options = {
				uri: url,
				method: 'POST',
				body: webLinkGroupFilter,
				json: true
			}

			request(options).then(function (webLinkGroup) {
				webLinkGroup = WebLinkService.convertWebLinkGroupForFrontend(webLinkGroup);
				deferred.resolve(webLinkGroup);
			}).catch(function (err) {
				console.log('THIS IS AN ERROR: ' + err);
				deferred.reject(err);
			});
		} else {
			deferred.reject(new Error('No web link group filter provided'));
		}
		return deferred.promise;
	},
	convertWebLinkGroupForFrontend: function (webLinkGroup) {
		for (var i = 0; i < webLinkGroup.WebLinks.length; i++) {
			var wl = webLinkGroup.WebLinks[i];
			if (wl.description2) {
				console.log('does have description2');
				wl.specs = [];
				var specsStr = wl.description2 === null ? '' : wl.description2;
				var specsSplit = specsStr.split('|');
				for (var j = 0; j < specsSplit.length; j++) {
					var specSplit = specsSplit[j].split(':');
					var key = specSplit[0] ? specSplit[0].trim() : '';
					var value = specSplit[1] ? specSplit[1].trim() : '';
					if (key) {
						wl.specs.push({
							'key': key,
							'value': value
						});
					}
				}
			}

			if (wl.price1) {
				wl.price1Formatted = accounting.formatMoney(wl.price1);
			} 

			if (wl.price2) {
				wl.price2Formatted = accounting.formatMoney(wl.price2);
			} 
		}
		return webLinkGroup;
	}
}