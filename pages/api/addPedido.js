import { uri, connectToDataBase } from "../../utils/mongodb"
import { uid } from 'uid';
export default async function handler(req, res) {
  if(req.method != "PUT"){
    res.status(405).json({msg: "Method not allowed"})
    return
  }
  
  if(req.body == '' || req.body.data == undefined || req.body.data == null){
    res.status(406).json({msg: "Not Acceptable"})
    return
  }

  const db = await connectToDataBase(uri)
  const collection = await db.collection("Pedidos")

  await collection.insertOne({
    _id: uid(24),
    uid: uid(24),
    data: req.body.data,
    addIn: new Date()
  })
  
  res.status(201).json({ msg: "OK" })
  return
}
