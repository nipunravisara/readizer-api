import express from 'express';
import {
  createPost,
  getPosts,
  likePost,
  updatePost,
} from '../controllers/post';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/:id', updatePost);
router.post('/:id', likePost);

export default router;
