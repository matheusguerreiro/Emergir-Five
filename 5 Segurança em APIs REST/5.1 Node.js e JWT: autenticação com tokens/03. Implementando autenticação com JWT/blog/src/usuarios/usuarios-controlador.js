const Usuario = require('./usuarios-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');

// 3.3 senha segura para o jwt
// 3.3.1
// terminal
//  node -e "console.log(require('crypto').randomBytes(256).toString('base64'))"
// 3.3.1
// 3.3.2 -> .env

// 3.2 gerando tokens
// 3.2.1
const jwt = require('jsonwebtoken')
function criaTokenJWT(usuario) {
  const payload = {
    id: usuario.id
  }
  const token = jwt.sign(payload, process.env.chave_jwt)
  return token
}
// 3.2.1

module.exports = {
  adiciona: async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
      const usuario = new Usuario({
        nome,
        email
      });

      await usuario.adicionaSenha(senha);

      await usuario.adiciona();

      res.status(201).json();
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  login: (req, res) => {
    // 3.2.2
    const token = criaTokenJWT(req.user)
    res.set('Authorization', token)
    // 3.2.2
    res.status(204).send()
  },

  lista: async (req, res) => {
    const usuarios = await Usuario.lista();
    res.json(usuarios);
  },

  deleta: async (req, res) => {
    const usuario = await Usuario.buscaPorId(req.params.id);
    try {
      await usuario.deleta();
      res.status(200).send();
    } catch (erro) {
      res.status(500).json({ erro: erro });
    }
  }
};
