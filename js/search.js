document.addEventListener('keydown', () => {
  const search = document.getElementById('search');
  const modal = document.querySelector('.modal.show'); // Bootstrap shows modals with .show

  // Only if modal is not shows
  if (!modal && search && typeof search.focus === 'function') {
    search.focus();
  }
});
