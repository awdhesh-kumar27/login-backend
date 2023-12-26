import express from 'express';
import { LoggedIn } from '../Middleware/LoggedIn.js';
import {Register, Login, Home ,UserHome,LoggedOut} from '../Controller/Fetch.js';
const router = express();
// router.get('/',HomePage)
// router.get('/data',GetData);
router.get('/',Home)
router.post('/login',Login);
router.post('/register',Register)
router.get('/UserHome',LoggedIn,UserHome)
router.get('/LoggedOut',LoggedOut);

export default router;