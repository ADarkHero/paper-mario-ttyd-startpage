fetch(localStorage.getItem("budget"))
  .then(res => res.text())
  .then(text => {
	if (text.trim().length === 0 || text.trim() === "null") {
		console.log("The budget file is empty...");
		document.getElementById("notesContainer").classList.add("hidden-force");
	} else {
		console.log("Budget file content: ", text);
		const htmlText = text.replace(/\r?\n/g, "<br>");
		const el = document.getElementById(`budget`);
		if (el) el.innerHTML  = htmlText;
	}
  })
  .catch(err => console.error("budget.js Error: ", err));