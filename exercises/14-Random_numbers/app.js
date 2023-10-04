function getRandomInt(){

const randomDecimal = Math.random();
const scaledNumber = Math.floor(randomDecimal * 10) +1;

let randomNumber = Math.random(1,10);
	return scaledNumber;
}

console.log(getRandomInt());
