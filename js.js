let input = prompt("What would you like to do?")
const todos = []
while(input!=='quit'&& input!=='q'){
  if(input==='list'){
      console.log("*********************")
      for(let i=0;i<todos.length;i++){
        console.log(`${i}: ${todos[i]}`)
      }
      console.log("*********************")
  }else if(input==='new'){
      const newTodo=prompt('OK, what is the new todo?');
      todos.push(newTodo);
      console.log(`${newTodo}  added to list`)
  }else if(input==='delete'){
      const index=parseInt(prompt('OK, what is the index to DELETE?'));
      if(!Number.isNaN(index)){
        const deleted=todos.splice(index,1)
        console.log(todos)
      }
      else{
        console.log("UNKNOWN")
      }
  }
  input = prompt("What would you like to do?")
}
console.log("OK! THE END")