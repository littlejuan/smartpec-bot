module.exports = {
    dev: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        db: process.env.DB_LINK,
        user: process.env.DB_USER,
        password: process.env.DB_USER_PASSWORD,
        token: process.env.BOT_TOKEN
    },
    prod: {
        /**
         * TODO
         */
    }
}