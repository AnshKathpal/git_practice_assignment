//You are given a number stored in a variable with the namenum
//Check if the number is a prime number or not
//If the value stored innum, is a prime number printYes, else printNo

let num = 13;
let count=0;
for(x=1;x<=num;x++){
  if(num%x==0){
    count++;
  }
}
if(count ==2){
  console.log("Yes");
}else {
  console.log("No");
}