import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

/**
 * @type {import("mongodb").Collection | null}
 */
let documentsCollection = null;

try {
    await client.connect();

    const database = client.db("alura-websockets");
    documentsCollection = database.collection("documentos");

    const documentsList = await documentsCollection.find().toArray();

    if (documentsList.length === 0) {
        await documentsCollection.insertMany([
            {
                name: "JavaScript",
                text: "JavaScript text..."
            },
            {
                name: "Node",
                text: "Node text..."
            },
            {
                name: "Socket.io",
                text: "Socket.io text..."
            }
        ]);
    }

    console.log("Database connected successfully");
} catch (error) {
    console.log("Error connecting to the database", error);
}

export { documentsCollection };
