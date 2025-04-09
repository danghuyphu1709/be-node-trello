const DB_URI =
  "mongodb+srv://danghuyphu1709:QrjXs7X7zaQwxvUf@cluster0.zea4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DB_NAME = "trello-web";

import { MongoClient, ServerApiVersion } from "mongodb";

let trelloDatabaseInstance = null;

const mongoClientInstance = new MongoClient(DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectToDatabase = async () => {
  await mongoClientInstance.connect();
  trelloDatabaseInstance = mongoClientInstance.db(DB_NAME);
};

export const getDatabase = () => {
  if (!trelloDatabaseInstance) {
    throw new Error("Database not initialized. Call connectToDatabase first.");
  }
  return trelloDatabaseInstance;
};
