# MongoDB
## Query Data

### `.Find()`
> To read data from the db
```console
> db.restaurants.find()
> this will output all the records from the table and returning an array of object.
// [
//   {
//     _id: ObjectId("62c93bbade4db7e372100dc3"),
//     name: "Zermatt's Steak",
//     address: { street: 'Zermatt matterhorn', streetNumber: '21a' }
//   },
//   {
//     _id: ObjectId("62c93c5ede4db7e372100dc4"),
//     name: "Zermatt's Orar",
//     address: { street: 'Matterhorn paramid', streetNumber: '31b' }
//   }
// ]
```
### Filtering Data
#### Conditioning
> To get specific data with conditioning
```console
> db.restaurants.find({name: "Zermatt's Steak"})
> this will only return the records with the name matching "Zermatt's Steak"
// [
//   {
//     _id: ObjectId("62c93bbade4db7e372100dc3"),
//     name: "Zermatt's Steak",
//     address: { street: 'Zermatt matterhorn', streetNumber: '21a' }
//   }
// ]
```
#### Projection
> It means selecting only the neceesary data rather than selecting whole of the data of the document.
```console
// Put a 0 to hide (exclude) the field, 1 to show (include), by default it will show if you don't put any value on it
> db.restaurants.find({}, { _id: 0, 'address.streetNumber' })
// [
//   {
//     name: "Zermatt's Steak",
//     address: { street: 'Zermatt matterhorn' }
//   },
//   { name: "Zermatt's Orar",
//     address: { street: 'Matterhorn paramid' } 
//   }
// ]
```

### `.findOne()`
> Returns one documents that satisfies the specified query criteria on the collection. If there're multiple documents satisfy the query, it'll return the first document according to the natural order on the disk.
```console
> db.restaurants.findOne()
// [
//   {
//     _id: ObjectId("62c93bbade4db7e372100dc3"),
//     name: "Zermatt's Steak",
//     address: { street: 'Zermatt matterhorn', streetNumber: '21a' }
//   }
// ]
```
---

## Update Date
### `.updateOne()`
> The first parameter on the methods is to identify the document you want to target on to udpate. <br/>
> The second parameter is to define how the document to be updated. <br/>
> The `$set` is a built-in method in MongoDB for setting values:
```js
{ $set: { <field1>: <value1>, ... } }
```
```console
db.restaurants.updateOne({_id: ObjectId("62c93c5ede4db7e372100dc4")}, {$set: {name: "Zermatt's Oreo"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
db.restaurants.find({_id: ObjectId("62c93c5ede4db7e372100dc4")})
// [
//   {
//     _id: ObjectId("62c93c5ede4db7e372100dc4"),
//     name: "Zermatt's Oreo",
//     address: { street: 'Matterhorn paramid', streetNumber: '31b' }
//   }
// ]
```
### `.updateMany()`
> The syntax is similar to `.updateOne()`
---

## Delete Data
### `.deleteOne()`
> Lke other methods to manipulate the documents, the `.deleteOne()`'s parameters also work in the same way.
```console
db.restaurants.deleteOne({ name: "forDelete" })
// { acknowledged: true, deletedCount: 1 }
// it returns the message whether the deletion is suuceed or not.
// try delete an non-existed document again
db.restaurants.deleteOne({ name: 'forDelete' })
// { acknowledge: true, deletedCount: 0 }
```

---
