# MySQL Database
## Creating Table
### Column Properties
> Beside the data type of the column like ( INT, BOOLEAN, DATE, etc...) SQL db also has other properties to manage the data.
1. Primary Key
> A Table usually has different unique identifier to mark down every row of data of the database, for the sake of managing every single row of data. It's a unique value that only happen once in the column in one table.
2. Not Null
> It will tell the database to occur error when inputing null value into that specific column.
3. Unique
> The engine will make sure every value of this column is unique in this table, no other row could have the same value in the same column. However, the value could be NULL can exists in multiple row.
4. Unsigned
> Not able to insert negative number into this column.
5. Zero Fill
> This property is somehow not standard but worth mention a little bit, it will fill up unoccupied digit into zero for specified length. For exmaple, a zipcode that always contain 5 digits, but it's weird to insert data like `00617` and also display value `617` if everyone else expects a 5 digits, therefore by inserting `617`, the engine will save as `00617` and return it.
6. Auto Increment
> This property will by default increase the value of every new inserted column based on the previous one.

---
#### Example
> To create a table to store restaurants information.
```sql
CREATE TABLE `restaurant_finder`.`restaurants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
ENGINE = InnoDB;
```
> For the backticks symbol, is could be omitted if the string is not containing any special characters.

---

## Inserting Data
> Inserting new row into the table.
```sql
INSERT INTO restaurants (name, type) VALUES ("C'Mont-Blanc", 'Chamonix');
```
Where it follows the syntax of:
```sql
INSERT INTO <database_name> ( <column_name_1>, <coulmn_name_2> ) VALUES ( <data_for_column_1>, <data_for_column_2> );
```

---

## Querying Data
> To read data from the table, in the meantime, we can add some filter for specific data.
```sql
SELECT * FROM restaurants;
```
> `*` means all the columns and rows of that table.
### Filtering data
```sql
SELECT * FROM restaurants WHERE type = "Chamonix";
```
Syntax as follow:
```sql
SELECT <column_name_1>, <column_name_2> or <*> FROM <table_name> WHERE <column_name> = <value>;
```

---
