function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return str === str.split("").reverse().join("");
  }

  function checkPalindrome() {
    const inputText = document.getElementById("inputText").value;
    const result = document.getElementById("result");
    if (isPalindrome(inputText)) {
      result.innerText = `${inputText} is a palindrome!`;
    } else if(isPalindrome(inputText)){
      result.innerText = `${inputText} is not a palindrome.`;
    }else{
        result.innerText = `Please give me a word.`;
    }
  }
