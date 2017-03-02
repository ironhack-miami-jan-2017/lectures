const express = require('express');
const ensure = require('connect-ensure-login');

const Room = require('../models/room-model.js');

const roomsRoutes = express.Router();


roomsRoutes.get('/my-rooms', ensure.ensureLoggedIn(), (req, res, next) => {
  Room.find({ owner: req.user._id }, (err, myRooms) => {
    if (err) {
      next(err);
      return;
    }

    res.render('rooms/rooms-index.ejs', { rooms: myRooms });
  });
});

roomsRoutes.get('/rooms/new', ensure.ensureLoggedIn(), (req, res, next) => {
  res.render('rooms/new.ejs', {
    message: req.flash('success')
  });
});

roomsRoutes.post('/rooms', ensure.ensureLoggedIn(), (req, res, next) => {
  const newRoom = new Room ({
    name:  req.body.name,
    desc:  req.body.desc,
    picture: 'https://media.giphy.com/media/d2ZjBlsQa5dWO45a/giphy.gif',
    owner: req.user._id   // <-- we add the user ID
  });

  newRoom.save((err) => {
    if (err) {
      next(err);
      return;
    } else {
      req.flash('success', 'Your room has been created.');
      res.redirect('/rooms/new');
    }
  });
});


module.exports = roomsRoutes;
