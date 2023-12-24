

'use strcit'

const isWeirdNumber = (num) => {
    let sumDivisors = 0;

    for (let i = 1; i < ; i++) {

        if (num % i === 0) sumDivisors += i;
    }

    return sumDivisors > num ? true : false;
}


console.log(isWeirdNumber(12));
console.log(isWeirdNumber(16));
console.log(isWeirdNumber(70));
console.log(isWeirdNumber(91));
console.log(isWeirdNumber(836));



const isPerfectNumber = (num) => {
    let sumDivisors = 0;

    for (let i = 1; i < num; i++) {
       if (num % i ===0) sumDivisors += i;
    
    }

    return sumDivisors === num ? true : false;
}

 console.log(isPerfectNumber(6));
 console.log(isPerfectNumber(16));
 console.log(isPerfectNumber(70));
 console.log(isPerfectNumber(496));
 console.log(isPerfectNumber(836));
