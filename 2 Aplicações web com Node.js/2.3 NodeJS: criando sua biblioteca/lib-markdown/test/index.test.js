// colocar dentro de scripts no arquivo package.json "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"

import pegaArquivo from "../index.js";

const arrayResultado = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo', () => {
  it('deve ser uma função', () => {
    expect(typeof(pegaArquivo)).toBe('function')
  })
  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('/home/mgf/Documents/GitHub/Emergir-Five/2 Aplicações web com Node.js/2.3 NodeJS: criando sua biblioteca/lib-markdown/test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResultado)
  })
  it('deve retornar a mensagem "não há links"', async () => {
    const resultado = await pegaArquivo('/home/mgf/Documents/GitHub/Emergir-Five/2 Aplicações web com Node.js/2.3 NodeJS: criando sua biblioteca/lib-markdown/test/arquivos/texto1_semlinks.md')
    expect(resultado).toBe("não há links")
  })
})
