const form = document.querySelector(".card");
var numero1 = document.querySelector("#Numero1");
var numero2 = document.querySelector("#Numero2");
let botonSumar = document.querySelector(".ButtonSumar");
let pResult = document.querySelector(".result p");

botonSumar.addEventListener("click", botonOnClick);

function botonOnClick() {
  let resultado = parseInt(numero1.value, 10) + parseInt(numero2.value, 10);
  pResult.innerText = "Resultado : " + resultado;
}
