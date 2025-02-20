const todolist=[];
rendertodolist();
function rendertodolist(){
    let todolisthtml=``;
    for (let i=0;i<todolist.length;i++){
    const todo=todolist[i];
    const html=`<p>${todo}</p>`;
    todolisthtml+=html;
    
}
console.log(todolisthtml);
document.querySelector('.js-todolist').innerHTML=todolisthtml;

}


function addTodo(){
    const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value;
    todolist.push(name);
    console.log(todolist);

    inputElement.value=[];
    rendertodolist();
}