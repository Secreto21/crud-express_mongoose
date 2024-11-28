import mongoose from 'mongoose';

const serieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseYear: Number,
});

const Serie = mongoose.model('Serie', serieSchema);

export default Serie;
