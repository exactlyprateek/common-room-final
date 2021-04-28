// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
		{
			avatar: '14',
			user: 'second',
			caption: 'find me',
			likes: '56',
			comments: '12',
			location: '55',
			tag: 'tag1'
		},
		{
			avatar: '15',
			user: 'well welll wellw khisid',
			caption: 'lmao xd happy holi',
			likes: '13',
			comments: '24',
			location: '67',
			tag: 'tah2'
		},
		{
			avatar: '16',
			user: 'third',
			caption: 'lmao xd happy holi',
			likes: '22',
			comments: '0',
			location: '73',
			tag: 'tah2'
		},
		{
			avatar: '17',
			user: 'fourth',
			caption: 'lmao xd happy holi',
			likes: '26',
			comments: '6',
			location: '86',
			tag: 'travel'
		},
		{
			avatar: '18',
			user: 'techsoc',
			caption: 'lmao xd happy holi',
			likes: '16',
			comments: '10',
			location: '94',
			tag: 'tech'
		}
	])
}
