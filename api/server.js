const express = require('express')
const cors = require('cors')

const usersRouter = require('./users-router.js')
const server = express()

server.use(cors())
server.use(express.json())

server.use('/api', usersRouter)

server.get('/', (req, res, next) => {
	res.send("Users API")
	next()
})


module.exports = server