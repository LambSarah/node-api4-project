require('dotenv').config()

const server = require('./api/server.js')

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8800

server.listen(port, () => {
	console.log(`**^^^^^Server listening on http://localhost:${port}^^^^^**`)
})