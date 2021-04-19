const openEditButton = document.querySelector('.profile__open');
const popup = document.querySelector('.popup');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__inform');
const closeEditButton = popup.querySelector('.popup__close-button');

const popupInfo = document.querySelector('.popup_info');
const popupAdd = document.querySelector('.popup_add');

//Создание новой карточки
const addCardForm = document.querySelector('.form_add-card')
const addCardTitleInput = addCardForm.querySelector('.form__input_title')
const addCardLinkInput = addCardForm.querySelector('.form__input_link')

const popupImage = document.querySelector('.popup_image');
const imageModalImage = popupImage.querySelector('.popup__img');
const imageModalCaption = popupImage.querySelector('.popup__img-caption');

const popupAddCard = document.querySelector('.popup_add');
const showAddCard = document.querySelector('.profile__add');
const closeAddCard = popupAdd.querySelector('.popup__close-button');
const closeImgButton = popupImage.querySelector('.popup__close-button');

const container = document.querySelector('.elements__cards');
const templateElement = document.querySelector('.template');
const createButton = document.querySelector('#create-card-button');

const form = document.forms.edituser;
const inputName = form.elements.name;
const inputAbout = form.elements.about;

function closePopup(modal) {
  modal.classList.remove('popup_active');
}

function openPopup(modal) {
  modal.classList.add('popup_active');
  saveUserInfo();
}

openEditButton.addEventListener('click', () => openPopup(popupInfo));
closeEditButton.addEventListener('click', () => closePopup(popupInfo));
closeImgButton.addEventListener('click', () => closePopup(popupImage));
showAddCard.addEventListener('click', () => openPopup(popupAdd));
closeAddCard.addEventListener('click', () => closePopup(popupAdd));

function editUserInfo() {
  userName.textContent = inputName.value;
  userAbout.textContent = inputAbout.value;
}

function saveUserInfo() {
  inputName.value = userName.textContent;
  inputAbout.value = userAbout.textContent;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  editUserInfo();
  closePopup();
});


popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//Удаление карточки
function trashCardHandler(evt) {
  evt.target.closest('.element').remove();
}

function trashCardListener(element) {
  const deleteButton = element.querySelector('.element__trash');
  deleteButton.addEventListener('click', trashCardHandler)

}


//Перенос карточек
function createCard(item) {
  const newCard = templateElement.content.cloneNode(true);
  const name = newCard.querySelector('.element__title');
  name.textContent = item.name;
  const link = newCard.querySelector('.element__image');
  link.src = item.link;
  link.alt = name;
  trashCardListener(newCard)



  //Лайкнуть карточку
newCard.querySelector('.element__like').addEventListener('click', function(evt) {
  evt.target.classList.toggle('element__like_active');
});
  return newCard;
}


function renderList() {
  const result = initialCards.map(createCard);
  container.append(...result);
}

createButton.addEventListener('click', (e) => {
  e.preventDefault();

  const data = {};

  data.name = addCardTitleInput.value;
  data.link = addCardLinkInput.value;
  formCreateCard(data);
  document.querySelector('.form_add-card').reset();
  closeAddPopup();
})

renderList();

function formCreateCard(data) {
  const newCards = createCard(data);
  container.prepend(newCards);
}

//Открытие картинок
function imageClickHandler (e) {
  imageModalImage.src = '';
  imageModalImage.src = e.target.src;
  imageModalImage.alt = imageModalCaption;
  imageModalCaption.textContent = e.target.alt;
  openPopup(popupImage);
}

document.querySelectorAll('.element__image').forEach(elem => {
  elem.addEventListener('click', imageClickHandler);
});
