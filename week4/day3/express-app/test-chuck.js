const Chuck = require('chucknorris-io');
const client = new Chuck();


// Retrieve a random chuck joke
client.getRandomJoke()
  .then((response) => {
    console.log(response.value);

    // res.render('random-joke', {
    //   joke: response.value
    // });
  }).catch((err) => {
    // res.send('Oh noes! Error!')
    console.log('Oh noes error!');
  });
