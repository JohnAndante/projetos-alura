import { documentsCollection } from './dbConnect.js';

async function findDocument(document) {
    const doc = await documentsCollection.findOne({ name: document });
    return doc;
}

function updateDocument(document, text) {
    documentsCollection.updateOne({ name: document }, { $set: { text } });
}

export { findDocument, updateDocument };
