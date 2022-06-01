import pegaArquivo from './index.js'
import chalk from 'chalk'

const caminho = process.argv

async function processaTexto(caminhoDoArquivo) {
  const resultado = await pegaArquivo(caminhoDoArquivo[2])
  console.log(chalk.yellow('lista de links'), resultado)
}

processaTexto(caminho)
