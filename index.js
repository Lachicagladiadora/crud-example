const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

const port = 3000

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const users = [
  {id: '1',name: "juan", age: "20", email: "juan2000@gmail.com"},
  {id: '2',name: "maria", age: "24", email: "maria2032@gmail.com"},
  {id: '3', name: 'Harper', age: '18', email: 'Charlotte107@hotmail.com'},
  {id: '4', name: 'Violet', age: '20', email: 'Claire893@gmail.com'},
  {id: '5', name: 'Lillian', age: '67', email: 'Kinsley288@gmail.com'},
  {id: '6', name: 'Adeline', age: '30', email: 'Ava558@yahoo.com'},
  {id: '7', name: 'Riley', age: '14', email: 'Riley931@outlook.com'},
  {id: '8', name: 'Stella', age: '19', email: 'Layla754@gmail.com'},
  {id: '9', name: 'Cora', age: '78', email: 'Valentina240@outlook.com'},
  {id: '10', name: 'Harper', age: '25', email: 'brooklyn@outlook.com'},
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// todo: update endpoint users variables
// get user by id

app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    const foundUser = users.find((c)=>c.id===userId)
    res.json(foundUser ?? null)
  })

app.get('/users', (req, res) => {
  // TODO: get user from DB
  res.json(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body.user;
    // TODO: create user on DB
    console.log('1', req.body)
    console.log('2', newUser)
    res.json({id:`${Math.round(Math.random()*1000)}`,...newUser})
})

app.put('/users/:id', (req, res) => {
    const userId = req.params.id
    const updateUser = req.body.user;
    // TODO: update user on DB
    res.json({id:userId,...updateUser})
})

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id
    // TODO: update user on DB
    // {data,state,message}
    res.status(200).json({success:true,message:`user with ${userId} was removed`})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})