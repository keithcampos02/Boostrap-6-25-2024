console.log("funcionando calculadora")




function sumar(event) {
    event.preventDefault();
    const Num1 = document.getElementById("Num1")
    const Num2 = document.getElementById("Num2")
    const Resultado = document.getElementById("Resultado");

    let calculo = parseFloat(Num1.value) + parseFloat(Num2.value) ;
    Resultado.textContent = `El resultado es ${calculo}`

}

function restar(event) {
    event.preventDefault();
    const Num1 = document.getElementById("Num1")
    const Num2 = document.getElementById("Num2")
    const Resultado = document.getElementById("Resultado");

    let calculo = parseFloat(Num1.value) - parseFloat(Num2.value) ;
    Resultado.textContent = `El resultado es ${calculo}`

}

