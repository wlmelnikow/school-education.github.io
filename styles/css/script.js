const openModalButtons = document.querySelectorAll('.open-modal'); // Вибираємо всі елементи
const closeModalWindow = document.querySelector('.close-join-modal');
const modalWindow = document.querySelector('.modal-window');

openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modalWindow.classList.add('active');
    });
});

closeModalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
});
