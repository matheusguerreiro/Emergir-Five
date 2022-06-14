const usuariosControlador = require('./usuarios-controlador');
// const passport = require('passport')
const middlewaresAutenticacao = require('./middlewares-autenticacao')

module.exports = app => {
  app
    .route('/usuario/login')
    .post(middlewaresAutenticacao.local, usuariosControlador.login)
  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id').delete(/* 3.5.6 passport.authenticate('bearer', {session: false}) 3.5.6 */middlewaresAutenticacao.bearer, usuariosControlador.deleta);
};
