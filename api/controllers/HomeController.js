module.exports = {
	index: function(req, res) {
		return res.view({
			pagetitle: 'Welcome',
			layout: 'shared/layout'
		});
	}
}