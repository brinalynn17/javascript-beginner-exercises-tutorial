function sing() {
    let lyrics = "";
    
    // Repeat "let it be" 10 times
    for (let i = 0; i < 10; i++) {
      lyrics += "let it be, ";
    }
  
    // Add the "there will be an answer" part
    lyrics += "there will be an answer, ";
  
    // Add the "whisper words of wisdom" line
    lyrics += "whisper words of wisdom, let it be";
  
    return lyrics;
  }
  
  // Call the sing() function to get the lyrics
  const lyrics = sing();
  console.log(lyrics);
  