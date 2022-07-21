# Website Security
## [SQL Injection](https://portswigger.net/web-security/sql-injection)
> It's a web security vulnerability that allows an attacker to interfere with the queries an application makes to its database.

## How SQL Injection works?
> When a web application does not validate values received from a web form, cookie, input parameter before passing them to SQL queries that will be executed on a database server.

## What is the Impact?
> A successful SQL Injection attack can result in various harms like unauthorized access to sensitive data, changing other user's data, obtain a backdoor into an organization's system and many...

## Prevent SQL Injection
> It's not hard to prevent SQL Injection. As long as we don't pass the user input into part of the query directly.
1. Validate the input before putting them into the queries.
2. Escaping the user's input which avoid characters that could lead to an unintended SQL command.
3. Avoiding administrative privileges, don't connect your application to the database with root access account.

---

# Code Refactoring
> It's the process of restructuring existing code in the project without changing its intended behavior. Refactoring is meant to improve the structure, legibility and the modularity of the software while preserving its functionality.

## Write cleaner Code in Node.js
> Every programming language or framework has their own tricks and conventions to make the project more effective and structured.
1. Leverage the [advantages](https://dev.to/paulasantamaria/refactoring-node-js-part-1-42fe) of the syntax like async/await.
2. Use [middlewares](https://medium.com/@avivbiton01/express-js-how-to-refactor-your-routes-using-middlewares-1c95413934e) to preform authenticating and authorizing could help the code more cleaner.
3. [Separating](https://morioh.com/p/f7d43fcf59a4) the logic and the route could help as well.

---
