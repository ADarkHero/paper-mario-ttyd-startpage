function getVolumeData(volume, div, data){
	const vol = data.disks.find(disk => disk.mountpoint === volume);

	if (vol) {
	  const percentUsed = vol.percent_used;
	  const totalGB = vol.total_GB;
	  const usedGB = vol.used_GB;

	  console.log(`📂 /vol: ${usedGB} GB of ${totalGB} GB used (${percentUsed}%)`);
	  // HTML output
	  document.getElementById(div).innerHTML =
		`${usedGB} GB<br>${totalGB} GB<br><small>${percentUsed}%</small>`;
		
		//Write volume name to html
		document.getElementById(div + "_name").innerHTML = volume;
	} else {
	  console.warn("Mountpoint " + volume + " not found.");
	}
}
  
fetch(localStorage.getItem("psutil"))
   .then(response => response.json())
  .then(data => {
	getVolumeData(localStorage.getItem("psutilDisk1"), "volume1", data);
	getVolumeData(localStorage.getItem("psutilDisk2"), "volume2", data);
	getVolumeData(localStorage.getItem("psutilDisk3"), "volume3", data);
  })
  .catch(error => {
	console.error("Error requiering data: ", error);
  });