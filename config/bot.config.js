const Telegram = require('telegram-node-bot');
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(process.env.BOT_TOKEN, {
    workers: 1
});
const mysqlClient = require('./mysql.config');

//Controllers
const StartController = require('../controllers/start');
const SignupController = require('../controllers/signup')(mysqlClient);
const MenuController = require('../controllers/menu')(mysqlClient);
const ValidatorController = require('../controllers/validator')(mysqlClient);
const InvestController = require('../controllers/invest')(mysqlClient);


tg.onMaster(() => {
    require('./express.config');
 /*   mysqlClient.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
    }); */
});


tg.router
    .when(new TextCommand('/start', 'startCommand'), StartController)
    .when(new TextCommand('/menu', 'menuCommand'), MenuController)
    .when(new TextCommand('Registrarse 📋', 'signupCommand'), SignupController)
    .when(new TextCommand('Validar Inversión 💻', 'validatorCommand'), ValidatorController)
    .when(new TextCommand('Invertir 💵', 'investCommand'), InvestController)
    //.when(new TextCommand('/registro', 'signupCommand'), SignupController)
    //.when(new TextCommand('/info', 'infoCommand'), InformationController)    