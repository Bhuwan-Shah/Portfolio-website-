const toggleBtn = document.getElementById('darkToggleBtn');

toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});