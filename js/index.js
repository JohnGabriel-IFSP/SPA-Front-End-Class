function openMenu() {
  document.getElementById("main-nav").style.display = "block";
  document.getElementById("btnOpenMenu").style.display = "none";
  document.getElementById("root").style.marginLeft = "200px";
  document.getElementById("main-page").style.marginLeft = "0px";
}

function closeMenu() {
  document.getElementById("main-nav").style.display = "none";
  document.getElementById("btnOpenMenu").style.display = "block";
  document.getElementById("root").style.marginLeft = "0px";
  document.getElementById("main-page").style.marginLeft = "50px";
}

setTimeout(() => {
  const titulo = document.querySelector("h1");
  typeWritter(titulo);
}, 15);

function typeWritter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}
