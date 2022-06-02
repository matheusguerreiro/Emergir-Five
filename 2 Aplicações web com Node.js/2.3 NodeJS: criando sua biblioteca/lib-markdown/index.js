/* 
 * npm init -y
 * add "type": "module" inside package.json
 * npm install chalk
 * import chalk from 'chalk'
 * .gitignore
 * import fs from 'fs'
 * erro
 * regex
 * npm i node-fetch
 */

import chalk from 'chalk';
import fs from 'fs'

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}

/* function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  fs.readFile(caminhoDoArquivo, encoding, (erro, conteudoDoArquivo) => {
    if (erro) {
      trataErro(erro)
    }
    console.log(chalk.green(conteudoDoArquivo))
  })
} */

// agora de forma assincrona com promises .then(() => ...) .catch(() => ...)
/* function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((conteudoDoArquivo) => console.log(chalk.green(conteudoDoArquivo)))
    .catch((erro) => trataErro(erro))
} */

// agora com async await
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  try {
    const conteudoDoArquivo = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(conteudoDoArquivo)
  } catch (erro) {
    trataErro(erro)
  }
}

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const arrayResultados = []
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({[temp[1]]: temp[2]})
  }
  return arrayResultados.length === 0 ? chalk.red('não há links') : arrayResultados
}

export default pegaArquivo