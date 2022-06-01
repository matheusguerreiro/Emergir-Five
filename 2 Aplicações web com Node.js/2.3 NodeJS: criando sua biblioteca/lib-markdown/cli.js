import pegaArquivo from './index.js'
import chalk from 'chalk'
import validaUrls from './http-validacao.js'

const caminho = process.argv

async function processaTexto(caminhoDoArquivo) {
  const resultado = await pegaArquivo(caminhoDoArquivo[2])
  if (caminho[3] === 'validar') {
    console.log(chalk.yellow('links validados'), validaUrls(resultado))
  } else {
    console.log(chalk.yellow('lista de links'), resultado)
  }
}

processaTexto(caminho)
