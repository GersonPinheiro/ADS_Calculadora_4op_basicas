function soma() {
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let r = parseInt(v1) + parseInt(v2);
    alert ("A SOMA dos valores é " + r)
}
function subtração() {
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let r = parseInt(v1) - parseInt(v2);
    alert ("A SUBTRAÇÃO dos valores é " + r)
}
function multiplicação() {
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let r = parseInt(v1) * parseInt(v2);
    alert ("A MULTIPICAÇÃO dos valores é " + r)
}
function divisão() {
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let r = parseInt(v1) / parseInt(v2);
    alert ("A DIVISÃO dos valores é " + r)
}