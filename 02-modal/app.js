const openModal = document.querySelectorAll(".modal-btn")[0];

const dialog = document.querySelectorAll(".modal-overlay")[0];

const close = document.querySelectorAll(".close-btn")[0];

openModal.addEventListener('click', function(event) {
    dialog.classList.add('open-modal');
});

close.addEventListener('click', function(event) {
    dialog.classList.remove('open-modal');
});