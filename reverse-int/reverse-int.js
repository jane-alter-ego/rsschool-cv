/*Given: number, your task is to implement function that reverse digits of this number.

For example:

reverse(123); // 321
reverse(233); // 332
reverse(535); // 535
reverse(95034); // 43059*/

/*const reverse = (str) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        result = `${str[i]}${result}`;
        i++;
    };
    return result; 
};
console.log(reverse('12345'));*/

const reverse = (num) => {
    let str = num.toString();
    let i = 0;
    let result = '';
    while (i < str.length) {
        result = `${str[i]}${result}`;
        i++;
    };
    return parseInt(result); 
};
console.log(reverse(12345));