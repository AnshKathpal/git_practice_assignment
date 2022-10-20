//You are given a string, whose size is stored in a variable with the name N
//The string is stored in a variable with the name str
//PrintYes, if the string is a palindrome, else printNo


let str = "naman";
let bag1= "";
let bag2 = "";
for (x=0;x<=str.length;x++){
  bag1 += str[x];
}
for(x=str.length-1;x>=0;x--){
  bag2 += str[x];
}
if(bag1==bag2){
  console.log("Yes");
}else {
  console.log("No");
}