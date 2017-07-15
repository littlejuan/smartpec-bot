const Telegram = require('telegram-node-bot');
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(process.env.BOT_TOKEN, {
    workers: 1
});
const mysqlClient = require('./mysql.config');

//Controllers
const StartController = require('../controllers/start');
const SignupController = require('../controllers/signup')(mysqlClient);
const InformationController = require('../controllers/info')(mysqlClient);


tg.onMaster(() => {
    require('./express.config');
    mysqlClient.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
    });
});

tg.router
    .when(new TextCommand('/start', 'startCommand'), StartController)
    .when(new TextCommand('/registro', 'signupCommand'), SignupController)
    .when(new TextCommand('/info', 'infoCommand'), InformationController)    