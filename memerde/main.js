const list = [
    { name: "Create a post", status: "In progress", priority: "Low" },
    { name: "Test", status: "Done", priority: "Low" },
    { name: "Test1", status: "In Progress", priority: "Low" },
  ];
  
  const STATUS = {
    TO_DO: "To do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
  };
  
  const PRIORITY = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
  };
  
  const emptyTask = {
    name: "",
    status: STATUS.TO_DO,
    priority: PRIORITY.LOW,
  };
  
  function addTask(task, priority) {
    const newTask = emptyTask;
    newTask.name = task;
    if (isPriority(priority)) {
      newTask.priority = priority;
    }
    list.push(newTask);
  }
  
  function changeTask(id, name, status, priority) {
    if (isStatus(status) && isPriority(priority)) {
      list[id - 1].status = status;
      list[id - 1].priority = priority;
    } else {
      console.log("ничего не вышло опять");
      return;
    }
  
    list[id - 1].name = name;
  }
  
  function deleteTask(id) {
    list.splice(id, 1);
  }
  
  function isStatus(status) {
    if (
      status === STATUS.TO_DO ||
      status === STATUS.IN_PROGRESS ||
      status === STATUS.DONE
    ) {
      return true;
    }
  }
  
  function isPriority(priority) {
    if (
      priority === PRIORITY.HIGH ||
      priority === PRIORITY.MEDIUM ||
      priority === PRIORITY.LOW
    ) {
      return true;
    }
  }
  
  function showList() {
    for (const task of list) {
      console.log(task);
    }
  }
  
  addTask("Почесать ежа", PRIORITY.MEDIUM);
  changeTask("2", "Проветрить еще", STATUS.IN_PROGRESS, PRIORITY.HIGH);
  deleteTask(2);
  changeTask("1", "Проветрить", STATUS.DONE, PRIORITY.MEDIUM);
  showList();
  