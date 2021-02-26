let openButton = document.querySelector('.profile__open');
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

function UserInfo() {
  inputName.value = userName.textContent;
  inputAbout.value = userAbout.textContent;
}

function openPopup() {
  overlay.classList.add('overlay_active');
  UserInfo();
}

openButton.addEventListener('click', () => {
  openPopup();
  openButton.blur();
});

closeButton.addEventListener('click', closePopup) ;


form.addEventListener('submit', (event) => {
  event.preventDefault();
  editUserInfo();
  closePopup();
});



overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});