import { uri, connectToDataBase } from "../../utils/mongodb"
export default async function handler(req, res) {
  if(req.method != "GET"){
    res.status(405).json({msg: "Method not allowed"})
    return
  }
  
  const db = await connectToDataBase(uri)
  const collection = await db.collection("Cores")

  let r = await collection.find({}).toArray()

  res.status(200).json({ msg: "OK", data: r })
}
