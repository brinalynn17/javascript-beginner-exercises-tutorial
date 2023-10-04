// Your code here:
function singBottlesOfMilk() {
    for (let bottles = 99; bottles >= 0; bottles--) {
      if (bottles > 1) {
        console.log(`${bottles} bottles of milk on the wall, ${bottles} bottles of milk.`);
        console.log(`Take one down and pass it around, ${bottles - 1} bottles of milk on the wall.`);
      } else if (bottles === 1) {
        console.log("1 bottle of milk on the wall, 1 bottle of milk.");
        console.log("Take one down and pass it around, no more bottles of milk on the wall.");
      } else {
        console.log("No more bottles of milk on the wall, no more bottles of milk.");
        console.log("Go to the store and buy some more, 99 bottles of milk on the wall.");
      }
    }
  }
  
  // Call the function to print the lyrics
  singBottlesOfMilk();
  