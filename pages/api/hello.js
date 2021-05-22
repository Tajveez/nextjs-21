// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ user: [{
    name: 'John Doe',
    age: '25',
    card: '0'
  },
  {
    name: 'Jane Doe',
    age: '23',
    card: '0'
  }] })
}
