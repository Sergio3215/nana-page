import { firebase, app, db } from '../../db'
import { getDocs, where, doc, collection, query } from 'firebase/firestore';

export default async function handler(req, res) {
    const { name } = req.query;

    const nameDB = name;
    
    try {
        //Get One by data
        const dataCol1 = collection(db, nameDB);
        const queryConsultant = query(dataCol1, where('name',"!=","default"));
        const dataSnapshot1 = await getDocs(queryConsultant);
        let dataList1 = [];
        dataSnapshot1.forEach(doc => dataList1.push(doc.data()));
        res.json({data: dataList1})
    } catch (err) {
        // console.log(err)
        res.json({ data: [], error: err.message, success:false  });
    }
}
