const openModalButtons = document.querySelectorAll('.open-modal'); // Вибираємо всі елементи
const closeModalWindow = document.querySelector('.close-join-modal'); // Кнопка закриття вікна
const modalWindow = document.querySelector('.modal-window'); // Модальне вікно

openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modalWindow.classList.add('active');
    });
});

closeModalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
});



// Learn window
const openLearnButtons = document.querySelectorAll('.open-learn');
const closeLearnWindow = document.querySelector('.close-learn-modal');
const learnWindow = document.querySelector('.learn-window');

openLearnButtons.forEach(learnBtn => {
    learnBtn.addEventListener('click', (e) => {
        e.preventDefault();
        learnWindow.classList.add('active');
    });
});

closeLearnWindow.addEventListener('click', () => {
    learnWindow.classList.remove('active');
});