 const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' }
];

function changeStatus(name, status) {

    const index = list.findIndex(task => task.name === name)
    if(index < 0){
        console.log('такой задачи не существует - changeStatus');
        return
    }
    list[index].status = status
}

function deleteTask(name) {

    const index = list.findIndex(task => task.name === name)
    if(index < 0){
     console.log('такой задачи не существует - deleteTask');
     return
    }
     list.splice(index, 1) 
}

function addTask(name, status, priority) { // пушу обьект в сам массив

    list.push({ name: name, status: status, priority: priority })
} 

function showList() {
    list.forEach(user => {
        console.log(user);
    });
}
 changeStatus('create a post','ndsdfge') 
 deleteTask('test') 
 addTask('передернуть', 'в процессе', 'очень важно')   
 showList() 
 




