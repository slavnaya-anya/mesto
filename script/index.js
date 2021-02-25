let openButton = document.querySelector('.profile__open');
let body = document.querySelector('.body');
let overlay = document.querySelector('.overlay');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__inform');
let closeButton = overlay.querySelector('.popup__close-button');



let form = document.forms.edituser;
let inputName = form.elements.name;
let inputAbout = form.elements.about;

function closePopup() {
  overlay.classList.remove('overlay_active');
}

function editUserInfo() {
  userName.textContent = inputName.value;
  userAbout.textContent = inputAbout.value;
}

openButton.addEventListener('click', () => {
  overlay.classList.add('overlay_active');
  openButton.blur();
});

closeButton.addEventListener('click', closePopup) ;



form.addEventListener('submit', (event) => {
  event.preventDefault();
  editUserInfo();
  closePopup();
});

document.addEventListener('keypress', function(event){
  if (event.keyCode === 32) {
    const popupActive = document.querySelector('.profile__open');
    closePopup(popupActive);
    event.preventDefault();
  }
})



overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});