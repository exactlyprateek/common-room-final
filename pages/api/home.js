// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([{
    avatar: '10',
    user: 'api woohoo',
    caption: 'lmao xd happy holi dsfsf fs fs fd  sd sdfsd ',
    likes: '34',
    comments: '18',
    location: '1',
    tag: 'environment'
  },
  {
    avatar: '11',
    user: 'octave',
    caption: 'lmao xd happy holi',
    likes: '26',
    comments: '13',
    location: '20',
    tag: 'music'
  },
  {
    avatar: '12',
    user: 'adventure_club',
    caption: 'lmao xd happy holi',
    likes: '84',
    comments: '34',
    location: '34',
    tag: 'travel'
  },
  {
    avatar: '13',
    user: 'techsoc',
    caption: 'lmao xd happy holi',
    likes: '24',
    comments: '12',
    location: '48',
    tag: 'tech'
  }])
}
