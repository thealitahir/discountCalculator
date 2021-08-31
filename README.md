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

 * /register
        ```
        {
            "email":"abc@abc.com"
            "password":"xxxxxxxx"
        }
        ```