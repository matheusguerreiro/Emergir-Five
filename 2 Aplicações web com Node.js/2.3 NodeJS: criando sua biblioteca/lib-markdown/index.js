/* 
 *  npm init -y
 *  npm install chalk
 *  .gitignore
 *  add "type": "module" inside package.json
 *  const fs = require('fs')
 */

import chalk from 'chalk';
import fs from 'fs'

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  fs.readFile(caminhoDoArquivo, encoding, (_, conteudoDoArquivo) => {
    console.log(chalk.yellow(conteudoDoArquivo))
  })
}

pegaArquivo('./arquivos/texto1.md')