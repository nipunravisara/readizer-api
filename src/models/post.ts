import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  body: String,
  author: String,
  upvoteCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const post = mongoose.model('post', postSchema);

export default post;
