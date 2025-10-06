document.getElementById('fullscreenFormModal').addEventListener('shown.bs.modal', function () {
  console.log("Formular was opened.");
  
  //Read data from local storage
  document.getElementById("titleInput").value = localStorage.getItem("title");
  document.getElementById("subtitleInput").value = localStorage.getItem("subtitle");
  document.getElementById("latInput").value = localStorage.getItem("lat");
  document.getElementById("lonInput").value = localStorage.getItem("lon");
  document.getElementById("stockInput").value = localStorage.getItem("stock");
  document.getElementById("alphavantageInput").value = localStorage.getItem("alphavantage");
  document.getElementById("textfileInput").value = localStorage.getItem("textfile");
  document.getElementById("bookmarkInput").value = localStorage.getItem("bookmark");
  document.getElementById("bookmarkimgInput").value = localStorage.getItem("bookmarkimg");
  document.getElementById("budgetInput").value = localStorage.getItem("budget");
  document.getElementById("todoInput").value = localStorage.getItem("todo");
  document.getElementById("psutilInput").value = localStorage.getItem("psutil");
  document.getElementById("psutilDisk1Input").value = localStorage.getItem("psutilDisk1");
  document.getElementById("psutilDisk2Input").value = localStorage.getItem("psutilDisk2");
  document.getElementById("psutilDisk3Input").value = localStorage.getItem("psutilDisk3");

});

document.getElementById("settingsForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Disable standard interaction

  console.log("Formular was sent.");

  // Sava data to local storage
  localStorage.setItem("title", document.getElementById("titleInput").value);
  localStorage.setItem("subtitle", document.getElementById("subtitleInput").value);
  localStorage.setItem("lat", document.getElementById("latInput").value);
  localStorage.setItem("lon", document.getElementById("lonInput").value);
  localStorage.setItem("stock", document.getElementById("stockInput").value);
  localStorage.setItem("alphavantage", document.getElementById("alphavantageInput").value);
  localStorage.setItem("textfile", document.getElementById("textfileInput").value);
  localStorage.setItem("bookmark", document.getElementById("bookmarkInput").value);
  localStorage.setItem("bookmarkimg", document.getElementById("bookmarkimgInput").value);
  localStorage.setItem("budget", document.getElementById("budgetInput").value);
  localStorage.setItem("todo", document.getElementById("todoInput").value);
  localStorage.setItem("psutil", document.getElementById("psutilInput").value);
  localStorage.setItem("psutilDisk1", document.getElementById("psutilDisk1Input").value);
  localStorage.setItem("psutilDisk2", document.getElementById("psutilDisk2Input").value);
  localStorage.setItem("psutilDisk3", document.getElementById("psutilDisk3Input").value);

  // Close form
  const modal = bootstrap.Modal.getInstance(document.getElementById("fullscreenFormModal"));
  modal.hide();

  // Display feedback
  alert("Thank you very much! Your data has been saved. The page will now be reloaded!");
  location.reload();
});