var numbers = [1,2,4,5,7,8,5,6,20,10];
var copies = numbers.map(function(i){
	if(i%2===0) return i;
})

console.log(copies);//[ undefined, 2, 4, undefined, undefined, 8, undefined, 6, 20, 10 ]
console.log(numbers);


var copy = numbers.map(function(i){
	return i + 0.5;
})

console.log(copy);//[ 1.5, 2.5, 4.5, 5.5, 7.5, 8.5, 5.5, 6.5, 20.5, 10.5 ]
console.log(numbers);