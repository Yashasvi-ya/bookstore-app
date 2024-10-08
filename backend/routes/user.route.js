import express from 'express'
import { favorite, getbooks, signout, test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
router.post('/signout', signout)
router.put('/favorite', favorite)


//just for testing the book request while development
router.get('/getbooks', getbooks)

export default router;