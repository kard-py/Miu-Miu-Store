import { uri, connectToDataBase } from "../../../utils/mongodb"
export default async function handler(req, res) {
  if(req.method != "PUT"){
    res.status(405).json({msg: "Method not allowed"})
    return
  }
  
  const db = await connectToDataBase(uri)
  const collection = await db.collection("Pedidos")

  const r = await collection.findOne({uid: req.query.uid})

  r.data.status = req.body.status


  await collection.updateOne({uid: req.query.uid}, { $set: r }, { upsert: true });


  res.status(201).json({ msg: "OK", data: r })
}
