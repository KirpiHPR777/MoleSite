const ApiError = require('../errors/ApiError');
const {mkdir} = require('fs');
const path = require('path');
const uuid = require('uuid');
const {Photo} = require('../models/models');

class PhotoController{
    async create(req, res, next){
        try{
            const {userId} = req.body;
            const {photo} = req.files;
            let fileName = uuid.v4() + '.jpg';
            let downloadingDateTime = new Date().toLocaleString().replace(/\.|\:|, /g, '_');
            let downloadPath = `./static/${userId}/${downloadingDateTime}/`;
            mkdir(downloadPath, { recursive: true }, async (error) => {
                if(error){
                    console.log(`Something was wrong in creating new dir.`);
                    next(ApiError.badRequest(error.message));
                }else{
                    let resultFile = path.resolve(__dirname, '..', downloadPath, fileName);
                    photo.mv(resultFile);       
                    const photoDB = await Photo.create({userId, path:resultFile});
                    return res.json(Math.floor(Math.random() * 100));
                }
            });
        }catch(error){
            console.log(`Something was wrong in creating photo for writing to database.`);
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new PhotoController();