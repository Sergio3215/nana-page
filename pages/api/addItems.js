import { firebase, app, db } from '../../db'
import { addDoc, updateDoc, where, doc, collection, query } from 'firebase/firestore';

export default async function handler(req, res) {
  const { name, nameRecord, detail, price, link } = req.query;

  const nameDB = name;

  try {

    let entitie =
      (name == "Extra" || name == "Rules") ?
        {
          name: nameRecord
        }
        :
        (name == "GirlFriend") ?
          {
            name: nameRecord,
            price: price,
            detail: detail
          }
          :
          (name == "SocialNetwork") ?
            {
              name: nameRecord,
              link: link
            }
            :
            {
              name: nameRecord,
              price: price
            }

    console.log(entitie)
    const docRef = await addDoc(collection(db, nameDB), entitie);
    // console.log("Document written with ID: ", docRef.id);

    //Update
    const docUpdated = await updateDoc(doc(db, nameDB, docRef.id), {
      __id: docRef.id
    })
    
    res.json({ success: true });
  } catch (err) {
    // console.log(err)
    res.json({ data: [], error: err.message, success: false });
  }
}
