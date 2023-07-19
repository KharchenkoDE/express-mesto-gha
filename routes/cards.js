const router = require('express').Router();

const {
  createCard,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:id', deleteCard);
router.put('/likes/:id', likeCard);
router.delete('/likes/:id', dislikeCard);

module.exports = router;
