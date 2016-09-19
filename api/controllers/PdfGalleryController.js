var accounting = require('accounting');
var Q = require('q');

module.exports = {
	index: function (req, res) {
		var promises = [];
		var webLinkGroups = [];
		
		promises.push(WebLinkService.getWebLinkGroupPromise({
			webLinkGroupId: 1008,
			limit: 200
		}));
		
		Q.all(promises).then(function(data) {
			_.each(data, function(returnedValue) {
				webLinkGroups.push(returnedValue);
			});
			return res.view({
				pagetitle: 'PDF Gallery',
				webLinkGroups: webLinkGroups
			});
		}, function(err) {
			return res.view({
				pagetitle: 'PDF Gallery',
				webLinkGroups: null,
				error: err
			});
		});
	}
}