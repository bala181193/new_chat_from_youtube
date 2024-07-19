const fs=require('fs')
const router = require('express').Router();
const User = require('../models/User');
const multer = require('multer')
const path = require('path')
const { server } = require('../server')

// const uploadDir = path.join(__dirname, 'public/image');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }
const filePath=path.join(__dirname,'../public/uploads/')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filePath)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({
  storage: storage,
  // limits: 2 * 1000 * 1000,
  // fileFilter: function (req, file, cb) {
  //   let fileType = /jpeg|jpg|png|/
  //   let mimeType = fileType.test(file.mimetype);
  //   let extName = fileType.test(path.extname(file.originalname))
  //   if (mimeType && extName) {
  //     return cb(null, true)
  //   }
  //   cb("error occured")
  // }
}).single('picture')
const imageUpload = (req, res, next) => {
  upload(req, res, (err) => {
    console.log(err)
    if(err){
    return  res.status(400).json({err:err.message})
    }
    return next();
  })

}
// creating user
router.post('/', imageUpload, async (req, res) => {
  try {

    const { name, email, password } = req.body;
    console.log(req.body)
    const user = await User.create({ name, email, password, picture: req.file.filename });
    console.log(user);
    res.status(201).json(user);
  } catch (e) {
    let msg;
    if (e.code == 11000) {
      msg = "User already exists"
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg)
  }
})

// login user

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e.message)
  }
})


module.exports = router
