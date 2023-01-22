console.log('çalculadora');
let variable1 = '';
let variable2 = '';
let operatoria = '';
let cambio = true;
let resultadoFinal = 0;
let operacionRe = '';

const ecuacion = document.getElementById('ecuacion');
const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.boton');
const operacion = document.querySelectorAll('.operacion');
const result = document.getElementById('resultado');
const decimal = document.getElementById('decimal');

const mostrar = (valor) => {
  operacionRe = operacionRe + valor.target.innerText;
  ecuacion.innerText = operacionRe;

  if (cambio) {
    variable1 = variable1 + valor.target.innerText;
    console.log(variable1);
  } else {
    variable2 = variable2 + valor.target.innerText;
    console.log(variable2);
  }
};

const operacionMat = (valor) => {
  operatoria = valor.target.innerText;
  operacionRe = operacionRe + valor.target.innerText;
  ecuacion.innerText = operacionRe;
  cambio = false;
};

const resultadoMat = () => {
  switch (operatoria) {
    case '+':
      resultadoFinal = Number(variable1) + Number(variable2);
      resetear();
      console.log(resultadoFinal);
      pantalla.innerText = resultadoFinal;
      break;
    case '-':
      resultadoFinal = Number(variable1) - Number(variable2);
      resetear();
      console.log(resultadoFinal);
      pantalla.innerText = resultadoFinal;
      break;
    case '*':
      resultadoFinal = Number(variable1) * Number(variable2);
      resetear();
      console.log(resultadoFinal);
      pantalla.innerText = resultadoFinal;
      break;
    case '/':
      resultadoFinal = Number(variable1) / Number(variable2);
      resetear();
      console.log(resultadoFinal);
      pantalla.innerText = resultadoFinal;
      break;
  }
};

const resetear = () => {
  variable1 = '';
  variable2 = '';
  operatoria = '';
  cambio = true;
  operacionRe = '';
};

botones.forEach((elemento) => {
  elemento.addEventListener('click', mostrar);
});
operacion.forEach((elementoOperacion) => {
  elementoOperacion.addEventListener('click', operacionMat);
});
result.addEventListener('click', resultadoMat);
decimal.addEventListener('click', mostrar);
