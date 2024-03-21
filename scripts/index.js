// @todo: Темплейт карточки +

// @todo: DOM узлы +

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, deleteItem) {
  const templateCard = cardTemplate.querySelector('.places__item').cloneNode(true);
  templateCard.querySelector('.card__image').src = card.link;
  templateCard.querySelector('.card__title').textContent = card.name;

  const deleteButton = templateCard.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function() {
    deleteItem(templateCard);
  });
  return templateCard;
};

function deleteItem(templateCard) {
  templateCard.remove();
}

initialCards.forEach((card) => {
  const cardElement = createCard(card, deleteItem);
  placesList.append(cardElement);
});