document.addEventListener('keydown', () => {
  const search = document.getElementById('search');

  //Check if element exists
  if (search) {
	//Add cursor to text field
	if (typeof search.focus === 'function') {
	  search.focus();
	}
  }
});