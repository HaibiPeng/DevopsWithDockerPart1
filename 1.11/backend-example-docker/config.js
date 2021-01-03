const DB = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || process.env.DB_USERNAME,
    host: process.env.DB_HOST || 'localhost'
}

const PORT = process.env.PORT || 8000

const FRONT_URL = process.env.FRONT_URL || ""

const REDIS = process.env.REDIS

const REDIS_PORT = process.env.REDIS_PORT || 6379

const envs = {
    DB,
    PORT,
    FRONT_URL,
    REDIS,
    REDIS_PORT
}

console.log('ENV values set as follows:', envs)

module.exports = envs