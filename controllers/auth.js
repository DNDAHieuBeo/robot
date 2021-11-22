import { User } from '../models/user.js';
import { randomPassword } from '../utils/password.js';
import fetch from 'node-fetch';



const getCheckgrade = (req, res) => {
  res.render('auth/checkgrade');
};
const getFAQs =(req,res) =>{
  res.render('auth/FAQs');
};
const getTakePicture =(req,res) =>{
  res.render('auth/takepicture');
};
const getShowMap = (req,res) =>{
 res.render('auth/show-map')
};
const getFetchApi = (req,res) =>{
  console.log("fetch success")
  const url =" ";
  const options ={
    "method":"GET"
  }
}
export {
  getFAQs,
  getCheckgrade,
  getTakePicture,
  getShowMap
};
