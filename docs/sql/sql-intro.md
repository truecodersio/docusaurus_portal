---
title: "SQL Intro"
slug: "/sql-intro"
---

## Documentation and Resources

As we go into details of any programming tool, you'll find that documentation is your best friend for learning and improving your tool skill set:

- [W3 Schools](https://www.w3schools.com/sql/default.asp)
- [Wikipedia](https://en.wikipedia.org/wiki/SQL)
- [SQL Joins](https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)
- [Technojobs: SQL Interview Questions](https://www.technojobs.co.uk/info/interview-tips/sql-interview-answers.phtml)
- [Toptal: SQL Interview Questions](https://www.toptal.com/sql/interview-questions)
- [Java Point: SQL Interview Questions](https://www.javatpoint.com/sql-interview-questions)
- [Software Testing Material: SQL Interview Questions](https://www.softwaretestingmaterial.com/sql-interview-questions/)

## Introduction

SQL, pronounced "Sequel", stands for Structured Query Language. From [Wikipedia's](https://en.wikipedia.org/wiki/SQL) article on SQL:

SQL was initially developed at IBM by Donald D. Chamberlin and Raymond F. Boyce in the early 1970s. This version, initially called SEQUEL (Structured English Query Language), was designed to manipulate and retrieve data stored in IBM's original quasi-relational database management system, System R, which a group at IBM San Jose Research Laboratory had developed during the 1970s. The acronym SEQUEL was later changed to SQL because "SEQUEL" was a trademark of the UK-based Hawker Siddeley aircraft company.

In the late 1970s, Relational Software, Inc. (now Oracle Corporation) saw the potential of the concepts described by Codd, Chamberlin, and Boyce, and developed their own SQL-based RDBMS with aspirations of selling it to the U.S. Navy, Central Intelligence Agency, and other U.S. government agencies. In June 1979, Relational Software, Inc. introduced the first commercially available implementation of SQL, Oracle V2 (Version2) for VAX computers.

## SQL Implementations

There are a many different flavors of SQL, such as:

- MySQL
- Microsoft SQL
- PostgreSQL
- SQLite

## ANSI SQL

SQL is NOT guaranteed to be portable between systems, but many SQL flavors comply with the ANSI standard. To be compliant with the ANSI standard, a flavor of SQL must support at least the major commands, like `SELECT`, `UPDATE`, `DELETE`, and `INSERT` in a similar manner.

Since the introduction of ANSI SQL, the standard has been revised to include a larger set of features. This is the skillset we'll be focusing on so that you'll have the most portable base of knowledge across all platforms and be able to pick up new ones with ease.

## Source Code Comments

A comment is a programmer-readable explanation or annotation in the source code of a computer program. Anything within comments will be ignored by a compiler and are just there to help us programmers understand the code better.

You'll use comments for documentation and explanation of your code. Anytime you see comments, just know it's there for clarity.

### Line Comment

Also known as single-line comment, line comment syntax is prepended with `--`

```sql
-- Example line comment
```

### Block Comment

Also known as multi-line comment, block comment syntax is surrounded with `/* */`

```sql
/* Example
block
comment
*/
```

## Source Code Line Termination

Unless otherwise specified, each line of source code, called a statement, must be terminated with a `;`:

```sql
-- Here is a select statement
SELECT * FROM Customers;
```

## Case Sensitivity

Unless otherwise specified, SQL IS NOT case sensitive. For example, `select` is synonymous with `SELECT`.

However, SQL naming convention usually has keywords in ALL CAPS. We will do the same.

## SQL Statements

In the world of data manipulation, the acronym CRUD (Create, Read, Update, Delete) has become popular, since CRUD encapsulates all the possible data manipulation actions:

- Create: The act of writing new data
- Read: The act of reading existing data
- Update: The act of modifying existing data
- Delete: The act of removing existing data

In the world of SQL, we also need the ability to manipulate data/records. We have CRUD in ANSI SQL with these four statements:

### SELECT

The `SELECT` statement in SQL is used to read, or query, existing records in your database. It follows this syntax:

```sql
SELECT column1, column2, ...
FROM table_name;

-- Select the Name and Address columns from the phone_book table
SELECT Name, Address FROM phone_book;
```

You can also select from all columns by using `*`:

```sql
-- Select all available columns from the phone_book table
SELECT * FROM phone_book;
```

### INSERT

The `INSERT` statement in SQL is used to create a new record to your database. It follows this syntax:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

-- Insert a record into our phone_book table with the provided key, value pairs
INSERT INTO phone_book (Name, Address) VALUES ('Cody Winton', '123 Main St.');
```

You can also insert a record for all available columns, as long as you provide values in the same order that the columns are in:

```sql
-- Insert a record into our phone_book table with the provided values
INSERT INTO phone_book VALUES ('Cody Winton', '123 Main St.', '205-555-1234');
```

### UPDATE

The `UPDATE` statement in SQL is used to modify existing records in your database. It follows this syntax:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

/* Update all records from our phone_book table
with on the provided key, value pairs where the id equals 42 */
UPDATE phone_book SET Name = 'John Doe', Phone = '205-123-4567' WHERE id = 42;

/* Update all records from our phone_book table
with on the provided key, value pairs where the Name equals "Cody Winton" */
UPDATE phone_book SET Name = 'John Doe', Phone = '205-123-4567' WHERE Name = 'Cody Winton';
```

Note: Without the `WHERE` clause in the `UPDATE` statement, every record in our table will be updated based on the key, value pairs provided.

### DELETE

The `DELETE` statement in SQL is used to remove existing records in your database. It follows this syntax:

```sql
DELETE FROM table_name
WHERE condition;

-- Delete all records from our phone_book table where the id equals 42
DELETE FROM phone_book WHERE id = 42;

-- Delete all records from our phone_book table where the Name equals "Cody Winton"
DELETE FROM phone_book WHERE Name = 'Cody Winton';
```

Note: Without the `WHERE` clause in the `DELETE` statement, every record in our table will be deleted.

## SQL Modifiers

ANSI SQL provides additional statement keywords that can be used in tandem with the four CRUD statements to modify the results. We've included several below, but there are a ton of other modifiers available in ANSI SQL. Check it out on [W3Schools](https://www.w3schools.com/sql/default.asp).

### Operators

In SQL, there are several operators that are used:

| Operator | Definition                       |
| -------- | -------------------------------- |
| `=`      | Equal                            |
| `!=`     | Inequal                          |
| `>`      | Greater than                     |
| `>=`     | Greater than or equal            |
| `<`      | Less than                        |
| `<=`     | Less than or equal               |
| `%`      | Wildcard of 0 or more characters |
| `?`, `_` | Wildcard of one character        |

> NOTE: Choose the operator wisely based on the SQL implementation you're using.

### WHERE

In SQL statements, the `WHERE` clause allows you to filter your data based on a certain conditional. The `SELECT`, `UPDATE`, and `DELETE` statements support adding the `WHERE` clause:

```sql
-- Select the Name and Address columns from the phone_book table where the id equals 42
SELECT Name, Address FROM phone_book WHERE id = 42;
```

### AND, OR, NOT

In SQL statements, you can chain conditionals together for the `WHERE` clause, allowing for logical operations with `AND`, `OR`, and `NOT`.

The `AND` operator displays a record if all the conditionals separated by `AND` are `TRUE`:

```sql
SELECT * FROM Customers WHERE Country='USA' AND City='Birmingham';
```

The `OR` operator displays a record if any of the conditionals separated by `OR` are `TRUE`:

```sql
SELECT * FROM Customers WHERE City='Birmingham' OR City='Atlanta';
```

The `NOT` operator displays a record if the condition(s) is `NOT TRUE`:

```sql
SELECT * FROM Customers WHERE NOT City='Atlanta';
```

You can also combine `AND`, `OR`, and `NOT` operators. Similar to mathematics, parens can be used to form complex expressions:

```sql
-- And Or combination
SELECT * FROM Customers
WHERE Country='USA' AND (City='Birmingham' OR City='Atlanta');

-- And Not combination
SELECT * FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';
```

### ORDER BY

In SQL statements, the `ORDER BY` keyword can be used to sort the records returned by your `SELECT` statement. The `ORDER BY` follows this syntax:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;

-- Select all from the Customers table
-- sorted ascending (the default sort) by the Country
SELECT * FROM Customers ORDER BY Country;

-- Select all from the Customers table
-- sorted ascending by the Country column and
-- descending by the CustomerName column
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;
```

### IS NULL, IS NOT NULL

In SQL statements, the keyword `NULL` represents the absence of value:

```sql
-- Select where Address is absent of value
SELECT LastName, FirstName FROM Persons
WHERE Address IS NULL;

-- Select where Address isn't absent of value
SELECT LastName, FirstName, Address FROM Persons
WHERE Address IS NOT NULL;
```

### SELECT DISTINCT

The `SELECT DISTINCT` statement will only return records with different values in the provided columns:

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;

-- Select the records that have a different Country value from the Customers table
SELECT DISTINCT Country FROM Customers;
```

### LIKE

The `LIKE` statement is used in a WHERE clause to search for a specified pattern in a column:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;

-- Select the records where the customer's name starts with "a"
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';
```

Here are some examples showing different LIKE operators with `%` and `_` wildcards:

| Clause                            | Definition                                                                |
| --------------------------------- | ------------------------------------------------------------------------- |
| `WHERE CustomerName LIKE 'a%'`    | Any values that start with 'a'                                            |
| `WHERE CustomerName LIKE '%a'`    | Any values that end with 'a'                                              |
| `WHERE CustomerName LIKE '%a%'`   | Any values that 'a' in any position                                       |
| `WHERE CustomerName LIKE '_a%'`   | Any values that have 'a' in the second position                           |
| `WHERE CustomerName LIKE 'a_%_%'` | Any values that start with an 'a' and are at least 3 characters in length |
| `WHERE CustomerName LIKE 'a%e'`   | Any values that start with an 'a' and end with an 'e'                     |

### COUNT, SUM, AVG

The `COUNT` operator will return the count of records based on the query:

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;

-- Count all the products
SELECT COUNT(ProductID) FROM Products;
```

The `SUM` operator will return the sum of values in records based on the query:

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;

-- Sum all the quantities available in order details
SELECT SUM(Quantity) FROM OrderDetails;
```

The `AVG` operator will return the average of values in records based on the query:

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;

-- Average all the prices available in products
SELECT AVG(Price) FROM Products;
```

### Aliases

In SQL, you can use an alias to give your table or column a temporary name. An alias only exists for the duration of the query.

Column aliases are often used to make columns more clear, concise, and readable in the return:

```sql
-- Column alias syntax
SELECT column_name AS alias_name
FROM table_name;

SELECT CustomerID as ID, CustomerName AS Customer
FROM Customers;
```

Table aliases are often used to make queries more clear, concise, and readable in the statement:

```sql
-- Table alias syntax
SELECT column_name(s)
FROM table_name AS alias_name;

SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName = "Around the Horn" AND c.CustomerID = o.CustomerID;
```

## SQL Data

### Statement Data

Data is often included in SQL statements like `SELECT` and almost always included in `INSERT`, `UPDATE`, and `DELETE` statements. Here's the data you'll use:

### String

A string is a sequence of zero or more unicode characters. In SQL statements, a String is surrounded by single quotes, referred to as the string delimiter:

```sql
SELECT * FROM Customers WHERE Country = 'USA';
```

### Numeric

In SQL statements, a numeric value is used without modification:

```sql
SELECT * FROM Customers WHERE Id = 42;
```

### Null

In SQL statements, the keyword `NULL` represents the absence of value:

```sql
-- Select where Address is null
SELECT LastName, FirstName FROM Persons
WHERE Address IS NULL;

-- Select where Address isn't null
SELECT LastName, FirstName, Address FROM Persons
WHERE Address IS NOT NULL;
```

Note: `NULL` is not the same as `0` or an empty string: `''`

- `0` and `''` are actual values, stored in your database as `0` or `''`
- `NULL` represents the absence of value: nothing is stored in your database

## Table Data

In ANSI SQL, data tends to resolve to 1 of 4 data types:

- Primary Keys
- Text Types
- Numeric Types
- Date Types

### Primary Keys

While not technically required for a table, best practice demands a primary key. Your best two options are:

- `INT` or `LONGINT`: an integer that increments for you as you insert your data
- `GUID` (Globally Unique IDentifier): a generated value that is extremely mathematically likely to be unique in the universe

### Microsoft SQL Data Types

| Type             | Description                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| int              | Used for primary keys, foreign keys, and whole number values                                         |
| uniqueidentifier | GUID (Globally Unique Identifier), used as primary and foreign keys                                  |
| varchar(255)     | Used for strings. Length is indicated                                                                |
| decimal(t, d)    | Used for decimal values. `t` is total digits. `d` is total digits to the right of the decimal point. |
| text             | Used for large text of unspecified length                                                            |
| datetime         | Used for dates                                                                                       |
| xml              | Used for XML. Not ANSI                                                                               |

- `varchar`: used when there is no multilingual need
- `nvarchar`: In today's world of globalization, I consider `nvarchar` to be best practice

`nvarchar` can represent a larger character set because it uses 2 bytes per character instead of 1.

> NOTE: In MySQL there is no `nvarchar` or `nchar`. This is because the encoding type is handled on a field by field basis in MySQL so it is unnecessary. Without a deeper understanding of encoding, you should always use UTF-8 which can represent all characters from all languages. For a deeper understanding [click here](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/).

### Other Data Types

Here is a list of [SQL Data Types](https://www.w3schools.com/sql/sql_datatypes.asp) available to you in MySQL, SQL Server, and MS Access.

## Takeaways

1. **SQL**, or _Structured Query Language_, is used to make queries to data in a database
2. _CRUD_ is an acronym of basic queries: _CREATE_, _READ_, _UPDATE_ and _DELETE_
3. There are many different _flavors_ of SQL, but most adhere to ANSI specifications
