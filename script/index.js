let openEditButton = document.querySelector('.profile__open');
let popup = document.querySelector('.popup');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__inform');
let closeEditButton = popup.querySelector('.popup__close-button');

const popupInfo = document.querySelector('.popup_info');
const popupAdd = document.querySelector('.popup_add');
const popupCard = document.querySelector('.popup_card');


let popupAddCard = document.querySelector('.popup_add');
let showAddCard = document.querySelector('.profile__add');
let closeAddCard = popupAdd.querySelector('.popup__close-button');

function closePopup() {
  popupInfo.classList.remove('popup_active');
}

closeEditButton.addEventListener('click', closePopup);


function openPopup() {
  popupInfo.classList.add('popup_active');
  saveUserInfo();
}

openEditButton.addEventListener('click', openPopup);



function closeAddPopup() {
  popupAdd.classList.remove('popup_active');
}

function openAddCard() {
  popupAdd.classList.add('popup_active');
}


showAddCard.addEventListener('click', openAddCard);
closeAddCard.addEventListener('click', closeAddPopup);

let form = document.forms.edituser;
let inputName = form.elements.name;
let inputAbout = form.elements.about;

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

const container = document.querySelector('.elements__cards');
const templateElement = document.querySelector('.template');
const createButton = document.querySelector('#create-card-button');

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

//Создание новой карточки
const addCardForm = document.querySelector('.form_add-card')
const addCardTitleInput = addCardForm.querySelector('.form__input_title')
const addCardLinkInput = addCardForm.querySelector('.form__input_link')

createButton.addEventListener('click', (e) => {
  e.preventDefault();

  const data = {};

  data.name = addCardTitleInput.value;
  data.link = addCardLinkInput.value;
  formCreateCard(data)
  closeAddPopup();
})

renderList();

function formCreateCard(data) {
  const newCards = createCard(data);
  container.prepend(newCards);
}

//Открытие картинок 





