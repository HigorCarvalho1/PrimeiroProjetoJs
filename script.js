let numero1 = prompt("Coloque o primeiro numero : ")
let numero2 = prompt("Coloque o segundo numero: ")
numero1 = Number(numero1)
numero2 = Number(numero2)
let soma = numero1 + numero2
alert(numero1 + numero2)
alert(numero1 - numero2)
alert(numero1 * numero2)
alert(numero1 / numero2)
alert(numero1 % numero2)
if(soma % 2 == 0  ) {
    alert("A soma dos dois numeros é par")
} else{
    alert( "A soma dos dois numeros é impar")
}
if(numero1 === numero2){
    alert("Os numeros escolhidos são iguais")
}else {
    alert("Os numeros escolhidos são diferentes")
}