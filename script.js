function toggleMode() {
  //pega html
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substitui a imagens
  if (html.classList.contains("light")) {
    // se tiver light mode , adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //
}
