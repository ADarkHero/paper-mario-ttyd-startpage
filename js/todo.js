function addToToDo() {
	let todo = prompt("Was soll der ToDo Liste hinzugefügt werden?");
	
	if (todo !== null) {
	  console.log("Input of ToDo: " + todo);
	  todo = todo + "$$$" + localStorage.getItem("todo");
	  console.log("LocalStorage str of ToDo: " + todo);
	  localStorage.setItem("todo", todo);
	  
	  console.log(todo);
	} else {
	  console.log("Invalid input at todo list...");
	}
  }
  
  function deleteToDo(id) {
	const todos = localStorage.getItem("todo").split("$$$");
	
	todos.splice(id, 1); // Delete id from todo
	const todoString = todos.join("$$$");
	
	console.log(`"todo${id}"`);
	
	document.getElementById(`todo${id}`).classList.add("hidden-force");
	
	console.log(todoString);
	localStorage.setItem("todo", todoString);
  }
  

	const todos = localStorage.getItem("todo").split("$$$");
	

	for (let i = 0; i < todos.length; i++) {
	  console.log("ToDo #" + (i + 1) + ": " + todos[i]);
	  
	  //If the todo is not null, add it to the end of the todo container
	  if (todos[i] !== null && todos[i] !== "null") {
			const text = `<div class="row d-flex align-items-center background-paper pt-1 pb-1 mt-1" id="todo${i}">
							<div class="col-md-2">
								<img src="img/menu/badges/bougyo_pura_3d.png" />
							</div>
							<div class="col-md-8 text-start">
								${todos[i]}
							</div>
							<div class="col-md-2 text-start">
								<a href="#" onclick="deleteToDo(${i})"><img src="img/menu/delete.png" /></a>
							</div>
						</div>`;
		
			const div = document.getElementById("todos");
			div.insertAdjacentHTML("beforeend", text);
		}
	  console.log(todos[i]);
	}
