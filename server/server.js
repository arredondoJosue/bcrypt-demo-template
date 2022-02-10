const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json()) //parses our data through jsonso server can understand it.

const ctrl = require('./controller')

app.post('/api/messages', ctrl.createMessage)

app.listen(4004, console.log('Your power level is over 4004!!!'))