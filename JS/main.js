import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

// launch app

document.addEventListener("readystatechange", (event) => {
  if(event.target.readyState ==="complete") {
    initApp();
  }
});

const initApp =() => {
//add lsitener


//actions

//load list object

//refresh the page

refreshThePage();

};

const refreshThePage = () => {
  clearListDisplay();
// render the list;
//clear items entry;
//set focus on items entry field;

};

const clearListDisplayFunction = () => {
  const parentElement =document.getElementById("listItems");
  deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
  let child = parentElement.lastEleemntChild;
  while (child) {
    parentElement.removeChild(child);
    child =parentElement.lastElementChild;
  }
};

const renderList = () => {

  const list =toDoList.getList();
  list.forEach((item)=> {
    buildListItem(item);
  });
};
