

const hex=document.querySelector(".hex");
const btn=document.querySelector(".generate")
 const colorGenerateor = () => {
   const randomNumber=(Math.random()).toString(16).substring(2,8);
   hex.innerHTML="#"+ randomNumber;
   document.body.style.backgroundColor="#"+randomNumber;
 }

 btn.addEventListener("click",colorGenerateor);

// let color= (Math.random()).toString(16).substring(2,8);
//the 16 here represents base 16. so it will
//generate numbers from 0 to 9 and A-E just like
//base 16 That's what hex is about

//the substring will take the number generated and trancate it
//start from the first number which is 2 and end at position 8
//it's starting with 2 because that's where a letter starts from just like hec
// console.log(color);