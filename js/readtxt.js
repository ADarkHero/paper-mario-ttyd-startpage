fetch(localStorage.getItem("textfile"))
  .then(res => res.text())
  .then(text => {
	if (text.trim().length === 0) {
		console.log("Die notes.txt Datei ist leer...");
		document.getElementById("notesContainer").classList.add("hidden-force");
	} else {
		console.log("Dateiinhalt: ", text);
		const htmlText = text.replace(/\r?\n/g, "<br>");
		const el = document.getElementById(`notesTxt`);
		if (el) el.innerHTML  = htmlText;
	}
  })
  .catch(err => console.error("Fehler: ", err));