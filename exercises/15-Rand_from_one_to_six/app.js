function getRandomInt()
{
	const randomNumber = Math.random();

	const scaledNumber = Math.floor(randomNumber *6) +1;

	return scaledNumber;
}
console.log(getRandomInt());