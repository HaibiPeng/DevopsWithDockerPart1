const express = require('express')
const fs = require('fs')
const models = require('../db/models')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const message = req.body.message || 'Empty message'
    const logString = new Date().toLocaleString() + ': ' + message + '\n'
    fs.appendFileSync('logs.txt', logString)

    if (!models.Message.sequelize) return res.status(503).send('[Exercise 2.6+] No database connection')
    models.Message.create({
      body: message,
    })
    res.sendStatus(201)
  } catch (err) {
    console.log(err)
    console.log('[Exercise 2.6+] Database connection suddenly dropped.')
    res.sendStatus(500)
  }
})

router.get('/', async (req, res) => {
  try {
    if (!models.Message.sequelize) return res.status(503).send('[Exercise 2.6+] No database connection')
    const messages = await models.Message.findAll()
    res.send(messages)
  } catch (err) {
    console.log(err)
    console.log('[Exercise 2.6+] Database connection suddenly dropped.')
    res.sendStatus(500)
  }
})


module.exports = router