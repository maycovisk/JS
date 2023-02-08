function parimpar(n){
    if(n % 2 == 0){
        return 'O número é par!'
    }else{
        return'O número é impar!'
    }
}
console.log(parimpar(23))


function soma(n1 = 0, n2 = 0){
    return n1 + n2
}
console.log(soma(2, 5))


function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat*= c
    }
    return fat
}
console.log(fatorial(5))


function fatorialRecursividade(n){ /*RECURSIVIDADE*/
    if(n == 1){
        return 1
    }else{
        return n * fatorialRecursividade(n-1)
    }
}
console.log(fatorialRecursividade(5))