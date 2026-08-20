console.log("task 1")

function word(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length == 3){
            return arr[i];
        }
    }
}
console.log(word(['Green', 'Red', 'Blue']));

if (name.startsWith('A') || name.startsWith('a'))

console.log("task 2")

let names = ["Alex", "Jane", "John", "Ann", "Abby"];
let namesA = [];
names.forEach(name => {
    if(name.startsWith('A') || ('a')){
        namesA.push(name);
    }
});
console.log(namesA);