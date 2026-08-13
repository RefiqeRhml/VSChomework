function isLucky(number) {
    let num = String(number);
    let sum1 = +num[0] + +num[1] + +num[2];
    let sum2 = +num[3] + +num[4] + +num[5];
    return sum1 == sum2;
}
console.log(isLucky(234801));
console.log(isLucky(236498));