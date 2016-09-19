var accounting = require('accounting');

module.exports = {
	index: function(req, res) {
		var webLinkGroupFilter = {
			webLinkGroupId: 1004,
			limit: 30
		}
		console.log('-------------------------------------');
		console.log('called WebLinkService.getWebLinkGroup');
		WebLinkService.getWebLinkGroup(webLinkGroupFilter, function(err, webLinkGroup) {
			if(!err && webLinkGroup) {
				console.log('How many web links: ' + webLinkGroup.WebLinks.length)
				for(var i = 0; i < webLinkGroup.WebLinks.length; i++) {
					var wl = webLinkGroup.WebLinks[i];
					
					wl.specs = [];
					var specsStr = wl.description2 === null ? '' : wl.description2;
					console.log(specsStr);
					var specsSplit = specsStr.split('|');
					for(var j = 0; j < specsSplit.length; j++) {
						var specSplit = specsSplit[j].split(':');
						var key = specSplit[0] ? specSplit[0].trim() : '';
						var value = specSplit[1] ? specSplit[1].trim() : '';
						if(key) {
							wl.specs.push({'key': key, 'value': value});
						}
					}
					wl.price1Formatted = accounting.formatMoney(wl.price1);
					wl.price2Formatted = accounting.formatMoney(wl.price2);
					
					console.log(wl);
				}

				return res.view({
					pagetitle: 'Gun Packages',
					webLinkGroup: webLinkGroup
				});
			} else {
				return res.view({
					pagetitle: 'Gun Packages',
					webLinkGroup: null
				});
			}
		});
	}
}