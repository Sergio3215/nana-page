import { firebase, app, db } from '../../db'
import { addDoc, updateDoc, where, doc, collection, query } from 'firebase/firestore';
// import { cloudinary, cloudinaryConfig } from './cloudinary'

export default async function handler(req, res) {
    const { url, namefile, namecustom, name, id, public_id } = req.query;

    const nameDB = name;

    try {
        const entitie = {
            url: url,
            name: (namecustom !== "") ? namecustom : namefile,
            __id: id,
            public_id: public_id
        }

        const docRef = await addDoc(collection(db, nameDB), entitie);

        //Update
        const docUpdated = await updateDoc(doc(db, nameDB, docRef.id), {
            id: docRef.id
        })

        res.json({ success: true });
    } catch (err) {
        console.log(err)
        res.json({ data: [], error: err.message, success: false });
    }
}