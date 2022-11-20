import { firebase, app, db } from '../../db'
import { addDoc, updateDoc, where, doc, collection, query } from 'firebase/firestore';
// import { cloudinary, cloudinaryConfig } from './cloudinary'

export default async function handler(req, res) {
    const { url, id } = req.query;

    try {

       //Update
        const docUpdated = await updateDoc(doc(db, "PicSelected", id), {
            __id: id,
            url: url
        })

        res.json({ success: true });
    } catch (err) {
        console.log(err)
        res.json({ data: [], error: err.message, success: false });
    }
}