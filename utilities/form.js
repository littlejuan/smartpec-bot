const form = [{
    nombre: {
        q: 'Ingresa tu nombre',
        error: 'Ops! Algo ha ido mal',
        validator: (message, callback) => {
            if (message.text) {
                callback(true, message.text)
                return
            }
            callback(false)
        }
    },

    telefono: {
        q: 'Ingresa tu número telefonico',
        error: 'Ops! Algo ha ido mal',
        validator: (message, callback) => {
            if (message.text) {
                callback(true, message.text)
                return
            }
            callback(false)
        }
    },
    pais: {
        q: 'Ingresa tu país de residencia',
        error: 'Ops! Algo ha ido mal',
        validator: (message, callback) => {
            if (message.text) {
                callback(true, message.text)
                return
            }
            callback(false)
        }
    },

    billetera: {
        q: 'Ingresa tu dirección de billetera Bitcoin',
        error: 'Ops! Algo ha ido mal',
        validator: (message, callback) => {
            if (message.text) {
                callback(true, message.text)
                return
            }
            callback(false)
        }
    },
    inversion: {
        q: 'Ingresa el valor de tu inversión',
        error: 'Ops! Algo ha ido mal',
        validator: (message, callback) => {
            if (message.text && !isNaN(message.text)) {
                callback(true, parseFloat(message.text))
                return
            }
            callback(false)
        }
    }
},
{
    img: {
        q: 'Envía una imagen de tu inversión',
        error: 'Ops! Algo ha ido mal',
        validator: (message, callback) => {
            if (message.messageId) {
                callback(true, message.messageId)
                return
            }
            callback(false)
        }
    },
}

]

module.exports = form;