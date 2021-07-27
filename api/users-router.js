const express = require('express')

const Users = require('./users.js')

const router = express.Router()

router.use(express.json())

const idCounter = Users.length + 1

router.get('/users', (req, res, next) => {
	res.status(200).json(Users)
	next()
})

router.post('/register', (req, res, next) => {
	const { username, password } = req.body
	if (!username || !password) {
		res.status(400).json({ message: 'username and password are required' })
		next()
	} else {
		Users.push({ username: username, password: password, id: idCounter })
		res.status(201).json({ message: `new account created for ${username}` })
		next()
	}
})

router.post('/login', (req, res, next) => {
	const { username, password } = req.body

	if (!username || !password) {
		res.status(400).json({ message: 'username and password are required' })
		next()
	} else {
		const matches = Users.filter(account => account.username === username)
		if (matches.length > 0) {
			res.status(200).json({ message: `Welcome ${username}` })
			next()
		} else {
			res.status(400).json({ message: 'Account not found' })
			next()
		}
	}
})

module.exports = router