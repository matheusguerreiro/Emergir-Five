function gerarArrayUrls(arrayLinks) {
  // Object.values(arrayLinks)
  return arrayLinks.map(objLink => Object.values(objLink).join())
}

function validaUrls(arrayLinks) {
  return gerarArrayUrls(arrayLinks)
}

export default validaUrls