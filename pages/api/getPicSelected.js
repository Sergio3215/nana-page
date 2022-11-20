import { firebase, app, db } from '../../db'
import { getDocs, where, doc, collection, query } from 'firebase/firestore';

export default async function handler(req, res) {

    const nameDB = "PicSelected";
    
    try {
        //Get One by data
        const dataCol1 = collection(db, nameDB);
        const queryConsultant = query(dataCol1, where('__id',"!=",""));
        const dataSnapshot1 = await getDocs(queryConsultant);
        let dataList1 = [];
        dataSnapshot1.forEach(doc => dataList1 = doc.data());
        // console.log(dataList1)
        res.json({data: dataList1})
    } catch (err) {
        // console.log(err)
        res.json({ data: [], error: err.message, success:false  });
    }
}
