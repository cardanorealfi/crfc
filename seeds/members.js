db = connect('mongodb://127.0.0.1:27017/cfrc');

db.members.insertMany([
	{
		project: 'Landano',
		logo: {
			url: 'https://real-fi.org/assets/landano-logo-square.png',
			filename: 'Landano logo',
		},
		description:
			'Our project Landano notarizes land right records as Cardano NFTs as part of a comprehensive land administration system that is based on local land legislation, regulations, and customs as well ISO standards for record-keeping and land administration.',
		url: 'https://landano.io',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Commonlands',
		logo: {
			url: 'https://real-fi.org/assets/Commonlands-Logo-Large-Transparent.png',
			filename: 'Commonlands logo',
		},
		description:
			'Using Cardano / Atala Prism DIDs to issue land claim credentials for unbanked / underbanked individuals and communities to use to access microcredit.',
		url: 'http://www.commonlands.org',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'SIGNA',
		logo: {
			url: 'https://cdn-icons-png.flaticon.com/512/2990/2990815.png',
			filename: 'SIGNA logo',
		},
		description:
			'Tokenization of the pyrolysis technology to unlock the infinite source of energy and bring value to the people.',
		url: '',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Xerberus',
		logo: {
			url: 'https://real-fi.org/assets/Graph-Fuse-circle.png',
			filename: 'Xerberus logo',
		},
		description:
			'Xerberus evaluates Risk including on-chain and off-chain sources of risk.',
		url: 'http://www.xerberus.io',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Urban Farmer dApp',
		logo: {
			url: 'https://real-fi.org/assets/LGUF-Logos.png',
			filename: 'Urban Farmer logo',
		},
		description:
			'Our tool captures IoT data and manual entry data for Urban farming. The data will be used to improve farming practices. We are building a Cardano Sidechain to incentivize storing of this massive data set, and need to ensure privacy and monetization of the data in appropriate ways.',
		url: 'https://resi.works/',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'The Cadastro Popular',
		logo: {
			url: 'https://cdn-icons-png.flaticon.com/512/4350/4350287.png',
			filename: 'The Cadastro Popular placeholder icon',
		},
		description:
			'The Cadastro Popular is an independent and decentralised register of land rights built and maintained by Mozambican land users, applying the Community Land Value Chain (CaVaTeCo) approach to identify and map their rights. In managing these land rights through the Cardano blockchain, we aim to leverage the potential for making value flow along the chain and into the hands of those land holders, rewarding them for positive stewardship, the adoption of sustainable land and resource management and the provision of ecosystem services and global goods.',
		url: 'https://sites.google.com/terrafirma.co.mz/cavateco/cavateco',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Algae Token',
		logo: {
			url: 'https://real-fi.org/assets/Algae-Token-Logo.png',
			filename: 'Algae Token logo',
		},
		description: 'Bringing sustainable Algae Farming to the blockchain',
		url: 'https://algaetoken.com/',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Palmyra ComDEX',
		logo: {
			url: 'https://res.cloudinary.com/mayanhavoc/image/upload/v1680822083/palmyra_comdex_qlgmoe.jpg',
			filename: 'Palmyra ComDEX logo',
		},
		description:
			'Cardano-centric project - tokenized commodity exchange focussed on emerging markets and wholesale businesses (most are non-crypto native businesses).',
		url: 'https://www.zengate.global/products/palmyra-comdex',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Token Allies',
		logo: {
			url: 'https://res.cloudinary.com/mayanhavoc/image/upload/v1680821916/token_allies_logo_tnkalc.jpg',
			filename: 'Token Allies logo',
		},
		description:
			'Token Allies is a crowdfunding platform that aims to fund real world projects who live in scarcity by crypto hodlers that has abundance, the means to achieve this is via Tokenization of products or businesses. If we succeed we wil be building an incredible valuable bridge between the real world and the blockchain space, fostering adoption and real usage.',
		url: 'http://www.tokenallies.com',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'DirectEd Development Foundation',
		logo: {
			url: 'https://real-fi.org/assets/logo-395241.png',
			filename: 'DirectEd Development logo',
		},
		description:
			'DirectEd Development Foundation - direct donations for education. Our purpose is to identify high-potential students in sub-Saharan Africa and facilitate the resources needed for them to successfully enter a career as remote software engineers while promoting the use of scientifically rigorous impact evaluation.',
		url: 'https://directed.dev/',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'NEWM',
		logo: {
			url: 'https://real-fi.org/assets/NEWM_Logo.png',
			filename: 'NEWM logo',
		},
		description:
			'NEWM splits music intellectual property rights to bring artists and fans together like never before. Our system creates an entirely new category - ""listen to earn"" - for fans. To achieve this goal, we need to take care of music distribution, royalty collection, tokenization of streaming royaltis, and royalty distribution, and build bridges to Web 2.0. Therefore, we need to rethink every part of music distribution, as well as the royalty payment system, and fraud detection systems, etc. Music is consumed in the real world, this is where it all starts.',
		url: 'http://www.newm.io',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'IAMX',
		logo: {
			url: 'https://real-fi.org/assets/iamx.id-logo.png',
			filename: 'IAMX logo',
		},
		description:
			'Digital Identity and KYC are critical to linking blockchain to the real world',
		url: 'https://iamx.id',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'SMART Score',
		logo: {
			url: 'https://real-fi.org/assets/Oceidon-SMART-Score-Logo.png',
			filename: 'SMART Score logo',
		},
		description:
			'Oceidon SMART Score is a system that distils complex blockchain data into a singular, actionable behaviour score: Patent pending system and algorithms crunch all transaction data into an easy to use numeric representation; Allows for rapid smart contract or human assessment of on-chain behavior; Rapid assessment of behavior facilitates instant actions and decisions; Instant actions and decisions such as: smart contract gating, custom terms such as APYs, rewards etc.; Retains privacy of all wallet owners; Gives user insights without requiring specialized analytics training',
		url: 'https://smartcentral.io',
		status: 'Active',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'ImpactScope',
		logo: {
			url: 'https://real-fi.org/assets/impact-scope-black.png',
			filename: 'ImpactScope logo',
		},
		description:
			'The objective of ImpactScope is to develop methdologies and tools for social enterprises, leveraging Web3 to create sustainable impact. In doing so, one important area of focus is making sure that amount invested into impact projects are producing real impact. As such connecting the dots between the physical world and the blockchain. We have been an active member of the Cardano community for the last 6 months mostly through Cardano for Climate and engaging in the Cardano Summit in Lausanne',
		url: 'https://impactscope.com/',
		status: 'Voting member',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Earthtrust',
		logo: {
			url: 'https://real-fi.org/assets/earthtrust-green.png',
			filename: 'Earthtrust logo',
		},
		description:
			"Earthtrust is building a radically transparent verification network. We are building a globally dispersed, radically transparent verification network on the blockchain. Brands don’t like transparency, but their customers are demanding it, sick and tired of hearing one thing and seeing another that is a total disconnect. We are building a verification system for brands that have nothing to hide, that want to show their good work as well as their challenges, that want to build trust throughout their supply chain, all the way to the consumers who use their products and services. Certification has its place in this system, but it's only one small element and in time, it will become less and less helpful as its failures are exposed in this new, radically transparent world.",
		url: 'www.earthtrust.life',
		status: 'Voting member',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Reitcircles',
		logo: {
			url: 'https://real-fi.org/assets/logo_reitcircles_32x32.png',
			filename: 'Reitcircles logo',
		},
		description:
			'When people with positive home equity require a loan during difficult circumstances (job loss, medical expenses, or significant life events.), banks may deny the loan, or the interest rates may be too high. We present a better way to tap into the home equity using blockchain based tokens. And to simplify things we only discuss sale of homes/real estate where the owner has full ownership. Hence we do not discuss in the entire article, homes or assets which have mortgages or liabilities attached to them.',
		url: 'https://www.reitcircles.com',
		status: 'Inactive',
		author: '64358fbdb4fe603b7f5ddd89',
	},
	{
		project: 'Orcfax',
		logo: {
			url: 'https://real-fi.org/assets/Orcfax-logo.png',
			filename: 'Orcfax logo',
		},
		description:
			'Orcfax is an oracle that reports data about the real world to the Cardano blockchain. Orcfax publishes fact statements about "things" that happen within the space time continuum. Such as the results of a soccer game, the temperature in Nairobi, or a change in the exchange rate between ADA and USD. Oracles are a critical driver for RealFi and especially DeFi products connecting them with events and data about the real world.',
		url: 'https://orcfax.link',
		status: 'Inactive',
		author: '64358fbdb4fe603b7f5ddd89',
	},
]);
