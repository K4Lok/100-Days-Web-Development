const bcrypt = require('bcryptjs');
const ObjectId = require('mongodb').ObjectId;

const db = require('../data/database');

class User {
    constructor(email, password, fullname, street, postal, city) {
        this.email = email;
        this.password = password;
        this.name = fullname;
        this.address = {
            street: street,
            postal: postal,
            city: city
        }
    }

    static async findById(userId) {
        return await db.getDb().collection('users').findOne({_id: new ObjectId(userId)}, { password: 0 });
    }

    async getUserWithSameEmail() {
        return await db.getDb().collection('users').findOne({email: this.email});
    }

    async isEmailExists() {
        const existingUser = await this.getUserWithSameEmail();
        
        if(!existingUser) {
            return false;
        }
        return true;
    }

    async signup() {
        const hashedPassword = await bcrypt.hash(this.password, 12);

        await db.getDb().collection('users').insertOne({
            email: this.email,
            password: hashedPassword,
            name: this.name,
            address: this.address
        });
    }

    async hasMatchingPassword(hashedPassword) {
        return await bcrypt.compare(this.password, hashedPassword);
    }
}

module.exports = User;