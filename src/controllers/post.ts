import express from 'express';
import mongoose from 'mongoose';
import post from '../models/post';

export const getPosts = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const posts = await post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
};

export const createPost = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const postData = req.body;
  const newPost = new post(postData);

  try {
    const createdPost = newPost.save();
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const { id: _id } = req.params;
  const postData = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: 'No post with id.' });
  }

  try {
    const updatedPost = await post.findByIdAndUpdate(_id, postData, {
      new: true,
    });
    res.status(204).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const likePost = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const { id: _id } = req.params;
};
