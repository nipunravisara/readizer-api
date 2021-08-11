import express from 'express';
import {
  createPost,
  getPost,
  getPosts,
  likePost,
  updatePost,
} from '../controllers/post';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/:id', updatePost);
router.post('/:id', likePost);
router.get('/:id', getPost);

export default router;
