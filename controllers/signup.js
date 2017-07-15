const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

const form = require('../utilities/form');

class SignupController extends TelegramBaseController {
    constructor(mysqlClient) {
        super();
        this._mysqlClient = mysqlClient;
    }

    signupHandler($) {
        $.runForm(form, (result) => {
            let sql = 'INSERT INTO Usuario SET ?';
            this._mysqlClient.query(sql, result, (err, res) => {
                if (err) throw err;
                console.log('Insertado:', res.insertId);
                $.sendMessage('Registro exitoso!');
            });
        });
    }

    get routes() {
        return {
            'signupCommand': 'signupHandler',
        }
    }
}

module.exports = mysqlClient => new SignupController(mysqlClient);
