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
