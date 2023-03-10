

function writeCards(names, cards){
  const messNames = [];    
  for (let i = 0; i < names.length; i++){
          let message = (`Thank you, ${names[i]}, for the wonderful ${cards} gift!`);
    
      messNames.push(message);           
      }
return messNames;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(number){

while (number >= 0){
console.log(number--);}
return
}
countDown (10);