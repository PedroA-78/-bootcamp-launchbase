/* =========================================

    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a
    ==      Igual a
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !==     Diferente, inclusive do tipo

==========================================*/

/*
console.log(5 > 4) // true
console.log(5 < 4) // false
console.log(5 >= 4) // true
console.log(4 <= 4) // true

console.log(4 == "4") // true
console.log(4 === "4") // false
console.log(4 != "5") // true
console.log(4 !== "5") // true
*/

// DESAFIO 1
// Verificar se a pessoa é maior de 18 anos.
// se sim, permitir a entrada, se não, bloquear entrada.

// se a pessoa tive 17 anos, avisar
// para voltar quando fizer 18 anos.

const age = 17
if (age >= 18) {
    console.log("Entrada permitida!")
} else if (age == 17) {
    console.log("Volte quando fizer 18 anos!")
} else {
    console.log("Entrada bloqueada!")
}

/* =========================================

    OPERADORES LÓGICOS

    && "E" Todas as condições devem ser
    verdadeiras para que o retorno seja 
    true e bloco seja executado.

    || "OU" Ao menos uma das condições
    devem ser verdadeiras para que o 
    retorno seja true e bloco 
    seja executado.

    !  "NÃO" Inverte um condição. 

==========================================*/

/*
console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 == 7) // false

console.log(5 == 5 && 6 == 7) // true
console.log(6 == 5 && 6 == 7) // false

console.log(!true) // false
console.log(!false) // true
*/

/* =========================================

    OPERADORES ARITMÉTICOS

    *   Multiplicação
    /   Divisão
    %   Módulo(Resto da divisão)
    +   Adição
    -   Subtração

==========================================*/

/*
console.log(4 * 2) // 8
console.log(4 / 2) // 2
console.log(4 % 2) // 0 
console.log(4 + 2) // 6
console.log(4 - 2) // 2
*/