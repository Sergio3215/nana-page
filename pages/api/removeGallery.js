require('dotenv').config();

const cloudinary = require("cloudinary").v2;
import { firebase, app, db } from '../../db'
import { deleteDoc, getDocs, where, doc, collection, query } from 'firebase/firestore';



export default async function handler(req, res) {
    cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
        secure: true
    });
    const { public_id, name } = req.query;

    try {


        //Get One by data
        const dataCol1 = collection(db, name);
        const queryConsultant = query(dataCol1, where('public_id', "==", public_id));
        const dataSnapshot1 = await getDocs(queryConsultant);
        let dataList1;
        dataSnapshot1.forEach(doc => dataList1 = doc.data());
        // console.log(dataList1)

        //Delete
        await deleteDoc(doc(db, name, dataList1.id))

        
        cloudinary.uploader.destroy(public_id, function (error, result) {
            // console.log(result, error)
        })
            .then(resp => console.log(resp))
            .catch(_err => console.log("Something went wrong, please try again later."));

        res.json({ success: true });
    } catch (err) {
        // console.log(err)
        res.json({ data: [], error: err.message, success: false });
    }
}