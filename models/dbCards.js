import mongoose from "mongoose";

const cardsSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

const Cards = mongoose.model("Cards", cardsSchema);

export default Cards;
