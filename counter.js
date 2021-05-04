//setting prompt
var prompt = require('prompt-sync')();

function view(counter){
  return '\nCount: '+counter.toString()+'\n\n (+) (-)\n\n\n(q) for quit\n\n';
}

function update(msg, counter){
  if(msg==='+'){
    counter+=1;
    return counter;
  }else if(msg==='-'){
    counter-=1;
    return counter;
  }else{
    return counter;
  }

}

function  app(count){
  let counter=count;
  let msg;
  while(msg!='q'){
    const currentView=view(counter);
    console.clear()
    console.log(currentView);
    msg=prompt('What would you do? ');
    counter=update(msg, counter);
  }
}

app(0);