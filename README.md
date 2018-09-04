# Product Info

A full-stack React module that recreates the product info section of an product listing page, including:

- Name
- Brand
- Price
- Description
- Variations
- Thumbnails

Each of these components is populated with mock data for 10,000,000 products. A sample of the structure of the mock data can be found here: https://gist.github.com/bcronin2/bc22fac67d988a5578650ec225a61801.

## CRUD API

This module is set up to handle the following CRUD operations. Note that the default URL is **localhost:3003**.

Add new product:
```sh
POST /products
````
> Payload data should match the format of the mock data linked to above, with the exception that **the product_options field should be omitted**.

Get product by id:
```sh
GET /products/:id
```
> Once the database has been seeded and connected, this will return a product object for ids 1-10,000,000.

Get product by name:
```sh
GET /products/name/:name
```
> Once the database has been seeded and connected, this will return a product object for product names 'aaaaaaa'-'jjjjjjj' (any 7-letter permutation of the letters a-j).

Update product info:
```sh
PATCH /products/:id
```
> Payload data should contain one or more key-value pairs from the mock data linked to above, with the exception that **the product_options field should be omitted**.

Delete product by id:
```sh
DELETE /products/:id
```

## Tech Used

This module is built on a CERN (Cassandra, Express, React, Node) stack.

### System Requirements

- Node >=6.7.0 (runtime environment)
- npm >=6.0 (dependency manager)
- Redis >=4.0 (cache)
- Cassandra >=3.0 (database)

### Prod Dependencies (installed with npm)

- body-parser (handling requests on server)
- cassandra-driver (database connections)
- cluster (Node clustering for multi-core server instances)
- compression (compress data sent from server)
- cors (handling cross-origin requests from proxy)
- dotenv (handling environment variables)
- express (server framework)
- faker (data generation)
- newrelic (performance monitoring)
- nodemon (running/watching server)
- os (detects number of CPUs for potential clustering)
- path (filesystem management)
- react (component library)
- react-dom (rendering component)
- redis (server-side caching)
- siege (local load testing)

## Development

This module is set up to run locally at **localhost:3003/[id from 1 to 10000000]**.

**By default, the static js and CSS bundles are served from S3. To serve from localhost, change the appropriate commented-out lines in public/index.html.**

> NOTE: All scripts below are to be run within the root directory.

### Installing Dependencies

```sh
npm install -g webpack
npm install
```

### Setting up database

```sh
npm run generate-data
```
> Creates a set of .tsv files containing mock data.
```sh
npm run cassandra-seed
```
> Seeds Cassandra db with data from .tsv files (you must have a local instance of [Cassandra](http://cassandra.apache.org/download/) 3.0+ running).

### Building client bundle 

#### Building Local Client Bundle

```sh
npm run build:dev
```
> NOTE: The files built in this way will only be served if you change the script tag used in public/index.html.

#### Building Client Bundle to S3

```sh
npm run build:prod
```
> NOTE: To build to S3, you will need to set up your own bucket and include an .aws.json file in this repo with your credentials.

#### Running Server

```sh
npm run start
```
> Starts redis server locally.

```sh
npm run start
```
> NOTE: This uses nodemon, so changes will update the server environment automatically.
