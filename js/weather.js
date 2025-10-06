async function getWeather() {
	const today = new Date();
	const sixDaysLater = new Date();
	sixDaysLater.setDate(today.getDate() + 6);

	// Formatierung als YYYY-MM-DD
	const formatDate = (date) => date.toISOString().split("T")[0];

	const lat = localStorage.getItem("lat");
	const lon = localStorage.getItem("lon");

	const url = `https://api.brightsky.dev/weather?lat=${lat}&lon=${lon}&date=${formatDate(today)}&last_date=${formatDate(sixDaysLater)}`;
	
	fetch(url)
  .then(res => res.json())
  .then(data => {
    const dailyStats = {};

    data.weather.forEach(entry => {
      const date = entry.timestamp.split("T")[0];
      const temp = entry.temperature;
      const icon = entry.icon;

      if (!dailyStats[date]) {
        dailyStats[date] = {
          min: temp,
          max: temp,
          iconCounts: {}
        };
      } else {
        dailyStats[date].min = Math.min(dailyStats[date].min, temp);
        dailyStats[date].max = Math.max(dailyStats[date].max, temp);
      }

      // Only icons that do NOT contain "night" count
      if (!icon.includes("night")) {
        dailyStats[date].iconCounts[icon] = (dailyStats[date].iconCounts[icon] || 0) + 1;
      }
    });

	let forecastIndex = 1;

    Object.entries(dailyStats).forEach(([date, stats]) => {
      // Get most frequent icon for background
      const mostFrequentIcon = Object.entries(stats.iconCounts)
        .reduce((a, b) => (b[1] > a[1] ? b : a), ["", 0])[0];
		
		const today = new Date().toISOString().split("T")[0];
		
		//Different logic for today
		//Today is presented differently - Longer String with all info and some temp orbs
		if (date === today) {
			//String display
			const text = `${stats.min} - ${stats.max} / ${mostFrequentIcon}`;		
			const el = document.getElementById(`weatherTodayStr`);
			if (el) el.innerHTML  = text;
			
			//Background
			const el1 = document.getElementById(`weatherToday`);
			el1.style.backgroundImage = `url('img/menu/weather/${mostFrequentIcon}.png')`;
			
			//Orbs
			var tempIcons = "";
		  
			//Clunky, but due to differnt icons, a for loop would be clunky as well
			  if(stats.max >= -10 && stats.min <= -10){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_cold.png" />';
			  }
			  if(stats.max >= -7.5 && stats.min <= -7.5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_cold.png" />';
			  }
			  if(stats.max >= -5 && stats.min <= -5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_cold.png" />';
			  }
			  if(stats.max >= -2.5 && stats.min <= -2.5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_cold.png" />';
			  }
			  if(stats.max >= 0 && stats.min <= 0){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_cold.png" />';
			  }
			  if(stats.max >= 2.5 && stats.min <= 2.5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_cold.png" />';
			  }
			  if(stats.max >= 5 && stats.min <= 5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/cold.png" />';
			  }
			  if(stats.max >= 7.5 && stats.min <= 7.5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/cold.png" />';
			  }
			  if(stats.max >= 10 && stats.min <= 10){
				var tempIcons = tempIcons + '<img src="img/menu/weather/cold.png" />';
			  }
			  if(stats.max >= 12.5 && stats.min <= 12.5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/cold.png" />';
			  }
			  if(stats.max >= 15 && stats.min <= 15){
				var tempIcons = tempIcons + '<img src="img/menu/weather/medium.png" />';
			  }
			  if(stats.max >= 17.5 && stats.min <= 17.5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/medium.png" />';
			  }
			  if(stats.max >= 20 && stats.min <= 20){
				var tempIcons = tempIcons + '<img src="img/menu/weather/hot.png" />';
			  }
			  if(stats.max >= 22.5 && stats.min <= 22.5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/hot.png" />';
			  }
			  if(stats.max >= 25 && stats.min <= 25){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_hot.png" />';
			  }
			  if(stats.max >= 27.5 && stats.min <= 27.5){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_hot.png" />';
			  }
			  if(stats.max >= 30 && stats.min <= 30){
				var tempIcons = tempIcons + '<img src="img/menu/weather/very_hot.png" />';
			  }
				
				const el2 = document.getElementById(`weatherOrbs`);
				weatherOrbs.innerHTML = tempIcons;
		}
		//Only show 5 days
		//We need to request 6 days, because we only get a hour of time for the last day
		else if(forecastIndex <= 5){
			const text = `${stats.min}<br>-<br>${stats.max}`;
			const el = document.getElementById(`weatherForecastStr${forecastIndex}`);
			if (el) el.innerHTML  = text;
			
			const el1 = document.getElementById(`weatherForecast${forecastIndex}`);
			el1.style.backgroundImage = `url('img/menu/weather/${mostFrequentIcon}.png')`;
			
			forecastIndex++;
		}

      console.log(`📅 ${date}`);
      console.log(`🌡️ Min: ${stats.min}°C, Max: ${stats.max}°C`);
      console.log(`🌤️ Most common icon (excluding "night"): ${mostFrequentIcon}`);
      console.log("–––––––––––––––––––––––––––––––––––––––––––");
    });
  })
  .catch(err => console.error("Error fetching weather data: ", err));
}


getWeather();
