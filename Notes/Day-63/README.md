# NoSQL
> SQL restricts the user to working within a predefined tabular schema where NoSQL is less emphasis on planning, greater freedom when adding new attribute or fields.

## MongoDB
> It's a open source, document database which provides high performance and scalability, it also provides the feature of auto-scaling.
### Installation
> We're going for the Community Server which is free comparing to Enterprise Server.

Follow the guidance on the [official document](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x-tarball/) should works.

---

### Run the mongodb
> There're two ways of installing mongodb on MacOS and this affects how we use the mongodb services
#### With `brew`
> Right now we're using `.tgz` Tarball to continue the notes.

#### With `.tgz` Tarball
1. Setting up the paths for MongoDB
```console
mongod --dbpath /User/xxx/xxxxxxx/data --logpath /User/xxx/xxxxxxx/logs/mongo.log
```
2. Run after install the MongoDB Shell
```console
mongosh
```
3. Show the current local database
```console
> show dbs
// admin   40.00 KiB
// config  60.00 KiB
// local   40.00 KiB
```

---

### Inserting Data
> Since, NoSQL do not restrict you to have a proper defined schema, so we can directly inserting data into the database.
1. Select database to proceed
```console
test> use ratingPortalDB
// switched to db ratingPortalDB
// If you run show dbs right now, you cannot see the new database before you inserting any data into it
ratingPortalDB> use ratingPortalDB
// already on db ratingPortalDB
```
2. Inserting data
```console
// select the collection, will create it on the fly if not exists
ratingPortalDB> db.restaurants.insertOne({ name: "Zermatt's Steak", address: { street: "Zermatt matterhorn", streetNumber: "21a"}})
// {
//  acknowledged: true,
//  insertedId: ObjectId("62c93bbade4db7e372100dc3")
// }
```

---
