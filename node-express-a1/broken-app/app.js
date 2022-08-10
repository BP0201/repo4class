const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())



app.post('/', async function(req, res, next) {
  try {
    // let results = req.body.developers.map(async d => {
    //   return await axios.get(`https://api.github.com/users/${d}`);
    // });
    // let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    let results = req.body.developers
    let devArr = []

    for (let dev of results) {
      devArr.push(axios.get(`https://api.github.com/users/${dev}`))
    }

    let devs = await Promise.all(devArr)

    let out = devs.map(r => ({ name: r.data.name, bio: r.data.bio }));


    return res.json(out);

  } catch(e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  let status = err.status || 500
  let message = err.message
  return res.status(status).json({
    error: { message, status }
  })
})

app.listen(3000, () => {
  console.log("Server listening on port 3000")
});
