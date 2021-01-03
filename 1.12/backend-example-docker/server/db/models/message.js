const { Model, STRING } = require('sequelize')
const sequelize = require('../connection')

class Message extends Model {}

if (sequelize) {
  Message.init(
    {
      body: {
        type: STRING,
      },
    },
    {
      underscored: true,
      sequelize: sequelize,
      modelName: 'message',
      tableName: 'messages',
    },
  )
}

module.exports = Message
