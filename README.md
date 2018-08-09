# Amazon Product Details 

> An app meant to mimic a typical Amazon product page

## Related Projects

  - https://github.com/Viamis/Amazon-Service-TK
  - https://github.com/Viamis/Amazon-Service-CN
  - https://github.com/Viamis/Amazon-Service-ML
  - https://github.com/Viamis/Amazon-Service-HL

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD API

Insert new product:
```sh
POST /products
````

Get product by id:
```sh
GET /products/:id
```

Get product by name:
```sh
GET /products/name/:name
```

Modify product price:
```sh
PUT /products/:id/price/:price
```

Modify product questions:
```sh
PUT /products/:id/questions/:count
```

Modify product thumbnail:
```sh
PUT /products/:id/thumbnail/:thumbnail
```

Delete product by id:
```sh
DELETE /products/:id/brand/:brand
```
