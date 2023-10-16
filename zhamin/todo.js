const todoLIST={
    "write a post": "Done",
    "сar": "TO DO"
 
 };
 
 
 function addTask(name,status='announce the status'){
     todoLIST[name]= status;
 
 }
 function deleteTask(name){
     delete todoLIST[name];
 }
 function changeStatus(name,status){
     todoLIST[name]=status;
 }
 function showList(){
     console.log(todoLIST);
     let isAnyDone = false;
 
    for (let key in todoLIST) {
        if (todoLIST[key] === 'Done') {
           isAnyDone =  true;
           break;
    }}
    if (!isAnyDone) {
        console.log('Nothing is done');
     }
   
 }
 
 
     
    
   
                                                            
 
 addTask('write a post');
 addTask('сar');
 changeStatus('car','Done')
 changeStatus('write a post', )
 changeStatus('сar','TO DO')
 showList()