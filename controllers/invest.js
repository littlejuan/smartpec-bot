const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const dedent = require('dedent-js');

class InvestController extends TelegramBaseController {
    constructor(mysqlClient) {
        super();
        this._mysqlClient = mysqlClient;
    }

    investHandler($) {
        const msg = dedent`Realiza tu inversión a la siguiente dirección:

                        15rwghr74we4g10h8k8z9v
                        
                        O utiliza el siguiente código QR:`;
        const img = {
            url: 'https://k61.kn3.net/AEB1D0A17.jpg',
            filename: 'AEB1D0A17.jpg'
        }
        $.sendMessage(msg);
        $.sendPhoto(img);
    }

    get routes() {
        return {
            'investCommand': 'investHandler',
        }
    }
}

module.exports = mysqlClient => new InvestController(mysqlClient);
