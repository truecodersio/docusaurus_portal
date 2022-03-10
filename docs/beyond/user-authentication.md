---
title: "User Authentication"
slug: "/user-authentication"
---

> This walkthrough presumes that your project is bundled, with es6 module support.

## Why

In many applications, you'll need to have authentication to handle user logins and permissions. Not only will you need to add functionality for user authentication, you'll also need functionality that ensures security clouding sensitive user information. There are several authentication philosophies, but we`ll focus on bcrypt, web token authentication, and passport.

Interested in encryption/decryption? Read [this article](http://codahale.com/how-to-safely-store-a-password/) for an opinionated briefing on bcrypt.

## What

Simply put, bcrypt is “a library to help you hash passwords.” Bcrypt gives you the ability to hash and salt (dealing with encryption) passwords before storing in a database or passing across a network.

Jsonwebtoken is a standard method for creating data with a secret/private key that offers encryption for JSON payloads that detail permissions, roles, etc from the server for user access on the client-side. The tokens are signed either using a private secret or a public/private key.

Passport offers strategies (plugins) to authenticate requests to our server. We`ll specifically be using the **http-bearer** and **local** plugin strategies.

## How

To begin, let`s install the npm packages for:

- Bcrypt
- Jsonwebtoken
- Passport
- Passport-local
- Passport-http-bearer

```sh
npm install bcrypt jsonwebtoken passport passport-local passport-http-bearer
```

### Middleware Subfolder

We will start by creating a new subfolder named `middleware` inside of our `server` directory:

```txt
server
   config
   db
   middleware
      bearerstrategy.js
      localstrategy.js
   routes
   utils
   server.js
