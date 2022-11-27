import { uri, connectToDataBase } from "../../../utils/mongodb"
export default async function handler(req, res) {
  if(req.method != "DELETE"){
    res.status(405).json({msg: "Method not allowed"})
    return
  }
  
  if(req.query == '' || req.query.uid == undefined || req.query.uid == null){
    res.status(406).json({msg: "Not Acceptable"})
    return
  }

  const db = await connectToDataBase(uri)
  

  const item = {
    uid: req.query.uid
  };


  const r = await db.collection("Pedidos").deleteOne(item);


  res.status(201).json({ msg: "OK", data: r })
}
