
# LAB - 8

## Project Name
Express Routing &amp; Connected API

### Author: Brad Smialek

### Links and Resources
* [submission PR](http://xyz.com)
* [travis]([![Build Status](https://www.travis-ci.com/brad-smialek-401-advanced-javascript/lab-class-8-ExpressRouting.svg?branch=master)](https://www.travis-ci.com/brad-smialek-401-advanced-javascript/lab-class-8-ExpressRouting))
* [Heroku](http://xyz.com) 


#### Documentation
* [api docs](http://xyz.com) (API servers)


### Modules
#### `categories.js`
#### `products.js`
#### `mongo.js`
#### `router.js`


##### Exported Values and Methods
#### `Class Products`
#### `Class Categories`
#### `Products schema`
#### `Categories schema`
#### `Class Model`
#### `get, post update, delete`
#### `router.js`



### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - 'mongodb://localhost:27017/class-08';

#### Running the app
* `nodemon`
* Endpoint:  get `/api/v1/categories`
  * Returns a JSON object with abc in it.
* Endpoint: post `/api/v1/categories`
  * Returns a JSON object with xyz in it.
* Endpoint:  get `/api/v1/categories/:id`
  * Returns a JSON object with abc in it.
* Endpoint: put `/api/v1/categories/:id`
  * Returns a JSON object with xyz in it.
* Endpoint: delete `/api/v1/categories/:id`
  * Returns a JSON object with abc in it.

* Endpoint: `/api/v1/products`
  * Returns a JSON object with xyz in it.
* Endpoint: `/api/v1/products`
  * Returns a JSON object with abc in it.
* Endpoint: `/api/v1/products/:id`
  * Returns a JSON object with xyz in it.
* Endpoint: `/api/v1/products/:id`
  * Returns a JSON object with abc in it.
* Endpoint: `/api/v1/products/:id`
  * Returns a JSON object with xyz in it.


  
#### Tests
* npm test with jest
* What assertions were made?
* What assertions need to be / should be made?

#### UML
![UML](./assets/uml.jpg)