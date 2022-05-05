---
title: "SQL Study Questions"
slug: "/sql-questions"
---

1. What is SQL and what is used for?

   - **SQL** stands for _Structured Query Language_, and is used for interacting with data in a _relational_ database.

2. What does CRUD stand for, and what are some keywords/SQL syntax that go along with such actions?

   - **CRUD** stands for Create, Read, Update and Delete.
   - Create: `INSERT INTO table VALUES (column1, column2, ...) SET (value1, value2, …);`
   - Read: `SELECT column1, column2, … FROM table;`
   - Update: `UPDATE table SET column=value WHERE …;`
   - Delete: `DELETE FROM table WHERE …;`

3. Write a SQL expression for the following diagram (Everything in A that is not in B, i.e. a Left Excluding Join)

   ```sql
   SELECT * FROM A
   LEFT JOIN B on B.A_ID = A.ID
   WHERE B.A_ID IS NULL;
   ```

4. When should you add an index to a database column? What is the cost of a database index?

   - When you want to read from the database faster. The cost is that it takes more time to write information to the database

5. You have a table called drivers and a table called orders. Orders are delivered by drivers. In this way, the orders belong to a driver through the column orders.driver_id. Write a SQL expression that gets all the drivers that have delivered an order.

   ```sql
   SELECT * FROM drivers
   INNER JOIN orders on
   orders.driver_id = driver.id;
   ```

## Study More

- [SQL Bolt Lessons](https://sqlbolt.com/lesson/introduction)
- [Eudreka's SQL Interview Questions](https://www.edureka.co/blog/interview-questions/sql-interview-questions)
