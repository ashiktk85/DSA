// product of array

// function pro(n) {
//     let res = 1;
//     for(let i = 1 ; i < n.length; i++) {
//         res = res * n[i];
//     }
//     return res
// }

// console.log(pro([1,2,3,4]));

// recursion for product of array

function recPro(arr) {
    if(arr.length == 0) {
        return true;
    }
    return arr[arr.length - 1 ] * recPro(arr.slice(0, arr.length - 1))
}
console.log(recPro([1,2,3,4]));

//*************************************************************************************************** */


// factorial recursion

function facRec(n) {
    if(n <= 1) {
        return true;
    }
    return n * facRec(n - 1)
}

console.log(facRec(5));
console.log(facRec(3));



///**************************************************************** */


// create an array with range of numbers , inp = start : end

function rangeNumbers(start, end) {
    if(start > end) {
        return [];
    } else {
        const numbers = rangeNumbers(start , end - 1);
        numbers.push(end);
        return numbers;
    }
}

console.log(rangeNumbers(1,7));


//******************************************************************************* */


// function isPalindrome(n) {
//     n = n.toString();
//     if(n.length == 0 || n.length == 1) {
//         return true;
//     }

//     if(n[0] === n[n.length - 1]) {
//         return isPalindrome(n.substring(1, n.length - 1))
//     } else {
//         return false;
//     }
    
// }

//  console.log(isPalindrome(11113)); 

function reverse(str) {
    str = str.split(' ').reverse().join(' ');

    return str

}



 console.log(reverse("hi ashik"));  



 function replaceAlphabets(str, n) {
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z]/.test(char)) {
            let index = alphabet.indexOf(char);
            let shiftedIndex = (index + n) % 26;
            let shiftedChar = alphabet[shiftedIndex];
            result += (str[i] === str[i].toUpperCase()) ? shiftedChar.toUpperCase() : shiftedChar;
        } else {
            result += str[i];
        }
    }
    
    return result;
}


let inputString = "Hello, World!";
let shiftValue = 3;
console.log(replaceAlphabets(inputString, shiftValue)); 
