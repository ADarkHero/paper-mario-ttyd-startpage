function addToToDo() {
	let todo = prompt("What should be added to the ToDo list?");
	
	if (todo !== null) {
		console.log("Input of ToDo: " + todo);
		todosLocal = localStorage.getItem("todo");
		if (todo !== null && todo !== "") {
			todoStore = todosLocal + "$$$" + todo;
		}
		else{
			todoStore = todo;
		}
		
		//Get id, because we need it to add it to html
		const todosSplit = todosLocal.split("$$$");
		
		addToDoToHTML(todo, todosSplit.length);
	  
		localStorage.setItem("todo", todoStore);
	  
		console.log(todoStore);
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
  
function addToDoToHTML(todo, index){
	const text = `<div class="row d-flex align-items-center background-paper pt-1 pb-1 mt-1" id="todo${index}">
						<div class="col-md-2">
							<img src="img/menu/badges/${getRandomBadge()}" />
						</div>
						<div class="col-md-8 text-start">
							${todo}
						</div>
						<div class="col-md-2 text-start">
							<a href="#" onclick="deleteToDo(${index})"><img src="img/menu/delete.png" /></a>
						</div>
					</div>`;
	
		const div = document.getElementById("todos");
		div.insertAdjacentHTML("beforeend", text);
}
  
function getRandomBadge(){
	const badges = [
	  "biri_3d.png",
	  "bougyo_c_3d.png",
	  "bougyo_pura_3d.png",
	  "butu_dake_3d.png",
	  "c_modoru_3d.png",
	  "charge01_3d.png",
	  "charge01_B_3d.png",
	  "charge01_O_3d.png",
	  "d_kaesi_3d.png",
	  "dameji_f_3d.png",
	  "dokan_jump_3d.png",
	  "emblem_gold_3d.png",
	  "emblem01_3d.png",
	  "emblem02_3d.png",
	  "f_fueru_3d.png",
	  "f_suitoru_3d.png",
	  "funy_jump_3d.png",
	  "gatun_jump_3d.png",
	  "h_deru_3d.png",
	  "h_fueru_3d.png",
	  "h_suitoru_3d.png",
	  "hanma_dake_3d.png",
	  "hanma01_3d.png",
	  "hanma02_3d.png",
	  "hanma03_3d.png",
	  "hanma04_3d.png",
	  "hanma05_3d.png",
	  "hanma06_3d.png",
	  "hanma07_3d.png",
	  "hanma08_3d.png",
	  "hanma09_3d.png",
	  "happy_f_3d.png",
	  "happy_h_3d.png",
	  "hpmieru_3d.png",
	  "itika_3d.png",
	  "kantan_3d.png",
	  "kekko_3d.png",
	  "kiken_3d.png",
	  "mini_jump_3d.png",
	  "muzu_3d.png",
	  "namakura_3d.png",
	  "nanika_3d.png",
	  "ni_item_3d.png",
	  "nibai_dameji_3d.png",
	  "nicebougyo_3d.png",
	  "p_ganba_3d.png",
	  "p_ganba_A_3d.png",
	  "p_ganba_D_3d.png",
	  "p_ganba_K_3d.png",
	  "p_luck_3d.png",
	  "p_mamoru_3d.png",
	  "party01_3d.png",
	  "party02_3d.png",
	  "party03_3d.png",
	  "party04_3d.png",
	  "party05_3d.png",
	  "party06_3d.png",
	  "party06_A_3d.png",
	  "party06_D_3d.png",
	  "party06_K_3d.png",
	  "party07_3d.png",
	  "party08_3d.png",
	  "party09_3d.png",
	  "party10_3d.png",
	  "party11_3d.png",
	  "party12_3d.png",
	  "party13_3d.png",
	  "party14_3d.png",
	  "party15_3d.png",
	  "party16_3d.png",
	  "party17_3d.png",
	  "party18_3d.png",
	  "party19_3d.png",
	  "party19_B_3d.png",
	  "party19_O_3d.png",
	  "party21_3d.png",
	  "party22_3d.png",
	  "party23_3d.png",
	  "party24_3d.png",
	  "party25_3d.png",
	  "pawer_3d.png",
	  "pikyo01_3d.png",
	  "pikyo02_3d.png",
	  "pikyo03_3d.png",
	  "pikyo04_3d.png",
	  "pikyo05_3d.png",
	  "ren_jump_3d.png",
	  "s_apiru_3d.png",
	  "s_p_apiru_3d.png",
	  "san_item_3d.png",
	  "sensei_3d.png",
	  "setuyaku_3d.png",
	  "subayaku_3d.png",
	  "tama_jump_3d.png",
	  "tama_luck_3d.png",
	  "toge_3d.png",
	  "tugi_jump_3d.png"
	];

	const randIndex = Math.floor(Math.random() * badges.length);
	const randBadge = badges[randIndex];
	
	return randBadge;
}

const todos = localStorage.getItem("todo").split("$$$");

for (let i = 0; i < todos.length; i++) {
  console.log("ToDo #" + (i + 1) + ": " + todos[i]);
  
  //If the todo is not null, add it to the end of the todo container
  if (todos[i] !== null && todos[i] !== "null") {
	  addToDoToHTML(todos[i], i);	
	}
  console.log(todos[i]);
}
