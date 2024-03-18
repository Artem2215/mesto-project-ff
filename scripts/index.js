// @todo: Темплейт карточки +

// @todo: DOM узлы +

// @todo: Функция создания карточки 

// @todo: Функция удаления карточки +

// @todo: Вывести карточки на страницу +
const placesList = document.querySelector('.places__list');

function createCard(i) {
  const cardTemplate = document.querySelector('#card-template').content;
  const templateCard = cardTemplate.querySelector('.places__item').cloneNode(true);
  const buttonDelete = templateCard.querySelector('.card__delete-button');
  
// удаление карточек
  buttonDelete.addEventListener('click', function () {
    templateCard.remove();
  });
//

// лайк карточек
  const buttonLike = templateCard.querySelector('.card__like-button');

  buttonLike.addEventListener('click', function(like) {
    like.target.classList.toggle('card__like-button_is-active');
  });
//
  templateCard.querySelector('.card__image').src = initialCards[i]['link'];
  templateCard.querySelector('.card__title').textContent = initialCards[i]['name'];

  placesList.append(templateCard);
};

for (let i = 0; i < initialCards.length; i++) {
  createCard(i);
};

function addCard() {
  const buttonAdd = document.querySelector('.profile__add-button');
  
  buttonAdd.addEventListener('click', function() {

  });
};
