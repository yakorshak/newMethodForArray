// Написать новый метод масива increment(value), который к каждому элементу масива будет добавлять value


Array.prototype.increment = function(increment){
  let arr = []
    for(let i of this){
      i += increment;
      arr.push(i);
    }
   return arr;
}

let arr = [1,2,3];

console.log(arr.increment(5));