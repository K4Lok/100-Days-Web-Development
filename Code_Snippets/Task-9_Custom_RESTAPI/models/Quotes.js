const db = require('../data/database');

class Quotes {
    static async getAllQuotes() {
        let quotes;
        try {
            quotes = await db.getDB().collection('quotes').find().toArray();
        }
        catch(error) {
            console.log(Error);
        }
        return quotes;
    }
}

module.exports = Quotes;