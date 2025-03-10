const { getDb } = require('../util/database');

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    async save() {
        const db = getDb();
        return db.collection('users').insertOne(this);
    }

    static async findOne(credentials) {
        const db = getDb();
        const user = await db.collection('users').findOne(credentials);

        if (!user) return null;

        return user;
    }
}

module.exports = User;
