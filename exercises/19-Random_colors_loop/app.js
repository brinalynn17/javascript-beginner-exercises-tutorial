function getColor(colorNumber = 0) {
	// Make sure the parameter is a number and not a string by converting the value to an integer
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
	  case 1:
		return "red";
	  case 2:
		return "yellow";
	  case 3:
		return "blue";
	  case 4:
		return "green";
	  default:
		return "black";
	}
  }
  
  function getAllStudentColors() {
	for (let i = 0; i < 10; i++) {
	  // Generate a random number between 1 and 4
	  const randomNum = Math.floor(Math.random() * 4) + 1;
  
	  // Call getColor() to get the color based on the random number and print it
	  const color = getColor(randomNum);
	  console.log(color);
	}
  }
  
  // Call the function to print 10 random colors
  getAllStudentColors();
  