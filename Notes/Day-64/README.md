# MongoDB
## Query Data

### Find Data
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

---
