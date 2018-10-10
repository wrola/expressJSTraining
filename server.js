const app = require('./app');

app.set('port', process.env.PORT || 5001);

const server = app.listen(app.get('port'),() => {
    console.log('listening on $(server.adress().port}');
});