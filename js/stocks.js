var stockStr = "";
	
		const apiKey = localStorage.getItem("alphavantage");
		const symbol = localStorage.getItem("stock");
		const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

		fetch(url)
		  .then(res => res.json())
		  .then(data => {
			const quote = data["Global Quote"];
			if (quote) {
				stockStr = stockStr + quote["05. price"] + " EUR" + "<br><small>";
			} else {
				console.log("Keine Daten gefunden");
				const rl = document.getElementById("stockValue");
				if (rl) rl.innerHTML  = "Rate limit...";
			}
		  })
		  .catch(err => console.error("Fehler beim Abrufen:", err));

		const url2 = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`;

		fetch(url2)
		  .then(res => res.json())
		  .then(data => {
			const series = data["Monthly Time Series"];
			if (!series) {
			  console.log("Keine Daten gefunden");
			  
			  return;
			}

			const dates = Object.keys(series).sort().reverse(); // Neueste zuerst
			const latest = parseFloat(series[dates[0]]["4. close"]);

			const getClose = (monthsAgo) => {
			  const targetDate = dates[monthsAgo];
			  return targetDate ? parseFloat(series[targetDate]["4. close"]) : null;
			};

			const changes = {
			  "1M": getClose(1),
			  "6M": getClose(6),
			  "1Y": getClose(12),
			  "5Y": getClose(60)
			};

			Object.entries(changes).forEach(([label, oldPrice]) => {
			  if (oldPrice) {
				const diff = latest - oldPrice;
				const percent = ((diff / oldPrice) * 100).toFixed(2);
				stockStr = stockStr + label + " " + percent + "% / ";
				console.log(`${label}: ${oldPrice.toFixed(2)} → ${latest.toFixed(2)} EUR (${percent}%)`);
			  } else {
				console.log(`${label}: Keine Daten verfügbar`);
			  }
			});
			
			stockStr = stockStr.replace("/ 1Y", "<br>1Y"); //Line break after two values
			stockStr = stockStr.slice(0, -3); //Remove unneccessary  / at the end of the string
			stockStr = stockStr + "</small>";
			const el = document.getElementById("stockValue");
			if (el) el.innerHTML  = stockStr;
		  })
		  .catch(err => console.error("Fehler beim Abrufen:", err));