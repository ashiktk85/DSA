function reverse(s) {
    let str = [];
    for(let char of s) {
        str.push(char)
    }

    let reverse = '';

    while(str.length > 0) {
        reverse += str.pop();
    }

    return reverse;
}

console.log(reverse("ASHIK"))