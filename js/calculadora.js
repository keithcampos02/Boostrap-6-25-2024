console.log("funcionando calculadora")




function calculadora2(event) {
    event.preventDefault(); 
    const Resultado = document.getElementById("Resultado");
    const Num1 = parseFloat(document.getElementById("Num1").value);
    const Num2 = parseFloat(document.getElementById("Num2").value);
    const operaciones = document.getElementById("operaciones").value;
    let calculo;
    switch (operaciones) {
        case"+":
            calculo = Num1 + Num2
            break;
            case"-":
            calculo = Num1 - Num2
            break;
            case"*":
            calculo = Num1 * Num2
            break;
            case"/":
            calculo = Num1 / Num2
            break;
    
        default:
            calculo = "operacion no valida"
            break;
    }
   Resultado.textContent = `El resultado es ${calculo}`

    console.log(operaciones)

}













