//setting prompt
var prompt = require('prompt-sync')();

function view(counter){
  return '\nCount: '+counter.toString()+'\n\n (+) (-)\n\n\n(q) for quit\n\nWhat would you do? ';
}

/*function update(msg, counter){

}*/

function  app(count){
  let counter=count;
  let input;
  while(input!='q'){
    const currentView=view(counter);
    console.log(currentView)
    input=prompt('');
    
  }
}

app(0);