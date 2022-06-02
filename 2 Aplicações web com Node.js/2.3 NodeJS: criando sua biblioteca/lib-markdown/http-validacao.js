import fetch from 'node-fetch'

function manejaErros(erro) {
  throw new Error(erro.message)
}

async function checaStatus(arrayUrls) {
  try {
    const arrayStatus = await Promise
    .all(arrayUrls
      .map(async(url) => {
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus
  } catch (erro) {
    manejaErros(erro)
  }
}

function gerarArrayUrls(arrayLinks) {
  return arrayLinks.map(objLink => Object.values(objLink).join())
}

async function validaUrls(arrayLinks) {
  const links = gerarArrayUrls(arrayLinks)
  const statusLinks = await checaStatus(links)
  
  // montando o objeto iterando o arrayLinks e o statusLinks
  const resultados = arrayLinks.map((obj, i) => ({
    ...obj,
    status: statusLinks[i]
  }))
  return resultados
}

export default validaUrls