import { uri, connectToDataBase } from "../../utils/mongodb"
export default async function handler(req, res) {
  if(req.method != "DELETE"){
    res.status(405).json({msg: "Method not allowed"})
    return
  }
  
  if(req.body == '' || req.body.remove_id == undefined || req.body.remove_id == null){
    res.status(406).json({msg: "Not Acceptable"})
    return
  }

  const db = await connectToDataBase(uri)
  const collection = await db.collection("Pedidos")

  const item = {uid: req.body.remove_id};

  const r = await collection.deleteOne(item)

  res.status(201).json({ msg: "OK", data: r })
}
