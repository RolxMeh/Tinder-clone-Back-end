import express from "express";
import mongoose from "mongoose";
import Cards from "./models/dbCards.js";
import cors from "cors";

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://Admin:Ogeleayo90@cluster0.6otvxix.mongodb.net/?retryWrites=true&w=majority";

//Middleware
app.use(express.json());
app.use(cors());

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Roland!!"));

//Make a post request to the database
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listener
app.listen(port, () => console.log(`Listeniing on port ${port}`));
