import express from "express"
import bodyParser from 'body-parser';
import jokes from "./jokes.js";

const app = express();
app.listen(3010, ()=>{
    console.log("Listening")
})
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('project1');
});

app.post('/display-jokes', (req, res) => {
  const { selectBy, id, type } = req.body;
  let filteredJokes;

  if (selectBy === 'id') {
    filteredJokes = jokes.filter(joke => joke.id == id);
  } else if (selectBy === 'type') {
    filteredJokes = jokes.filter(joke => joke.jokeType === type);
  }

  res.render('result', { jokes: filteredJokes });
});




