/*let text = prompt("Metn daxil edin:");
for (let i = 0; i < text.length; i++){
  if (text >= 0) {
    console.log("Reqem var");
  } else {
    console.log("Reqem yoxdur");
  }
}
*/

function number(phone){
  if(phone.startsWith("+7") && phone.length == 12){
    return true;
  } else{
    return false;
  }
}
console.log(number("+71234567890"));
console.log(number("+712345678"));