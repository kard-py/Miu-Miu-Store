import { uri, connectToDataBase } from "../../utils/mongodb"
import { uid } from 'uid';
export default async function handler(req, res) {
  if(req.method != "PUT"){
    res.status(405).json({msg: "Method not allowed"})
    return
  }
  
  if(req.body == {} || req.body == undefined || req.body == null){
    res.status(406).json({msg: "Not Acceptable"})
    return
  }

  const db = await connectToDataBase(uri)
  const collection = await db.collection("Cores")

  await collection.insertOne({
    _id: uid(24),
    uid: uid(24),
    data: req.body,
    addIn: new Date()
  })
  
  res.status(201).json({ msg: "OK" })
  return
}



