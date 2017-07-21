const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class MenuController extends TelegramBaseController {
    constructor(mysqlClient) {
        super();
        this._mysqlClient = mysqlClient;
    }

    menuHandler($) {
        $.runMenu({
            message: 'Menú:',
            layout: [1, 2, 2, 1],
            'Mi balance 💰': () => { },
            'Registrarse 📋': () => { },
            'Invitación 📧': () => { },
            'Invertir 💵': () => { },
            'Validar Inversión 💻': () => { },
            'Ayuda 💡': () => { },
        });
    }

    get routes() {
        return {
            'menuCommand': 'menuHandler',
        }
    }
}

module.exports = mysqlClient => new MenuController(mysqlClient);