```

Create two new files: `bearerstrategy.js` and `localstrategy.js` inside of **middleware**.

### BearerStrategy

Inside of `bearerstrategy.js`, import `passport` and `passport-http-bearer:`

```js
import * as passport from "passport";
import * as BearerStrategy from "passport-http-bearer";
```

Also import your index.js from “../db/models”, and your `ValidToken` function from “../utils/security/tokens” (both to be created later):

```js
import db from "../db/models";
import { ValidToken } from "../utils/security/tokens";
```

Next, we will create and implement a passport middleware using passport-http-bearer to authenticate access tokens:

```js
passport.use(
  new BearerStrategy.Strategy(async (token, done) => {
    try {
      let payload = await ValidToken(token);
      let [user] = await db.Users.findOneById(payload.userid);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (e) {
      done(e);
    }
  })
);
```

We will use this middleware logic and BearerStrategy to intercept incoming http requests and validate the attached access tokens with results in our database. Shortly, we will create our `ValidToken` and `db` functions.

### LocalStrategy

Inside of localstrategy.js, import `passport` and `passport-local`:

```js
import * as passport from "passport";
import * as LocalStrategy from "passport-local";
```

Also import your index.js from “../db/models”, and your `comparePassword` function from “../utils/security/tokens” (both to be created later):

```js
import { comparePassword } from "../utils/security/passwords";
import db from "../db/models";
```

This middleware logic with passport allows us [serialize and deserialize](https://betterprogramming.pub/serialization-and-deserialization-ba12fc3fbe23) users, and compare the password entered with the correct password in the database.

```js
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new LocalStrategy.Strategy(
    { usernameField: "email", session: false },
    async (email, password, done) => {
      try {
        let [user] = await db.Users.findOneByEmail(email);
        if (user && comparePassword(password, user.password)) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (e) {
        done(e);
      }
    }
  )
);
```

### DB Queries

Now let's work in two new files under our "../db/queries" named `tokens.js` and `users.js`

Before we begin with the query methods for finding users and tokens, let`s make sure we have a table in our database to hold these values.

In MySQL workbench, create a new table `accesstokens` with the following structure:

```sql
create table accesstokens(
   id int not null auto_increment primary key,
   userid int not null,
   token text,
   expires datetime,
   _created timestamp default current_timestamp,
   constraint fk_userid foreign key (userid)
   references Users(id)
);
```

Also, create or alter a `users` table to have, at least, the following fields for id, email and password:

```sql
create table Users(
   id int not null auto_increment primary key,
   email varchar(60) unique not null,
   password varchar(80) not null,
   firstname varchar(60) not null default "True",
   lastname varchar(60) not null default "Coders",
   role varchar(60) not null default "guest",
   _created timestamp default current_timestamp
);
```

> NOTE: You should not, and we will not store raw passwords in our or any database. We will store encrypted passwords/information.

### Token Queries

Inside a new file named `tokens.js`, import our Query function from “./db/model”

```js
import { Query } from "../models";
```

Next, we`ll write three functions for finding, inserting and updating access tokens in our database:

```js
export const findOne = (token, id) => {
  return Query(
    `SELECT * FROM accesstokens WHERE token = ? AND id = ? LIMIT 1`,
    [token, id]
  );
};

export const insert = (userid) => {
  return Query(`INSERT INTO accesstokens SET userid = ?`, userid);
};

export const update = (id, token) => {
  return Query(`UPDATE accesstokens SET token = ? WHERE id = ?`, [token, id]);
};

export default {
  findOne,
  insert,
  update,
};
```

### User Queries

Inside a new file named `users.js`, import our Query function from “./db/model” like before.

```js
import { Query } from "../models";
```

Next, we`ll write three functions for finding by id, finding by email and creating new users in our database:

```js
export const findOneById = (id) => {
  return Query(`SELECT * FROM users WHERE id = ? LIMIT 1`, id);
};

export const findOneByEmail = (email) => {
  return Query(`SELECT * FROM users WHERE email = ? LIMIT 1`, email);
};

export const insert = (user: IUser) => {
  return Query(`INSERT INTO users SET ?`, [user]);
};

export default {
  findOneById,
  findOneByEmail,
  insert,
};
```

### Utility Files

Create a subfolder named `utils` inside of your `server` folder, and add the following:

```txt
utils
   security
      password.js
      tokens.js
```

In our “utils/security” folder, we`ll use the bcrypt module to encrypt and decrypt passwords and other information.

### Utils: Passwords

Inside of `passwords.js`, import `bcrypt`.

```js
import * as bcrypt from "bcrypt";
```

Next, we`ll write two functions for hashing and comparing passwords for encryption and authentication:

```js
export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

export default {
  hashPassword,
  comparePassword,
};
```

### Utils: Tokens

Inside of `tokens.js`, import `crypto (from bcrypt), jsonwebtoken, and “db/models”`. If you have a config file with environment variables, or a types file with defined typings, import them as well.

```js
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import config from "../../config";
import db from "../../db/models";
```

Next, we`ll write two functions for creating and validating access tokens for authentication:

```js
export const CreateToken = async (payload) => {
  let tokenid = await db.Tokens.insert(payload.userid);
  payload.accesstokenid = tokenid.insertId;
  payload.unique = crypto.randomBytes(32).toString("hex");
  let token = await jwt.sign(payload, process.env.SECRET);
  await db.Tokens.update(payload.accesstokenid, token);
  return token;
};

export const ValidToken = async (token) => {
  let payload = jwt.decode(token);
  let [accesstokenid] = await db.Tokens.findOne(token, payload.accesstokenid);
  if (!accesstokenid) {
    throw new Error("Invalid Token!");
  } else {
    return payload;
  }
};

export default {
  CreateToken,
  ValidToken,
};
```

### Routes

Now we will implement our passport and bcrypt middlewares in our routes.

### Server.js

In your `server.js` file, we will create our express server, initialize passport, parse request bodies, enable cors, create routing, and handle errors:

```js
import * as express from "express";
import router from "./routes";
import config from "./config";
import * as path from "path";
import * as passport from "passport";
import * as cors from "cors";
import * as helmet from "helmet";
import * as compression from "compression";

import "./middleware/bearerstrategy";
import "./middleware/localstrategy";

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());

