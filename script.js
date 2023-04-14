function converter(){

    let cambioDolar = document.getElementById("inputDolar").value;
    let cambioEuro  = document.getElementById("inputEuro").value;
    let cambioLibra = document.getElementById("inputLibra").value;

    let totalReal = document.getElementById("inputReal").value;

    let totalDolar = totalReal / cambioDolar;
    let totalEuro  = totalReal / cambioEuro;
    let totalLibra = totalReal / cambioLibra;

    document.getElementById("inputTotalDolar").value = totalDolar.toFixed(2);
    document.getElementById("inputTotalEuro").value = totalEuro.toFixed(2);
    document.getElementById("inputTotalLibra").value = totalLibra.toFixed(2);
}