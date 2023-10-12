function calcular() {
  let inputPeso = document.getElementById("inputPeso");
  let inputAltura = document.getElementById("inputAltura");
  let labelAlerta = document.getElementById("alert");
  let status;

  let peso = parseFloat(inputPeso.value);
  let altura = parseFloat(inputAltura.value);

  let imc = parseFloat(peso / (altura * altura));


  if (parseFloat(imc) < parseFloat(18.5)) {
    status = `Seu IMC de ${imc.toFixed(2)} está abaixo do normal!`;
    labelAlerta.innerText = status;
    labelAlerta.style.display = "inline";
    labelAlerta.classList = "alert alert-secondary col-8 ";
  } else if (
    parseFloat(imc) >= parseFloat(18.5) &&
    parseFloat(imc) <= parseFloat(24.9)
  ) {
    status = `Seu IMC de ${imc.toFixed(2)} está na faixa normal!`;
    labelAlerta.innerText = status;
    labelAlerta.style.display = "inline";
    labelAlerta.classList = "alert alert-primary col-8 ";
  } else if (
    parseFloat(imc) >= parseFloat(25.0) &&
    parseFloat(imc) <= parseFloat(29.9)
  ) {
    status = `Seu IMC de ${imc.toFixed(2)} está na faixa do sobrepeso!`;
    labelAlerta.innerText = status;
    labelAlerta.style.display = "inline";
    labelAlerta.classList = "alert alert-light col-8 ";
  } else if (
    parseFloat(imc) >= parseFloat(30.0) &&
    parseFloat(imc) <= parseFloat(40.0)
  ) {
    status = `Seu IMC de ${imc.toFixed(2)} está na faixa da obesidade!`;
    labelAlerta.innerText = status;
    labelAlerta.style.display = "inline";
    labelAlerta.classList = "alert alert-warning col-8 ";
  } else if (parseFloat(imc) > parseFloat(40.0)) {
    status = `Seu IMC de ${imc.toFixed(2)} está na faixa da obesidade grave!`;
    labelAlerta.innerText = status;
    labelAlerta.style.display = "inline";
    labelAlerta.classList = "alert alert-danger col-8 ";
  } else {
    status = `Seu IMC de ${imc.toFixed(2)} não se enquadra em nenhuma faixa mapeada!`;
    labelAlerta.innerText = status;
    labelAlerta.style.display = "inline";
    labelAlerta.classList = "alert alert-dark col-8 ";
  }
}

function ocultarMensagem(){
	let labelAlerta = document.getElementById("alert");
	labelAlerta.style.display = "none";
}
