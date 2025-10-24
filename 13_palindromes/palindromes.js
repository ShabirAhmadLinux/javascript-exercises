const palindromes = function (str) {
  let palindrome="";
  let string1="";
  let string2="";
  for(let i=str.length-1;i>=0;i--){
    if((str.charAt(i)>='A'&&str.charAt(i)<='z')||(str.charAt(i)>='0'&&str.charAt(i)<='9')){
       string1+=str.charAt(i);
       string2=str.charAt(i)+string2;
    }
  }
  return(string1.toLowerCase()===string2.toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
