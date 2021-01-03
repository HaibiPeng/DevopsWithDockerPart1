const express = require('express')
const morgan = require('morgan')
const { PORT, FRONT_URL } = require('../config')
const messageRouter = require('./controllers/messageController')
const redis = require('./redis')
const fs = require('fs')

const app = express()

/**
 * Exercise 1.12 & 2.10 (possibly 2.8)
 */

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', FRONT_URL)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.use(express.json())
app.use(morgan('short'))

/**
 * Exercise 1.11
 */

app.get('/', (req, res) => {
  const logString =
    new Date().toLocaleString() + ': Connection received in root\n'
  fs.appendFileSync('logs.txt', logString)
  res.send('Port configured correctly, generated message in logs.txt')
})

/**
 * Exercise 1.12 & 2.8
 */

app.get('/ping', (req, res) => res.send('pong'))

/**
 * Exercise 2.5
 */

const reallySlowApi = async () => new Promise((resolve, reject) => setTimeout(() => resolve("pong"), 11 * 1000))

app.get('/slow', async (req, res) => {
    let response = await redis.getAsync("slow")
    console.log('Got from redis', response)
    if (!response) {
        response = await reallySlowApi()
        redis.setAsync("slow", response)
    }
    res.send(response)
})


/**
 * Exercise 2.6
 */
app.use('/messages', messageRouter)

/**
 * Exercise 2.8 pitfall
 */

app.get('/api*', (req, res) => {
  const hint = 'You are probably doing 2.8 and this path starts with /api. This backend serves requests sent to "/", for example "/ping". See hint at the end of 2.8 how to remove the path prefix "/api".'
  console.log(hint)
  res.send(hint)
})

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`)
})
