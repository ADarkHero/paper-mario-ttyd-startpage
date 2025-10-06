if(!(localStorage.getItem("textfile") === null || localStorage.getItem("textfile") === "null")){
	fetch(localStorage.getItem("textfile"))
	  .then(res => res.text())
	  .then(text => {
		if (text.trim().length === 0 || text.trim() === "null") {
			console.log("The text file is empty...");
			document.getElementById("notesContainer").classList.add("hidden-force");
		} else {
			console.log("File content: ", text);
			const htmlText = text.replace(/\r?\n/g, "<br>");
			const el = document.getElementById(`notesTxt`);
			if (el) el.innerHTML  = htmlText;
		}
	  })
	  .catch(err => console.error("readtxt.js Error: ", err));
}
