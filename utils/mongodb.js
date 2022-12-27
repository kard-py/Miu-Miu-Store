import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGO_URI;

let cachedDb = null;
async function connectToDataBase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db("MiuMiuStore");

  cachedDb = db;

  return db;
}

export { connectToDataBase, uri };
