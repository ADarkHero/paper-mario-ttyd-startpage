function showBookmarks(page){
	const startPage = page * 7 - 7;
	const endPage = startPage + 7;
	
	console.log("Bookmark start: " + startPage);
	console.log("Bookmark end: " + endPage);
	
	// Read from local storage; Max 21 entries, every further entry gets discarded.
	const bookmark = localStorage.getItem("bookmark").split("\n");
	const bookmarkimg = localStorage.getItem("bookmarkimg").split("\n");
	
	let index = 1;
	
	for (let i = startPage; i < endPage; i++) {
		//Add to href
		const anchor = document.getElementById(`speech-bubble${index}`);
		if (anchor) {
			anchor.href = bookmark[i];
		}
	
		document.getElementById(`speech-bubble-img${index}`).src = bookmarkimg[i];
	
		console.log(`Added ${bookmark[i]} / ${bookmarkimg[i]} to speech-bubble${index}`);
		index++;
	}
	
	// Select all bookmark-page elements
  const allBookmarks = document.querySelectorAll("[id^='bookmark-page']");

  // Remove all active classes
  allBookmarks.forEach(el => el.classList.remove("a-active"));

  // Activate right bookmark page
  const target = document.getElementById(`bookmark-page${page}`);
  if (target) {
	target.classList.add("a-active");
  }
}

showBookmarks(1);