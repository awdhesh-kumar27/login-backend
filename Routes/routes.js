import express from 'express';
import {Register, Login, Home} from '../Controller/Fetch.js';
const router = express();
// router.get('/',HomePage)
// router.get('/data',GetData);
router.get('/',Home)
router.post('/login',Login);
router.post('/register',Register)

export default router;