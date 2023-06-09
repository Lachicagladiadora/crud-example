const express = require('express')
const bodyParser = require('body-parser')

const port = 3000

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// get user by id
app.get('/user/:id', (req, res) => {
    const x = req.params.id
    // TODO: get user from DB
    res.json({id:x,name:"juan",age:"20",email:"juan2000@gmail.com"})
  })

app.post('/user', (req, res) => {
    const newUser = req.body.user;
    // TODO: create user on DB
    res.json({id:Math.round(Math.random()*1000),...newUser})
})

app.put('/user/:id', (req, res) => {
    const userId = req.params.id
    const updateUser = req.body.user;
    // TODO: update user on DB
    res.json({id:userId,...updateUser})
})

app.delete('/user/:id', (req, res) => {
    const userId = req.params.id
    // TODO: update user on DB
    // {data,state,message}
    res.status(200).json({success:true,message:`user with ${userId} was removed`})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})