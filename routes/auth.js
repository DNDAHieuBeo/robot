import * as express from 'express';
import {getCheckgrade,getFAQs,getTakePicture,getShowMap, } from '../controllers/auth.js';
const router = express.Router();


router.get('/check-grade',getCheckgrade)
router.get('/FAQs',getFAQs)
router.get('/take-picture',getTakePicture)
router.get('/show-map',getShowMap)


export default router;
