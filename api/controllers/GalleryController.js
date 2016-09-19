module.exports = {
	index: function(req, res) {
		var records = [
			{
				id: '001',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/001.jpg',
				features: [
					'caliber:  6.5-284 WIN', 'action: Defiance Stryker Ridge', 'barrel: Bartlein 5R', 'stock: Maners MCS-EH2', 'trigger: Timney', 'optic: Huskemaw  5-20', 'muzzle brake: Best of the West Radial'
				]
			},
			{
				id: '002',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/002.jpg',
				features: [
					'caliber:  28 Nosler', 'action: Remington 700', 'barrel: Krieger', 'stock: H&S Precision Sporter', 'trigger: Remington'
				]
			},
			{
				id: '003',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/003.jpg',
				features: [
					'caliber: 300 WBY Ackley Improved', 'action: Defiance Deviant', 'barrel: Krieger', 'stock: Manners MSC-T2A', 'trigger: Jewell', 'optic: Huskemaw 5-20', 'muzzle brake: Hawkins Precision Ported'
				]
			},
			{
				id: '004',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/004.jpg',
				features: [
					'caliber:  6.5-284 Norma', 'action: Defiance Rebel', 'barrel: Krieger', 'stock: Best of the West Carbon Sporter', 'trigger: Jewell', 'optic: Huskemaw 5-20', 'muzzle brake: Hawkins Precision Radial'
				]
			},
			{
				id: '005',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/005.jpg',
				features: [
					'caliber: 280 Ackley Improved', 'action: Remington 700', 'barrel: krieger', 'stock: H&S Precision PSS-010', 'trigger: Timney', 'optic: Huskemaw 3-12'
				]
			},
			{
				id: '006',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/006.jpg',
				features: [
					'caliber:  28 Nosler', 'action: Defiance Rebel', 'barrel: Krieger', 'stock: Manners MCS-T', 'trigger: Jewell', 'optic: Huskemaw 5-20', 'muzzle brake: Hawkins Precision Ported'
				]
			},
			{
				id: '007',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/007.jpg',
				features: [
					'caliber: 22-250', 'action: Remington 700', 'barrel: Krieger', 'stock: H&S Presicision PST-034', 'trigger: Jewell', 'optic: Huskemaw 3-12', 'threaded for a supressor'
				]
			},
			{
				id: '008',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/008.jpg',
				features: [
					'caliber:  7mm Rem Mag', 'action: Defiance Rebel', 'barrel: Krieger', 'stock: Manners MCS-T', 'trigger: Jewell', 'optic: Huskemaw 5-20', 'muzzle brake: Best of the West Radial'
				]
			},
			{
				id: '009',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/009.jpg',
				features: [
					'caliber:  28 Nosler', 'action: Remington', 'barrel: Krieger', 'stock: Maners MCS-EH5', 'trigger: Timney', 'optic: Huskemaw  5-20', 'muzzle brake: Hawkins Precision Radial'
				]
			},
			{
				id: '010',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/010.jpg',
				features: [
					'caliber:  6.5-284 Norma', 'action: Remington 700', 'barrel: Krieger', 'stock: H&S Precision Sporter PSS010', 'optic: Huskemaw  5-20', 'trigger: Remington'
				]
			},
			{
				id: '011',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/011.jpg',
				features: [
					'caliber:  6.5-284 Norma', 'action: Remington 700', 'barrel: Krieger', 'stock: H&S Precision Sporter PSS010', 'optic: Huskemaw  5-20', 'trigger: Jewell'
				]
			},
			{
				id: '012',
				groups: 'rifles',
				primaryImageSrc: '/images/gallery/012.jpg',
				features: [
					'caliber:  6.5 Creedmoor', 'action: Defiance Deviant', 'barrel:  Bartlein', 'stock: McMillan A3-5', 'optic: Kahles  k624i  6-24x', 'trigger: Jewell', 'suppressor: Lane  Silencers'
				]
			},
			
			
			
			
			
			
			
			{
				id: '013',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/013.jpg',
				features: [
					'85 YARDS'
				]
			},
			{
				id: '014',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/014.jpg',
				features: [
					'225 YARDS'
				]
			},
			{
				id: '015',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/015.jpg',
				features: [
					'460 YARDS'
				]
			},
			{
				id: '016',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/016.jpg',
				features: [
					'685 YARDS'
				]
			},
			{
				id: '017',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/017.jpg',
				features: [
					'824 YARDS'
				]
			},
			{
				id: '018',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/018.jpg',
				features: [
					'650 YARDS'
				]
			},
			{
				id: '019',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/019.jpg',
				features: [
					'200 YARDS'
				]
			},
			{
				id: '020',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/020.jpg',
				features: [
					'215 YARDS'
				]
			},
			{
				id: '021',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/021.jpg',
				features: [
					'610 YARDS'
				]
			},
			{
				id: '022',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/022.jpg',
				features: [
					'330 YARDS'
				]
			},
			{
				id: '023',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/023.jpg',
				features: [
					'600 YARDS'
				]
			},
			{
				id: '024',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/024.jpg',
				features: [
					'225 YARDS'
				]
			},
			{
				id: '025',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/025.jpg',
				features: [
					'250 YARDS'
				]
			},
			{
				id: '026',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/026.jpg',
				features: [
					'450 YARDS'
				]
			},
			{
				id: '027',
				groups: 'hunting',
				primaryImageSrc: '/images/gallery/027.jpg',
				features: [
					'552 YARDS'
				]
			}
		]
		
		return res.view({
			pagetitle: 'Gun Packages',
			records: records
		});
	}
}