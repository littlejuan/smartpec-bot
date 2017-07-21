const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const dedent = require('dedent-js');

class StartController extends TelegramBaseController {

    startHandler($) {
        let firstName = $.message._from._firstName;
        let msg = dedent`Bienvenido ${firstName}! Comandos:
                        /menu - Desplega todas las opciones disponibles.`;
        $.sendMessage(msg);
    }
    get routes() {
        return {
            'startCommand': 'startHandler',
        }
    }
}

module.exports = new StartController();