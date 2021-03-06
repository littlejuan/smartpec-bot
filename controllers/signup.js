const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

const form = require('../utilities/form');

class SignupController extends TelegramBaseController {
    constructor(mysqlClient) {
        super();
        this._mysqlClient = mysqlClient;
    }

    signupHandler($) {
        $.runForm(form[0], (result) => {
            /*let sql = 'INSERT INTO Usuario SET ?';
            this._mysqlClient.query(sql, result, (err, res) => {
                if (err) throw err;
                console.log('Insertado:', res.insertId);
                $.sendMessage('Registro exitoso!');
            }); */
            console.log(result);
            $.sendMessage('Registro exitoso!');
            $.sendPhoto({ url: 'https://k61.kn3.net/AEB1D0A17.jpg', filename: 'AEB1D0A17.jpg'})

        });
    }

    get routes() {
        return {
            'signupCommand': 'signupHandler',
        }
    }
}

module.exports = mysqlClient => new SignupController(mysqlClient);
