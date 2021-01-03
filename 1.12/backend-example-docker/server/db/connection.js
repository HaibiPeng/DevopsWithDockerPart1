const { DB } = require('../../config')
const Sequelize = require('sequelize')

let sequelize

if (DB.username && DB.password) {
  sequelize = new Sequelize(DB.database, DB.username, DB.password, {
    host: DB.host,
    dialect: 'postgres'
  });
} else {
  console.log('[Exercise 2.6+] DB_USERNAME and/or DB_PASSWORD are not defined, skipping db connection')
}

module.exports = sequelize
