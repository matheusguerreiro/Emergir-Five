const postsControlador = require('./posts-controlador');
// 3.5.4
const passport = require('passport')
// 3.5.4

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista)
    .post(
      // 3.5.5
      passport.authenticate('bearer', {session: false}),
      // 3.5.5
      postsControlador.adiciona
    );
};
