const openModalWindow = document.getElementById('open-modal-window');
const closeModalWindow = document.getElementById('close-join-modal');
const modalWindow = document.getElementById('join-modal-window');
const openModalWindow2 = document.getElementById('open-modal-window-2');

openModalWindow.addEventListener('click', (e) => {
    e.preventDefault()
    const openModal = modalWindow.classList.add('active');
})

closeModalWindow.addEventListener('click', () => {
    const closeModal = modalWindow.classList.remove('active');
})

openModalWindow2.addEventListener('click', (e) => {
    e.preventDefault()
    const openModal = modalWindow.classList.add('active');
})

