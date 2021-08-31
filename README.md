# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Discount calculator that calculates the discount percentage of a product according to the total invoice

### How do I get set up? ###

Be sure to have an instance of PostgresSQL running on your development environment, then you need to make changes in the  `src/config/config.json`, set the credentials accordingly.

Due to shortage of time I couldn't spent much time on setting up docker properly, everything is setup on docker except for sequlize-cli migrations

After this run this migration command to setup the db on your dev environment: `npx sequelize-cli db:migrate`

### Available routes ###
I've added JWT authentication which means you have to register first  and then login to get the token to access the APIs

 * POST /register
        ```
        {
            "email":"abc@abc.com"
            "password":"xxxxxxxx"
        }
        ```
 * POST /login
        ```
        {
            "email":"abc@abc.com"
            "password":"xxxxxxxx"
        }
        ```
 * POST /product/addProduct
        ```
        {
            "name":"p",
            "discount":10,
            "categoryId":1
        }
        ```
* POST /category/addCategory
        ```
        {
            "name":"c",
            "discount":10,
            "categoryId":1
        }
        ```

* POST /product/getDiscount
        ```
        {
            "name":"p",
            "user_id":1,
            "invoice_amount":100
        }
        ```
## Running the application

Once the database is in place execute `yarn dev`, it will expose the app on [http://localhost:5000](http://localhost:3000) by default.

## Important Note ##

Due to shortage of time, I couldn't achieve extra tasks. The features that are currently missing is password hashing, adding eslint rules, achieving the current. Test cases and swagger documentation is very important but I 
couldn't achieve it due to shortage of time.
