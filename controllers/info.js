const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class InformationController extends TelegramBaseController {
    constructor(mysqlClient) {
        super();
        this._mysqlClient = mysqlClient;
    }

    infoHandler($) {
        let sql = 'SELECT * FROM Usuario';
        let msg = '';
        this._mysqlClient.query(sql, (err, rows) => {
            if (err) throw err;
            for (var i = 0; i < rows.length; i++) {
                msg += rows[i].nombre + '\n';
            }
            $.sendMessage(msg);
        });
    }

    get routes() {
        return {
            'infoCommand': 'infoHandler',
        }
    }
}

module.exports = mysqlClient => new InformationController(mysqlClient);
