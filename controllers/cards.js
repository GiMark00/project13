const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: 'Ошибка сервера' });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .orFail(new Error('NotValidId'))
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      if (err.message === 'CastError') {
        res.status(400).send({ message: 'Переданы некорректные данные.' });
      } else if (err.message === 'NotValidId') {
        res.status(404).send({ message: 'Карточки нет в базе.' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка.' });
      }
    });
};
