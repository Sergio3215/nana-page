require('dotenv').config();

import { db } from '../../db'
import { deleteDoc, doc } from 'firebase/firestore';



export default async function handler(req, res) {

    const { name, id } = req.query;

    try {
        //Delete
        await deleteDoc(doc(db, name, id))

        res.json({ success: true });
    } catch (err) {
        // console.log(err)
        res.json({ data: [], error: err.message, success: false });
    }
}