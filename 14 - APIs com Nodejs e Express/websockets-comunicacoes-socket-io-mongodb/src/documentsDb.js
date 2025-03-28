import { documentsCollection } from './dbConnect.js';

function getDocuments() {
    const documents = documentsCollection.find().toArray();
    return documents;
}

async function findDocument(document) {
    const doc = await documentsCollection.findOne({ name: document });
    return doc;
}

function updateDocument(document, text) {
    documentsCollection.updateOne({ name: document }, { $set: { text } });
}

async function addDocument(documentName) {
    const result = await documentsCollection.insertOne({ name: documentName, text: "" });

    return result;
}

async function deleteDocument(documentName) {
    const result = await documentsCollection.deleteOne({ name: documentName });

    return result;
}

export { getDocuments, findDocument, addDocument, updateDocument, deleteDocument };
