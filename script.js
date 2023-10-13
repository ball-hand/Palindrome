function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return str === str.split("").reverse().join("");
  }

  function checkPalindrome() {
    const inputText = document.getElementById("inputText").value;
    const result = document.getElementById("result");
    if (isPalindrome(inputText)) {
      result.innerText = `${inputText} is a palindrome!`;
    } else{
      result.innerText = `${inputText} is not a palindrome.`;
    }


  }
