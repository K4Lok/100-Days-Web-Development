# Database
## [Complex Database Structures](https://www.activequerybuilder.com/blog/understanding-a-complex-database-structure/)
> Database can get more complex where it interrelated to many other objects.
### Example
```sql
CREATE TABLE `restaurant_finder`.`restaurants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address_id` INT NOT NULL,
  `type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `address_id_idx` (`address_id` ASC) VISIBLE,
  INDEX `type_id_idx` (`type_id` ASC) VISIBLE,
  CONSTRAINT `address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `restaurant_finder`.`addresses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `type_id`
    FOREIGN KEY (`type_id`)
    REFERENCES `restaurant_finder`.`types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
```
## ER Diagram - Entity Relationship Diagram
> It's a type of flowchart that illustrates how "entity" such as objects or concepts relate to each other within a system
<img width="700" alt="Restaurants-ERD" src="https://user-images.githubusercontent.com/82365010/177418207-3e5488c8-9a76-41f1-b7e5-6b9e43b2580f.png">

---

## Joining Tables
> The purpose of JOINs in SQL is to access data from multiple tables based on logical relationships between them. Which means we can access data from multiple tables at the same time by connecting them all together. We can also filtering the joined table by conditioning.
```sql
# Based on the ERD we've above
SELECT restaurants.id, restaurants.name, addresses.* FROM restaurants
INNER JOIN addresses ON (restaurants.address_id = addresses.id)
```
> We can also customized the name of column by the keyword `AS` and also `JOIN` can be joining multiple tables as well.
```sql
SELECT restaurants.id AS restaurant_id, restaurants.name AS restaurant_name, addresses.*, types.* FROM restaurants
INNER JOIN addresses ON (restaurants.address_id = addresses.id)
INNER JOIN types ON (restaurants.type_id = types_id)
```
OR
```sql
SELECT restaurants.id AS restaurant_id, 
	restaurants.name AS restaurant_name, 
    addresses.street AS address_street,
    addresses.city AS address_city,
    types.name AS restaurant_type FROM restaurants
INNER JOIN addresses ON (restaurants.address_id = addresses.id)
INNER JOIN types ON (restaurants.type_id = types.id);
```

### Joining with Filtering
#### Example
```sql
SELECT restaurants.name AS restaurant_name,
	   types.name AS restaurant_type,
	   addresses.street AS street_name, 
       addresses.city AS city,
       reviews.reviewer_name AS reviewer,
       reviews.rating AS rating,
       reviews.text AS comments
       from restaurants
INNER JOIN reviews ON (restaurants.id = reviews.restaurant_id)
INNER JOIN addresses ON (restaurants.address_id = addresses.id)
INNER JOIN types ON (restaurants.type_id = types.id)
WHERE restaurants.name = "Chao Chao" AND rating >= 2;
```

---
