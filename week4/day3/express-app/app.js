const express = require('express');

const app = express();


app.use(express.static('public'));


app.get('/', (request, response, next) => {
  var today = new Date();

  if (today.getDay() === 0 || today.getDay() === 6) {
    response.send('WEEKEND YEAH!!');
  } else if (today.getDay() === 3) {
    response.send('HUMP DAY!! Boo.');
  } else if (today.getDay() === 5) {
    response.send('HECK YEAH FRIDAY!!');
  } else {
    response.send('Welcome to the home page');
  }
});

app.get('/about', (request, response, next) => {
  response.send('We are very touched that you want to know more about us.');
});


app.listen(3000, () => {
  console.log('Backend app ONLINE!');
});
