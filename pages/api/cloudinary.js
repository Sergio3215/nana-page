require('dotenv').config();

const cloudinary = require("cloudinary").v2;

const cloudinaryConfig = cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret,
    secure:true
  });

  export default  function handler(req, res) {
    try {

        res.json({ cloudname: process.env.cloud_name, api_key: process.env.api_key });
    } catch (err) {
        // console.log(err)
        res.json({ data: [], error: err.message, success: false });
    }
}