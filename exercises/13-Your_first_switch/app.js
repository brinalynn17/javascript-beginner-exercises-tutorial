function getColor(selection)
selection = selection.toLowerCase();
{
	switch(selection){
		// Add more options here
		switch (selection){
			case "red":
				console.log('red')
			case "green":
				console.log('green')
			case "blue":
				console.log('blue')
				return true;
		default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}
if 

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(selection);

if(isAvailable){
	console.log('Good news! That color is available');
}else {
	console.log('We are sorry, that color is not available');
}