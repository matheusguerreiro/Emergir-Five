const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
// 3.5 estratégia para jwt
// 3.5.1
const BearerStrategy = require('passport-http-bearer').Strategy
// 3.5.1

const Usuario = require('./usuarios-modelo')
const {InvalidArgumentError} = require('../erros')

const bcrypt = require('bcrypt')
// 3.5.3
const jwt = require('jsonwebtoken')
// 3.5.3

function verificaUsuario(usuario) {
  if (!usuario) {
    throw new InvalidArgumentError('Não existe usuário com esse e-mail.')
  }
}

async function verificaSenha(senha, senhaHash) {
  const senhaValida = await bcrypt.compare(senha, senhaHash)
  if (!senhaValida) {
    throw new InvalidArgumentError('E-mail ou senha inválidos.')
  }
}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha',
    session: false
  }, async (email, senha, done) => {
    try {
      const usuario = await Usuario.buscaPorEmail(email)
      verificaUsuario(usuario)
      await verificaSenha(senha, usuario.senhaHash)
      done(null, usuario)
    } catch (error) {
      done(error)
    }
  })
)

// 3.5.2
passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const payload = jwt.verify(token, process.env.chave_jwt)
        const usuario = await Usuario.buscaPorId(payload.id)
        done(null, usuario)
      } catch (error) {
        done(erro)
      }
    }
  )
)
// 3.5.2