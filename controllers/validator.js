const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

const form = require('../utilities/form');

class ValidatorController extends TelegramBaseController {
    constructor(mysqlClient) {
        super();
        this._mysqlClient = mysqlClient;
    }

    validatorHandler($) {
        $.runForm(form[1], (result) => {
            /*let sql = 'INSERT INTO Usuario SET ?';
            this._mysqlClient.query(sql, result, (err, res) => {
                if (err) throw err;
                console.log('Insertado:', res.insertId);
                $.sendMessage('Registro exitoso!');
            }); */
            console.log(result);
            $.sendMessage('Imagen enviada satisfactoriamente.');
        });
    }

    get routes() {
        return {
            'validatorCommand': 'validatorHandler',
        }
    }
}

module.exports = mysqlClient => new ValidatorController(mysqlClient);