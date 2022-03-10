---
title: "Exercise: Express and MySQL"
slug: "/express-and-mysql-exercise"
---

## Objective

The objective is to complete routes for CRUD operations on our bestbuy database.

## Steps

We walked through connecting a mysql database to our express application. But we stopped at `allEmployees` and `oneEmployee`.

1. Finish creating endpoints and responses for `addEmployee`, `updateEmployee`, and `removeEmployee` queries
2. Create a new file named ‘products.js’ inside of your ‘/db/queries’ subfolder, and create CRUD functions that use the Query model we made to write queries to our database on the **products** table
   1. You will need to create api endpoints for these responses as well
   2. Something along these lines of “/api/products…” will do the trick

## BONUS

- Create a new file named ‘procedures.js’ inside of your ‘/db/queries’ subfolder, and write two functions that use a stored procedure in the query. 3. You will need to create api endpoints for these responses as well 4. The stored procedures can be any complex query on your database where a sp would be better than a long query
