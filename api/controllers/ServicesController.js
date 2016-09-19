var accounting = require('accounting');
var Q = require('q');

module.exports = {
	index: function (req, res) {
		var promises = [];
		var webLinkGroups = [];
		var webLinkGroupFilter = {
			webLinkGroupId: 1005,
			limit: 200
		}
		
		promises.push(WebLinkService.getWebLinkGroupPromise({
			webLinkGroupId: 1005,
			limit: 200
		}));
		promises.push(WebLinkService.getWebLinkGroupPromise({
			webLinkGroupId: 1007,
			limit: 200
		}));
		
		Q.all(promises).then(function(data) {
			_.each(data, function(returnedValue) {
				webLinkGroups.push(returnedValue);
			});
			return res.view({
				pagetitle: 'Services',
				webLinkGroups: webLinkGroups
			});
		}, function(err) {
			return res.view({
				pagetitle: 'Services',
				webLinkGroups: null,
				error: err
			});
		});
	}
}