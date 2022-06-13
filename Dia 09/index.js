const numero = document.getElementById('numeroTabuada').value;
const btn = document.getElementById('btn');
const resultado = document.getElementById('resultadoTabuada');

function tabuada() {
    let tabuada = "";
    for (let i = 1; i <= 10; i++) {
         tabuada += `${numero} x ${i} = ${numero*i}</br>`
        
        resultado.innerHTML = tabuada;
    }
}



