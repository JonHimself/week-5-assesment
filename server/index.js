
const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortunes', (req, res) => {
  const fortunes = [`It's impossible to accomplish it, if you cannot dream it.`,
  `Deep faith eliminates fear.`, `No one stands between you and destiny, except for yourself.`, `Everything happens for a reason. What are you doing here?`, `Bad things happen to good people, reflect on your past life.`,
  `You are an author, your choices write the road.`, `Firm ground crumbles in disater, be like sand.`, `You are the hero of your story.`];

  let fortunePicker = Math.floor(Math.random() * fortunes.length);
  let destiny = fortunes[fortunePicker];

  res.status(200).send(destiny);
});



app.listen(4000, () => console.log("Server running on 4000"));
