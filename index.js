function isPalindrome(word) {
    if (word.length <= 1) {
      return true
    } else {
      if(word[0] === word[word.length -1]) {
        return true 
        isPalindrome(word.slice(1, -1))
      } else {
        return false
      }
    }
    
}
  /*Write your algorithm here

  
  */ 


/* 
  Add your pseudocode here

   function isPalindrone(word) {
    if the argument passed is a palindrome  return true 
    else the word is not a palindrome return false
  }

*/

/*
  Add written explanation of your solution here

  when a string is passed in the function read it forwards and backwards
  make sure the letters are the same both ways 
  if it matches return true
  if not return false 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome('mom'));
}

module.exports = isPalindrome;
