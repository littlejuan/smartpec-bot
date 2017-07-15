const app = require('express')();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
    res.send('Hola Bot!');
});

app.listen(app.get('port'), () => {
    console.log('Bot corriendo en el puerto:', app.get('port'));
});