app.use(express.static("public"));
app.use(passport.initialize());
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ errors: { err: err.message } });
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

const port = config.port || 3000;

app.listen(port, () => console.log(`Server listening on port: ${config.port}`));
```

### Routes/index.js

In your `routes` folder, create an `index.js` file. Import `authRouter`, `apiRouter`, and `express` to create your routes:

```js
import * as express from "express";
import * as morgan from "morgan";
import authRouter from "./auth";
import apiRouter from "./api";

const router = express.Router();

router.use(morgan("dev"));

router.use("/auth", authRouter);
router.use("/api", apiRouter);

export default router;
```

### Routes/api/index.js

In your `routes` folder, create a subfolder called `api` with an `index.js` file. Import `passport` and `express`:

```js
import * as express from "express";
import * as passport from "passport";
import activityRouter from "./activities";

const router = express.Router();

router.use((req, res, next) => {
  passport.authenticate("bearer", { session: false }, (err, user, info) => {
    if (user) req.user = user;
    return next();
  })(req, res, next);
});

router.use("/activities", activityRouter);

// more api routes...

export default router;
```

### Routes/auth/index.js

Let's consider having a login page on our client-side where users can log in to your application if they have an account, or sign up if they need to create an account. We`ll need to have api routes that authenticate user registering or logging in.

Create a subfolder named `auth` that contains an `index.js, login.js,` and `register.js` file:

```txt
routes
   auth
      index.js
      login.js
      register.js
```

In your `routes/auth/login.js` file, import `express`, and two route files that we will need to create for login and registration routes:

```js
import * as express from "express";
import loginRouter from "./login";
import registerRouter from "./register";

const router = express.Router();

router.use("/login", loginRouter);
router.use("/register", registerRouter);

export default router;
```

In your `routes/auth/login.js` file, import `express`, `passport`, and the `CreateToken` function we created in our `utils/security/tokens.js` file:

```js
import * as express from "express";
import * as passport from "passport";
import { CreateToken } from "../../utils/security/tokens";
```

Initialize an express router, and create an endpoint for a `post` request at “/login”. We'll use `passport.authenticate("local")`to authenticate incoming requests before our request handler is used. Inside of our request handler, invoke `CreateToken` and pass in the user id from the request body. Once the token is created, send the token, user id, and user role back to the client-side in the response body. Our route should resemble the following:

```js
const router = express.Router();

router.post(
  "/",
  passport.authenticate("local"),
  async (req: any, res, next) => {
    try {
      let token = await CreateToken({ userid: req.user.id });
      res.json({
        token,
        role: req.user.role,
        userid: req.user.id,
      });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
);

export default router;
```

In your `routes/auth/register.js` file, import `express`, our insert user db function, `hashPassword` function, and the `CreateToken` function to use for creating new users:

```js
import * as express from "express";
import * as passport from "passport";
import db from "../../db/models";
import { CreateToken } from "../../utils/security/tokens";
import { hashPassword } from "../../utils/security/passwords";
```

Initialize an express router, and create an endpoint for a `post` request at “/register”. Inside of our request handler, invoke `hashPassword` and pass in the inputted password from the request body. Once the password is encrypted, reassign the password on the user to the encrypted result, and insert the user into the database. Then use `CreateToken` to create an access token for the new user, and send the token, user id, and user role back to the client-side as the response body. Our route should resemble the following:

```js
const router = express.Router();

router.post("/", async (req: any, res, next) => {
  try {
    let user = req.body;
    user.password = hashPassword(req.body.password);
    let result: any = await db.Users.insert(user);
    let token = await CreateToken({ userid: result.insertId });
    res.json({
      token,
      role: "guest",
      userid: result.insertId,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

export default router;
```

Alright! Now we have routes that authenticate user logins and registers new users. Next step would be to create the frontend!
