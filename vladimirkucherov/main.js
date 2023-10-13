const ToDo = "To Do";
const In_Progress = "In Progress";
const Done = "Done";

const ToDoList = {
  "Strada ToDo List": In_Progress,
  "Coffee Time": ToDo,
  "Night Walk": ToDo,
  "Dinner": ToDo,
  "Sleep": ToDo
}

function addTask (name) {
  ToDoList[name] = ToDo;
}
function changeStatus (name,status) {
  ToDoList[name] = status;
}
function deleteTask(name) {
  delete ToDoList[name];
}

function showList() {
  let noDone = 0;



for (const name in ToDoList) {
  switch (ToDoList[name]) {
    case ToDo:
      console.log (`"${name}" : ${ToDoList[name]}`);
    break;
    case In_Progress: 
      console.log (`"${name}" : ${ToDoList[name]}\n`);
    break;
    case Done:
      console.log (`"${name}" : ${ToDoList[name]}`);
    break;
  }
}

if (noDone == 0) {
  console.log(`\n Nothing is done`);
}
}

changeStatus("Coffee Time","In Progress");
addTask ("Shower");
deleteTask ("Dinner");


showList ();
