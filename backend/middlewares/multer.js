
const multer = require('multer')
const fs = require('fs')


const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'git'
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.split('').join('_')
        const extension = MIME_TYPES[file.mimetype]
        cb(null, name + Date.now()+'.'+extension)
    }

})

module.exports = multer({ storage: storage}).single('image')